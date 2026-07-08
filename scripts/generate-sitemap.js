import fs from 'fs';
import { workData, blogData } from '../src/data/cms.ts';

const generateSitemap = () => {
  const baseUrl = 'https://www.mabdullahdevx.online';
  
  const staticRoutes = [
    '/',
    '/work',
    '/blog',
  ];

  const workRoutes = workData.map((project) => `/work/${project.slug}`);
  const blogRoutes = blogData.map((post) => `/blog/${post.slug}`);

  const allRoutes = [...staticRoutes, ...workRoutes, ...blogRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>
  `;

  fs.writeFileSync('./public/sitemap.xml', sitemap);
  console.log('Sitemap generated at ./public/sitemap.xml');
};

generateSitemap();
