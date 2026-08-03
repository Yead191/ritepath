'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FOOTER_LINKS } from '@/constants/app';

type FooterColumn = { title: string; links: string[] };

export const LandingFooter = () => {
  const t = useTranslations('landing.footer');
  // Link hrefs/external flags come from FOOTER_LINKS (structure); the visible
  // column titles + link labels come from the localized catalog, matched by
  // index so the two stay aligned.
  const columns = t.raw('columns') as FooterColumn[];
  return (
    <footer className="py-16 px-6 bg-[#000D25] border-t border-slate-200">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="-translate-y-[10%]">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={"/logos/footerlogo.webp"}
                alt={t('logoAlt')}
                width={200}
                height={100}
                className="h-16 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white">{t('tagline')}</p>
          </div>

          {FOOTER_LINKS.map((col, colIdx) => {
            const localizedCol = columns[colIdx];
            const title = localizedCol?.title ?? col.title;
            return (
              <nav key={col.title} aria-label={t('columnLinksAria', { title })}>
                <h4 className="text-sm text-white mb-4">{title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l, linkIdx) => {
                    const label = localizedCol?.links?.[linkIdx] ?? l.label;
                    return (
                      <li key={l.label}>
                        {l.external ? (
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white hover:text-[#1aabe2]"
                          >
                            {label}
                          </a>
                        ) : (
                          <Link href={l.href} className="text-sm text-white hover:text-[#1aabe2]">
                            {label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          })}
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white">&copy; {new Date().getFullYear()} {t('brandName')} {t('copyright')}</p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram",].map((s) => (
              <a key={s} href="#" className="text-sm text-white hover:text-[#1aabe2]" aria-label={t('followAria', { network: s })}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
