import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";


export default function Home() {
  return (
    <div className="overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-24 bg-[#0A0E1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/15 via-[#0A0E1A] to-[#06B6D4]/10" />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#7C3AED]/8 blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/8 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-5xl">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-px bg-white/25" />
                <span className="text-[11px] tracking-[0.24em] font-bold text-white/40 uppercase">
                  Healthcare philanthropy intelligence
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-[clamp(44px,7vw,88px)] font-bold text-white leading-[0.95] tracking-[-0.04em] uppercase mb-10">
                Boundless insight.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                  One platform.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-white/55 mb-4 leading-relaxed max-w-2xl font-light">
                Actionable Insight AI builds purpose-built intelligence software for non-profit health
                system philanthropy — connecting clinical data to donor outcomes through two
                integrated platforms: Prysm and Aperion.
              </p>
              <p className="text-lg text-white/35 mb-14 leading-relaxed max-w-2xl font-light">
                From the moment a patient is discharged to the moment a major gift is closed,
                every step of the grateful patient journey runs on Actionable Insight AI.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/prysm">
                  <Button
                    size="lg"
                    className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0"
                  >
                    Explore our platforms
                  </Button>
                </Link>
                <Link href="/results">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="rounded-none text-sm tracking-widest uppercase font-semibold px-8 h-14 text-white hover:bg-white/5 hover:text-white group border border-white/15"
                  >
                    View client results
                    <ArrowRight className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="bg-white border-b border-[#E8ECF2]">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E8ECF2]">
          <div className="relative p-12 lg:p-20 group hover:bg-[#F7F8FC] transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#7C3AED] to-[#2563EB]" />
            <AnimatedSection>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-6 uppercase">
                Prysm — Platform 01
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A0E1A] mb-6 tracking-tight uppercase">
                Grateful Patient Intelligence
              </h2>
              <p className="text-[#6B7A90] font-light text-lg leading-relaxed mb-10 min-h-[96px]">
                Prysm bridges Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically
                surface major gift prospects from clinical encounter data — identifying grateful
                patients before the window of opportunity closes.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Epic EMR", "Blackbaud CRM", "Real-time scoring", "HIPAA-compliant"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#F7F8FC] border border-[#E8ECF2] text-[#6B7A90] text-xs font-semibold tracking-wider uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/prysm"
                className="inline-flex items-center text-[#7C3AED] text-sm font-bold tracking-widest uppercase group/link hover:opacity-70 transition-opacity"
              >
                Explore Prysm
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>

          <div className="relative p-12 lg:p-20 group hover:bg-[#F7F8FC] transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" />
            <AnimatedSection delay={0.1}>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#06B6D4] mb-6 uppercase">
                Aperion — Platform 02
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A0E1A] mb-6 tracking-tight uppercase">
                AI-Augmented Fundraising
              </h2>
              <p className="text-[#6B7A90] font-light text-lg leading-relaxed mb-10 min-h-[96px]">
                Aperion eliminates 75% of administrative burden — replacing it with AI-prepared
                donor briefings, intelligent opportunity matching, and proposal intelligence that
                makes every gift officer conversation count.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Donor briefings", "Prospect matching", "300+ opportunities", "20:1 ROI"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#F7F8FC] border border-[#E8ECF2] text-[#6B7A90] text-xs font-semibold tracking-wider uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/aperion"
                className="inline-flex items-center text-[#06B6D4] text-sm font-bold tracking-widest uppercase group/link hover:opacity-70 transition-opacity"
              >
                Explore Aperion
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="py-24 lg:py-32 bg-white border-b border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#7C3AED]" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-[#7C3AED] uppercase">
                Fully integrated platform
              </span>
            </div>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.04em] uppercase text-[#0A0E1A] leading-[0.92] mb-6">
              Built on the systems your team already uses.
            </h2>
            <p className="text-lg text-[#6B7A90] font-light leading-relaxed">
              No rip-and-replace. No parallel data infrastructure. Prysm and Aperion connect
              natively with the platforms health system philanthropy teams rely on every day —
              deploying in 90 days without disrupting existing workflows.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8ECF2] border border-[#E8ECF2]">
            {[
              { abbr: "Epic", title: "Epic EMR", desc: "FHIR-native clinical data ingestion across all service lines and departments.", color: "#7C3AED" },
              { abbr: "BB", title: "Blackbaud CRM", desc: "Bi-directional sync with Raiser's Edge NXT and Blackbaud CRM environments.", color: "#2563EB" },
              { abbr: "SF", title: "Salesforce NPSP", desc: "Native Salesforce integration with full object model and workflow support.", color: "#0891B2" },
              { abbr: "AI", title: "Aperion AI Layer", desc: "Embedded intelligence engine connecting clinical signals to donor outcomes.", color: "#06B6D4" },
            ].map((integration, idx) => (
              <AnimatedSection
                key={idx}
                delay={0.1 * idx}
                className="bg-white p-10 hover:bg-[#F7F8FC] transition-colors group relative"
              >
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: integration.color }}
                />
                <div
                  className="w-14 h-14 flex items-center justify-center mb-8 text-sm font-bold tracking-wider text-white"
                  style={{ background: integration.color }}
                >
                  {integration.abbr}
                </div>
                <h3 className="text-base font-bold text-[#0A0E1A] mb-3 tracking-tight uppercase">
                  {integration.title}
                </h3>
                <p className="text-sm text-[#6B7A90] font-light leading-relaxed">
                  {integration.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-[#0A0E1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#06B6D4]/10" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-white/20" />
                <span className="text-[11px] tracking-[0.22em] font-bold text-white/35 uppercase">
                  Get started
                </span>
              </div>
              <h2 className="text-[clamp(32px,5vw,60px)] font-bold tracking-[-0.04em] uppercase text-white leading-[0.92] mb-8">
                Let's talk about
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                  what's possible.
                </span>
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed mb-12 max-w-xl">
                Schedule a live platform walkthrough. We'll show you exactly how Prysm connects to
                your Epic environment, what the first 90 days look like, and the outcomes health
                systems at your scale have already achieved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0"
                >
                  Request a demo <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
                <Link href="/results">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-none text-sm tracking-widest uppercase font-semibold px-8 h-14 border-white/20 text-white/60 hover:text-white hover:border-white/40 bg-transparent"
                  >
                    View client results
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="border border-white/[0.08] space-y-0">
              {[
                { label: "Deployment timeline", value: "90 days to first patient lists" },
                { label: "EMR integration", value: "Native Epic FHIR — no middleware" },
                { label: "CRM support", value: "Blackbaud CRM & Salesforce NPSP" },
                { label: "First-year ROI", value: "20× return on investment (Providence)" },
                { label: "Onboarding", value: "90% reduction in gift officer ramp time" },
                { label: "Pipeline growth", value: "10% annual growth in qualified prospects" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-8 px-7 py-5 border-b border-white/[0.06] last:border-0"
                >
                  <div className="text-[11px] font-bold tracking-widest uppercase text-white/30">
                    {item.label}
                  </div>
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
