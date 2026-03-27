import React from 'react';
import { ArrowRight, Check, Activity, ShieldCheck, Database } from 'lucide-react';

export function PrysmSignalMapA() {
  return (
    <div className="w-full flex justify-center bg-white min-h-[720px] font-sans">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row overflow-hidden border border-slate-200 shadow-xl rounded-2xl my-8">
        
        {/* LEFT COLUMN */}
        <div className="flex-1 bg-white p-10 lg:p-14 flex flex-col justify-center relative z-10">
          <div className="max-w-xl">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-100 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
              </span>
              <span className="text-xs font-bold tracking-wide text-violet-700 uppercase">
                Platform 01 — Prysm
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 uppercase leading-[1.1] tracking-tight mb-6">
              Grateful Patients Become <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                Transformational Donors.
              </span>
            </h1>

            {/* Body */}
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Prysm connects directly to your Epic EMR and CRM to identify high-capacity prospects in real-time. Turn daily patient encounters into a predictable pipeline for major gifts.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="inline-flex justify-center items-center px-6 py-3.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-500/25">
                Request a Demo
              </button>
              <button className="inline-flex justify-center items-center px-6 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all">
                View Client Results
                <ArrowRight className="w-4 h-4 ml-2 text-slate-400" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Database className="w-4 h-4 text-violet-500" />
                <span>Epic Integration</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <ShieldCheck className="w-4 h-4 text-violet-500" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Activity className="w-4 h-4 text-violet-500" />
                <span>Real-Time Scoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 bg-[#0D1117] border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
          
          {/* Background Layer */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 45% 50%, rgba(124,58,237,0.14) 0%, transparent 60%)'
            }}
          />

          <div className="w-full max-w-[600px] relative z-10 flex flex-col items-center">
            {/* SVG Diagram */}
            <svg viewBox="0 0 600 520" className="w-full h-[520px] overflow-visible">
              
              <defs>
                <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="inputLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(124,58,237,0.1)" />
                  <stop offset="100%" stopColor="rgba(124,58,237,0.65)" />
                </linearGradient>
                <linearGradient id="outputLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.65)" />
                  <stop offset="100%" stopColor="rgba(6,182,212,0.1)" />
                </linearGradient>
                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Labels */}
              <text x="83" y="70" fill="rgba(255,255,255,0.25)" fontSize="9" fontWeight="800" letterSpacing="4" textAnchor="middle">DATA SOURCES</text>
              <text x="517" y="70" fill="rgba(255,255,255,0.25)" fontSize="9" fontWeight="800" letterSpacing="4" textAnchor="middle">DELIVERY LAYER</text>

              {/* Input Lines */}
              {[123, 213, 298, 383].map((y, i) => (
                <path 
                  key={`in-line-${i}`}
                  d={`M 175 ${y} C 220 ${y}, 220 260, 260 260`}
                  fill="none" 
                  stroke="url(#inputLineGrad)" 
                  strokeWidth="2" 
                />
              ))}

              {/* Output Lines */}
              {[123, 213, 298, 383].map((y, i) => (
                <path 
                  key={`out-line-${i}`}
                  d={`M 340 260 C 380 260, 380 ${y}, 425 ${y}`}
                  fill="none" 
                  stroke="url(#outputLineGrad)" 
                  strokeWidth="2" 
                />
              ))}

              {/* Data Packets (Dots on lines) */}
              <circle cx="210" cy="180" r="5" fill="#7C3AED" opacity="0.8" />
              <circle cx="240" cy="280" r="5" fill="#7C3AED" opacity="0.8" />
              <circle cx="190" cy="350" r="5" fill="#7C3AED" opacity="0.8" />

              <circle cx="360" cy="180" r="5" fill="#06B6D4" opacity="0.8" />
              <circle cx="390" cy="270" r="5" fill="#06B6D4" opacity="0.8" />
              <circle cx="370" cy="340" r="5" fill="#06B6D4" opacity="0.8" />

              {/* Input Nodes */}
              {[
                { y: 100, label: "EPIC EMR", sub: "FHIR Integration" },
                { y: 190, label: "WINDFALL", sub: "Wealth Screening" },
                { y: 275, label: "DONORSEARCH", sub: "Giving History" },
                { y: 360, label: "70K+ PHYSICIANS", sub: "Physician Panels" },
              ].map((node, i) => (
                <g key={`in-${i}`} transform={`translate(10, ${node.y})`}>
                  <rect width="165" height="46" rx="10" fill="#161B27" stroke="rgba(124,58,237,0.45)" strokeWidth="1.5" />
                  <rect x="0" y="0" width="4" height="46" rx="2" fill="#7C3AED" />
                  <circle cx="22" cy="23" r="4" fill="#7C3AED" />
                  <text x="36" y="20" fill="white" fontSize="13" fontWeight="700">{node.label}</text>
                  <text x="36" y="35" fill="rgba(255,255,255,0.4)" fontSize="10" fontWeight="500">{node.sub}</text>
                </g>
              ))}

              {/* Output Nodes */}
              {[
                { y: 100, label: "BLACKBAUD CRM", sub: "Prospect Push" },
                { y: 190, label: "SALESFORCE NPSP", sub: "Native Integration" },
                { y: 275, label: "GIFT OFFICERS", sub: "Daily Queue" },
                { y: 360, label: "ROI ANALYTICS", sub: "Live Reports" },
              ].map((node, i) => (
                <g key={`out-${i}`} transform={`translate(425, ${node.y})`}>
                  <rect width="165" height="46" rx="10" fill="#0C1F2E" stroke="rgba(6,182,212,0.45)" strokeWidth="1.5" />
                  <rect x="161" y="0" width="4" height="46" rx="2" fill="#06B6D4" />
                  <circle cx="143" cy="23" r="4" fill="#06B6D4" />
                  <text x="129" y="20" fill="white" fontSize="13" fontWeight="700" textAnchor="end">{node.label}</text>
                  <text x="129" y="35" fill="rgba(255,255,255,0.4)" fontSize="10" fontWeight="500" textAnchor="end">{node.sub}</text>
                </g>
              ))}

              {/* Floating Stat Cards */}
              <g transform="translate(180, 100)">
                <rect width="105" height="26" rx="5" fill="#1A0E30" stroke="rgba(124,58,237,0.5)" />
                <text x="52.5" y="17" fill="#C4B5FD" fontSize="11" fontWeight="700" textAnchor="middle">93.1 AVG SCORE</text>
              </g>

              <g transform="translate(320, 140)">
                <rect width="115" height="26" rx="5" fill="#0A2235" stroke="rgba(6,182,212,0.5)" />
                <text x="57.5" y="17" fill="#67E8F9" fontSize="11" fontWeight="700" textAnchor="middle">305% MORE GIFTS</text>
              </g>

              <g transform="translate(242.5, 410)">
                <rect width="115" height="26" rx="5" fill="#0C2A1C" stroke="rgba(16,185,129,0.5)" />
                <text x="57.5" y="17" fill="#6EE7B7" fontSize="11" fontWeight="700" textAnchor="middle">$4.32M YEAR 1</text>
              </g>

              {/* Central Node */}
              <g transform="translate(300, 260)">
                <circle r="128" fill="none" stroke="rgba(124,58,237,0.12)" strokeWidth="1" strokeDasharray="4 7" />
                <circle r="110" fill="none" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" />
                <circle r="92" fill="url(#centerGrad)" stroke="white" strokeWidth="6" filter="url(#glowFilter)" />
                <text y="-6" fill="white" fontSize="24" fontWeight="900" letterSpacing="3" textAnchor="middle">PRYSM</text>
                <text y="14" fill="rgba(255,255,255,0.65)" fontSize="12" fontWeight="700" letterSpacing="2" textAnchor="middle">AI ENGINE</text>
              </g>

            </svg>

            {/* Bottom Metrics Row */}
            <div className="flex flex-row flex-wrap justify-center gap-3 mt-4 w-full px-4">
              <div className="bg-[#161B27] border border-slate-700 rounded-full px-4 py-2 text-xs font-semibold text-slate-300 shadow flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                12,847 encounters processed
              </div>
              <div className="bg-[#161B27] border border-slate-700 rounded-full px-4 py-2 text-xs font-semibold text-slate-300 shadow flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                1,422 prospects qualified
              </div>
              <div className="bg-[#161B27] border border-slate-700 rounded-full px-4 py-2 text-xs font-semibold text-slate-300 shadow flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                47 ready today
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
