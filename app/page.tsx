'use client';

import { LandingBenefits } from "@/sectinons/LandingBenefits";
import { LandingCTA } from "@/sectinons/LandingCTA";
import { LandingFeatures } from "@/sectinons/LandingFeatures";
import { LandingFooter } from "@/sectinons/LandingFooter";
import { LandingHeader } from "@/sectinons/LandingHeader";
import { LandingHero } from "@/sectinons/LandingHero";
import { LandingSteps } from "@/sectinons/LandingSteps";

export default function HomePage() {
  return (
    <main>
      <LandingHeader />
      <LandingHero onViewDemo={() => {}} />
      <LandingFeatures />
      <LandingBenefits />
      <LandingSteps />
      <LandingCTA onViewDemo={() => {}} />
      <LandingFooter />
    </main>
  );
}
