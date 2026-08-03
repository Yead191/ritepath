'use client';

import { useTranslations } from 'next-intl';
import { ViewDemoButton } from '@/components/shared/ViewDemoButton';

interface LandingCTAProps {
  onViewDemo: () => void;
}

export const LandingCTA = ({ onViewDemo }: LandingCTAProps) => {
  const t = useTranslations('landing.cta');
  return (
    <section className="relative py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-3xl bg-[#1AABE2] px-8 py-10 sm:px-14 sm:py-12 lg:px-16 lg:py-14 text-center shadow-xl">
          <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 -z-95 w-95 h-72 bg-[#1AABE2] rounded-full blur-3xl" aria-hidden="true" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">{t('title')}</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
            {t('body')}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <ViewDemoButton className="px-8 py-3.5 rounded-full hover:scale-105 bg-[#000D25] border-2 border-white/30" onClick={onViewDemo} />

          </div>

          <p className="mt-5 text-sm text-white">{t('note')}</p>
        </div>
      </div>
    </section>
  );
};

