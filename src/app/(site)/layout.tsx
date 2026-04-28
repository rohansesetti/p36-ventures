import { CustomCursor } from "@/components/CustomCursor";
import { StickyNav } from "@/components/StickyNav";
import { Footer } from "@/components/sections/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <CustomCursor />
      <StickyNav />
      <div className="flex flex-1 flex-col pt-20">{children}</div>
      <Footer />
    </div>
  );
}
