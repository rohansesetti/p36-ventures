"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  getService,
  serviceCategories,
  servicesInCategory,
  type Service,
} from "@/data/services";

export function WhatWeDoMenu() {
  const [open, setOpen] = useState(false);
  const [catId, setCatId] = useState(serviceCategories[0].id);
  const [focusSlug, setFocusSlug] = useState<string | null>(
    serviceCategories[0].serviceSlugs[0] ?? null,
  );
  const wrapRef = useRef<HTMLDivElement>(null);

  const category = serviceCategories.find((c) => c.id === catId)!;
  const items = servicesInCategory(catId);
  const focused: Service | undefined =
    (focusSlug ? getService(focusSlug) : undefined) ?? items[0];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/what-we-do"
        className="inline-flex items-center gap-1.5 font-sans text-[12px] font-medium tracking-[0.06em] text-ink no-underline transition-opacity hover:opacity-55"
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={() => setOpen(true)}
      >
        What we do
        <svg
          viewBox="0 0 12 8"
          width="8"
          height="6"
          fill="none"
          aria-hidden
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M1 1.5 6 6l5-4.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </Link>

      {open ? (
        <div className="absolute left-1/2 top-full z-[120] w-[min(880px,calc(100vw-3rem))] -translate-x-[42%] pt-4">
          <div className="border border-line bg-paper">
            <div className="grid grid-cols-[0.9fr_1fr_1fr]">
              <ul className="py-2">
                {serviceCategories.map((c) => {
                  const active = c.id === catId;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        onMouseEnter={() => {
                          setCatId(c.id);
                          setFocusSlug(c.serviceSlugs[0] ?? null);
                        }}
                        onFocus={() => {
                          setCatId(c.id);
                          setFocusSlug(c.serviceSlugs[0] ?? null);
                        }}
                        className={`w-full cursor-pointer border-none px-5 py-3 text-left font-sans text-[13px] leading-snug ${
                          active
                            ? "bg-paper-2 font-medium text-ink"
                            : "bg-transparent text-ink-soft"
                        }`}
                      >
                        {c.label}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <ul className="border-x border-line py-2">
                {items.map((item) => {
                  const active = focused?.slug === item.slug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        onMouseEnter={() => setFocusSlug(item.slug)}
                        onFocus={() => setFocusSlug(item.slug)}
                        className={`block px-5 py-2.5 text-[13px] no-underline ${
                          active ? "bg-paper-2 text-ink" : "text-ink-soft hover:text-ink"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="px-5 py-5">
                {focused ? (
                  <>
                    <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                      {category.label}
                    </p>
                    <p className="heading-serif mt-3 text-[1.35rem] font-light leading-snug">
                      {focused.title}
                    </p>
                    <p className="mt-3 text-[13px] leading-[1.65] text-ink-soft">
                      {focused.forLine.charAt(0).toUpperCase()}
                      {focused.forLine.slice(1)}.
                    </p>
                    <Link href={`/services/${focused.slug}`} className="cta-link mt-6 text-[12px]">
                      Open this practice →
                    </Link>
                  </>
                ) : null}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-line px-5 py-3">
              <Link
                href="/what-we-do"
                className="text-[12.5px] text-ink-soft no-underline hover:text-ink"
              >
                All practices
              </Link>
              <Link
                href="/contact"
                className="text-[12.5px] text-ink-soft no-underline hover:text-ink"
              >
                Request a briefing
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
