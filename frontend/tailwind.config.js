/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          300: '#FFC670',
          400: '#FFAB40',
          500: '#FF9A1F',
          600: '#F5820B',
          700: '#D66A00',
        },
        dark: {
          900: '#000000',
          800: '#0A0A0A',
          700: '#141414',
          600: '#202020',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 154, 31, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 154, 31, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
