"use client";

import { LandingBenefits } from "@/sections/LandingBenefits";
import { LandingCTA } from "@/sections/LandingCTA";
import { LandingFeatures } from "@/sections/LandingFeatures";
import { LandingFooter } from "@/sections/LandingFooter";
import { LandingHeader } from "@/sections/LandingHeader";
import { LandingHero } from "@/sections/LandingHero";
import { LandingSteps } from "@/sections/LandingSteps";
import { LandingTrial } from "@/sections/LandingTrial";

export default function HomePage() {
  return (
    <main>
      <LandingHeader />
      <LandingHero onViewDemo={() => {}} />
      <LandingTrial onViewDemo={() => {}} />
      <LandingFeatures />
      <LandingBenefits />
      <LandingSteps />
      <LandingCTA onViewDemo={() => {}} />
      <LandingFooter />
    </main>
  );
}
