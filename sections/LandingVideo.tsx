"use client";

import { Play, Star } from "lucide-react";

export const LandingVideo = () => {
  return (
    <section aria-labelledby="testimonial-video-title" className="relative bg-sky-50/70 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24 border-y border-sky-100/60">
      <div className="mx-auto max-w-4xl">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#1aabe2] shadow-sm border border-sky-200 mb-4">
          <Star className="h-3.5 w-3.5 fill-[#1aabe2]" />
          <span>Real Operator Feedback</span>
        </div>

        <h2 id="testimonial-video-title" className="text-3xl font-bold leading-tight tracking-tight text-[#000D25] sm:text-4xl lg:text-5xl">
          See what funeral professionals are saying
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Hear honest reactions from funeral professionals after seeing RitePath in action.
        </p>

        {/* Responsive Video Container */}
        <div className="mx-auto mt-10 aspect-video w-full max-w-3xl overflow-hidden rounded-3xl bg-[#000D25] shadow-[0_24px_70px_rgba(0,13,37,0.2)] border-4 border-white relative group">
          <iframe
            src="https://www.youtube-nocookie.com/embed/etHZR2AU9rE"
            title="RitePath customer testimonial"
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
