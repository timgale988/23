import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";


const outcomeStats = [
  { value: "305%", label: "Increase in first-time major gifts", sub: "Providence South Division" },
  { value: "$4.3M", label: "Realized philanthropic revenue", sub: "First year, Providence" },
  { value: "1,233%", label: "Increase in donations from referred patients", sub: "Clinician referral channel" },
  { value: "200–400%", label: "Patient qualification rate increase", sub: "Across all deployments" },
  { value: "90%", label: "Reduction in onboarding time", sub: "Gift officer activation" },
  { value: "70K+", label: "Physician panels analyzed", sub: "Across health system networks" },
];

const capabilities = [
  { title: "Epic EMR native integration", desc: "FHIR-compliant, real-time data ingestion from all Epic modules — encounters, discharges, referrals" },
  { title: "Blackbaud CRM push", desc: "Automated prospect creation with full clinical context, wealth data, and engagement signals" },
  { title: "Salesforce NPSP support", desc: "Native integration with Salesforce NPSP for health systems already running SF-based philanthropy" },
  { title: "AI & wealth screening", desc: "Windfall, DonorSearch, and Einstein AI scoring — layered for maximum qualification precision" },
  { title: "CTI phone integration", desc: "Computer Telephony Integration for one-click outreach with call logging and outcome capture" },
  { title: "Clinician engagement layer", desc: "Structured physician referral workflows with attribution, recognition, and tracking" },
  { title: "Pipeline intelligence dashboard", desc: "Real-time gift pipeline analytics by department, physician, gift officer, and timeframe" },
  { title: "Multi-hospital support", desc: "Single platform managing grateful patient programs across all divisions of a health system" },
  { title: "HIPAA-compliant architecture", desc: "Role-based access, PHI isolation, de-identification protocols, and full audit logging" },
  { title: "Playbook-driven operations", desc: "Built-in Prysm Clinician & Patient Engagement Playbook — consistent execution at scale" },
];



