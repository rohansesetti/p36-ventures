import Image from "next/image";

const alliances = [
  {
    name: "US Capital",
    logoSrc: "/logos/alliances/us-capital.svg",
    logoWidth: 260,
    logoHeight: 52,
    descriptor: "Institutional Debt & Equity Structuring.",
  },
  {
    name: "Marquee Equity",
    logoSrc: "/logos/alliances/marquee-equity.svg",
    logoWidth: 300,
    logoHeight: 52,
    descriptor: "Global Investor Access & Syndication.",
  },
] as const;

export function StrategicAlliances() {
  return (
    <section
      className="border-t-0.5 border-[#0A192F]/15 bg-[#FAF9F6] py-20 lg:py-28"
      aria-labelledby="strategic-alliances-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-navy-900/40">
          Strategic Alliances
        </p>
        <h2
          id="strategic-alliances-heading"
          className="mt-4 font-serif text-2xl font-semibold italic tracking-tight text-[#0A192F]"
        >
          Global Capital Reach.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-12 lg:gap-20">
          {alliances.map((a) => (
            <div
              key={a.name}
              className="group flex flex-col items-center text-center"
            >
              <div className="flex min-h-[4.5rem] w-full max-w-[280px] items-center justify-center">
                <Image
                  src={a.logoSrc}
                  alt={`${a.name} logo`}
                  width={a.logoWidth}
                  height={a.logoHeight}
                  className="h-auto max-h-14 w-auto opacity-50 grayscale transition-[filter,opacity] duration-500 ease-out group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-navy-900/75">
                {a.descriptor}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center text-base leading-relaxed text-navy-900/70 lg:mt-20 lg:text-[17px]">
          We leverage these alliances to give our clients a distinct advantage in
          the global market—providing the reach of a major investment bank with
          the personalized focus of a boutique firm.
        </p>
      </div>
    </section>
  );
}
