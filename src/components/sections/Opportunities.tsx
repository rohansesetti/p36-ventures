import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { opportunities } from "@/data/opportunities";

export function Opportunities() {
  return (
    <section id="opportunities" className="section-v2 relative z-[1]">
      <div className="wrap">
        <Reveal>
          <p className="label-v2 mb-5">Careers</p>
        </Reveal>

        <Reveal>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="heading-serif max-w-[24rem] text-[clamp(1.75rem,3.2vw,2.5rem)] font-light leading-[1.15]">
              Join the team.
            </h2>
            <p className="max-w-[340px] text-[13.5px] leading-[1.65] text-ink-soft lg:text-right">
              The P36 Fellowship, analyst roles, and a scout network across
              Delhi, New York, and London.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col">
            {opportunities.map((role, i) => (
              <Link
                key={role.id}
                href={`/opportunities?role=${role.id}#apply`}
                className={`grid grid-cols-[7rem_1fr] items-baseline gap-5 border-t border-line py-5 no-underline md:grid-cols-[9rem_1fr_2fr] ${
                  i === opportunities.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span className="label-v2">{role.seat}</span>
                <h3 className="heading-serif text-xl font-normal text-ink">
                  {role.title}
                </h3>
                <p className="col-span-2 max-w-[440px] text-sm leading-[1.65] text-ink-soft md:col-span-1 md:col-start-3">
                  {role.desc}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <Link href="/opportunities" className="cta-link mt-10">
            View careers →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
