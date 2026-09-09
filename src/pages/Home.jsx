import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { serviceTiers } from '../data/services';
import { Underline, Arrow, Lightbulb, Rocket, Sparkle, Compass } from '../components/HandDrawn';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center bg-canvas relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-32 w-full relative">
          {/* hand-drawn accents */}
          <Lightbulb size={140} className="hidden md:block absolute top-8 right-6 opacity-90 -rotate-6 pointer-events-none" />
          <Sparkle size={48} className="hidden md:block absolute top-56 right-52 opacity-80 pointer-events-none" />
          <Rocket size={108} className="hidden md:block absolute bottom-12 right-14 opacity-80 rotate-12 pointer-events-none" />
          <Sparkle size={30} className="hidden md:block absolute bottom-52 right-64 opacity-55 pointer-events-none" />
          <div className="max-w-3xl fade-in-up">
            <p className="font-hand text-2xl md:text-3xl text-accent mb-4 -rotate-2 origin-left">
              Strategy, design &amp; development...
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-ink mb-8 tracking-tight leading-[1.05]">
              From idea<br />
              to{' '}
              <span className="relative inline-block">
                <span className="text-accent">life.</span>
                <Underline color="#FF6B2C" />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-body max-w-xl mb-12 leading-relaxed">
              Brands and products, brought to life. Deep expertise, amplified by AI - from first
              conversation to launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                to="/contact"
                className="group bg-accent text-ink font-display font-bold px-8 py-4 rounded-full hover:bg-orange-600 hover:text-white transition-colors inline-flex items-center justify-center gap-2"
              >
                Start a conversation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#work"
                className="px-8 py-4 rounded-full text-ink border border-ink/20 hover:border-ink transition-colors text-center font-medium"
              >
                See what's shipped
              </a>
            </div>
            <p className="font-hand text-lg text-muted mt-6 ml-1">
              ...expertise, amplified by AI.
            </p>
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="pt-20 md:pt-28 pb-0">
        <div className="max-w-6xl mx-auto px-6 mb-16 fade-in-up">
          <Sparkle size={50} className="mb-2" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-2">The Work</h2>
          <p className="font-hand text-xl text-accent -rotate-1 origin-left">
            Different problems. Different solutions.
          </p>
        </div>

        {/* ── FirstLook ── */}
        <div className="bg-ink text-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-hand text-xl text-accent mb-2">Hiring is broken...</p>
                <h3 className="text-3xl md:text-5xl font-display font-bold mt-1 mb-4 text-white">FirstLook</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Recruiters drowning in AI-generated applications needed a way to spot
                  real candidates before opening a single CV. FirstLook scores engagement,
                  effort, and intent - so hiring managers see signal, not noise.
                </p>
                <div className="flex gap-8 mb-8">
                  <div>
                    <span className="text-accent font-display font-bold text-3xl">20</span>
                    <p className="text-gray-400 text-sm">days to ship</p>
                  </div>
                  <div>
                    <span className="text-accent font-display font-bold text-3xl">v3.1</span>
                    <p className="text-gray-400 text-sm">scoring engine</p>
                  </div>
                  <div>
                    <span className="text-accent font-display font-bold text-3xl">4</span>
                    <p className="text-gray-400 text-sm">pricing tiers</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    to="/work/firstlook"
                    className="inline-flex items-center gap-1.5 text-accent font-medium hover:text-white transition-colors"
                  >
                    Read the full story <ArrowRight size={14} />
                  </Link>
                  <a
                    href="https://firstlooknow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Visit live <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="h-7 bg-gray-800 border-b border-white/10 flex items-center gap-1.5 px-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <img
                    src="/images/firstlook-dashboard.png"
                    alt="FirstLook employer dashboard"
                    className="w-full aspect-[16/10] object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full aspect-[16/10] bg-gray-900 items-center justify-center hidden">
                    <span className="text-gray-500 font-display font-bold text-xl">FirstLook Dashboard</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 max-w-[200px] hidden md:block">
                  <img
                    src="/images/firstlook-scoring.png"
                    alt="Scoring engine"
                    className="w-full rounded aspect-[4/3] object-cover"
                    onError={(e) => {
                      e.target.parentElement.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BudApp ── */}
        <div className="bg-canvas">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="relative w-[260px]">
                  <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[3px] border-gray-200 bg-white">
                    <div className="h-6 bg-gray-100 flex items-center justify-center">
                      <span className="w-14 h-1.5 rounded-full bg-gray-300" />
                    </div>
                    <img
                      src="/images/budapp-walks.png"
                      alt="BudApp walk tracking"
                      className="w-full aspect-[9/17] object-cover object-top"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full aspect-[9/17] bg-canvas items-center justify-center hidden">
                      <span className="text-muted font-display font-bold">BudApp</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-[160px] rounded-lg shadow-xl overflow-hidden border border-border hidden md:block">
                    <img
                      src="/images/budapp-route.png"
                      alt="Route detail"
                      className="w-full aspect-square object-cover"
                      onError={(e) => {
                        e.target.parentElement.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <p className="font-hand text-xl text-accent mb-2">Community, not just a map...</p>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-ink mt-1 mb-4">BudApp</h3>
                <p className="text-body text-lg leading-relaxed mb-8">
                  Dog owners wanted to share walks, discover routes, and connect locally.
                  Nothing existed beyond map apps with a dog icon. BudApp turned that gap
                  into a community - cross-platform, zero ad spend, growing on word of mouth alone.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white border border-border rounded-xl p-4 text-center">
                    <span className="text-accent font-display font-bold text-2xl md:text-3xl">1,900+</span>
                    <p className="text-muted text-xs mt-1">users</p>
                  </div>
                  <div className="bg-white border border-border rounded-xl p-4 text-center">
                    <span className="text-accent font-display font-bold text-2xl md:text-3xl">£0</span>
                    <p className="text-muted text-xs mt-1">ad spend</p>
                  </div>
                  <div className="bg-white border border-border rounded-xl p-4 text-center">
                    <span className="text-accent font-display font-bold text-2xl md:text-3xl">75.5%</span>
                    <p className="text-muted text-xs mt-1">retention</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="text-xs font-medium text-ink bg-peach border border-orange-200 px-3 py-1.5 rounded-full">BBC South West</span>
                  <span className="text-xs font-medium text-ink bg-peach border border-orange-200 px-3 py-1.5 rounded-full">NSA collaboration</span>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    to="/work/budapp"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-burnt hover:text-ink transition-colors"
                  >
                    Read the full story <ArrowRight size={14} />
                  </Link>
                  <a
                    href="https://budapp.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors"
                  >
                    Visit live <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Small Circle ── */}
        <div className="bg-white border-y border-border">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-hand text-xl text-accent mb-2">More than a gym website...</p>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-ink mt-1 mb-4">Small Circle Jujitsu</h3>
                <p className="text-body text-lg leading-relaxed mb-6">
                  A martial arts school needed more than a gym website with a class timetable.
                  The brief was to translate precision, philosophy, and heritage into something
                  you can feel on screen. Deep brand work first, then designed, built, and deployed end to end.
                </p>
                <p className="text-sm text-muted mb-8 leading-relaxed">
                  The interactive principles wheel - the centrepiece - lets visitors explore core
                  tenets without reading walls of text. Every colour, weight, and spacing decision
                  serves the school's identity, not a template.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    to="/work/small-circle"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-burnt hover:text-ink transition-colors"
                  >
                    See the project <ArrowRight size={14} />
                  </Link>
                  <a
                    href="https://smallcircle-fleet.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors"
                  >
                    Visit live <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden shadow-lg border border-border aspect-[3/4]">
                  <img
                    src="/images/smallcircle-hero.png"
                    alt="Small Circle Jujitsu hero"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-ink flex items-center justify-center"><span class="text-white/40 font-display font-bold text-lg text-center px-4">Small Circle</span></div>';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-border aspect-[3/4]">
                  <img
                    src="/images/smallcircle-principles.png"
                    alt="Interactive principles wheel"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-ink flex items-center justify-center"><span class="text-white/40 font-display font-bold text-lg text-center px-4">Principles</span></div>';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SoundPals + KSA ── */}
        <div className="bg-canvas">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-border rounded-2xl p-8 md:p-10 flex flex-col">
                <p className="font-hand text-lg text-accent mb-1">Learning through play...</p>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-ink mb-4">SoundPals</h3>
                <p className="text-body leading-relaxed mb-4 flex-1">
                  A phonics app designed around how dyslexic children actually learn - multisensory
                  feedback, game mechanics, progress that feels like achievement.
                  Accessibility as architecture, not afterthought.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-[11px] text-muted border border-border px-2 py-0.5 rounded-full">Education</span>
                  <span className="text-[11px] text-muted border border-border px-2 py-0.5 rounded-full">UX Design</span>
                  <span className="text-[11px] text-muted border border-border px-2 py-0.5 rounded-full">Accessibility</span>
                </div>
                <Link
                  to="/work/soundpals"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-burnt hover:text-ink transition-colors"
                >
                  Read the full story <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-white border border-border rounded-2xl p-8 md:p-10 flex flex-col">
                <p className="font-hand text-lg text-accent mb-1">Paper to digital...</p>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-ink mb-4">KSA Surf Passport</h3>
                <p className="text-body leading-relaxed mb-4 flex-1">
                  Kingsurf Academy ran student progression on paper. Three coaches, one season,
                  no shared picture. This turned a fragmented process into a structured digital
                  curriculum - coach sign-off, student tracking, management oversight.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-[11px] text-muted border border-border px-2 py-0.5 rounded-full">React</span>
                  <span className="text-[11px] text-muted border border-border px-2 py-0.5 rounded-full">Multi-role</span>
                  <span className="text-[11px] text-muted border border-border px-2 py-0.5 rounded-full">Curriculum Design</span>
                </div>
                <Link
                  to="/work/ksa"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-burnt hover:text-ink transition-colors"
                >
                  Read the full story <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Teaser */}
      <section className="py-20 md:py-28 px-6 bg-ink relative overflow-hidden">
        <Compass size={124} className="hidden md:block absolute -top-2 right-8 opacity-25 pointer-events-none" />
        <div className="max-w-3xl mx-auto fade-in-up relative">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3">
              <p className="font-hand text-xl text-accent mb-3">How does all this get shipped so fast?</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Speed without<br />
                <span className="relative inline-block">
                  compromise.
                  <Underline color="#FF6B2C" className="-bottom-1" />
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Every project here shipped faster than an agency would quote the discovery phase.
                Not because corners were cut - because domain expertise plus the right system
                eliminates the overhead that slows everything down.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Strategy, architecture, design, code, deployment. No handoffs. No lost context.
                No meetings about meetings.
              </p>
              <Link
                to="/method"
                className="inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors"
              >
                How the system works <Arrow color="#FF6B2C" size={28} className="inline-block" />
              </Link>
            </div>
            <div className="md:col-span-2 space-y-4">
              <div className="border border-white/10 rounded-xl p-5">
                <span className="text-accent font-display font-bold text-2xl">20 days</span>
                <p className="text-gray-400 text-sm mt-1">FirstLook: concept to working product</p>
              </div>
              <div className="border border-white/10 rounded-xl p-5">
                <span className="text-accent font-display font-bold text-2xl">End to end</span>
                <p className="text-gray-400 text-sm mt-1">Strategy through deployment, no handoffs</p>
              </div>
              <div className="border border-white/10 rounded-xl p-5">
                <span className="text-accent font-display font-bold text-2xl">Zero ad spend</span>
                <p className="text-gray-400 text-sm mt-1">Organic growth that compounds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <blockquote className="mb-10 fade-in-up">
            <div className="text-accent text-6xl font-hand leading-none mb-2">&ldquo;</div>
            <p className="text-ink text-xl md:text-2xl leading-relaxed max-w-2xl mb-4">
              What I learned in that short meeting was that the answer to my questions
              has as much to do with mindset as it does execution.
            </p>
            <cite className="text-muted text-sm not-italic">
              - Amy Rose Bailey, Founder, CultureSmith Ltd
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-2">
              Three ways to work together
            </h2>
            <p className="font-hand text-xl text-accent -rotate-1 origin-left">
              Start small or go deep.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {serviceTiers.map((service) => (
              <div
                key={service.name}
                className={`border rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow ${
                  service.name === 'Product Sprint'
                    ? 'bg-peach border-orange-200'
                    : 'bg-white border-border'
                }`}
              >
                <h3 className="text-xl font-display font-bold text-ink mb-1">{service.name}</h3>
                <p className="text-accent font-display font-bold text-lg mb-4">{service.price}</p>
                <p className="text-body text-sm leading-relaxed flex-1">{service.shortDesc}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-burnt hover:text-ink transition-colors"
                >
                  Enquire <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-muted hover:text-burnt transition-colors text-sm"
            >
              See full details and process <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 px-6 bg-accent">
        <div className="max-w-2xl mx-auto text-center fade-in-up">
          <Lightbulb size={78} color="#171A20" className="mx-auto mb-4 opacity-80" />
          <p className="font-hand text-2xl text-ink/60 mb-2">Every project started as a conversation.</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ink mb-8">
            Got an idea?
          </h2>
          <Link
            to="/contact"
            className="group bg-ink text-white font-display font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            Let's talk <Arrow color="#fff" size={24} className="inline-block group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
