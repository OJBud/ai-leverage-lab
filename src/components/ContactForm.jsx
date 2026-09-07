import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const budgetOptions = [
  'Under £1k',
  '£1k–3k',
  '£3k–5k',
  '£5k–10k',
  '£10k+',
  'Not sure yet',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email directly.');
      }
    } catch {
      setError('Something went wrong. Please try again or email directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-charcoal border border-lime/20 rounded-2xl p-10 text-center">
        <div className="w-12 h-12 bg-lime/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <ArrowRight className="text-lime" size={20} />
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-2">Thanks.</h3>
        <p className="text-steel">I'll come back to you within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-steel mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel/40 focus:outline-none focus:border-lime/50 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-steel mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel/40 focus:outline-none focus:border-lime/50 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="project" className="block text-sm font-medium text-steel mb-2">
          What do you want to build or improve?
        </label>
        <textarea
          id="project"
          name="project"
          required
          rows={4}
          className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel/40 focus:outline-none focus:border-lime/50 transition-colors resize-none"
          placeholder="Tell me about your idea, project, or problem..."
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-steel mb-2">Rough budget</label>
        <select
          id="budget"
          name="budget"
          className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime/50 transition-colors appearance-none"
        >
          <option value="">Select a range</option>
          {budgetOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="source" className="block text-sm font-medium text-steel mb-2">
          How did you find me? <span className="text-steel/40">(optional)</span>
        </label>
        <input
          type="text"
          id="source"
          name="source"
          className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel/40 focus:outline-none focus:border-lime/50 transition-colors"
          placeholder="LinkedIn, Google, referral..."
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-lime text-jet font-display font-bold py-4 rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Send it over'}
      </button>
    </form>
  );
}
