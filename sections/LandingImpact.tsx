"use client";

import Image from "next/image";
import { ArrowRight, Heart, Briefcase, CalendarDays } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";

const STAT_CARDS = [
  { key: "retention" as const, Icon: Heart },
  { key: "productivity" as const, Icon: Briefcase },
  { key: "absenteeism" as const, Icon: CalendarDays },
];

export const LandingImpact = () => {
  const t = useTranslations("landing.impact");

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1a1a2e] tracking-tight leading-[1.15]">
                {t("title")}
              </h2>
              <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl">
                {t("body1")}
              </p>
              <p className="mt-4 text-base sm:text-lg font-medium text-slate-700 leading-relaxed max-w-xl">
                {t("body2")}
              </p>
            </Reveal>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {STAT_CARDS.slice(0, 2).map(({ key, Icon }, index) => (
                <Reveal key={key} delay={100 + index * 80}>
                  <div className="relative h-full rounded-3xl bg-[#EEF6FF] p-5 sm:p-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[#1a1a2e] shadow-sm">
                      {t(`cards.${key}.label`)}
                      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <p className="mt-5 text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] tracking-tight">
                      {t(`cards.${key}.stat`)}
                    </p>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-snug">
                      {t(`cards.${key}.description`)}
                    </p>
                  </div>
                </Reveal>
              ))}

              {/* Bottom-left: coverage stat + source below */}
              <Reveal delay={260}>
                <div>
                  <div className="rounded-3xl bg-[#EEF6FF] p-5 sm:p-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[#1a1a2e] shadow-sm">
                      {t("cards.absenteeism.label")}
                      <CalendarDays
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                      />
                    </span>
                    <p className="mt-5 text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] tracking-tight">
                      {t("cards.absenteeism.stat")}
                    </p>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-snug">
                      {t("cards.absenteeism.description")}
                    </p>
                  </div>
                  <p className="mt-3 text-xs text-slate-400">{t("source")}</p>
                </div>
              </Reveal>

              {/* Bottom-right: testimonial */}
              <Reveal delay={340}>
                <a
                  href="#"
                  className="group relative block h-full min-h-[220px] overflow-hidden rounded-3xl"
                >
                  <Image
                    src="/images/impact/impact-testimonial.webp"
                    alt={t("testimonial.imageAlt")}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-white text-sm sm:text-base font-medium leading-snug">
                        <span className="text-2xl leading-none mr-1">“</span>
                        {t("testimonial.quote")}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-white/80">
                        {t("testimonial.attribution")}
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1AABE2] text-white shadow-md transition-transform group-hover:scale-105">
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Right column — illustration */}
          <div className="lg:col-span-5">
            <Reveal direction="right" delay={120}>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-[3/4]">
                <Image
                  src="https://6vvt7k9n.twic.pics/prismic/ZhesCDjCgu4jzvuE_Media.png?twic=v1/cover=590x419"
                  alt={t("illustrationAlt")}
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-contain object-bottom h-full w-full"
                  priority={false}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
