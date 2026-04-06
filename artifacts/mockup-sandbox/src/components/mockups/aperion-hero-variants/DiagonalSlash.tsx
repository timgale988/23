import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, Hexagon } from "lucide-react";

export function DiagonalSlash() {
  return (
    <div className="relative min-h-[100vh] w-full overflow-hidden text-white font-sans bg-[#060E3C]">
      {/* Bottom Layer: Atmospheric Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(6,14,60,1) 0%, rgba(18,50,140,0.85) 45%, rgba(37,99,235,0.5) 75%, rgba(6,182,212,0.25) 100%)'
        }}
      />
      
      {/* Top Layer: Dark Panel with Diagonal Cut */}
      <div 
        className="absolute inset-0 z-10 flex flex-col justify-center"
        style={{
          background: '#04081E',
          clipPath: 'polygon(0 0, 58% 0, 44% 100%, 0 100%)'
        }}
      >
        <div className="container mx-auto px-6 md:px-12 relative z-20 w-[45%] lg:w-[40%] flex flex-col items-start gap-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide uppercase">
            Platform 02 — Aperion
          </div>

          {/* Headline */}
          <h1 className="font-semibold leading-[1.1] tracking-tight text-white" style={{ fontSize: 'clamp(48px, 5vw, 72px)' }}>
            Every Gift Officer's <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Unfair Advantage.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
            Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence.
          </p>

          {/* Sub-copy */}
          <div className="text-sm text-slate-400 font-medium">
            Built for Blackbaud CRM and Salesforce NPSP.
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white border-0 h-12 px-8 rounded-full text-base font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Request a Demo
            </Button>
            <Button size="lg" variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5 h-12 px-6 rounded-full text-base font-medium group">
              View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-white/10 w-full">
            <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
              <Check className="w-4 h-4 text-cyan-400" />
              Blackbaud CRM
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
              <Hexagon className="w-4 h-4 text-cyan-400" />
              AI Briefings
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
              <Zap className="w-4 h-4 text-cyan-400" />
              75% Admin Saved
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DiagonalSlash;
