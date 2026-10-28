/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kingdom: {
          blue: '#1E88E5',
          sky: '#64B5F6',
          yellow: '#FFCA28',
          sun: '#FFE082',
          coral: '#FF6F61',
          rose: '#FF8A80',
          green: '#2ECC71',
          mint: '#A8E6CF',
          purple: '#9B59B6',
          lavender: '#D7BDE2',
          navy: '#0E2A47',
          dark: '#1C2D3D',
          cream: '#FFFDF9',
        }
      },
      fontFamily: {
        fredoka: ['Fredoka', 'cursive', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        floatCloud: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gentleWiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        sparkleRotate: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.15)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        }
      },
      animation: {
        float: 'floatCloud 5s ease-in-out infinite',
        wiggle: 'gentleWiggle 3s ease-in-out infinite',
        bounceSubtle: 'bounceSubtle 2.5s ease-in-out infinite',
        sparkle: 'sparkleRotate 6s linear infinite',
      }
    },
  },
  plugins: [],
}
