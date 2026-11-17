"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { MandatePhoto } from "@/components/work/MandatePhoto";
import { selectedWork, type SelectedWorkItem } from "@/data/selectedWork";
import { logoDisplaySize } from "@/lib/logoSize";

const sectorCount = new Set(selectedWork.map((w) => w.sector)).size;
const firstYear = Math.min(...selectedWork.map((w) => Number(w.year)));

const stats = [
  { value: String(selectedWork.length), label: "Mandates" },
  { value: String(sectorCount), label: "Sectors" },
  { value: String(firstYear), label: "Since" },
];

function Plus({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      width="12"
      height="12"
      fill="none"
      aria-hidden
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
    >
      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function LogoChip({ item }: { item: SelectedWorkItem }) {
  if (!item.logo) return null;
  const size = logoDisplaySize(item.logo.width, item.logo.height, {
    area: 1100,
    maxW: 64,
    maxH: 26,
  });
  return (
    <span className="flex h-11 w-[4.75rem] shrink-0 items-center justify-center border border-line bg-white">
      <Image
        src={item.logo.src}
        alt=""
        width={item.logo.width}
        height={item.logo.height}
        quality={100}
        sizes="64px"
        className="object-contain"
        style={size}
      />
    </span>
  );
}

function WorkRow({
  item,
  index,
  active,
  onActivate,
}: {
  item: SelectedWorkItem;
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `${useId()}-panel`;

  return (
    <li
      className="group border-b border-line"
      onMouseEnter={onActivate}
      onFocus={onActivate}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className={`grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-x-5 gap-y-2 border-none bg-transparent px-0 py-5 text-left transition-colors md:grid-cols-[2.25rem_minmax(0,1.35fr)_minmax(0,1fr)_7.5rem_1.25rem] md:gap-x-6 ${
          active ? "md:bg-paper-2" : ""
        } md:px-4`}
      >
        <span className="hidden font-sans text-[11px] tabular-nums tracking-[0.08em] text-ink-faint md:block">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex min-w-0 items-center gap-4">
          <LogoChip item={item} />
          <span className="min-w-0">
            <span className="heading-serif block text-[1.2rem] font-normal leading-[1.2] text-ink">
              {item.name}
            </span>
            <span className="mt-1 block font-sans text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-faint">
              {item.type === "studio" ? "Studio" : "Capital"} · {item.sector}
            </span>
          </span>
        </span>

        <span className="col-span-2 hidden text-[13.5px] leading-[1.6] text-ink-soft md:col-span-1 md:block">
          {item.desc}
        </span>

        <span className="hidden text-right md:block">
          <span className="heading-serif block text-[1.05rem] font-light leading-tight text-ink">
            {item.stage}
          </span>
          <span className="mt-1 block font-sans text-[11px] tabular-nums text-ink-faint">
            {item.year}
          </span>
        </span>

        <span className="text-ink-faint transition-colors group-hover:text-ink">
          <Plus open={open} />
        </span>
      </button>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-5 pb-7 md:grid-cols-[2.25rem_minmax(0,1.35fr)_minmax(0,1fr)_7.5rem_1.25rem] md:gap-x-6 md:px-4">
            <div className="md:hidden">
              <MandatePhoto item={item} sizes="92vw" className="aspect-[16/10] w-full" />
              <p className="mt-4 text-[13.5px] leading-[1.6] text-ink-soft">{item.desc}</p>
              <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.12em] text-ink-faint">
                {item.stage} · {item.year}
              </p>
            </div>
            <p className="label-v2 hidden md:col-start-2 md:block md:pt-1">What we did</p>
            <div className="md:col-span-3 md:col-start-3">
              <p className="label-v2 mb-2 md:hidden">What we did</p>
              <p className="text-[14px] leading-[1.75] text-ink-soft">{item.expand}</p>
              {item.websiteUrl ? (
                <a
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-link mt-4"
                >
                  Visit {item.name} →
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export function SelectedWork() {
  const [activeId, setActiveId] = useState(selectedWork[0]?.id);
  const active = selectedWork.find((w) => w.id === activeId) ?? selectedWork[0];

  return (
    <section id="work" className="section-v2 relative z-[1] !pt-8 lg:!pt-10">
      <div className="wrap">
        <Reveal>
          <div className="mb-10 grid gap-8 border-b border-line pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="label-v2 mb-4">Selected work</p>
              <h2 className="heading-serif max-w-[20ch] text-[clamp(1.875rem,3.6vw,2.875rem)] font-light leading-[1.1]">
                Mandates we have led, from first model to close.
              </h2>
              <p className="mt-5 max-w-[34rem] text-[14px] leading-[1.7] text-ink-soft">
                Capital advisory and studio work across deep tech, energy,
                regeneration, and education.
              </p>
            </div>
            <dl className="grid grid-cols-3 lg:col-span-5">
              {stats.map((s) => (
                <div key={s.label} className="border-l border-line pl-4 first:border-l-0 first:pl-0 lg:first:border-l lg:first:pl-4">
                  <dt className="label-v2">{s.label}</dt>
                  <dd className="heading-serif mt-2 text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-none tabular-nums">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12">
          <ul className="border-t border-line lg:col-span-8">
            {selectedWork.map((item, i) => (
              <WorkRow
                key={item.id}
                item={item}
                index={i}
                active={item.id === active.id}
                onActivate={() => setActiveId(item.id)}
              />
            ))}
          </ul>

          <aside className="hidden lg:col-span-4 lg:block" aria-hidden>
            <div className="sticky top-28">
              <div className="relative">
                {selectedWork.map((item) => (
                  <div
                    key={item.id}
                    className={`transition-opacity duration-500 ${
                      item.id === active.id
                        ? "relative opacity-100"
                        : "pointer-events-none absolute inset-0 opacity-0"
                    }`}
                  >
                    <MandatePhoto
                      item={item}
                      sizes="(min-width: 1024px) 30vw, 0px"
                      className="aspect-[4/5] w-full"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-[1.6] text-ink-soft">
                <span className="text-ink">{active.name}.</span> {active.desc}
              </p>
            </div>
          </aside>
        </div>

        <Link href="/portfolio" className="cta-link mt-10">
          View all work →
        </Link>
      </div>
    </section>
  );
}
