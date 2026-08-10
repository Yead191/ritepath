"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export const LandingCEO = () => {
  return (
    <section aria-labelledby="ceo-message-title" className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 border-t border-slate-100">
      {/* Decorative ambient background accents */}
      <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-[#1aabe2]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-64 w-96 rounded-full bg-sky-50 blur-2xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* CEO Image Container */}
        <div className="lg:col-span-5 relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 shadow-[0_20px_50px_rgba(0,13,37,0.12)] border border-slate-200/80 group">
            <Image
              src="/images/ceo/ceo-portrait.webp"
              alt="Michelle Munoz, CEO and co-founder of RitePath"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000D25]/75 via-transparent to-transparent opacity-80" />

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg text-slate-900">
              <p className="text-base font-bold">Michelle Munoz</p>
              <p className="text-xs text-[#1aabe2] font-medium">CEO & Co-founder • 10+ Years Industry Experience</p>
            </div>
          </div>
        </div>

        {/* CEO Message Content */}
        <article className="lg:col-span-7 mx-auto w-full max-w-2xl lg:mx-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#1aabe2] text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote className="h-3.5 w-3.5 text-[#1aabe2]" />
            <span>Leadership Perspective</span>
          </div>

          <h2 id="ceo-message-title" className="text-3xl font-bold tracking-tight text-[#000d25] sm:text-4xl lg:text-5xl">
            A message from <span className="text-[#1aabe2]">our CEO</span>
          </h2>

          <div className="my-6 h-1 w-20 rounded-full bg-[#1aabe2]" aria-hidden="true" />

          {/* Core Quote Statements */}
          <div className="space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8 font-normal">
            <p className="text-xl sm:text-2xl font-semibold text-[#000d25] leading-snug border-l-4 border-[#1aabe2] pl-4 italic">
              “Your funeral software should do more than just store a case.”
            </p>
            
            <p>
              After more than a decade in the funeral industry, we saw funeral homes being asked to do more with fewer people.
            </p>
            
            <p>
              Labor shortages, repetitive paperwork, and disconnected systems were placing more pressure on already stretched teams. 
              At the same time, unclear communication between the next of kin, informant, and staff often created confusion, 
              frustration, and negative reviews.
            </p>
            
            <p className="font-semibold text-slate-900">
              That is why we built RitePath — the funeral management system that works alongside you.
            </p>
          </div>

          {/* CEO Signature Block */}
          <footer className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-serif italic text-3xl sm:text-4xl tracking-wide text-[#000d25]">
                Michelle Munoz
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">
                CEO &amp; Co-founder at <strong className="font-semibold text-[#1aabe2]">RitePath</strong>
              </p>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
};
