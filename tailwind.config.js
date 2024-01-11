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
      // https://github.com/tailwindlabs/tailwindcss/discussions/2599#discussioncomment-2965375
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'radial-splash-br': 'radial-gradient(circle 800px at 100% 100%, var(--tw-gradient-stops))'
      },
      colors: {
        // // Light-Blue Theme
        // // Primary Colors
        // 'primary': "#0f172a", // No match, closest: grey-900
        // 'secondary': "F3F4F6", // No match, closest: grey-100
        // 'accent': "#DBEAFE", // blue-100

        // // Background Colors
        // 'background': "#ffffff", // white
        // 'companyCardBg': "#f7f7f7", // No match, closest: grey-100
        // 'card': "#ffffff", // white
        // 'popover': "#ffffff", // white

        // 'bgPrimary': "#F3F4F6", // white
        // 'bgFadeTo': "#93C5FD", // white
        // 'bgLineColor': "#D1D5DB", // grey-300
        // 'bgColorSplash': "#BFDBFE", // blue-200

        // // Interactive Element Colors
        // 'border': "#e2e8f0", // No match, closest: grey-300
        // 'cardSheen': "#ffffff", // white
        // 'cardSheenHover': "#F3F4F6", // No match, closest: grey-100

        // // Link Colors
        // 'link': "#2563EB", // blue-600
        // 'linkUnderlineStart': "#3B82F6", // blue-500
        // 'linkUnderlineEnd': "#93C5FD", // blue-300
        // 'cardLinkOutline': "#3B82F6", // blue-500
        // 'cardSheenHoverLink': "#DBEAFE", // blue-100

        // // Grainy Title Card
        // 'titleFrom': "#1E40AF", // blue-800 
        // 'titleVia': "#2563EB", // blue-600
        // 'titleTo': "#4F46E5", // indigo-600

        // // Text/Foreground Colors
        // 'foreground': "#1F2937", // No match, closest: grey-800
        // 'muted': "#D1D5DB", // No match, closest: grey-300

        // // Status and Notification Colors
        // 'destructive': "#DC2626", // red-600

        // Light Orange Theme
        // Primary Colors
        'primary': "#0f172a", // No match, closest: grey-900
        'secondary': "F3F4F6", // No match, closest: grey-100
        'accent': "#DBEAFE", // blue-100

        // Background Colors
        'background': "#D4D4D4", // neutral-300
        'companyCardBg': "#f7f7f7", // No match, closest: grey-100
        'card': "#ffffff", // white
        'popover': "#ffffff", // white

        'bgPrimary': "#D4D4D4", // neutral-300
        'bgFadeTo': "#93C5FD", // white
        'bgLineColor': "#A3A3A3", // neutral-400
        'bgColorSplash': "NULL", // blue-200

        // Interactive Element Colors
        'border': "#C2C0BE", // between neutral 300 and 400
        'cardSheen': "#ffffff", // white
        'cardSheenHover': "#F3F4F6", // No match, closest: grey-100

        // Link Colors
        'link': "#C2410C", // orange-600
        'linkUnderlineStart': "#F97316", // orange-500
        'linkUnderlineEnd': "#FDBA74", // orange-300
        'cardLinkOutline': "#F97316", // orange-500
        'cardSheenHoverLink': "#FFEDD5", // orange-100

        // Grainy Title Card
        'titleFrom': "#9A3412", // orange-800 
        'titleVia': "#EA580C", // orange-600
        'titleTo': "#D97706", // amber-600

        // Text/Foreground Colors
        'foreground': "#1F2937", // No match, closest: grey-800
        'muted': "#D1D5DB", // No match, closest: grey-300

        // Status and Notification Colors
        'destructive': "#DC2626", // red-600

        // Dark theme colors
        // dark: {
        //   'background': 'slate-900',
        //   'card': 'slate-900',
        //   'popover': 'slate-900',
        //   'primary': 'orange-400',
        //   'secondary': 'gray-700',
        //   'muted': 'gray-700',
        //   'accent': 'gray-700',
        //   'destructive': 'red-700',
        //   'border': 'slate-800',
        //   'input': 'gray-700',
        //   'ring': 'blue-200',
        //   'dot-color': 'slate-800',
        //   'companyCardBg': 'slate-900',
        //   'cardSheen': 'slate-800',
        //   'cardSheenHover': 'slate-700',
        //   'bgColorSplash': 'purple-900',
        // },
        
        
      },
      borderRadius: {
        // Rounded
        // lg: "0.5rem",
        // md: "calc(0.5rem - 2px)",
        // sm: "calc(0.5rem - 4px)",
        // Not rounded
        xl: "0",
        lg: "0",
        md: "0",
        sm: "0",
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