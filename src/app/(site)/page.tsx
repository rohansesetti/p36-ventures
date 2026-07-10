import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Disciplines } from "@/components/sections/Disciplines";
import { Hero } from "@/components/sections/Hero";
import { Presence } from "@/components/sections/Presence";
import { Process } from "@/components/sections/Process";
import { SelectedWork } from "@/components/sections/SelectedWork";

export default function HomePage() {
  return (
    <main className="relative flex-1 bg-paper">
      <Hero />
      <Disciplines />
      <SelectedWork />
      <Process />
      <Presence />
      <ClosingCTA />
    </main>
  );
}
