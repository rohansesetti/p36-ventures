"use client";

import {
  portfolioItems,
  type InitialsAccent,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/data/portfolio";
import Image from "next/image";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

/** Currency-style figures ($600K, $1.3M, $200M) for financial skim. */
const FIGURE_RE = /\$[\d,.]+[KkMmBb]?/g;

function highlightFigures(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let last = 0;
  const re = new RegExp(FIGURE_RE.source, "g");
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      nodes.push(text.slice(last, m.index));
    }
    nodes.push(
      <span
        key={`fig-${k++}`}
        className="font-semibold tabular-nums text-navy-900"
      >
        {m[0]}
      </span>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    nodes.push(text.slice(last));
  }
  return <>{nodes}</>;
}

function PortfolioResult({
  result,
  outcomeEmphasis,
}: Pick<PortfolioItem, "result" | "outcomeEmphasis">) {
  if (!outcomeEmphasis || !result.includes(outcomeEmphasis)) {
    return highlightFigures(result);
  }
  const i = result.indexOf(outcomeEmphasis);
  return (
    <>
      {highlightFigures(result.slice(0, i))}
      <strong className="font-semibold text-navy-900">{outcomeEmphasis}</strong>
      {highlightFigures(result.slice(i + outcomeEmphasis.length))}
    </>
  );
}

/**
 * Brand-matched hover fills (full strings so Tailwind emits utilities).
 * — Prospex: wordmark navy · TERRA/SUNNATION: forest green · ISA: orange mark
 * — UCI: blue from emblem · Solaryn/Ageless: complementary category tones
 */
const INITIALS_HOVER: Record<InitialsAccent, string> = {
  navy:
    "group-hover:bg-navy-900 group-hover:border-transparent group-hover:text-white",
  forest:
    "group-hover:bg-[#1B4332] group-hover:border-transparent group-hover:text-white",
  orange:
    "group-hover:bg-orange-500 group-hover:border-transparent group-hover:text-white",
  violet:
    "group-hover:bg-violet-800 group-hover:border-transparent group-hover:text-white",
  rose:
    "group-hover:bg-rose-600 group-hover:border-transparent group-hover:text-white",
  blue:
    "group-hover:bg-blue-700 group-hover:border-transparent group-hover:text-white",
};

const filters: PortfolioCategory[] = [
  "All",
  "FinTech",
  "DeepTech",
  "SaaS",
  "Regen",
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState<PortfolioCategory>("All");

  const visible = useMemo(() => {
    if (filter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-navy-900/35">
        {filters.map((f, i) => {
          const active = filter === f;
          return (
            <span key={f} className="flex items-center gap-3">
              {i > 0 ? <span aria-hidden>/</span> : null}
              <button
                type="button"
                onClick={() => setFilter(f)}
                className={`uppercase tracking-[0.2em] transition-colors ${
                  active
                    ? "font-bold text-navy-900"
                    : "font-semibold text-navy-900/60 hover:text-navy-900/90"
                }`}
              >
                {f}
              </button>
            </span>
          );
        })}
      </div>

      <ul className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.id}>
            <article
              data-cursor-grow
              className="group border-0.5 border-navy/10 bg-white p-6 shadow-[0_1px_3px_rgba(10,25,47,0.05)] transition-[border-color,box-shadow] hover:border-navy/15 hover:shadow-[0_2px_10px_rgba(10,25,47,0.07)]"
            >
              <div className="flex items-center gap-3">
                {item.logoSrc && item.logoOnly ? (
                  <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 grayscale opacity-90 transition-[filter,opacity] duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                    <Image
                      src={item.logoSrc}
                      alt={`${item.name} logo`}
                      fill
                      className="object-contain"
                      sizes="72px"
                    />
                  </div>
                ) : (
                  <>
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-navy-900/10 bg-transparent text-lg font-semibold text-navy-900/85 grayscale transition-[filter,background-color,border-color,color] duration-300 group-hover:grayscale-0 ${INITIALS_HOVER[item.initialsAccent]}`}
                    >
                      {item.initials}
                    </div>
                    {item.logoSrc ? (
                      <div className="relative h-14 w-[min(200px,calc(100%-3.75rem))] shrink bg-transparent grayscale transition-all duration-300 group-hover:grayscale-0">
                        <Image
                          src={item.logoSrc}
                          alt={`${item.name} logo`}
                          fill
                          className="bg-transparent object-contain object-left"
                          sizes="200px"
                        />
                      </div>
                    ) : null}
                  </>
                )}
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-navy-900/72">
                {item.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tighter text-navy-900">
                {item.name}
              </h3>
              <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-navy-900/85">
                <PortfolioResult
                  result={item.result}
                  outcomeEmphasis={item.outcomeEmphasis}
                />
              </p>
              {item.websiteUrl ? (
                <a
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-900/55 underline decoration-navy-900/20 underline-offset-4 transition-colors hover:text-navy-900 hover:decoration-navy-900/40"
                >
                  Visit site
                </a>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
