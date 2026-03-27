import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0A0E1A] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
              />
              <span className="font-black text-lg tracking-tight uppercase text-white">
                Actionable Insight
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light mb-6">
              AI platforms built for healthcare philanthropy and nonprofit fundraising.
              Two platforms. One mission.
            </p>
            <div className="flex items-center gap-1">
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

          <div>
            <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-5">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/prysm" className="text-sm text-white/65 hover:text-white transition-colors font-medium">
                  Prysm
                </Link>
                <div className="text-xs text-white/30 mt-0.5">Grateful Patient Intelligence</div>
              </li>
              <li>
                <Link href="/aperion" className="text-sm text-white/65 hover:text-white transition-colors font-medium">
                  Aperion
                </Link>
                <div className="text-xs text-white/30 mt-0.5">AI-Augmented Fundraising</div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/results" className="text-sm text-white/65 hover:text-white transition-colors font-medium">
                  Client Results
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/65 hover:text-white transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-white/65 hover:text-white transition-colors font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 font-light">
            © 2025 Actionable Insight AI · actionableinsightai.com
          </p>
          <div className="flex items-center gap-2">
            <div
              className="h-1 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
