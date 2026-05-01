import { pillars as pillarData } from "@/data/pillars";
import Link from "next/link";

function firstTwoSentences(text: string) {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (!cleaned) return cleaned;

  const sentences = cleaned.match(/[^.!?]+[.!?]+(\s+|$)/g);
  if (!sentences) return cleaned;
  return sentences.slice(0, 2).join("").trim();
}

function PillarGlyph({ sectionId }: { sectionId: string }) {
  const common = "h-10 w-10 text-[#2E0A12]/70";
  switch (sectionId) {
    case "capital-strategy":
      return (
        <svg
          className={common}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M20 6l10 10-10 10L10 16 20 6Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M20 14v12M14 20h12"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      );
    case "investor-readiness":
      return (
        <svg
          className={common}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M8 12h24v20H8V12Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M12 16h16M12 21h12M12 26h14"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      );
    case "global-gtm":
      return (
        <svg
          className={common}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M8 20h24M20 8c3.5 4.2 5.6 8.2 5.6 12S23.5 27.8 20 32c-3.5-4.2-5.6-8.2-5.6-12S16.5 12.2 20 8Z"
            stroke="currentColor"
            strokeWidth="1.1"
          />
        </svg>
      );
    case "structural-strategy":
      return (
        <svg
          className={common}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M12 12h16v16H12V12Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M14 28V32M26 28V32M14 8V12M26 8V12M8 14h4M28 14h4M8 26h4M28 26h4"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function Services() {
  return (
    <section
      id="services"
      className="bg-[#DDCAB3] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 text-center lg:mb-20">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy-900/50">
              Services
            </p>
            <div
              className="mx-auto mt-6 h-px w-12 bg-[#93846F]"
              aria-hidden
            />
            <h2 className="mt-8 text-4xl font-semibold tracking-tighter text-[#0A192F] sm:text-5xl">
              Four Pillars.{" "}
              <span className="font-serif font-semibold italic text-[#0A192F]">
                Built for Scale.
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-navy-900/70 lg:text-lg">
              P36 functions as the institutional engine of your venture. We
              handle the heavy lifting across capital and operations, ensuring
              your foundation is solid so you can focus entirely on the product.
            </p>
            <Link
              href="/services"
              className="mt-10 inline-flex border border-navy-900/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-navy-900 transition-colors hover:border-navy-900/35"
            >
              Full breakdown
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 overflow-hidden border border-[#2E0A12] md:grid-cols-2">
          {pillarData.map((pillar, i) => (
            <article
              key={pillar.sectionId}
              className={[
                "group relative flex min-h-[320px] flex-col bg-[#DDCAB3] p-8 transition-colors duration-200",
                "focus-within:outline-none",
                i % 2 === 0 ? "md:border-r md:border-r-[#2E0A12]" : "",
                i < 2 ? "md:border-b md:border-b-[#2E0A12]" : "",
                i < pillarData.length - 1 ? "border-b border-b-[#2E0A12] md:border-b-0" : "",
                "hover:bg-[#DDCAB3]/90",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <p className="font-serif text-5xl leading-none tabular-nums tracking-[-0.02em] text-[#2E0A12]">
                    {pillar.sectionHeading?.number ?? pillar.label.slice(-2)}
                  </p>
                  <h3 className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A192F]">
                    {(pillar.sectionHeading
                      ? `${pillar.sectionHeading.beforeSerif} ${pillar.sectionHeading.serif}`
                      : pillar.title
                    ).toUpperCase()}
                  </h3>
                </div>
                <div className="shrink-0">
                  <PillarGlyph sectionId={pillar.sectionId} />
                </div>
              </div>

              <div className="mt-8 flex-1 overflow-hidden">
                <p className="text-sm leading-relaxed text-[#0A192F]/85 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                  {firstTwoSentences(pillar.lead)}
                </p>

                <div className="mt-6 max-h-0 translate-y-2 overflow-hidden opacity-0 transition-[max-height,opacity,transform] duration-300 ease-out group-hover:max-h-56 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2E0A12]/70">
                    Specific deliverables
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[#0A192F]/85">
                    {pillar.highlights.slice(0, 6).map((item) => {
                      const isGrant =
                        pillar.sectionId === "capital-strategy" &&
                        /grant funding/i.test(item);
                      return (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 shrink-0 text-[#2E0A12]/60" aria-hidden>
                            —
                          </span>
                          <span className="min-w-0">
                            <span className="font-medium">{item}</span>
                            {isGrant ? (
                              <span className="ml-2 inline-flex border border-[#2E0A12]/60 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#2E0A12]">
                                [ ACTIVE MANDATE: $30K TECHNICAL SUBSIDY ]
                              </span>
                            ) : null}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between gap-6">
                <Link
                  href="/services"
                  className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A192F]/80 underline decoration-[#2E0A12]/25 underline-offset-4 transition-colors hover:text-[#0A192F] hover:decoration-[#2E0A12]/45"
                >
                  View module
                </Link>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2E0A12]/55">
                  Hover to reveal
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
