"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Subtle fade/rise-in when scrolled into view. Honors prefers-reduced-motion via MotionConfig in the root layout. */
export default function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
