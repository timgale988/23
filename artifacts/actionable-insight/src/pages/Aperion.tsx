import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Brain, Zap, FileText, BarChart3, Workflow, CheckCircle2, Quote } from "lucide-react";
import { AperionHero } from "@/components/AperionHero";

const CAPABILITIES = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI Donor Briefings",
    color: "#2563EB",
    desc: "Before every meeting, Aperion auto-generates a comprehensive donor briefing — giving history, capacity estimate, interest alignment, recent news, and recommended ask — in seconds, not hours.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Opportunity Matching",
    color: "#0891B2",
    desc: "300+ curated funding opportunities — from capital campaigns to endowments to annual funds — are scored and ranked against each donor's interests, capacity, and relationship stage.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Proposal Intelligence",
    color: "#06B6D4",
    desc: "Aperion drafts outcome-aligned proposals, stewardship letters, and follow-up communications in your organization's voice — reducing writing time from days to minutes.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Pipeline Scoring",
    color: "#0E7490",
    desc: "Real-time likelihood-to-give scores across your entire portfolio — surfacing which donors are ready to move, which are cooling, and where gift officers should focus today.",
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Admin Automation",
    color: "#2563EB",
    desc: "Post-meeting summaries, email drafts, CRM updates, and follow-up scheduling — handled automatically so gift officers spend their time on conversations, not paperwork.",
  },
];

const STATS = [
  { value: "75%",  label: "Admin time eliminated per gift officer" },
  { value: "300+", label: "Pre-built opportunity library entries" },
  { value: "20:1", label: "ROI by year two, per program" },
  { value: "3×",   label: "Increase in meaningful donor touchpoints" },
];

const INPUTS = [
  { label: "BLACKBAUD CRM",     sub: "Relationship & giving history" },
  { label: "PROSPECT RESEARCH", sub: "External wealth & biographic data" },
  { label: "WEALTH SCREENING",  sub: "Capacity & net worth estimates" },
  { label: "CAMPAIGN DATA",     sub: "Goals, priorities, fund alignment" },
];

