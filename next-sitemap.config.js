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
        disallow: ['/dashboard', '/admin', '/api'],
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
  additionalPaths: async (config) => {
    const result = []
    try {
      if (process.env.DATABASE_URI) {
        const { Client } = require('pg')
        const client = new Client({ connectionString: process.env.DATABASE_URI })
        await client.connect()
        const res = await client.query(
          "SELECT slug, updated_at FROM posts WHERE status = 'published'"
        )
        await client.end()
        for (const row of res.rows) {
          result.push({
            loc: `/blog/${row.slug}`,
            changefreq: 'weekly',
            priority: 0.8,
            lastmod: row.updated_at ? new Date(row.updated_at).toISOString() : new Date().toISOString(),
          })
        }
      }
    } catch (err) {
      // Safe fallback if database is not reachable at build time
      console.warn('Could not query published posts for sitemap:', err.message)
    }
    return result
  },
}