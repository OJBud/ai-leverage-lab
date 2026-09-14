# Bud Technology — review handoff

## Scope
- Existing domain, routes, hosting and enquiry destination retained.
- Founder-led Bud Technology identity; no new subscriptions or dependencies.
- Services precede portfolio. Founder ventures are distinct from client/partner work.
- Real product screenshots, CSS composition and inline SVG illustrations; no invented product UI.
- Existing prices preserved. Marketing retainer introduced without inventing a price.
- About includes the reason for the Bud name; supplied photograph still pending access.

## Photo
The attachment “Bud and me.jpg” was not accessible to the editing session.
No substitute was generated and no missing image URL is included.
When the original is accessible, inspect it, remove location/device EXIF from a web copy,
and add it to public/images/christian-and-bud.jpg. Retain the original separately.
Place alongside the origin story in src/pages/About.jsx. Show both Christian and Bud
without a tight crop; use a responsive image with natural height and a quiet caption.
Do not retouch faces or convert the photograph into an AI illustration.

## Verification completed
- Checked all literal image paths in changed files against the repository tree.
- Checked relative import destinations in changed JS/JSX files.
- Checked service and portfolio anchor targets exist.
- Checked changed files contain no old visible AI Levels Lab branding.
- Preserved Web3Forms destination/access key and existing email contact.
- No changes to main and no production publish.

## Still required before merge
The editing session has GitHub access but no terminal/browser runtime.
Run:
    npm ci
    npm run build
    npm run lint

Review desktop (1440 and 1024 px), tablet (768 px), and mobile (390 and 320 px):
- Hero composition: no overlaps with text or horizontal overflow.
- Mobile menu opens/closes; keyboard access and visible focus.
- Cross-page work and services anchor links, back navigation and direct route refresh.
- All five case studies and actual image rendering.
- Reduced-motion setting and screen-reader navigation.
- Contact validation and success/error behaviour (only submit a test with permission).
- Home and inner-page titles, canonical URLs and social metadata.
- Photo integration and approval of personal story.
- Confirm company details for footer before production release.

The generic sharing image currently uses the real BudApp hero, not the old AI Levels Lab
sharing graphic. A branded 1200x630 PNG social card is a follow-up design item.

The 1,900+ user count and existing prices are retained from source, not refreshed analytics.
Other inherited case-study claims should be checked by the founder before publication.
