import { Link } from "wouter";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Brain, Zap, Phone, Users, BarChart3, Quote, AlertTriangle, Shield } from "lucide-react";

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
  { title: "Siloed systems and manual workflows", desc: "EMRs, spreadsheets, and donor databases that don't talk to each other. Identifying a single grateful patient requires days of manual cross-referencing." },
  { title: "Outdated operating models", desc: "Reactive workflows, paper referral forms, and manual wealth screening cannot support the volume or precision required for major gift success." },
  { title: "Low confidence in data and metrics", desc: "Without a unified system of record, gift officers cannot prioritize outreach, measure program health, or demonstrate ROI to leadership." },
  { title: "Staff burnout and unsustainable inefficiency", desc: "Gift officers spend the majority of their time on administrative work rather than building donor relationships. Onboarding takes months. Attrition is high." },
];

const capabilities = [
  { icon: Brain,     color: "#7C3AED", title: "AI Prospect Scoring",        desc: "Windfall, DonorSearch, Einstein AI, and clinical signals — scored and ranked automatically." },
  { icon: Zap,       color: "#2563EB", title: "Automation-First Workflows", desc: "Every patient pipeline step runs continuously without manual intervention." },
  { icon: Phone,     color: "#0284C7", title: "HIPAA-Compliant CTI Calling",desc: "Click-to-dial outreach with PHI protection, call logging, and full audit trails." },
  { icon: Users,     color: "#0A0E1A", title: "Clinician Engagement",       desc: "Structured physician referral workflows with attribution tracking built in." },
  { icon: BarChart3, color: "#06B6D4", title: "Real-Time Dashboards",       desc: "Live views of patient journeys, activity, and program performance for all stakeholders." },
];

