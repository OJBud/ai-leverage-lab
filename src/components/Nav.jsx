import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Brand from './Brand';

const links = [
  { name: 'What I do', path: '/services' },
  { name: 'The work', path: '/#work' },
  { name: 'About', path: '/about' },
  { name: 'How I work', path: '/method' },
];

export default function Nav() {
  const location = useLocation();
  const [openAt, setOpenAt] = useState(null);
  const currentLocation = location.pathname + location.hash;
  const isOpen = openAt === currentLocation;
  return (
    <>
      <a className="bud-skip" href="#main-content">Skip to content</a>
      <nav className="bud-nav" aria-label="Main navigation">
        <div className="bud-shell bud-nav-inner">
          <Link to="/" aria-label="Bud Technology home" onClick={() => setOpenAt(null)}><Brand /></Link>
          <div className="bud-nav-links">
            {links.map((link) => <Link key={link.path} to={link.path} aria-current={currentLocation === link.path ? 'page' : undefined}>{link.name}</Link>)}
            <Link to="/contact" className="bud-nav-cta">Let’s talk <span aria-hidden="true">↗</span></Link>
          </div>
          <button type="button" className="bud-menu-toggle" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="bud-mobile-navigation" onClick={() => setOpenAt(isOpen ? null : currentLocation)}>
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {isOpen && <div className="bud-mobile-menu" id="bud-mobile-navigation" onKeyDown={(event) => { if (event.key === 'Escape') setOpenAt(null); }}>
          {links.map((link) => <Link key={link.path} to={link.path} onClick={() => setOpenAt(null)}>{link.name}</Link>)}
          <Link to="/contact" onClick={() => setOpenAt(null)}>Let’s talk ↗</Link>
        </div>}
      </nav>
    </>
  );
}
