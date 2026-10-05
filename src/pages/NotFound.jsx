import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
      <SEO title="Page not found" description="This page is not available. Explore Bud Technology's work or get in touch." path="/404.html" noindex />
      <p className="bud-eyebrow">404 - Page not found</p>
      <h1 className="text-4xl font-display font-bold text-ink mb-6">Let's get you back on track.</h1>
      <p className="text-body mb-8">This page may have moved, or the link may be incorrect.</p>
      <Link to="/" className="inline-flex bg-accent text-ink font-display font-bold px-6 py-3 rounded-full">Back to the homepage</Link>
    </section>
  );
}
