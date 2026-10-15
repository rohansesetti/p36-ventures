import { PhotoTint } from "@/components/ui/PhotoTint";
import type { SelectedWorkItem } from "@/data/selectedWork";
import Image from "next/image";
import { logoDisplaySize } from "@/lib/logoSize";


type MandatePhotoProps = {
  item: SelectedWorkItem;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function MandatePhoto({
  item,
  sizes,
  priority = false,
  className = "aspect-[4/5] w-full",
}: MandatePhotoProps) {
  const tint = item.type === "studio" ? "green" : "gold";

  return (
    <PhotoTint
      src={item.image.src}
      alt={item.image.alt}
      tint={tint}
      sizes={sizes}
      priority={priority}
      className={className}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-4 pb-4 pt-16">
        {item.logo ? (
          <div className="flex h-16 w-[11rem] max-w-full items-center justify-center bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
            <Image
              src={item.logo.src}
              alt={`${item.name} logo`}
              width={item.logo.width}
              height={item.logo.height}
              quality={100}
              sizes="148px"
              className="object-contain"
              style={logoDisplaySize(item.logo.width, item.logo.height)}
            />
          </div>
        ) : (
          <p className="font-serif text-[1.35rem] font-light leading-tight text-white">
            {item.name}
          </p>
        )}
        <p className="mt-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-white/75">
          {item.year} · {item.sector}
        </p>
      </div>
    </PhotoTint>
  );
}
