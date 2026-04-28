"use client";

import { NavyNoise } from "@/components/NavyNoise";
import { motion } from "framer-motion";

const WORDS_BEFORE =
  "We bridge the gap between founder vision and investor mandate. By architecting the capital stack and professionalizing the operational core, we transition ventures from high-growth potential to"
    .split(/\s+/)
    .filter(Boolean);

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.06,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden border-t-0.5 border-b-0.5 border-white/10 bg-[radial-gradient(ellipse_100%_120%_at_50%_28%,#112240_0%,#0A192F_52%,#0A192F_100%)] text-white"
    >
      <NavyNoise />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="border-t-0.5 border-white/10 pt-12">
          <div className="rounded-sm border-0.5 border-[#334e68]/90 bg-navy-900/25 p-8 shadow-[inset_0_0_0_0.5px_rgba(10,25,47,0.55)] md:p-12 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#93846F]">
              Mission
            </p>
            <motion.p
              className="mt-10 max-w-3xl text-2xl font-light leading-relaxed tracking-tight text-white sm:text-3xl lg:text-3xl lg:leading-loose"
              variants={container}
              initial="hidden"
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
                Institutional Grade
              </motion.span>
              <motion.span variants={word} className="inline-block">
                .
              </motion.span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
