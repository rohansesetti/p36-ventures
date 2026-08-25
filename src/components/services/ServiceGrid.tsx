import Link from "next/link";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import type { Service } from "@/data/services";

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <ul className="grid grid-cols-1 border-t border-l border-line sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.slug} className="border-r border-b border-line">
          <Link
            href={`/services/${item.slug}`}
            className="group/card block h-full px-6 py-8 no-underline transition-colors hover:bg-paper-2/40"
          >
            <ServiceIcon id={item.icon} className="h-6 w-6 text-ink" />
            <h3 className="heading-serif mt-5 text-[1.35rem] font-light leading-snug">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[34ch] text-[13.5px] leading-[1.6] text-ink-soft">
              {item.forLine}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
