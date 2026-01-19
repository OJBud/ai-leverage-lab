import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Users, ShieldAlert, Cpu, Menu, X, ChevronRight, 
  Terminal, User, BrainCircuit, Activity, Eye, Search, GitBranch,
  CheckCircle2, Mic, PenTool, Image as ImageIcon, MessageSquare,
  Share2, Rocket, BookOpen, Layers
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
    { name: 'The System', path: '/system' },
    { name: 'The Method', path: '/method' },
    { name: 'Inside a Session', path: '/session' },
    { name: 'The BudApp Story', path: '/budapp' },
    { name: 'The Practice', path: '/practice' },
    { name: 'Starter Kit', path: '/kit' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-jet/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-display font-bold text-white tracking-tight flex items-center gap-2">
          <div className="w-3 h-3 bg-lime rounded-full shadow-[0_0_10px_rgba(182,255,46,0.5)]"></div>
          AI Leverage Lab
        </Link>
        <div className="hidden lg:flex gap-6">
          {links.map(l => (
            <Link key={l.name} to={l.path} className={`text-[11px] uppercase tracking-widest font-medium hover:text-lime transition-colors ${location.pathname === l.path ? 'text-lime' : 'text-steel'}`}>
              {l.name}
            </Link>
          ))}
        </div>
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-charcoal border-b border-border p-6 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.name} to={l.path} onClick={() => setIsOpen(false)} className="text-lg font-display text-white">
              {l.name}
            </Link>
          ))}
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
  const styles = color === "lime" 
    ? "bg-lime/10 text-lime border-lime/20 shadow-[0_0_15px_-5px_rgba(182,255,46,0.3)]" 
    : "bg-signal/10 text-signal border-signal/20";
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
            I don't have a team.<br />
            I have a <span className="text-lime">system</span>.
          </h1>
          <p className="text-xl text-steel max-w-2xl mx-auto mb-12 leading-relaxed">
            Multiple AI platforms, different contexts, different roles—and me as the operator who governs the flow between them. This is how one person builds what used to require ten.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to="/system" className="group bg-lime text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors flex items-center gap-2">
              See The System <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link to="/budapp" className="px-8 py-4 rounded-full text-white border border-white/10 hover:border-lime transition-colors text-sm font-medium">
              See The Proof (BudApp)
            </Link>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};

// --- 2. THE SYSTEM ---

