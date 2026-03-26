import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Brain, Zap, FileText, BarChart3, Lock, Workflow, TrendingUp, CheckCircle2, Quote } from "lucide-react";

const CAPABILITIES = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Donor Briefings",
    color: "#2563EB",
    desc: "Before every meeting, Aperion auto-generates a comprehensive donor briefing — giving history, capacity estimate, interest alignment, recent news, and recommended ask — in seconds, not hours.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Opportunity Matching",
    color: "#0891B2",
    desc: "300+ curated funding opportunities — from capital campaigns to endowments to annual funds — are scored and ranked against each donor's interests, capacity, and relationship stage.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Proposal Intelligence",
    color: "#06B6D4",
    desc: "Aperion drafts outcome-aligned proposals, stewardship letters, and follow-up communications in your organization's voice — reducing writing time from days to minutes.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Pipeline Scoring",
    color: "#0E7490",
    desc: "Real-time likelihood-to-give scores across your entire portfolio — surfacing which donors are ready to move, which are cooling, and where gift officers should focus today.",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Admin Automation",
    color: "#2563EB",
    desc: "Post-meeting summaries, email drafts, CRM updates, and follow-up scheduling — handled automatically so gift officers spend their time on conversations, not paperwork.",
  },
];

const STATS = [
  { value: "75%", label: "Admin time eliminated per gift officer" },
  { value: "300+", label: "Pre-built opportunity library entries" },
  { value: "20:1", label: "ROI by year two, per program" },
  { value: "3×", label: "Increase in meaningful donor touchpoints" },
];

const INPUTS = [
  { label: "BLACKBAUD CRM", sub: "Relationship & giving history" },
  { label: "PROSPECT RESEARCH", sub: "External wealth & biographic data" },
  { label: "WEALTH SCREENING", sub: "Capacity & net worth estimates" },
  { label: "CAMPAIGN DATA", sub: "Goals, priorities, fund alignment" },
];

const OUTPUTS = [
  { label: "DONOR BRIEFINGS", sub: "AI-prepared meeting documents" },
  { label: "OPPORTUNITY MATCHES", sub: "Ranked funding fit scores" },
  { label: "PROPOSAL DRAFTS", sub: "Outcome-aligned communications" },
  { label: "PIPELINE SCORES", sub: "Real-time readiness signals" },
];

const ENGINE_ITEMS = [
  "Natural language generation",
  "Donor intent modeling",
  "Interest graph alignment",
  "Capacity-to-give inference",
  "Outcome probability scoring",
];

