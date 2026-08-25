import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PhotoTint } from "@/components/ui/PhotoTint";

export function ClosingCTA() {
  return (
    <section id="contact" className="relative z-[1] border-t border-line">
      <div className="wrap grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center py-16 pr-0 lg:py-24 lg:pr-16">
          <Reveal>
            <p className="heading-serif max-w-[28rem] text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-[1.3]">
              Mandates begin with a briefing.{" "}
              <span className="text-ink-soft">
                We take a limited number each year.
              </span>
            </p>
          </Reveal>
          <Reveal>
            <Link href="/contact" className="cta-link mt-8">
              Request a briefing →
            </Link>
          </Reveal>
        </div>

        <PhotoTint
          src="/photos/fields/briefing.jpg"
          alt="A sunlit conference room looking onto the street"
          tint="gold"
          revealOnHover={false}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[16/11] w-full lg:aspect-auto lg:h-full lg:min-h-[28rem]"
        />
      </div>
    </section>
  );
}
