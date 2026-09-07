import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="text-white" size={20} />
        </div>
        <h3 className="text-xl font-display font-bold text-primary mb-2">Thanks.</h3>
        <p className="text-body">I'll come back to you within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-white border border-border rounded-lg px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-white border border-border rounded-lg px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="project" className="block text-sm font-medium text-primary mb-1.5">
          What do you want to build or improve?
        </label>
        <textarea
          id="project"
          name="project"
          required
          rows={4}
          className="w-full bg-white border border-border rounded-lg px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
          placeholder="Tell me about your idea, project, or problem..."
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-primary mb-1.5">Rough budget</label>
        <select
          id="budget"
          name="budget"
          className="w-full bg-white border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
        >
          <option value="">Select a range</option>
          {budgetOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="source" className="block text-sm font-medium text-primary mb-1.5">
          How did you find me? <span className="text-muted">(optional)</span>
        </label>
        <input
          type="text"
          id="source"
          name="source"
          className="w-full bg-white border border-border rounded-lg px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          placeholder="LinkedIn, Google, referral..."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary text-white font-display font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Send it over'}
      </button>
    </form>
  );
}
