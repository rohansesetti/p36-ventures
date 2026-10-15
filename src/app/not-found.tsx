import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Page not found | P36 Ventures",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-paper">
        <header className="border-b border-line pt-32 pb-16 lg:pt-36 lg:pb-24">
          <div className="wrap">
            <p className="label-v2 mb-5">404</p>
            <h1 className="heading-serif max-w-[16ch] text-[clamp(2.25rem,5.2vw,4rem)] font-light leading-[1.06]">
              This page is not on the book.
            </h1>
            <div className="mt-10 flex flex-wrap gap-8">
              <Link href="/" className="cta-link">
                Home →
              </Link>
              <Link href="/opportunities" className="cta-link">
                Careers →
              </Link>
              <Link href="/contact" className="cta-link">
                Contact →
              </Link>
            </div>
          </div>
        </header>
      </main>
      <Footer />
    </div>
  );
}