export default function Aperion() {
  return (
    <div className="overflow-hidden bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#0A0E1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/25 via-[#0A0E1A] to-[#0A0E1A]" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="inline-block px-4 py-2 bg-[#06B6D4]/15 border border-[#06B6D4]/25 text-[#06B6D4] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                Platform 02 — Aperion
              </div>
              <h1 className="text-5xl lg:text-[5.5rem] font-display font-bold text-white leading-[1.05] tracking-tighter mb-8 uppercase">
                Every gift officer's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                  unfair advantage.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/60 mb-6 leading-relaxed max-w-3xl font-light">
                Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence that makes every conversation count.
              </p>
              <p className="text-base text-white/35 mb-12 max-w-2xl font-light tracking-wide">
                Built for Blackbaud CRM and Salesforce NPSP. Works inside the tools your team already uses. No new dashboard. No training curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0">
                  Request a demo
                </Button>
                <Button size="lg" variant="ghost" className="rounded-none text-sm tracking-widest uppercase font-semibold px-8 h-14 text-white hover:bg-white/5 hover:text-white group border border-white/10">
                  View case study
                  <ArrowRight className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#0A0E1A] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
            {STATS.map((s, i) => (
              <AnimatedSection key={i} delay={0.08 * i} className="px-8 py-10 text-center">
                <div className="text-3xl lg:text-4xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] mb-2">
                  {s.value}
                </div>
                <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/35 leading-tight max-w-[140px] mx-auto">
                  {s.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem Callout ── */}
      <section className="py-24 lg:py-32 bg-white border-t border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#9AA3B2] mb-8 uppercase">The Problem</div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] tracking-tighter mb-8">
                GIFT OFFICERS ARE DROWNING IN ADMIN. NOT BUILDING RELATIONSHIPS.
              </h2>
              <p className="text-lg text-[#6B7A90] font-light leading-relaxed mb-6">
                The average gift officer spends 75% of their time on research, data entry, proposal writing, and meeting prep — leaving only 25% for actual donor relationships.
              </p>
              <p className="text-lg text-[#6B7A90] font-light leading-relaxed">
                Aperion inverts that ratio. It handles the preparation, the follow-up, and the paperwork — so your team can spend 75% of their time doing what only humans can do.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-[#F7F8FC] border border-[#E8ECF2] p-10">
                <div className="flex items-start gap-4 mb-8">
                  <Quote className="w-8 h-8 text-[#2563EB] shrink-0 mt-1" />
                  <blockquote className="text-2xl font-display font-bold text-[#0A0E1A] tracking-tighter leading-tight">
                    "Every gift officer deserves to spend their time on relationships, not research."
                  </blockquote>
                </div>
                <div className="grid grid-cols-2 gap-0 border border-[#E8ECF2] bg-[#E8ECF2]">
                  {[
                    { before: "75%", after: "25%", label: "Admin work" },
                    { before: "25%", after: "75%", label: "Donor time" },
                  ].map((row, i) => (
                    <div key={i} className="bg-white p-6 text-center">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-2xl font-display font-bold text-[#C4B5FD] tracking-tighter line-through opacity-60">{row.before}</span>
                        <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
                        <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] tracking-tighter">{row.after}</span>
                      </div>
                      <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#9AA3B2]">{row.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── How Aperion Works ── */}
      <section className="py-24 lg:py-32 bg-[#EDEEF6] border-t border-[#E2E3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#2563EB] mb-6 uppercase">
              How Aperion Works
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] tracking-tighter mb-6">
              FROM RAW DATA TO THE RIGHT CONVERSATION — AUTOMATED.
            </h2>
            <p className="text-xl text-[#6B7A90] font-light leading-relaxed">
              Aperion sits between your CRM data and your gift officers — turning fragmented information into actionable intelligence before every meeting.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <svg viewBox="0 0 1000 440" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="aGradLeft" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="aGradRight" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="aEngineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="aTopBar" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>

              {/* Column headers */}
              <text x="115" y="28" textAnchor="middle" fill="rgba(37,99,235,0.65)" fontSize="8.5" fontWeight="800" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="2.5">DATA INPUTS</text>
              <text x="885" y="28" textAnchor="middle" fill="rgba(6,182,212,0.65)" fontSize="8.5" fontWeight="800" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="2.5">OUTPUTS</text>

              {/* LEFT INPUT CARDS */}
              {INPUTS.map((inp, i) => {
                const y = 55 + i * 82;
                return (
                  <g key={i}>
                    <rect x="10" y={y} width="210" height="64" rx="0" fill="white" stroke="#E2E3EF" strokeWidth="1" />
                    <rect x="10" y={y} width="3" height="64" rx="0" fill="#2563EB" />
                    <text x="120" y={y + 24} textAnchor="middle" fill="rgba(10,14,26,0.88)" fontSize="10.5" fontWeight="800" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.3">{inp.label}</text>
                    <text x="120" y={y + 42} textAnchor="middle" fill="rgba(107,122,144,0.9)" fontSize="8.5" fontFamily="Urbanist, system-ui, sans-serif">{inp.sub}</text>
                  </g>
                );
              })}

              {/* LEFT DASHED LINES */}
              <line x1="220" y1="87" x2="350" y2="186" stroke="url(#aGradLeft)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="220" y1="169" x2="350" y2="210" stroke="url(#aGradLeft)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="220" y1="251" x2="350" y2="230" stroke="url(#aGradLeft)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="220" y1="333" x2="350" y2="254" stroke="url(#aGradLeft)" strokeWidth="1.2" strokeDasharray="4 6" />

              {/* CENTER ENGINE */}
              <rect x="350" y="110" width="300" height="220" rx="0" fill="#0A0E1A" />
              {/* Gradient top border */}
              <rect x="350" y="110" width="300" height="3" rx="0" fill="url(#aEngineGrad)" />
              {/* Engine label */}
              <text x="500" y="152" textAnchor="middle" fill="white" fontSize="22" fontWeight="900" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="-1">APERION</text>
              <text x="500" y="170" textAnchor="middle" fill="rgba(103,232,249,0.75)" fontSize="7" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="4">AI INTELLIGENCE ENGINE</text>
              {/* Divider line */}
              <line x1="375" y1="185" x2="625" y2="185" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              {/* Engine capabilities list */}
              {ENGINE_ITEMS.map((item, i) => (
                <g key={i}>
                  <circle cx="382" cy={204 + i * 22} r="2.5" fill={i < 2 ? "#2563EB" : i < 4 ? "#0891B2" : "#06B6D4"} />
                  <text x="392" y={208 + i * 22} fill="rgba(255,255,255,0.65)" fontSize="9.5" fontWeight="600" fontFamily="Urbanist, system-ui, sans-serif">{item}</text>
                </g>
              ))}

              {/* RIGHT DASHED LINES */}
              <line x1="650" y1="186" x2="780" y2="87" stroke="url(#aGradRight)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="650" y1="210" x2="780" y2="169" stroke="url(#aGradRight)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="650" y1="230" x2="780" y2="251" stroke="url(#aGradRight)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="650" y1="254" x2="780" y2="333" stroke="url(#aGradRight)" strokeWidth="1.2" strokeDasharray="4 6" />

              {/* RIGHT OUTPUT CARDS */}
              {OUTPUTS.map((out, i) => {
                const y = 55 + i * 82;
                return (
                  <g key={i}>
                    <rect x="780" y={y} width="210" height="64" rx="0" fill="white" stroke="#E2E3EF" strokeWidth="1" />
                    <rect x="987" y={y} width="3" height="64" rx="0" fill="#06B6D4" />
                    <text x="880" y={y + 24} textAnchor="middle" fill="rgba(10,14,26,0.88)" fontSize="10.5" fontWeight="800" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.3">{out.label}</text>
                    <text x="880" y={y + 42} textAnchor="middle" fill="rgba(107,122,144,0.9)" fontSize="8.5" fontFamily="Urbanist, system-ui, sans-serif">{out.sub}</text>
                  </g>
                );
              })}
            </svg>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Core Capabilities ── */}
      <section className="py-24 lg:py-32 bg-white border-t border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="mb-16 max-w-3xl">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#9AA3B2] mb-6 uppercase">Platform Capabilities</div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] tracking-tighter mb-6">
              FIVE CAPABILITIES. ONE OUTCOME: MORE CLOSED GIFTS.
            </h2>
            <p className="text-xl text-[#6B7A90] font-light leading-relaxed">
              Each Aperion module eliminates a specific category of administrative friction — together they transform how your team operates.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8ECF2]">
            {CAPABILITIES.map((cap, i) => (
              <AnimatedSection key={i} delay={0.08 * i} className="bg-white p-10 flex flex-col group hover:bg-[#F7F8FC] transition-colors duration-300">
                <div
                  className="w-12 h-12 flex items-center justify-center mb-8 shrink-0"
                  style={{ background: `${cap.color}15`, color: cap.color }}
                >
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A0E1A] mb-4 tracking-tight uppercase">{cap.title}</h3>
                <p className="text-[#6B7A90] font-light leading-relaxed text-sm flex-1">{cap.desc}</p>
                <div className="mt-8 pt-8 border-t border-[#E8ECF2]">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase" style={{ color: cap.color }}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Included in Aperion
                  </div>
                </div>
              </AnimatedSection>
            ))}
            {/* Sixth cell — results callout */}
            <AnimatedSection delay={0.4} className="bg-[#0A0E1A] p-10 flex flex-col justify-between col-span-1">
              <div>
                <div className="text-[10px] tracking-[0.2em] font-bold text-[#06B6D4] mb-6 uppercase">Net Result</div>
                <div className="text-6xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] mb-4 leading-none">20:1</div>
                <p className="text-white/60 font-light leading-relaxed text-sm">ROI by year two, for every dollar invested in Aperion.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-xs font-bold tracking-widest uppercase text-white/30">Measured outcome</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="py-24 lg:py-32 bg-[#F7F8FC] border-t border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 max-w-3xl">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#9AA3B2] mb-6 uppercase">Measurable Impact</div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] tracking-tighter">
              RESULTS YOUR TEAM WILL FEEL ON DAY ONE.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8ECF2]">
            {[
              { stat: "75%", label: "Admin Time Eliminated", desc: "Gift officers reclaim the majority of their week for relationship-building." },
              { stat: "3×", label: "Meaningful Touchpoints", desc: "Aperion users average 3× more high-quality donor interactions per month." },
              { stat: "300+", label: "Opportunity Library", desc: "Pre-built funding opportunities matched intelligently to each donor's interests." },
              { stat: "20:1", label: "ROI by Year Two", desc: "For every dollar invested in Aperion, programs return twenty in philanthropic revenue." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={0.1 * i} className="bg-white p-10">
                <div className="text-5xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] mb-6 leading-none">
                  {item.stat}
                </div>
                <h3 className="text-sm font-bold text-[#0A0E1A] mb-3 tracking-tight uppercase">{item.label}</h3>
                <p className="text-[#6B7A90] font-light leading-relaxed text-sm">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design Principles ── */}
      <section className="py-24 lg:py-32 bg-[#0A0E1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16 max-w-3xl">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#06B6D4] mb-6 uppercase">Design Principles</div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white tracking-tighter">
              BUILT FOR HOW GIFT OFFICERS ACTUALLY WORK.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
            {[
              {
                icon: <Lock className="w-6 h-6" />,
                color: "#2563EB",
                title: "Privacy by Design",
                desc: "No PHI ever enters the Aperion system. Donors are matched on the fundraising side using public and CRM data only — never clinical records.",
                badge: "HIPAA Safe",
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                color: "#0891B2",
                title: "Workflow-First",
                desc: "Aperion surfaces intelligence inside your existing tools — Blackbaud, Salesforce, or email. Not in a separate dashboard your team won't open.",
                badge: "Native integration",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                color: "#06B6D4",
                title: "Continuous Learning",
                desc: "Every closed gift, declined meeting, and missed opportunity trains the model — outcomes compound and improve with every interaction your team makes.",
                badge: "Self-improving",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={0.1 * i} className="bg-white/[0.03] border border-white/[0.06] p-10 flex flex-col">
                <div
                  className="w-12 h-12 flex items-center justify-center mb-8 shrink-0"
                  style={{ background: `${item.color}20`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="mb-2">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-1 border" style={{ color: item.color, borderColor: `${item.color}30`, background: `${item.color}10` }}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mt-4 mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-white/55 font-light leading-relaxed flex-1">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-white border-t border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#9AA3B2] mb-8 uppercase">Get Started</div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] tracking-tighter mb-8">
                READY TO GIVE YOUR GIFT OFFICERS THEIR TIME BACK?
              </h2>
              <p className="text-xl text-[#6B7A90] font-light leading-relaxed mb-10">
                Schedule a 30-minute demo and see exactly how Aperion would work inside your existing CRM and fundraising workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0">
                  Request a demo
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="border border-[#E8ECF2] p-10">
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#9AA3B2] mb-8 uppercase">What to Expect</div>
              <div className="space-y-0 divide-y divide-[#E8ECF2]">
                {[
                  "30-minute product walkthrough",
                  "Live demo with your CRM data model",
                  "Custom ROI projection for your portfolio",
                  "Implementation timeline and onboarding plan",
                  "No sales pressure — just the facts",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-4">
                    <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
                    <span className="text-sm font-semibold text-[#0A0E1A] tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  );
}
