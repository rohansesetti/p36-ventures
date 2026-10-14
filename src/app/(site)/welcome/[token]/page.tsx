import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { getSelection } from "@/lib/acceptance";
import { membership, membershipIncludes } from "@/data/fellowship";

type Props = { params: Promise<{ token: string }> };

export const metadata: Metadata = {
  title: "Your place | The P36 Fellowship",
  robots: { index: false, follow: false },
};

export default async function WelcomePage({ params }: Props) {
  const { token } = await params;
  const selection = await getSelection(token);

  if (!selection) {
    return (
      <main className="relative flex-1 bg-paper">
        <PageHero
          eyebrow="The P36 Fellowship"
          title="This link has expired."
          lead={`Selection links are single-use and time-limited. Write to ${membership.contact} and we will send a new one.`}
        />
      </main>
    );
  }

  const stripeLink = process.env.STRIPE_PAYMENT_LINK;

  const details = [
    { label: "Workstream", value: selection.workstream },
    { label: "Starts", value: selection.startDate },
    { label: "Daily standup", value: selection.standupTime },
  ];

  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow={`The P36 Fellowship · ${selection.cohort}`}
        title={`${selection.name}, you have been selected.`}
      >
        <dl className="mt-10 grid max-w-[46rem] grid-cols-1 border-t border-line sm:grid-cols-3">
          {details.map((d) => (
            <div key={d.label} className="border-b border-line py-4 sm:pr-6">
              <dt className="label-v2">{d.label}</dt>
              <dd className="heading-serif mt-2 text-lg font-normal">{d.value}</dd>
            </div>
          ))}
        </dl>
        <a href={selection.standupLink} className="cta-link mt-6">
          Standup link →
        </a>
      </PageHero>

      <section className="section-v2">
        <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label-v2 mb-5">Membership</p>
            <h2 className="heading-serif max-w-[18ch] text-[clamp(1.5rem,2.8vw,2.125rem)] font-light leading-[1.2]">
              Activate your membership.
            </h2>
            <p className="heading-serif mt-6 text-[clamp(2rem,4vw,2.75rem)] font-light leading-none">
              {membership.price}
              <span className="ml-3 font-sans text-[14px] text-ink-faint">one-time</span>
            </p>
            <p className="mt-5 max-w-[26rem] text-[14px] leading-[1.7] text-ink-soft">
              Reimbursed in full if you are offered an analyst role. You keep the
              templates and certificate either way.
            </p>
            <Link
              href="/opportunities/fellowship/membership#criteria"
              className="mt-3 inline-block text-[13px] text-ink underline underline-offset-4"
            >
              Reimbursement criteria
            </Link>

            <div className="mt-10">
              {stripeLink ? (
                <a href={stripeLink} className="cta-solid">
                  Activate membership →
                </a>
              ) : (
                <p className="text-[13px] text-ink-faint">
                  Payment link not configured. Set STRIPE_PAYMENT_LINK.
                </p>
              )}
              <p className="mt-5 text-[13px] leading-[1.6] text-ink-faint">
                Questions? Reply to your selection email.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="label-v2 mb-4">Included</p>
            <ul className="flex flex-col">
              {membershipIncludes.map((item) => (
                <li key={item.title} className="border-t border-line py-4 last:border-b">
                  <h3 className="heading-serif text-lg font-normal">{item.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-[1.65] text-ink-soft">
                    {item.desc}
                    {"small" in item ? ` ${item.small}` : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
