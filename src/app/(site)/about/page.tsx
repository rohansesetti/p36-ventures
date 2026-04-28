import { AboutScrollJourney } from "@/components/about/AboutScrollJourney";
import { Methodology } from "@/components/sections/Methodology";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | P36 Ventures",
  description:
    "Operational engine room for founders—strategy with execution, institutional infrastructure, and fractional leadership.",
};

const team = [
  {
    name: "Alex Morgan",
    role: "Operating Partner",
    focus: "Capital structure & board cadence",
  },
  {
    name: "Jordan Ellis",
    role: "Partner, GTM",
    focus: "Revenue systems & international expansion",
  },
  {
    name: "Samira Okonkwo",
    role: "Partner, Finance",
    focus: "Fractional CFO operations & diligence",
  },
  {
    name: "Chris Vance",
    role: "Partner, Corporate Development",
    focus: "M&A readiness & governance",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="flex-1 bg-background">
      <AboutScrollJourney />

      <section className="border-b border-border-subtle py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-lg font-medium leading-relaxed tracking-tight text-navy-900 sm:text-xl">
            P36 Ventures is not a traditional consultancy. We are an operational
            engine room founded on the principle that strategy without execution
            is overhead.
          </p>
          <p className="mt-8 text-sm leading-relaxed text-navy-900/85">
            We sit where finance, governance, and GTM meet—building the
            back-office infrastructure, capital narratives, and operating rhythms
            that turn high-growth teams into investable, durable companies.
          </p>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-900/50">
            The fractional edge
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-navy-900 sm:text-4xl">
            Fractional CFO / COO—without the theater.
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-navy-900/85">
            Our fractional model delivers{" "}
            <strong className="font-semibold text-navy-900">
              institutional infrastructure
            </strong>
            : the back-end finances, corporate structuring, and governance
            artifacts that venture and growth investors expect—owned by
            operators who have run the playbook inside real companies.
          </p>
          <ul className="mt-10 space-y-3 text-sm text-navy-900/80">
            <li className="flex gap-2">
              <span className="text-gold">—</span>
              Board-ready reporting and forecasting, not slide-only narratives.
            </li>
            <li className="flex gap-2">
              <span className="text-gold">—</span>
              Legal and cap table hygiene aligned to your next funding event.
            </li>
            <li className="flex gap-2">
              <span className="text-gold">—</span>
              Embedded leadership in the data room—not quarterly check-ins.
            </li>
          </ul>
          <Link
            href="/services"
            className="mt-10 inline-flex border border-navy-900/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-navy-900 shadow-[0_1px_2px_rgba(10,25,47,0.05)] transition-colors hover:border-navy-900/40 hover:bg-white"
          >
            View service modules
          </Link>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-900/50">
            Team
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-navy-900 sm:text-4xl">
            Deep operational experience
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-900/85">
            We prioritize leaders who have scaled finance, revenue, and corporate
            development inside venture-backed environments—not generic advisory
            credentials.
          </p>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <li key={member.name}>
                <div className="aspect-[4/5] w-full border-0.5 border-navy/10 bg-white shadow-[0_1px_3px_rgba(10,25,47,0.05)]" />
                <p className="mt-4 text-sm font-semibold text-navy-900">
                  {member.name}
                </p>
                <p className="text-xs uppercase tracking-widest text-navy-900/45">
                  {member.role}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-navy-900/65">
                  {member.focus}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Methodology />
    </main>
  );
}
