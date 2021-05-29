let colors = require('./tailwind.colors.js');
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
       'fit-content': 'fit-content'
      },
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
