import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Underline } from '../components/HandDrawn';

const processPoints = [
  {
    number: '01',
    title: 'Deep scoping before a line of code',
    desc: 'Every project starts with understanding the real problem — not just the brief. I pressure-test assumptions, map constraints, and define what "done" actually looks like before building anything.',
  },
  {
    number: '02',
    title: 'Strategy-informed decisions throughout',
    desc: 'Architecture, technology, positioning, and go-to-market aren\'t separate workstreams. They\'re considered together, because a decision in one changes the constraints in another.',
  },
  {
    number: '03',
    title: 'Regular reviews with you',
    desc: 'You see progress at every stage. Not a waterfall handover — working check-ins where we validate direction and catch misalignment early.',
  },
  {
    number: '04',
    title: 'A useful handover',
    desc: 'You get a deployed product, not a folder of files. Clear documentation, access to everything, and a conversation about what comes next.',
  },
];

const tools = [
  { name: 'Strategy & context', desc: 'One platform holds the full strategic context of every project and acts as a genuine thinking partner.' },
  { name: 'Analysis & challenge', desc: 'A different platform provides cold-eyed analysis without context bias — used to challenge assumptions.' },
  { name: 'Code & execution', desc: 'Dedicated tools for writing, reviewing, and shipping production code at speed.' },
  { name: 'Visual production', desc: 'Separate tools for images, presentations, and design assets.' },
  { name: 'Prototyping', desc: 'Rapid prototyping to test viability before committing to a full build.' },
  { name: 'Research & synthesis', desc: 'Processing large volumes of information into actionable insight.' },
];

export default function Method() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="font-hand text-2xl text-accent mb-3 -rotate-1 origin-left">The bit that makes it all work...</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-ink mb-4">
          The{' '}
          <span className="relative inline-block">
            Method
            <Underline color="#FF6B2C" />
          </span>
        </h1>
        <p className="text-xl text-body">Direct access, strategic thinking, and a system that means one person delivers what usually takes a team.</p>
      </section>

      {/* What you get */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-ink mb-6">What This Means For Your Project</h2>
        <p className="text-body leading-relaxed mb-4">
          You work directly with the person building your product. No account manager relaying messages, no junior developer interpreting the brief. Every conversation I have with you shapes the build directly.
        </p>
        <p className="text-body leading-relaxed">
          That means better scoping, faster decisions, and a product that reflects what you actually need — not what survived a game of telephone.
        </p>
      </section>

      {/* The Process */}
      <section className="py-16 border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-ink mb-10">The Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processPoints.map((step) => (
              <div key={step.number}>
                <span className="text-accent font-display font-bold text-3xl">{step.number}</span>
                <h3 className="text-ink font-display font-bold text-sm mt-3 mb-2">{step.title}</h3>
                <p className="text-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concrete example */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-ink mb-6">How Judgement Shapes The Build</h2>
        <div className="bg-peach border border-orange-100 rounded-xl p-6 md:p-8 mb-6">
          <p className="text-ink leading-relaxed mb-4">
            When building FirstLook's scoring engine, the first version used simple keyword matching. Analysis from one platform said it would work. I took that output to a different platform holding the full project context — which immediately identified that keyword matching would be gamed within weeks by the same AI tools the product was designed to detect.
          </p>
          <p className="text-ink leading-relaxed">
            That challenge led to the multi-algorithm routing architecture in v3.1 — a fundamentally better product because the system surfaced the problem before users did.
          </p>
        </div>
        <p className="text-ink font-display font-bold text-lg">
          The value isn't in any single tool. It's in the judgement that governs what moves between them.
        </p>
      </section>

      {/* The System — compact */}
      <section className="py-12 border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-ink mb-3">The System Behind It</h2>
          <p className="text-body mb-8 max-w-2xl">
            I use multiple AI platforms, each with a defined role. I act as the orchestrator — deciding what context moves where and what advice to act on.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-canvas border border-border rounded-xl p-5">
                <h3 className="text-ink font-display font-bold text-sm mb-1.5">{tool.name}</h3>
                <p className="text-body text-sm leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
        <blockquote className="text-center">
          <p className="font-hand text-3xl md:text-4xl text-accent mb-6">
            "Most people want answers. This system produces leverage."
          </p>
        </blockquote>
        <p className="text-body text-center leading-relaxed mb-8">
          Every project in the portfolio was built this way. The method isn't theoretical. It's operational.
        </p>
        <div className="text-center">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-burnt font-medium hover:text-ink transition-colors"
          >
            See the work <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
