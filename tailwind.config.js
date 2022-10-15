let colors = require('./tailwind.colors.js');
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
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
