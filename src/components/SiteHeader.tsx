"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#disciplines", label: "Studio & Capital" },
  { href: "/#work", label: "Portfolio" },
  { href: "/#process", label: "Process" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Image
      src="/p36-logo.png"
      alt="P36 Ventures"
      width={120}
      height={48}
      className="h-9 w-auto"
      style={{ width: "auto", height: "2.25rem" }}
      priority
    />
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] py-[30px]">
        <div className="wrap flex items-center justify-between">
          <Link href="/" className="shrink-0 no-underline" aria-label="P36 Ventures home">
            <Logo />
          </Link>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-2.5 border-none bg-transparent font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-ink"
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
        className={`fixed inset-0 z-[200] bg-ink text-paper transition-transform duration-[550ms] ease-[cubic-bezier(0.7,0,0.2,1)] ${
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
              <Logo />
            </Link>
            <button
              type="button"
              className="cursor-pointer border-none bg-transparent font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-paper"
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
                className="font-serif border-t border-paper/15 py-4 text-[clamp(2rem,5.5vw,3.75rem)] font-light leading-[1.12] tracking-[-0.01em] text-paper no-underline transition-opacity hover:italic hover:opacity-55"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 flex-wrap justify-between gap-3 text-xs text-paper/50">
            <span>London — New York — Miami — Singapore</span>
            <a
              href="mailto:hello@p36ventures.com"
              className="text-paper/80 no-underline"
            >
              hello@p36ventures.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
