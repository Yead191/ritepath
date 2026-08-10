"use client";

import { LandingFooter } from "@/sections/LandingFooter";
import { LandingHeader } from "@/sections/LandingHeader";
import { LandingHero } from "@/sections/LandingHero";
import { LandingTrial } from "@/sections/LandingTrial";
import { LandingSolutions } from "@/sections/LandingSolutions";
import { LandingProof } from "@/sections/LandingProof";
// import { LandingInsights } from "@/sections/LandingInsights";
// import { LandingImpact } from "@/sections/LandingImpact";
// import { LandingScrollStack } from "@/sections/LandingScrollStack";
import { LandingAppShowcase } from "@/sections/LandingAppShowcase";
import { LandingCompare } from "@/sections/LandingCompare";
import { LandingCEO } from "@/sections/LandingCEO";
import { LandingCTA } from "@/sections/LandingCTA";

export default function HomePage() {
  return (
    <main>
      <LandingHeader />
      <LandingHero onViewDemo={() => {}} />

      <LandingTrial onViewDemo={() => {}} />

      <LandingSolutions />

      <LandingProof />
      {/* <LandingInsights /> */}
      {/* <LandingImpact /> */}

      <LandingAppShowcase />
      {/* <LandingScrollStack /> */}

      <LandingCompare />
      <LandingCEO />
      {/* <Reveal>
        <LandingFeatures />
      </Reveal>
      <Reveal>
        <LandingBenefits />
      </Reveal>
      <Reveal>
        <LandingSteps />
      </Reveal> */}

      <LandingCTA onViewDemo={() => {}} />

      <LandingFooter />
    </main>
  );
}
