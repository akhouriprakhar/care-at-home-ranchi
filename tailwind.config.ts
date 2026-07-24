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
          lime: "#8EC63F",
          teal: "#20AD96",
          surface: "#F4F8F9",
        },
        navy: {
          DEFAULT: "#0C364A",
          dark: "#072331",
        },
        lime: {
          DEFAULT: "#8EC63F",
        },
        teal: {
          DEFAULT: "#20AD96",
        },
        surface: {
          DEFAULT: "#F4F8F9",
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        serif: ['var(--font-serif)', 'Merriweather', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(7, 35, 49, 0.25)',
        'neon-teal': '0 0 20px rgba(32, 173, 150, 0.25)',
        'neon-lime': '0 0 20px rgba(142, 198, 63, 0.25)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config;
