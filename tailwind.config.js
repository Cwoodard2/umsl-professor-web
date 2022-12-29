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
      }
    }
  },
  plugins: [],
}
