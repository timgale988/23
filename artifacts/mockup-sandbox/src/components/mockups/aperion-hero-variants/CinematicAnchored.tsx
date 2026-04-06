import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Hexagon, Zap } from "lucide-react";

export function CinematicAnchored() {
  return (
    <section 
      className="relative flex flex-col justify-end min-h-screen text-white overflow-hidden w-full font-sans"
      style={{
        background: "linear-gradient(155deg, rgba(8,16,70,0.95) 0%, rgba(20,50,130,0.7) 40%, rgba(37,80,200,0.5) 70%, rgba(14,44,130,0.8) 100%)",
        backgroundImage: `
          linear-gradient(to top, rgba(5,10,30,1) 0%, rgba(5,10,30,0.8) 40%, transparent 100%),
          url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Container anchored to bottom */}
      <div className="container mx-auto px-6 relative z-10 pb-[120px] pt-32 max-w-7xl flex flex-col items-start justify-end h-full">
        <div className="max-w-3xl space-y-8">
          
          <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-950/30 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase">
            Platform 02 — Aperion
          </Badge>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-white">
            Every Gift Officer's <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Unfair Advantage.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-2xl font-light">
            Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white border-0 h-14 px-8 text-lg rounded-full font-medium shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
            >
              Request a Demo
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white hover:bg-white/10 h-14 px-8 text-lg rounded-full font-medium"
            >
              View Case Study →
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-blue-100">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>Blackbaud CRM</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-blue-100">
              <Hexagon className="w-4 h-4 text-blue-400" />
              <span>AI Briefings</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-blue-100">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>75% Admin Saved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Absolute Bottom Stat Strip */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-slate-950/60 backdrop-blur-md">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-4 px-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-white tracking-tight">75%</span>
              <span className="text-sm font-medium text-blue-200/60 uppercase tracking-wider">Admin Saved</span>
            </div>
            <div className="py-4 px-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-white tracking-tight">20:1</span>
              <span className="text-sm font-medium text-blue-200/60 uppercase tracking-wider">ROI Year Two</span>
            </div>
            <div className="py-4 px-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-white tracking-tight">3×</span>
              <span className="text-sm font-medium text-blue-200/60 uppercase tracking-wider">Donor Touchpoints</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default CinematicAnchored;
