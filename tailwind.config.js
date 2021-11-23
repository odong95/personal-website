module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tealalt: {
          DEFAULT: '#99c7c5'
        },
        tanalt: {
          DEFAULT: '#eeede8'
        }
      },
      fontFamily:{
        'lato': ['Lato'],
        'josefin': ['Josefin Sans']
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
