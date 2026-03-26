import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, CheckCircle2, Quote, AlertTriangle, Database, Zap, Users, MapPin, BarChart3, Phone, Brain, Shield, Building2, FileSearch, TrendingUp } from "lucide-react";

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

// Pill badge positions: cx, cy are the center of each pill on the ring (r=195, center 280,260)
const PRYSM_PILLS = [
  { label: "AI PROSPECT SCORING",  cx: 280, cy: 65,  w: 158, dotR: [280, 120] },
  { label: "WEALTH INTELLIGENCE",  cx: 418, cy: 122, w: 148, dotR: [379, 161] },
  { label: "REAL-TIME ANALYTICS",  cx: 475, cy: 260, w: 154, dotR: [420, 260] },
  { label: "HIPAA COMPLIANCE",     cx: 418, cy: 398, w: 133, dotR: [379, 359] },
  { label: "CTI OUTREACH",         cx: 280, cy: 455, w: 108, dotR: [280, 400] },
  { label: "DAILY PATIENT LISTS",  cx: 142, cy: 398, w: 148, dotR: [181, 359] },
  { label: "GEO-LOCATION",         cx: 85,  cy: 260, w: 103, dotR: [140, 260] },
  { label: "CLINICIAN REFERRALS",  cx: 142, cy: 122, w: 150, dotR: [181, 161] },
];
const PILL_DOT_COLORS = ["#7C3AED","#5B21B6","#2563EB","#0891B2","#06B6D4","#0891B2","#2563EB","#5B21B6"];

const outcomeStats = [
  { value: "305%", label: "Increase in first-time major gifts", sub: "Providence South Division" },
  { value: "$4.3M", label: "Realized philanthropic revenue", sub: "First year, Providence" },
  { value: "1,233%", label: "Increase in donations from referred patients", sub: "Clinician referral channel" },
  { value: "200–400%", label: "Patient qualification rate increase", sub: "Across all deployments" },
  { value: "90%", label: "Reduction in gift officer onboarding time", sub: "Platform-driven activation" },
  { value: "70K+", label: "Physician panels analyzed in real time", sub: "Across health system networks" },
];

const sectorChallenges = [
  {
    title: "Siloed systems and manual workflows",
    desc: "Philanthropy teams operate in disconnected tools — EMRs, spreadsheets, and donor databases that don't communicate. Identifying a grateful patient requires manual cross-referencing across systems, taking days or weeks per prospect.",
  },
  {
    title: "Low confidence in data and metrics",
    desc: "Without a unified system of record, gift officers lack the real-time performance visibility needed to prioritize outreach, measure program health, or demonstrate ROI to leadership — limiting both strategy and accountability.",
  },
  {
    title: "Outdated operating models",
    desc: "Most grateful patient programs were designed for a different era. Reactive workflows, paper-based referral forms, and manual wealth screening cannot support the volume, speed, or precision required to compete for major gifts in today's environment.",
  },
  {
    title: "Staff burnout and unsustainable inefficiency",
    desc: "Gift officers spend the majority of their time on administrative work — data entry, prospect research, and coordination — rather than building donor relationships. Onboarding new staff takes months. Attrition is high. Programs stagnate.",
  },
];

const testimonials = [
  {
    quote: "Prysm has completely transformed how we identify and engage grateful patients. We're reaching donors we never would have found through traditional research — and we're reaching them at exactly the right moment in their relationship with our health system.",
    name: "Greg Gissendanner",
    title: "Chief Philanthropy Officer",
    org: "Providence South Division",
  },
  {
    quote: "The physician referral component alone has changed our program. Our gift officers are having more meaningful conversations because they come in with clinical context — they know why the patient is grateful and what care they received. That changes everything about the first conversation.",
    name: "Matt Valenzuela",
    title: "Director of Grateful Patient Programs",
    org: "Providence South Division",
  },
  {
    quote: "What used to take our research team weeks now happens automatically, overnight. Prysm surfaces the right patient at the right time with everything we need to make the ask — and our results in year one show exactly what that kind of precision makes possible.",
    name: "Kathleen Patrick",
    title: "Vice President of Philanthropy",
    org: "Providence South Division",
  },
];