const testimonials = [
  {
    quote: "Prysm has completely transformed how we identify and engage grateful patients. We're reaching donors we never would have found through traditional research — and we're reaching them at exactly the right moment.",
    name: "Greg Gissendanner",
    title: "Chief Philanthropy Officer",
    org: "Providence South Division",
  },
  {
    quote: "The physician referral component alone has changed our program. Our gift officers are having more meaningful conversations because they come in with clinical context — they know why the patient is grateful.",
    name: "Matt Valenzuela",
    title: "Director of Grateful Patient Programs",
    org: "Providence South Division",
  },
  {
    quote: "What used to take our research team weeks now happens automatically. Prysm surfaces the right patient at the right time with everything we need to make the ask — and the results show it.",
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
              <p className="text-xl sm:text-2xl text-white/60 mb-12 leading-relaxed max-w-3xl font-light">
                Prysm is a grateful patient intelligence platform that connects Epic EMR with Blackbaud CRM to automatically identify and prioritize major gift prospects — at the exact moment clinical gratitude is highest.
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-6 uppercase">
                The Problem
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] mb-8 tracking-tighter">
                GRATEFUL PATIENTS GO UNNOTICED.
              </h2>
              <p className="text-xl text-[#6B7A90] font-light leading-relaxed mb-6">
                Every week, thousands of patients leave your health system with genuine gratitude — and no mechanism exists to connect that gratitude to your philanthropy program. The window closes in days, not months.
              </p>
              <p className="text-lg text-[#6B7A90] font-light leading-relaxed">
                The $48 trillion intergenerational wealth transfer is underway. Health system philanthropy programs that cannot systematically identify and engage grateful patients will miss the largest generational giving opportunity in history.
              </p>
            </AnimatedSection>

            <div className="space-y-10">
              <AnimatedSection delay={0.1}>
                <div className="text-7xl lg:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#2563EB] to-[#06B6D4] mb-3 leading-none">
                  305%
                </div>
                <div className="text-sm font-semibold tracking-widest uppercase text-[#0A0E1A] max-w-sm leading-relaxed border-l-2 border-[#7C3AED] pl-6">
                  Increase in first-time major gifts at Providence South Division following Prysm implementation.
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="text-7xl lg:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#2563EB] to-[#06B6D4] mb-3 leading-none">
                  $4.3M
                </div>
                <div className="text-sm font-semibold tracking-widest uppercase text-[#0A0E1A] max-w-sm leading-relaxed border-l-2 border-[#7C3AED] pl-6">
                  In realized philanthropic revenue attributed directly to Prysm-identified patient prospects.
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="text-7xl lg:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#2563EB] to-[#06B6D4] mb-3 leading-none">
                  1,233%
                </div>
                <div className="text-sm font-semibold tracking-widest uppercase text-[#0A0E1A] max-w-sm leading-relaxed border-l-2 border-[#7C3AED] pl-6">
                  Increase in donations from clinician-referred patients when Prysm referral workflows are active.
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── How Prysm Works ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-20">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#6B7A90] mb-6 uppercase">
              How Prysm Works
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] mb-8 tracking-tighter">
              CLINICAL DATA. PHILANTHROPIC INTELLIGENCE.
            </h2>
            <p className="text-xl text-[#6B7A90] font-light leading-relaxed">
              Prysm operates at the intersection of Epic and Blackbaud, automating the identification and qualification process that would otherwise require a full-time research staff.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-0 border border-[#E8ECF2] bg-[#E8ECF2] mb-20">
            {[
              {
                step: "01",
                title: "INGEST CLINICAL DATA",
                desc: "Prysm connects directly to Epic via FHIR-compliant APIs, ingesting encounter data, discharge records, and clinical interactions in real time — fully HIPAA-compliant.",
                detail: "Covers 70,000+ physician panels across health system networks.",
              },
              {
                step: "02",
                title: "SCORE & QUALIFY",
                desc: "Each patient interaction is scored against philanthropic capacity indicators, Windfall/DonorSearch wealth data, and engagement signals to surface the highest-probability prospects.",
                detail: "200–400% increase in patient qualification rates versus manual screening.",
              },
              {
                step: "03",
                title: "DELIVER TO CRM",
                desc: "Qualified prospects are pushed directly into Blackbaud CRM with complete context — ready for gift officer assignment, outreach scheduling, and cultivation tracking.",
                detail: "90% reduction in onboarding time per gift officer after deployment.",
              },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} className="bg-white p-12 border-[0.5px] border-[#E8ECF2] hover:bg-[#F7F8FC] transition-colors relative">
                <div className="text-5xl font-display font-bold text-[#E8ECF2] absolute top-8 right-8 select-none">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#0A0E1A] mt-8 mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-[#6B7A90] text-base font-light leading-relaxed mb-4">{item.desc}</p>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#7C3AED]">{item.detail}</p>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-24 lg:py-32 bg-white border-t border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-16">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#6B7A90] mb-6 uppercase">
              Platform Capabilities
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] mb-8 tracking-tighter">
              EVERYTHING YOUR TEAM NEEDS TO EXECUTE.
            </h2>
            <p className="text-xl text-[#6B7A90] font-light leading-relaxed">
              Prysm delivers end-to-end grateful patient management — from initial identification through gift close — within the systems your team already operates.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {capabilities.map((feature, idx) => (
              <AnimatedSection key={idx} delay={0.05 * idx} className="flex items-start gap-4 pb-8 border-b border-[#E8ECF2] last:border-0">
                <CheckCircle2 className="w-5 h-5 text-[#7C3AED] shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-bold text-[#0A0E1A] mb-1 uppercase tracking-tight">{feature.title}</h4>
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

          {/* Header */}
          <AnimatedSection className="mb-16 max-w-3xl">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-6 uppercase">
              Case Study — Providence Health &amp; Services, South Division
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] tracking-tighter mb-6">
              3,098 PATIENTS. 461 PROSPECTS. $4.32M RAISED IN YEAR ONE.
            </h2>
            <p className="text-xl text-[#6B7A90] font-light leading-relaxed">
              Providence South Division deployed Prysm across their health system philanthropy program. In the first year, Prysm automatically identified and qualified major gift prospects from clinical encounter data — producing results their team had never achieved through manual research.
            </p>
          </AnimatedSection>

          {/* Story flow — the pipeline */}
          <AnimatedSection className="mb-16">
            <div className="grid md:grid-cols-3 gap-px bg-[#E8ECF2]">

              <div className="bg-[#F7F8FC] p-10">
                <div className="text-[10px] tracking-[0.2em] font-bold text-[#6B7A90] uppercase mb-6">Step 1 — Input</div>
                <div className="text-6xl font-display font-bold text-[#0A0E1A] tracking-tighter mb-3 leading-none">3,098</div>
                <div className="text-base font-semibold text-[#0A0E1A] uppercase tracking-tight mb-3">Clinical encounters screened</div>
                <p className="text-sm text-[#6B7A90] font-light leading-relaxed">
                  Prysm ingested Epic encounter data across Providence's divisions and ran every patient through automated wealth and engagement scoring.
                </p>
              </div>

              <div className="bg-white p-10 border-l-4 border-[#7C3AED]">
                <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] uppercase mb-6">Step 2 — Qualified</div>
                <div className="text-6xl font-display font-bold tracking-tighter mb-3 leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] to-[#2563EB]">461</div>
                <div className="text-base font-semibold text-[#0A0E1A] uppercase tracking-tight mb-3">Major gift prospects identified</div>
                <p className="text-sm text-[#6B7A90] font-light leading-relaxed">
                  Of those 3,098 patients, 461 met the threshold for major gift qualification — a 14.9% rate that would have taken a full-time research team months to achieve manually.
                </p>
              </div>

              <div className="bg-[#0A0E1A] p-10">
                <div className="text-[10px] tracking-[0.2em] font-bold text-[#06B6D4] uppercase mb-6">Step 3 — Revenue</div>
                <div className="text-6xl font-display font-bold tracking-tighter mb-3 leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#2563EB] to-[#06B6D4]">$4.32M</div>
                <div className="text-base font-semibold text-white uppercase tracking-tight mb-3">Realized in Year One</div>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  The 461 qualified prospects had a combined net worth of $6.6 billion. First-year revenue of $4.32M delivered a return exceeding 20× the cost of the Prysm platform.
                </p>
              </div>

            </div>
          </AnimatedSection>

          {/* Outcome stats */}
          <AnimatedSection className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 border border-[#E8ECF2] divide-x divide-y md:divide-y-0 divide-[#E8ECF2]">
              {[
                { num: "305%", label: "Increase in first-time major gifts", context: "vs. pre-Prysm baseline" },
                { num: "448%", label: "Increase in donor engagement rate", context: "across qualified prospects" },
                { num: "$6.6B", label: "Combined prospect net worth", context: "461 qualified patients" },
                { num: "20×+", label: "Return on platform investment", context: "Year One, South Division" },
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

          {/* CTA */}
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <Button size="lg" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0">
                Request the full case study <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <p className="text-sm text-[#9AA3B2] font-light">
                Includes detailed methodology, data inputs, gift officer activity metrics, and a full breakdown of revenue by prospect tier.
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
                <p className="text-[#0A0E1A] font-light text-lg leading-relaxed flex-1 mb-8">
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
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-6 uppercase">
                Get Started
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white tracking-tighter mb-6">
                READY TO SEE PRYSM IN ACTION?
              </h2>
              <p className="text-xl text-white/50 font-light mb-12 leading-relaxed">
                Schedule a live walkthrough of the Prysm platform with a member of our team. We'll show you exactly how Prysm would work within your health system's existing Epic and CRM infrastructure.
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
          </div>
        </div>
      </section>

    </div>
  );
}
