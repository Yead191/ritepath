"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";

interface LandingCTAProps {
  onViewDemo?: () => void;
}

export const LandingCTA = ({ onViewDemo }: LandingCTAProps) => {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-[#1AABE2] px-8 py-12 text-center shadow-2xl sm:px-14 sm:py-16 lg:px-16 lg:py-20">
          {/* Ambient Glowing Orbs */}
          <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-white/15 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 -z-10 h-80 w-96 rounded-full bg-[#000D25]/20 blur-3xl pointer-events-none" aria-hidden="true" />

          {/* Headline */}
          <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight">
            Ready to Transform Your Workflow?
          </h2>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/90 mb-8 font-normal leading-relaxed">
            Join hundreds of funeral directors who trust RitePath to keep cases, compliance, signatures, and family care connected in one platform.
          </p>

          {/* Button Group */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={onViewDemo}
              className="inline-flex items-center justify-center gap-2.5 text-base font-bold text-white bg-[#000D25] hover:bg-[#000D25]/90 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#000D25] focus:ring-offset-2 rounded-full border border-white/20 px-9 py-4 hover:scale-105 shadow-xl"
              aria-label="Start 14 day free trial"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Subtext */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white/90">
            <ShieldCheck className="h-4 w-4 text-white" />
            <span>Secure login • Professional funeral home management • 14-day free trial</span>
          </div>
        </div>
      </div>
    </section>
  );
};
