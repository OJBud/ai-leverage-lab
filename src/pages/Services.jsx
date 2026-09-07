import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { serviceTiers, processSteps, faqs } from '../data/services';

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-white font-medium pr-4">{faq.q}</span>
        {open ? <ChevronUp size={18} className="text-steel shrink-0" /> : <ChevronDown size={18} className="text-steel shrink-0" />}
      </button>
      {open && (
        <p className="text-steel text-sm pb-5 leading-relaxed">{faq.a}</p>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">What I Can Build For You</h1>
        <p className="text-xl text-steel">Strategy, design, and development. From idea to shipped product.</p>
      </section>

      {/* Who this is for / isn't for */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-display font-bold text-white mb-4">Who This Is For</h2>
            <ul className="space-y-3 text-steel text-sm">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-lime rounded-full mt-2 shrink-0" />
                Solo or small-team founders who need a product built
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-lime rounded-full mt-2 shrink-0" />
                Businesses who need a website that does real work, not just exists
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-lime rounded-full mt-2 shrink-0" />
                Operators who have an idea but need help scoping, designing, and shipping it
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-lime rounded-full mt-2 shrink-0" />
                People who want a builder who thinks strategically, not just follows instructions
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-display font-bold text-white mb-4">Who This Isn't For</h2>
            <ul className="space-y-3 text-steel text-sm">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-white/20 rounded-full mt-2 shrink-0" />
                People looking for the cheapest option — this is quality work, priced accordingly
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-white/20 rounded-full mt-2 shrink-0" />
                Large enterprise projects requiring a team of 20 — I'm one person, that's the point and the constraint
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-white/20 rounded-full mt-2 shrink-0" />
                Anyone who wants a template with their logo on it — I build from scratch, with intent
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5">
        <div className="space-y-8">
          {serviceTiers.map((service) => (
            <div key={service.name} className="bg-charcoal border border-white/5 rounded-2xl p-8 md:p-10 hover:border-lime/20 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">{service.name}</h3>
                  <p className="text-lime font-display font-bold text-lg">{service.price}</p>
                </div>
                {service.timeline && (
                  <span className="text-xs font-mono uppercase tracking-widest text-steel border border-white/10 px-3 py-1 rounded-full self-start">
                    {service.timeline}
                  </span>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">What it is</h4>
                  <p className="text-steel text-sm leading-relaxed mb-4">{service.whatItIs}</p>

                  <h4 className="text-sm font-bold text-white mb-2">What you get</h4>
                  <p className="text-steel text-sm leading-relaxed">{service.whatYouGet}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">What happens</h4>
                  <p className="text-steel text-sm leading-relaxed mb-4">{service.whatHappens}</p>

                  {service.boundary && (
                    <>
                      <h4 className="text-sm font-bold text-white mb-2">Scope boundary</h4>
                      <p className="text-steel text-sm leading-relaxed mb-4">{service.boundary}</p>
                    </>
                  )}

                  <h4 className="text-sm font-bold text-white mb-2">Best for</h4>
                  <p className="text-steel text-sm leading-relaxed">{service.bestFor}</p>

                  {service.examples && (
                    <p className="text-xs text-steel/50 mt-3">
                      Examples: {service.examples}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-2 text-steel text-sm">
          <p>Hourly pricing available for ongoing work and smaller tasks. Let's talk about what fits.</p>
          <p>Not sure which tier? Start with a Clarity Session. It's designed to answer exactly that question.</p>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-2xl font-display font-bold text-white mb-8">The Process</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 rounded-full bg-lime/10 border border-lime/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-lime font-display font-bold text-sm">{step.number}</span>
              </div>
              <h3 className="text-white font-display font-bold text-sm mb-2">{step.title}</h3>
              <p className="text-steel text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-2xl font-display font-bold text-white mb-8">FAQ</h2>
        <div>
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/5 text-center">
        <h2 className="text-2xl font-display font-bold text-white mb-4">Ready to build?</h2>
        <Link
          to="/contact"
          className="group bg-lime text-jet font-display font-bold px-8 py-4 rounded-full hover:bg-white transition-colors inline-flex items-center gap-2"
        >
          Get in touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
