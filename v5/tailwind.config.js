/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reinado: {
          // Azul Sereno (Confiança & Calma)
          celeste: '#2B7CB8',
          'celeste-dark': '#1E5A87',
          'celeste-light': '#F1F7FC',
          // Amarelo Mel Suave (Calor & Infância)
          sol: '#F3C969',
          'sol-dark': '#7D5A10',
          'sol-light': '#FDF9EF',
          // Verde Sálvia / Folha Suave (Natureza & Horta)
          limao: '#3E8E63',
          'limao-dark': '#286042',
          'limao-light': '#F2F9F5',
          // Terracota / Coral Suave (Conversão Acolhedora)
          tangerina: '#E06D44',
          'tangerina-dark': '#B8522E',
          'tangerina-light': '#FDF3EF',
          // Rosa Malva & Lavanda Suaves (Acentos Delicados)
          chiclete: '#C86D88',
          'chiclete-light': '#FBF3F5',
          uva: '#6D62A8',
          'uva-light': '#F4F3FA',
          // Base & Texto Sóbrio
          ink: '#1E2D3D',
          slate: '#52657A',
          canvas: '#FAF9F5',
        }
      },
      fontFamily: {
        fredoka: ['Fredoka', 'Quicksand', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'Nunito', 'sans-serif'],
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      boxShadow: {
        'sticker': '0 10px 28px -6px rgba(30, 45, 61, 0.07), 0 2px 6px -1px rgba(30, 45, 61, 0.04)',
        'sticker-sm': '0 4px 14px -3px rgba(30, 45, 61, 0.06)',
        'sticker-lg': '0 20px 42px -10px rgba(30, 45, 61, 0.12)',
        'soft-glow': '0 16px 36px -10px rgba(43, 124, 184, 0.14)',
      }
    },
  },
  plugins: [],
}