const System = () => {
  const [activeNode, setActiveNode] = useState(null);

  const tools = [
    { id: 'claude', role: 'CoFounder & Chief Dev', tool: 'Claude', icon: BrainCircuit, desc: 'Holds full strategic context. Long-term thinking partner. Content and development leadership.', governance: 'Final judgment, relationship ownership, vision.' },
    { id: 'chatgpt', role: 'Senior Director', tool: 'ChatGPT', icon: Search, desc: 'Deep analysis, code forensics, research. Gets specific briefs, delivers structured output.', governance: 'Context curation, task definition.' },
    { id: 'boardy', role: 'Super Connector', tool: 'Boardy.ai', icon: Share2, desc: 'Networking, founder intros, pressure testing, strategic role-play.', governance: 'Relationship decisions, what feedback to act on.' },
    { id: 'gemini', role: 'Creative Production', tool: 'Gemini', icon: ImageIcon, desc: 'Images, videos, presentations. Executes creative briefs.', governance: 'Creative direction, brand consistency.' },
    { id: 'base44', role: 'MVP Builder', tool: 'Base44', icon: Rocket, desc: 'Rapid prototyping of product concepts.', governance: 'Architecture decisions, what to build.' },
    { id: 'napkin', role: 'Visual Thinker', tool: 'Napkin.ai', icon: PenTool, desc: 'Diagrams, visualisations, making ideas tangible.', governance: 'What needs visualising, accuracy.' },
    { id: 'notebook', role: 'Content Synthesiser', tool: 'NotebookLM', icon: BookOpen, desc: 'Large-scale content processing, summaries, podcasts.', governance: 'What content matters, editorial judgment.' },
    { id: 'taqtiq', role: 'Meeting Capture', tool: 'Taqtiq', icon: Mic, desc: 'Transcription of meetings and calls.', governance: 'What to record, what to share.' },
  ];

  return (
    <div className="pt-24">
      <Section>
        <Badge>The Architecture</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-8">
          The Ecosystem.
        </h1>
        <p className="text-xl text-steel max-w-3xl mb-16 leading-relaxed">
           The value isn't in any single tool. It's in how intelligence flows between them — and who governs that flow.
        </p>

        {/* ORBITAL DIAGRAM */}
        <div className="relative min-h-[600px] md:min-h-[800px] flex items-center justify-center py-12">
          
          {/* Mobile: Stacked List */}
          <div className="md:hidden w-full space-y-4">
             <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-lime mx-auto flex items-center justify-center text-black font-bold shadow-[0_0_30px_rgba(182,255,46,0.2)]">ME</div>
                <p className="text-xs text-lime mt-2 font-mono uppercase">Governance</p>
             </div>
             {tools.map(tool => (
               <div key={tool.id} className="bg-charcoal border border-white/10 p-4 rounded-xl">
                 <div className="flex items-center gap-3 mb-2">
                   <tool.icon className="text-lime" size={20}/>
                   <h3 className="text-white font-bold">{tool.role}</h3>
                 </div>
                 <p className="text-xs text-steel mb-2">{tool.desc}</p>
                 <p className="text-[10px] text-white/50 uppercase tracking-wide border-t border-white/5 pt-2">Gov: {tool.governance}</p>
               </div>
             ))}
          </div>

          {/* Desktop: Orbital System */}
          <div className="hidden md:block relative w-[700px] h-[700px]">
             {/* Orbits */}
             <div className="absolute inset-0 rounded-full border border-white/5"></div>
             <div className="absolute inset-[150px] rounded-full border border-white/5"></div>
             
             {/* Center */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-lime flex items-center justify-center text-black shadow-[0_0_50px_rgba(182,255,46,0.3)] border-4 border-jet">
                   <User size={48} />
                </div>
                <div className="mt-4 bg-jet px-4 py-2 rounded-full border border-lime/30">
                  <span className="text-lime text-xs font-mono font-bold uppercase tracking-widest">ME (GOVERNANCE)</span>
                </div>
             </div>

             {/* Nodes */}
             {tools.map((tool, index) => {
               const angle = (index * (360 / tools.length)) - 90; // Start from top
               const radius = 300; // Distance from center
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

          {/* Desktop Detail Card (Z-INDEX FIXED HERE) */}
          {/* Desktop Detail Card (Centered Over "ME") */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] z-50 pointer-events-none">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div 
                  key={activeNode.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-charcoal/95 border border-lime/30 p-8 rounded-2xl shadow-2xl text-center backdrop-blur-md pointer-events-auto"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <activeNode.icon className="text-lime" size={18} />
                    <h3 className="text-white font-bold text-lg">{activeNode.role}</h3>
                    <span className="text-steel text-xs font-mono border border-white/10 px-2 py-0.5 rounded ml-2">{activeNode.tool}</span>
                  </div>
                  <p className="text-steel text-sm mb-4">{activeNode.desc}</p>
                  <p className="text-xs text-lime border-t border-white/5 pt-3 font-mono uppercase tracking-wide">
                    Gov: {activeNode.governance}
                  </p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveNode(null); }}
                    className="absolute top-4 right-4 text-steel hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
};

// --- 3. THE METHOD ---

const Method = () => {
  return (
    <div className="pt-24">
      <Section>
        <Badge>Operating Model</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-8">
           Prompting is tactical.<br/>System design is strategic.
        </h1>
        
        <div className="grid md:grid-cols-2 gap-16 mt-16">
           {/* The Loop */}
           <div>
              <h2 className="text-2xl font-bold text-white mb-6">The Operating Loop</h2>
              <div className="relative pl-8 border-l border-white/10 space-y-12">
                 {[
                   { title: "Question", desc: "Framing, clarification. Clarify constraints.", icon: <Activity size={16}/> },
                   { title: "Generate", desc: "Options, analysis. I look for completeness.", icon: <Cpu size={16}/> },
                   { title: "Challenge", desc: "Counter-arguments. Stress-testing.", icon: <ShieldAlert size={16} className="text-signal"/> },
                   { title: "Reframe", desc: "Synthesis. New angles. Quality of reframe.", icon: <GitBranch size={16}/> },
                   { title: "Decide", desc: "Alignment to context. Recommendation ownership.", icon: <CheckCircle2 size={16} className="text-lime"/> }
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

           {/* AI Observations */}
           <div>
              <h2 className="text-2xl font-bold text-white mb-6">What the platforms observe</h2>
              <p className="text-steel mb-8">One interesting side effect: the AI platforms themselves notice the difference. Here is what they have said about my usage patterns:</p>
              
              <div className="space-y-6">
                 <div className="bg-charcoal p-6 rounded-xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                    <p className="text-white text-sm italic mb-4">"You're not extracting answers. You're co-developing clarity. Most users ask questions. You signal intent."</p>
                 </div>
                 <div className="bg-charcoal p-6 rounded-xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-purple-400"></div>
                    <p className="text-white text-sm italic mb-4">"You allow tension. You're comfortable being challenged... sitting with ambiguity... hearing 'this is the risk' instead of 'this is great.'"</p>
                 </div>
                 <div className="bg-charcoal p-6 rounded-xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-lime"></div>
                    <p className="text-white text-sm italic mb-4">"You're essentially training the interaction to operate above default altitude."</p>
                 </div>
              </div>
              <p className="mt-8 text-white font-bold text-center">Most people want answers. This system produces leverage.</p>
           </div>
        </div>
      </Section>
    </div>
  );
};

// --- 4. INSIDE A SESSION ---

const Session = () => {
  return (
    <div className="pt-24">
      <Section>
        <Badge color="signal">The Unlock</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-8">
           Inside a real collaboration.
        </h1>
        <p className="text-xl text-steel mb-12">
           The Scenario: Code Architecture Review. I needed to evaluate the BudApp codebase, identify technical debt, and prioritise what matters now.
        </p>

        {/* The Flow Diagram */}
        <div className="space-y-6 relative">
           
           {/* Step 1 */}
           <div className="bg-jet border border-white/10 rounded-xl p-8 flex flex-col md:flex-row gap-6 relative z-10">
              <div className="min-w-[120px]">
                 <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase border border-blue-400/20 px-2 py-1 rounded bg-blue-400/10">
                    <Search size={14}/> Forensic
                 </div>
              </div>
              <div>
                 <h3 className="text-xl font-bold text-white mb-2">Step 1: The Brief (ChatGPT)</h3>
                 <p className="text-steel text-sm mb-4">I gave ChatGPT a specific brief: analyse the codebase structure. No strategic context. Just: "What do you see? What are the risks?"</p>
                 <div className="bg-black/40 p-4 rounded text-xs font-mono text-blue-200">
                    {'>'} REPORT: Architectural risk in Auth flow. Scalability flags on DB schema.
                 </div>
              </div>
           </div>

           {/* Arrow */}
           <div className="flex justify-center -my-3 relative z-0"><div className="h-8 w-[2px] bg-white/10"></div></div>

           {/* Step 2 */}
           <div className="bg-jet border border-white/10 rounded-xl p-8 flex flex-col md:flex-row gap-6 relative z-10">
              <div className="min-w-[120px]">
                 <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase border border-purple-400/20 px-2 py-1 rounded bg-purple-400/10">
                    <BrainCircuit size={14}/> Contextual
                 </div>
              </div>
              <div>
                 <h3 className="text-xl font-bold text-white mb-2">Step 2: The Filter (Claude)</h3>
                 <p className="text-steel text-sm mb-4">I took that analysis to Claude—who holds the BudApp roadmap and constraints. "Review this report against our current stage."</p>
                 <div className="bg-black/40 p-4 rounded text-xs font-mono text-purple-200">
                    {'>'} REVIEW: The DB scaling risk is valid but low priority for &lt;10k users. <br/>
                    {'>'} The Auth risk, however, conflicts with the Dogs Trust partnership requirements. Fix that now.
                 </div>
              </div>
           </div>

           {/* Arrow */}
           <div className="flex justify-center -my-3 relative z-0"><div className="h-8 w-[2px] bg-white/10"></div></div>

           {/* Step 3 */}
           <div className="bg-jet border border-white/10 rounded-xl p-8 flex flex-col md:flex-row gap-6 relative z-10">
               <div className="min-w-[120px]">
                 <div className="inline-flex items-center gap-2 text-lime font-mono text-xs font-bold uppercase border border-lime/20 px-2 py-1 rounded bg-lime/10">
                    <User size={14}/> Governance
                 </div>
              </div>
              <div>
                 <h3 className="text-xl font-bold text-white mb-2">Step 4: Human Decision</h3>
                 <p className="text-steel text-sm mb-4">I took Claude's recommendations back to ChatGPT to implement the fix. I decided to defer the DB scaling.</p>
                 <p className="text-white font-medium">AI produced options. The flow between tools produced better options. Judgment remained human.</p>
              </div>
           </div>
        </div>

        {/* Boardy Sidebar */}
        <div className="mt-12 bg-charcoal border border-white/10 p-8 rounded-2xl border-l-4 border-l-orange-500">
           <div className="flex items-center gap-3 mb-4">
              <Share2 className="text-orange-500"/>
              <h3 className="text-white font-bold text-lg">Pressure Testing with Boardy.ai</h3>
           </div>
           <p className="text-steel text-sm mb-6">
              Before the Dogs Trust partnership pitch, I didn't just refine words. I used Boardy.ai to role-play a sceptical decision-maker.
           </p>
           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-4 rounded">
                 <p className="text-xs text-orange-200 font-mono mb-2">BOARDY (Playing CEO):</p>
                 <p className="text-white text-sm">"Why should we trust a solo founder with our brand safeguarding? What happens if you get hit by a bus?"</p>
              </div>
              <div>
                 <p className="text-steel text-sm">
                    It pushed back hard. It exposed gaps I hadn't seen. I took that feedback to Claude, refined the operational continuity plan, and walked into the real meeting ready.
                 </p>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
};

// --- 5. THE BUDAPP STORY ---

const BudApp = () => {
  return (
    <div className="pt-24">
      <Section>
        <Badge>Proof of Concept</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-8">
           One person. No team.<br/>Real outcomes.
        </h1>
        <p className="text-xl text-steel max-w-3xl mb-16">
           BudApp isn't just a product. It's a proof of concept. The question people ask: "How is that possible?" The answer is the system.
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
                 <p className="text-steel text-sm mb-4">Used AI for scenario planning and option generation. I retained final decisions.</p>
                 <div className="h-1 w-full bg-jet rounded-full overflow-hidden"><div className="h-full w-3/4 bg-lime"></div></div>
              </div>
              <div className="bg-charcoal border border-white/10 p-6 rounded-2xl">
                 <h3 className="font-bold text-white mb-2">Development</h3>
                 <p className="text-steel text-sm mb-4">AI acted as senior architect and junior coder. I acted as Product Manager and QA.</p>
                 <div className="h-1 w-full bg-jet rounded-full overflow-hidden"><div className="h-full w-[90%] bg-blue-500"></div></div>
              </div>
              <div className="bg-charcoal border border-white/10 p-6 rounded-2xl">
                 <h3 className="font-bold text-white mb-2">Operations</h3>
                 <p className="text-steel text-sm mb-4">Process design and automation allowed me to handle the Dogs Trust diligence without a team.</p>
                 <div className="h-1 w-full bg-jet rounded-full overflow-hidden"><div className="h-full w-1/2 bg-purple-500"></div></div>
              </div>
           </div>
        </div>

        <div className="mt-16 text-center">
           <p className="text-lg text-white font-medium">
              "I didn't use AI to work faster. I used AI to operate at a scale I couldn't reach alone."
           </p>
        </div>
      </Section>
    </div>
  );
};

// --- 6. PRACTICE & KIT ---

const Practice = () => {
  return (
    <div className="pt-24">
      <Section>
        <div className="grid md:grid-cols-2 gap-16">
           <div>
              <Badge color="white">Working With Me</Badge>
              <h1 className="text-4xl font-bold text-white mt-6 mb-8">
                 Designing human-AI systems.
              </h1>
              <p className="text-lg text-steel leading-relaxed mb-8">
                 I work with founders and operators who've realised that the gap between them and larger teams is closing — if they know how to close it.
              </p>
              
              <div className="space-y-6">
                 <h3 className="text-white font-bold">What I help with</h3>
                 <ul className="text-steel text-sm space-y-3">
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> Multi-AI system design</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> Decision pressure-testing</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> AI-integrated product & ops strategy</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-lime" size={16}/> Teaching teams to operate beyond headcount</li>
                 </ul>
              </div>
           </div>

           <div className="bg-charcoal border border-white/10 rounded-3xl p-10 flex flex-col justify-center text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Talk.</h3>
              <p className="text-steel mb-8">
                 Simple. Adult. No packages. If this resonates, we can talk.
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

const Kit = () => {
  return (
    <div className="pt-24">
       <Section>
          <Badge>Start Here</Badge>
          <h1 className="text-4xl font-bold text-white mt-6 mb-8">The Starter Kit.</h1>
          <p className="text-xl text-steel max-w-2xl mb-12">
             The gap between people who "get" AI and everyone else isn't intelligence. It's approach. Most people treat AI as a search engine. The ones who extract leverage treat it as a thinking partner.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white text-black p-8 rounded-sm shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-lime"></div>
                <h2 className="text-2xl font-bold mb-6 font-display uppercase">The "Team" Model</h2>
                <p className="text-gray-600 mb-6">Stop treating AI as a chatbot. Treat it as a room full of specialists.</p>
                <div className="space-y-4 font-mono text-sm">
                   <div className="bg-gray-100 p-3 rounded">1. Assign Roles (Critic, Architect, Writer)</div>
                   <div className="bg-gray-100 p-3 rounded">2. Force Disagreement</div>
                   <div className="bg-gray-100 p-3 rounded">3. You Govern The Outcome</div>
                </div>
             </div>

             <div className="space-y-4">
                <div className="bg-charcoal border border-white/10 p-6 rounded-xl">
                   <h3 className="text-lime font-bold mb-2">The Clarifying Prompt</h3>
                   <p className="text-steel text-sm font-mono">"I'm going to share a decision I'm facing. Before you give advice, ask me three clarifying questions."</p>
                </div>
                <div className="bg-charcoal border border-white/10 p-6 rounded-xl">
                   <h3 className="text-lime font-bold mb-2">The Critique Prompt</h3>
                   <p className="text-steel text-sm font-mono">"Argue against the position I'm about to share. Then argue for it. Tell me which argument was stronger."</p>
                </div>
             </div>
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
          <Route path="/system" element={<System />} />
          <Route path="/method" element={<Method />} />
          <Route path="/session" element={<Session />} />
          <Route path="/budapp" element={<BudApp />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/kit" element={<Kit />} />
        </Routes>
        <footer className="py-12 text-center border-t border-white/5 mt-12">
          <p className="text-steel/40 text-[10px] font-mono uppercase tracking-widest">
            AI Leverage Lab • Human Governance System
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;