import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME } from '../data/seo';

// Use a real project image until a branded raster sharing card is supplied.
const DEFAULT_OG_IMAGE = '/images/budapp-hero.png';

export default function SEO({ title, description, path = '/', ogImage, ogType = 'website', jsonLd, noindex = false }) {
  const fullTitle = title === SITE_NAME ? `${SITE_NAME} | Christian Jones` : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${ogImage || DEFAULT_OG_IMAGE}`;

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
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
