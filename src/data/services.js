export const serviceTiers = [
  {
    name: 'Clarity Session',
    price: '£250',
    shortDesc: 'Assess your idea. Define scope. Identify next steps.',
    whatItIs: 'A 60–90 minute working session focused on your idea.',
    whatYouGet: 'A clear assessment of what to build, what to skip, what it\'ll take, and recommended next steps.',
    whatHappens: 'You tell me what you\'re thinking. I ask the questions that matter. We figure out whether this is worth building and what the first version should look like.',
    bestFor: 'People with an idea who aren\'t sure where to start.',
    timeline: null,
    examples: null,
  },
  {
    name: 'Website Build',
    price: 'From £2,000',
    shortDesc: 'Positioning, design, and development. Strategy included.',
    whatItIs: 'Positioning, design, and development of a focused business website.',
    whatYouGet: 'A live, deployed website that communicates clearly, looks distinctive, and works on every device.',
    whatHappens: 'We start with positioning (what you\'re really saying and to whom), then design, then build. Strategy is included — I don\'t just build what you ask for, I help you figure out what you actually need.',
    bestFor: 'Businesses that need a website that actually works, not just exists.',
    timeline: '2–4 weeks',
    examples: 'Small Circle Jujitsu',
  },
  {
    name: 'Product Sprint',
    price: 'From £5,000',
    shortDesc: 'A working prototype or first version. Scoped, agreed, shipped.',
    whatItIs: 'A tightly scoped prototype or first working version of an app, tool, or platform.',
    whatYouGet: 'A working product with one core workflow, deployed and ready for real users.',
    whatHappens: 'We define scope together (the Clarity Session is a good starting point). I build the first version. You get something real to test, sell, and iterate on.',
    bestFor: 'Founders who need a first version of something real.',
    timeline: '4–8 weeks depending on scope',
    examples: 'FirstLook, KSA Surf Passport, SoundPals',
    boundary: 'One core workflow, agreed deliverables. Hosting and ongoing development are separate conversations.',
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
    q: 'Can one person really build all this?',
    a: 'See the portfolio. Yes.',
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
];
