"use client";

import { Heart, ShieldCheck } from "lucide-react";

export const LandingVision = () => {
  return (
    <section aria-labelledby="vision-title" className="relative bg-gradient-to-b from-white via-sky-50/50 to-white px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Subtle Decorative Heart Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[#1aabe2]/10 border border-[#1aabe2]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1aabe2] mb-6">
          <Heart className="h-3.5 w-3.5 fill-[#1aabe2]" />
          <span>Our Guiding Purpose</span>
        </div>

        {/* Headline */}
        <h2 id="vision-title" className="text-3xl font-bold leading-tight tracking-tight text-[#000D25] sm:text-4xl lg:text-5xl">
          Our vision is to create a future
        </h2>

        {/* Vision Statement Box */}
        <div className="mt-8 rounded-3xl bg-white p-8 sm:p-12 shadow-xl shadow-slate-200/60 border border-slate-200/80 backdrop-blur-sm">
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed text-[#000D25]">
            “Where funeral professionals spend less time managing systems and more time caring for families.”
          </p>

          <div className="mx-auto my-6 h-1 w-16 rounded-full bg-[#1aabe2]" />

          <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal max-w-3xl mx-auto">
            At RitePath, we believe every funeral home should have one connected platform that brings clarity 
            to every case, supports every team member, and keeps the arrangement moving from the first call 
            through completion.
          </p>
        </div>
      </div>
    </section>
  );
};
