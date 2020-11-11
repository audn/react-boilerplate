const withAlias = require('@blunck/next-alias')({
  '~': __dirname + '/src',
  '@root': __dirname + '/',
});

module.exports = withAlias({
  webpack: (cfg, { isServer }) => {
    cfg.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    });
    if (!isServer) {
      cfg.node = {
        fs: 'empty',
      };
    }
    return cfg;
  },
});
