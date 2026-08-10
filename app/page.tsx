"use client";

import { LandingHeader } from "@/sections/LandingHeader";
import { LandingHero } from "@/sections/LandingHero";
import { LandingCEO } from "@/sections/LandingCEO";
import { LandingVision } from "@/sections/LandingVision";
import { LandingVideo } from "@/sections/LandingVideo";
import { LandingOneCase } from "@/sections/LandingOneCase";
import { LandingSolutions } from "@/sections/LandingSolutions";
import { LandingBenefits } from "@/sections/LandingBenefits";
import { LandingCalculator } from "@/sections/LandingCalculator";
import { LandingCTA } from "@/sections/LandingCTA";
import { LandingFooter } from "@/sections/LandingFooter";

export default function HomePage() {
  const handleScrollToCalculator = () => {
    const el = document.getElementById("calculator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-[#1aabe2] selection:text-white">
      {/* Sticky Header */}
      <LandingHeader onBookDemo={handleScrollToCalculator} />

      {/* 1. Hero Section with Typing Animation, Free Trial CTA & Trust Badges */}
      <LandingHero onViewDemo={handleScrollToCalculator} />

      {/* 2. Message from CEO Michelle Munoz */}
      <LandingCEO />

      {/* 3. Purpose & Vision Statement */}
      <LandingVision />

      {/* 4. Customer Testimonial Video Section */}
      <LandingVideo />

      {/* 5. Dark Navy #000D25 Banner: 1 Case Shouldn't Require 5 Tools */}
      <LandingOneCase />

      {/* 6. Core Workflows: RitePath, Better in Every Way */}
      <LandingSolutions />

      {/* 7. Built for Compassionate Care 4-Pillars Grid */}
      <LandingBenefits />

      {/* 8. Interactive ROI Time Savings Calculator */}
      <LandingCalculator />

      {/* 9. Cyan CTA Section */}
      <LandingCTA onViewDemo={handleScrollToCalculator} />

      {/* 10. Footer */}
      <LandingFooter />
    </main>
  );
}
