const colors = require('./tailwind.colors')

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
