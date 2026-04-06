import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DiagnosticQuestions() {
  return (
    <div className="min-h-[100dvh] bg-[#03081A] text-white font-sans flex flex-col relative overflow-hidden selection:bg-cyan-500/30">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

      {/* TOP SECTION */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full pt-24 pb-16 z-10">
        <div className="max-w-4xl">
          <p className="text-gray-400 uppercase tracking-[0.2em] text-sm font-semibold mb-12">
            A Question for Gift Officers
          </p>

          <div className="space-y-[28px] mb-12">
            {[
              "Are your gift officers spending more than half their week on admin — not donors?",
              "Are you missing grateful patient opportunities buried in your CRM?",
              "Does proposal preparation take days when it should take minutes?"
            ].map((question, i) => (
              <div 
                key={i}
                className="pl-6 border-l-2 border-cyan-400 py-1 hover:border-cyan-300 transition-colors duration-300 group"
              >
                <h3 className="text-[clamp(18px,2vw,26px)] font-medium leading-snug text-gray-100 group-hover:text-white transition-colors duration-300">
                  {question}
                </h3>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-lg/relaxed max-w-2xl">
            If you answered yes to any of these, your gift officers are operating at a fraction of their potential.
          </p>
        </div>
      </div>

      {/* PIVOT ELEMENT */}
      <div className="relative w-full flex items-center justify-center py-8 z-10">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <div className="bg-[#03081A] px-6 relative z-10">
          <span className="uppercase tracking-widest text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
            Aperion Changes This
          </span>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full pb-24 pt-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-8">
            <Badge variant="outline" className="border-gray-800 text-gray-300 bg-gray-900/50 rounded-full px-4 py-1.5 text-xs tracking-wider">
              PLATFORM 02 — APERION
            </Badge>
            
            <h2 className="text-[clamp(36px,4vw,56px)] font-semibold leading-[1.1] tracking-tight">
              Every Gift Officer's <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Unfair Advantage.
              </span>
            </h2>
            
            <p className="text-gray-400 text-xl/relaxed max-w-xl">
              Aperion eliminates 75% of administrative burden — AI-prepared briefings, intelligent opportunity matching, and proposal intelligence.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Blackbaud CRM
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">⬡</span> AI Briefings
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⚡</span> 75% Admin Saved
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <Button 
              size="lg" 
              className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white border-0 shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.6)]"
            >
              Request a Demo
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="w-full h-14 text-lg text-gray-300 hover:text-white hover:bg-white/5 border border-gray-800 transition-colors"
            >
              View Case Study →
            </Button>

            {/* Micro-stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-4 border-t border-gray-800/60">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-white">75%</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Admin reduced</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-white">20:1</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">ROI</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-white">3×</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Touchpoints</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DiagnosticQuestions;
