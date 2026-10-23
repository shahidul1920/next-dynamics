"use client";

import Navbar from "@/components/Navbar";
import HeroJourney from "@/components/HeroJourney";
import StudioShowreel from "@/components/StudioShowreel";
import SelectedWork from "@/components/SelectedWork";
import ThePractice from "@/components/ThePractice";
import InvestmentStructure from "@/components/InvestmentStructure";
import ContactStage from "@/components/ContactStage";
import EditorialFooter from "@/components/EditorialFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-midnight text-paper selection:bg-electric-cyan selection:text-midnight">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Chapter 01 to 06 Journey */}
      <main className="relative flex flex-col w-full">
        {/* Pinned 320vh 3D Scroll Journey Stage */}
        <HeroJourney />
        <StudioShowreel />
        <SelectedWork />
        <ThePractice />
        <InvestmentStructure />
        <ContactStage />
      </main>

      {/* Signature Horizon Footer with Interactive 3D Kinetic Sculpture */}
      <EditorialFooter />
    </div>
  );
}
