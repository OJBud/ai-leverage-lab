import ContactForm from '../components/ContactForm';
import { pageSeo } from '../data/seo';
import SEO from '../components/SEO';
import { Underline, Chat, Sparkle } from '../components/HandDrawn';

export default function Contact() {
  return (
    <div className="pt-24">
      <SEO
        title={pageSeo['/contact'].title}
        description={pageSeo['/contact'].description}
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Christian Jones',
          url: 'https://ai-levels-lab.uk/contact',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'christian@budapp.co.uk',
            contactType: 'customer service',
          },
        }}
      />
      <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <div className="relative inline-block mb-4">
          <Chat size={96} className="-rotate-3" />
          <Sparkle size={28} className="absolute -top-1 left-28 opacity-70" />
        </div>
        <p className="font-hand text-2xl text-accent mb-3 -rotate-1 origin-left">Every project starts here...</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">
          Tell me what you want to{' '}
          <span className="relative inline-block">
            build
            <Underline color="#FF6B2C" />
          </span>
        </h1>
        <p className="text-body mb-10">
          Whether it's a product, a website, or an idea you're not sure about yet - start here.
        </p>

        <ContactForm />

        <div className="mt-12 pt-8 border-t border-border space-y-3 text-sm text-muted">
          <p>
            Prefer email?{' '}
            <a href="mailto:christian@budapp.co.uk" className="text-burnt hover:text-ink transition-colors">
              christian@budapp.co.uk
            </a>
          </p>
          <p>
            Find me on LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/budapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-burnt hover:text-ink transition-colors"
            >
              linkedin.com/in/budapp
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
