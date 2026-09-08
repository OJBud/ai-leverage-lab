import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { serviceTiers, processSteps, faqs } from '../data/services';
import { Underline } from '../components/HandDrawn';

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-ink font-medium pr-4">{faq.q}</span>
        {open ? <ChevronUp size={18} className="text-muted shrink-0" /> : <ChevronDown size={18} className="text-muted shrink-0" />}
      </button>
      {open && (
        <p className="text-body text-sm pb-5 leading-relaxed">{faq.a}</p>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <p className="font-hand text-2xl text-accent mb-3 -rotate-1 origin-left">Let's build something...</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-ink mb-4">
          What I Can{' '}
          <span className="relative inline-block">
            Build
            <Underline color="#FF6B2C" />
          </span>{' '}
          For You
        </h1>
        <p className="text-xl text-body">Strategy, design, and development. From idea to shipped product.</p>
      </section>

      {/* Service Tiers */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-border">
        <div className="space-y-8">
          {serviceTiers.map((service) => {
            const isHighlighted = service.name === 'Product Sprint';
            return (
              <div
                key={service.name}
                className={`border rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow ${
                  isHighlighted
                    ? 'bg-peach border-orange-200'
                    : 'bg-white border-border'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-ink">{service.name}</h3>
                    <p className="text-accent font-display font-bold text-xl">{service.price}</p>
                    <p className="text-body text-sm mt-1">{service.shortDesc}</p>
                  </div>
                  <div className="flex items-center gap-3 self-start">
                    {service.timeline && (
                      <span className="text-xs font-mono uppercase tracking-widest text-muted border border-border px-3 py-1 rounded-full">
                        {service.timeline}
                      </span>
                    )}
                    <Link
                      to="/contact"
                      className="bg-accent text-ink font-display font-bold text-sm px-5 py-2.5 rounded-full hover:bg-orange-600 hover:text-white transition-colors whitespace-nowrap"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-ink mb-2">What it is</h4>
                    <p className="text-body text-sm leading-relaxed mb-4">{service.whatItIs}</p>

                    <h4 className="text-sm font-bold text-ink mb-2">What you get</h4>
                    <p className="text-body text-sm leading-relaxed">{service.whatYouGet}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink mb-2">What happens</h4>
                    <p className="text-body text-sm leading-relaxed mb-4">{service.whatHappens}</p>

                    {service.boundary && (
                      <>
                        <h4 className="text-sm font-bold text-ink mb-2">Scope</h4>
                        <p className="text-body text-sm leading-relaxed mb-4">{service.boundary}</p>
                      </>
                    )}

                    <h4 className="text-sm font-bold text-ink mb-2">Best for</h4>
                    <p className="text-body text-sm leading-relaxed">{service.bestFor}</p>

                    {service.examples && (
                      <p className="text-xs text-muted mt-3">
                        Examples: {service.examples}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 space-y-2 text-body text-sm">
          <p>Hourly pricing available for ongoing work and smaller tasks. Let's talk about what fits.</p>
          <p>Not sure which tier? Start with a Clarity Session. It's designed to answer exactly that question.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 border-t border-border bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-ink mb-8">The Process</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <span className="text-accent font-display font-bold text-3xl">{step.number}</span>
                <h3 className="text-ink font-display font-bold text-sm mt-2 mb-2">{step.title}</h3>
                <p className="text-body text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-ink mb-8">FAQ</h2>
        <div>
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border bg-accent text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-ink mb-4">Ready to build?</h2>
          <Link
            to="/contact"
            className="group bg-ink text-white font-display font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            Get in touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
