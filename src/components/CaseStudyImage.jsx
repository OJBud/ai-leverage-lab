import { useEffect, useId, useRef, useState } from 'react';
import { Expand, X, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react';

// Native modal dialog provides focus containment and Escape handling without a dependency.
export default function CaseStudyImage({ shot, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [failed, setFailed] = useState(false);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const captionId = useId();
  const imageId = useId();

  useEffect(() => {
    if (!isOpen) return undefined;
    const modal = dialog.current;
    const opener = trigger.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modal.showModal();
    return () => {
      if (modal.open) modal.close();
      document.body.style.overflow = previousOverflow;
      if (opener?.isConnected) opener.focus();
    };
  }, [isOpen]);

  function close() {
    setIsOpen(false);
    setZoomed(false);
  }

  const picture = failed
    ? <span className="case-image-fallback">Image unavailable: {shot.caption}</span>
    : <img src={shot.src} alt={shot.caption} className={className} loading="lazy" onError={() => setFailed(true)} />;

  if (!shot.expandable) return <div className="case-image-static">{picture}</div>;

  return (
    <>
      <button ref={trigger} type="button" className="case-image-trigger" disabled={failed}
        aria-label={'Expand image: ' + shot.caption} aria-haspopup="dialog" onClick={() => setIsOpen(true)}>
        {picture}
        {!failed && <span className="case-expand-hint"><Expand size={14} aria-hidden="true" /> Expand image</span>}
      </button>
      <dialog ref={dialog} className="case-lightbox" aria-labelledby={captionId}
        onCancel={close} onClose={close}
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
        <div className="case-lightbox-panel">
          <div className="case-lightbox-toolbar">
            <span>Take a closer look</span>
            <div className="case-lightbox-actions">
              <button type="button" aria-controls={imageId} aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>
                {zoomed ? <ZoomOut size={18} aria-hidden="true" /> : <ZoomIn size={18} aria-hidden="true" />}
                <span>{zoomed ? 'Fit image' : 'Zoom in'}</span>
              </button>
              <a href={shot.src} target="_blank" rel="noopener noreferrer" aria-label="Open original image in a new tab">
                <ExternalLink size={18} aria-hidden="true" /><span>Original</span>
              </a>
              <button type="button" onClick={close} aria-label="Close expanded image" autoFocus>
                <X size={21} aria-hidden="true" /><span>Close</span>
              </button>
            </div>
          </div>
          <div id={imageId} className={'case-lightbox-stage' + (zoomed ? ' is-zoomed' : '')}
            tabIndex={0} role="region" aria-label="Expanded image. When zoomed, scroll to explore.">
            {isOpen && <img src={shot.src} alt={shot.caption} />}
          </div>
          <p id={captionId} className="case-lightbox-caption">{shot.caption}</p>
        </div>
      </dialog>
    </>
  );
}
