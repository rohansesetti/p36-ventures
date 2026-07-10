"use client";

import { EASE_SNAP } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

export function SectionReveal({ children, className }: SectionRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { y: 36, opacity: 0.985 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px 120px 0px", amount: 0.05 }}
      transition={{
        duration: reduce ? 0 : 0.36,
        ease: EASE_SNAP,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
