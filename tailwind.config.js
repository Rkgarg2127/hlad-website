/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        gray: {
          50:  '#fafafa',
          100: '#f4f4f4',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Semantic colors for easy theming
        background: {
          DEFAULT: '#fff',
          dark: '#000',
        },
        foreground: {
          DEFAULT: '#000',
          dark: '#fff',
        },
        primary: {
          DEFAULT: '#000',
          foreground: '#fff',
        },
        secondary: {
          DEFAULT: '#fff',
          foreground: '#000',
        },
        accent: {
          DEFAULT: '#ff5a36', // Example accent (orange), change as needed
          foreground: '#fff',
        },
        muted: {
          DEFAULT: '#f4f4f4',
          foreground: '#222',
        },
        border: {
          DEFAULT: '#e5e5e5',
        },
      },
    },
  },
  plugins: [],
};
