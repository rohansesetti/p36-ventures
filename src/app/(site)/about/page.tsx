import { AboutScrollJourney } from "@/components/about/AboutScrollJourney";
import { Methodology } from "@/components/sections/Methodology";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

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
    <main className="flex-1 bg-paper">
      <AboutScrollJourney />

      <section className="border-b border-border-subtle py-16 lg:py-20">
        <Container className="max-w-3xl">
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
        </Container>
      </section>

      <section className="border-b border-border-subtle bg-background section-py">
        <Container>
          <p className="label-mono-gold">The fractional edge</p>
          <h2 className="heading-h2 mt-4 text-3xl text-navy-900 sm:text-4xl">
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
          <ButtonLink href="/services" className="mt-10">
            View service modules
          </ButtonLink>
        </Container>
      </section>

      <section className="section-py">
        <Container>
          <p className="label-mono-gold">Team</p>
          <h2 className="heading-h2 mt-4 text-3xl text-navy-900 sm:text-4xl">
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
                <div className="flex aspect-[4/5] w-full items-center justify-center border-0.5 border-navy/10 bg-white shadow-[0_1px_3px_rgba(10,25,47,0.05)]">
                  <span className="font-serif text-4xl italic text-navy-900/15">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
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
        </Container>
      </section>

      <Methodology />
    </main>
  );
}
