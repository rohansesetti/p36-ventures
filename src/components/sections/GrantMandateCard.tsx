"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const TYPEWRITER_LINE = "$30,000 in cloud development credits";

export function GrantMandateCard() {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? TYPEWRITER_LINE : "");
  const [done, setDone] = useState(reduce);

  useEffect(() => {
    if (reduce) {
      setTyped(TYPEWRITER_LINE);
      setDone(true);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(TYPEWRITER_LINE.slice(0, i));
      if (i >= TYPEWRITER_LINE.length) {
        setDone(true);
        window.clearInterval(id);
      }
    }, 38);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="border border-navy-900/15 bg-white p-8 sm:p-10">
      <p className="label-mono-gold">Developer credits program</p>
      <h3 className="mt-5 min-h-[2.75rem] font-serif text-2xl font-semibold italic tracking-tight text-navy-900 sm:min-h-[3.25rem] sm:text-3xl">
        {typed}
        {!done ? (
          <span
            className="ml-1 inline-block h-[1.05em] w-px translate-y-0.5 animate-pulse bg-navy-900"
            aria-hidden
          />
        ) : null}
      </h3>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-navy-900/85 sm:text-base">
        P36 has secured an exclusive pipeline to activate $30,000 in development
        credits through the AWS, IBM, and Google ecosystems.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-3">
        {[
          "Zero equity dilution",
          "Zero repayment obligations",
          "28-day activation cycle",
        ].map((item) => (
          <li
            key={item}
            className="border-l-2 border-gold bg-background px-4 py-3 text-xs font-medium uppercase tracking-wider text-navy-900"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-navy-900/70">
        A structural edge for P36 partners to accelerate technical validation on
        an institutional dime.
      </p>
      <div className="mt-10">
        <ButtonLink href="/contact" variant="navy">
          Activate mandate
        </ButtonLink>
      </div>
    </div>
  );
}
