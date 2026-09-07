import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-charcoal border border-white/5 rounded-2xl overflow-hidden hover:border-lime/20 transition-colors">
      <div className="aspect-video bg-jet relative overflow-hidden">
        <img
          src={project.screenshot}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-lime/10 to-charcoal items-center justify-center hidden"
        >
          <span className="text-white/60 font-display font-bold text-2xl">{project.name}</span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-xl font-display font-bold text-white mb-2">{project.name}</h3>
        <p className="text-steel text-sm mb-4 leading-relaxed">{project.oneLiner}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono uppercase tracking-widest text-lime/80 bg-lime/5 border border-lime/10 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xs text-steel/60 mb-6 italic">{project.demonstrates}</p>

        <div className="flex items-center gap-4">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:text-white transition-colors"
          >
            Read the story <ArrowRight size={14} />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-steel hover:text-white transition-colors"
            >
              View live <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
