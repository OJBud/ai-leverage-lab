import { build } from 'vite';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');

const projectsFile = readFileSync(resolve(ROOT, 'src/data/projects.js'), 'utf-8');
const slugs = [...projectsFile.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

const routes = [
  '/',
  '/method',
  '/services',
  '/about',
  '/contact',
  ...slugs.map(s => `/work/${s}`),
];

async function prerender() {
  console.log('Building SSR bundle...');

  await build({
    root: ROOT,
    build: {
      ssr: resolve(ROOT, 'src/entry-server.jsx'),
      outDir: resolve(DIST, 'server'),
      rollupOptions: {
        output: { format: 'es' },
      },
    },
    logLevel: 'warn',
  });

  const { render } = await import(resolve(DIST, 'server/entry-server.js'));
  const rawTemplate = readFileSync(resolve(DIST, 'index.html'), 'utf-8');

  // Strip template's default SEO tags that Helmet will replace per-page
  const template = rawTemplate
    .replace(/<title>[^<]*<\/title>\s*/g, '')
    .replace(/<meta\s+name="description"[^>]*\/>\s*/g, '')
    .replace(/<link\s+rel="canonical"[^>]*\/>\s*/g, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*\/>\s*/g, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*\/>\s*/g, '');

  for (const route of routes) {
    console.log(`  Prerendering ${route}`);
    const { html, headTags } = render(route);

    let page = template;

    // Inject per-page head tags before </head>
    if (headTags) {
      page = page.replace('</head>', `    ${headTags}\n  </head>`);
    }

    // Inject rendered HTML into the root div
    page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outDir = route === '/'
      ? DIST
      : resolve(DIST, route.slice(1));

    mkdirSync(outDir, { recursive: true });
    writeFileSync(resolve(outDir, 'index.html'), page);
  }

  console.log(`Prerendered ${routes.length} routes`);
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
