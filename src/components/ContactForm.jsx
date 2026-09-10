import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
// Public Web3Forms access key - safe to expose in client-side code.
const WEB3FORMS_ACCESS_KEY = 'f9bfd11b-a824-4cca-aa62-11cf07094f6d';

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
      const res = await fetch(WEB3FORMS_ENDPOINT, {
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
      <div className="bg-peach border border-orange-200 rounded-2xl p-10 text-center">
        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="text-white" size={20} />
        </div>
        <h3 className="text-xl font-display font-bold text-ink mb-2">Thanks.</h3>
        <p className="text-body">I'll come back to you within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="New enquiry from AI Levels Lab" />
      <input type="hidden" name="from_name" value="AI Levels Lab website" />
      {/* honeypot: bots tick this, humans never see it */}
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-white border border-border rounded-lg px-4 py-3 text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-white border border-border rounded-lg px-4 py-3 text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="project" className="block text-sm font-medium text-ink mb-1.5">
          What do you want to build or improve?
        </label>
        <textarea
          id="project"
          name="project"
          required
          rows={4}
          className="w-full bg-white border border-border rounded-lg px-4 py-3 text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
          placeholder="Tell me about your idea, project, or problem..."
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-ink mb-1.5">Rough budget</label>
        <select
          id="budget"
          name="budget"
          className="w-full bg-white border border-border rounded-lg px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
        >
          <option value="">Select a range</option>
          {budgetOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="source" className="block text-sm font-medium text-ink mb-1.5">
          How did you find me? <span className="text-muted">(optional)</span>
        </label>
        <input
          type="text"
          id="source"
          name="source"
          className="w-full bg-white border border-border rounded-lg px-4 py-3 text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          placeholder="LinkedIn, Google, referral..."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-accent text-ink font-display font-bold py-4 rounded-lg hover:bg-orange-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Send it over'}
      </button>
    </form>
  );
}
