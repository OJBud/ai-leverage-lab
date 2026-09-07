import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-canvas/95 backdrop-blur-md shadow-sm' : 'bg-canvas/80 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-display font-bold text-ink tracking-tight">
          Christian Jones
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              onClick={l.onClick}
              className={`text-sm font-medium transition-colors ${
                isActive(l.path) ? 'text-accent' : 'text-body hover:text-ink'
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-canvas border-t border-border px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              onClick={l.onClick}
              className={`text-lg font-display font-semibold ${
                isActive(l.path) ? 'text-accent' : 'text-ink'
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
