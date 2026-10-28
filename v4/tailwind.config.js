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
          // Azul-Celeste Vivo
          celeste: '#0096FF',
          'celeste-dark': '#006BB8',
          'celeste-light': '#E5F5FF',
          // Amarelo-Sol
          sol: '#FFC700',
          'sol-dark': '#735400',
          'sol-light': '#FFF9DB',
          // Verde-Limão
          limao: '#65C11F',
          'limao-dark': '#266E08',
          'limao-light': '#EEFAD8',
          // Laranja-Tangerina (Conversão Red Balloon)
          tangerina: '#FF6B00',
          'tangerina-dark': '#CC5200',
          'tangerina-light': '#FFF0E5',
          // Base & Alto Contraste (Visconde de Porto Seguro)
          ink: '#0F2537',
          slate: '#334E68',
          canvas: '#F8FCFF',
        }
      },
      fontFamily: {
        fredoka: ['Fredoka', 'Quicksand', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'Nunito', 'sans-serif'],
      },
      boxShadow: {
        'tactile-tangerina': '0 6px 0 #CC5200, 0 14px 28px rgba(255, 107, 0, 0.32)',
        'tactile-celeste': '0 6px 0 #006BB8, 0 14px 28px rgba(0, 150, 255, 0.25)',
        'tactile-limao': '0 6px 0 #3E8E14, 0 14px 28px rgba(101, 193, 31, 0.25)',
        'card-clean': '0 14px 34px -8px rgba(15, 37, 55, 0.08), 0 0 0 1px rgba(0, 150, 255, 0.12)',
      }
    },
  },
  plugins: [],
}

