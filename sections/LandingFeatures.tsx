'use client';

import Image from 'next/image';
import { Layout, MousePointer2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const LandingFeatures = () => {
  const t = useTranslations('landing.features');
  return (
    <section className="relative bg-[#000D25] overflow-hidden">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 py-20 sm:py-24 lg:py-28">

          {/* Left: Text */}
          <div className="max-w-xl">
            <p className="text-[#1AABE2] text-xs font-bold uppercase tracking-[0.2em] mb-5">
              {t('eyebrow')}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-7">
              {t('titleLine1')}
              <br />
              <span className="text-[#1AABE2] whitespace-nowrap">{t('titleLine2')}</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              {t('body')}
            </p>
          </div>

          {/* Right: Browser Window -- tilted */}
          <div className="relative lg:rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="relative bg-white rounded-[1.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.4)] overflow-hidden ring-1 ring-white/20">

              {/* Browser Chrome */}
              <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-5 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200">
                  <Layout className="w-3 h-3 text-slate-400" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t('chromeUrl')}</span>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative">
                <Image
                  src="/logos/asset_0.webp"
                  alt={t('screenshotAlt')}
                  width={1440}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Interactive Cursor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <MousePointer2 className="w-7 h-7 text-[#1AABE2] fill-[#1AABE2] drop-shadow-lg animate-bounce" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
