module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {},
    'postcss-nested': {},
    ...(process.env.NODE_ENV === `production`
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [`./src/**/*.js`],
            defaultExtractor: (content) =>
              content.match(/[A-Za-z0-9-_:/]+/g) || []
          },
          autoprefixer: {}
        }
      : {})
  }
}
