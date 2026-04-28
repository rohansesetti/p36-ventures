import { pillars as pillarData } from "@/data/pillars";
import Link from "next/link";

export function Services() {
  return (
    <section
      id="services"
      className="bg-[#FAF9F6] py-24 lg:py-32"
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillarData.map((pillar) => (
            <article
              key={pillar.sectionId}
              className={
                pillar.sectionId === "capital-strategy"
                  ? "relative flex flex-col border border-[#93846F] bg-white p-8 shadow-[0_2px_14px_rgba(147,132,111,0.14)] transition-[border-color,box-shadow] duration-200 hover:shadow-[0_4px_20px_rgba(147,132,111,0.18)]"
                  : "flex flex-col border-0.5 border-navy/10 bg-white p-8 shadow-[0_1px_3px_rgba(10,25,47,0.05)] transition-[border-color,box-shadow] duration-200 hover:border-navy/15 hover:shadow-[0_2px_10px_rgba(10,25,47,0.07)]"
              }
            >
              {pillar.sectionId === "capital-strategy" ? (
                <div
                  className="absolute right-8 top-8 z-10 flex items-center gap-1.5 rounded-sm bg-[#93846F] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-widest text-[#0A192F]"
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
                <h3
                  className={
                    pillar.sectionId === "capital-strategy"
                      ? "mt-0 pr-24 text-xl font-semibold leading-snug tracking-tight text-navy-900"
                      : "mt-0 text-xl font-semibold leading-snug tracking-tight text-navy-900"
                  }
                >
                  <span className="font-mono text-sm tabular-nums text-[#93846F]/70">
                    {pillar.sectionHeading.number}.
                  </span>{" "}
                  <span className="font-semibold text-navy-900">
                    {pillar.sectionHeading.beforeSerif}
                  </span>{" "}
                  <span className="font-serif font-semibold italic text-navy-900">
                    {pillar.sectionHeading.serif}
                  </span>
                </h3>
              ) : (
                <>
                  <span className="font-mono text-sm tabular-nums text-[#93846F]/70">
                    {pillar.label.slice(-2)}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold uppercase tracking-[0.2em] text-navy-900">
                    {pillar.title}
                  </h3>
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
                    ? "mt-4 text-sm leading-loose text-navy-900/85"
                    : pillar.sectionHeading
                      ? "mt-4 text-base leading-relaxed text-navy-900/85"
                      : "mt-4 text-sm leading-relaxed text-navy-900/85"
                }
              >
                {pillar.lead}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-navy-900/85">
                {pillar.highlights.map((item) => {
                  if (pillar.leadOperational && item === pillar.leadOperational) {
                    return (
                      <li
                        key={item}
                        className="flex flex-col gap-1.5 border-l-[3px] border-[#93846F] pl-4"
                      >
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#93846F]">
                          {pillar.leadOperationalLabel ??
                            "Lead operational service"}
                        </span>
                        <div className="flex gap-2">
                          <span className="shrink-0 text-[#93846F]" aria-hidden>
                            —
                          </span>
                          <span className="font-semibold text-navy-900">
                            {item}
                          </span>
                        </div>
                      </li>
                    );
                  }
                  return (
                    <li key={item} className="flex gap-2">
                      <span className="shrink-0 text-[#93846F]" aria-hidden>
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
