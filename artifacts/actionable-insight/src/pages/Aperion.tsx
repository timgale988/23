import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Brain, Workflow, BellRing, Expand, ArrowRight, Layers, Cpu } from "lucide-react";

export default function Aperion() {
  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <AnimatedSection direction="right" className="order-2 lg:order-1 relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-accent/10">
                <img 
                  src={`${import.meta.env.BASE_URL}images/aperion-abstract.png`}
                  alt="Aperion Network Abstract" 
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 left-4 p-4 rounded-xl bg-background/80 backdrop-blur-md border border-border shadow-lg flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-accent animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Processing Pipeline</div>
                    <div className="text-xs text-muted-foreground">1.2M events/sec</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="order-1 lg:order-2 lg:pl-12">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  Actionable Insight Product
                </div>
                <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-foreground leading-[1.1] mb-6">
                  Aperion.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-500">
                    Intelligence at Every Layer
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  An advanced AI-powered data processing and workflow automation platform that transforms raw data pipelines into intelligent, actionable outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full text-base px-8 bg-foreground text-background hover:bg-foreground/90 shadow-xl">
                    Get Enterprise Access
                  </Button>
                  <Button size="lg" variant="ghost" className="rounded-full text-base px-8 hover:bg-secondary">
                    Read the Whitepaper
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Built for the AI Era</h2>
            <p className="text-muted-foreground text-lg">
              Aperion sits between your data lakes and your operations, applying machine learning to automate complex decision-making processes.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-accent" />,
                title: "AI-Powered Processing",
                desc: "Utilize custom LLMs and machine learning models to extract meaning, sentiment, and structured entities from unstructured data."
              },
              {
                icon: <Workflow className="w-8 h-8 text-accent" />,
                title: "Workflow Automation",
                desc: "Visual orchestrator to build complex conditional logic chains that trigger actions across your entire tech stack."
              },
              {
                icon: <BellRing className="w-8 h-8 text-accent" />,
                title: "Smart Alerts",
                desc: "Reduce alert fatigue. Aperion intelligently groups related incidents and only notifies your team when human intervention is truly required."
              },
              {
                icon: <Expand className="w-8 h-8 text-accent" />,
                title: "Enterprise Scalability",
                desc: "Built on a distributed Kubernetes architecture ensuring high throughput and resilience regardless of load spikes."
              }
            ].map((feature, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} className="p-8 rounded-3xl bg-background border border-border hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The Aperion Pipeline</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Seamless flow from ingestion to execution.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Ingest", desc: "Connect streams via Kafka, Kinesis, or REST APIs. Aperion normalizes schemas on the fly." },
              { step: "02", title: "Process", desc: "Data passes through inference nodes where AI models enrich, classify, and score the information." },
              { step: "03", title: "Automate", desc: "Triggered workflows execute API calls, update databases, or route tickets based on the AI's confidence." }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={0.2 * idx} className="bg-background/5 border border-primary-foreground/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-background/10 transition-colors">
                <div className="text-accent font-mono text-xl mb-4 font-bold">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <Layers className="w-16 h-16 text-accent mx-auto mb-8" />
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">Automate the impossible.</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Transform your operational efficiency with the most advanced data automation engine on the market.
            </p>
            <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-lg px-10 h-14 shadow-lg">
              Contact Engineering
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
