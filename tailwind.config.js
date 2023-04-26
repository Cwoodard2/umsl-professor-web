const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        webGreen: '#669488',
        footerGrey: '#2D2D2D',
        webBlue: '#355A86'
      },
      backgroundImage: {
        'class-card': url('./src/images/manhattan-585245881-59864e706f53ba0011d47eea.jpg')
      },
      animation: {
        inOut: 'fadeIn 0.35s forwards linear'
      },
      keyframes: {
        inOut: {
          '0%': { transform: 'translateY(-10vw)' },
          '100%': { transform: 'translateY(0vw)' },
        },
        fadeIn: {
          '0%': { transform: 'translateY(2vh)', opacity: '0%' },
          '100%': { transform: 'translateY(0vw)', opacity: '100%' },
        }
    }
  },
  plugins: [],
}
}
