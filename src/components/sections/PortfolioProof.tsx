import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlobalPresenceMap } from "@/components/sections/GlobalPresenceMap";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export function PortfolioProof() {
  return (
    <section
      id="portfolio"
      className="border-b border-border-subtle bg-background section-py"
    >
      <Container wide>
        <SectionHeader
          eyebrow="Portfolio"
          title="The proof."
          description="Category-defining ventures backed through strategic capital and operational excellence."
          className="mb-10 lg:mb-12"
        />
        <GlobalPresenceMap />
        <div className="mt-12 lg:mt-14">
          <PortfolioGrid />
        </div>
      </Container>
    </section>
  );
}
