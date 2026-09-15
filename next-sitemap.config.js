/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.triportlogistic.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority per page
    const priorities = {
      '/': 1.0,
      '/services': 0.9,
      '/blog': 0.85,
      '/about': 0.8,
      '/contact': 0.7,
    }

    const changefreqs = {
      '/': 'weekly',
      '/services': 'weekly',
      '/blog': 'weekly',
      '/about': 'monthly',
      '/contact': 'monthly',
    }

    return {
      loc: path,
      changefreq: changefreqs[path] ?? 'monthly',
      priority: priorities[path] ?? 0.6,
      lastmod: new Date().toISOString(),
    }
  },
}