/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
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
    },
    scale: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '175': '1.75',
      '200': '2'
    }
  },
  plugins: [],
}
