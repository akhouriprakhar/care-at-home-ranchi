import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0C364A",
          deepNavy: "#072331",
          teal: "#20AD96",
          lime: "#8EC63F",
          surface: "#F8FAFC",
        },
        navy: {
          DEFAULT: "#0C364A",
          dark: "#072331",
        },
        teal: {
          DEFAULT: "#20AD96",
          brand: "#20AD96",
        },
        lime: {
          DEFAULT: "#8EC63F",
          brand: "#8EC63F",
        },
        surface: {
          DEFAULT: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(12, 54, 74, 0.25)',
        'neon-teal': '0 0 20px rgba(32, 173, 150, 0.25)',
        'neon-lime': '0 0 20px rgba(142, 198, 63, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config;