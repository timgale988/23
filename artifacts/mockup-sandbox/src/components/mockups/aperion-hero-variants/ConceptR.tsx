import { ArrowRightLeft } from "lucide-react";

export function ConceptR() {
  return (
    <div className="min-h-screen bg-[#030814] text-white flex flex-col font-sans overflow-hidden">
      {/* TOP BAR */}
      <div className="h-[60px] flex items-center justify-center border-b border-white/5 shrink-0 bg-black/20 backdrop-blur-sm relative z-20">
        <span className="text-gray-500 font-mono text-xs tracking-[0.2em] uppercase">Platform 02 — Aperion</span>
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 relative flex flex-col lg:flex-row">
        {/* CENTER DIVIDER */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block z-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#030814] border border-white/10 rounded-full flex items-center justify-center shadow-xl">
            <ArrowRightLeft className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
          </div>
        </div>

        {/* LEFT COLUMN */}
        <div className="flex-1 bg-[#0A0008] p-8 md:p-12 lg:p-24 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-50"></div>
          
          <div className="relative z-10 max-w-xl mx-auto w-full flex-1 flex flex-col">
            <div className="text-red-400 text-[10px] tracking-[0.25em] font-bold uppercase mb-12">Before Aperion</div>
            
            <div className="mb-2 relative inline-flex">
              <div className="text-red-400/60 text-[100px] leading-[0.85] font-black tracking-tighter relative z-10">
                75%
              </div>
              <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center mix-blend-screen">
                <div className="w-[110%] h-[6px] bg-red-500 -rotate-[20deg] shadow-[0_0_20px_rgba(239,68,68,0.8)] rounded-full"></div>
              </div>
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-widest font-mono mb-20">Of your week on admin</div>

            {/* Calendar */}
            <div className="flex gap-3 h-[280px] w-full mb-16 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                <div key={day} className="flex-1 flex flex-col gap-2">
                  <div className="flex-[0.75] bg-[#1a050d] rounded-t-md border border-red-900/20 flex flex-col p-2 gap-1.5 overflow-hidden relative group/day">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjM5LCA2OCwgNjgsIDAuMSkiLz48L3N2Zz4=')] opacity-20"></div>
                    <div className="text-[9px] text-red-300/40 uppercase font-mono bg-black/40 px-1.5 py-1 rounded border border-red-900/30 truncate z-10">Research</div>
                    <div className="text-[9px] text-red-300/40 uppercase font-mono bg-black/40 px-1.5 py-1 rounded border border-red-900/30 truncate z-10">CRM entry</div>
                    <div className="text-[9px] text-red-300/40 uppercase font-mono bg-black/40 px-1.5 py-1 rounded border border-red-900/30 truncate z-10">Proposals</div>
                    <div className="text-[9px] text-red-300/40 uppercase font-mono bg-black/40 px-1.5 py-1 rounded border border-red-900/30 truncate z-10">Notes</div>
                  </div>
                  <div className="flex-[0.25] bg-emerald-950/20 rounded-b-md border border-emerald-900/20"></div>
                  <div className="text-center text-[10px] text-gray-600 mt-2 font-mono uppercase tracking-wider">{day}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <div className="text-red-300/60 text-[15px] italic font-serif border-l border-red-900/50 pl-6 py-2">
                "Your team spends most of their time on work that AI can do."
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 bg-[#04081E] p-8 md:p-12 lg:p-24 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-50"></div>
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-xl mx-auto w-full flex-1 flex flex-col">
            <div className="text-cyan-400 text-[10px] tracking-[0.25em] font-bold uppercase mb-12">After Aperion</div>
            
            <div className="mb-2">
              <div className="bg-gradient-to-br from-blue-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent text-[100px] leading-[0.85] font-black tracking-tighter drop-shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                75%
              </div>
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-widest font-mono mb-20">Of your week on donors</div>

            {/* Calendar */}
            <div className="flex gap-3 h-[280px] w-full mb-16">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                <div key={day} className="flex-1 flex flex-col gap-2">
                  <div className="flex-[0.25] bg-[#0c1229] rounded-t-md border border-blue-900/20"></div>
                  <div className="flex-[0.75] bg-gradient-to-b from-blue-900/40 to-cyan-900/20 rounded-b-md border border-cyan-500/30 flex flex-col p-2 gap-1.5 overflow-hidden relative shadow-[0_0_30px_rgba(56,189,248,0.1)] group/day hover:border-cyan-400/50 transition-colors">
                    <div className="absolute inset-0 bg-blue-400/5 mix-blend-overlay"></div>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                    
                    <div className="text-[9px] text-cyan-50 uppercase font-mono bg-blue-950/60 backdrop-blur-sm px-1.5 py-1 rounded border border-cyan-400/20 truncate z-10 shadow-sm transition-transform hover:-translate-y-0.5 duration-300 cursor-default" style={{ transitionDelay: `${i * 50}ms` }}>Donor calls</div>
                    <div className="text-[9px] text-cyan-50 uppercase font-mono bg-blue-950/60 backdrop-blur-sm px-1.5 py-1 rounded border border-cyan-400/20 truncate z-10 shadow-sm transition-transform hover:-translate-y-0.5 duration-300 cursor-default" style={{ transitionDelay: `${i * 50 + 50}ms` }}>Major ask</div>
                    <div className="text-[9px] text-cyan-50 uppercase font-mono bg-blue-950/60 backdrop-blur-sm px-1.5 py-1 rounded border border-cyan-400/20 truncate z-10 shadow-sm transition-transform hover:-translate-y-0.5 duration-300 cursor-default" style={{ transitionDelay: `${i * 50 + 100}ms` }}>Relationship</div>
                    <div className="text-[9px] text-cyan-50 uppercase font-mono bg-blue-950/60 backdrop-blur-sm px-1.5 py-1 rounded border border-cyan-400/20 truncate z-10 shadow-sm transition-transform hover:-translate-y-0.5 duration-300 cursor-default" style={{ transitionDelay: `${i * 50 + 150}ms` }}>Cultivation</div>
                  </div>
                  <div className="text-center text-[10px] text-gray-500 mt-2 font-mono uppercase tracking-wider">{day}</div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-blue-900/30 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <h3 className="text-white text-[20px] font-bold leading-tight max-w-[240px]">
                Free your team to do what only humans can.
              </h3>
              <button className="shrink-0 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] transform hover:-translate-y-0.5">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConceptR;
