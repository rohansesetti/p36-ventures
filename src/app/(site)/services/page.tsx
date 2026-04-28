import { pillars } from "@/data/pillars";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | P36 Ventures",
  description:
    "Capital strategy, investor readiness, global GTM, and structural strategy—delivered as modular workstreams with institutional deliverables.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-background">
      <header className="border-b border-border-subtle bg-[#FAF9F6] py-20 text-center lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-900/50">
              Services
            </p>
            <div className="mx-auto mt-6 h-px w-12 bg-[#93846F]" aria-hidden />
            <h1 className="mt-8 text-4xl font-semibold tracking-tighter text-[#0A192F] sm:text-5xl">
              Four Pillars.{" "}
              <span className="font-serif font-semibold italic text-[#0A192F]">
                Built for Scale.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-navy-900/70 lg:text-lg">
              P36 functions as the institutional engine of your venture. We
              handle the heavy lifting across capital and operations, ensuring
              your foundation is solid so you can focus entirely on the product.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-16 lg:flex lg:gap-16 lg:px-8 lg:py-20">
        <aside className="mb-14 lg:mb-0 lg:w-52 lg:shrink-0">
          <nav
            className="lg:sticky lg:top-28"
            aria-label="Module navigation"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-navy-900/40">
              Jump to
            </p>
            <ul className="space-y-1 border-l border-border-subtle">
              {pillars.map((p) => (
                <li key={p.sectionId}>
                  <a
                    href={`#${p.sectionId}`}
                    className="block border-l-2 border-transparent py-1.5 pl-4 text-sm text-navy-900/55 transition-colors hover:border-gold hover:text-navy-900"
                  >
                    {p.sidebarLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0 flex-1 space-y-28">
          {pillars.map((pillar) => (
            <section
              key={pillar.sectionId}
              id={pillar.sectionId}
              className={
                pillar.sectionId === "capital-strategy"
                  ? "relative scroll-mt-28"
                  : "scroll-mt-28"
              }
            >
              {pillar.sectionId === "capital-strategy" ? (
                <div
                  className="absolute right-0 top-0 z-10 flex items-center gap-1.5 rounded-sm bg-[#93846F] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-widest text-[#0A192F]"
                  aria-label="Lead service"
                >
                  <svg
                    className="h-3 w-3 shrink-0 opacity-90"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <circle
                      cx="8"
                      cy="3.5"
                      r="1.75"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="4"
                      cy="11.5"
                      r="1.75"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="12"
                      cy="11.5"
                      r="1.75"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M8 5.2v2.2M6.2 9.8l-1.1 1.1M9.8 9.8l1.1 1.1"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                  Lead Service
                </div>
              ) : null}
              {pillar.sectionHeading ? (
                  <h2
                    className={
                      pillar.sectionId === "capital-strategy"
                        ? "mt-0 max-w-[min(100%,42rem)] pr-28 text-3xl font-semibold leading-snug tracking-tighter text-navy-900"
                        : "mt-0 text-3xl font-semibold leading-snug tracking-tighter text-navy-900"
                    }
                  >
                    <span className="tabular-nums">
                      {pillar.sectionHeading.number}
                    </span>
                    {". "}
                    <span className="font-semibold text-navy-900">
                      {pillar.sectionHeading.beforeSerif}
                    </span>{" "}
                    <span className="font-serif text-3xl font-semibold italic tracking-tight text-navy-900">
                      {pillar.sectionHeading.serif}
                    </span>
                  </h2>
                ) : (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy-900/45">
                      {pillar.label}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tighter text-navy-900">
                      {pillar.sidebarLabel}
                    </h2>
                  </>
                )}
                {pillar.headline.trim() ? (
                  <p className="mt-2 text-lg font-serif font-semibold italic leading-snug tracking-tight text-navy-900">
                    {pillar.headline}
                  </p>
                ) : null}
                <p
                  className={
                    pillar.sectionId === "capital-strategy"
                      ? "mt-6 max-w-2xl text-base leading-loose text-navy-900/85"
                      : pillar.sectionHeading
                        ? "mt-6 max-w-2xl text-base leading-relaxed text-navy-900/85"
                        : "mt-6 max-w-2xl text-sm leading-relaxed text-navy-900/85"
                  }
                >
                  {pillar.lead}
                </p>

                {pillar.leadOperational ? (
                  <p className="mt-6 border-l-[3px] border-[#93846F] pl-5 text-sm text-navy-900/85">
                    <span className="block text-[10px] font-semibold uppercase tracking-widest text-[#93846F]">
                      {pillar.leadOperationalLabel ?? "Lead operational service"}
                    </span>
                    <span className="mt-1 block font-medium text-navy-900">
                      {pillar.leadOperational}
                    </span>
                  </p>
                ) : null}

                <div className="mt-10">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-navy-900/40">
                    Specific deliverables
                  </h3>
                  <ul className="mt-4 grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
                    {pillar.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex gap-2 border-b border-border-subtle border-dashed py-2 text-sm text-navy-900/80"
                      >
                        <span className="shrink-0 text-[#93846F]" aria-hidden>
                          —
                        </span>
                        <span
                          className={
                            pillar.leadDeliverable === d
                              ? "font-bold text-navy-900"
                              : undefined
                          }
                        >
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              <div
                className={
                  pillar.sectionId === "capital-strategy"
                    ? "mt-14 border-t border-[#93846F]/35 pt-10"
                    : "mt-14 border-t border-border-subtle pt-10"
                }
              >
                <Link
                  href="/contact"
                  className={
                    pillar.sectionId === "capital-strategy"
                      ? "inline-flex border-2 border-[#93846F] bg-[#FAF9F6] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-navy-900 shadow-[0_4px_18px_rgba(10,25,47,0.1)] transition-colors hover:border-[#93846F] hover:bg-white hover:shadow-[0_6px_24px_rgba(147,132,111,0.22)]"
                      : "inline-flex border border-navy-900/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-navy-900 shadow-[0_1px_2px_rgba(10,25,47,0.05)] transition-colors hover:border-navy-900/45 hover:bg-white"
                  }
                >
                  Start a Conversation
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
