import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME } from '../data/seo';

// Versioned branded card for general pages; case studies can supply their own image.
const DEFAULT_OG_IMAGE = '/og/bud-technology-share-v1.png';
const DEFAULT_OG_ALT = 'Bud Technology. From idea to life. Marketing. Websites. Digital products.';

export default function SEO({ title, description, path = '/', ogImage, ogImageAlt, ogType = 'website', jsonLd, noindex = false }) {
  const fullTitle = title === SITE_NAME ? `${SITE_NAME} | Christian Jones` : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${ogImage || DEFAULT_OG_IMAGE}`;

  const imageAlt = ogImageAlt || (ogImage ? fullTitle : DEFAULT_OG_ALT);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      {!ogImage && <meta property="og:image:width" content="1733" />}
      {!ogImage && <meta property="og:image:height" content="907" />}
      {!ogImage && <meta property="og:image:type" content="image/png" />}
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
