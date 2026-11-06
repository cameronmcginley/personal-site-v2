# Builds everything index.html loads from the source files in originals/:
#   assets/       resized images (AVIF with WebP fallbacks), the looping thumbnails, the enlarged views
#   favicon.ico   at the site root
#   index.html    the organization logos, written into the page as data URIs
# The originals are never changed.
#
#   uv run --with pillow --with fonttools --with brotli tools/make-assets.py            images, videos, logos
#   uv run --with pillow --with fonttools --with brotli tools/make-assets.py --fonts    also re-cut the fonts
#
# Needs ffmpeg (with libvpx-vp9) on the PATH for the looping thumbnails.
import base64, io, os, re, subprocess, sys, urllib.parse, urllib.request
from PIL import Image

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
ORIG = os.path.join(ROOT, 'originals')
OUT = os.path.join(ROOT, 'assets')
PAGE = os.path.join(ROOT, 'index.html')
os.makedirs(OUT, exist_ok=True)
made = []


def save(im, name, **kw):
    im.save(os.path.join(OUT, name), **kw)
    made.append(name)


def copy(src, name):
    with open(src, 'rb') as a, open(os.path.join(OUT, name), 'wb') as b:
        b.write(a.read())
    made.append(name)


def load(path):
    """Open as RGB with no color profile. Every source is sRGB, which browsers assume, and the
    headshot's embedded sRGB profile alone is 6.9 KB."""
    im = Image.open(path).convert('RGB')
    im.info = {}
    return im


def both(im, name, avif=55, webp=80):
    """AVIF for browsers that take it, WebP for the rest."""
    save(im, f'{name}.avif', quality=avif, speed=0)
    save(im, f'{name}.webp', quality=webp, method=6)


def cover(im, w, h):
    """Crop from the top left to the w:h shape, then scale: the same crop the page's CSS makes."""
    W, H = im.size
    cw, ch = (round(H * w / h), H) if W * h > H * w else (W, round(W * h / w))
    return im.crop((0, 0, cw, ch)).resize((w, h), Image.LANCZOS)


def fit(im, size):
    """Scale to fit in a size x size square, keeping the shape."""
    im = im.copy()
    im.thumbnail((size, size), Image.LANCZOS)
    return im


# Portrait: shown 8rem (128px) wide on a desktop and 5.25rem (84px) on a phone, so 128, 192 and 256 wide.
head = load(os.path.join(ORIG, 'headshot.webp'))
for w in (128, 192, 256):
    both(head.resize((w, round(head.height * w / head.width)), Image.LANCZOS), f'headshot-{w}', avif=48, webp=72)

