import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Disciplines } from "@/components/sections/Disciplines";
import { Hero } from "@/components/sections/Hero";
import { Opportunities } from "@/components/sections/Opportunities";
import { Process } from "@/components/sections/Process";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { StageTracks } from "@/components/sections/StageTracks";

export default function HomePage() {
  return (
    <main className="relative flex-1 bg-paper">
      <Hero />
      <StageTracks />
      <Disciplines />
      <SelectedWork />
      <Process />
      <Opportunities />
      <ClosingCTA />
    </main>
  );
}
