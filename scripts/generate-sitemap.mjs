import { projects } from '../src/data/projects.js';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const slugs = projects.map((project) => project.slug);

const SITE_URL = 'https://ai-levels-lab.uk';
// Omit lastmod until genuine page modification dates are available.

const staticRoutes = ['/', '/method', '/services', '/about', '/contact'];
const projectRoutes = slugs.map(s => `/work/${s}`);

const urls = [
  ...staticRoutes.map((path) => ({
    loc: `${SITE_URL}${path === '/' ? '/' : `${path}/`}`,
    priority: path === '/' ? '1.0' : '0.8',
  })),
  ...projectRoutes.map(path => ({
    loc: `${SITE_URL}${path === '/' ? '/' : `${path}/`}`,
    priority: '0.7',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(resolve(ROOT, 'dist/sitemap.xml'), xml);
console.log(`Sitemap generated with ${urls.length} URLs`);
