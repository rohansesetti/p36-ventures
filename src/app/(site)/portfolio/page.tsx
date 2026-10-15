import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WorkGrid } from "@/components/work/WorkGrid";
import { selectedWork } from "@/data/selectedWork";

export const metadata: Metadata = {
  title: "Portfolio | P36 Ventures",
  description:
    "Studio and capital work across deep tech, regeneration, consumer, and institutional education.",
};

const studioCount = selectedWork.filter((i) => i.type === "studio").length;
const capitalCount = selectedWork.filter((i) => i.type === "capital").length;

const summary = [
  { num: `${selectedWork.length}`, label: "Ventures built or financed" },
  { num: `${studioCount}`, label: "Studio companies" },
  { num: `${capitalCount}`, label: "Capital raises" },
  { num: "$200M+", label: "Capital structured" },
] as const;

export default function PortfolioPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            The companies we&apos;ve{" "}
            <em className="font-light italic">built and backed</em>.
          </>
        }
        lead="Every company here is one we worked on ourselves — as co-founder, as fractional leadership, or as the team that structured the capital. Open any card to read what we actually did."
      />

      <section className="section-v2">
        <div className="wrap">
          <div className="mb-14 grid grid-cols-2 gap-6 border-b border-line pb-10 lg:grid-cols-4">
            {summary.map((item) => (
              <div key={item.label}>
                <div className="heading-serif text-[clamp(1.75rem,3.2vw,2.5rem)] font-light">
                  {item.num}
                </div>
                <div className="mt-1.5 text-[12.5px] tracking-[0.03em] text-ink-faint">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <WorkGrid columns={3} />

          <div className="mt-14 border-t border-line pt-10">
            <h2 className="heading-serif max-w-[20ch] text-[clamp(1.5rem,2.8vw,2.125rem)] font-light leading-[1.2]">
              Building something that belongs on this list?
            </h2>
            <Link href="/contact" className="cta-solid mt-6">
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
