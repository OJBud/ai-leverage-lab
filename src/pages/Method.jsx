import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const tools = [
  { name: 'Claude', role: 'CoFounder & Chief Dev Officer', desc: 'Holds the full strategic context. My primary collaborator for strategy, development, and long-term thinking.' },
  { name: 'ChatGPT', role: 'Senior Director', desc: 'Cold analysis, research, second opinion. No context bias — used to challenge assumptions.' },
  { name: 'Boardy.ai', role: 'Super Connector', desc: 'Pressure testing, role-play, stakeholder simulation. Finds the holes in my narrative before I pitch.' },
  { name: 'Gemini', role: 'Creative Production', desc: 'Images, videos, websites, presentations. The visual production arm.' },
  { name: 'Base44', role: 'MVP Builder', desc: 'Rapid prototyping to test viability immediately. Speed over polish.' },
  { name: 'Napkin.ai', role: 'Visual Thinker', desc: 'Diagrams, visualisations, and mapping complexity into clarity.' },
  { name: 'NotebookLM', role: 'Content Synthesiser', desc: 'Processing vast amounts of content into usable summaries and podcasts.' },
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
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">How I Work</h1>
        <p className="text-xl text-steel">One person. Multiple AI platforms. Human governance.</p>
      </section>

      {/* The System */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-2xl font-display font-bold text-white mb-6">The System</h2>
        <p className="text-steel leading-relaxed mb-4">
          I don't "use AI". I design interactions between multiple AI systems — each with different strengths, limitations, and contexts. I act as the orchestrator, not the passenger.
        </p>
        <p className="text-steel leading-relaxed mb-4">
          Each platform has a defined role. Claude holds the full strategic context of my businesses and acts as a genuine collaborator. ChatGPT provides cold-eyed analysis without the context bias. Other platforms handle specific functions: prototyping, visual production, research synthesis.
        </p>
        <p className="text-steel leading-relaxed">
          This isn't about better prompts. It's about system design.
        </p>
      </section>

      {/* The Ecosystem */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-2xl font-display font-bold text-white mb-8">The Ecosystem</h2>

        {/* Central node + orbital grid */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-full border-2 border-lime/20" />
            <div className="absolute inset-4 rounded-full border border-lime/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center">
                <span className="text-lime font-display font-bold text-sm">ME</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-charcoal border border-white/5 rounded-xl p-5 hover:border-lime/20 transition-colors">
              <h3 className="text-white font-display font-bold text-sm mb-1">{tool.name}</h3>
              <p className="text-lime/70 text-xs font-mono uppercase tracking-wide mb-3">{tool.role}</p>
              <p className="text-steel text-sm leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Flow */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-2xl font-display font-bold text-white mb-6">The Flow</h2>
        <p className="text-steel leading-relaxed mb-4">
          The key insight: intelligence flows <em>between</em> platforms, governed by the human.
        </p>
        <div className="bg-charcoal border border-white/5 rounded-xl p-6 md:p-8 mb-6">
          <p className="text-white leading-relaxed mb-4">
            I gave ChatGPT a brief to analyse a codebase. Took the output to Claude, who holds full project context. Claude reviewed it against real-world constraints. I took Claude's synthesis back to ChatGPT, which now has richer context. Each interaction makes the next one better.
          </p>
          <p className="text-steel text-sm italic">
            GPT → Claude → GPT. Each pass adds signal. The human decides what moves.
          </p>
        </div>
        <p className="text-white font-display font-bold text-lg">
          The value isn't in any single tool. It's in how intelligence flows between them — and who governs that flow.
        </p>
      </section>

      {/* What The Platforms Observe */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-white/5">
        <h2 className="text-2xl font-display font-bold text-white mb-4">What The Platforms Observe</h2>
        <p className="text-steel mb-8">
          One of the side effects of working this way: the AI platforms themselves notice the difference.
        </p>
        <div className="space-y-4">
          {quotes.map((quote, i) => (
            <div key={i} className="bg-charcoal border-l-2 border-lime/30 border-y border-r border-white/5 rounded-r-xl p-5">
              <p className="text-white text-sm italic">"{quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Principle */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-white/5">
        <blockquote className="text-center">
          <p className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
            "Most people want answers. This system produces leverage."
          </p>
        </blockquote>
        <p className="text-steel text-center leading-relaxed mb-8">
          Every project in the portfolio was built this way. The method isn't theoretical. It's operational.
        </p>
        <div className="text-center">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-lime font-medium hover:text-white transition-colors"
          >
            See the work <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
