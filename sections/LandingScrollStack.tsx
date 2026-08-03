"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollStack, {
  ScrollStackItem,
} from "@/components/shared/ScrollStackItem";

const CARD_KEYS = ["efficiency", "prevention", "care"] as const;

const CARD_IMAGES: Record<(typeof CARD_KEYS)[number], string> = {
  efficiency:
    "https://6vvt7k9n.twic.pics/prismic/ZjSTQUMTzAJOCgo1_mugandcomputer.png?twic=v1/resize=-x410",
  prevention:
    "https://6vvt7k9n.twic.pics/prismic/aG_WhkMqNJQqHwrK_Testimonial-2-.png?twic=v1/cover=470x308",
  care: "https://6vvt7k9n.twic.pics/prismic/aGz2f0MqNJQqHq0D_Asset-24-.png?twic=v1/resize=-x540",
};

const CARD_STYLES: Record<
  (typeof CARD_KEYS)[number],
  {
    bg: string;
    text: string;
    muted: string;
    footnote: string;
    imageFit: string;
  }
> = {
  efficiency: {
    bg: "bg-[#FBE1E8]",
    text: "text-[#1a1a2e]",
    muted: "text-[#3d3d4a]",
    footnote: "text-[#1a1a2e]/45",
    imageFit: "object-contain",
  },
  prevention: {
    bg: "bg-[#144743]",
    text: "!text-white",
    muted: "!text-white/85",
    footnote: "!text-white/55",
    imageFit: "object-cover rounded-2xl sm:rounded-3xl",
  },
  care: {
    bg: "bg-[#FEF3E9]",
    text: "text-[#1a1a2e]",
    muted: "text-[#3d3d4a]",
    footnote: "text-[#1a1a2e]/45",
    imageFit: "object-contain",
  },
};

export const LandingScrollStack = () => {
  const t = useTranslations("landing.scrollStack");

  return (
    <section className="relative bg-white w-full">
      <ScrollStack
        useWindowScroll
        itemDistance={80}
        itemStackDistance={28}
        stackPosition="15%"
        scaleEndPosition="8%"
        baseScale={0.9}
        itemScale={0.03}
        className="bg-white"
      >
        {CARD_KEYS.map((key) => {
          const style = CARD_STYLES[key];
          return (
            <ScrollStackItem
              key={key}
              itemClassName={`${style.bg} ${style.text}`}
            >
              <div className="grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
                <div className={`flex flex-col justify-center ${style.text}`}>
                  <h3
                    className={`text-2xl font-bold tracking-tight leading-[1.15] sm:text-3xl lg:text-[2.35rem] ${style.text}`}
                  >
                    {t(`cards.${key}.title`)}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-relaxed sm:text-base lg:text-lg ${style.muted}`}
                  >
                    {t(`cards.${key}.body`)}
                  </p>
                  <p
                    className={`mt-5 text-sm font-bold leading-snug sm:text-base lg:text-lg ${style.text}`}
                  >
                    {t(`cards.${key}.stat`)}
                  </p>
                  <p className={`mt-8 text-xs ${style.footnote}`}>
                    {t(`cards.${key}.footnote`)}
                  </p>
                </div>

                <div className="relative h-full min-h-[16rem] lg:min-h-[22rem] w-full">
                  <Image
                    src={CARD_IMAGES[key]}
                    alt={t(`cards.${key}.imageAlt`)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={style.imageFit}
                    unoptimized
                  />
                </div>
              </div>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </section>
  );
};
