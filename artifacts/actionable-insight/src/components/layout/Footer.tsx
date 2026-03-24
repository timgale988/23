import { Link } from "wouter";
import { BarChart3, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                <BarChart3 className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground">
                Actionable<span className="text-accent ml-1">Insight</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Transforming complex data pipelines into intelligent, actionable outcomes for modern enterprises. Built for scale, designed for clarity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-6 font-display">Products</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/prysm" className="text-muted-foreground hover:text-accent transition-colors">
                  Prysm Analytics
                </Link>
              </li>
              <li>
                <Link href="/aperion" className="text-muted-foreground hover:text-accent transition-colors">
                  Aperion Engine
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Integration API
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-6 font-display">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Actionable Insight Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <span>Enterprise Grade</span>
            <span>SOC2 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
