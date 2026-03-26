import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Zap, Database, BrainCircuit, HeartPulse } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 bg-[#0A0E1A] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0E1A]/80 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-[#0A0E1A] to-[#0A0E1A] z-10" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0A0E1A] to-transparent z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-mesh.png`}
            alt="Abstract data mesh" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen z-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen z-10 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-violet-500" />
                <span className="text-sm tracking-[0.2em] font-semibold text-white/80 uppercase">
                  Healthcare philanthropy intelligence
                </span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-display font-bold text-white leading-[1.05] tracking-tighter mb-8">
                Intelligence that moves <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">people to give.</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-xl sm:text-2xl text-white/60 mb-12 leading-relaxed max-w-3xl font-light">
                Two purpose-built platforms — Prysm and Aperion — designed to transform how health systems identify, engage, and inspire their most capable philanthropists.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="rounded-none text-sm tracking-widest uppercase font-semibold px-10 h-14 bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white hover:opacity-90 border-0 transition-all duration-300">
                  Explore our platforms
                </Button>
                <Link href="/results">
                  <Button size="lg" variant="ghost" className="rounded-none text-sm tracking-widest uppercase font-semibold px-8 h-14 text-white hover:bg-white/5 hover:text-white group transition-all duration-300">
                    View client results
                    <ArrowRight className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Strip */}
      <section className="bg-white border-y border-[#E8ECF2]">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E8ECF2]">
          {/* Prysm Block */}
          <div className="relative p-12 lg:p-20 group hover:bg-[#F7F8FC] transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#7C3AED] to-[#2563EB]" />
            <AnimatedSection>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#7C3AED] mb-6 uppercase">
                PRYSM — PLATFORM 01
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0A0E1A] mb-6 tracking-tight">
                GRATEFUL PATIENT INTELLIGENCE
              </h2>
              <p className="text-[#6B7A90] font-light text-lg leading-relaxed mb-10 min-h-[120px]">
                Prysm bridges Epic EMR with Blackbaud CRM to automatically surface major gift prospects from clinical encounter data — identifying grateful patients before the window of opportunity closes.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Epic EMR", "Blackbaud CRM", "Real-time scoring", "HIPAA-compliant"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#F7F8FC] border border-[#E8ECF2] text-[#6B7A90] text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/prysm" className="inline-flex items-center text-[#7C3AED] text-sm font-bold tracking-widest uppercase group/link hover:opacity-80 transition-opacity">
                Explore Prysm
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Aperion Block */}
          <div className="relative p-12 lg:p-20 group hover:bg-[#F7F8FC] transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" />
            <AnimatedSection delay={0.1}>
              <div className="text-[10px] tracking-[0.2em] font-bold text-[#06B6D4] mb-6 uppercase">
                APERION — PLATFORM 02
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0A0E1A] mb-6 tracking-tight">
                AI-AUGMENTED FUNDRAISING
              </h2>
              <p className="text-[#6B7A90] font-light text-lg leading-relaxed mb-10 min-h-[120px]">
                Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence that makes every conversation count.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Donor briefings", "Prospect matching", "300+ opportunities", "20:1 ROI"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#F7F8FC] border border-[#E8ECF2] text-[#6B7A90] text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/aperion" className="inline-flex items-center text-[#06B6D4] text-sm font-bold tracking-widest uppercase group/link hover:opacity-80 transition-opacity">
                Explore Aperion
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-[#F7F8FC] border-b border-[#E8ECF2]">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8ECF2]">
          {[
            { value: "305%", label: "Increase in first-time major gifts" },
            { value: "$4.3M", label: "Realized revenue, Providence South Division" },
            { value: "20×", label: "ROI by year two, per fundraising team" }
          ].map((metric, idx) => (
            <div key={idx} className="p-12 text-center">
              <AnimatedSection delay={0.1 * idx}>
                <div className="text-5xl lg:text-7xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#2563EB] to-[#06B6D4] mb-4">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold tracking-widest uppercase text-[#6B7A90] max-w-[200px] mx-auto">
                  {metric.label}
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* Native Integrations */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
              <span className="text-xs tracking-[0.2em] font-bold text-[#7C3AED] uppercase">Native Integrations</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0A0E1A] mb-8 tracking-tighter">
              BUILT ON THE SYSTEMS YOUR TEAM ALREADY USES.
            </h2>
            <p className="text-xl text-[#6B7A90] font-light leading-relaxed">
              No rip-and-replace. No parallel data infrastructure. Prysm and Aperion connect natively with the platforms health system philanthropy teams rely on every day.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E8ECF2] bg-[#E8ECF2]">
            {[
              { icon: <HeartPulse className="w-8 h-8 text-[#0A0E1A]" />, title: "Epic EMR", desc: "Clinical data source", abbr: "Epic" },
              { icon: <Database className="w-8 h-8 text-[#0A0E1A]" />, title: "Blackbaud CRM", desc: "Fundraising CRM", abbr: "BB" },
              { icon: <Activity className="w-8 h-8 text-[#0A0E1A]" />, title: "Salesforce NPSP", desc: "Donor management", abbr: "SF" },
              { icon: <BrainCircuit className="w-8 h-8 text-[#0A0E1A]" />, title: "Aperion AI Layer", desc: "Intelligence engine", abbr: "AI" }
            ].map((integration, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} className="bg-white p-10 border-[0.5px] border-[#E8ECF2] hover:bg-[#F7F8FC] transition-colors">
                <div className="w-16 h-16 bg-[#F7F8FC] border border-[#E8ECF2] flex items-center justify-center mb-8 text-xl font-display font-bold text-[#0A0E1A]">
                  {integration.abbr}
                </div>
                <h3 className="text-lg font-bold text-[#0A0E1A] mb-2 tracking-tight uppercase">{integration.title}</h3>
                <p className="text-[#6B7A90] text-sm font-light">{integration.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
