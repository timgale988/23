import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Prysm", path: "/prysm" },
    { name: "Aperion", path: "/aperion" },
    { name: "Results", path: "/results" },
    { name: "About", path: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-white",
        isScrolled ? "shadow-sm border-b border-gray-100" : "border-b border-gray-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center gap-2.5">
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

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-sm font-semibold transition-all",
                  location === link.path
                    ? "text-[#0A0E1A] bg-gray-100"
                    : "text-gray-500 hover:text-[#0A0E1A] hover:bg-gray-50"
                )}
              >
                {link.name}
                {location === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full"
                    style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)" }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-semibold text-gray-500 hover:text-[#0A0E1A] px-3 py-2 transition-colors">
              Sign In
            </a>
            <button
              className="px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 hover:shadow-md"
              style={{
                background: "linear-gradient(135deg,#7C3AED,#2563EB)",
                boxShadow: "0 2px 12px rgba(124,58,237,0.3)",
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
            <div className="px-6 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-semibold transition-colors",
                    location === link.path
                      ? "bg-gray-100 text-[#0A0E1A]"
                      : "text-gray-500 hover:bg-gray-50 hover:text-[#0A0E1A]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3">
                <button
                  className="w-full py-3 rounded-xl text-white text-sm font-bold"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
