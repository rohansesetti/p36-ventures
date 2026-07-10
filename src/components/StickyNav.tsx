"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[10000] border-b-0.5 border-navy-900/5 transition-[background-color,backdrop-filter,backdrop-saturate] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl backdrop-saturate-150 [box-shadow:inset_0_-1px_0_0_rgba(10,25,47,0.03)]"
          : "bg-background/40 backdrop-blur-lg backdrop-saturate-125"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-3"
          aria-label="P36 Ventures home"
        >
          <Image
            src="/p36-logo.png"
            alt="P36 Ventures"
            width={40}
            height={40}
            className="h-9 w-auto shrink-0"
            priority
          />
          <span className="hidden text-[13px] font-semibold tracking-[0.25em] text-navy-900 sm:inline">
            P36 VENTURES
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-[11px] font-normal uppercase tracking-[0.2em] text-navy-900/80 sm:gap-x-10">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative pb-1.5 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  active ? "text-navy-900" : "hover:text-navy-900"
                }`}
              >
                {link.label}
                <span
                  className={`pointer-events-none absolute bottom-0 left-0 right-0 h-px origin-center bg-navy-900/30 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
