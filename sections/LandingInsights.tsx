"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/components/ui/utils";

const INSIGHT_KEYS = ["admin", "compliance", "cost"] as const;

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

export const LandingInsights = () => {
  const t = useTranslations("landing.insights");

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1a1a2e] tracking-tight leading-[1.15]">
            {t("title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {INSIGHT_KEYS.map((key) => {
            const meta = INSIGHT_META[key];
            return (
              <article key={key} className="flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-visible">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
                    <Image
                      src={meta.image}
                      alt={t(`items.${key}.imageAlt`)}
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
                        {t(`items.${key}.stat`)}
                      </span>{" "}
                      {t(`items.${key}.statLabel`)}
                    </p>
                  </div>
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#1a1a2e] leading-snug">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {t(`items.${key}.source`)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
