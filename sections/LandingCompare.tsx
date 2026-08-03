"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/components/ui/utils";

type TabKey = "before" | "after";

type CardKind = "stat" | "image" | "quote";

type CardDef = {
  kind: CardKind;
  key: string;
  image?: string;
};

const CARD_LAYOUT: CardDef[] = [
  { kind: "stat", key: "stat1" },
  {
    kind: "image",
    key: "image1",
    image:
      "https://6vvt7k9n.twic.pics/prismic/aG_WhkMqNJQqHwrK_Testimonial-2-.png?twic=v1/cover=470x308",
  },
  { kind: "quote", key: "quote1" },
  {
    kind: "image",
    key: "image2",
    image:
      "https://6vvt7k9n.twic.pics/website-assets/alan-alan-website:a2adfa0b2ce6bcde813ecf198afe903b75d2365a/pme-3c6d8854de163d86.png?twic=v1/cover=470x308",
  },
  { kind: "stat", key: "stat2" },
  {
    kind: "image",
    key: "image3",
    image:
      "https://6vvt7k9n.twic.pics/website-assets/alan-alan-website:a2adfa0b2ce6bcde813ecf198afe903b75d2365a/tpe-400aa87c8d132a40.png?twic=v1/cover=470x308",
  },
];

const THEME = {
  before: {
    section: "bg-[#061A1A]",
    card: "bg-[#103B39]",
    cardText: "text-white",
    cardMuted: "text-white/70",
    accent: "bg-[#6366F1]",
    accentText: "text-[#6366F1]",
    tabActive: "bg-[#6366F1] text-white",
    tabIdle: "bg-transparent text-[#6366F1]",
    imageFilter: "grayscale",
  },
  after: {
    section: "bg-white",
    card: "bg-[#FFF1E1]",
    cardText: "text-[#1a1a2e]",
    cardMuted: "text-[#1a1a2e]/65",
    accent: "bg-[#1AABE2]",
    accentText: "text-[#1AABE2]",
    tabActive: "bg-[#1AABE2] text-white",
    tabIdle: "bg-transparent text-[#1AABE2]",
    imageFilter: "",
  },
} as const;

export const LandingCompare = () => {
  const t = useTranslations("landing.compare");
  const sectionRef = useRef<HTMLElement>(null);
  const [tab, setTab] = useState<TabKey>("before");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 20% visible → "after"; reverse when visibility drops below 20%
        setTab(entry.isIntersecting ? "after" : "before");
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const theme = THEME[tab];

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative py-16 sm:py-20 lg:py-24 transition-colors duration-700 ease-out",
        theme.section,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tab switcher */}
        <div className="inline-flex rounded-full bg-white p-1 shadow-sm">
          {(["before", "after"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300",
                tab === key ? theme.tabActive : theme.tabIdle,
              )}
            >
              {t(`tabs.${key}`)}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CARD_LAYOUT.map((card) => {
            if (card.kind === "stat") {
              return (
                <article
                  key={`${tab}-${card.key}`}
                  className={cn(
                    "rounded-3xl p-6 sm:p-8 min-h-[260px] flex flex-col justify-between transition-colors duration-700",
                    theme.card,
                    theme.cardText,
                  )}
                >
                  <div>
                    <p className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                      {t(`${tab}.${card.key}.headline`)}
                    </p>
                    <p
                      className={cn(
                        "mt-4 text-sm sm:text-base leading-relaxed",
                        theme.cardMuted,
                      )}
                    >
                      {t(`${tab}.${card.key}.body`)}
                    </p>
                  </div>
                  <p className={cn("mt-6 text-xs", theme.cardMuted)}>
                    {t(`${tab}.${card.key}.source`)}
                  </p>
                </article>
              );
            }

            if (card.kind === "quote") {
              return (
                <article
                  key={`${tab}-${card.key}`}
                  className={cn(
                    "rounded-3xl p-6 sm:p-8 min-h-[260px] flex flex-col justify-between transition-colors duration-700",
                    theme.card,
                    theme.cardText,
                  )}
                >
                  <p className="text-base sm:text-lg font-medium leading-relaxed">
                    “{t(`${tab}.${card.key}.quote`)}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/20 shrink-0">
                      <Image
                        src="https://6vvt7k9n.twic.pics/prismic/aG_WhkMqNJQqHwrK_Testimonial-2-.png?twic=v1/cover=80x80"
                        alt=""
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">
                        {t(`${tab}.${card.key}.name`)}
                      </p>
                      <p className={cn("text-xs truncate", theme.cardMuted)}>
                        {t(`${tab}.${card.key}.role`)}
                      </p>
                    </div>
                  </div>
                </article>
              );
            }

            // image card
            return (
              <article
                key={`${tab}-${card.key}`}
                className="group relative min-h-[260px] overflow-hidden rounded-3xl"
              >
                <Image
                  src={card.image!}
                  alt={t(`${tab}.${card.key}.imageAlt`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={cn(
                    "object-cover transition-all duration-700",
                    theme.imageFilter,
                  )}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-white text-sm sm:text-base font-medium leading-snug">
                      “{t(`${tab}.${card.key}.quote`)}”
                    </p>
                    <p className="mt-2 text-xs text-white/75">
                      {t(`${tab}.${card.key}.attribution`)}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-md transition-colors duration-500",
                      theme.accent,
                    )}
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
