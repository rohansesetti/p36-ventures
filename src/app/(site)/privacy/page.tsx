import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | P36 Ventures",
  description: "Privacy practices for P36 Ventures.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 bg-paper pt-24">
      <header className="page-hero">
        <Container className="max-w-3xl">
          <SectionHeader
            eyebrow="Legal"
            title="Privacy"
          />
          <p className="mt-4 text-sm leading-relaxed text-navy-900/85">
            We treat inquiry and engagement data with the same discretion as our
            client work. A full policy will be published here; for questions,
            contact{" "}
            <a
              href="mailto:services@p36ventures.com"
              className="border-b border-navy-900/25 transition-colors hover:border-navy-900/50"
            >
              services@p36ventures.com
            </a>
            .
          </p>
          <h2 className="heading-serif mt-10 text-xl font-normal">
            Fellowship applicants
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy-900/85">
            [PLACEHOLDER: what applicant data is collected, why, the lawful
            basis, how long it is kept, who it is shared with (alumni network
            sharing is opt-in only), and how to request access or deletion.]
          </p>
        </Container>
      </header>
    </main>
  );
}
