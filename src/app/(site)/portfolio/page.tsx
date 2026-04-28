import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | P36 Ventures",
  description:
    "Category-defining ventures backed through strategic capital and operational excellence.",
};

export default function PortfolioPage() {
  return (
    <main className="flex-1 bg-background">
      <header className="border-b-0.5 border-navy/5 bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tighter text-navy-900 sm:text-5xl">
            The Portfolio.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-navy-900/85">
            Backing category-defining ventures through strategic capital and
            operational excellence.
          </p>
        </div>
      </header>

      <div
        className="flex h-48 w-full flex-col items-center justify-center bg-background"
        aria-hidden
      >
        <div className="h-10 w-[0.5px] bg-navy-900/18" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16 lg:px-8 lg:pb-20">
        <PortfolioGrid />
      </div>
    </main>
  );
}
