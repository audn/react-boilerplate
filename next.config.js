const withAlias = require('@blunck/next-alias')({
  '~': __dirname + '/src',
  '@root': __dirname + '/'
})

module.exports = withAlias({
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader'
    })
    return cfg
  }
})
