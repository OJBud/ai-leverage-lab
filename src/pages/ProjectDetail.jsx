import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import SEO from '../components/SEO';
import CaseStudyImage from '../components/CaseStudyImage';

// Full literal class strings so Tailwind's JIT scanner includes them.
const GRID_COLS = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3' };
const COL_SPAN = { 2: 'md:col-span-2', 3: 'md:col-span-3' };
const ASPECTS = {
  video: 'aspect-video',
  wide: 'aspect-[16/9]',
  band: 'aspect-[16/7]',
  portrait: 'aspect-[4/5]',
  tall: 'aspect-[9/16]',
  phone: 'aspect-[9/18]',
  square: 'aspect-square',
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <SEO title="Project not available" description="This case study is not currently published." path={`/work/${slug}`} noindex />
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-ink mb-4">Project not found</h1>
          <Link to="/#work" className="text-burnt hover:text-ink transition-colors">
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
      <SEO
        title={project.name}
        description={project.oneLiner}
        path={`/work/${project.slug}`}
        ogImage={project.screenshot}
        ogType="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.name,
          description: project.oneLiner,
          url: `https://ai-levels-lab.uk/work/${project.slug}`,
          image: `https://ai-levels-lab.uk${project.screenshot}`,
          author: {
            '@type': 'Person',
            name: 'Christian Jones',
            url: 'https://ai-levels-lab.uk/about',
          },
          keywords: project.tags.join(', '),
        }}
      />
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-burnt transition-colors"
        >
          <ArrowLeft size={14} /> Back to all work
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        {project.relationship && <p className="bud-eyebrow">{project.relationship}</p>}
        <h1 className="text-4xl md:text-6xl font-display font-bold text-ink mb-4">{project.name}</h1>
        <p className="text-xl text-body mb-6">{project.oneLiner}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted border border-border px-2.5 py-1 rounded-full"
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
            className="inline-flex items-center gap-2 bg-accent text-ink font-display font-bold px-6 py-3 rounded-full hover:bg-orange-600 hover:text-white transition-colors"
          >
            Visit live site <ExternalLink size={16} />
          </a>
        )}

        {/* Hero screenshot */}
        <div className="mt-10 rounded-2xl overflow-hidden bg-canvas border border-border">
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
            <div className="absolute inset-0 bg-canvas items-center justify-center hidden">
              <span className="text-muted font-display font-bold text-3xl">{project.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-ink mb-6">The Problem</h2>
        {project.problem.map((p, i) => (
          <p key={i} className="text-body leading-relaxed mb-4">{p}</p>
        ))}
      </section>

      {/* The Approach */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-ink mb-6">The Approach</h2>
        {project.approach.map((p, i) => (
          <p key={i} className="text-body leading-relaxed mb-4">{p}</p>
        ))}
      </section>

      {/* How It Grew (marketing / go-to-market) */}
      {project.growth && (
        <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
          <h2 className="text-2xl font-display font-bold text-ink mb-6">How It Grew</h2>
          {project.growth.map((p, i) => (
            <p key={i} className="text-body leading-relaxed mb-4">{p}</p>
          ))}
        </section>
      )}

      {/* The Explainer (self-produced video) */}
      {project.videoId && (
        <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
          <h2 className="text-2xl font-display font-bold text-ink mb-5">The Explainer</h2>
          <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-ink">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${project.videoId}`}
              title={`${project.name} explainer video`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* The Product */}
      {project.screenshots?.length > 0 && (
      <section className="py-12 border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-ink mb-3">{project.productTitle || 'The Product'}</h2>
          {project.productIntro
            ? <p className="text-body leading-relaxed mb-8 max-w-3xl">{project.productIntro}</p>
            : <div className="mb-5" />}
          <div className={`grid gap-6 ${GRID_COLS[project.productColumns] || 'md:grid-cols-2'}`}>
            {project.screenshots.map((shot, i) => {
              const aspect = ASPECTS[shot.aspect] || 'aspect-video';
              const fit = shot.fit === 'contain' ? 'object-contain p-4' : 'object-cover';
              const pos = shot.pos === 'top' ? 'object-top' : 'object-center';
              const tone =
                shot.tone === 'dark' ? 'bg-ink border-white/10'
                : shot.tone === 'cream' ? 'case-tone-cream border-border'
                : shot.tone === 'soft' ? 'bg-peach border-orange-100'
                : 'bg-canvas border-border';
              const span = shot.feature ? (COL_SPAN[project.productColumns] || '') : '';
              const dark = shot.tone === 'dark';
              return (
                <figure key={i} className={`rounded-xl overflow-hidden border ${tone} ${span}`}>
                  <div className={`${aspect} relative`}>
                    <CaseStudyImage key={shot.src} shot={shot} className={`w-full h-full ${fit} ${pos}`} />
                  </div>
                  {shot.caption && (
                    <figcaption className={`p-4 text-sm ${dark ? 'text-gray-300' : 'text-body'}`}>{shot.caption}</figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {/* Results & Status */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-ink mb-6">Results &amp; Status</h2>
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
        <h2 className="text-2xl font-display font-bold text-ink mb-6">What It Demonstrates</h2>
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
              className="inline-flex items-center gap-2 text-muted hover:text-burnt transition-colors"
            >
              <ArrowLeft size={14} /> {prev.name}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="inline-flex items-center gap-2 text-muted hover:text-burnt transition-colors"
            >
              {next.name} <ArrowRight size={14} />
            </Link>
          ) : (
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-muted hover:text-burnt transition-colors"
            >
              All projects <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
