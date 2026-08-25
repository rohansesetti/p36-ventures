import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { services } from "@/data/services";

const featured = services.slice(0, 4);
const rest = services.slice(4, 8);

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="on-navy relative z-[1] overflow-hidden bg-[#0c1220] py-16 text-white lg:py-20"
    >
      <div
        className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-[#2a3d6e]/35 blur-3xl"
        aria-hidden
      />

      <div className="wrap relative">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-16 lg:items-start">
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
                What we do
              </p>
              <h2 className="heading-serif mt-4 text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.12] text-white">
                An operating team you can turn on for a mandate.
              </h2>
              <p className="mt-5 max-w-[34rem] text-[15px] font-light leading-[1.7] text-white/60">
                Capital, diligence, and the finance seat — staffed as a practice,
                not a slide deck. Each line is a scoped engagement with a named
                deliverable.
              </p>
              <p className="mt-8 text-[13px] text-white/40">
                (A mandate typically includes)
              </p>
            </div>

            <ServiceGrid items={featured} />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-white/10 pt-16">
            <ServiceGrid items={rest} />
          </div>
        </Reveal>

        <Reveal>
          <Link
            href="/what-we-do"
            className="cta-link-light mt-14"
          >
            See all practices →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
