import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { serviceTiers, processSteps, faqs } from '../data/services';
import { pageSeo } from '../data/seo';
import SEO from '../components/SEO';
import { Underline, Sprout, Wrench, Lightbulb, Sparkle } from '../components/HandDrawn';

const capabilityGroups = [
  {
    title: 'Marketing & Growth',
    Icon: Sprout,
    items: [
      'Full-funnel SaaS marketing - content, campaigns, digital growth',
      'Organic & community growth - founder-led, building in public',
      'Partnerships & brand - mission-aligned, content-led',
      'Content & creative - copywriting, photography, video',
      'CRM, analytics & SEO - HubSpot, GA4, performance tracking',
    ],
  },
  {
    title: 'Product & Build',
    Icon: Wrench,
    items: [
      'AI product development - concept to shipped SaaS',
      'Web & app builds - React, Flutter, Firebase, Supabase, Stripe',
      'Positioning, pricing & go-to-market',
      'Design - brand, UX, visual and interactive',
      'Solo operation of live, revenue-capable products',
    ],
  },
];

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
      <SEO
        title={pageSeo['/services'].title}
        description={pageSeo['/services'].description}
        path="/services"
        jsonLd={serviceTiers.map((t) => ({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: t.name,
          description: t.shortDesc,
          provider: {
            '@type': 'Person',
            name: 'Christian Jones',
          },
          offers: {
            '@type': 'Offer',
            price: t.price.replace(/[^0-9.]/g, ''),
            priceCurrency: 'GBP',
            description: t.shortDesc,
          },
        }))}
      />
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
        <p className="text-xl text-body">Marketing, strategy, design and development. From idea to shipped - and grown.</p>
      </section>

      {/* Capabilities / Specialisms */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16 border-t border-border">
        <p className="font-hand text-xl text-accent mb-2 -rotate-1 origin-left">The full range...</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-3">
          Marketing and build, under one roof
        </h2>
        <p className="text-body max-w-2xl mb-10 leading-relaxed">
          Most people do one or the other. The value here is the overlap - two decades of marketing
          depth and hands-on product execution in the same head, so strategy and delivery never get
          lost in translation.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {capabilityGroups.map((g) => (
            <div key={g.title} className="bg-white border border-border rounded-2xl p-8">
              <g.Icon size={60} className="mb-4" />
              <h3 className="text-xl font-display font-bold text-ink mb-5">{g.title}</h3>
              <ul className="space-y-3">
                {g.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-body text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-peach border border-orange-200 rounded-2xl p-8">
          <p className="text-ink leading-relaxed">
            <span className="font-display font-bold">The through-line:</span> twenty years of technology
            marketing - alongside names like Microsoft, Samsung, Vodafone and Coca-Cola - now executed
            with AI leverage. The domain expertise most AI-native builders simply don't have.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-ink mb-8">Ways to work together</h2>
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
          <p>Ongoing work runs on a day rate or a scoped monthly retainer for marketing and growth - where most of the value compounds. Let's talk about what fits.</p>
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
