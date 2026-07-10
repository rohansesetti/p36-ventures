import { pillars } from "@/data/pillars";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | P36 Ventures",
  description:
    "Capital strategy, investor readiness, global GTM, and structural strategy—delivered as modular workstreams engineered for dominance.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-paper pt-[120px]">
      <header className="page-hero text-center">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="label-mono-gold mx-auto max-w-fit">Services</p>
            <div className="mx-auto mt-6 h-px w-12 bg-gold" aria-hidden />
            <h1 className="mt-8 text-4xl font-semibold tracking-tighter text-navy-900 sm:text-5xl">
              Four Pillars.{" "}
              <span className="font-serif font-semibold italic">
                Built for Scale.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-navy-900/70 lg:text-lg">
              P36 is the execution layer between ambition and market control. We
              run the capital stack, diligence rails, and operating cadence so
              you stay focused on product velocity—not paperwork drag.
            </p>
          </div>
        </Container>
      </header>

      <Container className="py-16 lg:flex lg:gap-16 lg:py-20">
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
              className="scroll-mt-28"
            >
              {pillar.sectionId === "capital-strategy" ? (
                <div
                  className="mb-4 flex items-center gap-1.5 rounded-sm bg-gold px-2.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-widest text-navy-900"
                  aria-label="Lead service"
                >
                  Lead Service
                </div>
              ) : null}
              {pillar.sectionHeading ? (
                <h2
                  className={
                    pillar.sectionId === "capital-strategy"
                      ? "heading-h2 mt-0 max-w-[min(100%,42rem)] text-3xl leading-snug text-navy-900"
                      : "heading-h2 mt-0 text-3xl leading-snug text-navy-900"
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
                  <p className="label-mono-gold !text-[10px] opacity-90">
                    {pillar.label}
                  </p>
                  <h2 className="heading-h2 mt-3 text-3xl text-navy-900">
                    {pillar.sidebarLabel}
                  </h2>
                </>
              )}
              {pillar.headline.trim() ? (
                <p className="mt-2 text-lg font-serif font-semibold italic leading-snug tracking-tight text-navy-900">
                  {pillar.headline}
                </p>
              ) : null}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-900/85">
                {pillar.lead}
              </p>

              {pillar.leadOperational ? (
                <p className="mt-6 border-l-[3px] border-gold pl-5 text-sm text-navy-900/85">
                  <span className="label-mono-gold block !text-[10px]">
                    {pillar.leadOperationalLabel ?? "Lead operational service"}
                  </span>
                  <span className="mt-1 block font-medium text-navy-900">
                    {pillar.leadOperational}
                  </span>
                </p>
              ) : null}

              <div className="mt-10">
                <h3 className="label-mono-gold !text-[10px] opacity-90">
                  Specific deliverables
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
                  {pillar.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex gap-2 border-b border-border-subtle border-dashed py-2 font-mono text-[11px] font-medium leading-relaxed tracking-[0.04em] text-navy-900/80"
                    >
                      <span className="shrink-0 text-gold" aria-hidden>
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
                    ? "mt-14 border-t border-gold/35 pt-10"
                    : "mt-14 border-t border-border-subtle pt-10"
                }
              >
                <ButtonLink
                  href="/contact"
                  variant={
                    pillar.sectionId === "capital-strategy" ? "gold" : "primary"
                  }
                >
                  Start a conversation
                </ButtonLink>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
