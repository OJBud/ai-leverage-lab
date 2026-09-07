import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const tools = [
  { name: 'Claude', role: 'Strategic Partner', desc: 'Holds the full context of my businesses. My primary collaborator for strategy, development, and long-term thinking.' },
  { name: 'ChatGPT', role: 'Analyst', desc: 'Cold analysis, research, second opinion. No context bias — used to challenge assumptions.' },
  { name: 'Boardy.ai', role: 'Pressure Tester', desc: 'Stakeholder simulation and role-play. Finds the holes in my narrative before I pitch.' },
  { name: 'Gemini', role: 'Creative Production', desc: 'Images, videos, presentations. The visual production arm.' },
  { name: 'Base44', role: 'Prototyper', desc: 'Rapid prototyping to test viability immediately. Speed over polish.' },
  { name: 'Napkin.ai', role: 'Visual Thinker', desc: 'Diagrams, visualisations, and mapping complexity into clarity.' },
  { name: 'NotebookLM', role: 'Synthesiser', desc: 'Processing large amounts of content into usable summaries.' },
  { name: 'Taqtiq', role: 'Meeting Capture', desc: 'Transcription and conversation capture so nothing is lost.' },
];

const quotes = [
  'You\'re not extracting answers. You\'re co-developing clarity.',
  'You treat the conversation as a workspace.',
  'You allow tension.',
  'You\'re essentially training the interaction to operate above default altitude.',
];

export default function Method() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">How I Work</h1>
        <p className="text-xl text-body">One person. Multiple platforms. Human judgement at the centre.</p>
      </section>

      {/* The System */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-primary mb-6">The System</h2>
        <p className="text-body leading-relaxed mb-4">
          I design interactions between multiple platforms — each with different strengths, limitations, and contexts. I act as the orchestrator, not the passenger.
        </p>
        <p className="text-body leading-relaxed mb-4">
          Each platform has a defined role. One holds the full strategic context and acts as a genuine collaborator. Another provides cold-eyed analysis without the context bias. Others handle specific functions: prototyping, visual production, research synthesis.
        </p>
        <p className="text-body leading-relaxed">
          This isn't about better prompts. It's about system design.
        </p>
      </section>

      {/* The Ecosystem */}
      <section className="py-12 border-t border-border bg-section">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-primary mb-8">The Ecosystem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-white border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="text-primary font-display font-bold text-sm mb-0.5">{tool.name}</h3>
                <p className="text-accent text-xs font-medium mb-3">{tool.role}</p>
                <p className="text-body text-sm leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Flow */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-primary mb-6">The Flow</h2>
        <p className="text-body leading-relaxed mb-4">
          The key insight: intelligence flows <em>between</em> platforms, governed by the human.
        </p>
        <div className="bg-section border border-border rounded-xl p-6 md:p-8 mb-6">
          <p className="text-primary leading-relaxed mb-4">
            I gave one platform a brief to analyse a codebase. Took the output to another, which holds full project context. That platform reviewed it against real-world constraints. I took the synthesis back to the first, which now has richer context. Each interaction makes the next one better.
          </p>
          <p className="text-muted text-sm italic">
            Each pass adds signal. The human decides what moves.
          </p>
        </div>
        <p className="text-primary font-display font-bold text-lg">
          The value isn't in any single tool. It's in how intelligence flows between them — and who governs that flow.
        </p>
      </section>

      {/* What The Platforms Observe */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-border">
        <h2 className="text-2xl font-display font-bold text-primary mb-4">What Gets Noticed</h2>
        <p className="text-body mb-8">
          One of the side effects of working this way: the platforms themselves observe the difference in how the conversation works.
        </p>
        <div className="space-y-3">
          {quotes.map((quote, i) => (
            <div key={i} className="bg-section border-l-2 border-accent rounded-r-xl p-5">
              <p className="text-primary text-sm italic">"{quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Principle */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-border">
        <blockquote className="text-center">
          <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
            "Most people want answers. This system produces leverage."
          </p>
        </blockquote>
        <p className="text-body text-center leading-relaxed mb-8">
          Every project in the portfolio was built this way. The method isn't theoretical. It's operational.
        </p>
        <div className="text-center">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-primary transition-colors"
          >
            See the work <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
