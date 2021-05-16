module.exports = {
  brand: {
    primary: {
      50: '#2357ce', // hover,  dark version
      100: '#3371ff', // !main brand color
      150: '#467df9', // hover on brand color
      300: '#759fff', // good for borders on anything brand related
    },
    secondary: {
      50: '#23395f',
      100: '#29416b',
      150: '#304871',
      300: '#324f80',
    },
  },

  /*
   "types" are global colors that can be used as universal colors, but avoid depending on them!
   it's way better to split them up into a new category if you use a few of them regulary

   ex:
   instead of using "bg-types-250" for input fields, add the "types-250" color to "bg-input-{:name}" instead!
   reason: if you change any colors below, a lot (depending on how often you've used types) -
   will change, and that's when you know you've fucked up

   look at types as a collection of your most used colors, but use them wisely.
   */
  types: {
    100: '#132035',
    150: '#1a2b46',
    200: '#',
    250: '#',
    300: '#',
  },

  //
  //    This is what the preferred structure looks like
  //
  //    yourName: {
  //     50: dark bg hover
  //     100: main bg color
  //     150: border or weak hover color
  //     200: bg hover color
  //      icon: {
  //       50: dark icon bg
  //       100: main bg color for icon
  //       150: border or weak hover color
  //       200: icon hover color
  //      }
  //    }
  //
  lightpill: {
    100: '#132035',
    150: '#1a2b46',
  },
  card: {
    post: {
      100: '#132035',
    },
  },
  header: {
    50: '#',
    100: '#0e182a',
    150: '#132035', // border
    200: '#',
    nav: {
      100: '#132035',
    },
    icon: {
      50: '#',
      100: '#',
      150: '#',
      200: '#',
    },
    search: {
      50: '#',
      100: '#',
      150: '#',
      200: '#',
    },
  },
  modal: {
    50: '#',
    100: '#1c2b46',
    150: '#243552',
    200: '#',
  },
  footer: {
    50: '#',
    100: '#0e182a',
    150: '#',
    icon: {
      50: '#',
      100: '#',
      150: '#',
      200: '#',
    },
  },
  hero: {
    50: '#',
    100: '#132035',
    150: '#',
  },
  /*
   don't add primary or secondary to the button:{}!
   you'll end up having to change multiple colors if your brand colors ever change.
   just use "bg-brand-<primary|secondary>"
   */
  button: {
    footer: {
      50: '#',
      100: '#333f54',
      150: '#495672',
      300: '#',
    },
  },

  // input fields for each main background color

  input: {
    naked: {
      100: '#132035', // body
      150: '#182944', // border
      200: '#293d5a', // hover
      800: '#95a3b6', // placeholder
      900: '#7a8eb3', // text color
    },
  },

  // we use 'on' for "text-on{:object}"
  // 800: placeholder color
  // 900: text color

  on: {
    naked: {
      800: '#92a3c3', // text
      900: '#c0cfec', // title
    },
    header: {
      900: '#7d8aa2',
      nav: {
        800: '#7d8aa2',
        900: '#ffffff',
      },
      // icon: {},
      // search: {},
    },
    ligtpill: {
      800: '#92a3c3',
      900: '#ffffff',
    },
    modal: {
      900: '#7591c1',
      icon: {
        900: '#c0cfec',
      },
    },
    card: {
      post: {
        700: '#92a3c3', //  date
        800: '#bccae0', //  text
        900: '#cfddf1', //  title
      },
    },
    hero: {
      900: '#bccae0',
    },
    button: {
      secondary: {
        900: '#bcc0c6',
      },
      footer: {
        900: '#c0c4c9',
      },
    },
    footer: {
      900: 'bccae0',
    },
  },
};
