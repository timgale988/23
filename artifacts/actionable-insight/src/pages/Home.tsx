import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Activity, ShieldCheck, Zap, Globe, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 lg:pt-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-mesh.png`}
            alt="Abstract data mesh" 
            className="w-full h-full object-cover opacity-80 dark:opacity-40"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Enterprise Intelligence Platform
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-foreground leading-[1.1] mb-6">
                Transforming Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Decisions</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                Actionable Insight is a premium technology company building analytical software products that empower enterprise leaders to see beyond the noise.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full text-base px-8 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base px-8 border-border bg-background/50 backdrop-blur-sm hover:bg-secondary">
                  Contact Sales
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-card relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Ecosystem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Two powerful platforms designed to work independently or synergistically to unlock your organization's potential.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Prysm Card */}
            <AnimatedSection delay={0.1} direction="left">
              <Card className="group h-full overflow-hidden border-border/50 bg-background hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 rounded-3xl p-1 relative">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Activity className="w-48 h-48" />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                  <img 
                    src={`${import.meta.env.BASE_URL}images/prysm-abstract.png`}
                    alt="Prysm visual" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-8 pb-8 relative z-20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-display font-bold text-foreground">Prysm</h3>
                    <div className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground border border-border">
                      Analytics Platform
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg min-h-[80px]">
                    Real-time business intelligence and analytics. Customizable dashboards and predictive insights that bring clarity to your metrics.
                  </p>
                  <Link href="/prysm" className="inline-flex items-center text-accent font-semibold hover:text-accent-foreground group/btn">
                    Learn about Prysm
                    <ChevronRight className="ml-1 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </AnimatedSection>

            {/* Aperion Card */}
            <AnimatedSection delay={0.2} direction="right">
              <Card className="group h-full overflow-hidden border-border/50 bg-background hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 rounded-3xl p-1 relative">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Globe className="w-48 h-48" />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                  <img 
                    src={`${import.meta.env.BASE_URL}images/aperion-abstract.png`}
                    alt="Aperion visual" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-8 pb-8 relative z-20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-display font-bold text-foreground">Aperion</h3>
                    <div className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground border border-border">
                      AI Workflow Engine
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg min-h-[80px]">
                    Advanced AI-powered data processing. Transform raw data pipelines into intelligent workflows and automated outcomes at scale.
                  </p>
                  <Link href="/aperion" className="inline-flex items-center text-accent font-semibold hover:text-accent-foreground group/btn">
                    Learn about Aperion
                    <ChevronRight className="ml-1 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Choose Actionable Insight?</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              We don't just build software; we architect the intelligence infrastructure for tomorrow's market leaders.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-accent" />,
                title: "Real-time Intelligence",
                desc: "Sub-second processing ensures you act on what's happening now, not yesterday."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-accent" />,
                title: "Enterprise-grade",
                desc: "Bank-level security, SOC2 compliance, and guaranteed 99.99% uptime SLAs."
              },
              {
                icon: <Activity className="w-6 h-6 text-accent" />,
                title: "Seamless Integration",
                desc: "Connect to 200+ data sources instantly without complex engineering overhead."
              },
              {
                icon: <Globe className="w-6 h-6 text-accent" />,
                title: "Unmatched Scale",
                desc: "Architecture that grows with you, handling petabytes of data effortlessly."
              }
            ].map((prop, i) => (
              <AnimatedSection key={i} delay={0.1 * i} className="p-6 rounded-2xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
                  {prop.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 font-display">{prop.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{prop.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to elevate your intelligence?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
              Join leading enterprises using Actionable Insight to drive growth, optimize operations, and see the future of their data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 h-14">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/20 text-foreground bg-background/90 hover:bg-background hover:text-foreground text-base px-8 h-14">
                View Documentation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
