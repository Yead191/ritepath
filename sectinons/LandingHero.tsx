'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ViewDemoButton } from '@/components/shared/ViewDemoButton';

interface LandingHeroProps {
  onViewDemo: () => void;
}

const STAR_COUNT = 5;

export const LandingHero = ({ onViewDemo }: LandingHeroProps) => {
  const t = useTranslations('landing.hero');
  // The typed headline comes from the localized catalog. useMemo keeps the
  // array identity stable (t is stable per render) so the typing effect below
  // only restarts on index change, not on every render.
  const animatedMessages = useMemo(() => [t('headline')], [t]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentMessage =
      animatedMessages[currentMessageIndex] ?? animatedMessages[0];
    if (!currentMessage) return;

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setDisplayedText(currentMessage.substring(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
        
        // Wait before moving to next message
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % animatedMessages.length);
        }, 3000); // Pause for 3 seconds after typing completes
      }
    }, 100); // Typing speed: 100ms per character

    return () => clearInterval(typingInterval);
  }, [currentMessageIndex, animatedMessages]);

  const renderTypedMessage = () => {
    const currentMessage =
      animatedMessages[currentMessageIndex] ?? animatedMessages[0] ?? '';
    const firstPeriodIndex = displayedText.indexOf('.');
    const isComplete = displayedText === currentMessage;
    
    if (firstPeriodIndex === -1) {
      // Still typing before the first period
      return <span className="text-slate-900">{displayedText}</span>;
    }

    const firstPart = displayedText.substring(0, firstPeriodIndex + 1);
    const secondPart = displayedText.substring(firstPeriodIndex + 1);

    return (
      <>
        <span className="text-slate-900">{firstPart}</span>
        {secondPart && (
          <span className="relative inline-block lg:block">
            <span className="italic text-[#1aabe2]">{secondPart}</span>
              {isComplete && (
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5.5C20 2.5 40 1 60 2C80 3 100 4.5 120 4C140 3.5 160 2 180 3C185 3.2 190 3.5 199 4"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-[#1aabe2]"
                  />
                </svg>
              )}
          </span>
        )}
      </>
    );
  };

  return (
    <section className="relative bg-white pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-14 lg:pb-10">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="overflow-hidden rounded-2xl bg-slate-100/70 p-6 shadow-sm sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-6 lg:items-start lg:gap-x-8">
              <div className="text-center font-serif lg:text-left">
                <h1 className="font-normal text-[2.4rem] text-slate-900 leading-[1.05] tracking-tight sm:text-[3rem] lg:text-[3.6rem]">
                  <span className="relative inline-block min-h-[2.4em]">
                    {renderTypedMessage()}
                    {isTyping && (
                      <span className="inline-block w-0.5 h-[1em] bg-[#1aabe2] ml-1 animate-blink" aria-hidden="true" />
                    )}
                  </span>
                </h1>

                <p className="mt-5 font-serif text-lg font-normal text-slate-900 leading-relaxed">
                  {t('subtitle')}
                </p>

                <div className="mt-6 flex flex-col items-center gap-2 font-sans lg:items-start">
                  <ViewDemoButton
                    onClick={onViewDemo}
                    className="px-8 py-3.5 text-base shadow-md hover:shadow-xl"
                  />
                  <p className="text-sm text-slate-600">{t('freeTrial')}</p>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-sans lg:justify-start">
                  <div className="flex gap-1" aria-label={t('ratingAria')}>
                    {Array.from({ length: STAR_COUNT }).map((_, index) => (
                      <Star key={index} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-md font-normal text-slate-700 whitespace-nowrap">
                    {t('rating')}
                  </span>
                </div>
              </div>

              <div className="relative flex items-start justify-center lg:justify-start lg:pt-2">
                <div className="relative mx-auto w-full max-w-xl rounded-2xl bg-white p-2 shadow-md ring-1 ring-slate-200/80 sm:rounded-3xl sm:p-3 lg:mx-0">
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/gjeUKprcZ6Y?rel=0&modestbranding=1"
                      title={t('videoTitle')}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center pb-6 text-center sm:mt-10 sm:pb-8 lg:pb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
            {t('trustedTech')}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12 scale-90">
            <AwsBrandMark className="h-12 w-auto text-slate-800 sm:h-14 lg:h-16" />
            <GoogleBrandMark className="h-12 w-auto sm:h-14 lg:h-16" />
            <Image
              src="/logos/iccfa.webp"
              alt={t('iccfaAlt')}
              width={200}
              height={80}
              className="h-14 w-auto sm:h-16"
            />
            <Image
              src="/logos/download.webp"
              alt={t('officeLogicAlt')}
              width={200}
              height={80}
              className="h-14 w-auto sm:h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface BrandMarkProps {
  className?: string;
}

const AwsBrandMark = ({ className }: BrandMarkProps) => {
  const t = useTranslations('landing.hero');
  return (
  <svg
    className={className}
    viewBox="0 0 304 182"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={t('awsAria')}
  >
    <path
      fill="currentColor"
      d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5C42.1 1.6 47.3 1 52.8 1c11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.7zM45.8 81.6c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 4 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2C249.3.6 253.5 0 257.9 0c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"
    />
    <path
      fill="#F90"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2C92.4 180.9 39.5 159 0 122.7c-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6zm13.7-15.6c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"
    />
  </svg>
  );
};

const GoogleBrandMark = ({ className }: BrandMarkProps) => {
  const t = useTranslations('landing.hero');
  return (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={t('googleCloudAria')}
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
  );
};

