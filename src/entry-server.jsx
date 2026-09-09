import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

const HEAD_TAG_RE = /(<title[\s>][\s\S]*?<\/title>|<meta\s[^>]*\/?>|<link\s[^>]*\/?>|<script\s[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>)/gi;

export function render(url) {
  const raw = renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const headTags = [];
  const html = raw.replace(HEAD_TAG_RE, (match) => {
    headTags.push(match);
    return '';
  });

  return { html, headTags: headTags.join('\n    ') };
}
