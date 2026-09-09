import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Method from './pages/Method';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-canvas text-body font-sans selection:bg-peach selection:text-ink flex flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/method" element={<Method />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
