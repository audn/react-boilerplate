module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  module.exports = {
  async redirects() {
    return [
      {
        source: '/(.*)/components/(.*)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/screens/(.*)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/modals/(.*)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/components',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/screens',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/modals',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/(.*)/components',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/(.*)/screens',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/(.*)/modals',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

};
