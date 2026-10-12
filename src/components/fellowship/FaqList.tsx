import type { Faq } from "@/data/fellowship";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <details
          key={item.q}
          className={`group border-t border-line ${
            i === items.length - 1 ? "border-b" : ""
          }`}
        >
          <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 outline-none focus-visible:underline [&::-webkit-details-marker]:hidden">
            <span className="heading-serif text-[1.125rem] font-normal leading-[1.4] text-ink md:text-xl">
              {item.q}
            </span>
            <span
              aria-hidden
              className="heading-serif shrink-0 text-xl font-light text-ink-faint transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-[40rem] pb-6 text-[14.5px] leading-[1.75] text-ink-soft">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
