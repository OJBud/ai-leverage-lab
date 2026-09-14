import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import PersonalDoodle from '../components/PersonalDoodle';
import IdeaWorkbench from '../components/IdeaWorkbench';
import { pageSeo, SITE_URL, SITE_NAME } from '../data/seo';
import { serviceTiers } from '../data/services';

const offers = [
  { number: '01', title: 'Marketing that moves things.', description: 'Positioning, campaigns, content and partnerships. Hands-on marketing support for SaaS companies and growing businesses.', detail: 'Strategy + ongoing execution', anchor: 'marketing', symbol: 'growth' },
  { number: '02', title: 'Websites with a point of view.', description: 'A clear story, distinctive design and a site built around what your customers need to do next.', detail: 'Positioning + design + development', anchor: 'websites', symbol: 'website' },
  { number: '03', title: 'Ideas made into products.', description: 'Apps, practical tools and first versions. Define the useful core, build it, and put it in front of real people.', detail: 'Scoping + UX + working software', anchor: 'products', symbol: 'product' },
];
const clientWork = [
  { slug: 'small-circle', name: 'Small Circle Jujitsu', label: 'BRAND / WEBSITE / INTERACTION', image: '/images/smallcircle-hero.png', alt: 'Small Circle Jujitsu website design', text: 'Translating the character of a martial art into a distinctive digital experience.', tone: 'sand' },
  { slug: 'soundpals', name: 'SoundPals', label: 'LEARNING / APP / ACCESSIBILITY', image: '/images/SoundPals.character.png', alt: 'A SoundPals character illustration', text: 'A phonics app designed to make learning feel like play. Currently in development.', tone: 'peach' },
];

