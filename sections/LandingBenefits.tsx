'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const LandingBenefits = () => {
  const t = useTranslations('landing.benefits');
  const items = t.raw('items') as { title: string; description: string }[];
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl blur-3xl opacity-30 transform -rotate-6" />
            <div className="rounded-2xl shadow-xl p-6 overflow-hidden flex items-center justify-center">
            <Image
              src="/logos/compassion.webp"
              alt={t('imageAlt')}
              width={600}
              height={600}
              className="relative rounded-3xl w-full h-auto"
              priority
            />
            </div>
          </div>

          <div className="order-1 lg:order-2">
           
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6 mt-6">{t('title')}</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="space-y-6">
              {items.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#1aabe2] rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl text-gray-900 mb-2">{b.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

