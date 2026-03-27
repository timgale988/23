import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Quote, AlertTriangle, Zap, Users, BarChart3, Phone, Brain, Shield } from "lucide-react";

const PRYSM_INPUTS = [
  { name: "Epic EMR", sub: "FHIR encounter ingestion" },
  { name: "Windfall Wealth", sub: "Net worth & capacity data" },
  { name: "DonorSearch", sub: "Philanthropic history & giving" },
  { name: "Clinical Encounters", sub: "70K+ physician panels" },
];

const PRYSM_OUTPUTS = [
  { name: "Blackbaud CRM", sub: "Qualified prospect push" },
  { name: "Salesforce NPSP", sub: "Native SF integration" },
  { name: "Gift Officer Queue", sub: "Daily prioritized lists" },
  { name: "ROI & Analytics", sub: "Pipeline & gift reporting" },
];

const sectorChallenges = [
  {
    title: "Siloed systems and manual workflows",
    desc: "EMRs, spreadsheets, and donor databases that don't talk to each other. Identifying a single grateful patient requires days of manual cross-referencing.",
  },
  {
    title: "Outdated operating models",
    desc: "Reactive workflows, paper referral forms, and manual wealth screening cannot support the volume or precision required for major gift success.",
  },
  {
    title: "Low confidence in data and metrics",
    desc: "Without a unified system of record, gift officers cannot prioritize outreach, measure program health, or demonstrate ROI to leadership.",
  },
  {
    title: "Staff burnout and unsustainable inefficiency",
    desc: "Gift officers spend the majority of their time on administrative work rather than building donor relationships. Onboarding takes months. Attrition is high.",
  },
];

const capabilities = [
  { icon: Brain,    color: "#7C3AED", title: "AI Prospect Scoring",         desc: "Windfall, DonorSearch, Einstein AI, and clinical signals — scored and ranked automatically." },
  { icon: Zap,      color: "#2563EB", title: "Automation-First Workflows",  desc: "Every patient pipeline step runs continuously without manual intervention." },
  { icon: Phone,    color: "#0284C7", title: "HIPAA-Compliant CTI Calling", desc: "Click-to-dial outreach with PHI protection, call logging, and full audit trails." },
  { icon: Users,    color: "#0A0E1A", title: "Clinician Engagement",        desc: "Structured physician referral workflows with attribution tracking built in." },
  { icon: BarChart3,color: "#06B6D4", title: "Real-Time Dashboards",        desc: "Live views of patient journeys, activity, and program performance for all stakeholders." },
];

const outcomeStats = [
  { value: "305%",     label: "Increase in first-time major gifts" },
  { value: "$4.32M",   label: "Realized revenue, Year One" },
  { value: "14.9%",    label: "System-wide qualification rate" },
  { value: "20×",      label: "ROI on platform investment" },
  { value: "90%",      label: "Reduction in gift officer ramp time" },
  { value: "70K+",     label: "Physician panels analyzed in real time" },
];

const testimonials = [
  {
    quote: "Prysm has completely transformed how we identify and engage grateful patients. We're reaching donors we never would have found through traditional research — and we're reaching them at exactly the right moment.",
    name: "Greg Gissendanner",
    title: "Chief Philanthropy Officer",
    org: "Providence South Division",
  },
  {
    quote: "The physician referral component alone has changed our program. Our gift officers come in with clinical context — they know why the patient is grateful and what care they received. That changes everything about the first conversation.",
    name: "Matt Valenzuela",
    title: "Director of Grateful Patient Programs",
    org: "Providence South Division",
  },
  {
    quote: "What used to take our research team weeks now happens automatically, overnight. Prysm surfaces the right patient at the right time with everything we need to make the ask.",
    name: "Kathleen Patrick",
    title: "Vice President of Philanthropy",
    org: "Providence South Division",
  },
];