function OfferSketch({ type }) {
  return (
    <svg viewBox="0 0 96 76" width="96" height="76" fill="none" className="offer-sketch" aria-hidden="true">
      {type === 'growth' ? <><path d="M10 60c19 2 18-24 37-19s19-17 37-28M68 12l17 0-1 17" /><path d="M14 69h69M24 64V53m22 11V49m22 15V35" /></>
        : type === 'website' ? <><path d="M9 14c23-3 50-2 77 0l-2 49H11L9 14Zm3 13h71M18 20h1m6 0h1m6 0h1" /><path d="M21 39h29m-29 9h19m18-11h16v16H58V37Z" /></>
        : <><path d="m48 8 31 17-31 17-31-17L48 8Zm0 34v27M17 25v27l31 17 31-17V25" /><path d="m32 16 31 18v14M87 8v11m-6-5h12" /></>}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SEO title={pageSeo['/'].title} description={pageSeo['/'].description} path="/" jsonLd={[
        { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
        { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: SITE_NAME, legalName: 'Bud Technology Ltd', url: SITE_URL, description: pageSeo['/'].description, founder: { '@type': 'Person', name: 'Christian Jones' }, serviceType: ['Marketing', 'Website Design and Development', 'Product Development'] },
      ]} />
      <section className="bud-hero">
        <div className="bud-shell hero-layout">
          <div className="hero-copy">
            <p className="bud-eyebrow">INDEPENDENT THINKING. HANDS-ON BUILDING.</p>
            <h1>From idea<br />to <span className="ink-underline">life.</span></h1>
            <p className="hero-description">I help founders and small teams shape, build and grow their businesses - with marketing, websites and digital products.</p>
            <p className="hero-signature">Christian Jones. Human judgement, amplified by AI.</p>
            <div className="bud-actions">
              <Link className="bud-button" to="/contact">Tell me what you need <ArrowRight size={17} /></Link>
              <a className="bud-text-link" href="#work">Explore the work <ArrowRight size={16} /></a>
            </div>
          </div>
          <IdeaWorkbench />
        </div>
        <div className="bud-shell hero-footnote"><span>Founder-led. North Devon. Working wherever you are.</span><a href="#services">Start with what you need <span aria-hidden="true">↓</span></a></div>
      </section>

      <section id="services" className="bud-section bud-offers">
        <div className="bud-shell">
          <div className="bud-section-heading">
            <div><p className="bud-eyebrow">WHAT I DO</p><h2>Good thinking.<br /><span className="hand-accent">Made useful.</span></h2></div>
            <p>You might need a better website. A product brought to life. Or someone to take ownership of your marketing. You work directly with me, from the first conversation onwards.</p>
          </div>
          <div className="offer-grid">
            {offers.map((offer) => <article className="offer-card" key={offer.number}>
              <div className="offer-card-top"><span className="bud-index">{offer.number}</span><OfferSketch type={offer.symbol} /></div>
              <h3>{offer.title}</h3><p>{offer.description}</p><span className="offer-detail">{offer.detail}</span>
              <Link to={'/services#' + offer.anchor} className="bud-text-link">How I can help <ArrowRight size={16} /></Link>
            </article>)}
          </div>
          <p className="offer-bottom-note">Already have something live? I can help improve it, too. <Link to="/contact">Let’s talk.</Link></p>
        </div>
      </section>

      <section id="work" className="bud-section">
        <div className="bud-shell">
          <div className="bud-section-heading">
            <div><p className="bud-eyebrow">FOUNDER VENTURES</p><h2>I build for myself,<br /><span className="hand-accent">as well as for you.</span></h2></div>
            <p>BudApp and FirstLook put my own judgement to the test. Product decisions, launch, feedback and growth - not just the handover.</p>
          </div>
          <article className="venture-card venture-bud">
            <div className="venture-copy">
              <div className="doodle-heading"><div><span className="project-role">FOUNDED &amp; BUILT</span><h3>BudApp</h3></div><PersonalDoodle kind="dog" className="site-doodle" /></div>
              <p className="venture-deck">Better walks.<br />Shared by people who care.</p>
              <p>A dog-walking app shaped by the things a generic map misses: local knowledge, dog-friendly details and a community willing to share them.</p>
              <dl className="venture-stats"><div><dt>1,900+</dt><dd>registered users</dd></div><div><dt>£0</dt><dd>paid acquisition</dd></div></dl>
              <p className="venture-evidence">BBC coverage · National Sheep Association collaboration</p>
              <div className="bud-actions"><Link to="/work/budapp" className="bud-text-link">Inside the project <ArrowRight size={16} /></Link><a href="https://budapp.co.uk" target="_blank" rel="noopener noreferrer" className="bud-text-link">Visit BudApp <ExternalLink size={14} /></a></div>
            </div>
            <div className="venture-visual bud-app-visual">
              <span className="hand-accent visual-note">It started with a dog.</span>
              <img src="/images/budapp-walks.png" alt="BudApp community walk discovery" loading="lazy" width="300" height="560" />
              <span className="visual-caption">A real product, built around a real need.</span>
            </div>
          </article>
          <article className="venture-card venture-firstlook">
            <div className="venture-copy">
              <span className="project-role">CO-FOUNDED &amp; BUILT</span><h3>FirstLook</h3>
              <p className="venture-deck">Look beyond<br />the polished application.</p>
              <p>A hiring platform that brings effort and engagement signals into the first stage of screening. From positioning and product design to the working platform.</p>
              <dl className="venture-stats"><div><dt>20 days</dt><dd>concept to working product</dd></div><div><dt>End to end</dt><dd>strategy through build</dd></div></dl>
              <div className="bud-actions"><Link to="/work/firstlook" className="bud-text-link">Inside the project <ArrowRight size={16} /></Link><a href="https://firstlooknow.com" target="_blank" rel="noopener noreferrer" className="bud-text-link">Visit FirstLook <ExternalLink size={14} /></a></div>
            </div>
            <div className="venture-visual firstlook-visual"><span className="hand-accent visual-note">From the question to the product.</span><img src="/images/firstlook-dashboard.png" alt="FirstLook employer dashboard" loading="lazy" width="680" height="425" /><span className="visual-caption">The actual interface. No concept mockups.</span></div>
          </article>
        </div>
      </section>

      <section className="bud-section client-section">
        <div className="bud-shell">
          <div className="bud-section-heading"><div><p className="bud-eyebrow">CLIENT &amp; PARTNER WORK</p><h2>Different people.<br /><span className="hand-accent">Different possibilities.</span></h2></div><p>Each project starts with its audience. The result should feel like their world - not a template with their name on it.</p></div>
          <div className="client-grid">{clientWork.map((project) => <article className="client-card" key={project.slug}>
            <Link to={'/work/' + project.slug} className={'client-image client-image-' + project.tone} aria-label={'View ' + project.name}><img src={project.image} alt={project.alt} loading="lazy" width="540" height="380" /></Link>
            <div className="client-copy"><span className="project-role">{project.label}</span><h3>{project.name}</h3><p>{project.text}</p><Link to={'/work/' + project.slug} className="bud-text-link">See the project <ArrowRight size={16} /></Link></div>
          </article>)}</div>
        </div>
      </section>

      <section className="bud-section founder-section">
        <div className="bud-shell founder-layout">
          <div><p className="bud-eyebrow">THE PERSON YOU WORK WITH</p><div className="doodle-heading"><h2>Commercial head.<br /><span className="hand-accent">Builder’s hands.</span></h2><PersonalDoodle kind="coding" className="site-doodle doodle-lean-right" /></div><p>I’m Christian. Twenty years in technology marketing now sit alongside hands-on product development. I think about who will use something, why they’ll care and how it will reach them - while I’m building it.</p><div className="bud-actions"><Link className="bud-text-link" to="/about">Meet the person behind Bud <ArrowRight size={16} /></Link><Link className="bud-text-link" to="/method">How I work <ArrowRight size={16} /></Link></div></div>
          <blockquote><span className="quote-mark" aria-hidden="true">“</span><p>What I learned in that short meeting was that the answer to my questions has as much to do with mindset as it does execution.</p><cite>Amy Rose Bailey<br /><span>Founder, CultureSmith Ltd</span></cite></blockquote>
        </div>
      </section>

      <section className="bud-section">
        <div className="bud-shell">
          <div className="bud-section-heading"><div><p className="bud-eyebrow">A CLEAR WAY IN</p><h2>Start with<br /><span className="hand-accent">something useful.</span></h2></div><p>A focused session, a website or a first product. These are starting points, with scope agreed before work begins.</p></div>
          <div className="price-grid">{serviceTiers.map((service) => <article className="price-card" key={service.name}><h3>{service.name}</h3><p className="price-value">{service.price}</p><p>{service.shortDesc}</p><Link to="/services#pricing" className="bud-text-link">Scope and details <ArrowRight size={16} /></Link></article>)}</div>
          <div className="retainer-strip"><div><h3>Need ongoing marketing support?</h3><p>Hands-on campaigns, content and growth, on a scoped monthly retainer.</p></div><Link className="bud-text-link" to="/services#marketing">Talk through what fits <ArrowRight size={16} /></Link></div>
        </div>
      </section>
      <section className="bud-closing"><div className="bud-shell"><p className="bud-eyebrow">A GOOD PLACE TO START</p><h2>What are you<br /><span>working on?</span></h2><p>An idea, a sticking point, or something that could work harder.</p><Link to="/contact" className="bud-button bud-button-dark">Tell me about it <ArrowRight size={18} /></Link><span className="closing-note">You’ll be talking to me. Christian.</span></div></section>
    </>
  );
}
