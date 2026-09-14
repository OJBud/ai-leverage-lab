# Bud Technology - review handoff

## Scope

Work stays on `polish/round-2`, draft PR #2. No merge to main or production promotion.
Existing domain, dependencies, prices and contact destination are retained.

## Review refinements

- Small Circle emblem and ink warrior now sit on cream in both gallery and expanded view.
- Removed em-dashes from site copy and metadata.
- Founder story uses the original "Bud and me" photograph from main, copied unchanged to the URL-safe `public/images/christian-and-bud.jpg`.
- `budhero.png` is carried onto this branch for comparison, but is not placed without a visual inspection.
- KSA source and assets remain, with `published: false`. Exported projects, previous/next navigation, prerender routes and sitemap all use the same published list. Direct unpublished routes show an unavailable page with noindex.
- SoundPals remains visible, labelled as in development.
- Eleven selected gallery images have an accessible native dialog with fit/zoom, original link, Escape, close and return focus. Decorative SoundPals character remains static.
- About's ambiguous scattered symbols are replaced by a labelled SVG set for surfing, Bud, boxing, coding and ideas.

## Verification

Source checks cover relative imports, image paths, punctuation and publication filtering.
The build now runs four dependency-free Node tests before Vite and prerendering.
Read Netlify's commit status for the result of the current commit.
No local terminal or interactive browser was available for this edit.

## Before merging

- Review desktop and mobile at 1440, 1024, 768, 390 and 320px.
- Open selected screenshots; test zoom/pan, close, Escape, tab containment, background scroll lock and return focus.
- Confirm the photograph is the intended one and reads well beside the story. The connector could list the two large uploads but could not return viewable bytes; neither crop was visually inspected. The photo is uncropped and lazy-loaded, but the original is 6.6 MB. Optimise a web copy and strip unnecessary metadata when image processing is available, retaining the original.
- Review the five personal drawings at mobile size.
- Confirm KSA is absent from the homepage, service examples, case-study navigation and sitemap.
- Test contact submission only with an authorised test; no enquiry was sent.
- Founder should confirm public metrics, case-study claims and origin-story wording.
- Company registration number and registered-office details have not been supplied; do not invent them.
- Dedicated branded raster social-sharing artwork remains a follow-up.
