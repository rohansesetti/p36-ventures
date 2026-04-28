import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | P36 Ventures",
  description: "Privacy practices for P36 Ventures.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 bg-background">
      <header className="border-b border-border-subtle bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-light tracking-tight text-navy-900">
            Privacy
          </h1>
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
        </div>
      </header>
    </main>
  );
}
