import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/sections/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col">
      <SiteHeader />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
}
