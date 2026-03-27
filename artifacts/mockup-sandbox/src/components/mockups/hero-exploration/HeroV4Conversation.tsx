import React, { useState } from 'react';
import { Shield, ChevronRight } from 'lucide-react';

export function HeroV4Conversation() {
  const [discharges, setDischarges] = useState(50000);

  const grateful = Math.round(discharges * 0.23);
  const qualified = Math.round(grateful * 0.11);
  const value = Math.round(qualified * 18500);

  return (
    <section className="relative min-h-[600px] w-full flex flex-col items-center justify-center py-24 overflow-hidden" style={{ backgroundColor: '#0A0E1A' }}>
      
      {/* Background glow effects */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#06B6D4]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[800px] mx-auto px-8 flex flex-col items-center text-center">
        
        {/* Pill */}
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-semibold tracking-wider mb-8">
          GRATEFUL PATIENT OPPORTUNITY CALCULATOR
        </div>

        {/* Headline */}
        <h1 className="text-white font-bold mb-12" style={{ fontSize: '36px', lineHeight: '1.2' }}>
          What is your health system's estimated philanthropic opportunity?
        </h1>

        {/* Calculator Widget */}
        <div className="w-full bg-white/[0.03] border border-white/[0.05] rounded-3xl p-8 md:p-12 backdrop-blur-sm mb-12 flex flex-col items-center shadow-2xl">
          
          {/* Huge Number */}
          <div className="mb-2 transition-all duration-300 ease-out flex items-center justify-center">
            <span 
              className="font-black"
              style={{
                fontSize: 'clamp(60px, 7vw, 100px)',
                lineHeight: '1',
                background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em'
              }}
            >
              ${value.toLocaleString()}
            </span>
          </div>
          
          <div className="text-gray-400 font-medium text-sm uppercase tracking-widest mb-10">
            estimated annual philanthropic opportunity
          </div>

          {/* Slider Area */}
          <div className="w-full max-w-md mx-auto mb-10">
            <div className="flex justify-between items-end mb-4">
              <span className="text-gray-300 font-semibold text-lg">{discharges.toLocaleString()}</span>
              <span className="text-gray-500 text-sm">annual discharges</span>
            </div>
            <input 
              type="range" 
              min={10000} 
              max={250000} 
              step={5000} 
              value={discharges}
              onChange={(e) => setDischarges(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer outline-none transition-all"
              style={{ accentColor: '#7C3AED' }}
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
              <span>10K</span>
              <span>250K+</span>
            </div>
          </div>

          {/* Three Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="bg-white/[0.07] border border-white/[0.1] rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all hover:bg-white/[0.09]">
              <span className="text-white font-bold text-xl mb-1">{qualified.toLocaleString()}</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider">qualified prospects</span>
            </div>
            <div className="bg-white/[0.07] border border-white/[0.1] rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all hover:bg-white/[0.09]">
              <span className="text-white font-bold text-xl mb-1">{grateful.toLocaleString()}</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider">grateful patients identified</span>
            </div>
            <div className="bg-white/[0.07] border border-white/[0.1] rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all hover:bg-white/[0.09]">
              <span className="text-[#06B6D4] font-bold text-xl mb-1">$18,500</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider">avg major gift</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[400px] h-px bg-white/10 mb-12"></div>

        {/* Action Area */}
        <h2 className="text-white font-bold text-2xl mb-8">
          See exactly how Prysm finds them.
        </h2>

        <a 
          href="#book"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white rounded-full transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
            boxShadow: '0 0 30px rgba(124, 58, 237, 0.4)'
          }}
        >
          <span>Book a Free Opportunity Assessment</span>
          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 rounded-full border border-white/20"></div>
        </a>

        {/* Social Proof */}
        <div className="mt-16 w-full flex flex-col items-center">
          <div className="flex items-center justify-center space-x-2 text-gray-500 mb-6 text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>HIPAA Compliant & Epic Native</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-600 font-semibold text-sm">
            <span>Providence Health</span>
            <span>City of Hope</span>
            <span>LSU Health</span>
            <span>UCF Health</span>
            <span>Rutgers Health</span>
          </div>
        </div>

      </div>
    </section>
  );
}
