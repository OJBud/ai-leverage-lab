import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const handleWorkClick = (e) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'Work', path: isHome ? '#work' : '/#work', onClick: handleWorkClick },
    { name: 'Method', path: '/method' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '#work' || path === '/#work') return false;
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-jet/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-display font-bold text-white tracking-tight flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-lime rounded-full shadow-[0_0_10px_rgba(184,255,87,0.5)]" />
          AI-Leverage-Lab
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              onClick={l.onClick}
              className={`text-[11px] uppercase tracking-widest font-medium transition-colors ${
                isActive(l.path) ? 'text-lime' : 'text-steel hover:text-white'
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-charcoal border-b border-white/5 px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              onClick={l.onClick}
              className={`text-lg font-display font-semibold ${
                isActive(l.path) ? 'text-lime' : 'text-white'
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
