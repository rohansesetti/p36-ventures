"use client";

import { NavyNoise } from "@/components/NavyNoise";
import { Container } from "@/components/ui/Container";
import { EASE_SNAP } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

const WORDS_BEFORE =
  "We bridge the gap between founder vision and investor mandate. By architecting the capital stack and professionalizing the operational core, we transition ventures from high-growth potential to"
    .split(/\s+/)
    .filter(Boolean);

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.022,
      delayChildren: 0.04,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: EASE_SNAP,
    },
  },
};

export function Mission() {
  const reduce = useReducedMotion();

  return (
    <section
      id="mission"
      className="relative overflow-hidden border-t-0.5 border-b-0.5 border-white/10 bg-[radial-gradient(ellipse_100%_120%_at_50%_28%,#112240_0%,#0A192F_52%,#0A192F_100%)] text-white"
    >
      <NavyNoise />
      <Container className="relative z-10 section-py">
        <div className="border-t-0.5 border-white/10 pt-12">
          <div className="rounded-sm border-0.5 border-navy-muted/60 bg-navy-900/25 p-8 md:p-12 lg:p-14">
            <p className="label-mono-gold">Mission</p>
            <motion.p
              className="mt-10 max-w-3xl text-2xl font-light leading-relaxed tracking-tight text-white sm:text-3xl lg:leading-loose"
              variants={container}
              initial={reduce ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-80px", amount: 0.25 }}
            >
              {WORDS_BEFORE.map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  className="mr-[0.22em] inline-block"
                >
                  {w}
                </motion.span>
              ))}
              <motion.span
                variants={word}
                className="mr-[0.15em] inline-block font-serif font-semibold italic text-white"
              >
                Engineered for Dominance
              </motion.span>
              <motion.span variants={word} className="inline-block">
                .
              </motion.span>
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
}
