"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";

export const LandingCEO = () => {
  const t = useTranslations("landing.ceo");

  return (
    <section className="relative overflow-hidden bg-[#FFF8F1] py-16 sm:py-20 lg:py-28">
      {/* Soft atmospheric wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 85% 40%, rgba(26,171,226,0.10) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(255,241,225,0.9) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait */}
          <Reveal direction="left" className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-3 sm:-inset-4 rounded-[2rem] bg-gradient-to-br from-[#1AABE2]/18 via-transparent to-[#FFF1E1]/90 blur-2xl" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] shadow-[0_30px_80px_rgba(26,26,46,0.12)] ring-1 ring-black/5">
                <Image
                  src="/images/ceo/ceo-portrait.webp"
                  alt={t("imageAlt")}
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top"
                  priority={false}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1a1a2e]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                    {t("eyebrow")}
                  </p>
                  <p className="mt-1 text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {t("name")}
                  </p>
                  <p className="text-sm text-white/85">{t("role")}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1AABE2]">
                {t("label")}
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#1a1a2e] tracking-tight leading-[1.12] max-w-xl">
                {t("title")}
              </h2>

              <blockquote className="mt-8 relative">
                <span
                  className="absolute -left-1 -top-6 text-7xl font-serif leading-none text-[#1AABE2]/25 select-none"
                  aria-hidden="true"
                >
                  “
                </span>
                <p className="relative text-xl sm:text-2xl font-medium text-[#1a1a2e] leading-relaxed tracking-tight">
                  {t("quote")}
                </p>
              </blockquote>

              <div className="mt-8 space-y-4 max-w-xl">
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {t("bio1")}
                </p>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {t("bio2")}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#partnership"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1AABE2] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1596c7] hover:-translate-y-0.5"
                >
                  {t("cta")}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <p className="text-sm text-slate-500 max-w-xs leading-snug">
                  {t("ctaNote")}
                </p>
              </div>

              {/* Signature strip */}
              <div className="mt-12 pt-8 border-t border-[#1a1a2e]/10 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-2xl italic font-medium text-[#1a1a2e] tracking-tight">
                    {t("signature")}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {t("name")} · {t("role")}
                  </p>
                </div>
                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="text-2xl font-bold text-[#1a1a2e] tracking-tight">
                      {t("stat1.value")}
                    </p>
                    <p className="text-slate-500">{t("stat1.label")}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1a1a2e] tracking-tight">
                      {t("stat2.value")}
                    </p>
                    <p className="text-slate-500">{t("stat2.label")}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
