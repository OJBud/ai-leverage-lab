# Feature Brief: SEO Readiness - AI Levels Lab

## Context

AI Levels Lab (ai-levels-lab.uk) is Christian Jones' consultancy and portfolio site: a React + Vite + Tailwind SPA using react-router-dom, deployed on Vercel and auto-deployed from `main`. Content and design are finished; this brief covers making the site technically SEO-ready and socially shareable before it is promoted.

The single most important constraint driving the approach: LinkedIn is the primary distribution channel, and LinkedIn, X/Twitter, and Facebook crawlers do NOT execute JavaScript. Meta and Open Graph tags injected client-side (after React mounts) are invisible to them, producing broken link previews. Google does render JS, but relying on that alone is fragile. Therefore the head tags for every route must be present in the HTML that the server returns, before any JavaScript runs.

## What It Does

Make every route on the site serve complete, correct, and unique `<head>` metadata in its initial HTML response - title, meta description, canonical URL, Open Graph tags, Twitter Card tags, and JSON-LD structured data - and add the supporting technical files (robots.txt, sitemap.xml) and analytics (GA4). The user-facing behaviour of the site does not change; this is entirely about what crawlers and search engines receive.

Routes in scope:
- `/` (Home)
- `/method` (Method)
- `/services` (Services)
- `/about` (About)
- `/contact` (Contact)
- `/work/:slug` (dynamic case studies - one per project in `src/data/projects.js`: firstlook, budapp, small-circle, soundpals, ksa)

## Requirements

### Rendering / crawlability (the core decision)

- All routes above, including every dynamic `/work/:slug`, must be prerendered to static HTML at build time so their `<head>` metadata is in the served document.
- Preferred approach: `vite-react-ssg`, which integrates with React Router and provides per-route head management. Enumerate the `/work/:slug` routes for static generation from the `projects` array in `src/data/projects.js` so every case study is prerendered.
- Fallback if `vite-react-ssg` proves incompatible with React 19 / react-router-dom 7: `react-snap` as a postbuild step (Puppeteer crawl of the built SPA, writing static HTML per route), paired with `react-helmet-async` for head management. This needs minimal router refactor.
- Validate the chosen tool against the installed React 19.2 / RR 7.12 versions before committing to it. Confirm Vercel serves the generated per-route HTML files correctly (each route returns its own document on a cold request / hard refresh, not the SPA shell).

### Per-page metadata

- Every route has a unique, hand-written `<title>` (around 50-60 characters) and `<meta name="description">` (around 150-160 characters), relevant to that page's content and Christian's positioning (marketing operator + product builder, "domain expertise, amplified by AI").
- Each route has a `<link rel="canonical">` pointing to its absolute `https://ai-levels-lab.uk/...` URL.
- Dynamic case-study pages derive their title/description from the project data (name, oneLiner, demonstrates) in `src/data/projects.js`.
- Centralise this in a single reusable head component (e.g. a `<Seo>` component wrapping react-helmet-async / the SSG head API) that each page calls with its own values, so it is consistent and easy to maintain.

### Open Graph and Twitter cards

- Every route outputs `og:title`, `og:description`, `og:url`, `og:type`, `og:image`, `og:site_name`, plus `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`.
- A default branded OG image (1200x630 PNG) is served for pages without a specific image. Case-study pages should use the project's `screenshot` where suitable, otherwise the default. The default OG image asset will be supplied separately (see Known Unknowns); reference it at a stable path such as `/og/default.png`.
- `og:url` and image URLs must be absolute (`https://ai-levels-lab.uk/...`).

### Structured data (JSON-LD)

- Home and About include a `Person` schema (Christian Jones) and a `ProfessionalService` (or `Organization`) schema for AI Levels Lab, with name, url, description, sameAs (LinkedIn), and areaServed.
- A site-wide `WebSite` schema with the site name and URL.
- Case-study pages optionally include a `CreativeWork` schema. Keep it simple; do not over-model.

### Technical files

- `public/robots.txt`: allow all crawlers, and reference the sitemap URL.
- `sitemap.xml`: list every static route plus every `/work/:slug`, generated from `src/data/projects.js` so it stays in sync (a small build script or the SSG plugin's sitemap output - do not hand-maintain a static list).
- Confirm `vercel.json` has the SPA fallback so client-side navigation and hard refreshes both resolve (should already exist; verify it does not conflict with the prerendered files).

### Analytics

- Add GA4 via the standard gtag snippet, with the measurement ID read from an environment variable (e.g. `VITE_GA_ID`), not hard-coded. If the env var is absent, GA must not load or error. The measurement ID will be provided by Christian (see Known Unknowns).

### Hygiene / on-page

- One `<h1>` per page (verify; fix any page with zero or multiple).
- All content `<img>` tags have meaningful `alt` text. Decorative doodles are already `aria-hidden`; leave them.
- `<html lang="en">` is set (already present).
- Lazy-load below-the-fold images where not already done.

## Constraints

- Stack: React 19.2, Vite 7.2, react-router-dom 7.12, Tailwind 3.4. Node/npm project. Do not upgrade or replace the router or bundler.
- Deployment: Vercel, auto-deploy from `main`. Whatever is added must work within a standard Vercel build (`vite build`) or a documented postbuild step Vercel will run.
- Do not change the visual design, page content, copy, or the doodle illustration system.
- Do not break existing routes or the client-side navigation experience.
- Keep dependencies lean. Prefer one well-supported library over several. No CMS, no SSR server.
- Do not use em dashes anywhere in metadata copy; use hyphens.

## Out of Scope

- Rewriting page content or copy (already finalised).
- The contact form backend / endpoint (Christian is wiring this separately - do not touch `ContactForm.jsx`).
- A blog, CMS, or any new content sections.
- Internationalisation / multi-language.
- Any backend, database, or serverless functions beyond what GA4 needs (GA4 needs none).
- Designing the OG image and favicon (favicon is already done; the OG image is supplied separately).
- Redesigns, new pages, or new features.

## Acceptance Criteria

- Viewing source (not the rendered DOM) on a cold load of each route shows that route's unique title, meta description, canonical, OG tags, Twitter tags, and JSON-LD present in the returned HTML.
- Every `/work/:slug` case study is prerendered with its own metadata derived from project data.
- LinkedIn Post Inspector and the Twitter/X card validator both render a correct title, description, and image for the homepage and at least one case-study URL.
- `robots.txt` is reachable at `/robots.txt` and references the sitemap.
- `sitemap.xml` is reachable, valid, and lists all static routes plus all case-study routes.
- GA4 loads and registers a pageview when `VITE_GA_ID` is set, and does nothing when it is not.
- Google Rich Results Test validates the JSON-LD with no errors.
- Lighthouse SEO score is 100 (or the specific blockers are documented).
- `npm run build` completes cleanly and the site deploys on Vercel with all routes resolving on hard refresh.
- No regression to design, content, routes, or client-side navigation.

## Known Unknowns / Decisions for Claude Code

- Confirm `vite-react-ssg` compatibility with React 19.2 + react-router-dom 7.12 before adopting it. If incompatible, use the `react-snap` fallback and note the decision. Report which was used.
- GA4 measurement ID: to be supplied by Christian. Wire the integration to read `VITE_GA_ID` and document where to set it in Vercel.
- Default OG image (`/og/default.png`, 1200x630): to be supplied by Christian. Build against the referenced path; the asset will be dropped in.
- Verify whether the existing `vercel.json` rewrite rule needs adjusting once static per-route HTML exists, so prerendered files are served in preference to the SPA fallback.
