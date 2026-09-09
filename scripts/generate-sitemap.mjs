import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const projectsFile = readFileSync(resolve(ROOT, 'src/data/projects.js'), 'utf-8');
const slugs = [...projectsFile.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

const SITE_URL = 'https://ai-levels-lab.uk';
const today = new Date().toISOString().split('T')[0];

const staticRoutes = ['/', '/method', '/services', '/about', '/contact'];
const projectRoutes = slugs.map(s => `/work/${s}`);

const urls = [
  ...staticRoutes.map((path, i) => ({
    loc: `${SITE_URL}${path}`,
    priority: path === '/' ? '1.0' : '0.8',
  })),
  ...projectRoutes.map(path => ({
    loc: `${SITE_URL}${path}`,
    priority: '0.7',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(resolve(ROOT, 'dist/sitemap.xml'), xml);
console.log(`Sitemap generated with ${urls.length} URLs`);
