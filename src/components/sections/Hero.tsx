import Link from "next/link";

const stats = [
  { num: "$200M+", desc: "Capital architected across active mandates" },
  { num: "12", desc: "Ventures built or financed since founding" },
  { num: "4", desc: "Cities — London, New York, Miami, Singapore" },
] as const;

export function Hero() {
  return (
    <section className="relative z-[1] flex min-h-screen flex-col justify-center pt-[120px]">
      <div className="wrap w-full">
        <p className="label-v2 mb-[26px]">
          P36 Ventures — Venture Studio <em>&amp;</em> Capital Advisory
        </p>

        <h1 className="heading-serif max-w-[960px] text-[clamp(2.5rem,6.2vw,5.75rem)] font-light leading-[1.04]">
          We build the company, <em className="font-light italic">or</em> we build
          the round. Occasionally, both.
        </h1>

        <p className="mt-8 max-w-[460px] text-[17px] font-light leading-[1.7] text-ink-soft">
          A small studio and advisory practice for founders who need either a
          company built from a blank page, or an institutional capital stack
          engineered around one already in motion.
        </p>

        <Link href="/contact" className="cta-link mt-9">
          Start a conversation →
        </Link>

        <div className="mt-[110px] grid grid-cols-1 gap-[26px] border-t border-line pt-[34px] sm:grid-cols-3 sm:gap-10">
          {stats.map((stat) => (
            <div key={stat.desc}>
              <div className="heading-serif text-[clamp(1.75rem,3.4vw,2.625rem)] font-light">
                {stat.num}
              </div>
              <div className="mt-2 text-[12.5px] tracking-[0.03em] text-ink-faint">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
