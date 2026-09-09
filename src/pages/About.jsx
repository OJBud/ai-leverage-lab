import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Underline, Arrow, Compass, Rocket, Sparkle, Sprout } from '../components/HandDrawn';

const credentials = [
  { stat: '20+ yrs', label: 'of technology marketing behind the work' },
  { stat: '£0', label: 'ad spend - 1,900+ users grown organically' },
  { stat: 'End to end', label: 'strategy, build and growth, one pair of hands' },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="font-hand text-2xl text-accent mb-3 -rotate-1 origin-left">The person behind the work...</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-ink mb-6">
          Christian{' '}
          <span className="relative inline-block">
            Jones
            <Underline color="#FF6B2C" />
          </span>
        </h1>
        <p className="text-xl text-body leading-relaxed">
          Marketing operator and product builder. Two decades getting products in front of
          the right people - and building the products themselves. Whatever you're launching,
          strategy and execution come from one pair of hands.
        </p>
      </section>

      {/* Credentials strip */}
      <section className="border-y border-border bg-white">
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {credentials.map((c) => (
            <div key={c.label} className="text-center sm:text-left">
              <span className="text-accent font-display font-bold text-3xl md:text-4xl">{c.stat}</span>
              <p className="text-muted text-sm mt-1 leading-snug">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The short version */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-2xl font-display font-bold text-ink mb-6">The short version</h2>
        <p className="text-body leading-relaxed mb-4">
          I run end-to-end marketing for SaaS companies - content, campaigns, positioning,
          digital growth - and I build products of my own using the same tools and channels
          day to day. Not strategy from a distance. Hands on the keyboard.
        </p>
        <p className="text-body leading-relaxed">
          That combination is the whole point. Most people who can market can't build, and most
          people who can build have never had to sell a thing. I sit in the overlap, and AI is
          what lets one person hold both ends at once.
        </p>
      </section>

      {/* Two decades */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <Compass size={66} className="mb-3" />
        <p className="font-hand text-xl text-accent mb-2 -rotate-1 origin-left">Where the depth comes from...</p>
        <h2 className="text-2xl font-display font-bold text-ink mb-6">Two decades in the room</h2>
        <p className="text-body leading-relaxed mb-4">
          I've spent twenty years in technology marketing, in partnerships, campaigns and
          brand work that ran alongside names like Microsoft, Samsung, Vodafone and Coca-Cola.
          Big rooms, real stakes, and a lot of learning about what actually moves people versus
          what just looks busy.
        </p>
        <p className="text-body leading-relaxed">
          Most recently that's meant running hands-on marketing execution for SaaS companies -
          multi-channel campaigns, CRM and reporting, landing pages and content, the unglamorous
          machinery that turns interest into pipeline. Real numbers came out of it: an 850+ contact
          CRM pipeline built for one client, 500+ leads in a single quarter for another.
        </p>
      </section>

      {/* The founder turn */}
      <section className="py-12 md:py-16 border-t border-border bg-ink text-white">
        <div className="max-w-3xl mx-auto px-6">
          <Rocket size={88} className="mb-3" />
          <p className="font-hand text-xl text-accent mb-2 -rotate-1 origin-left">Then I started building...</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
            Why I build my own products
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Advising is one thing. Doing it with your own name on the line is another. So I built
            <span className="text-white font-medium"> BudApp</span> - a community dog-walking platform grown to
            1,900+ users in six months with zero paid marketing, through organic social, local
            Facebook communities and mission-aligned partnerships. Then
            <span className="text-white font-medium"> FirstLook</span>, an early-stage SaaS product taken from
            positioning to live, billing and all.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Every growth lever on those products is the marketing I've done for clients for twenty
            years - just pointed at something I own. The portfolio isn't a side project - it's proof of what I'll bring to yours.
          </p>
          <Link
            to="/#work"
            className="mt-8 inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors"
          >
            See the work <Arrow color="#FF6B2C" size={26} className="inline-block" />
          </Link>
        </div>
      </section>

      {/* How I work now */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-16 border-t border-border">
        <Sparkle size={58} className="mb-3" />
        <h2 className="text-2xl font-display font-bold text-ink mb-6">How I work now</h2>
        <p className="text-body leading-relaxed mb-4">
          AI didn't replace the expertise - it multiplied it. Twenty years of judgement about
          what to build, who it's for and how to reach them, executed at a speed that used to
          need a whole team. I act as the orchestrator: deciding what matters, what to ignore,
          and what actually ships.
        </p>
        <p className="text-body leading-relaxed">
          It's the reason one person can take something from a first conversation to a live,
          working product - and market it too - without the handoffs, the lost context, or the
          meetings about meetings.
        </p>
        <Link
          to="/method"
          className="mt-6 inline-flex items-center gap-2 text-burnt font-medium hover:text-ink transition-colors"
        >
          How the system works <ArrowRight size={16} />
        </Link>
      </section>

      {/* Beyond the desk - light personal close */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <Sprout size={66} className="mb-3" />
        <p className="font-hand text-xl text-accent mb-2 -rotate-1 origin-left">Beyond the desk...</p>
        <h2 className="text-2xl font-display font-bold text-ink mb-6">The rest of it</h2>
        <p className="text-body leading-relaxed mb-4">
          I'm based in North Devon. Before marketing there was a science degree - biological
          chemistry - which is probably why I like problems that have a right answer hiding in
          the mess somewhere. Outside work you'll find me boxing, on a surfboard, or coaching,
          having spent years in personal training and the martial arts.
        </p>
        <p className="text-body leading-relaxed">
          None of it is filler. Thinking clearly when it's uncomfortable is a trained skill, and
          it's the same one that keeps a build on track when the easy path is to cut a corner.
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-border bg-accent">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-hand text-2xl text-ink/60 mb-2">The best way to get a feel for it...</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-8">
            is to start a conversation.
          </h2>
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
