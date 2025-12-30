import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2b6cee',
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        'background-light': '#f6f6f8',
        'background-dark': '#111722',
        'card-dark': '#192233',
        'border-dark': '#232f48',
        'text-secondary': '#92a4c9',
        'surface-light': '#ffffff',
        'surface-dark': '#1b2537',
        'secondary-text': '#92a4c9',
      },
      fontFamily: {
        display: ['Lexend', 'Noto Sans', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config

