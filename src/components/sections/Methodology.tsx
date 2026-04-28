"use client";

import { useState } from "react";

const steps = [
  {
    id: "01",
    title: "Diagnostic Infrastructure",
    body: "We identify the legal and financial gaps that stagnate valuations.",
  },
  {
    id: "02",
    title: "Capital Stack Optimization",
    body: "We engineer the ideal blend of non-dilutive and equity funding.",
  },
  {
    id: "03",
    title: "Fractional Leadership",
    body: "We embed operational C-suite expertise to drive market velocity.",
  },
  {
    id: "04",
    title: "Liquidity Readiness",
    body: "We professionalize data rooms and governance for a high-value exit.",
  },
] as const;

export function Methodology() {
  const [hovered, setHovered] = useState<number | null>(null);

  const lineActive = hovered !== null;

  return (
    <section
      id="lifecycle"
      className="border-b border-border-subtle bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-900/50">
            Lifecycle
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tighter text-navy-900 sm:text-5xl">
            P36 Lifecycle
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-900/85">
            A modular framework we run with every engagement—repeatable stages,
            institutional outputs, and clear handoffs between workstreams.
          </p>
        </div>

        <div
          className="relative hidden md:block"
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className={`pointer-events-none absolute bottom-0 left-[22px] top-0 w-[0.5px] transition-[background-color,opacity] duration-300 ${
              lineActive ? "bg-navy-900/22" : "bg-navy-900/10"
            }`}
            aria-hidden
          />

          <ul className="relative space-y-0">
            {steps.map((step, index) => {
              const dim =
                hovered !== null && hovered !== index
                  ? "opacity-50"
                  : "opacity-100";
              const isHover = hovered === index;
              return (
                <li
                  key={step.id}
                  className={`relative border-b border-border-subtle py-16 pl-16 transition-opacity duration-300 last:border-b-0 ${dim}`}
                  onMouseEnter={() => setHovered(index)}
                >
                  <span className="font-serif text-sm italic tabular-nums text-navy-900/45">
                    Step {step.id}
                  </span>
                  <h3
                    className={`mt-3 text-2xl font-light tracking-tight text-navy-900 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isHover ? "translate-x-1" : "translate-x-0"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy-900/85">
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="relative -mx-6 overflow-x-auto px-6 pb-1 md:hidden"
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex min-w-max gap-4">
            {steps.map((step, index) => {
              const dim =
                hovered !== null && hovered !== index
                  ? "opacity-50"
                  : "opacity-100";
              return (
                <article
                  key={`m-${step.id}`}
                  className={`w-[min(280px,82vw)] shrink-0 border-0.5 border-navy/10 bg-white p-6 shadow-[0_1px_3px_rgba(10,25,47,0.05)] transition-opacity duration-300 ${dim}`}
                  onMouseEnter={() => setHovered(index)}
                >
                  <span className="font-serif text-xs italic tabular-nums text-navy-900/45">
                    Step {step.id}
                  </span>
                  <h3 className="mt-3 text-xl font-light tracking-tight text-navy-900 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-navy-900/85">
                    {step.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
