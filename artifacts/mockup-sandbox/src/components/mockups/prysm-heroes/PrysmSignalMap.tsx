import React from "react";
import { ArrowRight, Shield, Activity, Database } from "lucide-react";

export function PrysmSignalMap() {
  return (
    <section className="w-full min-h-[720px] bg-white text-[#0A0E1A] font-sans flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row items-stretch border border-gray-100 rounded-2xl shadow-xl overflow-hidden bg-white">

        {/* LEFT COLUMN */}
        <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center relative z-10 bg-white">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-100/50 border border-violet-200 text-violet-700 text-xs font-semibold tracking-wider uppercase w-max mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse"></span>
            <span>Platform 01 — Prysm</span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase leading-[1.1] tracking-tight mb-6 text-[#0A0E1A]">
            Grateful Patients Become <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#2563EB]">
              Transformational Donors.
            </span>
          </h1>

          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
            Prysm connects Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically identify, qualify, and engage grateful patients as major gift prospects — before the window of opportunity closes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all hover:-translate-y-0.5">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-gray-300 hover:bg-gray-50 transition-all group flex items-center justify-center gap-2">
              View Client Results
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-gray-100">
            <div className="flex items-center text-xs text-gray-500 font-medium">
              <Database className="w-4 h-4 mr-2 text-violet-500" /> Epic Integration
            </div>
            <div className="flex items-center text-xs text-gray-500 font-medium">
              <Shield className="w-4 h-4 mr-2 text-violet-500" /> HIPAA Compliant
            </div>
            <div className="flex items-center text-xs text-gray-500 font-medium">
              <Activity className="w-4 h-4 mr-2 text-violet-500" /> Real-Time Scoring
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 bg-[#F1F5F9] relative flex flex-col items-center justify-center p-4 lg:p-6 border-l border-gray-100 min-h-[500px] lg:min-h-0">
          {/* Radial gradient background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
          />

          {/* SVG — fills the full right column */}
          <div className="relative w-full flex items-center justify-center z-10" style={{ height: "520px" }}>
            <svg viewBox="0 0 580 500" className="w-full h-full drop-shadow-xl overflow-visible">
              <defs>
                <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="inputLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(124,58,237,0.15)" />
                  <stop offset="100%" stopColor="rgba(124,58,237,0.75)" />
                </linearGradient>
                <linearGradient id="outputLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.75)" />
                  <stop offset="100%" stopColor="rgba(6,182,212,0.15)" />
                </linearGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.08" />
                </filter>
                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* ORBITAL RINGS */}
              <circle cx="290" cy="250" r="130" fill="none" stroke="#7C3AED" strokeWidth="1" strokeDasharray="5 5" opacity="0.12" />
              <circle cx="290" cy="250" r="160" fill="none" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="3 8" opacity="0.07" />

              {/* INPUT LINES */}
              <path d="M 158 115 C 220 115, 240 250, 290 250" fill="none" stroke="url(#inputLineGrad)" strokeWidth="2" />
              <path d="M 158 198 C 220 198, 240 250, 290 250" fill="none" stroke="url(#inputLineGrad)" strokeWidth="2" />
              <path d="M 158 278 C 220 278, 240 250, 290 250" fill="none" stroke="url(#inputLineGrad)" strokeWidth="2" />
              <path d="M 158 358 C 220 358, 240 250, 290 250" fill="none" stroke="url(#inputLineGrad)" strokeWidth="2" />

              {/* OUTPUT LINES */}
              <path d="M 290 250 C 360 250, 375 115, 422 115" fill="none" stroke="url(#outputLineGrad)" strokeWidth="2" />
              <path d="M 290 250 C 360 250, 375 198, 422 198" fill="none" stroke="url(#outputLineGrad)" strokeWidth="2" />
              <path d="M 290 250 C 360 250, 375 278, 422 278" fill="none" stroke="url(#outputLineGrad)" strokeWidth="2" />
              <path d="M 290 250 C 360 250, 375 358, 422 358" fill="none" stroke="url(#outputLineGrad)" strokeWidth="2" />

              {/* DATA PACKETS */}
              <circle cx="200" cy="150" r="5" fill="#7C3AED" opacity="0.7" />
              <circle cx="230" cy="218" r="5" fill="#7C3AED" opacity="0.7" />
              <circle cx="240" cy="268" r="5" fill="#7C3AED" opacity="0.7" />
              <circle cx="385" cy="168" r="5" fill="#06B6D4" opacity="0.7" />
              <circle cx="370" cy="255" r="5" fill="#06B6D4" opacity="0.7" />
              <circle cx="400" cy="318" r="5" fill="#06B6D4" opacity="0.7" />

              {/* CENTRAL NODE */}
              <g filter="url(#glow)">
                <circle cx="290" cy="250" r="82" fill="url(#centerGrad)" stroke="white" strokeWidth="5" />
                <text x="290" y="244" textAnchor="middle" fill="white" fontSize="22" fontWeight="900" letterSpacing="3">PRYSM</text>
                <text x="290" y="266" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="12" fontWeight="600" letterSpacing="2">AI ENGINE</text>
              </g>

              {/* INPUT NODES */}
              {[
                { y: 100, label: "EPIC EMR" },
                { y: 183, label: "WINDFALL" },
                { y: 263, label: "DONORSEARCH" },
                { y: 343, label: "70K+ PHYSICIANS" },
              ].map(({ y, label }) => (
                <g key={label} transform={`translate(8, ${y})`} filter="url(#shadow)">
                  <rect width="150" height="38" rx="8" fill="white" stroke="rgba(124,58,237,0.25)" strokeWidth="1.5" />
                  <circle cx="18" cy="19" r="7" fill="#7C3AED" opacity="0.18" />
                  <circle cx="18" cy="19" r="4" fill="#7C3AED" />
                  <text x="34" y="24" fill="#0A0E1A" fontSize="13" fontWeight="700">{label}</text>
                </g>
              ))}

              {/* OUTPUT NODES */}
              {[
                { y: 100, label: "BLACKBAUD CRM" },
                { y: 183, label: "SALESFORCE NPSP" },
                { y: 263, label: "GIFT OFFICERS" },
                { y: 343, label: "ROI ANALYTICS" },
              ].map(({ y, label }) => (
                <g key={label} transform={`translate(422, ${y})`} filter="url(#shadow)">
                  <rect width="150" height="38" rx="8" fill="white" stroke="rgba(6,182,212,0.25)" strokeWidth="1.5" />
                  <circle cx="132" cy="19" r="7" fill="#06B6D4" opacity="0.18" />
                  <circle cx="132" cy="19" r="4" fill="#06B6D4" />
                  <text x="118" y="24" textAnchor="end" fill="#0A0E1A" fontSize="13" fontWeight="700">{label}</text>
                </g>
              ))}

              {/* FLOATING STATS */}
              <g transform="translate(195, 158)" filter="url(#shadow)">
                <rect width="98" height="24" rx="5" fill="white" stroke="#E2E8F0" />
                <text x="49" y="17" textAnchor="middle" fill="#7C3AED" fontSize="11" fontWeight="700">93.1 avg score</text>
              </g>
              <g transform="translate(308, 168)" filter="url(#shadow)">
                <rect width="106" height="24" rx="5" fill="white" stroke="#E2E8F0" />
                <text x="53" y="17" textAnchor="middle" fill="#06B6D4" fontSize="11" fontWeight="700">305% more gifts</text>
              </g>
              <g transform="translate(190, 300)" filter="url(#shadow)">
                <rect width="100" height="24" rx="5" fill="white" stroke="#E2E8F0" />
                <text x="50" y="17" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="700">$285K capacity</text>
              </g>
            </svg>
          </div>

          {/* BOTTOM METRICS */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 relative z-10 w-full">
            <div className="bg-white border border-gray-100 rounded-full px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              12,847 encounters processed
            </div>
            <div className="bg-white border border-gray-100 rounded-full px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-violet-500 mr-2"></span>
              1,422 prospects qualified
            </div>
            <div className="bg-white border border-gray-100 rounded-full px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
              47 ready today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
