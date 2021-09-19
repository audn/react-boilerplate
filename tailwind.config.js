let colors = require('./tailwind.colors.js');
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'fit-content': 'fit-content',
      },
      colors,
      screens: {
        'xs': '475px',
        'xxs': '240px',
        'md-plus': '870px',
        '1xl': '1500px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
