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
          light: '#beb4b4',
          DEFAULT: '#eeede8',
          dark: '#635a4f'
        },
        offwhite: {
          DEFAULT: '#fbfffe'
        },
        offgray: {
          DEFAULT: '#8e8384'
        }
      },
      fontFamily: {
        'lato': ['Lato'],
        'josefin': ['Josefin Sans']
      },
      width: {
        '530': '530px'
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
