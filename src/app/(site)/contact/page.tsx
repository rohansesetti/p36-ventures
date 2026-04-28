import { ContactForm } from "@/components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | P36 Ventures",
  description:
    "Initiate a mandate—limited partnerships per year to ensure execution-level quality.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-background">
      <header className="border-b border-border-subtle bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-900/50">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-navy-900 sm:text-5xl">
            Initiate a Mandate.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-navy-900/85">
            We partner with a limited number of high-stakes ventures to ensure
            execution-level quality.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-16 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-20">
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
              Intro calls by appointment only.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-navy-900/55">
              We respond to qualified inquiries within two business days.
            </p>
          </div>
        </aside>
        <div className="lg:col-span-7 lg:col-start-6">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
