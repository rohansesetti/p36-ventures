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
          <p className="label-v2 mb-4">Teams in</p>
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
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/company/p36-ventures"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="P36 Ventures on LinkedIn"
            className="inline-flex items-center gap-2 text-ink-faint no-underline transition-colors hover:text-ink"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:services@p36ventures.com"
            className="text-ink-faint no-underline hover:text-ink"
          >
            services@p36ventures.com
          </a>
        </div>
      </div>
    </footer>
  );
}
