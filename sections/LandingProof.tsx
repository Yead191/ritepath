"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/components/ui/utils";

const INSIGHT_KEYS = ["admin", "compliance", "cost"] as const;
const OUTCOME_KEYS = ["retention", "productivity", "absenteeism"] as const;

const INSIGHT_META: Record<
  (typeof INSIGHT_KEYS)[number],
  { image: string; badgePosition: "top-left" | "bottom-left" | "top-right" }
> = {
  admin: {
    image: "/images/insights/insight-admin.webp",
    badgePosition: "top-left",
  },
  compliance: {
    image: "/images/insights/insight-compliance.webp",
    badgePosition: "bottom-left",
  },
  cost: {
    image: "/images/insights/insight-cost.webp",
    badgePosition: "top-right",
  },
};

const badgePositionClass = {
  "top-left": "top-4 left-4 sm:top-5 sm:left-5",
  "bottom-left": "bottom-4 left-4 sm:bottom-5 sm:left-5",
  "top-right": "top-0 right-4 sm:right-5 -translate-y-3",
} as const;

export const LandingProof = () => {
  const tInsights = useTranslations("landing.insights");
  const tImpact = useTranslations("landing.impact");
  const tProof = useTranslations("landing.proof");

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1a1a2e] tracking-tight leading-[1.15]">
              {tProof("title")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
              {tProof("subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {INSIGHT_KEYS.map((key, index) => {
            const meta = INSIGHT_META[key];
            return (
              <Reveal key={key} delay={80 + index * 70}>
                <article className="flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-visible">
                    <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
                      <Image
                        src={meta.image}
                        alt={tInsights(`items.${key}.imageAlt`)}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={cn(
                        "absolute z-10 max-w-[85%] rounded-2xl bg-[#FFF1E1] px-4 py-3 sm:px-5 sm:py-4 shadow-sm",
                        badgePositionClass[meta.badgePosition],
                      )}
                    >
                      <p className="text-sm sm:text-[0.95rem] font-bold text-[#1a1a2e] leading-snug">
                        <span className="text-2xl sm:text-[1.75rem] font-extrabold tracking-tight">
                          {tInsights(`items.${key}.stat`)}
                        </span>{" "}
                        {tInsights(`items.${key}.statLabel`)}
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#1a1a2e] leading-snug">
                    {tInsights(`items.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {tInsights(`items.${key}.source`)}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Outcomes band */}
        <Reveal delay={160}>
          <div className="mt-14 sm:mt-16 rounded-[1.75rem] bg-[#F7FBFD] border border-[#1AABE2]/10 p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-5">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e] tracking-tight leading-snug">
                  {tProof("outcomesTitle")}
                </h3>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">
                  {tProof("outcomesSubtitle")}
                </p>
                <div className="mt-6 flex items-start gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
                    <Image
                      src="/images/impact/impact-testimonial.webp"
                      alt={tImpact("testimonial.imageAlt")}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1a1a2e] leading-snug">
                      “{tImpact("testimonial.quote")}”
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {tImpact("testimonial.attribution")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {OUTCOME_KEYS.map((key) => (
                  <div
                    key={key}
                    className="rounded-2xl bg-white p-5 ring-1 ring-slate-200/70"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1AABE2]">
                      {tImpact(`cards.${key}.label`)}
                    </p>
                    <p className="mt-3 text-3xl font-extrabold text-[#1a1a2e] tracking-tight">
                      {tImpact(`cards.${key}.stat`)}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 leading-snug">
                      {tImpact(`cards.${key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-400">{tProof("source")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