export default function Prysm() {
  return (
    <div className="overflow-hidden bg-white">

      {/* ── 1. Hero ── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-[#0A0E1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/18 via-[#0A0E1A] to-[#06B6D4]/8" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/10 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#7C3AED]/60" />
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#7C3AED]">Platform 01 — Prysm</span>
              </div>
              <h1 className="text-[clamp(36px,5.5vw,68px)] font-bold text-white leading-[0.95] tracking-[-0.04em] uppercase mb-7">
                Grateful patients become<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                  transformational donors.
                </span>
              </h1>
              <p className="text-lg text-white/55 mb-10 leading-relaxed max-w-2xl font-light">
                Prysm connects Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically identify, qualify, and engage grateful patients as major gift prospects — before the window of opportunity closes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0">
                  Request a demo
                </Button>
                <Link href="/results">
                  <Button size="lg" variant="outline" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 border-white/20 text-white/70 hover:text-white hover:border-white/40 bg-transparent">
                    View client results
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 2. The Problem ── */}
      <section className="py-20 lg:py-28 border-b border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <AnimatedSection>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-5 uppercase">The Challenge</div>
              <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-[#0A0E1A] mb-6 tracking-tight uppercase leading-[1.0]">
                The grateful patient opportunity is being lost to operational failure.
              </h2>
              <p className="text-lg text-[#6B7A90] font-light leading-relaxed mb-6">
                Every week, thousands of patients leave your health system with genuine gratitude and real philanthropic capacity. Without a systematic mechanism to connect that gratitude to your philanthropy program, the window closes within days — permanently.
              </p>
              <p className="text-base text-[#6B7A90] font-light leading-relaxed">
                The $48 trillion intergenerational wealth transfer is already underway. Programs that cannot operate at speed and scale will miss the largest generational giving opportunity in history.
              </p>

              {/* Proof bridge */}
              <div className="mt-10 p-6 bg-[#F7F8FC] border border-[#E8ECF2]">
                <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] uppercase mb-2">Verified outcomes</div>
                <p className="text-[#0A0E1A] font-semibold text-sm leading-snug mb-4">
                  305% increase in first-time major gifts. $4.32M realized in Year One. 461 qualified prospects from 3,098 screened — across nine Providence hospitals.
                </p>
                <Link href="/results" className="inline-flex items-center text-[#7C3AED] text-xs font-bold tracking-widest uppercase hover:opacity-70 transition-opacity">
                  See full results <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Challenge list panel */}
            <AnimatedSection delay={0.1} className="relative bg-[#0A0E1A] overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-[#7C3AED]/12 blur-[70px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#06B6D4]/8 blur-[50px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10 px-7 pt-7 pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7C3AED]">Why Traditional Programs Fail</span>
                </div>
              </div>
              <div className="relative z-10">
                {sectorChallenges.map((challenge, i) => (
                  <div key={i} className="px-7 py-6 border-b border-white/[0.06] last:border-0 flex items-start gap-4">
                    <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white/[0.05] border border-white/10 mt-0.5">
                      <span className="text-[10px] font-bold text-white/50">0{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-tight mb-1.5">{challenge.title}</h4>
                      <p className="text-xs text-white/42 font-light leading-relaxed">{challenge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-[3px] w-full bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 3. How Prysm Works ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="max-w-2xl mb-14">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-5 uppercase">How Prysm Works</div>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-[#0A0E1A] tracking-tight uppercase leading-[1.0] mb-5">
              From clinical encounter to major gift — automated.
            </h2>
            <p className="text-lg text-[#6B7A90] font-light leading-relaxed">
              Prysm sits at the center of your philanthropy stack — connecting clinical data on the left to CRM systems and gift officer workflows on the right.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            {/* Column labels */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-[#7C3AED]" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#7C3AED] uppercase">Data Inputs</span>
              </div>
              <span className="text-[10px] font-bold tracking-[0.18em] text-[#0A0E1A]/20 uppercase hidden lg:block">Prysm — Platform Architecture</span>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#06B6D4] uppercase">Outputs</span>
                <div className="w-6 h-px bg-[#06B6D4]" />
              </div>
            </div>

            {/* 3-column diagram */}
            <div className="grid lg:grid-cols-[220px_1fr_200px] gap-6 lg:gap-8 items-center">

              {/* Left: Input cards */}
              <div className="space-y-2">
                {PRYSM_INPUTS.map((inp, i) => (
                  <div key={i} className="bg-[#FAFBFD] border border-[#E8ECF2] border-l-[2px] border-l-[#7C3AED] px-4 py-3.5 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-bold text-[#0A0E1A] text-[11px] tracking-[0.07em] uppercase mb-0.5">{inp.name}</div>
                      <div className="text-[11px] text-[#8A93A8] font-light">{inp.sub}</div>
                    </div>
                    <span className="text-[#D0D5E4] text-sm shrink-0">→</span>
                  </div>
                ))}
              </div>

              {/* Center: SVG diagram */}
              <div className="flex items-center justify-center">
                <svg viewBox="0 0 560 520" className="w-full max-w-[480px] h-auto" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="pOG" cx="38%" cy="33%" r="68%">
                      <stop offset="0%"   stopColor="#FFFFFF" />
                      <stop offset="55%"  stopColor="#FAFAFA" />
                      <stop offset="85%"  stopColor="#F2F2F2" />
                      <stop offset="100%" stopColor="#EBEBEB" />
                    </radialGradient>
                    <radialGradient id="pHI" cx="38%" cy="33%" r="40%">
                      <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="pRG" x1="0" y1="0" x2="560" y2="520" gradientUnits="userSpaceOnUse">
                      <stop offset="0%"   stopColor="#7C3AED" />
                      <stop offset="50%"  stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <linearGradient id="pPV" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="#1A1A1A" />
                      <stop offset="100%" stopColor="#2E2E2E" />
                    </linearGradient>
                    <linearGradient id="pPC" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="#222222" />
                      <stop offset="100%" stopColor="#383838" />
                    </linearGradient>
                    <filter id="pDS" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="#000000" floodOpacity="0.12" />
                    </filter>
                  </defs>
                  <circle cx="280" cy="260" r="195" fill="url(#pOG)" filter="url(#pDS)" />
                  <circle cx="280" cy="260" r="195" fill="url(#pHI)" />
                  <circle cx="280" cy="260" r="195" fill="none" stroke="url(#pRG)" strokeWidth="1.5" opacity="0.6" />
                  <circle cx="280" cy="260" r="158" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeDasharray="6 5" />
                  <circle cx="280" cy="260" r="112" fill="none" stroke="url(#pRG)" strokeWidth="1.5" opacity="0.5" />
                  <line x1="280" y1="148" x2="280" y2="69"  stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="347" y1="175" x2="404" y2="120" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="397" y1="260" x2="469" y2="260" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="347" y1="345" x2="404" y2="400" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="280" y1="371" x2="280" y2="449" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="213" y1="345" x2="156" y2="400" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="163" y1="260" x2="91"  y2="260" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="213" y1="175" x2="156" y2="120" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="280" cy="148" r="3.5" fill="#7C3AED" />
                  <circle cx="347" cy="175" r="3.5" fill="#7C3AED" />
                  <circle cx="397" cy="260" r="3.5" fill="#06B6D4" />
                  <circle cx="347" cy="345" r="3.5" fill="#06B6D4" />
                  <circle cx="280" cy="371" r="3.5" fill="#06B6D4" />
                  <circle cx="213" cy="345" r="3.5" fill="#06B6D4" />
                  <circle cx="163" cy="260" r="3.5" fill="#7C3AED" />
                  <circle cx="213" cy="175" r="3.5" fill="#7C3AED" />
                  <rect x="190" y="53" width="180" height="21" rx="2" fill="url(#pPV)" />
                  <text x="280" y="68" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="0.13em" fill="#FFFFFF">AI PROSPECT SCORING</text>
                  <rect x="351" y="104" width="162" height="21" rx="2" fill="url(#pPV)" />
                  <text x="432" y="119" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="0.13em" fill="#FFFFFF">WEALTH INTELLIGENCE</text>
                  <rect x="411" y="249" width="140" height="21" rx="2" fill="url(#pPC)" />
                  <text x="481" y="264" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="0.13em" fill="#FFFFFF">REAL-TIME ANALYTICS</text>
                  <rect x="351" y="389" width="150" height="21" rx="2" fill="url(#pPC)" />
                  <text x="426" y="404" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="0.13em" fill="#FFFFFF">HIPAA COMPLIANCE</text>
                  <rect x="208" y="438" width="144" height="21" rx="2" fill="url(#pPC)" />
                  <text x="280" y="453" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="0.13em" fill="#FFFFFF">CTI OUTREACH</text>
                  <rect x="47" y="389" width="162" height="21" rx="2" fill="url(#pPC)" />
                  <text x="128" y="404" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="0.13em" fill="#FFFFFF">DAILY PATIENT LISTS</text>
                  <rect x="25" y="249" width="118" height="21" rx="2" fill="url(#pPV)" />
                  <text x="84" y="264" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="0.13em" fill="#FFFFFF">GEOLOCATION</text>
                  <rect x="47" y="104" width="162" height="21" rx="2" fill="url(#pPV)" />
                  <text x="128" y="119" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="0.13em" fill="#FFFFFF">CLINICIAN REFERRALS</text>
                  <text x="280" y="254" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="34" fontWeight="700" letterSpacing="0.08em" fill="#0A0E1A">PRYSM</text>
                  <text x="280" y="273" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="9" fontWeight="600" letterSpacing="0.28em" fill="rgba(10,14,26,0.35)">PURPOSE BUILT</text>
                </svg>
              </div>

              {/* Right: Output cards */}
              <div className="space-y-2">
                {PRYSM_OUTPUTS.map((out, i) => (
                  <div key={i} className="bg-[#FAFBFD] border border-[#E8ECF2] border-l-[2px] border-l-[#0891B2] px-4 py-3.5 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-bold text-[#0A0E1A] text-[11px] tracking-[0.07em] uppercase mb-0.5">{out.name}</div>
                      <div className="text-[11px] text-[#8A93A8] font-light">{out.sub}</div>
                    </div>
                    <span className="text-[#D0D5E4] text-sm shrink-0">→</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Platform Capabilities */}
          <AnimatedSection className="mt-14">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#9AA3B2] uppercase mb-5 text-center">Platform Capabilities</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#E8ECF2]">
              {capabilities.map((cap, i) => (
                <div key={i} className="bg-white hover:bg-[#F7F8FC] transition-colors p-6 group relative">
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${cap.color}, transparent)` }}
                  />
                  <div className="w-8 h-8 flex items-center justify-center mb-4" style={{ border: `1px solid ${cap.color}30` }}>
                    <cap.icon className="w-3.5 h-3.5" style={{ color: cap.color }} />
                  </div>
                  <h4 className="text-xs font-bold text-[#0A0E1A] uppercase tracking-tight mb-2 leading-snug">{cap.title}</h4>
                  <p className="text-[11px] text-[#6B7A90] font-light leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. Outcomes ── */}
      <section className="bg-[#0A0E1A] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-white/[0.06]">
            {outcomeStats.map((stat, i) => (
              <div key={i} className="border-r border-white/[0.06] border-b lg:border-b-0 px-6 py-8">
                <div className="text-2xl lg:text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] font-semibold tracking-widest uppercase text-white/45 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Testimonials ── */}
      <section className="py-20 lg:py-28 bg-[#F7F8FC] border-b border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-xl mb-12">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#6B7A90] mb-5 uppercase">In Their Own Words</div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-[#0A0E1A] tracking-tight uppercase leading-[1.0]">
              What philanthropy leaders say.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-px bg-[#E8ECF2]">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={0.08 * i} className="bg-white p-9 flex flex-col">
                <Quote className="w-7 h-7 text-[#7C3AED]/25 mb-5" />
                <p className="text-[#0A0E1A] font-light text-sm leading-relaxed flex-1 mb-7">"{t.quote}"</p>
                <div className="border-t border-[#E8ECF2] pt-5">
                  <div className="text-sm font-bold text-[#0A0E1A] uppercase tracking-tight">{t.name}</div>
                  <div className="text-xs text-[#6B7A90] uppercase tracking-wider mt-1">{t.title}</div>
                  <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest mt-1">{t.org}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section className="py-20 lg:py-28 bg-[#0A0E1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#06B6D4]/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-7 h-px bg-white/20" />
                <span className="text-[10px] tracking-[0.22em] font-bold text-white/30 uppercase">Get Started with Prysm</span>
              </div>
              <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-white tracking-tight uppercase leading-[0.95] mb-6">
                Ready to see<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">Prysm in action?</span>
              </h2>
              <p className="text-lg text-white/50 font-light mb-10 leading-relaxed max-w-lg">
                Schedule a live platform walkthrough. We'll show you how Prysm connects to your Epic environment, what the first 90 days look like, and what outcomes health systems at your scale have achieved.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0">
                  Request a demo <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 border-white/20 text-white/60 hover:text-white hover:border-white/40 bg-transparent">
                  Download overview
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="border border-white/[0.08]">
              {[
                { label: "Deployment timeline", value: "90 days to first patient lists" },
                { label: "EMR integration", value: "Native Epic FHIR — no middleware" },
                { label: "CRM support", value: "Blackbaud CRM & Salesforce NPSP" },
                { label: "First-year ROI", value: "20× return on investment (Providence)" },
                { label: "Onboarding", value: "90% reduction in gift officer ramp time" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between gap-8 px-6 py-5 border-b border-white/[0.06] last:border-0">
                  <div className="text-[11px] font-bold tracking-widest uppercase text-white/28">{item.label}</div>
                  <div className="text-sm font-semibold text-white text-right">{item.value}</div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  );
}
