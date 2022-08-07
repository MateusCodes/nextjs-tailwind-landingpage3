/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bookmarkPurple: '#5267DF',
        bookmarkRed: '#FA5959',
        bookmarkBlue: '#242A45',
        bookmarkGrey: '#9194A2',
        bookmarkWhite: '#f7f7f7'
      }
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif']
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1200px',
        xl: '1200px',
        '2xl': '1200px'
      }
    }
  },
  plugins: [require('daisyui')],
};
