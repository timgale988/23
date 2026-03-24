import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BarChart3, Menu, X } from "lucide-react";
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
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <BarChart3 className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              Actionable<span className="text-accent ml-1">Insight</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent relative py-2",
                  location === link.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
                {location === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
            <div className="pl-4 border-l border-border hidden lg:block">
              <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="font-semibold shadow-lg shadow-primary/20 rounded-full px-6">
                Get Started
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
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
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-4 rounded-xl text-base font-medium transition-colors",
                    location === link.path
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:bg-accent/5 hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Button className="w-full rounded-xl" onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}>
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
