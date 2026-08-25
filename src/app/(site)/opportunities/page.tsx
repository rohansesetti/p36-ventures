import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { OpportunityForm } from "@/components/contact/OpportunityForm";
import { opportunities } from "@/data/opportunities";

export const metadata: Metadata = {
  title: "Opportunities | P36 Ventures",
  description:
    "Open seats at P36: VC Analyst, Business Development Analyst, Real Estate Investment Analyst, and Venture Scout.",
};

export default function OpportunitiesPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow="Opportunities"
        title="Open seats."
        lead="Four files. Delhi, New York, London. Apply to one — we keep the book short."
      />

      <section className="section-v2">
        <div className="wrap">
          <ul className="flex flex-col">
            {opportunities.map((role, i) => (
              <li
                key={role.id}
                id={role.id}
                className={`scroll-mt-28 grid grid-cols-1 gap-3 border-t border-line py-8 md:grid-cols-[9rem_1fr_1.4fr] md:gap-8 md:py-10 ${
                  i === opportunities.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <p className="label-v2 pt-1">{role.seat}</p>
                <div>
                  <h2 className="heading-serif text-[clamp(1.375rem,2.4vw,1.75rem)] font-light">
                    {role.title}
                  </h2>
                  <p className="mt-3 max-w-[28rem] text-[14.5px] leading-[1.7] text-ink-soft">
                    {role.desc}
                  </p>
                </div>
                <div className="md:pt-1">
                  <p className="max-w-[400px] text-[14px] leading-[1.7] text-ink-soft">
                    {role.work}
                  </p>
                  <a
                    href={`/opportunities?role=${role.id}#apply`}
                    className="cta-link mt-5"
                  >
                    Apply →
                  </a>
                </div>
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
            <p className="label-v2 mb-5">Application</p>
            <h2 className="heading-serif max-w-[18ch] text-[clamp(1.5rem,2.8vw,2.125rem)] font-light leading-[1.2]">
              Tell us which seat.
            </h2>
            <p className="mt-5 max-w-[28rem] text-[14.5px] leading-[1.7] text-ink-soft">
              Name the role, the city, and the work you have already done. We
              reply when there is a fit.
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
