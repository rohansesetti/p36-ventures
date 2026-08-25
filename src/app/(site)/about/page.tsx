import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { offices } from "@/data/offices";

export const metadata: Metadata = {
  title: "The firm | P36 Ventures",
  description:
    "P36 is a capital advisory and venture studio. We form companies, structure rounds, and sit in the operating seat through close.",
};

const practices = [
  {
    title: "Studio",
    desc: "We co-found. Entity, product, team, and the first institutional round — equity-aligned, in the operating seat.",
  },
  {
    title: "Capital",
    desc: "We run the raise as a transaction. Model, memorandum, data room, coverage, and close.",
  },
] as const;

const seats = [
  {
    title: "Capital & finance",
    desc: "The model, the cap table, the board pack, and the cash. Fractional CFO until you hire it in-house.",
  },
  {
    title: "Governance",
    desc: "Entity hygiene, minutes, and a file that survives a buyer’s counsel. Installed before it is urgent.",
  },
  {
    title: "Coverage",
    desc: "The desks that write at this stage, in this order, with a story they can take to IC.",
  },
] as const;

const holds = [
  {
    title: "Named deliverables",
    desc: "If we cannot say what leaves our desk, we do not take the work.",
  },
  {
    title: "A short book",
    desc: "The people on the briefing are the people on the mandate. No junior bench behind a partner name.",
  },
  {
    title: "Aligned on close",
    desc: "Studio is equity. Capital is structured around the round. We do not bill for availability.",
  },
] as const;


export default function AboutPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow="The firm"
        title="In the operating seat."
        lead="P36 is a capital advisory and a venture studio. We form companies, structure the stack, and stay through close — not as a consultant on the side."
      />

      <section className="section-v2">
        <div className="wrap">
          <p className="heading-serif max-w-[40rem] text-[clamp(1.5rem,3vw,2.125rem)] font-light leading-[1.35]">
            Strategy without a deliverable is overhead.{" "}
            <span className="text-ink-soft">
              We take a limited number of mandates so the work is done by the
              people you meet.
            </span>
          </p>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="wrap">
          <ul className="grid grid-cols-1 border-y border-line md:grid-cols-2">
            {practices.map((item, i) => (
              <li
                key={item.title}
                className={`py-10 md:py-12 ${
                  i > 0 ? "border-t border-line md:border-t-0 md:border-l md:pl-12" : "md:pr-12"
                }`}
              >
                <h2 className="heading-serif text-[clamp(2rem,4vw,3rem)] font-light uppercase leading-none tracking-[0.02em]">
                  {item.title}
                </h2>
                <p className="mt-5 max-w-[400px] text-[14.5px] leading-[1.7] text-ink-soft">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-v2 border-t border-line">
        <div className="wrap">
          <p className="heading-serif mb-10 max-w-[36rem] text-[clamp(1.375rem,2.6vw,1.875rem)] font-light leading-[1.35]">
            How a mandate is staffed.{" "}
            <span className="text-ink-soft">Three seats. No theatre.</span>
          </p>
          <ul className="grid grid-cols-1 border-y border-line sm:grid-cols-3">
            {seats.map((seat, i) => (
              <li
                key={seat.title}
                className={`py-8 sm:py-10 ${
                  i > 0 ? "border-t border-line sm:border-t-0 sm:border-l sm:px-8" : "sm:pr-8"
                } ${i === 2 ? "sm:pl-8 sm:pr-0" : ""}`}
              >
                <h3 className="heading-serif text-xl font-light">{seat.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-ink-soft">
                  {seat.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-v2 border-t border-line">
        <div className="wrap">
          <p className="heading-serif mb-10 max-w-[36rem] text-[clamp(1.375rem,2.6vw,1.875rem)] font-light leading-[1.35]">
            What you can hold us to.
          </p>
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            {holds.map((item) => (
              <li key={item.title}>
                <h3 className="heading-serif text-xl font-light">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-ink-soft">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-v2 border-t border-line">
        <div className="wrap">
          <p className="heading-serif mb-8 text-[clamp(1.375rem,2.6vw,1.875rem)] font-light">
            Offices
          </p>
          <div className="max-w-xl">
            {offices.map((city, i) => (
              <div
                key={city.name}
                className={`flex items-baseline justify-between border-t border-line py-4 ${
                  i === offices.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span className="heading-serif text-[22px] font-light">
                  {city.name}
                </span>
                <span className="text-[12.5px] text-ink-faint">{city.region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-v2 border-t border-line">
        <div className="wrap">
          <p className="heading-serif max-w-[36rem] text-[clamp(1.5rem,2.8vw,2rem)] font-light leading-[1.3]">
            Briefings start with the situation.{" "}
            <span className="text-ink-soft">Not a deck.</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-8">
            <Link href="/contact" className="cta-link">
              Request a briefing →
            </Link>
            <Link
              href="/what-we-do"
              className="text-[13px] text-ink-soft no-underline hover:text-ink"
            >
              What we do
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
