import { Link } from 'react-router-dom';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="bud-footer">
      <div className="bud-shell">
        <div className="footer-top">
          <div><Link to="/" aria-label="Bud Technology home"><Brand compact /></Link><p>Marketing, websites and digital products.<br />Human judgement, amplified by AI.</p></div>
          <div className="footer-links"><Link to="/contact">Get in touch</Link><a href="https://www.linkedin.com/in/budapp/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/OJBud" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Bud Technology Ltd · Founded by Christian Jones</span><span>Bud Technology’s home at ai-levels-lab.uk</span></div>
      </div>
    </footer>
  );
}
