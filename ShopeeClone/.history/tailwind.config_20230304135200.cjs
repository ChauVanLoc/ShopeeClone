/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ee4d2d',
        header: '#d0011b'
      },
      backgroundColor: {
        primary: '#ee4d2d',
        header: '#d0011b',
        blue: '#05a'
      },
      backgroundImage: {
        bgPrimary: "url('https://cf.shopee.vn/file/5569eb9dc7e09e2dbed5315b8f2ea8ba')"
      },
      maxWidth: {
        primary: '1200px'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
