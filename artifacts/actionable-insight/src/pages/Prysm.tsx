import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Prysm() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#0A0E1A] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#0A0E1A]/90 z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}images/prysm-abstract.png`}
            alt="Prysm Interface Abstract" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
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
              <Button size="lg" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0">
                Request a demo
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 lg:py-32 border-b border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-6 uppercase">
                THE PROBLEM
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] mb-8 tracking-tighter">
                GRATEFUL PATIENTS GO UNNOTICED.
              </h2>
              <p className="text-xl text-[#6B7A90] font-light leading-relaxed">
                Every week, thousands of patients leave your health system with genuine gratitude — and no mechanism exists to connect that gratitude to your philanthropy program. The window closes in days, not months.
              </p>
            </AnimatedSection>

            <div className="space-y-12">
              <AnimatedSection delay={0.1}>
                <div className="text-6xl lg:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#2563EB] to-[#06B6D4] mb-4">
                  305%
                </div>
                <div className="text-sm font-semibold tracking-widest uppercase text-[#0A0E1A] max-w-sm leading-relaxed border-l-2 border-[#7C3AED] pl-6">
                  Increase in first-time major gifts at Providence South Division following Prysm implementation.
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="text-6xl lg:text-8xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#2563EB] to-[#06B6D4] mb-4">
                  $4.3M
                </div>
                <div className="text-sm font-semibold tracking-widest uppercase text-[#0A0E1A] max-w-sm leading-relaxed border-l-2 border-[#7C3AED] pl-6">
                  In realized philanthropic revenue attributed directly to Prysm-identified patient prospects.
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-20">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#6B7A90] mb-6 uppercase">
              HOW PRYSM WORKS
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] mb-8 tracking-tighter">
              CLINICAL DATA. PHILANTHROPIC INTELLIGENCE.
            </h2>
            <p className="text-xl text-[#6B7A90] font-light leading-relaxed">
              Prysm operates at the intersection of Epic and Blackbaud, automating the identification and qualification process that would otherwise require a full-time research staff.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-0 border border-[#E8ECF2] bg-[#E8ECF2]">
            {[
              { step: "01", title: "INGEST CLINICAL DATA", desc: "Prysm connects directly to Epic via FHIR-compliant APIs, ingesting encounter data, discharge records, and clinical interactions in real time — fully HIPAA-compliant." },
              { step: "02", title: "SCORE & QUALIFY", desc: "Each patient interaction is scored against philanthropic capacity indicators, wealth screening data, and engagement signals to surface the highest-probability prospects." },
              { step: "03", title: "DELIVER TO CRM", desc: "Qualified prospects are pushed directly into Blackbaud CRM with complete context — ready for gift officer assignment, outreach scheduling, and cultivation tracking." }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} className="bg-white p-12 border-[0.5px] border-[#E8ECF2] hover:bg-[#F7F8FC] transition-colors relative">
                <div className="text-4xl font-display font-bold text-[#E8ECF2] absolute top-8 right-8">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#0A0E1A] mt-8 mb-6 tracking-tight uppercase">{item.title}</h3>
                <p className="text-[#6B7A90] text-base font-light leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32 bg-[#F7F8FC] border-t border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-16">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#6B7A90] mb-6 uppercase">
              PLATFORM CAPABILITIES
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] mb-8 tracking-tighter">
              EVERYTHING YOUR TEAM NEEDS TO EXECUTE.
            </h2>
            <p className="text-xl text-[#6B7A90] font-light leading-relaxed">
              Prysm delivers end-to-end grateful patient management — from initial identification through gift close — within the systems your team already operates.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { title: "Epic EMR native integration", desc: "FHIR-compliant, real-time data ingestion from all Epic modules" },
              { title: "Blackbaud CRM push", desc: "Automated prospect creation with full clinical and wealth context" },
              { title: "Wealth screening integration", desc: "Iwave, DonorSearch, and WealthEngine API connectivity" },
              { title: "HIPAA-compliant architecture", desc: "Role-based access, PHI isolation, and full audit logging" },
              { title: "Clinician engagement layer", desc: "Structured physician referral workflows with attribution tracking" },
              { title: "Pipeline intelligence dashboard", desc: "Real-time prospect pipeline with gift officer activity tracking" }
            ].map((feature, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#7C3AED] shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-[#0A0E1A] mb-2 uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-[#6B7A90] font-light">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
