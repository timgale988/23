import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BarChart, Zap, Settings, Database, ArrowRight, LineChart, PieChart } from "lucide-react";

export default function Prysm() {
  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  Actionable Insight Product
                </div>
                <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-foreground leading-[1.1] mb-6">
                  Prysm.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                    Clarity Through Data
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  A premium business intelligence and analytics platform that provides real-time dashboards, customizable reports, and predictive insights for modern teams.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full text-base px-8 bg-foreground text-background hover:bg-foreground/90 shadow-xl">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-border">
                    Watch Video
                  </Button>
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection direction="left" delay={0.2} className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-accent/10">
                <img 
                  src={`${import.meta.env.BASE_URL}images/prysm-abstract.png`}
                  alt="Prysm Interface Abstract" 
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-6 rounded-xl bg-background/80 backdrop-blur-md border border-border shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Live Revenue Stream</span>
                    <span className="text-xs font-bold text-accent flex items-center gap-1"><Zap className="w-3 h-3"/> +24.5%</span>
                  </div>
                  <div className="h-12 w-full bg-gradient-to-r from-accent/20 via-accent/50 to-blue-500/50 rounded-md" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">See Everything. Miss Nothing.</h2>
            <p className="text-muted-foreground text-lg">
              Prysm consolidates your fragmented data silos into a single source of truth with elegant, powerful visualization tools.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <BarChart className="w-8 h-8 text-accent" />,
                title: "Real-Time Dashboards",
                desc: "Monitor your KPIs as they happen with websockets-powered live updates. No refreshing required."
              },
              {
                icon: <LineChart className="w-8 h-8 text-accent" />,
                title: "Predictive Analytics",
                desc: "Built-in machine learning models forecast trends and alert you to anomalies before they become problems."
              },
              {
                icon: <Settings className="w-8 h-8 text-accent" />,
                title: "Custom Reporting",
                desc: "Drag-and-drop report builder allows anyone to create board-ready presentations in minutes."
              },
              {
                icon: <Database className="w-8 h-8 text-accent" />,
                title: "Seamless Data Integration",
                desc: "Native connectors for Snowflake, Redshift, Postgres, and 150+ SaaS tools."
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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">How Prysm Works</h2>
            <p className="text-muted-foreground text-lg">From raw data to board-ready insights in three simple steps.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border z-0" />
            
            {[
              { step: "01", title: "Connect", desc: "Securely link your databases, data warehouses, and SaaS applications with one-click authentications." },
              { step: "02", title: "Analyze", desc: "Use our semantic layer to define metrics once, then explore data visually without writing SQL." },
              { step: "03", title: "Act", desc: "Share interactive dashboards, set up automated email reports, and trigger alerts based on thresholds." }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={0.2 * idx} className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-card border-8 border-background flex items-center justify-center text-2xl font-display font-bold text-foreground shadow-lg mb-8 mx-auto md:mx-0">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center md:text-left">{item.title}</h3>
                <p className="text-muted-foreground text-center md:text-left leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/50 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <PieChart className="w-16 h-16 text-accent mx-auto mb-8" />
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">Stop guessing. Start knowing.</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Deploy Prysm today and give your team the clarity they need to drive performance.
            </p>
            <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 h-14 shadow-lg shadow-accent/20">
              Request Prysm Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
