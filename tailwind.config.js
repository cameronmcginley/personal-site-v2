/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using 'class' strategy
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Light theme colors
        'border': "gray-200",
        'input': "gray-200",
        'ring': "blue-600",
        'background': "white",
        'foreground': "gray-800",
        'company-card-bg': "gray-100",
        'card-sheen': "white",
        'bg-color-highlight': "purple-200",
        'card-sheen-hover': "purple-100",
        'primary': "blue-900",
        'secondary': "gray-100",
        'destructive': "red-600",
        'muted': "gray-300",
        'accent': "blue-100",
        'popover': "white",
        'card': "white",

        // Dark theme colors
        dark: {
          'background': 'slate-900',
          'card': 'slate-900',
          'popover': 'slate-900',
          'primary': 'orange-400',
          'secondary': 'gray-700',
          'muted': 'gray-700',
          'accent': 'gray-700',
          'destructive': 'red-700',
          'border': 'slate-800',
          'input': 'gray-700',
          'ring': 'blue-200',
          'dot-color': 'slate-800',
          'company-card-bg': 'slate-900',
          'card-sheen': 'slate-800',
          'card-sheen-hover': 'slate-700',
          'bgcolorhighlight': 'purple-900',
        },
        
        
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        "fade-in": {
          "0%": {
            "opacity": "0"
          },
          "100%": {
            "opacity": "1"
          }
        },
        "fade-in-up": {
          "0%": {
            "opacity": "0",
            "transform": "translateY(20px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateY(0)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blob": "blob 40s infinite",
        // https://animation.ibelick.com/
        "fade-in": "fade-in 0.6s ease-in",
        "fade-in-up": "fade-in-up 0.6s ease-in-out",
      },
      animationDelay: {
        '0': '0s',
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '600': '0.6s',
        '700': '0.7s',
        '800': '0.8s',
        '900': '0.9s',
        '1000': '1s',
        // Add more delays as needed
      },
      animationFillMode: {
        'forwards': 'forwards',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
    require('tailwindcss-patterns'),
    require('tailwindcss-3d'),
    // For animation delays (starts after page load)
    // For fade in with delay, add opacity-0
    function ({ addUtilities, theme, variants }) {
      const animationDelayUtilities = Object.entries(theme('animationDelay')).map(([key, value]) => {
        return {
          [`.delay-${key}`]: { 'animation-delay': value },
        };
      });
      addUtilities(animationDelayUtilities, variants('animationDelay'));
    },
    // Adding 'fill-forwards' will keep the last frame of the animation
    // Rather than reset to original. Needed for fading in with
    // delay and opacity-0
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.fill-forwards': { 'animation-fill-mode': 'forwards' },
      };
      addUtilities(newUtilities);
    }
  ],
}