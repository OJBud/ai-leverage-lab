export const serviceTiers = [
  {
    name: 'Clarity Session',
    price: '£150',
    shortDesc: '60–90 minutes on your idea. Credited against a Product Sprint if you book within 30 days.',
    whatItIs: 'A paid working session, 60–90 minutes, on the thing you want to build.',
    whatYouGet: 'A clear view of what to build, what to skip, what it will take, and whether it is worth doing at all. Book a Product Sprint within 30 days and the £150 comes off the sprint.',
    whatHappens: 'You tell me what you\'re thinking. I ask the questions that matter. You leave knowing whether a sprint makes sense, and what the first version should actually be.',
    bestFor: 'People with an idea who aren\'t sure where to start, or who want the scope agreed before anyone builds it.',
    timeline: '60–90 minutes',
    examples: null,
  },
  {
    name: 'Website Build',
    price: 'From £1,500',
    shortDesc: 'Positioning, design, and development. Strategy included.',
    whatItIs: 'Positioning, design, and development of a focused business website.',
    whatYouGet: 'A live, deployed website that communicates clearly, looks distinctive, and works on every device.',
    whatHappens: 'We start with positioning (what you\'re really saying and to whom), then design, then build. Strategy is included - I don\'t just build what you ask for, I help you figure out what you actually need.',
    bestFor: 'Businesses that need a website that actually works, not just exists.',
    timeline: '2–4 weeks',
    examples: [
      { href: '/work/small-circle', label: 'Small Circle Jujitsu' },
      { href: '/work/whiteball-media', label: 'White Ball Media', note: 'a finished site, live' },
    ],
  },
  {
    name: 'Product Sprint',
    price: '£5,500',
    priceNote: '£3,500 only for a genuinely small workflow that comes out of the Clarity Session.',
    shortDesc: 'One working workflow, live as a web app, in 4 to 8 weeks.',
    whatItIs: 'One core workflow, designed, built and put live. A fixed window and a fixed scope. A web app real people can use.',
    whatYouGet: 'A short written scope we both sign off before any build starts: the one workflow, who uses it, and what done looks like. Simple UX and visual design for that workflow, enough to look like a real product. The workflow built end to end: the screens, the data behind them, and sign-in if it needs it. Regular check-ins, and a working version you can click through before the last week. A handover: what is live, where it lives, how to log in, and what to do next.',
    whatHappens: 'It starts with a Clarity Session, then a written scope and a fixed price. Nothing starts until both are agreed. You see it working as it goes. In the last week it is tested with real people, fixed once from that testing, put live, and handed over.',
    terms: [
      '£5,500 fixed. £3,500 only when the Clarity Session shows the workflow is genuinely small.',
      'The £150 Clarity Session is credited against the sprint if you book within 30 days.',
      'Payment is half up front, half at go-live. You own the code once the final half is paid.',
      'An iOS or Android store release is not included. If discovery shows the workflow needs one, that is scoped afterwards.',
      'Hosting, domains and third-party fees are extra, in your name where possible. Ongoing work after handover is a separate conversation.',
      'No service level agreement. No uptime promise, and no response-time guarantee.',
    ],
    bestFor: 'Non-technical founders, domain experts and small organisations who need one thing that works. Not a platform on day one, and not a team to manage.',
    timeline: '4–8 weeks',
    examples: 'BudApp, FirstLook',
  },
];

export const processSteps = [
  { number: '01', title: 'You tell me what you need', desc: 'Enquiry via the contact form or email.' },
  { number: '02', title: 'We figure out the right scope', desc: 'A conversation (or Clarity Session) to define what gets built.' },
  { number: '03', title: 'I build it', desc: 'Design and development, with regular check-ins.' },
  { number: '04', title: 'You get something real', desc: 'A deployed, working product.' },
];

export const faqs = [
  {
    q: 'How does one person cover both marketing and build?',
    a: 'Twenty years of domain expertise, plus AI leverage. The portfolio is the proof.',
  },
  {
    q: 'What tech stack do you use?',
    a: 'Whatever fits the problem. React, Flutter, Firebase, Supabase, Vercel. I\'m tool-agnostic.',
  },
  {
    q: 'What about ongoing maintenance?',
    a: 'We can discuss retainer arrangements for products that need ongoing work.',
  },
  {
    q: 'Do you do design?',
    a: 'Yes. Positioning, brand, UX, visual design, and development. End to end.',
  },
  {
    q: 'How does payment work on a Product Sprint?',
    a: 'Half up front, half at go-live. You own the code once that final half is paid. Hosting and any work after handover are extra. There is no SLA.',
  },
  {
    q: 'Does the sprint include an App Store or Google Play release?',
    a: 'No. You get one workflow, live as a web app. An iOS or Android store release is scoped only after discovery, and only if the work needs it. It is not in the £5,500.',
  },
];
