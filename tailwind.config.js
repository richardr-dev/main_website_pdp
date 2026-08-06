/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        navy: {
          DEFAULT: '#0f2d5c',
          light: '#1a3d7a',
          dark:  '#0a1f3e',
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
