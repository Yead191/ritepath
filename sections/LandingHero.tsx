"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface LandingHeroProps {
  onViewDemo?: () => void;
}

export const LandingHero = ({ onViewDemo }: LandingHeroProps) => {
  const t = useTranslations("landing.hero");

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#000D25]">
      {/* Full-bleed atmosphere — edge to edge, not a side panel */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.webp"
          alt=""
          fill
          unoptimized
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] select-none animate-hero-drift"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,13,37,0.92) 0%, rgba(0,13,37,0.78) 38%, rgba(0,13,37,0.45) 68%, rgba(0,13,37,0.55) 100%), linear-gradient(180deg, rgba(0,13,37,0.55) 0%, transparent 28%, rgba(0,13,37,0.75) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-24 top-1/3 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(26,171,226,0.35) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
        <div className="max-w-2xl animate-hero-rise">
          <p className="mb-5 text-[clamp(2.75rem,8vw,5.5rem)] font-extrabold leading-none tracking-[-0.04em] text-white">
            RitePath
          </p>

          <div className="mb-6 h-px w-16 bg-[#1AABE2]" aria-hidden="true" />

          <h1 className="max-w-xl text-2xl font-semibold tracking-tight text-white/95 sm:text-3xl lg:text-[2.35rem] lg:leading-[1.2]">
            {t("headline")}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onViewDemo}
              className="inline-flex items-center justify-center rounded-full bg-[#1AABE2] text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1596c7] sm:text-base !px-8 !py-4"
            >
              {t("primaryCta")}
            </button>

            <button
              type="button"
              onClick={onViewDemo}
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/10 sm:text-base !px-8 !py-4"
            >
              {t("secondaryCta")}
            </button>
          </div>

          <a
            href="#solutions"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-[#1AABE2] group"
          >
            <span>{t("partnershipLink")}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
