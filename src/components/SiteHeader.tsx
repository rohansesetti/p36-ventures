"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { WhatWeDoMenu } from "@/components/nav/WhatWeDoMenu";

const navLinks = [
  { href: "/what-we-do", label: "What we do" },
  { href: "/studio", label: "Capabilities" },
  { href: "/portfolio", label: "Mandates" },
  { href: "/process", label: "Process" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/about", label: "Firm" },
  { href: "/contact", label: "Contact" },
] as const;

const desktopLinks = navLinks.filter(
  (l) => l.href !== "/contact" && l.href !== "/what-we-do",
);

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] py-5 transition-colors duration-300 ${
          scrolled
            ? "border-b border-line bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="wrap flex items-center justify-between gap-8">
          <Link href="/" className="shrink-0 no-underline" aria-label="P36 Ventures home">
            <BrandMark />
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            <WhatWeDoMenu />
            {desktopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[12px] font-medium tracking-[0.06em] text-ink no-underline transition-opacity hover:opacity-55"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-sans text-[12px] font-medium tracking-[0.06em] text-ink no-underline transition-opacity hover:opacity-55"
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="flex cursor-pointer items-center gap-2.5 border-none bg-transparent font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink lg:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="nav-overlay"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-px w-[22px] bg-ink" />
              <span className="block h-px w-[22px] bg-ink" />
            </span>
            Menu
          </button>
        </div>
      </header>

      <div
        id="nav-overlay"
        className={`fixed inset-0 z-[200] bg-paper text-ink transition-transform duration-[550ms] ease-[cubic-bezier(0.7,0,0.2,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!open}
      >
        <div className="wrap flex h-full min-h-0 flex-col py-10">
          <div className="flex shrink-0 items-center justify-between">
            <Link
              href="/"
              className="shrink-0 no-underline"
              onClick={() => setOpen(false)}
              aria-label="P36 Ventures home"
            >
              <BrandMark />
            </Link>
            <button
              type="button"
              className="cursor-pointer border-none bg-transparent font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          <nav className="flex min-h-0 flex-1 flex-col justify-center py-10" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="heading-serif border-t border-line py-4 text-[clamp(2rem,5.5vw,3.25rem)] font-light uppercase leading-none tracking-[0.02em] text-ink no-underline transition-opacity hover:opacity-55"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 flex-wrap justify-between gap-3 text-xs text-ink-faint">
            <span>Delhi — New York — London</span>
            <a href="mailto:hello@p36ventures.com" className="text-ink-soft no-underline">
              hello@p36ventures.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
