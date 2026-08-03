"use client";

import { LandingBenefits } from "@/sections/LandingBenefits";
import { LandingCTA } from "@/sections/LandingCTA";
import { LandingFeatures } from "@/sections/LandingFeatures";
import { LandingFooter } from "@/sections/LandingFooter";
import { LandingHeader } from "@/sections/LandingHeader";
import { LandingHero } from "@/sections/LandingHero";
import { LandingSteps } from "@/sections/LandingSteps";
import { LandingTrial } from "@/sections/LandingTrial";
import { LandingSolutions } from "@/sections/LandingSolutions";
import { LandingInsights } from "@/sections/LandingInsights";
import { LandingImpact } from "@/sections/LandingImpact";
import { LandingScrollStack } from "@/sections/LandingScrollStack";
import { Reveal } from "@/components/shared/Reveal";

export default function HomePage() {
  return (
    <main>
      <LandingHeader />
      <LandingHero onViewDemo={() => {}} />

      <Reveal>
        <LandingTrial onViewDemo={() => {}} />
      </Reveal>
      <Reveal>
        <LandingSolutions />
      </Reveal>
      <Reveal>
        <LandingInsights />
      </Reveal>
      <Reveal>
        <LandingImpact />
      </Reveal>
      <LandingScrollStack />
      <Reveal>
        <LandingFeatures />
      </Reveal>
      <Reveal>
        <LandingBenefits />
      </Reveal>
      <Reveal>
        <LandingSteps />
      </Reveal>
      <Reveal>
        <LandingCTA onViewDemo={() => {}} />
      </Reveal>

      <LandingFooter />
    </main>
  );
}
