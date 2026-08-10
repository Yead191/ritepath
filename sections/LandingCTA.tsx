"use client";

import { useTranslations } from "next-intl";
import { ViewDemoButton } from "@/components/shared/ViewDemoButton";
import { Reveal } from "@/components/shared/Reveal";

interface LandingCTAProps {
  onViewDemo: () => void;
}

export const LandingCTA = ({ onViewDemo }: LandingCTAProps) => {
  const t = useTranslations("landing.cta");

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#000D25] px-8 py-12 sm:px-14 sm:py-14 lg:px-16 lg:py-16 text-center">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 70% at 80% 20%, rgba(26,171,226,0.28) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(26,171,226,0.12) 0%, transparent 50%)",
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto">
                {t("title")}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                {t("body")}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ViewDemoButton
                  className="!px-8 !py-3.5 rounded-full bg-[#1AABE2] hover:bg-[#1596c7] border-0 shadow-sm"
                  onClick={onViewDemo}
                />
              </div>

              <p className="mt-5 text-sm text-white/65">{t("note")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
