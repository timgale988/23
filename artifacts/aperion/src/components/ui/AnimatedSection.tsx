import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedSection({ 
  children, 
  className, 
  delay = 0, 
  direction = "up" 
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getVariants = () => {
    const distance = 40;
    switch (direction) {
      case "up": return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
      case "down": return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
      case "left": return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
      case "right": return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
      case "none": return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
