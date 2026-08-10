"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Heart } from "lucide-react";

export const LandingFooter = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#000D25] text-white px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 md:grid-cols-5">
          {/* Brand Bio Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-block">
                <Image
                  src="/logos/Headerlogo3.webp"
                  alt="RitePath Logo"
                  width={200}
                  height={48}
                  className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
            </div>
            
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Compassionate care through every step. The AI assistant that handles the details, while you focus on the family.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#1aabe2] font-semibold bg-[#1aabe2]/10 border border-[#1aabe2]/30 px-3 py-1.5 rounded-full">
              <ShieldCheck className="h-4 w-4" />
              <span>HIPAA-Ready &amp; FTC Compliant Controls</span>
            </div>
          </div>

          {/* Product Links */}
          <nav aria-label="Product links" className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Product</h3>
            <ul className="space-y-2.5">
              <li><a className="text-sm text-slate-300 hover:text-[#1aabe2] transition-colors" href="#solutions">Features</a></li>
              <li><a className="text-sm text-slate-300 hover:text-[#1aabe2] transition-colors" href="#calculator">Pricing &amp; ROI</a></li>
              <li><a className="text-sm text-slate-300 hover:text-[#1aabe2] transition-colors" href="#">Security Overview</a></li>
            </ul>
          </nav>

          {/* Company Links */}
          <nav aria-label="Company links" className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2.5">
              <li><a className="text-sm text-slate-300 hover:text-[#1aabe2] transition-colors" href="#">About Us</a></li>
              <li><a className="text-sm text-slate-300 hover:text-[#1aabe2] transition-colors" href="#">Careers</a></li>
              <li><a className="text-sm text-slate-300 hover:text-[#1aabe2] transition-colors" href="#">Contact Support</a></li>
            </ul>
          </nav>

          {/* Legal Links */}
          <nav aria-label="Legal links" className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Legal</h3>
            <ul className="space-y-2.5">
              <li><Link className="text-sm text-slate-300 hover:text-[#1aabe2] transition-colors" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-sm text-slate-300 hover:text-[#1aabe2] transition-colors" href="/terms">Terms of Service</Link></li>
              <li><Link className="text-sm text-slate-300 hover:text-[#1aabe2] transition-colors" href="/sms-terms">SMS Terms</Link></li>
              <li>
                <a
                  href="https://ritepath.trust.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-[#1aabe2] transition-colors"
                >
                  Trust Center
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright Footer Line */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Rite Path. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with care for funeral professionals worldwide</span>
            <Heart className="h-3.5 w-3.5 fill-[#1aabe2] text-[#1aabe2]" />
          </p>
        </div>
      </div>
    </footer>
  );
};
