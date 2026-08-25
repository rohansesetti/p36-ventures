import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  /** Height of the P36 mark. Wordmark scales with it. */
  markClassName?: string;
};

export function BrandMark({
  className = "",
  markClassName = "h-9",
}: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/p36-logo-mark.png"
        alt=""
        width={547}
        height={422}
        className={`w-auto ${markClassName}`}
        style={{ width: "auto" }}
        loading="eager"
        fetchPriority="high"
      />
      <span
        aria-hidden
        className="font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-ink sm:text-[13px]"
      >
        Ventures
      </span>
    </span>
  );
}
