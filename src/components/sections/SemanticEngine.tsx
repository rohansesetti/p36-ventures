import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SemanticEngine() {
  return (
    <section
      id="technology"
      className="border-b border-border-subtle bg-white section-py"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Proprietary technology"
              title={
                <>
                  Semantic deal-structuring{" "}
                  <span className="font-serif italic">engine</span>
                </>
              }
              description="Our Claude-driven capture tool transforms unstructured founder narration into audit-ready data rooms and compliance frameworks—accelerating transaction readiness without the administrative drag."
            />
          </div>

          <div className="mt-12 border-l-2 border-gold pl-6 lg:col-span-7 lg:mt-0 lg:pl-10">
            <ul className="space-y-6 text-sm leading-relaxed text-navy-900/85">
              <li>
                <p className="font-semibold text-navy-900">Voice-to-VDR pipeline</p>
                <p className="mt-1">
                  Founder interviews converted into structured virtual data rooms
                  for deep-tech and defense-adjacent assets.
                </p>
              </li>
              <li>
                <p className="font-semibold text-navy-900">
                  Automated compliance scaffolding
                </p>
                <p className="mt-1">
                  Cap table hygiene, disclosure layers, and regulatory frameworks
                  generated alongside financial narratives.
                </p>
              </li>
              <li>
                <p className="font-semibold text-navy-900">
                  Faster institutional review
                </p>
                <p className="mt-1">
                  Compresses weeks of administrative setup into days—so diligence
                  starts on substance, not document assembly.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
