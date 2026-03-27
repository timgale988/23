import React from 'react';
import { 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  Zap,
  MoreHorizontal
} from 'lucide-react';

export function PrysmPipelineUI() {
  return (
    <div className="w-full max-w-[1280px] min-h-[720px] mx-auto bg-white flex flex-col lg:flex-row overflow-hidden font-sans shadow-2xl rounded-xl border border-gray-100">
      
      {/* LEFT COLUMN */}
      <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center relative bg-white">
        <div className="max-w-xl">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 font-semibold text-xs tracking-wide uppercase mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-600"></div>
            Platform 01 — Prysm
          </div>
          
          {/* H1 */}
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0A0E1A] leading-[1.1] tracking-tight mb-6 uppercase">
            Grateful Patients Become<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500">
              Transformational Donors.
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
            Prysm connects Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically identify, qualify, and engage grateful patients as major gift prospects — before the window of opportunity closes.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all hover:-translate-y-0.5">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-lg border-2 border-gray-200 text-[#0A0E1A] font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group">
              View Client Results 
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0A0E1A] transition-colors" />
            </button>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-400">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-violet-500" />
              Epic Integration
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              HIPAA Compliant
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-500" />
              Real-Time Scoring
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex-1 bg-[#0D1117] flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

        {/* Product UI Mock */}
        <div className="w-full max-w-[600px] bg-[#0A0D14] border border-white/5 rounded-2xl shadow-2xl flex flex-col overflow-hidden relative z-10">
          
          {/* (A) Header */}
          <div className="bg-[#161B22] border-b border-white/[0.06] px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(124,58,237,0.8)]"></div>
              <div className="text-sm font-bold text-violet-400">Prysm</div>
              <div className="text-white/20">/</div>
              <div className="text-sm text-white/60 font-light">Prospect Pipeline</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs font-bold text-green-400 tracking-wider">LIVE</span>
              </div>
              <div className="w-px h-3 bg-white/10"></div>
              <div className="text-xs text-white/30 font-medium">Mar 27, 2025</div>
            </div>
          </div>

          {/* (B) KPI Cards */}
          <div className="px-5 pt-4 pb-3 grid grid-cols-3 gap-3">
            {/* Card 1 */}
            <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-3 flex flex-col">
              <div className="text-[11px] text-white/50 font-medium uppercase tracking-wider mb-1">Encounters</div>
              <div className="text-2xl font-black text-white mb-1">12,847</div>
              <div className="text-[10px] text-violet-400 font-medium">+284 today</div>
            </div>
            {/* Card 2 */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 flex flex-col">
              <div className="text-[11px] text-white/50 font-medium uppercase tracking-wider mb-1">Qualified</div>
              <div className="text-2xl font-black text-white mb-1">1,422</div>
              <div className="text-[10px] text-blue-400 font-medium">14.9% rate</div>
            </div>
            {/* Card 3 */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex flex-col">
              <div className="text-[11px] text-white/50 font-medium uppercase tracking-wider mb-1">Ready Today</div>
              <div className="text-2xl font-black text-white mb-1">47</div>
              <div className="text-[10px] text-emerald-400 font-medium">Contact now</div>
            </div>
          </div>

          {/* (C) Prospect Table */}
          <div className="flex-1 flex flex-col">
            {/* Table Header */}
            <div className="bg-white/[0.03] px-5 py-2 grid grid-cols-[1.5fr_0.8fr_1fr_0.8fr_0.8fr_1.2fr_auto] gap-2 items-center text-[10px] text-white/30 uppercase tracking-widest font-semibold border-y border-white/[0.04]">
              <div>Patient</div>
              <div>Score</div>
              <div>Physician</div>
              <div>Encounter</div>
              <div>Capacity</div>
              <div>Status</div>
              <div className="w-4"></div>
            </div>
            
            {/* Table Rows */}
            <div className="flex flex-col">
              {/* Row 1 */}
              <div className="px-5 py-3 grid grid-cols-[1.5fr_0.8fr_1fr_0.8fr_0.8fr_1.2fr_auto] gap-2 items-center border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors group cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-[10px] font-bold border border-violet-500/30">HC</div>
                  <span className="text-sm font-medium text-white">H. Chen</span>
                </div>
                <div><span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-violet-500/20 text-violet-300 border border-violet-500/20">93.1</span></div>
                <div className="text-xs text-white/60">Dr. Martinez</div>
                <div className="text-xs text-white/60">8 days</div>
                <div className="text-xs font-medium text-white/80">$285K</div>
                <div><span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Ready to Contact</span></div>
                <MoreHorizontal className="w-4 h-4 text-white/20 group-hover:text-white/60" />
              </div>

              {/* Row 2 */}
              <div className="px-5 py-3 grid grid-cols-[1.5fr_0.8fr_1fr_0.8fr_0.8fr_1.2fr_auto] gap-2 items-center border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors group cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold border border-blue-500/30">RT</div>
                  <span className="text-sm font-medium text-white">R. Thompson</span>
                </div>
                <div><span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/20">87.4</span></div>
                <div className="text-xs text-white/60">Dr. Patel</div>
                <div className="text-xs text-white/60">14 days</div>
                <div className="text-xs font-medium text-white/80">$420K</div>
                <div><span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">In Research</span></div>
                <MoreHorizontal className="w-4 h-4 text-white/20 group-hover:text-white/60" />
              </div>

              {/* Row 3 */}
              <div className="px-5 py-3 grid grid-cols-[1.5fr_0.8fr_1fr_0.8fr_0.8fr_1.2fr_auto] gap-2 items-center border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors group cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold border border-blue-500/30">MJ</div>
                  <span className="text-sm font-medium text-white">M. Johnson</span>
                </div>
                <div><span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/20">81.2</span></div>
                <div className="text-xs text-white/60">Dr. Williams</div>
                <div className="text-xs text-white/60">21 days</div>
                <div className="text-xs font-medium text-white/80">$190K</div>
                <div><span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Scheduled</span></div>
                <MoreHorizontal className="w-4 h-4 text-white/20 group-hover:text-white/60" />
              </div>

              {/* Row 4 */}
              <div className="px-5 py-3 grid grid-cols-[1.5fr_0.8fr_1fr_0.8fr_0.8fr_1.2fr_auto] gap-2 items-center border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors group cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-500/20 text-gray-400 flex items-center justify-center text-[10px] font-bold border border-gray-500/30">DK</div>
                  <span className="text-sm font-medium text-white">D. Kim</span>
                </div>
                <div><span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-white/5 text-white/60 border border-white/10">74.8</span></div>
                <div className="text-xs text-white/60">Dr. Singh</div>
                <div className="text-xs text-white/60">31 days</div>
                <div className="text-xs font-medium text-white/80">$95K</div>
                <div><span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Ready to Contact</span></div>
                <MoreHorizontal className="w-4 h-4 text-white/20 group-hover:text-white/60" />
              </div>

              {/* Row 5 */}
              <div className="px-5 py-3 grid grid-cols-[1.5fr_0.8fr_1fr_0.8fr_0.8fr_1.2fr_auto] gap-2 items-center hover:bg-white/[0.03] transition-colors group cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-500/20 text-gray-400 flex items-center justify-center text-[10px] font-bold border border-gray-500/30">AR</div>
                  <span className="text-sm font-medium text-white">A. Reyes</span>
                </div>
                <div><span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold bg-white/5 text-white/60 border border-white/10">68.3</span></div>
                <div className="text-xs text-white/60">Dr. Chen</div>
                <div className="text-xs text-white/60">44 days</div>
                <div className="text-xs font-medium text-white/80">$340K</div>
                <div><span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">In Research</span></div>
                <MoreHorizontal className="w-4 h-4 text-white/20 group-hover:text-white/60" />
              </div>
            </div>
          </div>

          {/* (D) Bottom Status Bar */}
          <div className="bg-[#161B22] px-5 py-2.5 flex items-center justify-between text-[10px] text-white/30 border-t border-white/[0.06]">
            <div>3,098 patients screened this cycle</div>
            <div className="flex items-center gap-2">
              <span>Last sync: 2 min ago</span>
              <span className="text-white/10">•</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-cyan-500/50" /> Epic EMR</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
