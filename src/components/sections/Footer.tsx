import Image from "next/image";
import Link from "next/link";
import { NavyNoise } from "@/components/NavyNoise";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t-0.5 border-white/10 bg-[#0A192F] text-white">
      <NavyNoise />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-12 lg:gap-y-0">
          <div className="flex flex-col gap-5">
            <Image
              src="/p36-logo.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-auto mix-blend-multiply opacity-[0.98]"
            />
            <p className="max-w-xs text-[10px] font-normal uppercase leading-relaxed tracking-widest text-white/55">
              Venture architecture &amp; capital strategy
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Quick links">
            <p className="text-[10px] font-normal uppercase tracking-widest text-white/40">
              Quick links
            </p>
            <ul className="mt-1 flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[10px] uppercase tracking-widest text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:text-right">
            <p className="text-[10px] font-normal uppercase tracking-widest text-white/40">
              Operational bases
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-widest text-white/75">
              London / New York
            </p>
          </div>
        </div>

        <div className="mt-16 border-t-0.5 border-white/10 pt-10">
          <p className="text-[10px] tracking-widest text-white/35">
            © {new Date().getFullYear()} P36 Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
