import { GlobalPresenceMap } from "@/components/sections/GlobalPresenceMap";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export function PortfolioProof() {
  return (
    <section
      id="portfolio"
      className="border-b border-border-subtle bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-900/50">
            Portfolio
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tighter text-navy-900 sm:text-5xl">
            The proof.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-navy-900/85">
            Category-defining ventures backed through strategic capital and
            operational excellence.
          </p>
        </div>
        <PortfolioGrid />
        <GlobalPresenceMap />
      </div>
    </section>
  );
}