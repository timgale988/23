import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <AnimatedSection className="text-center max-w-md">
        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-8">
          <AlertCircle className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground mb-4">Page not found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The intelligence you are looking for does not exist on this path. It might have been moved or deleted.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-full shadow-lg">
            Return to Dashboard
          </Button>
        </Link>
      </AnimatedSection>
    </div>
  );
}
