import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { serviceTiers } from '../data/services';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-3xl fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-[1.05]">
              I build products.
            </h1>
            <p className="text-xl md:text-2xl text-steel max-w-2xl mb-10 leading-relaxed">
              Websites, apps, platforms, and tools. Strategy through to shipped product. One person, one system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="group bg-lime text-jet font-display font-bold px-8 py-4 rounded-full hover:bg-white transition-colors inline-flex items-center justify-center gap-2"
              >
                See the work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full text-white border border-white/10 hover:border-lime/40 transition-colors text-center font-medium"
              >
                Tell me what you need built
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">The Work</h2>
            <p className="text-steel text-lg">Every project on this page was built by one person.</p>
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

      {/* Method Teaser */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            How one person builds all of this
          </h2>
          <p className="text-steel text-lg leading-relaxed mb-4">
            I don't have a team. I have a system. Multiple AI platforms with different roles, and me as the operator who governs the flow. This is how one person builds what used to require ten.
          </p>
          <p className="text-steel leading-relaxed mb-8">
            The value isn't in any single tool. It's in how intelligence flows between them — and who governs that flow.
          </p>
          <Link
            to="/method"
            className="inline-flex items-center gap-2 text-lime font-medium hover:text-white transition-colors"
          >
            See how it works <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 bg-charcoal border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <blockquote className="text-center mb-10 fade-in-up">
            <p className="text-white text-lg md:text-xl italic leading-relaxed max-w-3xl mx-auto mb-4">
              "What I learned in that short meeting was that the answer to my questions has as much to do with mindset as it does execution."
            </p>
            <cite className="text-steel text-sm not-italic">
              — Amy Rose Bailey, Founder, CultureSmith Ltd
            </cite>
          </blockquote>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-steel/60 font-medium">
            <span className="border border-white/5 px-4 py-2 rounded-full">Dogs Trust partnership</span>
            <span className="border border-white/5 px-4 py-2 rounded-full">BBC South West</span>
            <span className="border border-white/5 px-4 py-2 rounded-full">1,600+ BudApp users</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              What I Can Build For You
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {serviceTiers.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-steel hover:text-lime transition-colors text-sm"
            >
              See full details and process <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Tell me what you want to build
          </h2>
          <p className="text-steel mb-8">
            Whether it's an idea, a problem, or a product that needs to exist — let's talk.
          </p>
          <Link
            to="/contact"
            className="group bg-lime text-jet font-display font-bold px-8 py-4 rounded-full hover:bg-white transition-colors inline-flex items-center gap-2"
          >
            Get in touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
