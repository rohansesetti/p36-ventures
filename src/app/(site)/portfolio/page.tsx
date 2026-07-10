import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | P36 Ventures",
  description:
    "Category-defining ventures backed through strategic capital and operational excellence.",
};

export default function PortfolioPage() {
  return (
    <main className="flex-1 bg-paper pt-[120px]">
      <header className="page-hero">
        <Container>
          <SectionHeader
            eyebrow="Portfolio"
            title="The Portfolio."
            description="Backing category-defining ventures through strategic capital and operational excellence."
          />
        </Container>
      </header>

      <Container className="pb-16 lg:pb-20">
        <PortfolioGrid />
      </Container>
    </main>
  );
}
