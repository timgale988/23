import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function Aperion() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#141828] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#141828]/90 z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}images/aperion-abstract.png`}
            alt="Aperion Network Abstract" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="inline-block px-4 py-2 bg-[#06B6D4]/20 border border-[#06B6D4]/30 text-[#06B6D4] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                Platform 02 — Aperion
              </div>
              <h1 className="text-5xl lg:text-[5.5rem] font-display font-bold text-white leading-[1.05] tracking-tighter mb-8 uppercase">
                AI-Augmented <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">Fundraising</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/60 mb-12 leading-relaxed max-w-3xl font-light">
                Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence that makes every conversation count.
              </p>
              <Button size="lg" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0">
                Request a demo
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem Callout */}
      <section className="py-24 bg-[#0A0E1A] text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="text-8xl lg:text-[10rem] font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] mb-8 leading-none">
                75%
              </div>
              <div className="text-xl lg:text-2xl font-light text-white/80 max-w-md uppercase tracking-wider">
                Of a gift officer's time is spent on administrative work that Aperion can automate.
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="border-l border-white/20 pl-8 lg:pl-16">
              <blockquote className="text-3xl lg:text-4xl font-display font-bold tracking-tighter text-white mb-8 leading-tight">
                "Every gift officer deserves to spend their time on relationships, not research."
              </blockquote>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                The most impactful conversations happen when fundraisers arrive prepared. Aperion makes preparation automatic.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#6B7A90] mb-6 uppercase">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] mb-8 tracking-tighter">
              FROM RAW DATA TO THE RIGHT CONVERSATION.
            </h2>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative">
            {/* Sources */}
            <AnimatedSection className="w-full lg:w-1/4 space-y-4">
              {["Blackbaud CRM", "Prospect Research", "Wealth Screening", "Gift History"].map((source, idx) => (
                <div key={idx} className="bg-[#F7F8FC] border border-[#E8ECF2] p-4 text-center font-bold text-sm tracking-widest uppercase text-[#6B7A90]">
                  {source}
                </div>
              ))}
            </AnimatedSection>

            <div className="hidden lg:block w-8 h-[1px] bg-[#E8ECF2]" />
            <div className="lg:hidden h-8 w-[1px] bg-[#E8ECF2]" />

            {/* Core Engine */}
            <AnimatedSection delay={0.2} className="w-full lg:w-1/3 bg-[#0A0E1A] border border-[#0A0E1A] p-12 text-center text-white shrink-0">
              <h3 className="text-3xl font-display font-bold tracking-tighter mb-4">APERION</h3>
              <div className="text-sm font-light tracking-widest uppercase text-white/60">
                AI Intelligence Engine
              </div>
            </AnimatedSection>

            <div className="hidden lg:block w-8 h-[1px] bg-[#E8ECF2]" />
            <div className="lg:hidden h-8 w-[1px] bg-[#E8ECF2]" />

            {/* Outputs */}
            <AnimatedSection delay={0.4} className="w-full lg:w-1/4 space-y-4">
              {["Donor Briefings", "Opportunity Matches", "Proposal Drafts", "Pipeline Scores"].map((output, idx) => (
                <div key={idx} className="bg-white border border-[#06B6D4]/30 p-4 text-center font-bold text-sm tracking-widest uppercase text-[#06B6D4]">
                  {output}
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impact Grid */}
      <section className="py-24 bg-[#F7F8FC] border-t border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#6B7A90] mb-6 uppercase">
              MEASURABLE IMPACT
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] mb-8 tracking-tighter">
              RESULTS YOUR TEAM WILL FEEL.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-0 border border-[#E8ECF2] bg-[#E8ECF2]">
            {[
              { stat: "75%", title: "Admin Time Eliminated", desc: "Gift officers reclaim the majority of their week for relationship-building." },
              { stat: "300+", title: "Opportunity Library", desc: "Pre-built funding opportunities matched intelligently to each donor's interests." },
              { stat: "20:1", title: "ROI by Year Two", desc: "For every dollar invested in Aperion, health systems return twenty in philanthropic revenue." }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} className="bg-white p-12 border-[0.5px] border-[#E8ECF2] text-center">
                <div className="text-6xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] mb-8">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-[#0A0E1A] mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-[#6B7A90] font-light leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 lg:py-32 bg-[#0A0E1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="text-[10px] tracking-[0.2em] font-bold text-[#06B6D4] mb-6 uppercase">
              DESIGN PRINCIPLES
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 tracking-tighter">
              BUILT FOR HOW GIFT OFFICERS ACTUALLY WORK.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Privacy by design", desc: "No PHI ever enters the Aperion system. Donors are matched on the fundraising side, never the clinical side." },
              { title: "Workflow-first", desc: "Aperion surfaces intelligence inside your existing tools — not in a separate dashboard your team won't open." },
              { title: "Continuous learning", desc: "Every closed gift and declined meeting trains the model — outcomes improve with every interaction." }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} className="bg-white/5 border border-white/10 p-10">
                <div className="w-12 h-12 bg-white/10 mb-8" />
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
