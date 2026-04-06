import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";

export function DayInTheLife() {
  return (
    <div className="min-h-[100dvh] bg-[#03081A] text-slate-200 font-sans selection:bg-cyan-500/30 flex flex-col relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Bar */}
      <header className="h-12 border-b border-white/5 flex items-center justify-between px-6 z-10 bg-[#03081A]/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-slate-400">
            PLATFORM 02 — APERION
          </span>
        </div>
        <div className="font-mono text-sm text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
          8:47 AM
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 z-10">
        
        {/* Scenario Block */}
        <div className="w-full max-w-5xl grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          
          {/* Simulated UI Card */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-blue-500/0 rounded-[14px] blur opacity-50 group-hover:opacity-100 transition duration-1000" />
            
            <div className="relative bg-[#0D1117] border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Today's Briefings
                </h3>
                <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                  6 meetings · AI-prepared
                </span>
              </div>

              {/* Briefing Rows */}
              <div className="space-y-4 mb-8">
                {/* Row 1 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-medium border border-blue-500/30">
                      MC
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">Dr. Margaret Chen</div>
                      <div className="text-sm text-slate-400">Oncology · $850K capacity</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-1.5 rounded-md self-start sm:self-auto whitespace-nowrap">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    AI briefing ready
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-medium border border-amber-500/30">
                      RA
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">Robert & Linda Ashford</div>
                      <div className="text-sm text-slate-400">Cardiology · $2.1M capacity</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-400 bg-amber-400/10 px-2.5 py-1.5 rounded-md self-start sm:self-auto whitespace-nowrap">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    3 follow-up signals
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-medium border border-cyan-500/30">
                      WF
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">The Weston Foundation</div>
                      <div className="text-sm text-slate-400">Legacy giving · $500K ask</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-blue-400 bg-blue-400/10 px-2.5 py-1.5 rounded-md self-start sm:self-auto whitespace-nowrap">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Proposal drafted
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-2 text-xs text-slate-500 border-t border-white/5 pt-4">
                <Clock className="w-3.5 h-3.5" />
                Last synced: Blackbaud CRM · 2 min ago
              </div>
            </div>
          </div>

          {/* Callout Annotations */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:pl-8 relative">
            {/* Desktop connecting lines (decorative) */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[200px] border-l border-y border-white/10 rounded-l-xl -translate-x-full" />
            
            <div className="relative pl-6 lg:pl-0 border-l lg:border-none border-cyan-500/30 space-y-8">
              <div className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 lg:hidden shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <div className="text-cyan-400 font-mono text-xs mb-1">01</div>
                <div className="text-slate-300 text-sm md:text-base leading-relaxed">
                  <strong className="text-white font-medium">Donor capacity pulled automatically</strong> from wealth screening and CRM history.
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 lg:hidden shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <div className="text-cyan-400 font-mono text-xs mb-1">02</div>
                <div className="text-slate-300 text-sm md:text-base leading-relaxed">
                  <strong className="text-white font-medium">Meeting prep: 0 hours.</strong> Complete dossier synthesized before you pour your coffee.
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 lg:hidden shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <div className="text-cyan-400 font-mono text-xs mb-1">03</div>
                <div className="text-slate-300 text-sm md:text-base leading-relaxed">
                  <strong className="text-white font-medium">AI-matched from 300+ entry library.</strong> Proposals perfectly tailored to donor interests.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-lg md:text-xl text-slate-400 font-medium">
            This is what your gift officers' mornings look like with Aperion.
          </p>
          
          <h1 className="text-[clamp(28px,3vw,42px)] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 leading-tight pb-2">
            Every Gift Officer's Unfair Advantage.
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
              Request a Demo
            </Button>
            <Button variant="ghost" className="h-12 px-8 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors group">
              View Case Study 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

      </main>
    </div>
  );
}
