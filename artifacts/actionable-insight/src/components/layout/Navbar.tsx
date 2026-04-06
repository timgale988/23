import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-white",
        isScrolled ? "shadow-sm border-b border-gray-100" : "border-b border-gray-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/aperion" className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
            />
            <span className="font-black text-lg tracking-tight text-[#0A0E1A] uppercase">
              Actionable<span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg,#7C3AED,#2563EB)" }}
              > Insight</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-semibold text-gray-500 hover:text-[#0A0E1A] px-3 py-2 transition-colors">
              Sign In
            </a>
            <button
              className="px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 hover:shadow-md"
              style={{
                background: "linear-gradient(135deg,#2563EB,#06B6D4)",
                boxShadow: "0 2px 12px rgba(6,182,212,0.3)",
              }}
            >
              Book a Demo
            </button>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 pt-3 pb-6">
              <button
                className="w-full py-3 rounded-xl text-white text-sm font-bold"
                style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