const OUTPUTS = [
  { label: "DONOR BRIEFINGS",     sub: "AI-prepared meeting documents" },
  { label: "OPPORTUNITY MATCHES", sub: "Ranked funding fit scores" },
  { label: "PROPOSAL DRAFTS",     sub: "Outcome-aligned communications" },
  { label: "PIPELINE SCORES",     sub: "Real-time readiness signals" },
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
      <AperionHero />
      <section className="border-b border-gray-100 py-20 lg:py-28 hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-16">

            {/* Left */}
            <div className="flex-1 max-w-[560px]">
              <AnimatedSection>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-7"
                  style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)", color: "#fff", letterSpacing: "0.12em" }}
                >
                  Platform 02 — Aperion
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <h1
                  className="font-black uppercase leading-[0.92] text-[#0A0E1A] mb-7"
                  style={{ fontSize: "clamp(44px,5.5vw,72px)", letterSpacing: "-0.04em" }}
                >
                  Every Gift
                  <br />
                  Officer's
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(90deg,#2563EB,#06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Unfair Advantage.
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.14}>
                <p className="text-gray-500 text-lg leading-relaxed mb-9">
                  Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor
                  briefings, intelligent opportunity matching, and proposal intelligence that makes every
                  conversation count.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-9">
                  Built for Blackbaud CRM and Salesforce NPSP. Works inside the tools your team already uses.
                  No new dashboard. No training curve.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.18}>
                <div className="flex flex-wrap gap-3 mb-10">
                  <button
                    className="px-8 py-4 rounded-xl text-white font-bold text-[15px] transition-all hover:scale-105"
                    style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)", boxShadow: "0 8px 24px rgba(6,182,212,0.3)" }}
                  >
                    Request a Demo
                  </button>
                  <button className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 font-bold text-[15px] text-[#0A0E1A] hover:bg-gray-50 transition-colors" style={{ borderColor: "#E5E7EB" }}>
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Aperion image */}
            <AnimatedSection delay={0.1} className="flex-1 w-full min-w-0">
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-3xl opacity-20"
                  style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)", filter: "blur(48px)" }}
                />
                <img
                  src="/images/dash-finance.jpeg"
                  alt="Aperion — AI-augmented fundraising intelligence"
                  className="relative w-full object-cover rounded-2xl"
                  style={{
                    height: "460px",
                    objectPosition: "center 35%",
                    boxShadow: "0 32px 80px rgba(10,14,26,0.22)",
                  }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <AnimatedSection key={i} delay={0.08 * i} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div
                  className="font-black text-[clamp(32px,4vw,48px)] leading-none mb-2"
                  style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.04em" }}
                >
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider leading-snug max-w-[140px] mx-auto">
                  {s.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">The Problem</p>
              <h2
                className="font-black uppercase text-[#0A0E1A] leading-[0.95] mb-7"
                style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.04em" }}
              >
                Gift officers are drowning in admin. Not building relationships.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                The average gift officer spends 75% of their time on research, data entry, proposal writing,
                and meeting prep — leaving only 25% for actual donor relationships.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                Aperion inverts that ratio. It handles the preparation, the follow-up, and the paperwork —
                so your team can spend 75% of their time doing what only humans can do.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-8">
                  <Quote className="w-7 h-7 text-cyan-400 shrink-0 mt-1" />
                  <blockquote className="text-xl font-black text-[#0A0E1A] tracking-tight leading-snug uppercase">
                    "Every gift officer deserves to spend their time on relationships, not research."
                  </blockquote>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { before: "75%", after: "25%", label: "Admin Work" },
                    { before: "25%", after: "75%", label: "Donor Time" },
                  ].map((row, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-xl font-black text-gray-200 line-through">{row.before}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                        <span
                          className="text-xl font-black"
                          style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                        >
                          {row.after}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{row.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── How Aperion Works ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-5">How Aperion Works</p>
            <h2
              className="font-black uppercase text-[#0A0E1A] leading-[0.95] mb-5"
              style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.04em" }}
            >
              From raw data to the right conversation — automated.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Aperion sits between your CRM data and your gift officers — turning fragmented information
              into actionable intelligence before every meeting.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <svg viewBox="0 0 1000 440" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="aGradLeft2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="aGradRight2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="aEngineGrad2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              <text x="115" y="28" textAnchor="middle" fill="rgba(37,99,235,0.55)" fontSize="8.5" fontWeight="800" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="2.5">DATA INPUTS</text>
              <text x="885" y="28" textAnchor="middle" fill="rgba(6,182,212,0.55)" fontSize="8.5" fontWeight="800" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="2.5">OUTPUTS</text>
              {INPUTS.map((inp, i) => {
                const y = 55 + i * 82;
                return (
                  <g key={i}>
                    <rect x="10" y={y} width="210" height="64" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                    <rect x="10" y={y} width="3" height="64" rx="1.5" fill="#2563EB" />
                    <text x="120" y={y+24} textAnchor="middle" fill="rgba(10,14,26,0.85)" fontSize="10.5" fontWeight="800" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.3">{inp.label}</text>
                    <text x="120" y={y+42} textAnchor="middle" fill="rgba(107,122,144,0.9)" fontSize="8.5" fontFamily="Urbanist, system-ui, sans-serif">{inp.sub}</text>
                  </g>
                );
              })}
              <line x1="220" y1="87" x2="350" y2="186" stroke="url(#aGradLeft2)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="220" y1="169" x2="350" y2="210" stroke="url(#aGradLeft2)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="220" y1="251" x2="350" y2="230" stroke="url(#aGradLeft2)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="220" y1="333" x2="350" y2="254" stroke="url(#aGradLeft2)" strokeWidth="1.2" strokeDasharray="4 6" />
              <rect x="350" y="110" width="300" height="220" rx="12" fill="#0A0E1A" />
              <rect x="350" y="110" width="300" height="3" rx="1.5" fill="url(#aEngineGrad2)" />
              <text x="500" y="152" textAnchor="middle" fill="white" fontSize="22" fontWeight="900" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="-1">APERION</text>
              <text x="500" y="170" textAnchor="middle" fill="rgba(103,232,249,0.7)" fontSize="7" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="4">AI INTELLIGENCE ENGINE</text>
              <line x1="375" y1="185" x2="625" y2="185" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              {ENGINE_ITEMS.map((item, i) => (
                <g key={i}>
                  <circle cx="382" cy={204+i*22} r="2.5" fill={i<2?"#2563EB":i<4?"#0891B2":"#06B6D4"} />
                  <text x="392" y={208+i*22} fill="rgba(255,255,255,0.6)" fontSize="9.5" fontWeight="600" fontFamily="Urbanist, system-ui, sans-serif">{item}</text>
                </g>
              ))}
              <line x1="650" y1="186" x2="780" y2="87"  stroke="url(#aGradRight2)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="650" y1="210" x2="780" y2="169" stroke="url(#aGradRight2)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="650" y1="230" x2="780" y2="251" stroke="url(#aGradRight2)" strokeWidth="1.2" strokeDasharray="4 6" />
              <line x1="650" y1="254" x2="780" y2="333" stroke="url(#aGradRight2)" strokeWidth="1.2" strokeDasharray="4 6" />
              {OUTPUTS.map((out, i) => {
                const y = 55 + i * 82;
                return (
                  <g key={i}>
                    <rect x="780" y={y} width="210" height="64" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                    <rect x="987" y={y} width="3" height="64" rx="1.5" fill="#06B6D4" />
                    <text x="880" y={y+24} textAnchor="middle" fill="rgba(10,14,26,0.85)" fontSize="10.5" fontWeight="800" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.3">{out.label}</text>
                    <text x="880" y={y+42} textAnchor="middle" fill="rgba(107,122,144,0.9)" fontSize="8.5" fontFamily="Urbanist, system-ui, sans-serif">{out.sub}</text>
                  </g>
                );
              })}
            </svg>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Platform Capabilities</p>
            <h2
              className="font-black uppercase text-[#0A0E1A] leading-[0.95] mb-5"
              style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.04em" }}
            >
              Five capabilities. One outcome: more closed gifts.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Each Aperion module eliminates a specific category of administrative friction — together they
              transform how your team operates.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((cap, i) => (
              <AnimatedSection key={i} delay={0.07 * i} className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-7"
                  style={{ background: `${cap.color}10`, color: cap.color }}
                >
                  {cap.icon}
                </div>
                <h3 className="text-base font-bold text-[#0A0E1A] uppercase tracking-tight mb-3">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{cap.desc}</p>
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: cap.color }}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Included in Aperion
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.35} className="bg-[#0A0E1A] rounded-2xl p-8 flex flex-col">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-5">Net Result</p>
              <div
                className="text-6xl font-black leading-none mb-4"
                style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.05em" }}
              >
                20:1
              </div>
              <p className="text-white/55 text-sm leading-relaxed flex-1">ROI by year two, for every dollar invested in Aperion.</p>
              <div className="mt-6 pt-6 border-t border-white/10 text-xs font-bold text-white/25 uppercase tracking-widest">Measured outcome</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="py-20 lg:py-24 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12 max-w-2xl">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Measurable Impact</p>
            <h2
              className="font-black uppercase text-[#0A0E1A] leading-[0.95]"
              style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.04em" }}
            >
              Results your team will feel on day one.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { stat: "75%",  label: "Admin Time Eliminated",  desc: "Gift officers reclaim the majority of their week for relationship-building." },
              { stat: "3×",   label: "Meaningful Touchpoints", desc: "Aperion users average 3× more high-quality donor interactions per month." },
              { stat: "300+", label: "Opportunity Library",    desc: "Pre-built funding opportunities matched intelligently to each donor's interests." },
              { stat: "20:1", label: "ROI by Year Two",        desc: "For every dollar invested in Aperion, programs return twenty in philanthropic revenue." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={0.1 * i} className="bg-white border border-gray-200 rounded-2xl p-8">
                <div
                  className="font-black text-[clamp(36px,4vw,52px)] leading-none mb-5"
                  style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.05em" }}
                >
                  {item.stat}
                </div>
                <div className="text-sm font-bold text-[#0A0E1A] uppercase tracking-tight mb-3">{item.label}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-[#0A0E1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 65%)" }} />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-6">Ready to get started?</p>
            <h2
              className="font-black uppercase text-white leading-[0.92] mb-7"
              style={{ fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.04em" }}
            >
              Free your team
              <br />
              <span style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                to fundraise.
              </span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10">
              See how Aperion works inside your existing Blackbaud or Salesforce environment — no
              new interface, no training curve.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="px-10 py-4 rounded-xl text-white font-bold text-base transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)", boxShadow: "0 8px 28px rgba(6,182,212,0.3)" }}
              >
                Request a Demo
              </button>
              <button className="px-10 py-4 rounded-xl border border-white/15 text-white/60 font-bold text-base hover:text-white hover:border-white/30 transition-all">
                View Case Study
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
