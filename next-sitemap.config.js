/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://align-items.center',
  generateRobotsTxt: true,
  autoLastmod: false,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // disallow: [],
      },
    ],
  },
  sitemapSize: 7000,
};
