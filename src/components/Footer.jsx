import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-steel/50 text-sm">
          Built by one person. Powered by many minds.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/budapp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-steel hover:text-lime transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/OJBud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-steel hover:text-lime transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <span className="text-steel/30 text-xs">
            &copy; {new Date().getFullYear()} AI-Leverage-Lab
          </span>
        </div>
      </div>
    </footer>
  );
}
