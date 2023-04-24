/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        phone: '425px'
      },
      colors: {
        primary: '#ee4d2d',
        header: '#d0011b',
        blue: '#05a',
        red: '#d0011b',
        rate: '#FFBB1C',
        product: '#FFFFFF',
        backg: '#F5F5F5',
        footer: '#FBFBFB',
        sort: '#EDEDED'
      },
      backgroundColor: {
        primary: '#ee4d2d',
        header: '#d0011b',
        red: '#d0011b'
      },
      backgroundImage: {
        bgPrimary: 'url("./src/assets/BackgroundPrimary.png")'
      },
      maxWidth: {
        primary: '1200px'
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
