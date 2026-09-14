import { useId, useRef, useState } from 'react';
import { Compass, Layers, MessagesSquare, Send, ArrowUpRight } from 'lucide-react';
import { processPoints } from '../data/process';

const icons = [Compass, Layers, MessagesSquare, Send];

export default function ProcessExplorer() {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef([]);

  function navigate(event, index) {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % processPoints.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + processPoints.length - 1) % processPoints.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = processPoints.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section className="process-explorer" aria-labelledby={id + '-heading'}>
      <div className="bud-shell">
        <div className="process-heading">
          <div><p className="bud-eyebrow">HOW THE WORK MOVES</p><h2 id={id + '-heading'}>From the first question<br /><span>to something real.</span></h2></div>
          <p>No mystery in the middle. Explore the four stages to see what happens and what you leave with.</p>
        </div>
        <div className="process-workspace">
          <div className="process-tabs" role="tablist" aria-label="The four stages of the process" aria-orientation="vertical">
            {processPoints.map((step, index) => (
              <button key={step.number} ref={(node) => { tabs.current[index] = node; }} type="button"
                role="tab" id={id + '-tab-' + index} aria-controls={id + '-panel-' + index}
                aria-selected={active === index} tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)} onKeyDown={(event) => navigate(event, index)}>
                <span className="process-tab-number">{step.number}</span><span>{step.label}</span><ArrowUpRight size={19} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="process-card-stack">
            {processPoints.map((step, index) => {
              const Icon = icons[index];
              return <div key={step.number} id={id + '-panel-' + index} role="tabpanel"
                aria-labelledby={id + '-tab-' + index} tabIndex={0} hidden={active !== index} className="process-panel">
                <div className="process-panel-top"><span>THE PROCESS / {step.number}</span><Icon size={46} strokeWidth={1.5} aria-hidden="true" /></div>
                <div><span className="process-big-number" aria-hidden="true">{step.number}</span><h3>{step.title}</h3><p>{step.desc}</p></div>
                <div className="process-output"><span>YOU LEAVE WITH</span><strong>{step.output}</strong></div>
              </div>;
            })}
          </div>
        </div>
        <p className="process-footnote">Clear scope. Regular conversations. Something useful at the end.</p>
      </div>
    </section>
  );
}
