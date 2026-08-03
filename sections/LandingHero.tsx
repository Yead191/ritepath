"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";

interface LandingHeroProps {
  onViewDemo?: () => void;
}

export const LandingHero = ({ onViewDemo }: LandingHeroProps) => {
  const t = useTranslations("landing.hero");

  return (
    <section className="relative w-full h-screen min-h-[640px] bg-[#FFF1E1] overflow-hidden">
      {/* Right-side photo panel — matches Alan split composition */}
      <div className="absolute inset-y-0 right-0 z-0 w-full sm:w-[70%] lg:w-[62%] pointer-events-none">
        <Image
          src="/images/hero/hero-bg.webp"
          alt=""
          fill
          unoptimized
          priority
          sizes="(max-width: 640px) 100vw, 62vw"
          className="object-cover object-center select-none"
        />
        {/* Soft fade from cream into the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #FFF1E1 0%, rgba(255,241,225,0.95) 12%, rgba(255,241,225,0.55) 28%, rgba(255,241,225,0.15) 45%, transparent 62%)",
          }}
        />
      </div>

      {/* Hero content — left column, vertically centered */}
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center">
        <div className="max-w-lg lg:max-w-xl text-left pt-16">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#1a1a2e] tracking-tight leading-[1.12] mb-5">
            {t("headline")}
          </h1>

          <p className="text-base sm:text-lg text-[#5c5e70] font-normal leading-relaxed mb-9 max-w-md">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onViewDemo}
              className="inline-flex items-center justify-center rounded-full bg-[#1AABE2] text-white text-sm sm:text-base font-semibold shadow-sm transition-all hover:bg-[#1596c7] hover:-translate-y-0.5 !px-8 !py-4"
            >
              {t("primaryCta")}
            </button>

            <button
              type="button"
              onClick={onViewDemo}
              className="inline-flex items-center justify-center rounded-full !bg-white text-[#1AABE2] !border !border-[#1AABE2]/40 text-sm sm:text-base font-semibold shadow-sm transition-all hover:!bg-white/90 hover:-translate-y-0.5 !px-8 !py-4"
            >
              {t("secondaryCta")}
            </button>
          </div>

          <div className="mt-8">
            <a
              href="#partnership"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a2e] hover:text-[#1AABE2] transition-colors group"
            >
              <span>{t("partnershipLink")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom-left AI tag — hero section only */}
      <div className="absolute bottom-5 left-5 z-30 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 !px-3 !py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-white text-[10px] font-extrabold uppercase tracking-widest">
          <Sparkles className="w-3 h-3 text-white/80" />
          <span>{t("aiTag")}</span>
        </div>
      </div>

      {/* Bottom-right help chip */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={onViewDemo}
          className="inline-flex items-center gap-2 !px-4 !py-2.5 rounded-full !bg-white !border !border-[#1AABE2]/35 text-[#1AABE2] text-xs font-semibold shadow-md hover:shadow-lg transition-all"
        >
          <HelpCircle className="w-4 h-4" />
          <span>{t("helpBtn")}</span>
        </button>
      </div>
    </section>
  );
};
