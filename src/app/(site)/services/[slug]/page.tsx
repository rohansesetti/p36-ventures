import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import {
  getCategory,
  getService,
  relatedServices,
  services,
} from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service | P36 Ventures" };
  return {
    title: `${service.title} | P36 Ventures`,
    description: `${service.title} ${service.forLine}. ${service.lead}`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const category = getCategory(service.categoryId);
  const related = relatedServices(service);

  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        lead={`${service.forLine.charAt(0).toUpperCase()}${service.forLine.slice(1)}.`}
      />

      <section className="section-v2">
        <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.7fr)] lg:gap-20">
          <div>
            <p className="max-w-[40rem] text-[16px] font-light leading-[1.75] text-ink-soft">
              {service.lead}
            </p>

            <h2 className="heading-serif mt-14 text-[clamp(1.5rem,2.6vw,2rem)] font-light">
              When this is the work
            </h2>
            <ul className="mt-6 flex flex-col">
              {service.when.map((item) => (
                <li
                  key={item.title}
                  className="border-t border-line py-5 last:border-b"
                >
                  <h3 className="font-sans text-[15px] font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[38rem] text-[14.5px] leading-[1.7] text-ink-soft">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <p className="label-v2 mb-4">What you receive</p>
            <ul className="flex flex-col">
              {service.deliverables.map((d) => (
                <li
                  key={d}
                  className="border-t border-line py-3.5 text-[14px] leading-[1.55] text-ink-soft last:border-b"
                >
                  {d}
                </li>
              ))}
            </ul>
            {category ? (
              <p className="mt-8 text-[12.5px] text-ink-faint">
                Practice ·{" "}
                <Link
                  href={`/what-we-do#${category.id}`}
                  className="text-ink-soft no-underline hover:text-ink"
                >
                  {category.label}
                </Link>
              </p>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="section-v2 border-t border-line">
        <div className="wrap">
          <h2 className="heading-serif text-[clamp(1.5rem,2.6vw,2rem)] font-light">
            How the work runs
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
            {service.method.map((step, i) => (
              <li key={step.title}>
                <span className="heading-serif text-lg italic text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="heading-serif mt-2 text-xl font-normal">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-ink-soft">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length ? (
        <section className="section-v2 border-t border-line">
          <div className="wrap">
            <p className="label-v2 mb-6">Related practices</p>
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group block no-underline"
                  >
                    <h3 className="heading-serif text-[1.25rem] font-normal group-hover:opacity-55">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-soft">
                      {item.forLine}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section-v2 border-t border-line">
        <div className="wrap">
          <h2 className="heading-serif max-w-[22ch] text-[clamp(1.5rem,2.8vw,2.125rem)] font-light leading-[1.2]">
            Briefings start with the situation, not a form.
          </h2>
          <div className="mt-8 flex flex-wrap gap-8">
            <Link href="/contact" className="cta-link">
              Request a briefing →
            </Link>
            <Link
              href="/what-we-do"
              className="text-[13px] tracking-[0.04em] text-ink-soft no-underline hover:text-ink"
            >
              All practices
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
