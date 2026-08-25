"use client";

import { MandatePhoto } from "@/components/work/MandatePhoto";
import {
  selectedWork,
  type SelectedWorkItem,
  type WorkType,
} from "@/data/selectedWork";
import { useId, useState } from "react";

type Filter = "all" | WorkType;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "studio", label: "Studio" },
  { id: "capital", label: "Capital" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 8"
      width="10"
      height="7"
      fill="none"
      aria-hidden
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1.5 6 6l5-4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WorkCard({
  item,
  sizes,
}: {
  item: SelectedWorkItem;
  sizes: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `${useId()}-panel`;

  const photo = (
    <MandatePhoto item={item} sizes={sizes} className="aspect-[4/5] w-full" />
  );

  return (
    <article className="flex h-full flex-col">
      {item.websiteUrl ? (
        <a
          href={item.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
          aria-label={`${item.name} website`}
        >
          {photo}
        </a>
      ) : (
        photo
      )}

      <div className="border-x border-b border-line px-4 py-3">
        <p className="text-[12.5px] leading-[1.55] text-ink-soft">{item.desc}</p>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-3 flex w-full cursor-pointer items-center justify-between gap-2 border-none bg-transparent p-0 text-left text-[11px] font-medium uppercase tracking-[0.1em] text-ink-faint transition-colors hover:text-ink"
        >
          What we did
          <Chevron open={open} />
        </button>

        <div
          id={panelId}
          className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="mt-3 text-[12.5px] leading-[1.65] text-ink-soft">
              {item.expand}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function WorkGrid({ columns = 4 }: { columns?: 3 | 4 }) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = selectedWork.filter(
    (item) => filter === "all" || item.type === filter,
  );

  const sizes =
    columns === 3
      ? "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
      : "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw";

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-7">
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={active}
              className={[
                "cursor-pointer border-none bg-transparent pb-1 font-sans text-xs font-normal uppercase tracking-[0.06em] transition-[color,border-color]",
                active
                  ? "border-b border-ink text-ink"
                  : "border-b border-transparent text-ink-faint hover:text-ink",
              ].join(" ")}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <ul
        className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${
          columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
        }`}
      >
        {visible.map((item) => (
          <li key={item.id}>
            <WorkCard item={item} sizes={sizes} />
          </li>
        ))}
      </ul>
    </>
  );
}
