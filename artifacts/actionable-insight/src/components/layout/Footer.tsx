export function Footer() {
  return (
    <footer className="bg-[#0A0E1A] text-white pt-12 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
              />
              <span className="font-black text-lg tracking-tight uppercase text-white">
                Actionable Insight
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs font-light mb-5">
              AI platforms built for healthcare philanthropy and nonprofit fundraising.
            </p>
            <div className="flex items-center gap-1.5 flex-wrap">
              {["Epic", "Blackbaud", "Salesforce"].map((name) => (
                <span
                  key={name}
                  className="px-2.5 py-1 rounded-md text-xs font-semibold text-white/35 border border-white/10"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Platform</h4>
            <div>
              <div className="text-sm font-semibold text-white/70">Aperion</div>
              <div className="text-xs text-white/30 mt-0.5">AI-Augmented Fundraising</div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Contact</h4>
            <a href="#" className="text-sm text-white/65 hover:text-white transition-colors font-medium">
              Book a Demo
            </a>
            <a href="#" className="text-sm text-white/65 hover:text-white transition-colors font-medium">
              Sign In
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 font-light">
            © 2025 Actionable Insight AI · actionableinsightai.com
          </p>
          <div
            className="h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)" }}
          />
        </div>
      </div>
    </footer>
  );
}
