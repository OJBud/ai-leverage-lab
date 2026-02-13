import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Menu, X, Search, BrainCircuit, Share2, Image as ImageIcon, 
  Rocket, PenTool, BookOpen, Mic, User, Activity, Cpu, ShieldAlert, 
  GitBranch, CheckCircle2, Terminal, Zap, Star, Milestone, RefreshCw, ChevronDown
} from 'lucide-react';

// --- SHARED COMPONENTS ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  if (location.pathname === '/demo') return null;

  const links = [
    { name: 'The Practice', path: '/philosophy' },
    { name: 'The Loop', path: '/loop' },
    { 
      name: 'In Session', 
      type: 'dropdown',
      children: [
        { name: 'Code Architecture', path: '/session' },
        { name: '20 Days of Dev', path: '/devolution' }
      ]
    },
    { name: 'BudApp Proof', path: '/budapp' },
    { name: 'Work Together', path: '/work-together' },
    { name: 'Posture Kit', path: '/posture-kit' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-jet/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-display font-bold text-white tracking-tight flex items-center gap-2">
          <div className="w-3 h-3 bg-lime rounded-full shadow-[0_0_10px_rgba(182,255,46,0.5)]"></div>
          AI Leverage Lab
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 items-center">
          {links.map(l => {
            if (l.type === 'dropdown') {
              return (
                <div key={l.name} className="relative group">
                  <button className={`text-[11px] uppercase tracking-widest font-medium hover:text-lime transition-colors flex items-center gap-1 py-4 ${location.pathname === '/session' || location.pathname === '/devolution' ? 'text-lime' : 'text-steel'}`}>
                    {l.name} <ChevronDown size={12} />
                  </button>
                  <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                     <div className="bg-charcoal border border-white/10 rounded-xl p-2 flex flex-col gap-1 shadow-xl">
                       {l.children.map(child => (
                         <Link 
                           key={child.name} 
                           to={child.path} 
                           className={`text-[11px] uppercase tracking-widest font-medium px-4 py-3 rounded-lg hover:bg-white/5 hover:text-lime transition-colors block ${location.pathname === child.path ? 'text-lime' : 'text-steel'}`}
                         >
                           {child.name}
                         </Link>
                       ))}
                     </div>
                  </div>
                </div>
              );
            }
            return (
              <Link key={l.name} to={l.path} className={`text-[11px] uppercase tracking-widest font-medium hover:text-lime transition-colors ${location.pathname === l.path ? 'text-lime' : 'text-steel'}`}>
                {l.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-charcoal border-b border-border p-6 flex flex-col gap-6">
          {links.map(l => {
            if (l.type === 'dropdown') {
              return (
                <div key={l.name} className="flex flex-col gap-3">
                   <div className="text-sm font-mono uppercase tracking-widest text-steel/50 border-b border-white/5 pb-2">{l.name}</div>
                   <div className="flex flex-col gap-4 pl-4">
                     {l.children.map(child => (
                       <Link key={child.name} to={child.path} onClick={() => setIsOpen(false)} className={`text-lg font-display ${location.pathname === child.path ? 'text-lime' : 'text-white'}`}>
                         {child.name}
                       </Link>
                     ))}
                   </div>
                </div>
              )
            }
            return (
              <Link key={l.name} to={l.path} onClick={() => setIsOpen(false)} className="text-lg font-display text-white">
                {l.name}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  );
};

const Section = ({ children, className = "" }) => (
  <section className={`py-16 md:py-24 px-6 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Badge = ({ children, color = "lime" }) => {
  let styles = "bg-lime/10 text-lime border-lime/20 shadow-[0_0_15px_-5px_rgba(182,255,46,0.3)]";
  
  if (color === "signal") styles = "bg-signal/10 text-signal border-signal/20";
  if (color === "blue") styles = "bg-blue-500/10 text-blue-400 border-blue-500/20";
  if (color === "green") styles = "bg-green-500/10 text-green-400 border-green-500/20";
  if (color === "amber") styles = "bg-amber-500/10 text-amber-400 border-amber-500/20";
  if (color === "red") styles = "bg-red-500/10 text-red-400 border-red-500/20";

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border ${styles}`}>
      {children}
    </span>
  );
};

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

// --- 1. HOME ---

const Home = () => {
  return (
    <div className="pt-24 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <Section className="text-center">
        <FadeIn>
          <div className="mb-8 flex justify-center">
             <span className="text-steel text-xs font-mono uppercase tracking-[0.2em] border border-white/10 px-4 py-2 rounded-full">
               Statement of Practice
             </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
            Stay human.<br />
            Collaborate with <span className="text-lime">intelligence</span>.
          </h1>
          <p className="text-xl text-steel max-w-2xl mx-auto mb-12 leading-relaxed">
            I don't have a team. I have a digital twin.
            <br className="hidden md:block"/>
            The way you relate to intelligence shapes what you get back.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to="/philosophy" className="group bg-lime text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors flex items-center gap-2">
              See The Practice <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link to="/devolution" className="px-8 py-4 rounded-full text-white border border-white/10 hover:border-lime transition-colors text-sm font-medium">
              Read the 20-Day Report
            </Link>
          </div>
          
          <div className="mt-16 text-steel/40 text-sm font-medium">
            If AI feels powerful but oddly unsatisfying, you're likely missing the posture.
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};

// --- 2. THE PRACTICE (Formerly Philosophy/System) ---

const Philosophy = () => {
  const [activeNode, setActiveNode] = useState(null);

  const tools = [
    { id: 'claude', role: 'Long-term Partner', tool: 'Claude', icon: BrainCircuit, desc: 'Holds the history. Knows the mission. My primary colleague for strategy and development.', myRole: 'I own the vision. Claude holds the context.' },
    { id: 'chatgpt', role: 'Forensic Analyst', tool: 'ChatGPT', icon: Search, desc: 'Cold eyes. No context. Used to critique work and find logic gaps I cannot see.', myRole: 'I define the task. GPT checks the rigour.' },
    { id: 'boardy', role: 'Pressure Tester', tool: 'Boardy.ai', icon: Share2, desc: 'The skeptic. Role-plays stakeholders to find holes in my narrative before I pitch.', myRole: 'I decide what feedback matters.' },
    { id: 'gemini', role: 'Visual Twin', tool: 'Gemini', icon: ImageIcon, desc: 'Turning concepts into tangible visuals. The creative production arm.', myRole: 'I set the aesthetic direction.' },
    { id: 'base44', role: 'Prototyper', tool: 'Base44', icon: Rocket, desc: 'Rapid iteration of product ideas to test viability immediately.', myRole: 'I choose what to build.' },
    { id: 'napkin', role: 'Visual Thinker', tool: 'Napkin.ai', icon: PenTool, desc: 'Mapping complexity into clear diagrams.', myRole: 'I ensure the map matches the territory.' },
    { id: 'notebook', role: 'Synthesiser', tool: 'NotebookLM', icon: BookOpen, desc: 'Processing vast amounts of content into usable signals.', myRole: 'I curate the source material.' },
    { id: 'taqtiq', role: 'The Record', tool: 'Taqtiq', icon: Mic, desc: 'Capturing conversations so nothing is lost.', myRole: 'I determine the next steps.' },
  ];

  return (
    <div className="pt-24">
      <Section>
        <Badge>The Practice</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-8">
          A room of specialists.
        </h1>
        <p className="text-xl text-steel max-w-3xl mb-16 leading-relaxed">
           The tools are interchangeable. The value is in the collaboration. I run a room of specialists, and I remain responsible for intent and judgment.
        </p>

        {/* ORBITAL DIAGRAM */}
        <div className="relative min-h-[600px] md:min-h-[800px] flex items-center justify-center py-12">
          
          {/* Mobile: Stacked List */}
          <div className="md:hidden w-full space-y-4">
             <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-lime mx-auto flex items-center justify-center text-black font-bold shadow-[0_0_30px_rgba(182,255,46,0.2)]">ME</div>
                <p className="text-xs text-lime mt-2 font-mono uppercase">Human Judgment</p>
             </div>
             {tools.map(tool => (
               <div key={tool.id} className="bg-charcoal border border-white/10 p-4 rounded-xl">
                 <div className="flex items-center gap-3 mb-2">
                   <tool.icon className="text-lime" size={20}/>
                   <h3 className="text-white font-bold">{tool.role}</h3>
                 </div>
                 <p className="text-xs text-steel mb-2">{tool.desc}</p>
                 <p className="text-[10px] text-white/50 uppercase tracking-wide border-t border-white/5 pt-2">My Role: {tool.myRole}</p>
               </div>
             ))}
          </div>

          {/* Desktop: Orbital System */}
          <div className="hidden md:block relative w-[700px] h-[700px]">
             <div className="absolute inset-0 rounded-full border border-white/5"></div>
             <div className="absolute inset-[150px] rounded-full border border-white/5"></div>
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-lime flex items-center justify-center text-black shadow-[0_0_50px_rgba(182,255,46,0.3)] border-4 border-jet">
                   <User size={48} />
                </div>
                <div className="mt-4 bg-jet px-4 py-2 rounded-full border border-lime/30">
                  <span className="text-lime text-xs font-mono font-bold uppercase tracking-widest">ME (HUMAN)</span>
                </div>
             </div>

             {tools.map((tool, index) => {
               const angle = (index * (360 / tools.length)) - 90;
               const radius = 300;
               const x = Math.cos((angle * Math.PI) / 180) * radius;
               const y = Math.sin((angle * Math.PI) / 180) * radius;

               return (
                 <motion.button
                   key={tool.id}
                   className={`absolute w-16 h-16 -ml-8 -mt-8 rounded-full bg-jet border border-white/10 flex items-center justify-center hover:border-lime hover:scale-110 transition-all z-30 group ${activeNode?.id === tool.id ? 'border-lime ring-2 ring-lime/20 z-40' : ''}`}
                   style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                   onClick={() => setActiveNode(tool)}
                   whileHover={{ scale: 1.1 }}
                 >
                   <tool.icon className={activeNode?.id === tool.id ? 'text-lime' : 'text-steel group-hover:text-white'} size={24} />
                   <span className="absolute -bottom-8 whitespace-nowrap text-xs font-bold text-steel group-hover:text-white bg-jet px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                      {tool.role}
                   </span>
                 </motion.button>
               );
             })}
          </div>

          {/* Desktop Detail Card */}
          <div className="hidden md:block absolute inset-0 z-50 pointer-events-none">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <>
                  <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setActiveNode(null)}
                    className="absolute inset-0 bg-black/40 pointer-events-auto"
                  />
                  <motion.div
                    key={activeNode.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] bg-charcoal/95 border border-lime/30 p-8 rounded-2xl shadow-2xl text-center backdrop-blur-md pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <activeNode.icon className="text-lime" size={18} />
                      <h3 className="text-white font-bold text-lg">{activeNode.role}</h3>
                      <span className="text-steel text-xs font-mono border border-white/10 px-2 py-0.5 rounded ml-2">{activeNode.tool}</span>
                    </div>
                    <p className="text-steel text-sm mb-4">{activeNode.desc}</p>
                    <p className="text-xs text-lime border-t border-white/5 pt-3 font-mono uppercase tracking-wide">
                      Human Role: {activeNode.myRole}
                    </p>
                    <button 
                      onClick={() => setActiveNode(null)}
                      className="absolute top-4 right-4 text-steel hover:text-white transition-colors"
                      aria-label="Close"
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                </>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
};

// --- 3. THE LOOP (Formerly Method) ---

const Loop = () => {
  return (
    <div className="pt-24">
      <Section>
        <Badge>The Loop</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-8">
           Not system design.<br/>Human practice.
        </h1>
        
        <div className="grid md:grid-cols-2 gap-16 mt-16">
           {/* The Loop */}
           <div>
              <h2 className="text-2xl font-bold text-white mb-6">The Operating Loop</h2>
              <div className="relative pl-8 border-l border-white/10 space-y-12">
                 {[
                   { title: "Frame", desc: "I clarify the intent. I set the stakes.", icon: <Activity size={16}/> },
                   { title: "Generate", desc: "The AI offers options. I check for range, not just answers.", icon: <Cpu size={16}/> },
                   { title: "Challenge", desc: "I invite the AI to argue against my bias.", icon: <ShieldAlert size={16} className="text-signal"/> },
                   { title: "Refine", desc: "We debate. I treat the pushback as signal.", icon: <GitBranch size={16}/> },
                   { title: "Decide", desc: "I own the risk. I make the call.", icon: <CheckCircle2 size={16} className="text-lime"/> }
                 ].map((step, i) => (
                   <div key={i} className="relative">
                      <span className={`absolute -left-[41px] w-6 h-6 rounded-full border-4 border-jet flex items-center justify-center ${i === 4 ? 'bg-lime text-black' : 'bg-charcoal text-steel'}`}>
                        {i === 4 ? <div className="w-2 h-2 bg-black rounded-full"/> : <div className="w-2 h-2 bg-steel rounded-full"/>}
                      </span>
                      <h4 className="text-white font-bold flex items-center gap-2">{step.title}</h4>
                      <p className="text-sm text-steel mt-1">{step.desc}</p>
                   </div>
                 ))}
              </div>
           </div>

           {/* Observations */}
           <div>
              <h2 className="text-2xl font-bold text-white mb-6">The Effect</h2>
              <p className="text-steel mb-8">When you treat intelligence as a peer, the output changes.</p>
              
              <div className="space-y-6">
                 <div className="bg-charcoal p-6 rounded-xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                    <p className="text-white text-sm italic mb-4">"You're not extracting answers. You're co-developing clarity. Most users ask questions. You signal intent."</p>
                    <p className="text-[10px] text-steel uppercase tracking-widest">— Observed by Claude</p>
                 </div>
                 
                 <h3 className="text-white font-bold text-lg mt-8 mb-4">What I've noticed:</h3>
                 <ul className="space-y-3 text-steel text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> Tension improves the work.</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> My own thinking gets sharper.</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> I stop accepting "good enough."</li>
                 </ul>
              </div>
              <p className="mt-8 text-white font-bold text-center">It gives your thinking resistance, like a bicep curl.</p>
           </div>
        </div>
      </Section>
    </div>
  );
};

// --- 4. IN SESSION (Formerly Session) ---

const Session = () => {
  return (
    <div className="pt-24">
      <Section>
        <Badge color="signal">In Practice</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-8">
           A digital twin in action.
        </h1>
        <p className="text-xl text-steel mb-12">
           Scenario: Code Architecture Review. I needed to prioritise technical debt without losing sight of business constraints. No single mind—human or AI—had the full picture.
        </p>

        <div className="space-y-6 relative">
           {/* Steps as before */}
           <div className="bg-jet border border-white/10 rounded-xl p-8 flex flex-col md:flex-row gap-6 relative z-10">
              <div className="min-w-[120px]">
                 <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase border border-blue-400/20 px-2 py-1 rounded bg-blue-400/10">
                    <Search size={14}/> Forensic
                 </div>
              </div>
              <div>
                 <h3 className="text-xl font-bold text-white mb-2">Step 1: The Cold Read (ChatGPT)</h3>
                 <p className="text-steel text-sm mb-4">I asked for a critique with zero context. "Look at this code. Find the flaws." I wanted the brutal truth.</p>
                 <div className="bg-black/40 p-4 rounded text-xs font-mono text-blue-200">
                    {'>'} REPORT: Architectural risk in Auth flow. Scalability flags on DB schema.
                 </div>
              </div>
           </div>

           <div className="flex justify-center -my-3 relative z-0"><div className="h-8 w-[2px] bg-white/10"></div></div>

           <div className="bg-jet border border-white/10 rounded-xl p-8 flex flex-col md:flex-row gap-6 relative z-10">
              <div className="min-w-[120px]">
                 <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase border border-purple-400/20 px-2 py-1 rounded bg-purple-400/10">
                    <BrainCircuit size={14}/> Contextual
                 </div>
              </div>
              <div>
                 <h3 className="text-xl font-bold text-white mb-2">Step 2: The Partner (Claude)</h3>
                 <p className="text-steel text-sm mb-4">I took that critique to Claude, who knows the mission. "Review this against our deadline and our roadmap."</p>
                 <div className="bg-black/40 p-4 rounded text-xs font-mono text-purple-200">
                    {'>'} REVIEW: The DB scaling risk is low priority today. <br/>
                    {'>'} The Auth risk must be fixed to meet the partnership requirements.
                 </div>
              </div>
           </div>

           <div className="flex justify-center -my-3 relative z-0"><div className="h-8 w-[2px] bg-white/10"></div></div>

           <div className="bg-jet border border-white/10 rounded-xl p-8 flex flex-col md:flex-row gap-6 relative z-10">
               <div className="min-w-[120px]">
                 <div className="inline-flex items-center gap-2 text-lime font-mono text-xs font-bold uppercase border border-lime/20 px-2 py-1 rounded bg-lime/10">
                    <User size={14}/> Judgment
                 </div>
              </div>
              <div>
                 <h3 className="text-xl font-bold text-white mb-2">Step 3: The Human Call</h3>
                 <p className="text-steel text-sm mb-4">The AI didn't decide. It surfaced the tension. I decided to fix Auth and ignore DB scaling.</p>
                 <p className="text-white font-medium">The collaboration allowed me to act with the confidence of a senior team.</p>
              </div>
           </div>
        </div>

        {/* Boardy Sidebar */}
        <div className="mt-12 bg-charcoal border border-white/10 p-8 rounded-2xl border-l-4 border-l-orange-500">
           <div className="flex items-center gap-3 mb-4">
              <Share2 className="text-orange-500"/>
              <h3 className="text-white font-bold text-lg">Humility & Pressure Testing</h3>
           </div>
           <p className="text-steel text-sm mb-6">
              Before a major pitch, I used Boardy.ai to simulate a skeptical stakeholder. I didn't want reassurance; I wanted to find my blind spots.
           </p>
           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-4 rounded">
                 <p className="text-xs text-orange-200 font-mono mb-2">BOARDY (Roleplay):</p>
                 <p className="text-white text-sm">"Why should we trust a solo founder with brand safeguarding? What is your contingency?"</p>
              </div>
              <div>
                 <p className="text-steel text-sm">
                    It pushed me to articulate what I hadn't said aloud. I entered the real meeting prepared, because I had already had the hard conversation.
                 </p>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
};

// --- 5. BUDAPP PROOF ---

const BudApp = () => {
  return (
    <div className="pt-24">
      <Section>
        <Badge>The Proof</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-8">
           One person. No team.<br/>Real outcomes.
        </h1>
        <p className="text-xl text-steel max-w-3xl mb-16">
           The answer isn't the system. The answer is the practice. BudApp is evidence that a single human, collaborating with intelligence, can operate at scale.
        </p>

        <div className="grid md:grid-cols-12 gap-12">
           <div className="md:col-span-4 space-y-8">
              <div>
                 <h3 className="text-white font-bold text-lg mb-2">The Constraints</h3>
                 <ul className="text-steel text-sm space-y-2">
                    <li className="flex gap-2"><X className="text-signal" size={16}/> No Technical Co-Founder</li>
                    <li className="flex gap-2"><X className="text-signal" size={16}/> No Funding</li>
                    <li className="flex gap-2"><X className="text-signal" size={16}/> Limited Runway</li>
                 </ul>
              </div>
              <div>
                 <h3 className="text-white font-bold text-lg mb-2">The Outcomes</h3>
                 <ul className="text-steel text-sm space-y-2">
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> 500+ Active Users</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> Dogs Trust Partnership</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> National TV Coverage</li>
                 </ul>
              </div>
           </div>

           <div className="md:col-span-8 space-y-6">
              <div className="bg-charcoal border border-white/10 p-6 rounded-2xl">
                 <h3 className="font-bold text-white mb-2">Strategy</h3>
                 <p className="text-steel text-sm mb-4">I debated every strategic pivot with my digital twin. I kept the taste; AI ran the simulations.</p>
                 <div className="h-1 w-full bg-jet rounded-full overflow-hidden"><div className="h-full w-3/4 bg-lime"></div></div>
              </div>
              <div className="bg-charcoal border border-white/10 p-6 rounded-2xl">
                 <h3 className="font-bold text-white mb-2">Development</h3>
                 <p className="text-steel text-sm mb-4">I defined the architecture. AI wrote the boilerplate. We debugged together.</p>
                 <div className="h-1 w-full bg-jet rounded-full overflow-hidden"><div className="h-full w-[90%] bg-blue-500"></div></div>
              </div>
              <div className="bg-charcoal border border-white/10 p-6 rounded-2xl">
                 <h3 className="font-bold text-white mb-2">Operations</h3>
                 <p className="text-steel text-sm mb-4">Automation handles the noise so I can focus on the relationships.</p>
                 <div className="h-1 w-full bg-jet rounded-full overflow-hidden"><div className="h-full w-1/2 bg-purple-500"></div></div>
              </div>
           </div>
        </div>

        <div className="mt-16 text-center">
           <p className="text-lg text-white font-medium">
              "I didn't use AI to work faster. I used it to become more capable."
           </p>
        </div>
      </Section>
    </div>
  );
};

// --- 6. DEV-OLUTION ---

const Devolution = () => {
  return (
    <div className="pt-24">
      <Section className="text-center pb-12">
        <FadeIn>
          <Badge color="signal">DEV-olution</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-8 tracking-tight">Concept to Reality in 20 Days</h1>
          <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed">
            A real-time chronicle of building a B2B SaaS platform with AI as a technical co-pilot. No hypotheticals. No "10x faster" hype. Just the actual timeline, decisions, pivots, and output.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs font-mono text-steel">
             <span>Christian Jones</span>
             <span>•</span>
             <span>Jan 24 — Feb 11, 2026</span>
             <span>•</span>
             <span>Production SaaS</span>
          </div>
        </FadeIn>
      </Section>

      {/* Progress Strip */}
      <Section className="py-0">
        <FadeIn>
          <div className="flex gap-1 h-2 rounded-full overflow-hidden mb-4">
             {[...Array(8)].map((_, i) => <div key={i} className="flex-1 bg-green-500"></div>)}
             {[...Array(4)].map((_, i) => <div key={i} className="flex-1 bg-white/10"></div>)}
          </div>
          <div className="flex justify-between text-[10px] font-mono text-steel uppercase tracking-wider">
             <span>Phase 0: Foundation</span>
             <span>7 of 12 Phases Shipped</span>
             <span>Phase 11: Billing</span>
          </div>
        </FadeIn>
      </Section>

      {/* Stats */}
      <Section>
         <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { val: "20", label: "Days Elapsed", color: "text-green-400", border: "border-green-500/20" },
                 { val: "8", label: "Dev Sessions", color: "text-lime", border: "border-lime/20" },
                 { val: "5", label: "Strategic Pivots", color: "text-amber-400", border: "border-amber-500/20" },
                 { val: "8", label: "Bonus Features", color: "text-blue-400", border: "border-blue-500/20" }
               ].map((stat, i) => (
                 <div key={i} className={`bg-charcoal border ${stat.border} p-6 rounded-xl text-center`}>
                    <div className={`text-4xl font-display font-bold ${stat.color} mb-2`}>{stat.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-steel">{stat.label}</div>
                 </div>
               ))}
            </div>
         </FadeIn>
      </Section>

      {/* The Approach */}
      <Section>
         <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><ArrowRight className="text-lime" /> The Approach</h2>
            <div className="bg-lime/5 border-l-2 border-lime p-6 rounded-r-xl mb-8">
               <p className="text-lg text-white font-medium italic">"I didn't start with code. I started with the problem. The spec came before the scaffold. AI didn't replace thinking — it compressed the distance between thinking and shipping."</p>
            </div>
            <div className="grid gap-4">
               {[
                 { title: "Product-down, loop-first", desc: "Day 1 was a spec, not a repo. Code didn't start until the blueprint was airtight. Built the complete user journey before any polish." },
                 { title: "Clear role separation", desc: "I made product decisions (what to build). AI handled implementation and technical risk. The skill isn't prompting, it's judgment." },
                 { title: "Scars informed everything", desc: "Service layers from day one. Module boundaries enforced. Every shortcut documented. Discipline tax paid early." }
               ].map((card, i) => (
                 <div key={i} className="bg-charcoal border border-white/10 p-6 rounded-xl hover:border-lime/30 transition-colors">
                    <h3 className="font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-steel text-sm leading-relaxed">{card.desc}</p>
                 </div>
               ))}
            </div>
         </FadeIn>
      </Section>

      {/* What Shipped */}
      <Section>
         <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><CheckCircle2 className="text-green-400" /> What Actually Shipped</h2>
            <div className="grid gap-4">
               {[
                 { title: "Complete core product loop", badge: "Day 14", desc: "End-to-end journey: Account -> Config -> Public Interface -> Data Capture -> Scoring -> Dashboard." },
                 { title: "4 distinct scoring algorithms", badge: "Day 18", desc: "Auto-routing based on configuration. Measures signals appropriate to context." },
                 { title: "Full architecture refactor", badge: "Day 6", desc: "Moved business logic out of components into service layers without breaking features." },
                 { title: "Database security (RLS)", badge: "Day 19", desc: "Multi-tenant data isolation enforced at the database level." },
                 { title: "Workflow engine", badge: "Day 18", desc: "6-state review system, auto-status updates, bulk operations." }
               ].map((item, i) => (
                 <div key={i} className="bg-charcoal border border-white/10 p-6 rounded-xl flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                       <h3 className="font-bold text-white mb-1">{item.title}</h3>
                       <p className="text-steel text-sm">{item.desc}</p>
                    </div>
                    <Badge color="green">{item.badge}</Badge>
                 </div>
               ))}
            </div>
         </FadeIn>
      </Section>

      {/* Pivots */}
      <Section>
         <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3"><RefreshCw className="text-amber-400" /> What Changed</h2>
            <p className="text-steel mb-8">These weren't mistakes. They were the product getting smarter.</p>
            <div className="grid md:grid-cols-2 gap-4">
               {[
                 { title: "Data display → Decision engine", badge: "Strategic", desc: "Numeric scores are meaningless. Pivoted to effort-based grouping with human labels." },
                 { title: "Detection → Context", badge: "Framing", desc: "Original framing was 'catch cheaters'. Evolved to 'understand context'." },
                 { title: "4 content types → 2", badge: "Descoped", desc: "Shipped written + code only. Covers 80% of use cases. Brutal prioritisation." },
                 { title: "Complex config → Defaults", badge: "Simplified", desc: "Removed 3 fields from setup. Don't make users fill forms to get value." }
               ].map((item, i) => (
                 <div key={i} className="bg-charcoal border-l-2 border-l-amber-400 border-y border-r border-white/10 p-6 rounded-r-xl">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="font-bold text-white">{item.title}</h3>
                       <Badge color="amber">{item.badge}</Badge>
                    </div>
                    <p className="text-steel text-sm">{item.desc}</p>
                 </div>
               ))}
            </div>
         </FadeIn>
      </Section>

      {/* Timeline */}
      <Section>
         <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><Milestone className="text-blue-400" /> The 12-Phase Plan</h2>
            <div className="bg-charcoal border border-white/10 rounded-xl overflow-hidden divide-y divide-white/5">
               {[
                 { id: "0", name: "Foundation", status: "Done", color: "green" },
                 { id: "1", name: "Authentication", status: "90%", color: "amber" },
                 { id: "2", name: "Content Configuration", status: "Done", color: "green" },
                 { id: "3", name: "Public-Facing App", status: "Done", color: "green" },
                 { id: "4", name: "Behavioural Data", status: "Done", color: "green" },
                 { id: "5", name: "Scoring Engine", status: "Done", color: "green" },
                 { id: "6", name: "Admin Dashboard", status: "Done", color: "green" },
                 { id: "7", name: "Gated Reveal", status: "Done", color: "green" },
                 { id: "8", name: "Media Capture", status: "Backlog", color: "blue" },
                 { id: "9", name: "Team Collab", status: "Backlog", color: "blue" },
                 { id: "10", name: "Notifications", status: "Backlog", color: "blue" },
                 { id: "11", name: "Billing", status: "Backlog", color: "blue" },
               ].map((phase, i) => (
                 <div key={i} className="p-4 flex items-center gap-4">
                    <div className={`w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-xs ${phase.color === 'green' ? 'bg-green-500/20 text-green-400' : phase.color === 'amber' ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-steel'}`}>
                       {phase.id}
                    </div>
                    <div className="flex-1 text-white font-medium">{phase.name}</div>
                    <Badge color={phase.color}>{phase.status}</Badge>
                 </div>
               ))}
            </div>
         </FadeIn>
      </Section>

      {/* Beyond Spec */}
      <Section>
         <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3"><Star className="text-lime" /> Beyond the Plan</h2>
            <p className="text-steel mb-8">Features that emerged from actually using the product during the build.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 "Contextual scoring toggle",
                 "Explanation-based scoring",
                 "Effort-based grouping",
                 "6-state workflow engine",
                 "Bulk operations",
                 "Post-engagement bonus",
                 "One-click duplication",
                 "Integrity cap"
               ].map((feat, i) => (
                 <div key={i} className="bg-charcoal border border-white/10 p-4 rounded-xl text-sm text-center text-white font-medium hover:border-lime/30 transition-colors">
                    {feat}
                 </div>
               ))}
            </div>
         </FadeIn>
      </Section>

      {/* Learnings */}
      <Section>
         <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><Zap className="text-amber-400" /> What I Learned</h2>
            <div className="space-y-4">
               <div className="bg-charcoal border border-white/10 p-6 rounded-xl">
                  <h3 className="font-bold text-white mb-2">AI punishes the lack of product thinking.</h3>
                  <p className="text-steel text-sm">Speed without direction is drift. The spec and strategy docs were multipliers, not overhead.</p>
               </div>
               <div className="bg-charcoal border border-white/10 p-6 rounded-xl">
                  <h3 className="font-bold text-white mb-2">Ship the loop, not the system.</h3>
                  <p className="text-steel text-sm">A working end-to-end flow teaches you more in one afternoon than a month of feature-branch perfection.</p>
               </div>
               <div className="bg-charcoal border border-white/10 p-6 rounded-xl">
                  <h3 className="font-bold text-white mb-2">Technical debt is a choice.</h3>
                  <p className="text-steel text-sm">Every shortcut was documented. The difference between scrappy and sloppy is knowing where the bodies are buried.</p>
               </div>
            </div>
         </FadeIn>
      </Section>

      {/* About / Context */}
      <Section>
         <FadeIn>
            <div className="bg-charcoal border border-white/10 p-8 rounded-2xl">
               <h3 className="text-2xl font-bold text-white mb-4">About this Project</h3>
               <p className="text-steel leading-relaxed mb-6">
                  I treat AI as a co-pilot, not a crutch. I don't theorise about AI-assisted development — I document it in real time. 
                  This report covers the build of <strong>FirstLook</strong> (a recruitment platform) and <strong>BudApp</strong> (dog walking), both built using the methodology shared on this site.
               </p>
               <div className="flex flex-wrap gap-4">
                  <a href="https://www.firstlooknow.com" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline text-sm font-bold">firstlooknow.com</a>
                  <span className="text-white/20">|</span>
                  <a href="https://budapp.co.uk" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline text-sm font-bold">budapp.co.uk</a>
               </div>
            </div>
         </FadeIn>
      </Section>

    </div>
  );
};

// --- 6. WORK TOGETHER (Formerly Practice/Consulting) ---

const WorkTogether = () => {
  return (
    <div className="pt-24">
      <Section>
        <div className="grid md:grid-cols-2 gap-16">
           <div>
              <Badge color="white">Collaboration</Badge>
              <h1 className="text-4xl font-bold text-white mt-6 mb-8">
                 Designing a human way of working.
              </h1>
              <p className="text-lg text-steel leading-relaxed mb-8">
                 I work with founders and operators who want to treat AI as more than a tool stack.
              </p>
              
              <div className="space-y-6">
                 <h3 className="text-white font-bold">What I help with</h3>
                 <ul className="text-steel text-sm space-y-3">
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> Setting up collaborative practices</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> Multi-model pressure testing</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> Building digital twin project spaces</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> Extracting better thinking from teams</li>
                 </ul>
              </div>
           </div>

           <div className="bg-charcoal border border-white/10 rounded-3xl p-10 flex flex-col justify-center text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Talk.</h3>
              <p className="text-steel mb-8">
                 Simple. Adult. If this resonates, we can talk.
              </p>
              <div className="space-y-4">
                 <a href="mailto:budappuk@gmail.com" className="block bg-jet p-4 rounded border border-white/5 text-white font-mono text-sm hover:border-lime transition-colors">
                    budappuk@gmail.com
                 </a>
                 <a href="https://www.linkedin.com/in/budapp/" target="_blank" rel="noopener noreferrer" className="block bg-jet p-4 rounded border border-white/5 text-white font-mono text-sm hover:border-lime transition-colors">
                    Connect on LinkedIn
                 </a>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
};

const PostureKit = () => {
  return (
    <div className="pt-24">
      {/* HERO */}
      <Section className="text-center pb-12">
        <FadeIn>
          <Badge>Posture Kit</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-8">Not prompts. Posture.</h1>
          <p className="text-xl text-steel max-w-2xl mx-auto leading-relaxed">
            The gap isn't intelligence. It's how you show up to the conversation.
          </p>
        </FadeIn>
      </Section>

      {/* SECTION 1: What Actually Works */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-32">
            
            <FadeIn>
                <div className="border-l-2 border-lime pl-6 mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">What's actually different.</h2>
                    <p className="text-steel text-lg">Forget "prompt engineering." Change your approach.</p>
                </div>
                
                {/* Move 1 */}
                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                        <h3 className="text-2xl font-bold text-white mb-2"><span className="text-lime">Move 01.</span> Signal Intent</h3>
                        <p className="text-steel text-sm">Don't just ask questions. Declare your posture. Share the stakes.</p>
                    </div>
                    <div className="md:col-span-8">
                        <div className="bg-charcoal border border-white/10 rounded-xl overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-6 border-b md:border-b-0 md:border-r border-white/10 bg-white/5">
                                    <h4 className="text-xs font-mono uppercase tracking-widest text-steel mb-4">Instead of...</h4>
                                    <ul className="space-y-4 text-sm text-steel/60 font-medium">
                                        <li>"What should I do?"</li>
                                        <li className="pt-4 border-t border-white/5">"Write me an email"</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-lime/5">
                                    <h4 className="text-xs font-mono uppercase tracking-widest text-lime mb-4">Try...</h4>
                                    <ul className="space-y-4 text-sm text-white font-medium">
                                        <li>"I'm facing a decision. The stakes are high. Push back on my assumptions."</li>
                                        <li className="pt-4 border-t border-white/5">"I need to earn attention, not demand it. Help me find the angle."</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Move 2 & 3 */}
            <FadeIn>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                         <h3 className="text-2xl font-bold text-white mb-4"><span className="text-lime">Move 02.</span> Invite Opposition</h3>
                         <p className="text-steel mb-6 leading-relaxed">Most people collapse into agreement. Stay in the discomfort. If every interaction feels smooth, you aren't getting leverage.</p>
                         <div className="bg-charcoal p-6 rounded-xl border border-white/10">
                            <p className="text-white text-sm font-mono">"Tell me why this plan will fail."</p>
                         </div>
                    </div>
                    <div>
                         <h3 className="text-2xl font-bold text-white mb-4"><span className="text-lime">Move 03.</span> Synthesize</h3>
                         <p className="text-steel mb-6 leading-relaxed">You run the room. You take the cold analysis from one AI, the contextual advice from another, and you make the call.</p>
                         <p className="text-white font-medium italic">"I decide. AI contributes."</p>
                    </div>
                </div>
            </FadeIn>

        </div>
      </Section>

      {/* SECTION 2: THE SHIFT */}
      <div className="bg-surface border-y border-white/5 mt-24">
        <Section className="py-24">
            <FadeIn>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white">The shift that matters.</h2>
                </div>
                <div className="max-w-3xl mx-auto bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-2 text-sm">
                        <div className="p-5 border-b border-r border-white/10 bg-white/5 text-steel font-mono uppercase tracking-widest text-center">Most People</div>
                        <div className="p-5 border-b border-white/10 bg-lime/10 text-lime font-mono uppercase tracking-widest text-center">Power Users</div>
                        
                        <div className="p-5 border-b border-r border-white/10 text-center text-steel/70">Ask questions</div>
                        <div className="p-5 border-b border-white/10 text-center text-white font-bold">Signal intent</div>

                        <div className="p-5 border-b border-r border-white/10 text-center text-steel/70">Seek agreement</div>
                        <div className="p-5 border-b border-white/10 text-center text-white font-bold">Invite tension</div>

                        <div className="p-5 border-r border-white/10 text-center text-steel/70">Extract answers</div>
                        <div className="p-5 text-center text-white font-bold">Elevate thinking</div>
                    </div>
                </div>
            </FadeIn>
        </Section>
      </div>

      {/* SECTION 3: START HERE */}
      <div className="bg-lime text-jet py-24">
        <div className="max-w-3xl mx-auto px-6">
            <FadeIn>
                <div className="border-l-4 border-black pl-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display uppercase tracking-tight text-black">Start Here.</h2>
                    <p className="text-black/80 mb-8 text-xl font-medium">You don't need a course. You need practice. Try this posture today:</p>
                </div>
                
                <div className="bg-black/90 p-8 rounded-2xl shadow-xl border border-black/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-50"><Terminal className="text-lime" /></div>
                    <p className="text-white/90 font-mono text-sm md:text-base leading-relaxed">
                        "I'm going to share a decision I'm facing. Before you give me advice, I want you to ask me the questions that will help you understand the real situation — not just the surface problem. Push past my first answers. Then, once you understand, tell me what you think I'm not seeing."
                    </p>
                </div>
            </FadeIn>
        </div>
      </div>

      {/* SECTION 4: GO DEEPER */}
      <Section>
        <div className="max-w-4xl mx-auto pt-12">
             <FadeIn delay={0.1}>
                <h3 className="text-white font-bold text-xl mb-6">Go Deeper</h3>
                <p className="text-steel text-sm mb-6 leading-relaxed">The Posture Kit is just the start. If you want to understand the full practice:</p>
                <div className="space-y-3">
                    <Link to="/philosophy" className="flex items-center gap-2 text-sm text-lime hover:text-white transition-colors"><ArrowRight size={14}/> The Philosophy: My ecosystem</Link>
                    <Link to="/loop" className="flex items-center gap-2 text-sm text-lime hover:text-white transition-colors"><ArrowRight size={14}/> The Loop: How I work</Link>
                    <Link to="/work-together" className="flex items-center gap-2 text-sm text-lime hover:text-white transition-colors"><ArrowRight size={14}/> Work With Me</Link>
                </div>
            </FadeIn>
        </div>
      </Section>
    </div>
  );
};

// --- APP ROOT ---

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-jet text-softWhite font-sans selection:bg-lime selection:text-black">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/loop" element={<Loop />} />
          <Route path="/session" element={<Session />} />
          <Route path="/budapp" element={<BudApp />} />
          <Route path="/devolution" element={<Devolution />} />
          <Route path="/work-together" element={<WorkTogether />} />
          <Route path="/posture-kit" element={<PostureKit />} />
          {/* Redirects for legacy routes if needed, though clean links are better */}
          <Route path="/system" element={<Philosophy />} />
          <Route path="/method" element={<Loop />} />
          <Route path="/practice" element={<WorkTogether />} />
          <Route path="/kit" element={<PostureKit />} />
        </Routes>
        <footer className="py-12 text-center border-t border-white/5 mt-12">
          <p className="text-steel/40 text-[10px] font-mono uppercase tracking-widest">
            AI Leverage Lab • Human Collaboration Practice
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;