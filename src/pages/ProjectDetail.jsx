import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-primary mb-4">Project not found</h1>
          <Link to="/#work" className="text-accent hover:text-primary transition-colors">
            Back to all work
          </Link>
        </div>
      </div>
    );
  }

  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <div className="pt-24">
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} /> Back to all work
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">{project.name}</h1>
        <p className="text-xl text-body mb-6">{project.oneLiner}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-accent bg-green-50 border border-green-100 px-2.5 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-display font-bold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Visit live site <ExternalLink size={16} />
          </a>
        )}

        {/* Hero screenshot */}
        <div className="mt-10 rounded-2xl overflow-hidden bg-section border border-border">
          <div className="aspect-video relative">
            <img
              src={project.screenshot}
              alt={`${project.name} hero`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 bg-section items-center justify-center hidden">
              <span className="text-muted font-display font-bold text-3xl">{project.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-primary mb-6">The Problem</h2>
        {project.problem.map((p, i) => (
          <p key={i} className="text-body leading-relaxed mb-4">{p}</p>
        ))}
      </section>

      {/* The Approach */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-primary mb-6">The Approach</h2>
        {project.approach.map((p, i) => (
          <p key={i} className="text-body leading-relaxed mb-4">{p}</p>
        ))}
      </section>

      {/* The Product */}
      <section className="py-12 border-t border-border bg-section">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-primary mb-8">The Product</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((shot, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-white border border-border">
                <div className="aspect-video relative">
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 bg-section items-center justify-center hidden">
                    <span className="text-muted text-sm px-4 text-center">{shot.caption}</span>
                  </div>
                </div>
                <p className="p-4 text-sm text-body">{shot.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Status */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-primary mb-6">Results &amp; Status</h2>
        <ul className="space-y-3">
          {project.results.map((result, i) => (
            <li key={i} className="flex items-start gap-3 text-body">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
              {result}
            </li>
          ))}
        </ul>
      </section>

      {/* What It Demonstrates */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-primary mb-6">What It Demonstrates</h2>
        <ul className="space-y-3">
          {project.demonstratesList.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-body">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Project navigation */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <div className="flex justify-between items-center">
          {prev ? (
            <Link
              to={`/work/${prev.slug}`}
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft size={14} /> {prev.name}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
            >
              {next.name} <ArrowRight size={14} />
            </Link>
          ) : (
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
            >
              All projects <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
