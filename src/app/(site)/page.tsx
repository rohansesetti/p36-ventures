import { SectionReveal } from "@/components/SectionReveal";
import { Advantage } from "@/components/sections/Advantage";
import { Hero } from "@/components/sections/Hero";
import { Methodology } from "@/components/sections/Methodology";
import { Mission } from "@/components/sections/Mission";
import { PortfolioProof } from "@/components/sections/PortfolioProof";
import { Services } from "@/components/sections/Services";
import { StrategicAlliances } from "@/components/sections/StrategicAlliances";
import { SolutionsByStage } from "@/components/sections/SolutionsByStage";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "P36 Ventures | Strategic Finance & Capital",
  description:
    "The operational engine room for founders. Infrastructure, capital, and exit engineering for high-growth ventures.",
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <SectionReveal>
        <Hero />
      </SectionReveal>
      <SectionReveal>
        <Mission />
      </SectionReveal>
      <SectionReveal>
        <PortfolioProof />
      </SectionReveal>
      <SectionReveal>
        <Methodology />
      </SectionReveal>
      <SectionReveal>
        <SolutionsByStage />
      </SectionReveal>
      <SectionReveal>
        <Services />
      </SectionReveal>
      <SectionReveal>
        <StrategicAlliances />
      </SectionReveal>
      <SectionReveal>
        <Advantage />
      </SectionReveal>
      <SectionReveal>
        <section className="border-t-0.5 border-t-navy/10 bg-background py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-8">
            <p className="max-w-xl text-sm leading-relaxed text-navy-900/85">
              Explore how each pillar translates into execution-level workstreams
              and deliverables.
            </p>
            <Link
              href="/services"
              className="shrink-0 border border-navy-900/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-navy-900 shadow-[0_1px_2px_rgba(10,25,47,0.05)] transition-colors hover:border-navy-900/40 hover:bg-white"
            >
              View all services
            </Link>
          </div>
        </section>
      </SectionReveal>
    </main>
  );
}
