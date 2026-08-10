"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FOOTER_LINKS } from "@/constants/app";

type FooterColumn = { title: string; links: string[] };

export const LandingFooter = () => {
  const t = useTranslations("landing.footer");
  const columns = t.raw("columns") as FooterColumn[];

  return (
    <footer className="bg-[#000D25] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-12 mb-14">
          <div>
            <div className="mb-4">
              <Image
                src="/logos/footerlogo.webp"
                alt={t("logoAlt")}
                width={200}
                height={100}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/75 leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            <p className="mt-4 text-xs font-medium tracking-wide text-[#1AABE2]">
              {t("hipaaNote")}
            </p>
          </div>

          {FOOTER_LINKS.map((col, colIdx) => {
            const localizedCol = columns[colIdx];
            const title = localizedCol?.title ?? col.title;
            return (
              <nav key={col.title} aria-label={t("columnLinksAria", { title })}>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {title}
                </h4>
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
                            className="text-sm text-white/70 hover:text-[#1AABE2] transition-colors"
                          >
                            {label}
                          </a>
                        ) : (
                          <Link
                            href={l.href}
                            className="text-sm text-white/70 hover:text-[#1AABE2] transition-colors"
                          >
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

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/55">
            &copy; {new Date().getFullYear()} {t("brandName")} {t("copyright")}
          </p>
          <div className="flex gap-6">
            {["LinkedIn", "Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-sm text-white/55 hover:text-[#1AABE2] transition-colors"
                aria-label={t("followAria", { network: s })}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
