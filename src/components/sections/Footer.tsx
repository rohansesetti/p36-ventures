import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-line py-11">
      <div className="wrap flex flex-wrap items-center justify-between gap-5 text-[12.5px] text-ink-faint">
        <div className="flex items-center gap-5">
          <Image
            src="/p36-logo.png"
            alt="P36 Ventures"
            width={100}
            height={40}
            className="h-8 w-auto opacity-80"
            style={{ height: "auto" }}
          />
          <span>© {new Date().getFullYear()} P36 Ventures</span>
        </div>
        <div>
          <Link href="/#disciplines" className="mr-6 text-ink-faint no-underline hover:text-ink">
            Studio &amp; Capital
          </Link>
          <Link href="/#work" className="mr-6 text-ink-faint no-underline hover:text-ink">
            Portfolio
          </Link>
          <Link href="/#process" className="text-ink-faint no-underline hover:text-ink">
            Process
          </Link>
        </div>
      </div>
    </footer>
  );
}
