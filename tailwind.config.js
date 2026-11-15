/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#eaf7fe',
          100: '#d4effc',
          200: '#bfe8fb',
          300: '#bfe8fb',
          400: '#5fb0e0',
          500: '#0b6fb8',
          600: '#0b6fb8',
          700: '#095f9e',
          800: '#074e83',
          900: '#012441',
          950: '#012441',
        },
        navy: {
          DEFAULT: '#012441',
          light: '#0b3a63',
          dark:  '#012441',
        },
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 8px 24px -4px rgb(0 0 0 / 0.08)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 16px 40px -8px rgb(0 0 0 / 0.12)',
      },
    },
  },
  plugins: [],
}