export default function Prysm() {
  return (
    <div className="overflow-hidden bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#0A0E1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-[#0A0E1A] to-[#06B6D4]/10" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#06B6D4]/8 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="inline-block px-4 py-2 bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#7C3AED] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                Platform 01 — Prysm
              </div>
              <h1 className="text-5xl lg:text-[5.5rem] font-display font-bold text-white leading-[1.05] tracking-tighter mb-8">
                GRATEFUL PATIENTS BECOME TRANSFORMATIONAL DONORS.
              </h1>
              <p className="text-xl sm:text-2xl text-white/60 mb-6 leading-relaxed max-w-3xl font-light">
                Prysm is an automation-first, cloud-based CRM platform built exclusively for non-profit healthcare systems. It connects Epic EMR with Blackbaud CRM and Salesforce NPSP to systematically identify, qualify, and engage grateful patients as major gift prospects — before the window of opportunity closes.
              </p>
              <p className="text-lg text-white/40 mb-12 leading-relaxed max-w-3xl font-light">
                Where traditional grateful patient programs rely on manual research, paper referral forms, and siloed systems, Prysm automates every step of the identification and engagement process — enabling health system philanthropy teams to operate at a scale and speed that was previously impossible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0">
                  Request a demo
                </Button>
                <Button size="lg" variant="outline" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 border-white/20 text-white/70 hover:text-white hover:border-white/40 bg-transparent">
                  View case study
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Outcomes Bar ── */}
      <section className="bg-[#0A0E1A] border-t border-white/[0.06] py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-white/[0.06]">
            {outcomeStats.map((stat, i) => (
              <div key={i} className="border-r border-white/[0.06] border-b lg:border-b-0 px-6 py-8">
                <div className="text-2xl lg:text-3xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] font-semibold tracking-widest uppercase text-white/50 leading-snug mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-white/25 uppercase tracking-wider">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="py-24 lg:py-32 border-b border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-6 uppercase">
                The Challenge
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] mb-8 tracking-tighter">
                THE GRATEFUL PATIENT OPPORTUNITY IS BEING LOST TO OPERATIONAL FAILURE.
              </h2>
              <p className="text-xl text-[#6B7A90] font-light leading-relaxed mb-6">
                Grateful patient philanthropy is the most scalable and mission-aligned fundraising strategy available to health systems — but the traditional model is broken. Manual processes, siloed technology, and outdated workflows cannot support the complexity or speed required for success.
              </p>
              <p className="text-lg text-[#6B7A90] font-light leading-relaxed mb-6">
                Every week, thousands of patients leave your health system with genuine gratitude and real philanthropic capacity — and no systematic mechanism exists to connect that gratitude to your philanthropy program. The window of engagement closes within days.
              </p>
              <p className="text-lg text-[#6B7A90] font-light leading-relaxed">
                The $48 trillion intergenerational wealth transfer is already underway. Health system philanthropy programs that cannot operate with precision, speed, and automation at scale will miss the single largest generational giving opportunity in history.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="relative bg-[#0A0E1A] overflow-hidden">
              {/* Gradient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#7C3AED]/15 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#06B6D4]/10 blur-[60px] pointer-events-none" />
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Header stripe */}
              <div className="relative z-10 px-8 pt-8 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7C3AED]">
                    Sector Challenges
                  </span>
                </div>
                <p className="text-white/35 text-xs font-light mt-2 leading-relaxed">
                  Why traditional grateful patient programs fail at scale
                </p>
              </div>
              {/* Challenge items */}
              <div className="relative z-10">
                {sectorChallenges.map((challenge, i) => (
                  <div key={i} className="px-8 py-7 border-b border-white/[0.06] last:border-0 flex items-start gap-5 group">
                    <div className="shrink-0 w-8 h-8 rounded-none flex items-center justify-center bg-gradient-to-br from-[#7C3AED]/30 to-[#2563EB]/20 border border-white/10 mt-0.5">
                      <span className="text-[11px] font-bold text-white/60 font-display">0{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#A78BFA] transition-colors">{challenge.title}</h4>
                      <p className="text-sm text-white/45 font-light leading-relaxed">{challenge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Bottom accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]" />
            </AnimatedSection>
          </div>

          {/* Big stats */}
          <div className="grid md:grid-cols-3 gap-16 mt-24 pt-16 border-t border-[#E8ECF2]">
            <AnimatedSection delay={0.1}>
              <div className="text-7xl lg:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#2563EB] to-[#06B6D4] mb-3 leading-none">
                305%
              </div>
              <div className="text-sm font-semibold tracking-widest uppercase text-[#0A0E1A] max-w-sm leading-relaxed border-l-2 border-[#7C3AED] pl-6">
                Increase in first-time major gifts at Providence South Division in the first year after Prysm deployment — from a program that had previously plateaued.
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-7xl lg:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#2563EB] to-[#06B6D4] mb-3 leading-none">
                $4.3M
              </div>
              <div className="text-sm font-semibold tracking-widest uppercase text-[#0A0E1A] max-w-sm leading-relaxed border-l-2 border-[#7C3AED] pl-6">
                In realized philanthropic revenue attributed directly to Prysm-identified prospects in Year One — delivering a return exceeding 20× the cost of the platform.
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-7xl lg:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#2563EB] to-[#06B6D4] mb-3 leading-none">
                1,233%
              </div>
              <div className="text-sm font-semibold tracking-widest uppercase text-[#0A0E1A] max-w-sm leading-relaxed border-l-2 border-[#7C3AED] pl-6">
                Increase in charitable donations from clinician-referred patients when Prysm's structured referral workflows replace ad hoc or paper-based processes.
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── How Prysm Works ── */}
      <section className="py-24 lg:py-32 bg-white border-t border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-6 uppercase">
              How Prysm Works
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] tracking-tighter mb-6">
              FROM CLINICAL ENCOUNTER TO MAJOR GIFT — AUTOMATED.
            </h2>
            <p className="text-xl text-[#6B7A90] font-light leading-relaxed">
              Prysm sits at the center of your philanthropy stack — connecting clinical data on the left to CRM systems and gift officer workflows on the right, automatically.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            {/* Top column labels */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#7C3AED]" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#7C3AED] uppercase">Data Inputs</span>
              </div>
              <span className="text-[10px] font-bold tracking-[0.18em] text-[#0A0E1A]/25 uppercase hidden lg:block">Prysm — Platform Architecture</span>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#06B6D4] uppercase">Outputs</span>
                <div className="w-8 h-px bg-[#06B6D4]" />
              </div>
            </div>

            {/* 3-column layout */}
            <div className="grid lg:grid-cols-[240px_1fr_210px] gap-6 lg:gap-10 items-center">

              {/* ── Left: Input cards ── */}
              <div className="space-y-3">
                {PRYSM_INPUTS.map((inp, i) => (
                  <div key={i} className="bg-white border border-[#E4E5F2] p-4 flex items-center justify-between group hover:border-[#C4B5FD] transition-colors">
                    <div>
                      <div className="font-bold text-[#0A0E1A] text-[13px] tracking-wide uppercase mb-0.5">{inp.name}</div>
                      <div className="text-[11px] text-[#9AA3B2] font-light">{inp.sub}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C4B5FD] shrink-0 ml-3 group-hover:text-[#7C3AED] transition-colors" />
                  </div>
                ))}
              </div>

              {/* ── Center: Circle SVG ── */}
              <div className="flex items-center justify-center">
                <svg viewBox="0 0 560 520" className="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="pgCenter" cx="50%" cy="50%" r="50%">
                      <stop offset="0%"   stopColor="white"   stopOpacity="1" />
                      <stop offset="75%"  stopColor="#F5F3FF" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.6" />
                    </radialGradient>
                    <radialGradient id="pgRing" cx="50%" cy="50%" r="50%">
                      <stop offset="60%"  stopColor="#F5F3FF" stopOpacity="0" />
                      <stop offset="85%"  stopColor="#EDE9FE" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.7" />
                    </radialGradient>
                  </defs>

                  {/* Concentric dashed rings */}
                  <circle cx="280" cy="260" r="195" fill="none" stroke="rgba(109,40,217,0.55)"  strokeWidth="1.5" strokeDasharray="5 9" />
                  <circle cx="280" cy="260" r="148" fill="none" stroke="rgba(109,40,217,0.38)"  strokeWidth="1.2" strokeDasharray="4 8" />
                  <circle cx="280" cy="260" r="90"  fill="white" stroke="rgba(109,40,217,0.3)"  strokeWidth="1" />

                  {/* Dashed radial guide lines from center to each pill */}
                  {PRYSM_PILLS.map((p, i) => (
                    <line key={i}
                      x1="280" y1="260" x2={p.cx} y2={p.cy}
                      stroke="rgba(109,40,217,0.22)" strokeWidth="0.8" strokeDasharray="3 7"
                    />
                  ))}

                  {/* 8 colored dots at r=140 */}
                  {PRYSM_PILLS.map((p, i) => (
                    <circle key={i} cx={p.dotR[0]} cy={p.dotR[1]} r="5" fill={PILL_DOT_COLORS[i]} />
                  ))}

                  {/* Capability pill badges */}
                  {PRYSM_PILLS.map((p, i) => (
                    <g key={i}>
                      <rect
                        x={p.cx - p.w / 2} y={p.cy - 14}
                        width={p.w} height={28} rx="4"
                        fill="rgba(237,233,254,0.88)"
                        stroke="rgba(124,58,237,0.22)" strokeWidth="0.8"
                      />
                      <text
                        x={p.cx} y={p.cy + 4.5}
                        textAnchor="middle"
                        fill="#1E1B4B"
                        fontSize="8" fontWeight="800"
                        fontFamily="Urbanist, system-ui, sans-serif"
                        letterSpacing="1"
                      >{p.label}</text>
                    </g>
                  ))}

                  {/* Center text */}
                  <text x="280" y="254" textAnchor="middle" fill="#0A0E1A" fontSize="26" fontWeight="900" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="-1">PRYSM</text>
                  <text x="280" y="273" textAnchor="middle" fill="rgba(10,14,26,0.38)" fontSize="7.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="4">PURPOSE BUILT</text>
                </svg>
              </div>

              {/* ── Right: Output list ── */}
              <div>
                <div className="divide-y divide-[#E8ECF2]">
                  {PRYSM_OUTPUTS.map((out, i) => (
                    <div key={i} className="py-4 flex items-start justify-between group">
                      <div>
                        <div className="font-bold text-[#0A0E1A] text-[13px] tracking-wide uppercase mb-0.5">{out.name}</div>
                        <div className="text-[11px] text-[#9AA3B2] font-light">{out.sub}</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A5F3FC] shrink-0 ml-3 mt-0.5 group-hover:text-[#06B6D4] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* Capability cards */}
          <AnimatedSection className="mt-16">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#9AA3B2] uppercase mb-6 text-center">Platform Capabilities</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#E8ECF2]">
              {[
                { icon: Brain,    color: "#7C3AED", title: "AI Prospect Scoring",         desc: "Windfall, DonorSearch, Einstein AI, and clinical signals — scored and ranked automatically." },
                { icon: Zap,      color: "#2563EB", title: "Automation-First Workflows",  desc: "Every patient pipeline step runs continuously without manual intervention." },
                { icon: Phone,    color: "#0284C7", title: "HIPAA-Compliant CTI Calling", desc: "Click-to-dial outreach with PHI protection, call logging, and audit trails." },
                { icon: Users,    color: "#0A0E1A", title: "Clinician Engagement",        desc: "Structured physician referral workflows with attribution tracking built in." },
                { icon: BarChart3,color: "#06B6D4", title: "Real-Time Dashboards",        desc: "360° live views of journeys, activity, and program performance for all stakeholders." },
              ].map((cap, i) => (
                <div key={i} className="bg-white hover:bg-[#F7F8FC] transition-colors p-6 group relative">
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${cap.color}, transparent)` }}
                  />
                  <div className="w-8 h-8 flex items-center justify-center mb-5" style={{ border: `1px solid ${cap.color}30` }}>
                    <cap.icon className="w-3.5 h-3.5" style={{ color: cap.color }} />
                  </div>
                  <h4 className="text-xs font-bold text-[#0A0E1A] uppercase tracking-tight mb-2 leading-snug">{cap.title}</h4>
                  <p className="text-[11px] text-[#6B7A90] font-light leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Stats row */}
          <div className="grid md:grid-cols-3 gap-0 border-t border-[#E8ECF2] mt-16 pt-16">
            {[
              { val: "200–400%", label: "Patient qualification rate increase", sub: "vs. manual screening baseline" },
              { val: "90%", label: "Reduction in gift officer onboarding time", sub: "Platform-driven activation" },
              { val: "70K+", label: "Physician panels analyzed", sub: "Continuously, across all deployments" },
            ].map((s, i) => (
              <div key={i} className="pr-10 border-r border-[#E8ECF2] last:border-0 lg:pl-10 first:pl-0 pb-10 lg:pb-0">
                <div className="text-5xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] mb-3 leading-none">{s.val}</div>
                <div className="text-sm font-bold text-[#0A0E1A] uppercase tracking-tight mb-1">{s.label}</div>
                <div className="text-xs text-[#9AA3B2] uppercase tracking-wider">{s.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Providence Case Study ── */}
      <section className="py-24 lg:py-32 bg-white border-t border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="mb-16 max-w-3xl">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-6 uppercase">
              Case Study — Providence Health &amp; Services, South Division
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] tracking-tighter mb-6">
              3,098 PATIENTS SCREENED. 461 QUALIFIED PROSPECTS. $4.32M RAISED IN YEAR ONE.
            </h2>
            <p className="text-xl text-[#6B7A90] font-light leading-relaxed mb-4">
              Providence Health &amp; Services is one of the largest non-profit Catholic health systems in the United States, serving communities across the Pacific Northwest and beyond. Their South Division philanthropy team had a mature grateful patient program — but like most health systems, they were constrained by manual processes, siloed data, and an inability to systematically identify and engage qualified patients at scale.
            </p>
            <p className="text-lg text-[#6B7A90] font-light leading-relaxed">
              They deployed Prysm to replace manual research and ad hoc referral workflows with an automated, data-driven grateful patient intelligence program. The results in Year One exceeded every internal projection.
            </p>
          </AnimatedSection>

          {/* 3-step pipeline */}
          <AnimatedSection className="mb-12">
            <div className="grid md:grid-cols-3 gap-px bg-[#E8ECF2]">
              <div className="bg-[#F7F8FC] p-10">
                <div className="text-[10px] tracking-[0.2em] font-bold text-[#6B7A90] uppercase mb-6">Step 1 — Input</div>
                <div className="text-6xl font-display font-bold text-[#0A0E1A] tracking-tighter mb-3 leading-none">3,098</div>
                <div className="text-base font-semibold text-[#0A0E1A] uppercase tracking-tight mb-4">Clinical encounters screened</div>
                <p className="text-sm text-[#6B7A90] font-light leading-relaxed">
                  Prysm ingested Epic encounter data across Providence South Division's hospitals and clinics. Every patient encounter — regardless of service line or department — was automatically passed through Prysm's AI scoring engine, layering clinical signals with Windfall wealth data and DonorSearch philanthropic history. No manual research required.
                </p>
              </div>

              <div className="bg-white p-10 border-l-4 border-[#7C3AED]">
                <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] uppercase mb-6">Step 2 — Qualified</div>
                <div className="text-6xl font-display font-bold tracking-tighter mb-3 leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] to-[#2563EB]">461</div>
                <div className="text-base font-semibold text-[#0A0E1A] uppercase tracking-tight mb-4">Major gift prospects identified</div>
                <p className="text-sm text-[#6B7A90] font-light leading-relaxed">
                  Of 3,098 patients screened, 461 met the threshold for major gift qualification — a 14.9% qualification rate. Those 461 patients had a combined identifiable net worth of $6.6 billion. Before Prysm, this level of prospect identification would have required months of full-time research staff time — and most of these patients would never have been identified at all.
                </p>
              </div>

              <div className="bg-[#0A0E1A] p-10">
                <div className="text-[10px] tracking-[0.2em] font-bold text-[#06B6D4] uppercase mb-6">Step 3 — Revenue</div>
                <div className="text-6xl font-display font-bold tracking-tighter mb-3 leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#2563EB] to-[#06B6D4]">$4.32M</div>
                <div className="text-base font-semibold text-white uppercase tracking-tight mb-4">Realized in Year One</div>
                <p className="text-sm text-white/55 font-light leading-relaxed">
                  Gift officers engaged the 461 qualified prospects through Prysm's automated outreach workflows and CTI-integrated calling. First-year realized revenue of $4.32M delivered a return on investment exceeding 20× the total cost of the Prysm platform — with portfolio growth continuing into Year Two as the pipeline compounds.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Outcome stats */}
          <AnimatedSection className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 border border-[#E8ECF2] divide-x divide-y md:divide-y-0 divide-[#E8ECF2]">
              {[
                { num: "305%", label: "Increase in first-time major gifts", context: "Compared to pre-Prysm baseline" },
                { num: "448%", label: "Increase in overall donor engagement", context: "Across all qualified prospects" },
                { num: "$6.6B", label: "Combined net worth of qualified patients", context: "461 prospects identified" },
                { num: "20×+", label: "Return on Prysm platform investment", context: "Year One, South Division" },
              ].map((stat, i) => (
                <div key={i} className="p-8 lg:p-10">
                  <div className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] mb-2 leading-none">
                    {stat.num}
                  </div>
                  <div className="text-sm font-bold text-[#0A0E1A] uppercase tracking-tight mb-1">{stat.label}</div>
                  <div className="text-[11px] text-[#9AA3B2] uppercase tracking-wider">{stat.context}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <Button size="lg" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0">
                Request the full case study <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <p className="text-sm text-[#9AA3B2] font-light max-w-md">
                The full Providence South Division report includes detailed methodology, data inputs, gift officer activity metrics, and a complete breakdown of revenue by prospect tier and service line.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 lg:py-32 bg-[#F7F8FC] border-t border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#6B7A90] mb-6 uppercase">
              In Their Own Words
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] tracking-tighter">
              WHAT HEALTH SYSTEM PHILANTHROPY LEADERS SAY.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-px bg-[#E8ECF2]">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={0.1 * i} className="bg-white p-10 flex flex-col">
                <Quote className="w-8 h-8 text-[#7C3AED]/30 mb-6" />
                <p className="text-[#0A0E1A] font-light text-base leading-relaxed flex-1 mb-8">
                  "{t.quote}"
                </p>
                <div className="border-t border-[#E8ECF2] pt-6">
                  <div className="text-sm font-bold text-[#0A0E1A] uppercase tracking-tight">{t.name}</div>
                  <div className="text-xs text-[#6B7A90] uppercase tracking-wider mt-1">{t.title}</div>
                  <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest mt-1">{t.org}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-[#0A0E1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#06B6D4]/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-6 uppercase">
                Get Started with Prysm
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white tracking-tighter mb-6">
                READY TO SEE PRYSM IN ACTION?
              </h2>
              <p className="text-xl text-white/50 font-light mb-12 leading-relaxed">
                Schedule a live platform walkthrough with our team. We'll walk through exactly how Prysm connects to your Epic environment, what the first 90 days of deployment looks like, and what outcomes health systems at your scale have achieved.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0">
                  Request a demo <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 border-white/20 text-white/60 hover:text-white hover:border-white/40 bg-transparent">
                  Download capabilities overview
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="space-y-0 border border-white/[0.08]">
              {[
                { label: "Implementation timeline", value: "90-day deployment to first patient lists" },
                { label: "Integration support", value: "Native Epic FHIR, Blackbaud, and Salesforce NPSP" },
                { label: "Onboarding", value: "90% reduction in gift officer ramp time" },
                { label: "ROI", value: "20× return on investment by Year One (Providence)" },
                { label: "Portfolio growth", value: "10% annual growth in qualified prospect pool" },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-8 p-6 border-b border-white/[0.06] last:border-0">
                  <div className="text-[11px] font-bold tracking-widest uppercase text-white/30">{item.label}</div>
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
