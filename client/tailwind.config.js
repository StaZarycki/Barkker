module.exports = {
  //mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brown': '#31220D',
        'brown-dark': '#24191D',
        'brown-darker': '#181113',
        'brown-light': '#302226',
        'brown-lighter': '#C6AD94',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
