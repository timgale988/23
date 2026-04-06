import { motion } from "framer-motion";

export function ConceptS() {
  return (
    <div className="min-h-screen bg-[#03081A] flex flex-col font-sans text-white overflow-hidden">
      {/* Top Section */}
      <div className="flex-1 flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-cyan-950/30 border border-cyan-500/20 px-3 py-1 rounded-full mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
          <span className="text-cyan-400 text-[10px] font-bold tracking-[0.15em] uppercase">Aperion — Live Pipeline</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-[800] tracking-tight mb-5 max-w-4xl" 
          style={{ fontSize: "clamp(32px, 3.5vw, 50px)", lineHeight: "1.1" }}
        >
          See what your top gift officers see.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-[17px] max-w-2xl font-medium"
        >
          Every prospect, scored. Every meeting, briefed. Every ask, timed perfectly.
        </motion.p>
      </div>

      {/* Middle Section */}
      <div className="w-full max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0D1117] border border-white/10 rounded-xl p-5 flex flex-col hover:border-white/20 transition-colors shadow-xl shadow-black/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-[14px] font-bold shrink-0 shadow-lg shadow-blue-500/20">
                JW
              </div>
              <div>
                <div className="text-white text-[14px] font-semibold leading-tight mb-0.5">Dr. James Whitmore</div>
                <div className="text-gray-500 text-[11px] font-medium">Cardiology Dept. Chair</div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Stage 5 of 7</span>
              </div>
              <div className="flex gap-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full ${i < 5 ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-2">Next Action</div>
              <div className="text-gray-100 text-[13px] font-medium leading-snug">Prepare $150K major gift ask briefing</div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="text-green-400 text-[11px] font-bold uppercase tracking-wider">Briefing complete</span>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5">
              <div className="inline-flex px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-semibold tracking-wide">
                Meeting in 2 days
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#0D1117] border border-white/10 rounded-xl p-5 flex flex-col hover:border-white/20 transition-colors shadow-xl shadow-black/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white text-[14px] font-bold shrink-0 shadow-lg shadow-violet-500/20">
                CH
              </div>
              <div>
                <div className="text-white text-[14px] font-semibold leading-tight mb-0.5">Ms. Carol Huang</div>
                <div className="text-gray-500 text-[11px] font-medium truncate max-w-[160px]">VP of Innovation, City Trust</div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Stage 3 of 7</span>
              </div>
              <div className="flex gap-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full ${i < 3 ? 'bg-gradient-to-r from-violet-500 to-indigo-400' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-2">Next Action</div>
              <div className="text-gray-100 text-[13px] font-medium leading-snug">Schedule cultivation dinner invitation</div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
              <span className="text-amber-400 text-[11px] font-bold uppercase tracking-wider">Processing signals</span>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5">
              <div className="inline-flex px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-400 text-[10px] font-semibold tracking-wide">
                Meeting in 12 days
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#0D1117] border border-white/10 rounded-xl p-5 flex flex-col hover:border-white/20 transition-colors shadow-xl shadow-black/50 relative overflow-hidden"
          >
            {/* Subtle glow for the urgent card */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-400 flex items-center justify-center text-white text-[14px] font-bold shrink-0 shadow-lg shadow-cyan-500/20">
                DP
              </div>
              <div>
                <div className="text-white text-[14px] font-semibold leading-tight mb-0.5">Mr. David Patel</div>
                <div className="text-gray-500 text-[11px] font-medium">Philanthropist, Patel Foundation</div>
              </div>
            </div>
            
            <div className="mb-6 relative z-10">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Stage 6 of 7</span>
              </div>
              <div className="flex gap-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full ${i < 6 ? 'bg-gradient-to-r from-cyan-500 to-teal-400' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>

            <div className="mb-6 relative z-10">
              <div className="text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-2">Next Action</div>
              <div className="text-gray-100 text-[13px] font-medium leading-snug">Send closing proposal with board endorsement</div>
            </div>

            <div className="flex items-center gap-2 mb-6 relative z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="text-green-400 text-[11px] font-bold uppercase tracking-wider">Proposal ready</span>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5 relative z-10">
              <div className="inline-flex px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-semibold tracking-wide">
                Meeting in 1 day
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16 bg-[#04081E] flex flex-col items-center justify-center px-6 border-t border-white/5 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        
        <p className="text-white text-[18px] font-bold mb-1.5 text-center">
          Your team has 47 prospects ready to advance this week.
        </p>
        <p className="text-cyan-400 text-[16px] mb-8 text-center font-medium">
          Aperion surfaces the right ones.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-[13px] hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            Request a Demo
          </button>
          <button className="px-6 py-2.5 rounded-full bg-transparent text-gray-400 font-semibold text-[13px] hover:text-white transition-colors">
            View Case Study →
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ConceptS;
