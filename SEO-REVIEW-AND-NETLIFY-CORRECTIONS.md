# SEO Build - Review Notes + Deployment Correction

Read this alongside `SEO-BRIEF.md` before finalising the SEO work. Two parts: a deployment correction that changes several assumptions, and the must-fix items from the plan review.

## Part 1: The site is on NETLIFY, not Vercel

The plan assumed Vercel. It is wrong. The live site at ai-levels-lab.uk is served by **Netlify** (confirmed: `Server: Netlify` response header, `x-nf-request-id` present, DNS points at Netlify's load balancer 75.2.60.5 / 99.83.x). The GitHub repo is connected to a Netlify site that auto-deploys from `main`. The `vercel.json` in the repo is not used by anything.

What this changes:

1. **Environment variables (GA4).** `VITE_GA_ID` is set in the **Netlify UI** (Site configuration -> Environment variables), not Vercel. The value is `G-R130N80L22`. Christian will set it; the code just needs to read `import.meta.env.VITE_GA_ID` (already planned).

2. **Security headers.** The plan adds them to `vercel.json`. Netlify ignores `vercel.json`, so those headers would never apply. Put them in `netlify.toml` under `[[headers]]` (or a `public/_headers` file) instead. Example:
   ```toml
   [[headers]]
     for = "/*"
     [headers.values]
       X-Content-Type-Options = "nosniff"
       X-Frame-Options = "DENY"
   ```
   Treat `vercel.json` as dead - either delete it or leave it, but do not rely on it.

3. **Prerender + Chromium (still the critical risk, but easier here).** Netlify's build image is Ubuntu-based, so a headless browser CAN run in the build - but Chromium is NOT preinstalled. If you keep the Playwright prerender, the build script must install the browser first, e.g. prepend `npx playwright install --with-deps chromium` (or a `postinstall`). Verify a real Netlify deploy actually completes the prerender step - do not assume. The browser-free alternative (`react-dom/server` `renderToString` + `StaticRouter` + `HelmetProvider`) remains the more robust option and avoids the browser entirely; the app looks SSR-safe (window/document only touched inside effects).

4. **Static serving + SPA fallback (no change needed, just confirm).** `netlify.toml` already sets `command = "npm run build"`, `publish = "dist"`, and a `/* -> /index.html` status-200 rewrite. Netlify serves real static files before applying rewrites and this rewrite is not forced, so prerendered `dist/<route>/index.html` files WILL be served for their routes, with the rewrite catching only client-side routes. This is compatible with the prerender approach. Just confirm the build command in Netlify's UI is `npm run build` (so the updated build script with sitemap + prerender actually runs).

5. **robots.txt / sitemap.xml** are host-agnostic and fine as planned.

## Part 2: Must-fix items from the plan review (platform-independent)

Verdict was GO WITH CHANGES. These still stand:

1. **`git pull` first.** Several things are already committed on this branch and must NOT be regressed or redone:
   - Favicon: done (`public/favicon.svg`). Do not replace with a placeholder.
   - OG image: done (`public/og/default.png`). Not "awaiting."
   - Site-level OG/Twitter/canonical + title + description: already in `index.html`. Build on these; per-page Helmet tags will supersede at runtime, keep the static defaults for `/`.
   - Net: the only genuine outstanding input from Christian is the GA4 ID (now supplied: `G-R130N80L22`).

2. **Do not reintroduce removed claims in the SEO copy.**
   - Home `<title>` must NOT say "From Idea to Income." The income claim was deliberately removed. Use "From idea to life" or "AI Levels Lab | Marketing expertise, amplified by AI".
   - Method meta must NOT lean on "one person delivers what usually takes a team." The solo-hero framing was deliberately softened site-wide. Use "a system that delivers what usually takes a team."
   - All titles/descriptions must match the current, shipped copy - not pre-revamp wording.

3. **OG image path.** Use `/og/default.png` (where the committed asset lives and where `index.html` points). Not `/images/og/default.png`.

4. **JSON-LD Service prices must be current:** Clarity £150, Website Build from £1,500, Product Sprint from £3,500. Not the old £250 / £2,000 / £5,000.

5. **On-page hygiene pass (in the brief, missing from the plan):** confirm one `<h1>` per page, meaningful `alt` on content images (doodles stay `aria-hidden`), lazy-load below-the-fold images.

6. Confirm `react-helmet-async` v2 runs clean on React 19 (StrictMode edge cases in some versions).

## Verification (Netlify-adjusted)

- Local: `npm run build` completes; `grep og:title dist/work/firstlook/index.html` shows the tag in static HTML.
- After deploy: fetch a route's HTML and confirm meta is present without JS, e.g. `Invoke-WebRequest https://ai-levels-lab.uk/work/firstlook | Select-String "og:title"`.
- LinkedIn Post Inspector + X card validator on the homepage and one case study.
- GA4 Realtime shows a hit after `VITE_GA_ID` is set and the site redeployed.
