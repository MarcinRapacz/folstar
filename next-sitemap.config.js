/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    if (path === "/favicon.ico") {
      return null;
    }

    if (path === "/privacy-policy") {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 0.1,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }

    if (path === "/") {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
