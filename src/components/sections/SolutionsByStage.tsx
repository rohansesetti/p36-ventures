"use client";

import { useState } from "react";

type StageId = "launch" | "scale" | "exit";

const tabs: { id: StageId; label: string }[] = [
  { id: "launch", label: "The Launch" },
  { id: "scale", label: "The Scale-up" },
  { id: "exit", label: "The Exit" },
];

const highlights: Record<StageId, string[]> = {
  launch: ["Corporate Architecture", "GTM Execution", "Grant Strategy"],
  scale: ["Fractional CFO", "International Expansion", "Equity Raising"],
  exit: ["Data Room Architecture", "M&A Readiness", "ESG Frameworks"],
};

export function SolutionsByStage() {
  const [active, setActive] = useState<StageId>("launch");

  return (
    <section
      id="solutions"
      className="border-b border-border-subtle bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-900/50">
            Solutions
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tighter text-navy-900 sm:text-5xl">
            Solutions by Stage
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-900/85">
            Self-select where you are—we surface the workstreams that matter
            most at that inflection point.
          </p>
        </div>

        <div
          className="flex flex-wrap gap-3"
          role="tablist"
          aria-label="Company stage"
        >
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.id)}
                className={`rounded-sm border bg-transparent px-4 py-2.5 text-sm font-semibold tracking-tight transition-[color,border-color,box-shadow] ${
                  isActive
                    ? "border-navy-900/35 text-navy-900 shadow-[inset_0_-2px_0_0_#c5a059]"
                    : "border-navy-900/15 text-navy-900/45 hover:border-navy-900/28 hover:text-navy-900/85"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 space-y-3" role="tabpanel">
          {highlights[active].map((item) => (
            <li
              key={item}
              className="flex gap-3 border-b border-border-subtle border-dashed py-3 text-sm text-navy-900/85 last:border-b-0"
            >
              <span className="text-gold" aria-hidden>
                —
              </span>
              <span className="font-medium text-navy-900">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
