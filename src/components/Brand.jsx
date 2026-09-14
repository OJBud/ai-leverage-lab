export default function Brand({ compact = false }) {
  return (
    <span className="bud-brand">
      <svg viewBox="0 0 44 44" width="40" height="40" fill="none" aria-hidden="true">
        <path d="M12 7v29m0-15c13-12 27-4 23 8-3 9-17 10-23 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 14c-1-7 4-10 12-10-1 7-5 11-12 10Z" fill="#FF6B2C" />
      </svg>
      <span><span className="bud-brand-name">Bud Technology<span className="bud-dot">.</span></span>
      {!compact && <span className="bud-brand-byline">by Christian Jones</span>}</span>
    </span>
  );
}
