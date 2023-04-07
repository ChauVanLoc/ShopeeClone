/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ee4d2d',
        header: '#d0011b',
        blue: '#05a',
        red: '#d0011b',
        start: '#FFBB1C'
      },
      backgroundColor: {
        primary: '#ee4d2d',
        header: '#d0011b',
        red: '#d0011b'
      },
      backgroundImage: {
        bgPrimary: "url('https://cf.shopee.vn/file/5569eb9dc7e09e2dbed5315b8f2ea8ba')"
      },
      maxWidth: {
        primary: '1200px'
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}
