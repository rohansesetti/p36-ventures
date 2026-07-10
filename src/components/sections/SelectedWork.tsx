"use client";

import { Reveal } from "@/components/Reveal";
import { selectedWork, type WorkType } from "@/data/selectedWork";
import { useState } from "react";

type Filter = "all" | WorkType;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "studio", label: "Studio" },
  { id: "capital", label: "Capital" },
];

export function SelectedWork() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = selectedWork.filter(
    (item) => filter === "all" || item.type === filter,
  );

  return (
    <section id="work" className="section-v2 relative z-[1]">
      <div className="wrap">
        <Reveal>
          <p className="label-v2 mb-[26px]">Selected work</p>
        </Reveal>

        <Reveal>
          <div className="mb-2 flex flex-wrap gap-7">
            {filters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={[
                    "cursor-pointer border-none bg-transparent pb-1 font-sans text-xs font-normal uppercase tracking-[0.06em] transition-[color,border-color]",
                    active && f.id === "studio"
                      ? "border-b border-pop text-pop"
                      : active && f.id === "capital"
                        ? "border-b border-accent text-accent"
                        : active
                          ? "border-b border-ink-faint text-ink"
                          : "border-b border-transparent text-ink-faint hover:text-ink",
                  ].join(" ")}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <div className="border-t border-line">
            {visible.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`relative overflow-hidden border-b border-line ${isOpen ? "open" : ""}`}
                >
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 w-0 bg-gradient-to-l from-paper-2 to-transparent transition-[width] duration-400 group-hover:w-[38%]"
                    aria-hidden
                  />
                  <button
                    type="button"
                    className="group relative z-[1] grid w-full cursor-pointer grid-cols-[20px_1fr] gap-x-4 gap-y-2 border-none bg-transparent py-6 text-left sm:grid-cols-[28px_1fr_2fr_1fr_20px] sm:items-center sm:gap-x-[30px] sm:py-[30px]"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="heading-serif text-[13px] italic text-ink-faint">
                      {item.index}
                    </span>
                    <div>
                      <h4 className="heading-serif text-2xl font-normal transition-transform duration-350 group-hover:translate-x-1.5">
                        {item.name}
                      </h4>
                      <div className="mt-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                        <span
                          className={
                            item.type === "studio"
                              ? "dot-sm-studio"
                              : "dot-sm-capital"
                          }
                          aria-hidden
                        />
                        {item.sector}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-ink-soft sm:col-start-3">
                      {item.desc}
                    </p>
                    <p className="text-[13px] text-accent sm:text-right">
                      {item.metric}
                    </p>
                    <span
                      className={`heading-serif text-lg text-ink-faint transition-[transform,color] sm:text-right ${
                        isOpen ? "rotate-45 text-accent" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height] duration-[450ms] ease-out ${
                      isOpen ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <div className="relative z-[1] grid grid-cols-[28px_1fr] gap-[30px] px-0 pb-[34px]">
                      <span />
                      <p className="max-w-[560px] text-[13.5px] leading-[1.75] text-ink-soft">
                        {item.expand}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
