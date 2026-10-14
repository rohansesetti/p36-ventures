import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { offices } from "@/data/offices";

const practices = [
  { href: "/what-we-do", label: "What we do" },
  { href: "/studio", label: "Capabilities" },
  { href: "/portfolio", label: "Work" },
  { href: "/process", label: "Process" },
] as const;

const firm = [
  { href: "/about", label: "The firm" },
  { href: "/opportunities", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
] as const;

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-line">
      <div className="wrap grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <BrandMark markClassName="h-8" />
          <p className="mt-5 max-w-[220px] text-[12.5px] leading-[1.65] text-ink-faint">
            Capital advisory and venture studio. Formation through execution.
          </p>
        </div>

        <div>
          <p className="label-v2 mb-4">Practice</p>
          <ul className="flex flex-col gap-2.5">
            {practices.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] text-ink-soft no-underline hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-v2 mb-4">Firm</p>
          <ul className="flex flex-col gap-2.5">
            {firm.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] text-ink-soft no-underline hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-v2 mb-4">Offices</p>
          <ul className="flex flex-col gap-2.5">
            {offices.map((office) => (
              <li key={office.name} className="text-[13px] text-ink-soft">
                {office.name}
                <span className="text-ink-faint"> — {office.region}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap flex flex-wrap items-center justify-between gap-3 border-t border-line py-5 text-[12px] text-ink-faint">
        <span>© {new Date().getFullYear()} P36 Ventures. All rights reserved.</span>
        <a
          href="mailto:services@p36ventures.com"
          className="text-ink-faint no-underline hover:text-ink"
        >
          services@p36ventures.com
        </a>
      </div>
    </footer>
  );
}
