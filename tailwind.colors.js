module.exports = {
  brand: {
    'primary': '#3371ff', // main brand color
    'primary-dark': '#2357ce', // hover version
    'primary-light': '#467df9',
    'primary-lighter': '#759fff', // hover version

    'secondary': '#23344e',
    'secondary-dark': '#1d2c44',
    'secondary-light': '#2a3e5d',
    'secondary-lighter': '#486086',
  },
  types: {
    25: '#0e182a', // body
    50: '#132035', // typical border
    75: '#132035', // hero || content
    100: '#162640', // placeholder
    150: '#222f44',
  },

  header: {
    25: '#0e182a',
    125: '#132035',
    // 200: '#656565',
  },

  footer: {
    25: '#0e182a',
  },

  button: {
    header: {},
    hero: {},
    footer: {
      25: '#333f54', // base color (bg)
      50: '#495672', // hover color (bg)
      text: '#c0c4c9', // default text color
    },
    universal: {},
  },

  // input fields for each main background color
  input: {
    footer: {},
    hero: {
      label: '#',
      25: '#192840', // body
      50: '#1d2e48', // border
      75: '#293d5a', // hover
      200: '#6681ab', // placeholder
    },
    naked: {
      label: '#7a8eb3',
      25: '#132035', // body
      50: '#182944', // border
      75: '#293d5a', // hover
      200: '#95a3b6', // placeholder
    },
    universal: {},
  },

  // we use 'on' for "text-on{:object}"
  on: {
    header: '#7d8aa2', // text on header-25
    naked: { default: '#92a3c3', blue: '#81a7ff' }, // text on types-25
    hero: { title: '#cfddf1', default: '#bccae0', blue: '#9eddf8' }, // text on types-75
    button: {
      secondary: '#bcc0c6',
      ghost: '#bcc0c6',
    },
    footer: '#bccae0',
  },
};