const outcomeStats = [
  { value: "305%",   label: "Increase in first-time major gifts" },
  { value: "$4.32M", label: "Realized revenue, Year One" },
  { value: "14.9%",  label: "System-wide qualification rate" },
  { value: "20×",    label: "ROI on platform investment" },
  { value: "90%",    label: "Reduction in gift officer ramp time" },
  { value: "70K+",   label: "Physician panels analyzed in real time" },
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

      {/* ── Hero ── */}
      <section className="border-b border-gray-100 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-16">

            {/* Left — Text */}
            <div className="flex-1 max-w-[560px]">
              <AnimatedSection>
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-7"
                  style={{ background: "rgba(124,58,237,0.07)", color: "#7C3AED", border: "1px solid rgba(124,58,237,0.18)" }}
                >
                  Platform 01 — Prysm
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <h1
                  className="font-black uppercase leading-[0.92] text-[#0A0E1A] mb-7"
                  style={{ fontSize: "clamp(44px,5.5vw,72px)", letterSpacing: "-0.04em" }}
                >
                  Grateful Patients
                  <br />
                  Become
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Transformational Donors.
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.14}>
                <p className="text-gray-500 text-lg leading-relaxed mb-9">
                  Prysm connects Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically
                  identify, qualify, and engage grateful patients as major gift prospects — before
                  the window of opportunity closes.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.18}>
                <div className="flex flex-wrap gap-3 mb-10">
                  <button
                    className="px-8 py-4 rounded-xl text-white font-bold text-[15px] transition-all hover:scale-105"
                    style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)", boxShadow: "0 8px 24px rgba(124,58,237,0.35)" }}
                  >
                    Request a Demo
                  </button>
                  <Link href="/results">
                    <button className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 font-bold text-[15px] text-[#0A0E1A] hover:bg-gray-50 transition-colors" style={{ borderColor: "#E5E7EB" }}>
                      View Client Results <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-5">
                  {[{ icon: "⚡", label: "Epic Integration" }, { icon: "🔒", label: "HIPAA Compliant" }, { icon: "◎", label: "Real-Time Scoring" }].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5">
                      <span>{item.icon}</span>
                      <span className="text-xs font-semibold text-gray-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Prysm image */}
            <AnimatedSection delay={0.1} className="flex-1 w-full min-w-0">
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-3xl opacity-20"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)", filter: "blur(48px)" }}
                />
                <img
                  src="/images/dash-admin-ui.jpeg"
                  alt="Prysm — grateful patient intelligence dashboard"
                  className="relative w-full object-cover rounded-2xl"
                  style={{
                    height: "460px",
                    objectPosition: "center 30%",
                    boxShadow: "0 32px 80px rgba(10,14,26,0.22)",
                  }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── The Challenge ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-5">The Challenge</p>
              <h2
                className="font-black uppercase text-[#0A0E1A] leading-[0.95] mb-6"
                style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.04em" }}
              >
                The grateful patient opportunity is being lost to operational failure.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                Every week, thousands of patients leave your health system with genuine gratitude and real
                philanthropic capacity. Without a systematic mechanism to connect that gratitude to your
                philanthropy program, the window closes within days — permanently.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                The $48 trillion intergenerational wealth transfer is already underway. Programs that cannot
                operate at speed and scale will miss the largest generational giving opportunity in history.
              </p>
              <div className="p-6 bg-white border border-gray-200 rounded-xl">
                <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-3">Verified outcomes</p>
                <p className="text-[#0A0E1A] font-semibold text-sm leading-snug mb-4">
                  305% increase in first-time major gifts. $4.32M realized in Year One. 461 qualified
                  prospects from 3,098 screened — across nine Providence hospitals.
                </p>
                <Link href="/results" className="inline-flex items-center text-violet-600 text-xs font-bold tracking-widest uppercase hover:opacity-70 transition-opacity gap-1">
                  See full results <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-white flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-violet-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Why Traditional Programs Fail</span>
                </div>
                {sectorChallenges.map((c, i) => (
                  <div key={i} className="px-6 py-5 border-b border-gray-100 last:border-0 bg-white flex items-start gap-4 hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center mt-0.5">
                      <span className="text-[10px] font-bold text-gray-400">0{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0A0E1A] uppercase tracking-tight mb-1.5">{c.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── How Prysm Works ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-5">How Prysm Works</p>
            <h2
              className="font-black uppercase text-[#0A0E1A] leading-[0.95] mb-5"
              style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.04em" }}
            >
              From clinical encounter to major gift — automated.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Prysm sits at the center of your philanthropy stack — connecting clinical data on the left
              to CRM systems and gift officer workflows on the right.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="h-px w-5 bg-violet-500" />
                <span className="text-xs font-bold text-violet-500 uppercase tracking-widest">Data Inputs</span>
              </div>
              <span className="text-xs font-bold text-gray-200 uppercase tracking-widest hidden lg:block">Prysm Platform Architecture</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Outputs</span>
                <div className="h-px w-5 bg-cyan-500" />
              </div>
            </div>

            <div className="grid lg:grid-cols-[220px_1fr_200px] gap-6 lg:gap-8 items-center">
              <div className="space-y-2">
                {PRYSM_INPUTS.map((inp, i) => (
                  <div key={i} className="bg-white border border-gray-200 border-l-2 border-l-violet-500 px-4 py-3.5 rounded-lg flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#0A0E1A] text-xs uppercase tracking-wide mb-0.5">{inp.name}</div>
                      <div className="text-xs text-gray-400">{inp.sub}</div>
                    </div>
                    <span className="text-gray-300 text-sm">→</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <svg viewBox="0 0 560 520" className="w-full max-w-[440px] h-auto" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="pOG2" cx="38%" cy="33%" r="68%">
                      <stop offset="0%"   stopColor="#FFFFFF" />
                      <stop offset="55%"  stopColor="#F8F9FF" />
                      <stop offset="100%" stopColor="#EEF0FF" />
                    </radialGradient>
                    <linearGradient id="pRG2" x1="0" y1="0" x2="560" y2="520" gradientUnits="userSpaceOnUse">
                      <stop offset="0%"   stopColor="#7C3AED" />
                      <stop offset="50%"  stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <filter id="pDS2" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="#7C3AED" floodOpacity="0.08" />
                    </filter>
                  </defs>
                  <circle cx="280" cy="260" r="195" fill="url(#pOG2)" filter="url(#pDS2)" />
                  <circle cx="280" cy="260" r="195" fill="none" stroke="url(#pRG2)" strokeWidth="1.5" opacity="0.5" />
                  <circle cx="280" cy="260" r="158" fill="none" stroke="rgba(124,58,237,0.12)" strokeWidth="1" strokeDasharray="6 5" />
                  <circle cx="280" cy="260" r="112" fill="none" stroke="url(#pRG2)" strokeWidth="1.5" opacity="0.4" />
                  <line x1="280" y1="148" x2="280" y2="69"   stroke="rgba(124,58,237,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="347" y1="175" x2="404" y2="120"  stroke="rgba(124,58,237,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="397" y1="260" x2="469" y2="260"  stroke="rgba(6,182,212,0.18)"  strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="347" y1="345" x2="404" y2="400"  stroke="rgba(6,182,212,0.18)"  strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="280" y1="371" x2="280" y2="449"  stroke="rgba(6,182,212,0.18)"  strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="213" y1="345" x2="156" y2="400"  stroke="rgba(6,182,212,0.18)"  strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="163" y1="260" x2="91"  y2="260"  stroke="rgba(124,58,237,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="213" y1="175" x2="156" y2="120"  stroke="rgba(124,58,237,0.18)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="280" cy="148" r="3.5" fill="#7C3AED" /><circle cx="347" cy="175" r="3.5" fill="#7C3AED" />
                  <circle cx="397" cy="260" r="3.5" fill="#06B6D4" /><circle cx="347" cy="345" r="3.5" fill="#06B6D4" />
                  <circle cx="280" cy="371" r="3.5" fill="#06B6D4" /><circle cx="213" cy="345" r="3.5" fill="#06B6D4" />
                  <circle cx="163" cy="260" r="3.5" fill="#7C3AED" /><circle cx="213" cy="175" r="3.5" fill="#7C3AED" />
                  {[
                    [190,53,180,21,"AI PROSPECT SCORING","#7C3AED"],[351,104,162,21,"WEALTH INTELLIGENCE","#7C3AED"],
                    [411,249,140,21,"REAL-TIME ANALYTICS","#2563EB"],[351,389,150,21,"HIPAA COMPLIANCE","#2563EB"],
                    [208,438,144,21,"CTI OUTREACH","#06B6D4"],[47,389,162,21,"DAILY PATIENT LISTS","#06B6D4"],
                    [25,249,118,21,"GEOLOCATION","#7C3AED"],[47,104,162,21,"CLINICIAN REFERRALS","#7C3AED"],
                  ].map(([x,y,w,h,label,color],i)=>(
                    <g key={i}>
                      <rect x={x} y={y} width={w} height={h} rx="4" fill={color as string} />
                      <text x={(x as number)+(w as number)/2} y={(y as number)+(h as number)-5} textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.12em" fill="#FFFFFF">{label as string}</text>
                    </g>
                  ))}
                  <text x="280" y="254" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="34" fontWeight="900" letterSpacing="0.08em" fill="#0A0E1A">PRYSM</text>
                  <text x="280" y="273" textAnchor="middle" fontFamily="Urbanist,sans-serif" fontSize="9" fontWeight="600" letterSpacing="0.28em" fill="rgba(10,14,26,0.3)">PURPOSE BUILT</text>
                </svg>
              </div>

              <div className="space-y-2">
                {PRYSM_OUTPUTS.map((out, i) => (
                  <div key={i} className="bg-white border border-gray-200 border-l-2 border-l-cyan-500 px-4 py-3.5 rounded-lg flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#0A0E1A] text-xs uppercase tracking-wide mb-0.5">{out.name}</div>
                      <div className="text-xs text-gray-400">{out.sub}</div>
                    </div>
                    <span className="text-gray-300 text-sm">→</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Capabilities grid */}
          <AnimatedSection className="mt-14">
            <p className="text-xs font-bold text-gray-300 uppercase tracking-widest text-center mb-5">Platform Capabilities</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {capabilities.map((cap, i) => (
                <div key={i} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${cap.color}12` }}
                  >
                    <cap.icon className="w-4 h-4" style={{ color: cap.color }} />
                  </div>
                  <h4 className="text-xs font-bold text-[#0A0E1A] uppercase tracking-tight mb-2">{cap.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="py-16 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {outcomeStats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.07} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                <div
                  className="font-black text-2xl leading-none mb-2"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.03em" }}
                >
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider leading-snug">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform in Action ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-5">Platform in Action</p>
              <h2
                className="font-black uppercase text-[#0A0E1A] leading-[0.95] mb-6"
                style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.04em" }}
              >
                What your gift officers see every morning.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Prysm delivers a daily prioritized patient list directly into your gift officers'
                workflow — complete with clinical context, wealth signals, and recommended next actions.
                No manual research. No spreadsheets.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Each record shows encounter history, AI prospect score, capacity estimate, physician
                referral status, and outreach history — everything needed to make a confident first call.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#7C3AED" }} />
                  <span className="text-xs font-semibold text-gray-400">Real-time patient scoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#2563EB" }} />
                  <span className="text-xs font-semibold text-gray-400">Epic-native data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#06B6D4" }} />
                  <span className="text-xs font-semibold text-gray-400">CRM push-ready</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl opacity-15"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)", filter: "blur(40px)" }}
                />
                <img
                  src="/images/prysm-analytics.png"
                  alt="Prysm analytics dashboard showing prospect scoring and pipeline"
                  className="relative w-full object-cover rounded-2xl"
                  style={{
                    height: "420px",
                    objectPosition: "center 30%",
                    boxShadow: "0 24px 64px rgba(10,14,26,0.18), 0 4px 12px rgba(10,14,26,0.08)",
                  }}
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Second screenshot — full width treatment */}
          <AnimatedSection className="mt-14">
            <div className="relative overflow-hidden rounded-2xl" style={{ boxShadow: "0 32px 80px rgba(10,14,26,0.16)" }}>
              <img
                src="/images/prysm-dashboard-dark.png"
                alt="Prysm dark analytics dashboard with revenue metrics"
                className="w-full object-cover"
                style={{
                  height: "380px",
                  objectPosition: "center 31%",
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "linear-gradient(to right, rgba(10,14,26,0.7) 0%, rgba(10,14,26,0.1) 50%, rgba(10,14,26,0) 100%)" }}
              />
              <div className="absolute inset-0 flex items-center px-10 lg:px-14">
                <div className="max-w-sm">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Revenue Intelligence</p>
                  <p
                    className="font-black uppercase text-white leading-[0.95] mb-4"
                    style={{ fontSize: "clamp(20px,2.5vw,32px)", letterSpacing: "-0.04em" }}
                  >
                    $4.32M realized in Year One at Providence.
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed">
                    461 qualified prospects identified from 3,098 patients screened — across nine hospitals, fully automated.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-xl mb-12">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">In Their Own Words</p>
            <h2
              className="font-black uppercase text-[#0A0E1A] leading-[0.95]"
              style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.04em" }}
            >
              What philanthropy leaders say.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={0.08 * i} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col">
                <Quote className="w-6 h-6 text-violet-200 mb-5" />
                <p className="text-[#0A0E1A] text-sm leading-relaxed flex-1 mb-7">"{t.quote}"</p>
                <div className="border-t border-gray-200 pt-5">
                  <div className="text-sm font-bold text-[#0A0E1A] uppercase tracking-tight">{t.name}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{t.title}</div>
                  <div className="text-xs font-bold text-violet-500 uppercase tracking-widest mt-1">{t.org}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-[#0A0E1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 65%)" }} />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-6">Ready to get started?</p>
            <h2
              className="font-black uppercase text-white leading-[0.92] mb-7"
              style={{ fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.04em" }}
            >
              See Prysm in your
              <br />
              <span style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                environment.
              </span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10">
              Schedule a live walkthrough and we'll show you exactly how Prysm connects to Epic,
              what the first 90 days look like, and outcomes at your scale.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="px-10 py-4 rounded-xl text-white font-bold text-base transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)", boxShadow: "0 8px 28px rgba(124,58,237,0.4)" }}
              >
                Request a Demo
              </button>
              <Link href="/results">
                <button className="px-10 py-4 rounded-xl border border-white/15 text-white/60 font-bold text-base hover:text-white hover:border-white/30 transition-all">
                  View Client Results
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
