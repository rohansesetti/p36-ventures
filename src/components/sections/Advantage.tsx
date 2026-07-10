import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ReactNode } from "react";

const blocks: { title: string; body: ReactNode }[] = [
  {
    title: "Active Engagement",
    body: (
      <>
        We don&apos;t just advise; we embed. Our partners manage your
        spreadsheets, due diligence, and financial models{" "}
        <em className="italic text-navy-900/90">alongside you</em>.
      </>
    ),
  },
  {
    title: "Sovereign-Grade Governance",
    body: (
      <>
        &ldquo;Big 4&rdquo; audit rigor, tailored for the speed and agility of a
        venture-backed startup. We build the architecture VCs trust.
      </>
    ),
  },
  {
    title: "Operational Alpha",
    body: "We manage the complexity of capitalization and structuring, allowing your team to focus 100% on product velocity.",
  },
];

export function Advantage() {
  return (
    <section
      id="advantage"
      className="border-b border-border-subtle border-t-0.5 border-t-navy/10 bg-background section-py"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-0">
          <div className="border-border-subtle lg:col-span-5 lg:border-r lg:border-r-0.5 lg:border-navy/10 lg:pr-12">
            <div className="lg:sticky lg:top-32">
              <SectionHeader
                eyebrow="Why P36"
                title="The P36 Advantage"
                description="An expert operating model built for founders architecting industry-defining catalysts. We provide specialized judgment and capital strategy—not just advisory."
              />
            </div>
          </div>

          <div className="mt-16 border-t-0.5 border-navy/10 pt-12 lg:col-span-7 lg:mt-0 lg:border-t-0 lg:pl-12 lg:pt-0">
            {blocks.map((block) => (
              <div
                key={block.title}
                className="group relative border-b border-border-subtle pb-20 pt-10 first:pt-0 last:border-b-0 last:pb-0"
              >
                <div
                  className="absolute left-0 top-0 h-full w-[0.5px] origin-top bg-navy/10 transition-[width,background-color,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-px group-hover:bg-navy-900/28"
                  aria-hidden
                />
                <div className="pl-8">
                  <h3 className="font-serif text-xl italic leading-snug tracking-tight text-navy-900 sm:text-2xl">
                    {block.title}
                  </h3>
                  <p className="mt-8 max-w-xl pb-6 text-sm leading-relaxed text-navy-900/85 lg:mt-10 lg:pb-10">
                    {block.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
