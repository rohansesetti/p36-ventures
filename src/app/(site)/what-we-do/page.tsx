import Link from "next/link";
import type { Metadata } from "next";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { serviceCategories, servicesInCategory } from "@/data/services";

export const metadata: Metadata = {
  title: "What we do | P36 Ventures",
  description:
    "Fundraising support, transaction advisory, and studio work, each scoped with a named deliverable.",
};

export default function WhatWeDoPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <header className="pt-32 pb-10 lg:pt-36 lg:pb-12">
        <div className="wrap">
          <p className="heading-serif max-w-[40rem] text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-[1.3]">
            Practices, not packages.{" "}
            <span className="text-ink-soft">
              Each line comes with a named deliverable.
            </span>
          </p>
        </div>
      </header>

      {serviceCategories.map((cat) => (
        <section key={cat.id} id={cat.id} className="scroll-mt-28 pb-16 lg:pb-20">
          <div className="wrap">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="heading-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light uppercase tracking-[0.02em]">
                {cat.label}
              </h2>
              <p className="max-w-[28rem] text-[13.5px] text-ink-soft sm:text-right">
                {cat.blurb}
              </p>
            </div>
            <ServiceGrid items={servicesInCategory(cat.id)} />
          </div>
        </section>
      ))}

      <section className="section-v2 border-t border-line">
        <div className="wrap">
          <p className="heading-serif max-w-[36rem] text-[clamp(1.5rem,2.8vw,2rem)] font-light leading-[1.3]">
            Not sure which practice.{" "}
            <span className="text-ink-soft">That is the briefing.</span>
          </p>
          <Link href="/contact" className="cta-link mt-8">
            Request a briefing →
          </Link>
        </div>
      </section>
    </main>
  );
}
