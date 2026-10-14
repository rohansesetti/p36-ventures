import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import {
  membership,
  membershipIncludes,
} from "@/data/fellowship";

export const metadata: Metadata = {
  title: "Fellowship Membership | P36 Ventures",
  description:
    "What the P36 Fellowship Membership covers, what it costs, and how reimbursement works.",
};

const h2 =
  "heading-serif text-[clamp(1.375rem,2.4vw,1.75rem)] font-light leading-[1.25]";
const body = "mt-4 text-[15px] leading-[1.75] text-ink-soft";

export default function MembershipPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow="The P36 Fellowship"
        title="Membership."
      />

      <section className="section-v2">
        <div className="wrap">
          <div className="max-w-[45rem]">
            <div className="grid grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">I</span>
              <div>
                <h2 className={h2}>What it covers</h2>
                <ul className="mt-5 flex flex-col">
                  {membershipIncludes.map((item) => (
                    <li
                      key={item.title}
                      className="border-t border-line py-3.5 text-[14.5px] leading-[1.65] text-ink-soft last:border-b"
                    >
                      <span className="text-ink">{item.title}.</span>{" "}
                      {item.desc}
                      {"small" in item ? ` ${item.small}` : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">II</span>
              <div>
                <h2 className={h2}>Cost</h2>
                <p className="heading-serif mt-4 text-[clamp(2rem,4vw,2.75rem)] font-light leading-none">
                  {membership.price}
                  <span className="ml-3 font-sans text-[14px] text-ink-faint">
                    one-time
                  </span>
                </p>
                <p className={body}>
                  Activated after selection. Nothing to pay to apply.
                </p>
              </div>
            </div>

            <div
              id="criteria"
              className="grid scroll-mt-28 grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]"
            >
              <span className="heading-serif text-lg italic text-ink-faint">III</span>
              <div className="min-w-0">
                <h2 className={h2}>Reimbursement</h2>
                <p className={body}>
                  Reimbursed in full if you are offered a P36 analyst role after
                  the Week 6 review.
                </p>
                <p className={body}>
                  Offers are made at P36&rsquo;s discretion, based on your
                  execution during the cohort: the quality of your work, its
                  reliability, and your judgement. Offers are rare and not
                  guaranteed.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">IV</span>
              <div>
                <h2 className={h2}>Timing</h2>
                <p className={body}>
                  Reimbursed in full within {membership.reimbursementDays} days
                  of joining, to the original payment method.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">V</span>
              <div>
                <h2 className={h2}>If you are not offered a role</h2>
                <p className={body}>
                  You keep the templates and certificate. No reimbursement.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-5 border-t border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">VI</span>
              <div>
                <h2 className={h2}>Cancelling before the cohort starts</h2>
                <p className={body}>
                  Cancel at least 7 days before your start date, given in your
                  selection email, for a full refund of the membership fee.
                  Cancellations within 7 days of the start date are not
                  refunded.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr] gap-5 border-y border-line py-10 md:grid-cols-[70px_1fr]">
              <span className="heading-serif text-lg italic text-ink-faint">VII</span>
              <div>
                <h2 className={h2}>Questions</h2>
                <p className={body}>
                  Write to{" "}
                  <a
                    href={`mailto:${membership.contact}`}
                    className="text-ink underline decoration-line underline-offset-4"
                  >
                    {membership.contact}
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Link href="/opportunities/fellowship/apply" className="cta-solid">
                Apply →
              </Link>
              <Link href="/opportunities/fellowship" className="cta-link">
                About the Fellowship →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
