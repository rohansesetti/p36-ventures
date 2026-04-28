const CREAM = "#DDCAB3";

export function AboutScrollJourney() {
  return (
    <section
      className="relative bg-[#2E0A12] py-20 lg:py-28"
      aria-label="About P36 Ventures"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(221,202,179,0.08)_0%,transparent_58%)]" />
      <div className="relative mx-auto max-w-xl px-6 text-center lg:px-8">
        <p
          className="text-[0.65rem] font-semibold uppercase tracking-[0.28em]"
          style={{ color: CREAM, opacity: 0.72 }}
        >
          About
        </p>
        <h1
          className="mt-4 font-serif text-3xl font-semibold italic tracking-tight sm:text-4xl md:text-[2.65rem]"
          style={{ color: CREAM }}
        >
          Operator-led. Execution-first.
        </h1>
        <p
          className="mt-5 text-sm leading-relaxed sm:text-base"
          style={{ color: CREAM, opacity: 0.78 }}
        >
          P36 Ventures is an operational engine room—strategy with the
          infrastructure, cadence, and leadership to make it real.
        </p>
      </div>
    </section>
  );
}
