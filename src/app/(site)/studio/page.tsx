import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Studio & Capital | P36 Ventures",
  description:
    "Two ways we work with founders: co-founding companies from a blank page, or structuring the capital for one already in motion.",
};

const tracks = [
  {
    id: "studio",
    dot: "dot-studio",
    name: "Studio",
    tagline: "For ideas that need an operator before they need a term sheet.",
    body: "We co-found. That means we take equity, share the risk, and do the unglamorous work — incorporating the entity, shaping the first product, hiring the first team, and staying in the room until the company can raise on its own terms.",
    covers: [
      "Company formation, cap table, and founding agreements",
      "First product definition and build oversight",
      "Founding team hiring and compensation design",
      "Fractional CEO, COO, or CFO leadership while you scale",
      "Positioning and narrative ahead of the first institutional round",
    ],
    fit: "You have conviction and domain edge, but no company yet — or a company that needs an operator alongside you.",
    cta: { href: "/contact", label: "Request a studio briefing" },
  },
  {
    id: "capital",
    dot: "dot-capital",
    name: "Capital",
    tagline: "For founders with traction who need the capital structured properly.",
    body: "Most rounds are lost before the first meeting — in a data room that does not hold up, a model that cannot be defended, or a structure that quietly caps the valuation. We fix that, then run the process end to end.",
    covers: [
      "Capital structure design across equity, debt, and non-dilutive funding",
      "Financial modeling, forecasting, and valuation defense",
      "Data room build and diligence readiness",
      "Investor narrative, memorandum, and pitch materials",
      "Targeted investor introductions and process management through close",
    ],
    fit: "You have revenue or a working product, and the next raise needs to be run like a transaction rather than a hope.",
    cta: { href: "/what-we-do", label: "See the practices" },
  },
] as const;

const principles = [
  {
    rn: "I",
    title: "We take the work, not the meeting",
    desc: "Every engagement has a deliverable attached. If we cannot name what leaves our desk, we do not take the engagement.",
  },
  {
    rn: "II",
    title: "Small number of companies",
    desc: "We work with a small number of companies so the people you meet lead the work.",
  },
  {
    rn: "III",
    title: "Aligned on outcome",
    desc: "Studio work is equity-based. Capital raises are structured so we win when the round closes, not when the invoice does.",
  },
] as const;

export default function StudioPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Two practices. One{" "}
            <em className="font-light italic">operating standard</em>.
          </>
        }
        lead="P36 is a capital advisory firm with a studio arm. Studio work forms and operates companies. Capital work structures the round and closes it. A limited number of engagements run both."
      />

      {tracks.map((track, i) => (
        <section
          key={track.id}
          id={track.id}
          className={`section-v2 ${i > 0 ? "border-t border-line" : ""}`}
        >
          <div className="wrap">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
              <div>
                <h2 className="heading-serif mb-4 flex items-center gap-3.5 text-[clamp(2rem,4vw,3rem)] font-light">
                  <span className={track.dot} aria-hidden />
                  {track.name}
                </h2>
                <p className="mb-6 max-w-[420px] text-[17px] font-light leading-[1.6] text-ink">
                  {track.tagline}
                </p>
                <p className="mb-8 max-w-[420px] text-[15px] leading-[1.75] text-ink-soft">
                  {track.body}
                </p>
                <Link href={track.cta.href} className="cta-link">
                  {track.cta.label} →
                </Link>
              </div>

              <div>
                <p className="label-v2 mb-5">What the engagement covers</p>
                <ul className="mb-8 flex flex-col">
                  {track.covers.map((item) => (
                    <li
                      key={item}
                      className="border-t border-line py-4 text-[14.5px] leading-[1.6] text-ink-soft last:border-b"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="label-v2 mb-3">Who it fits</p>
                <p className="max-w-[440px] text-[14.5px] leading-[1.7] text-ink-soft">
                  {track.fit}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-v2 border-t border-line">
        <div className="wrap">
          <p className="label-v2 mb-5">How we operate</p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            {principles.map((p) => (
              <div key={p.rn}>
                <span className="heading-serif text-lg italic text-ink-faint">
                  {p.rn}
                </span>
                <h3 className="heading-serif mt-2 text-xl font-normal">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-ink-soft">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-10">
            <h2 className="heading-serif max-w-[22ch] text-[clamp(1.5rem,2.8vw,2.125rem)] font-light leading-[1.2]">
              If the work sits across both practices, that is the first thing we
              establish.
            </h2>
            <Link href="/contact" className="cta-solid mt-6">
              Request a briefing →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
