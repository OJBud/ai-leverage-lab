import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-section relative overflow-hidden">
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
          className="absolute inset-0 bg-gradient-to-br from-section to-gray-200 items-center justify-center hidden"
        >
          <span className="text-muted font-display font-bold text-2xl">{project.name}</span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-xl font-display font-bold text-primary mb-2">{project.name}</h3>
        <p className="text-body text-sm mb-4 leading-relaxed">{project.oneLiner}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-accent bg-green-50 border border-green-100 px-2.5 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xs text-muted mb-6">{project.demonstrates}</p>

        <div className="flex items-center gap-4">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-primary transition-colors"
          >
            Read the story <ArrowRight size={14} />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              View live <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
