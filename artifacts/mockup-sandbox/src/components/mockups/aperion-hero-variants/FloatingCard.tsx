import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FloatingCard() {
  return (
    <div 
      className="relative min-h-[100dvh] w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(6,12,50,0.98) 0%, rgba(15,40,120,0.85) 40%, rgba(37,99,235,0.4) 75%, rgba(6,182,212,0.2) 100%)"
      }}
    >
      {/* Decorative background elements to simulate photo depth */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=3132&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Floating Card */}
      <div 
        className="absolute z-10 hidden lg:block rounded-[16px] shadow-2xl"
        style={{
          left: "5%",
          width: "43%",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(4,8,30,0.82)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "40px"
        }}
      >
        <Badge 
          variant="outline" 
          className="mb-6 border-cyan-500/30 bg-cyan-500/10 text-cyan-300 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold tracking-wider"
        >
          PLATFORM 02 — APERION
        </Badge>

        <h1 className="mb-6 text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          Every Gift Officer's
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Unfair Advantage.
          </span>
        </h1>

        <p className="mb-8 text-lg text-slate-300 leading-relaxed">
          Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence that makes every conversation count.
        </p>

        <p className="mb-8 text-sm font-medium text-slate-400">
          Built for Blackbaud CRM and Salesforce NPSP.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-10">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white border-0 px-8 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            Request a Demo
          </Button>
          <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 rounded-full px-6">
            View Case Study &rarr;
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-300 border-t border-white/10 pt-6">
          <span className="flex items-center gap-2">
            <span className="text-cyan-400">✓</span> Blackbaud CRM
          </span>
          <span className="flex items-center gap-2">
            <span className="text-blue-400">⬡</span> AI Briefings
          </span>
          <span className="flex items-center gap-2">
            <span className="text-yellow-400">⚡</span> 75% Admin Saved
          </span>
        </div>
      </div>

      {/* Mobile fallback layout */}
      <div className="relative z-10 flex flex-col justify-center min-h-[100dvh] p-6 lg:hidden">
        <div 
          className="w-full rounded-[16px] shadow-2xl mt-12"
          style={{
            background: "rgba(4,8,30,0.82)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "32px"
          }}
        >
          <Badge 
            variant="outline" 
            className="mb-6 border-cyan-500/30 bg-cyan-500/10 text-cyan-300 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold tracking-wider"
          >
            PLATFORM 02 — APERION
          </Badge>

          <h1 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Every Gift Officer's
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Unfair Advantage.
            </span>
          </h1>

          <p className="mb-8 text-base sm:text-lg text-slate-300 leading-relaxed">
            Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence that makes every conversation count.
          </p>

          <p className="mb-8 text-sm font-medium text-slate-400">
            Built for Blackbaud CRM and Salesforce NPSP.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white border-0 px-8 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Request a Demo
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 rounded-full px-6">
              View Case Study &rarr;
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-300 border-t border-white/10 pt-6">
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Blackbaud CRM
            </span>
            <span className="flex items-center gap-2">
              <span className="text-blue-400">⬡</span> AI Briefings
            </span>
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">⚡</span> 75% Admin Saved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatingCard;
