import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { FellowshipApplicationForm } from "@/components/fellowship/FellowshipApplicationForm";
import { cohort } from "@/data/fellowship";

export const metadata: Metadata = {
  title: "Apply | The P36 Fellowship",
  description: "Apply for a place in the next cohort of the P36 Fellowship.",
};

const steps = [
  { rn: "I", text: "Written application" },
  { rn: "II", text: "20-minute video screen" },
  { rn: "III", text: "15-minute fit call" },
] as const;

export default function FellowshipApplyPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow="The P36 Fellowship"
        title="Apply for a place."
        lead={`${cohort.name} begins ${cohort.startDate}. Applications close ${cohort.closeDate}.`}
      />

      <section className="section-v2">
        <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="label-v2 mb-5">Selection</p>
            <ul className="flex flex-col">
              {steps.map((s) => (
                <li
                  key={s.rn}
                  className="grid grid-cols-[40px_1fr] gap-4 border-t border-line py-4 last:border-b"
                >
                  <span className="heading-serif italic text-ink-faint">{s.rn}</span>
                  <span className="text-[14.5px] text-ink">{s.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[22rem] text-[13.5px] leading-[1.65] text-ink-soft">
              There is nothing to pay to apply. The membership is activated
              only after selection.
            </p>
            <Link href="/opportunities/fellowship#faq" className="cta-link mt-6">
              Questions →
            </Link>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Suspense fallback={null}>
              <FellowshipApplicationForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
