import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { PhotoTint } from "@/components/ui/PhotoTint";
import { OpportunityForm } from "@/components/contact/OpportunityForm";
import { opportunities } from "@/data/opportunities";

export const metadata: Metadata = {
  title: "Opportunities | P36 Ventures",
  description:
    "The P36 Fellowship, and desk seats for VC, business development, real estate and venture scouting.",
};

export default function OpportunitiesPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero eyebrow="Opportunities" title="Open seats." />

      {/* Fellowship first */}
      <section className="relative z-[1] border-b border-line">
        <div className="wrap grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center py-16 pr-0 lg:py-20 lg:pr-16">
            <p className="label-v2 mb-5">Programme</p>
            <h2 className="heading-serif max-w-[18ch] text-[clamp(1.75rem,3.2vw,2.5rem)] font-light leading-[1.15]">
              The P36 Fellowship.
            </h2>
            <p className="mt-5 max-w-[26rem] text-[15px] leading-[1.7] text-ink-soft">
              Six weeks on live files. Unpaid.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <Link href="/opportunities/fellowship/apply" className="cta-link">
                Apply →
              </Link>
              <Link href="/opportunities/fellowship" className="cta-link">
                Details →
              </Link>
            </div>
          </div>
          <PhotoTint
            src="/photos/fields/briefing.jpg"
            alt="A sunlit conference room looking onto the street"
            tint="green"
            revealOnHover={false}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[16/11] w-full lg:aspect-auto lg:h-full lg:min-h-[22rem]"
          />
        </div>
      </section>

      {/* Desks */}
      <section className="section-v2">
        <div className="wrap">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
            <p className="label-v2">Desks</p>
            <p className="text-[13.5px] leading-[1.65] text-ink-soft md:text-right">
              Commission-based. By referral or for exceptional candidates.
            </p>
          </div>
          <ul className="flex flex-col">
            {opportunities.map((role, i) => (
              <li
                key={role.id}
                id={role.id}
                className={`scroll-mt-28 grid grid-cols-1 gap-3 border-t border-line py-7 md:grid-cols-[9rem_1fr_auto] md:items-baseline md:gap-8 ${
                  i === opportunities.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <p className="label-v2">{role.seat}</p>
                <div>
                  <h2 className="heading-serif text-[clamp(1.375rem,2.4vw,1.75rem)] font-light">
                    {role.title}
                  </h2>
                  <p className="mt-2 max-w-[32rem] text-[14.5px] leading-[1.7] text-ink-soft">
                    {role.desc}
                  </p>
                </div>
                <a
                  href={`/opportunities?role=${role.id}#apply`}
                  className="cta-link justify-self-start"
                >
                  Apply →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="apply"
        className="section-v2 scroll-mt-24 border-t border-line"
      >
        <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label-v2 mb-5">Desk application</p>
            <h2 className="heading-serif max-w-[18ch] text-[clamp(1.5rem,2.8vw,2.125rem)] font-light leading-[1.2]">
              Tell us which seat.
            </h2>
            <p className="mt-5 max-w-[28rem] text-[14.5px] leading-[1.7] text-ink-soft">
              We reply when there is a fit.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Suspense fallback={null}>
              <OpportunityForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
