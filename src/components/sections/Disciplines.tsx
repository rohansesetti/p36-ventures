import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PhotoTint } from "@/components/ui/PhotoTint";

const arms = [
  {
    id: "studio",
    title: "Studio",
    desc: "We form and operate companies from a blank page: entity, product, team, and the first institutional round. Equity-aligned, run as a co-founding engagement.",
    href: "/studio#studio",
    cta: "Studio practice →",
    image: "/photos/fields/studio.jpg",
    alt: "A long studio corridor with glass rooms and a dark wall",
    tint: "green" as const,
  },
  {
    id: "capital",
    title: "Capital",
    desc: "We design the stack and run the process: modeling, memorandum, data room, and coverage through close. Scoped as a transaction, not a retainer.",
    href: "/studio#capital",
    cta: "Capital practice →",
    image: "/photos/fields/capital.jpg",
    alt: "A bright workspace looking out onto the city",
    tint: "gold" as const,
  },
] as const;

export function Disciplines() {
  return (
    <section id="disciplines" className="section-v2 relative z-[1]">
      <div className="wrap">
        <Reveal>
          <p className="heading-serif mb-10 max-w-[40rem] text-[clamp(1.375rem,2.6vw,1.875rem)] font-light leading-[1.4]">
            Two practices.{" "}
            <span className="text-ink-soft">The same operating standard.</span>
          </p>
        </Reveal>

        <Reveal>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-0 md:border-y md:border-line">
            {arms.map((arm, i) => (
              <li
                key={arm.id}
                className={`md:px-10 md:py-12 ${
                  i > 0 ? "md:border-l md:border-line" : ""
                } ${i === 0 ? "md:pl-0" : ""} ${i === 1 ? "md:pr-0" : ""}`}
              >
                <PhotoTint
                  src={arm.image}
                  alt={arm.alt}
                  tint={arm.tint}
                  sizes="(min-width: 768px) 45vw, 92vw"
                  className="mb-8 aspect-[16/10] w-full"
                />
                <h3 className="heading-serif text-[clamp(2rem,4vw,3rem)] font-light uppercase leading-none tracking-[0.02em]">
                  {arm.title}
                </h3>
                <p className="mt-6 max-w-[400px] text-[14.5px] leading-[1.7] text-ink-soft">
                  {arm.desc}
                </p>
                <Link href={arm.href} className="cta-link mt-6">
                  {arm.cta}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
