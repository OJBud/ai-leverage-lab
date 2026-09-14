export default function IdeaWorkbench() {
  return (
    <figure className="idea-workbench" aria-label="From a rough idea to real products: BudApp and FirstLook">
      <div className="workbench-grid" aria-hidden="true" />
      <div className="idea-note">
        <span className="workbench-label">01 / THE STARTING POINT</span>
        <p>A problem worth<br />solving.</p>
        <span className="idea-note-rule" aria-hidden="true" />
        <span className="idea-note-small">Who is it for?<br />What would make it useful?</span>
      </div>
      <svg className="workbench-path" viewBox="0 0 560 530" fill="none" aria-hidden="true">
        <path d="M175 128C335 45 486 70 471 195C459 278 391 203 428 174M414 174l14-2 1 17M337 449c-93 45-191 38-201-51m-9 12 9-13 13 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="7 8" />
      </svg>
      <div className="workbench-desktop">
        <div className="workbench-chrome"><span aria-hidden="true">● ● ●</span><span>FirstLook / co-founded &amp; built</span></div>
        <img src="/images/firstlook-dashboard.png" alt="The real FirstLook employer dashboard" width="680" height="425" fetchPriority="high" />
      </div>
      <div className="workbench-phone">
        <div className="phone-speaker" aria-hidden="true" />
        <img src="/images/budapp-walks.png" alt="The real BudApp walk discovery screen" width="260" height="490" />
        <span>BudApp / founded &amp; built</span>
      </div>
      <p className="workbench-annotation">a little less theory.<br /><span>a lot more real.</span></p>
      <figcaption><span className="bud-dot-indicator" aria-hidden="true" />Real products. Real screens. My work.</figcaption>
    </figure>
  );
}
