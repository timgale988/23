import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fakeNames = [
  "Dr. A. Chen", "J. Whitmore", "M. Patel", "S. Rodriguez", "L. Kim", "R. Thompson", "E. Davis", "K. Anderson", "D. Martinez", "T. Robinson",
  "W. Lee", "H. Garcia", "C. Clark", "A. Lewis", "P. Walker", "M. Hall", "J. Young", "B. Allen", "S. King", "V. Wright",
  "G. Scott", "N. Torres", "R. Nguyen", "F. Hill", "L. Flores", "E. Green", "J. Adams", "D. Nelson", "M. Baker", "S. Carter",
  "A. Mitchell", "K. Perez", "T. Roberts", "C. Turner", "P. Phillips", "H. Campbell", "R. Parker", "M. Evans", "B. Edwards", "S. Collins",
  "J. Stewart", "L. Sanchez"
];

const capacities = [
  "$50K-$80K", "$200K-$400K", "$10K-$25K", "$1M-$2.5M", "$100K-$250K", "$500K-$1M", "$25K-$50K", "$75K-$150K", "$300K-$600K"
];

const scores = ["92%", "94%", "87%", "99%", "91%", "88%", "95%", "96%", "89%"];

const cards = Array.from({ length: 42 }).map((_, i) => ({
  name: fakeNames[i % fakeNames.length],
  capacity: capacities[i % capacities.length],
  score: scores[i % scores.length]
}));

export function ConceptT() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030a1e] text-white">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div 
          className="grid gap-3 p-6" 
          style={{ 
            gridTemplateColumns: 'repeat(6, 1fr)',
            transform: 'rotate(-3deg) scale(1.1)',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '-5%',
            left: '-5%',
            right: '-5%',
            bottom: '-5%'
          }}
        >
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="w-[160px] h-[64px] rounded-lg p-2 flex flex-col justify-between"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>{card.name}</span>
                <span className="text-[9px] font-bold" style={{ color: 'rgba(59,130,246,0.25)' }}>{card.score}</span>
              </div>
              <span className="text-[8px] tracking-wider" style={{ color: 'rgba(6,182,212,0.2)' }}>CAPACITY: {card.capacity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOREGROUND OVERLAY */}
      <div 
        className="absolute inset-0 z-[9] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at center, #030a1e 0%, #030a1e 40%, transparent 100%)'
        }}
      />

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-8">
        <div className="font-mono text-[10px] tracking-widest px-3 py-1.5 rounded-full mb-8"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.5)'
          }}
        >
          PLATFORM 02 — APERION
        </div>

        <h1 
          className="font-black tracking-tight leading-none mb-5 mx-auto max-w-[800px]"
          style={{ fontSize: 'clamp(40px, 4.5vw, 64px)' }}
        >
          Every donor, Every officer, <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">fully prepared.</span>
        </h1>

        <p className="text-[#9ca3af] text-[18px] max-w-[520px] mx-auto mt-5 leading-relaxed">
          Aperion processes your entire donor portfolio — surfacing who's ready, what to say, and what to ask.
        </p>

        <div className="flex flex-row gap-4 justify-center items-center mt-10">
          <Button 
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-9 py-6 text-base shadow-[0_0_20px_rgba(6,182,212,0.3)] border-0"
          >
            Request a Demo
          </Button>
          <Button 
            variant="ghost" 
            className="rounded-full text-white/60 hover:text-white hover:bg-white/5 px-6 py-6 text-base font-medium transition-colors group"
          >
            See how it works <ArrowRight className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Button>
        </div>

        <div className="mt-[60px] font-mono text-[11px] text-[#4b5563] tracking-wide">
          Processing 2,847 donor records across 14 institutions
        </div>
      </div>
    </div>
  );
}

export default ConceptT;