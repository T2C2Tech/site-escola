/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E63946',
          dark: '#b7102a',
          light: '#ffdad8'
        },
        secondary: {
          DEFAULT: '#2B90D9',
          dark: '#00639c',
          light: '#edf4ff'
        },
        tertiary: {
          DEFAULT: '#F6C343',
          dark: '#755700'
        },
        surface: {
          DEFAULT: '#FAFCFE',
          dim: '#c9dcf3',
          card: '#FFFFFF'
        },
        graphite: '#203243',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
