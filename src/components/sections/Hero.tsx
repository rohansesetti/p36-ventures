import Link from "next/link";

const stats = [
  { num: "$200M+", desc: "Capital structured across active mandates" },
  { num: "12", desc: "Mandates completed or currently in market" },
  { num: "3", desc: "Delhi, New York, London" },
] as const;

export function Hero() {
  return (
    <section className="relative z-[1] pt-28 pb-8 lg:pt-32 lg:pb-10">
      <div className="wrap">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ink-faint">
          Capital advisory &amp; venture studio
        </p>

        <h1 className="heading-serif mt-5 font-light uppercase leading-[0.88] tracking-[0.02em] text-[clamp(3.25rem,12vw,8.75rem)]">
          <span className="block">Form.</span>
          <span className="block text-accent">Raise.</span>
          <span className="block text-pop">Scale.</span>
        </h1>

        <p className="mt-7 max-w-[28rem] text-[16px] leading-[1.65] text-ink-soft">
          We build the company and structure the capital — through close.
        </p>

        <Link href="/contact" className="cta-link mt-7">
          Request a briefing →
        </Link>

        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.desc}>
              <div className="heading-serif text-[clamp(1.5rem,2.8vw,2.125rem)] font-light">
                {stat.num}
              </div>
              <div className="mt-1.5 text-[12.5px] text-ink-faint">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
