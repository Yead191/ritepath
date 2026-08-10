"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/components/ui/utils";
import { Reveal } from "@/components/shared/Reveal";

const ITEM_KEYS = ["sync", "partner", "details"] as const;

const ITEM_IMAGES: Record<(typeof ITEM_KEYS)[number], string> = {
  sync: "/images/hero/hero-bg.webp",
  partner: "/images/impact/impact-testimonial.webp",
  details: "/images/insights/insight-compliance.webp",
};

export const LandingAppShowcase = () => {
  const t = useTranslations("landing.appShowcase");
  const [openKey, setOpenKey] = useState<(typeof ITEM_KEYS)[number]>("sync");

  return (
    <section id="product" className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: copy + accordion */}
          <Reveal direction="left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1a1a2e] tracking-tight leading-[1.15]">
                {t("title")}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-500">
                {t("subtitle")}
              </p>

              <div className="mt-8 sm:mt-10 border-t border-slate-200">
                {ITEM_KEYS.map((key) => {
                  const isOpen = openKey === key;
                  return (
                    <div key={key} className="border-b border-slate-200">
                      <button
                        type="button"
                        onClick={() => setOpenKey(key)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-4 py-5 text-left"
                      >
                        <span className="text-lg sm:text-xl font-bold text-[#1a1a2e] leading-snug pr-2">
                          {t(`items.${key}.title`)}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-transform duration-300",
                            isOpen && "rotate-180",
                          )}
                        >
                          <ChevronDown className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </button>

                      <div
                        className={cn(
                          "grid transition-[grid-template-rows] duration-300 ease-out",
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-5 pr-12">
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                              {t(`items.${key}.body`)}
                            </p>
                            <p className="mt-3 text-sm sm:text-base text-slate-800">
                              {t.rich(`items.${key}.stat`, {
                                strong: (chunks) => (
                                  <strong className="font-bold">{chunks}</strong>
                                ),
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Right: active visual */}
          <Reveal direction="right" delay={100}>
            <div className="relative lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-slate-100">
                {ITEM_KEYS.map((key) => (
                  <div
                    key={key}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      openKey === key
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0 pointer-events-none",
                    )}
                  >
                    <Image
                      src={ITEM_IMAGES[key]}
                      alt={t(`items.${key}.imageAlt`)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      unoptimized
                      priority={key === "sync"}
                    />
                  </div>
                ))}

                {/* Floating notification chip — visible on first item */}
                {openKey === "sync" && (
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto z-20">
                    <div className="inline-flex max-w-full items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm px-3.5 py-2.5 shadow-lg ring-1 ring-black/5">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF1E1] text-sm">
                        ✓
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-[#1a1a2e] truncate">
                            {t("notification.title")}
                          </p>
                          <span className="text-[11px] text-slate-400 shrink-0">
                            {t("notification.time")}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 truncate">
                          {t("notification.body")}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
