import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Award } from 'lucide-react';

export function HeroV2EvidenceFirst() {
  return (
    <div className="min-h-[600px] bg-white w-full flex flex-col items-center justify-center font-sans overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      
      {/* 1. Top Label */}
      <div className="mb-16 text-center">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
          Actionable Insight — Healthcare Philanthropy Intelligence
        </span>
      </div>

      {/* 2. Massive Numbers */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto mb-20 relative z-10">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center flex-1 py-8 md:py-0 w-full">
          <div 
            className="font-black leading-none tracking-tighter"
            style={{ 
              fontSize: 'clamp(88px, 11vw, 144px)',
              color: '#0A0E1A'
            }}
          >
            20x
          </div>
          <div 
            className="text-lg md:text-xl font-semibold tracking-wide uppercase mt-2"
            style={{ color: '#7C3AED' }}
          >
            Year-One ROI
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-32 bg-gray-100"></div>
        <div className="block md:hidden h-px w-32 bg-gray-100 my-4"></div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center flex-1 py-8 md:py-0 w-full">
          <div 
            className="font-black leading-none tracking-tighter"
            style={{ 
              fontSize: 'clamp(88px, 11vw, 144px)',
              color: '#0A0E1A'
            }}
          >
            305%
          </div>
          <div 
            className="text-lg md:text-xl font-semibold tracking-wide uppercase mt-2"
            style={{ color: '#2563EB' }}
          >
            Major Gift Increase
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-32 bg-gray-100"></div>
        <div className="block md:hidden h-px w-32 bg-gray-100 my-4"></div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center flex-1 py-8 md:py-0 w-full">
          <div 
            className="font-black leading-none tracking-tighter"
            style={{ 
              fontSize: 'clamp(88px, 11vw, 144px)',
              color: '#0A0E1A'
            }}
          >
            74<span className="text-[0.5em] align-baseline">d</span>
          </div>
          <div 
            className="text-lg md:text-xl font-semibold tracking-wide uppercase mt-2"
            style={{ color: '#06B6D4' }}
          >
            Time to First Gift
          </div>
        </div>
      </div>

      {/* 3. Headline & Subtext */}
      <div className="max-w-4xl mx-auto text-center mb-12 relative z-10 px-4">
        <h1 
          className="font-extrabold tracking-tight mb-6 leading-[1.1]"
          style={{ 
            fontSize: 'clamp(36px, 5vw, 52px)',
            color: '#0A0E1A'
          }}
        >
          Turn every grateful patient into a transformational donor.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto">
          Two AI platforms. One mission. Zero missed opportunities.
        </p>
      </div>

      {/* 5. CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 w-full px-4">
        <a 
          href="#prysm" 
          className="group relative flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 ease-in-out rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)' 
          }}
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          <span className="relative flex items-center">
            Explore Prysm
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
        <a 
          href="#aperion" 
          className="group flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 ease-in-out rounded-full border-2 w-full sm:w-auto hover:bg-gray-50"
          style={{ 
            color: '#0A0E1A',
            borderColor: '#E5E7EB'
          }}
        >
          Explore Aperion
        </a>
      </div>

      {/* 6. Client Strip */}
      <div className="w-full max-w-5xl mx-auto border-t border-gray-100 pt-12">
        <div className="text-center mb-8 text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Trusted By Industry Leaders
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-gray-400 font-bold text-lg md:text-xl grayscale opacity-70">
          <span>Providence Health</span>
          <span className="hidden md:inline text-gray-300">•</span>
          <span>City of Hope</span>
          <span className="hidden md:inline text-gray-300">•</span>
          <span>LSU Health</span>
          <span className="hidden md:inline text-gray-300">•</span>
          <span>UCF Health</span>
        </div>
      </div>

      {/* 7. Trust Badges */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-4 py-2 rounded-full text-sm font-medium">
          <ShieldCheck className="w-5 h-5 text-emerald-500" />
          HIPAA Compliant
        </div>
        <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-4 py-2 rounded-full text-sm font-medium">
          <Activity className="w-5 h-5 text-violet-500" />
          Epic Native
        </div>
        <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-4 py-2 rounded-full text-sm font-medium">
          <Award className="w-5 h-5 text-blue-500" />
          Live in 30 Days
        </div>
      </div>
    </div>
  );
}
