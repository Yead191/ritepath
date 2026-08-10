'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Pill } from '@/components/shared/Pill';
import { Card } from '@/components/shared/Card';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { landingPageContent } from '@/data/landingPageContent';
import { cn } from '@/components/ui/utils';
import Image from 'next/image';

type SlideDirection = 'left' | 'right';

type SlideInProps = {
  children: ReactNode;
  direction: SlideDirection;
  delay?: number;
  className?: string;
};

const SlideIn = ({ children, direction, delay = 0, className }: SlideInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible
          ? 'opacity-100 translate-x-0'
          : direction === 'left'
            ? 'opacity-0 -translate-x-16'
            : 'opacity-0 translate-x-16',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};



const getStepMockup = (stepNumber: number, altText: string) => {
  switch (stepNumber) {
    case 1:
      return (
<div className="rounded-xl  p-4 overflow-hidden flex items-center justify-center w-fit mx-auto">
  <Image
    src="/logos/asset_4.webp"
    alt={altText}
    width={900}
    height={900}
    className="rounded-2xl w-[95%] max-w-none h-auto flex-shrink-0 -translate-x-2"
  />
</div>
      );

    case 2:
      return (
<div className="rounded-2xl  p-8 overflow-hidden">
  <div className="rounded-xl  p-4 overflow-hidden flex items-center justify-center w-fit mx-auto">
    <Image
      src="/logos/asset_2.webp"
      alt={altText}
      width={900}
      height={900}
       className=" w-[120%] max-w-none h-auto flex-shrink-0 -translate-y-4"
    />
  </div>
</div>
      );
    case 3:
      return (
        <div className="rounded-xl  p-4 overflow-hidden flex items-center justify-center w-fit mx-auto">
        <Image
          src="/logos/asset_1.webp"
          alt={altText}
          width={900}
          height={900}
          className="rounded-2xl w-[100%] max-w-none h-auto flex-shrink-0 -translate-x-2"
        />
        </div>
      );
    case 4:
      return (
        <div className="p-4 overflow-hidden flex items-center justify-center w-fit mx-auto">
        <Image
          src="/logos/asset_3.webp"
          alt={altText}
          width={800}
          height={800}
          className="w-[100%] max-w-none h-auto"
        />
        </div>
      );
    default:
      return null;
  }
};

export const LandingSteps = () => {
  const t = useTranslations('landing');
  // Text comes from the catalog (indexed by step); structural bits (step
  // number, flip) stay in landingPageContent.
  const items = t.raw('steps.items') as { title: string; body: string[] }[];
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          center
          light
          title={t('steps.headingTitle')}
          subtitle={t('steps.headingSubtitle')}
        />

        <div className="space-y-32 max-w-6xl mx-auto">
          {landingPageContent.steps.map((s) => {
            const copy = items[s.step - 1] ?? { title: '', body: [] };

            const Text = (
              <div>

                <h3 className="text-3xl sm:text-4xl text-black mb-6 mt-6">{copy.title}</h3>
                {copy.body.map((p, idx) => (
                  <p key={idx} className="text-lg text-black mb-6 leading-relaxed">
                    {p}
                  </p>
                ))}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-3 text-base text-white bg-[#1aabe2] rounded-lg hover:bg-slate-700 transition-all"
                  aria-label={t('actions.learnMoreAria')}
                  tabIndex={0}
                >
                  {t('actions.learnMore')}
                </button>
              </div>
            );

            const mockup = getStepMockup(s.step, copy.title);
            const Visual = (
              <div className="relative">
                {s.step === 1 || s.step === 2 || s.step === 3 || s.step === 4 ? mockup : <Card className="p-8">{mockup}</Card>}
              </div>
            );

            return (
              <div key={s.step} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {s.flip ? (
                  <>
                    <SlideIn direction="left" className="order-2 lg:order-1">
                      {Visual}
                    </SlideIn>
                    <SlideIn direction="right" delay={200} className="order-1 lg:order-2">
                      {Text}
                    </SlideIn>
                  </>
                ) : (
                  <>
                    <SlideIn direction="left">
                      {Text}
                    </SlideIn>
                    <SlideIn direction="right" delay={200}>
                      {Visual}
                    </SlideIn>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