# Thumbnails: the CSS shows the top left of each picture in a 4:3 box, 8rem (6rem for older projects) wide,
# so they are cut to that box here at 1x and 2x. The two looping projects rest on a still frame, cut the same way.
for k in ('sitewatch', 'brainfk', 'projectile-points', 'course-signin', 'ml-test', 'sorting-vis-still', 'rblx-placement-still'):
    im = load(os.path.join(ORIG, 'projects', f'{k}.webp'))
    for w in (128, 256):
        both(cover(im, w, w * 3 // 4), f'thumb-{k.removesuffix("-still")}-{w}')
# The paper's diagram is shown whole (object-fit: contain) in its box.
layers = load(os.path.join(ORIG, 'projects', 'layers.webp'))
for s in (96, 192):
    both(fit(layers, s), f'thumb-layers-{s}')

# Enlarged views load only when one is opened, so they keep the full pictures and demos, copied as they are.
for k in ('layers', 'sitewatch', 'brainfk', 'projectile-points', 'course-signin', 'ml-test'):
    copy(os.path.join(ORIG, 'projects', f'{k}.webp'), f'plate-{k}.webp')


def ffmpeg(*args):
    subprocess.run(['ffmpeg', '-v', 'error', '-y', *args], check=True)


# Looping thumbnails: the top left 4:3 of each demo at 256x192, the size it is shown, in VP9 with no sound.
for k in ('sorting-vis', 'rblx-placement'):
    src = os.path.join(ORIG, 'projects', f'{k}.webm')
    vf = "crop='min(iw,ih*4/3)':'min(ih,iw*3/4)':0:0,scale=256:192:flags=lanczos"
    common = ['-i', src, '-vf', vf, '-an', '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '38', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '1']
    log = os.path.join(OUT, f'.{k}')
    ffmpeg(*common, '-pass', '1', '-passlogfile', log, '-f', 'null', os.devnull)
    ffmpeg(*common, '-pass', '2', '-passlogfile', log, os.path.join(OUT, f'loop-{k}.webm'))
    for leftover in os.listdir(OUT):
        if leftover.startswith(f'.{k}'):
            os.remove(os.path.join(OUT, leftover))
    made.append(f'loop-{k}.webm')
    copy(src, f'plate-{k}.webm')

# Favicon: the 32px icon, stored as PNG inside the .ico, at the root where browsers look for it.
Image.open(os.path.join(ORIG, 'favicon.ico')).convert('RGBA').save(os.path.join(ROOT, 'favicon.ico'), sizes=[(32, 32)])

# Logos: shown 20px square (about 18px on a phone), so 40px. They are written straight into index.html as
# data URIs, which saves seven requests. The seals with transparency are smaller as 64-color PNGs.
LOGOS = {  # the name in the page's <b> after the logo: (source file, format)
    'Northrop Grumman Space Systems': ('northrop.png', 'webp'),
    'Capital One': ('capitalone.jpg', 'webp'),
    'U.S. Government': ('usg.jpg', 'webp'),
    'NetApp': ('netapp.svg', 'svg'),
    'Purdue University': ('purdue.svg', 'svg'),
    'Wichita State University': ('wsu.png', 'png'),
    'University of California San Diego': ('ucsd.png', 'png'),
}


def logo_uri(f, fmt):
    path = os.path.join(ORIG, 'logos', f)
    if fmt == 'svg':
        svg = open(path).read()
        svg = re.sub(r'<\?xml.*?\?>|<!--.*?-->', '', svg, flags=re.S)
        svg = re.sub(r'\s+id="[^"]*"', '', svg)
        opening = re.search(r'<svg\b[^>]*>', svg).group(0)
        svg = svg.replace(opening, re.sub(r'\s+(?:version|x|y|width|height|enable-background|xml:space|xmlns:svg|xmlns:xlink)="[^"]*"', '', opening))
        svg = re.sub(r'>\s+<', '><', svg).strip()
        return 'data:image/svg+xml,' + urllib.parse.quote(svg.replace('"', "'"), safe=" '/=:.,-")
    im = Image.open(path).convert('RGBA')
    im = im.crop(im.getbbox() or (0, 0, *im.size))
    side = max(im.size)  # pad to a square on a transparent sheet, so object-fit has nothing left to do
    sheet = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    sheet.paste(im, ((side - im.width) // 2, (side - im.height) // 2))
    im = sheet.resize((40, 40), Image.LANCZOS)
    if im.getextrema()[3][0] == 255:
        im = im.convert('RGB')
    b = io.BytesIO()
    if fmt == 'png':
        im.quantize(64, method=Image.Quantize.FASTOCTREE).save(b, format='PNG', optimize=True)
    else:
        im.save(b, format='WEBP', quality=80, method=6)
    return f'data:image/{fmt};base64,' + base64.b64encode(b.getvalue()).decode()


page = open(PAGE).read()
uris = {name: logo_uri(*v) for name, v in LOGOS.items()}
seen = set()


def inline(m):
    seen.add(m.group(3))
    return m.group(1) + uris[m.group(3)] + m.group(2) + m.group(3)


page = re.sub(r'(<img class="logo" src=")[^"]*("[^>]*><b>)(' + '|'.join(map(re.escape, LOGOS)) + ')', inline, page)
missing = set(LOGOS) - seen
if missing:
    sys.exit(f'no logo spot in index.html for: {", ".join(sorted(missing))}')
with open(PAGE, 'w') as fh:
    fh.write(page)

# Fonts: Charis SIL regular and bold, cut down to the printable ASCII the page uses.
# Only devices without Charter (Windows, Android, Linux) ever download them. They keep their copyright
# and license records, and assets/OFL.txt is the SIL Open Font License they are shared under.
FONTS = {
    400: 'https://fonts.gstatic.com/s/charissil/v2/oPWK_kV3l-s-Q8govXvKnP3sYxR1Tnw.woff2',
    700: 'https://fonts.gstatic.com/s/charissil/v2/oPWJ_kV3l-s-Q8govXvKlEbJdjlXQ1aUxks.woff2',
}
if '--fonts' in sys.argv:
    from fontTools import subset
    for w, url in FONTS.items():
        full = os.path.join(OUT, f'.charis-{w}-full.woff2')
        urllib.request.urlretrieve(url, full)
        subset.main([full, '--unicodes=U+0020-007E', '--layout-features=*', '--flavor=woff2', '--no-hinting',
                     '--desubroutinize', '--name-IDs=0,1,2,3,4,5,6,13,14', f'--output-file={os.path.join(OUT, f"charis-{w}.woff2")}'])
        os.remove(full)
        made.append(f'charis-{w}.woff2')
    urllib.request.urlretrieve('https://raw.githubusercontent.com/google/fonts/main/ofl/charissil/OFL.txt', os.path.join(OUT, 'OFL.txt'))
    made.append('OFL.txt')

for name in sorted(set(made)):
    print(f'{os.path.getsize(os.path.join(OUT, name)):>8,}  assets/{name}')
print(f'{os.path.getsize(os.path.join(ROOT, "favicon.ico")):>8,}  favicon.ico')
print(f'   {len(uris)} logos written into index.html')
