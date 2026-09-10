import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-canvas relative overflow-hidden">
        <img
          src={project.screenshot}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-canvas to-border items-center justify-center hidden"
        >
          <span className="text-muted font-display font-bold text-2xl">{project.name}</span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-xl font-display font-bold text-ink mb-2">{project.name}</h3>
        <p className="text-body mb-3 leading-relaxed">{project.oneLiner}</p>
        <p className="text-sm text-body mb-5">{project.demonstrates}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-muted border border-border px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-burnt hover:text-ink transition-colors"
          >
            Read the story <ArrowRight size={14} />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              View live <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
