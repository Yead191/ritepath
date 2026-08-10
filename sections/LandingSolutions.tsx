"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";

const SOLUTION_KEYS = [
  "independent",
  "cemetery",
  "multiLocation",
  "vendors",
] as const;

const SOLUTION_IMAGES: Record<(typeof SOLUTION_KEYS)[number], string> = {
  independent: "/images/insights/insight-admin.webp",
  cemetery: "/images/insights/insight-compliance.webp",
  multiLocation: "/images/impact/impact-testimonial.webp",
  vendors: "/images/insights/insight-cost.webp",
};

export const LandingSolutions = () => {
  const t = useTranslations("landing.solutions");

  return (
    <section
      id="solutions"
      className="relative bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mb-10 sm:mb-12 lg:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1a1a2e] tracking-tight leading-[1.15]">
              {t("title")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {SOLUTION_KEYS.map((key, index) => (
            <Reveal key={key} delay={index * 60}>
              <a
                href="#product"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-colors duration-300 hover:bg-[#E8F7FC] hover:border-[#1AABE2]/20"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={SOLUTION_IMAGES[key]}
                    alt={t(`items.${key}.imageAlt`)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-[#1a1a2e] leading-snug">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                    {t.rich(`items.${key}.description`, {
                      strong: (chunks) => (
                        <strong className="font-semibold text-slate-800">
                          {chunks}
                        </strong>
                      ),
                    })}
                  </p>

                  <div className="mt-6 flex justify-end">
                    <span className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#D4F0FA] text-[#1AABE2] transition-all duration-300 ease-out w-11 group-hover:w-auto group-hover:!px-5">
                      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[6rem] group-hover:opacity-100">
                        {t("discover")}
                      </span>
                      <ArrowRight
                        className="w-5 h-5 shrink-0"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
