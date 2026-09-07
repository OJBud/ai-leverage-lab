import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { serviceTiers } from '../data/services';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  return (
    <>
      {/* Hero — warm canvas */}
      <section className="min-h-[90vh] flex items-center bg-canvas">
        <div className="max-w-6xl mx-auto px-6 py-32 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-ink mb-6 tracking-tight leading-[1.08]">
                I build{' '}
                <span className="text-accent">products.</span>
              </h1>
              <p className="text-lg md:text-xl text-body max-w-xl mb-10 leading-relaxed">
                Websites, apps, platforms, and tools. Strategy through to shipped product. One person, one system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-accent text-ink font-display font-bold px-8 py-4 rounded-full hover:bg-orange-600 hover:text-white transition-colors inline-flex items-center justify-center gap-2"
                >
                  Tell me what you need built <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#work"
                  className="px-8 py-4 rounded-full text-ink border border-ink/20 hover:border-ink transition-colors text-center font-medium"
                >
                  See the work
                </a>
              </div>
            </div>

            {/* Product showcase composition */}
            <div className="hidden md:block relative fade-in-up" style={{ animationDelay: '0.15s' }}>
              <div className="relative w-full aspect-[4/3]">
                {/* Desktop frame — FirstLook */}
                <div className="absolute top-0 right-0 w-[85%] rounded-xl overflow-hidden shadow-2xl border border-border bg-white">
                  <div className="h-7 bg-gray-100 border-b border-border flex items-center gap-1.5 px-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  </div>
                  <img
                    src="/images/firstlook-dashboard.png"
                    alt="FirstLook dashboard"
                    className="w-full aspect-[16/10] object-cover object-top"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = '<div class="w-full aspect-[16/10] bg-canvas flex items-center justify-center"><span class="text-muted font-display font-bold text-lg">FirstLook</span></div>';
                    }}
                  />
                </div>

                {/* Mobile frame — BudApp */}
                <div className="absolute bottom-0 left-0 w-[35%] rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 bg-white z-10">
                  <div className="h-5 bg-gray-100 flex items-center justify-center">
                    <span className="w-10 h-1.5 rounded-full bg-gray-300" />
                  </div>
                  <img
                    src="/images/budapp-walks.png"
                    alt="BudApp walk tracking"
                    className="w-full aspect-[9/16] object-cover object-top"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = '<div class="h-5 bg-gray-100 flex items-center justify-center"><span class="w-10 h-1.5 rounded-full bg-gray-300"></span></div><div class="w-full aspect-[9/16] bg-canvas flex items-center justify-center"><span class="text-muted font-display font-bold text-sm">BudApp</span></div>';
                    }}
                  />
                </div>

                {/* Small accent card — Small Circle */}
                <div className="absolute bottom-8 right-0 w-[30%] rounded-lg overflow-hidden shadow-xl border border-border bg-white z-10">
                  <img
                    src="/images/smallcircle-principles.png"
                    alt="Small Circle Jujitsu"
                    className="w-full aspect-square object-cover"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = '<div class="w-full aspect-square bg-canvas flex items-center justify-center"><span class="text-muted font-display font-bold text-xs">Small Circle</span></div>';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio — white */}
      <section id="work" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-3">The Work</h2>
            <p className="text-body text-lg">Real products, built and shipped. Strategy, design, and code — all me.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={project.slug} className={i === 0 ? 'md:col-span-2' : ''}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Teaser — ink/dark */}
      <section className="py-20 md:py-28 px-6 bg-ink">
        <div className="max-w-2xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            How one person builds all of this
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I don't have a team. I have a system. Multiple platforms with different roles, and me as the operator who governs the flow.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            The value isn't in any single tool. It's in how intelligence flows between them — and who governs that flow.
          </p>
          <Link
            to="/method"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors"
          >
            See how it works <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Social Proof — warm canvas */}
      <section className="py-16 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-center mb-10 fade-in-up">
            <p className="text-ink text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto mb-4">
              "What I learned in that short meeting was that the answer to my questions has as much to do with mindset as it does execution."
            </p>
            <cite className="text-muted text-sm not-italic">
              — Amy Rose Bailey, Founder, CultureSmith Ltd
            </cite>
          </blockquote>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm text-muted font-medium">
            <span className="border border-border bg-white px-4 py-2 rounded-full">Dogs Trust partnership</span>
            <span className="border border-border bg-white px-4 py-2 rounded-full">BBC South West</span>
            <span className="border border-border bg-white px-4 py-2 rounded-full">1,600+ BudApp users</span>
          </div>
        </div>
      </section>

      {/* Services Overview — white */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-3">
              What I Can Build For You
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {serviceTiers.map((service) => (
              <ServiceCard
                key={service.name}
                service={service}
                highlight={service.name === 'Product Sprint'}
              />
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

      {/* Contact CTA — orange panel */}
      <section className="py-20 md:py-28 px-6 bg-accent">
        <div className="max-w-2xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
            Tell me what you want to build
          </h2>
          <p className="text-ink/70 mb-8">
            Whether it's an idea, a problem, or a product that needs to exist — let's talk.
          </p>
          <Link
            to="/contact"
            className="group bg-ink text-white font-display font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            Get in touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
