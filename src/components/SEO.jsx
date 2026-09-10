import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME } from '../data/seo';

const DEFAULT_OG_IMAGE = '/og/default.png';

export default function SEO({ title, description, path = '/', ogImage, ogType = 'website', jsonLd }) {
  const fullTitle = `${title} | Christian Jones`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${ogImage || DEFAULT_OG_IMAGE}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
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
