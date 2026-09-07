import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="pt-24">
      <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
          Tell me what you want to build
        </h1>
        <p className="text-body mb-10">
          Whether it's a product, a website, or an idea you're not sure about yet — start here.
        </p>

        <ContactForm />

        <div className="mt-12 pt-8 border-t border-border space-y-3 text-sm text-muted">
          <p>
            Prefer email?{' '}
            <a href="mailto:christian@budapp.co.uk" className="text-accent hover:text-primary transition-colors">
              christian@budapp.co.uk
            </a>
          </p>
          <p>
            Find me on LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/budapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary transition-colors"
            >
              linkedin.com/in/budapp
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
