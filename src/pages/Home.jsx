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
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-32 w-full">
          <div className="max-w-2xl fade-in-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-6 tracking-tight leading-[1.08]">
              I build products.
            </h1>
            <p className="text-lg md:text-xl text-body max-w-xl mb-10 leading-relaxed">
              Websites, apps, platforms, and tools. Strategy through to shipped product. One person, one system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="group bg-primary text-white font-display font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                See the work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full text-primary border border-border hover:border-primary transition-colors text-center font-medium"
              >
                Tell me what you need built
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-20 md:py-28 px-6 bg-section">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">The Work</h2>
            <p className="text-body text-lg">Every project on this page was built by one person.</p>
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
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            How one person builds all of this
          </h2>
          <p className="text-body text-lg leading-relaxed mb-4">
            I don't have a team. I have a system. Multiple platforms with different roles, and me as the operator who governs the flow.
          </p>
          <p className="text-body leading-relaxed mb-8">
            The value isn't in any single tool. It's in how intelligence flows between them — and who governs that flow.
          </p>
          <Link
            to="/method"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-primary transition-colors"
          >
            See how it works <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 bg-section border-y border-border">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-center mb-10 fade-in-up">
            <p className="text-primary text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto mb-4">
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

      {/* Services Overview */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
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
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm"
            >
              See full details and process <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 px-6 bg-section border-t border-border">
        <div className="max-w-2xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            Tell me what you want to build
          </h2>
          <p className="text-body mb-8">
            Whether it's an idea, a problem, or a product that needs to exist — let's talk.
          </p>
          <Link
            to="/contact"
            className="group bg-primary text-white font-display font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            Get in touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
