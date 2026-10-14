import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact | P36 Ventures",
  description: "Request a briefing with P36 Ventures on capital or studio work.",
};

export default function ContactPage() {
  return (
    <main className="relative flex-1 bg-paper">
      <PageHero
        eyebrow="Contact"
        title="Request a briefing."
        lead="Describe the situation: stage, capital need, and timeline. We respond to qualified inquiries within two business days."
      />

      <section className="section-v2">
        <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-4">
            <div className="flex flex-col lg:sticky lg:top-28">
              <div className="border-t border-line py-5">
                <p className="label-v2 mb-2">Direct</p>
                <a
                  href="mailto:services@p36ventures.com"
                  className="text-[15px] text-ink underline decoration-line underline-offset-4"
                >
                  services@p36ventures.com
                </a>
              </div>
              <div className="border-t border-line py-5">
                <p className="label-v2 mb-2">Office hours</p>
                <p className="text-[15px] leading-[1.65] text-ink">
                  Tuesday &amp; Thursday
                  <br />
                  9:00 AM–12:00 PM ET
                </p>
                <p className="mt-1 text-[13.5px] text-ink-soft">
                  Briefings by appointment.
                </p>
              </div>
              <div className="border-y border-line py-5">
                <p className="label-v2 mb-2">Teams in</p>
                <p className="text-[15px] leading-[1.65] text-ink">
                  New York, Miami, London, Delhi
                </p>
              </div>
            </div>
          </aside>
          <div className="lg:col-span-7 lg:col-start-6">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
