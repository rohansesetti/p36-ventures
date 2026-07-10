"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EASE_SNAP } from "@/lib/motion";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

type StageId = "launch" | "scale" | "exit";

type Quadrant = {
  num: string;
  label: string;
  title: string;
  body: string;
};

const tabs: { id: StageId; label: string }[] = [
  { id: "launch", label: "Launch" },
  { id: "scale", label: "Scale-up" },
  { id: "exit", label: "Exit" },
];

const stageQuadrants: Record<StageId, Quadrant[]> = {
  launch: [
    {
      num: "01",
      label: "Corporate shell",
      title: "Architecture",
      body: "Entity, cap table, and governance rails built for first institutional touch.",
    },
    {
      num: "02",
      label: "Revenue rail",
      title: "GTM execution",
      body: "Pipeline mechanics, pricing discipline, and repeatability before scale debt.",
    },
    {
      num: "03",
      label: "Non-dilutive lane",
      title: "Grant strategy",
      body: "Credit stacks and subsidy lanes aligned to product milestones—not slide fiction.",
    },
    {
      num: "04",
      label: "Capital desk",
      title: "Capital strategy",
      body: "Route capital where dilution is optional and velocity is mandatory.",
    },
  ],
  scale: [
    {
      num: "01",
      label: "Control tower",
      title: "Fractional CFO",
      body: "Forecast, covenant, and board cadence tuned for a scaling cost base.",
    },
    {
      num: "02",
      label: "Geo expansion",
      title: "International",
      body: "Territory sequencing, partner rails, and compliance without slowing GTM.",
    },
    {
      num: "03",
      label: "Equity window",
      title: "Equity raising",
      body: "Narrative, data room, and process design that survives real diligence.",
    },
    {
      num: "04",
      label: "Stack discipline",
      title: "Liquidity architecture",
      body: "Sequence equity, debt, and operating cash so expansion doesn't compress runway when metrics tighten.",
    },
  ],
  exit: [
    {
      num: "01",
      label: "Diligence vault",
      title: "Data room architecture",
      body: "Single source of truth for financial, legal, and product artifacts.",
    },
    {
      num: "02",
      label: "Transaction core",
      title: "M&A readiness",
      body: "Process maps, buyer Q&A, and integration guardrails before LOI noise.",
    },
    {
      num: "03",
      label: "Risk surface",
      title: "ESG frameworks",
      body: "Disclosure and controls that pass committee review without diluting story.",
    },
    {
      num: "04",
      label: "Close lane",
      title: "Transaction execution",
      body: "Wire mechanics, disclosure discipline, and buyer coordination through sign—no last-mile drift.",
    },
  ],
};

function SolutionCard({ q }: { q: Quadrant }) {
  return (
    <article className="min-h-[10.5rem] bg-white p-5 sm:min-h-[12rem] sm:p-6">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="font-mono text-[12px] font-bold tabular-nums leading-none tracking-[0.12em] text-gold">
          {q.num}
        </p>
        <p className="label-mono-gold max-w-[12rem] leading-snug">{q.label}</p>
      </div>
      <h3 className="mt-4 text-base font-bold uppercase tracking-tight text-navy-900 sm:text-lg">
        {q.title}
      </h3>
      <p className="mt-2 text-sm font-medium leading-relaxed text-navy-900/78">
        {q.body}
      </p>
    </article>
  );
}

function SolutionsGrid({ stage }: { stage: StageId }) {
  const qs = stageQuadrants[stage];

  return (
    <div className="grid grid-cols-1 gap-px bg-navy-900 sm:grid-cols-2">
      {qs.map((q) => (
        <SolutionCard key={q.num} q={q} />
      ))}
    </div>
  );
}

export function SolutionsByStage() {
  const [active, setActive] = useState<StageId>("launch");
  const reduce = useReducedMotion();
  const panelId = useId();

  const tabTransition = {
    duration: reduce ? 0 : 0.32,
    ease: EASE_SNAP,
  };

  return (
    <section
      id="solutions"
      className="border-b border-border-subtle bg-background section-py"
    >
      <Container>
        <SectionHeader
          eyebrow="Solutions"
          title="By company stage"
          description="Select where you are in the lifecycle—workstreams update below."
          className="mb-10"
        />

        <div className="border border-navy-900/15 bg-white">
          <div
            className="grid grid-cols-1 border-b border-navy-900/15 sm:grid-cols-3"
            role="tablist"
            aria-label="Company stage"
          >
            {tabs.map((tab, i) => {
              const isActive = active === tab.id;
              const tabPanelId = `${panelId}-${tab.id}`;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`${panelId}-tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={tabPanelId}
                  onClick={() => setActive(tab.id)}
                  className={[
                    "rounded-none py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[0.22em] transition-[color,background-color] duration-200",
                    "border-navy-900/15 sm:border-r sm:last:border-r-0",
                    i < tabs.length - 1
                      ? "border-b border-b-navy-900/15 sm:border-b-0"
                      : "",
                    isActive
                      ? "bg-navy-900 text-white"
                      : "bg-white text-navy-900 hover:bg-background",
                  ].join(" ")}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                id={`${panelId}-${active}`}
                role="tabpanel"
                aria-labelledby={`${panelId}-tab-${active}`}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={tabTransition}
              >
                <SolutionsGrid stage={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
