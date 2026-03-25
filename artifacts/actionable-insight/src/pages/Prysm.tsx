import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, CheckCircle2, Quote, AlertTriangle, Database, Zap, Users, MapPin, BarChart3, Phone, Brain, Shield, Building2, FileSearch, TrendingUp } from "lucide-react";

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

const capabilities = [
  {
    title: "Unified CRM Ecosystem",
    desc: "Prysm integrates Epic EMR, Blackbaud CRM, and Salesforce NPSP into a single system of record — giving fundraisers, clinicians, and leadership a unified view of every patient, prospect, and gift relationship.",
  },
  {
    title: "Automation-First Architecture",
    desc: "Engagement workflows are automated end-to-end: patient identification, prospect assignment, outreach scheduling, follow-up tracking, and reporting — all running continuously without manual intervention.",
  },
  {
    title: "Real-Time Dashboards and Analytics",
    desc: "360° views of patient journeys, outreach progress, gift officer activity, and program performance — updated in real time, visible to every stakeholder from frontline fundraisers to the chief philanthropy officer.",
  },
  {
    title: "HIPAA-Compliant CTI Calling",
    desc: "Click-to-dial phone outreach directly from the platform, with full PHI protection, call logging, outcome capture, and compliance audit trails. Gift officers call from anywhere with all patient context on screen.",
  },
  {
    title: "AI-Driven Prospect Scoring",
    desc: "Machine learning models — drawing on Windfall, DonorSearch, Einstein AI, and clinical encounter signals — score and rank every patient by philanthropic capacity and engagement likelihood, surfacing the highest-priority prospects first.",
  },
  {
    title: "Clinician Engagement Workflows",
    desc: "Structured physician referral workflows that make it easy for clinicians to identify and refer grateful patients — with attribution tracking, recognition reporting, and outcome visibility built in.",
  },
  {
    title: "Geolocation Mapping and Segmentation",
    desc: "Smart geographic segmentation for targeted outreach planning, event invitations, and regional capacity analysis — enabling gift officers to prioritize their time by location and prospect concentration.",
  },
  {
    title: "Integrated Reporting and Daily Patient Lists",
    desc: "Automated daily patient lists sync directly from Epic, filtered by encounter type, clinical context, and wealth scoring — so gift officers start every morning with a prioritized, actionable outreach queue.",
  },
  {
    title: "Multi-Hospital and Division Support",
    desc: "A single Prysm deployment manages grateful patient programs across all divisions, hospitals, and service lines of a health system — with division-level reporting and centralized governance.",
  },
  {
    title: "Playbook-Driven Program Operations",
    desc: "The built-in Prysm Clinician and Patient Engagement Playbook codifies best practices into the platform itself — ensuring every gift officer follows a consistent, proven process regardless of tenure or experience.",
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
        <section className="py-24 lg:py-32 bg-[#0A0E1A] text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/[0.07] blur-[130px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-6 uppercase">
                How Prysm Works
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white tracking-tighter mb-6">
                FROM CLINICAL ENCOUNTER TO MAJOR GIFT — AUTOMATED.
              </h2>
              <p className="text-xl text-white/45 font-light leading-relaxed">
                Prysm sits at the center of your philanthropy stack — connecting clinical data on the left to CRM systems and gift officer workflows on the right, automatically.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <svg viewBox="0 0 1000 520" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradLeft" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.55" />
                  </linearGradient>
                  <linearGradient id="gradRight" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="50%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                  <radialGradient id="coreFill" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0A0E1A" stopOpacity="0.1" />
                  </radialGradient>
                </defs>

                {/* Section labels */}
                <text x="115" y="28" textAnchor="middle" fill="rgba(167,139,250,0.45)" fontSize="8.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="2.5">DATA INPUTS</text>
                <text x="885" y="28" textAnchor="middle" fill="rgba(103,232,249,0.45)" fontSize="8.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="2.5">OUTPUTS</text>
                <text x="500" y="16" textAnchor="middle" fill="rgba(167,139,250,0.25)" fontSize="7" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="3.5">INTELLIGENTLY ORCHESTRATED HEALTHCARE PHILANTHROPY</text>

                {/* LEFT INPUT CARDS */}
                <rect x="10" y="72"  width="210" height="58" rx="0" fill="rgba(124,58,237,0.07)" stroke="rgba(124,58,237,0.28)" strokeWidth="1" />
                <text x="115" y="97"  textAnchor="middle" fill="rgba(196,181,253,1)"   fontSize="10.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.5">EPIC EMR</text>
                <text x="115" y="116" textAnchor="middle" fill="rgba(255,255,255,0.32)" fontSize="8.5"  fontFamily="Urbanist, system-ui, sans-serif">FHIR encounter ingestion</text>

                <rect x="10" y="174" width="210" height="58" rx="0" fill="rgba(124,58,237,0.07)" stroke="rgba(124,58,237,0.28)" strokeWidth="1" />
                <text x="115" y="199" textAnchor="middle" fill="rgba(196,181,253,1)"   fontSize="10.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.5">WINDFALL WEALTH</text>
                <text x="115" y="218" textAnchor="middle" fill="rgba(255,255,255,0.32)" fontSize="8.5"  fontFamily="Urbanist, system-ui, sans-serif">Net worth &amp; capacity data</text>

                <rect x="10" y="276" width="210" height="58" rx="0" fill="rgba(124,58,237,0.07)" stroke="rgba(124,58,237,0.28)" strokeWidth="1" />
                <text x="115" y="301" textAnchor="middle" fill="rgba(196,181,253,1)"   fontSize="10.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.5">DONORSEARCH</text>
                <text x="115" y="320" textAnchor="middle" fill="rgba(255,255,255,0.32)" fontSize="8.5"  fontFamily="Urbanist, system-ui, sans-serif">Philanthropic history &amp; giving</text>

                <rect x="10" y="378" width="210" height="58" rx="0" fill="rgba(124,58,237,0.07)" stroke="rgba(124,58,237,0.28)" strokeWidth="1" />
                <text x="115" y="403" textAnchor="middle" fill="rgba(196,181,253,1)"   fontSize="10.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.5">CLINICAL ENCOUNTERS</text>
                <text x="115" y="422" textAnchor="middle" fill="rgba(255,255,255,0.32)" fontSize="8.5"  fontFamily="Urbanist, system-ui, sans-serif">70K+ physician panels</text>

                {/* LEFT DASHED LINES */}
                <line x1="220" y1="101" x2="360" y2="202" stroke="url(#gradLeft)" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="220" y1="203" x2="354" y2="237" stroke="url(#gradLeft)" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="220" y1="305" x2="354" y2="283" stroke="url(#gradLeft)" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="220" y1="407" x2="360" y2="318" stroke="url(#gradLeft)" strokeWidth="1" strokeDasharray="5 5" />

                {/* CENTER CIRCLE */}
                <circle cx="500" cy="260" r="178" fill="none" stroke="rgba(124,58,237,0.09)" strokeWidth="1" strokeDasharray="2 14" />
                <circle cx="500" cy="260" r="150" fill="rgba(10,14,26,0.97)" stroke="url(#ringGrad)" strokeWidth="1.5" />
                <circle cx="500" cy="260" r="105" fill="rgba(124,58,237,0.04)" stroke="rgba(124,58,237,0.35)" strokeWidth="1" />
                <circle cx="500" cy="260" r="62"  fill="url(#coreFill)" stroke="rgba(124,58,237,0.75)" strokeWidth="2" />

                {/* 8 dots on inner ring r=105 */}
                <circle cx="500" cy="155" r="4" fill="#7C3AED" />
                <circle cx="574" cy="186" r="4" fill="#5B21B6" />
                <circle cx="605" cy="260" r="4" fill="#2563EB" />
                <circle cx="574" cy="334" r="4" fill="#0284C7" />
                <circle cx="500" cy="365" r="4" fill="#06B6D4" />
                <circle cx="426" cy="334" r="4" fill="#0284C7" />
                <circle cx="395" cy="260" r="4" fill="#2563EB" />
                <circle cx="426" cy="186" r="4" fill="#5B21B6" />

                {/* Capability labels between rings */}
                <text x="500" y="128" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="7.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.8">AI PROSPECT SCORING</text>
                <text x="585" y="169" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="7.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.8">WEALTH INTELLIGENCE</text>
                <text x="628" y="264" textAnchor="start"  fill="rgba(255,255,255,0.65)" fontSize="7.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.8">REAL-TIME ANALYTICS</text>
                <text x="585" y="355" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="7.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.8">HIPAA COMPLIANCE</text>
                <text x="500" y="393" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="7.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.8">CTI OUTREACH</text>
                <text x="415" y="355" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="7.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.8">DAILY PATIENT LISTS</text>
                <text x="372" y="264" textAnchor="end"    fill="rgba(255,255,255,0.65)" fontSize="7.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.8">GEOLOCATION</text>
                <text x="415" y="169" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="7.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.8">CLINICIAN REFERRALS</text>

                {/* Center text */}
                <text x="500" y="254" textAnchor="middle" fill="white"              fontSize="21" fontWeight="800" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="-0.8">PRYSM</text>
                <text x="500" y="272" textAnchor="middle" fill="rgba(167,139,250,0.8)" fontSize="7"  fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="3.5">PURPOSE BUILT</text>

                {/* RIGHT DASHED LINES */}
                <line x1="640" y1="202" x2="780" y2="101" stroke="url(#gradRight)" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="646" y1="237" x2="780" y2="203" stroke="url(#gradRight)" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="646" y1="283" x2="780" y2="305" stroke="url(#gradRight)" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="640" y1="318" x2="780" y2="407" stroke="url(#gradRight)" strokeWidth="1" strokeDasharray="5 5" />

                {/* RIGHT OUTPUT CARDS */}
                <rect x="780" y="72"  width="210" height="58" rx="0" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.28)" strokeWidth="1" />
                <text x="885" y="97"  textAnchor="middle" fill="rgba(103,232,249,1)"   fontSize="10.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.5">BLACKBAUD CRM</text>
                <text x="885" y="116" textAnchor="middle" fill="rgba(255,255,255,0.32)" fontSize="8.5"  fontFamily="Urbanist, system-ui, sans-serif">Qualified prospect push</text>

                <rect x="780" y="174" width="210" height="58" rx="0" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.28)" strokeWidth="1" />
                <text x="885" y="199" textAnchor="middle" fill="rgba(103,232,249,1)"   fontSize="10.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.5">SALESFORCE NPSP</text>
                <text x="885" y="218" textAnchor="middle" fill="rgba(255,255,255,0.32)" fontSize="8.5"  fontFamily="Urbanist, system-ui, sans-serif">Native SF integration</text>

                <rect x="780" y="276" width="210" height="58" rx="0" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.28)" strokeWidth="1" />
                <text x="885" y="301" textAnchor="middle" fill="rgba(103,232,249,1)"   fontSize="10.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.5">GIFT OFFICER QUEUE</text>
                <text x="885" y="320" textAnchor="middle" fill="rgba(255,255,255,0.32)" fontSize="8.5"  fontFamily="Urbanist, system-ui, sans-serif">Daily prioritized lists</text>

                <rect x="780" y="378" width="210" height="58" rx="0" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.28)" strokeWidth="1" />
                <text x="885" y="403" textAnchor="middle" fill="rgba(103,232,249,1)"   fontSize="10.5" fontWeight="700" fontFamily="Urbanist, system-ui, sans-serif" letterSpacing="0.5">ROI &amp; ANALYTICS</text>
                <text x="885" y="422" textAnchor="middle" fill="rgba(255,255,255,0.32)" fontSize="8.5"  fontFamily="Urbanist, system-ui, sans-serif">Pipeline &amp; gift reporting</text>

              </svg>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-0 border-t border-white/[0.06] mt-16 pt-16">
              {[
                { val: "200–400%", label: "Patient qualification rate increase", sub: "vs. manual screening baseline" },
                { val: "90%", label: "Reduction in gift officer onboarding time", sub: "Platform-driven activation" },
                { val: "70K+", label: "Physician panels analyzed", sub: "Continuously, across all deployments" },
              ].map((s, i) => (
                <div key={i} className="pr-10 border-r border-white/[0.06] last:border-0 lg:pl-10 first:pl-0 pb-10 lg:pb-0">
                  <div className="text-5xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] mb-3 leading-none">{s.val}</div>
                  <div className="text-sm font-bold text-white uppercase tracking-tight mb-1">{s.label}</div>
                  <div className="text-xs text-white/30 uppercase tracking-wider">{s.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </section>
      {/* ── Capabilities ── */}
      <section className="py-24 lg:py-32 bg-[#F7F8FC] border-t border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-16">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#6B7A90] mb-6 uppercase">
              Platform Capabilities
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] mb-8 tracking-tighter">
              A COMPLETE OPERATING SYSTEM FOR HEALTH SYSTEM PHILANTHROPY.
            </h2>
            <p className="text-xl text-[#6B7A90] font-light leading-relaxed">
              Prysm delivers a unified, intelligent ecosystem that enables every stakeholder — from individual gift officers to executive leadership — to operate from a single source of truth. No rip-and-replace. No parallel infrastructure. Prysm connects natively to the systems your team already uses and makes them dramatically more effective.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 border border-[#E8ECF2] bg-[#E8ECF2]">
            {capabilities.map((feature, idx) => (
              <AnimatedSection key={idx} delay={0.05 * idx} className="bg-white flex items-start gap-5 p-8 border-[0.5px] border-[#E8ECF2]">
                <CheckCircle2 className="w-5 h-5 text-[#7C3AED] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#0A0E1A] mb-2 uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-[#6B7A90] font-light text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
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
