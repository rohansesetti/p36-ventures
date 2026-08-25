import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact | P36 Ventures",
  description:
    "Request a briefing with P36 Ventures on a capital or studio mandate.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-paper pt-24">
      <header className="page-hero">
        <Container>
          <SectionHeader
            eyebrow="Contact"
            title="Request a briefing."
            description="Describe the situation — stage, capital need, and timeline. We respond to qualified inquiries within two business days."
          />
        </Container>
      </header>

      <Container className="py-12 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-16">
        <aside className="mb-12 lg:col-span-4 lg:mb-0">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-navy-900/45">
              Direct contact
            </h2>
            <p className="mt-3 text-sm text-navy-900/80">
              <a
                href="mailto:services@p36ventures.com"
                className="border-b border-navy-900/20 transition-colors hover:border-navy-900/50"
              >
                services@p36ventures.com
              </a>
            </p>
            <h2 className="mt-10 text-[10px] font-semibold uppercase tracking-widest text-navy-900/45">
              Office hours
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/85">
              Tuesday &amp; Thursday, 09:00–12:00 GMT
              <br />
              Briefings by appointment.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-navy-900/55">
              We respond to qualified inquiries within two business days.
            </p>
          </div>
        </aside>
        <div className="lg:col-span-7 lg:col-start-6">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </main>
  );
}
