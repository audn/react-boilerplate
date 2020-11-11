const colors = {
  discord: {
    100: '#1798e5',
  },
};

module.exports = {
  theme: {
    extend: { colors },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: ['tailwindcss', 'postcss-preset-env'],
  purge: false,
};
