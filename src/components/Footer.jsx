import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted text-sm">
          Domain expertise, amplified by AI.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/budapp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/OJBud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <span className="text-muted/50 text-xs">
            &copy; {new Date().getFullYear()} Christian Jones
          </span>
        </div>
      </div>
    </footer>
  );
}
