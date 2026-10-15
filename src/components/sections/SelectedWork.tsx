import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { MandatePhoto } from "@/components/work/MandatePhoto";
import { selectedWork } from "@/data/selectedWork";

export function SelectedWork() {
  return (
    <section id="work" className="section-v2 relative z-[1] !pt-8 lg:!pt-10">
      <div className="wrap">
        <Reveal>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-v2 mb-3">Selected work</p>
              <h2 className="heading-serif max-w-[28rem] text-[clamp(1.75rem,3.2vw,2.5rem)] font-light leading-[1.15]">
                Selected work
              </h2>
            </div>
            <p className="max-w-[320px] text-[13.5px] leading-[1.65] text-ink-soft sm:text-right">
              Capital and studio work across deep tech, energy, regeneration,
              and education.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="wrap !pr-0">
        <div className="mandate-film pr-6 lg:pr-12">
          {selectedWork.map((item, i) => {
            const card = (
              <MandatePhoto
                item={item}
                priority={i < 3}
                sizes="(min-width: 1024px) 22vw, 78vw"
                className="aspect-[4/5] w-full"
              />
            );

            return (
              <div key={item.id}>
                {item.websiteUrl ? (
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline"
                    aria-label={`${item.name} website`}
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="wrap">
        <Link href="/portfolio" className="cta-link mt-10">
          View all work →
        </Link>
      </div>
    </section>
  );
}
