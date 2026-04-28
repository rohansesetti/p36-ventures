export function Hero() {
  return (
    <section className="border-b-0.5 border-navy/5 bg-background pt-40 pb-24 lg:pb-32 lg:pt-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <p className="mb-8 text-[10px] font-normal uppercase tracking-[0.3em] text-navy opacity-50">
          Venture architecture &amp; capital strategy
        </p>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-24 xl:gap-32">
          <h1 className="max-w-5xl min-w-0 flex-1 font-light tracking-[-0.04em] text-navy text-5xl leading-[1.05] sm:text-6xl lg:max-w-[min(100%,58rem)] lg:text-7xl xl:text-8xl">
            Strategic{" "}
            <span className="font-serif font-semibold tracking-[0.01em]">
              Finance &amp; Capital
            </span>{" "}
            for Industry Catalysts.
          </h1>
          <p className="w-full max-w-[min(100%,280px)] shrink-0 text-[13px] leading-relaxed text-navy/85 sm:max-w-[280px] lg:mb-0 lg:self-end lg:text-left">
            We provide the institutional infrastructure that market mavericks lack.
            P36 Ventures transforms raw ambition into investable assets through
            precision-grade capital sourcing and operational engineering.
          </p>
        </div>

        <div className="mt-20 w-full border-t-0.5 border-navy/5 pt-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-0">
            {(
              [
                ["01", "Capital Architecture"],
                ["02", "Strategic Narrative"],
                ["03", "Market Execution"],
                ["04", "Operational Alpha"],
              ] as const
            ).map(([num, title], i) => (
              <div
                key={num}
                className={`relative min-w-0 ${
                  i > 0 ? "lg:border-l lg:border-l-0.5 lg:border-navy/10" : ""
                } ${i === 0 ? "lg:pr-8" : "lg:pl-8"}`}
              >
                <span className="font-serif text-xs italic tabular-nums text-navy opacity-30">
                  {num}
                </span>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
