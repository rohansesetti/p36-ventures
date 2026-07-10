import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const mandates = [
  {
    title: "Fractional CFO & Capital Advisory",
    copy: "Institutional financial models, corporate structures, and Information Memorandums for capital raises—from seed through growth.",
    index: "01",
  },
  {
    title: "Sovereign & ESG Project Engineering",
    copy: "Feasibility frameworks and risk-mitigation data layers for government-backed infrastructure and cross-border ESG developments.",
    index: "02",
  },
  {
    title: "M&A Target Origination",
    copy: "Market-mapping and algorithmic target sourcing across defensive verticals to unlock off-market transaction pipelines.",
    index: "03",
  },
] as const;

export function CoreMandates() {
  return (
    <section id="mandates" className="border-b border-border-subtle bg-background section-py">
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title="Core mandates"
          description="Three execution lanes—each delivered as modular workstreams with institutional outputs and clear handoffs."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          {mandates.map((mandate) => (
            <article key={mandate.index}>
              <span className="font-mono text-[10px] font-bold tabular-nums tracking-[0.2em] text-gold">
                {mandate.index}
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold italic leading-snug tracking-tight text-navy-900 sm:text-2xl">
                {mandate.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-navy-900/85">
                {mandate.copy}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
