import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0A0E1A] border-t border-white/10 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-xl tracking-widest uppercase">
                Actionable Insight AI
              </span>
            </Link>
            <p className="text-white/60 text-sm max-w-sm mb-6 font-light">
              Two platforms. One mission.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white/90 mb-6 font-display tracking-widest text-sm">PRODUCTS</h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <Link href="/prysm" className="text-white/60 hover:text-white transition-colors">
                  Prysm
                </Link>
              </li>
              <li>
                <Link href="/aperion" className="text-white/60 hover:text-white transition-colors">
                  Aperion
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white/90 mb-6 font-display tracking-widest text-sm">COMPANY</h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 font-light">
            &copy; 2025 Actionable Insight AI
          </p>
          <div className="flex gap-6 text-xs text-white/40 font-light">
            <span>actionableinsightai.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
