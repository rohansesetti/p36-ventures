import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy | P36 Ventures",
  description:
    "How P36 Ventures collects, uses, and protects information from inquiries and applications.",
};

const EMAIL = "services@p36ventures.com";

const h2 = "heading-serif text-[clamp(1.375rem,2.4vw,1.75rem)] font-light leading-[1.25]";
const h3 = "heading-serif mt-8 text-lg font-normal";
const p = "mt-4 text-[15px] leading-[1.75] text-ink-soft";
const li = "border-t border-line py-3 text-[14.5px] leading-[1.65] text-ink-soft last:border-b";

export default function PrivacyPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow="Legal"
        title="Privacy."
        lead="We treat information from inquiries and applications with the same discretion as our client work."
      />

      <section className="section-v2">
        <div className="wrap">
          <div className="max-w-[45rem]">
            <p className="text-[13px] text-ink-faint">Last updated October 2026</p>

            {/* General */}
            <h2 className={`${h2} mt-8`}>Who we are</h2>
            <p className={p}>
              P36 Ventures is a US-based capital advisory firm and venture
              studio. This page explains what we collect through this website,
              why, and what you can ask us to do with it. Questions go to{" "}
              <a href={`mailto:${EMAIL}`} className="text-ink underline decoration-line underline-offset-4">
                {EMAIL}
              </a>
              .
            </p>

            <h2 className={`${h2} mt-14`}>Visiting the site</h2>
            <p className={p}>
              We use Vercel Web Analytics to count page visits. It does not use
              cookies and does not identify you personally. We do not run
              advertising trackers.
            </p>

            {/* Applicants */}
            <h2 id="applicants" className={`${h2} mt-14 scroll-mt-28`}>
              Applications and inquiries
            </h2>
            <p className={p}>
              This covers applications to the P36 Fellowship, applications for
              analyst and scout roles, and briefing requests from founders.
            </p>

            <h3 className={h3}>What we collect</h3>
            <ul className="mt-4 flex flex-col">
              <li className={li}>
                <span className="text-ink">Contact details:</span> your name,
                email address, country, and LinkedIn profile.
              </li>
              <li className={li}>
                <span className="text-ink">Application details:</span> your
                resume link, cover letter, workstream or role preferences,
                weekly availability, and anything else you choose to write.
              </li>
              <li className={li}>
                <span className="text-ink">Your choices:</span> whether you
                accepted the membership terms and whether you opted in to the
                alumni network.
              </li>
              <li className={li}>
                <span className="text-ink">If you are selected:</span> payment
                for the membership is handled by Stripe. We never see or store
                your card details.
              </li>
            </ul>

            <h3 className={h3}>Why we use it</h3>
            <p className={p}>
              To assess your application, contact you about interviews and
              next steps, run the cohort if you are selected, and, for briefing
              requests, to respond to your inquiry. We do not use it for
              anything else.
            </p>

            <h3 className={h3}>Who can see it</h3>
            <p className={p}>
              Only the P36 team involved in selection and the cohort. We store
              submissions in Notion and host the site on Vercel; both process
              data on our behalf and only as needed to provide their services.
              We do not sell your information or share it for advertising.
            </p>
            <p className={p}>
              Your profile is shared with partner firms only if you tick the
              alumni network box on the application. You can withdraw that at
              any time by emailing us.
            </p>

            <h3 className={h3}>Your resume link</h3>
            <p className={p}>
              Your resume stays wherever you host it (for example Google Drive
              or Dropbox). You can revoke our access at any time by changing the
              link&rsquo;s sharing settings.
            </p>

            <h3 className={h3}>How long we keep it</h3>
            <p className={p}>
              If you are not selected, we delete your application within 12
              months, or sooner if you ask. If you join the Fellowship or the
              team, we keep your details for as long as you are involved with
              P36 and the alumni network, unless you ask us to remove them.
            </p>

            <h3 className={h3}>Where it is processed</h3>
            <p className={p}>
              P36 and its service providers are based in the United States.
              If you apply from another country, your information will be
              processed in the United States.
            </p>

            <h3 className={h3}>Your choices</h3>
            <p className={p}>
              You can ask to see the information we hold about you, correct
              it, or have it deleted, by emailing{" "}
              <a href={`mailto:${EMAIL}`} className="text-ink underline decoration-line underline-offset-4">
                {EMAIL}
              </a>
              . We respond within 30 days.
            </p>

            <h2 className={`${h2} mt-14`}>Changes</h2>
            <p className={p}>
              If we change how we handle your information, we will update this
              page and the date at the top.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
