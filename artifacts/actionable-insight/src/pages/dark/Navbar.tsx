import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-primary/95 backdrop-blur-md border-border/20 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className={cn("font-display font-bold text-xl tracking-widest uppercase", isScrolled || location !== "/" ? "text-primary-foreground" : "text-white")}>
              Actionable Insight AI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-semibold tracking-wider uppercase transition-colors hover:text-white relative py-2",
                  location === link.path
                    ? (isScrolled || location !== "/" ? "text-white" : "text-white")
                    : (isScrolled || location !== "/" ? "text-white/70" : "text-white/70")
                )}
              >
                {link.name}
                {location === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-cyan-500"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
            <div className="pl-4 border-l border-white/20 hidden lg:block">
              <Button variant="outline" className={cn("font-semibold rounded-none border-white/20 uppercase tracking-widest px-6", isScrolled || location !== "/" ? "text-white hover:bg-white hover:text-primary bg-transparent" : "text-white hover:bg-white hover:text-primary bg-transparent")}>
                Book a Demo
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2", isScrolled || location !== "/" ? "text-white" : "text-white")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-semibold tracking-wider uppercase transition-colors text-white",
                    location === link.path
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Button variant="outline" className="w-full rounded-none border-white/20 text-white bg-transparent hover:bg-white hover:text-primary uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                  Book a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
