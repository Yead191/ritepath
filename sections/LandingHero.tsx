"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, FileText } from "lucide-react";

interface LandingHeroProps {
  onViewDemo?: () => void;
}

const TYPING_PHRASES = [
  "Funeral Software that does More",
  "Connected Cases from First Call to Aftercare",
  "AI-Powered Operations for Modern Care Teams",
  "Automated Contracts, E-Signatures & GPL",
];

export const LandingHero = ({ onViewDemo }: LandingHeroProps) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section className="relative bg-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Subtle top ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card Container */}
        <div className="overflow-hidden rounded-3xl bg-slate-100/80 border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2 lg:items-center">
            {/* Left Content Column */}
            <div className="text-center lg:text-left">
              {/* AI & Platform Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1aabe2]/10 border border-[#1aabe2]/30 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1aabe2] mb-6">
                <Sparkles className="h-3.5 w-3.5 animate-pulse text-[#1aabe2]" />
                <span>AI-Enabled Funeral Management</span>
              </div>

              {/* Dynamic Animated Typing Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold leading-[1.1] tracking-tight text-slate-900 min-h-[3.2em] sm:min-h-[2.8em] lg:min-h-[2.4em] flex items-center">
                <span>
                  {displayText}
                  <span className="inline-block w-[3px] h-[0.9em] bg-[#1aabe2] ml-1.5 animate-pulse align-middle" />
                </span>
              </h1>

              {/* Subtitle Description */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
                Keep the entire arrangement connected in one platform, with AI supporting every case. 
                From the first call to stationery, RitePath helps your team reduce paperwork, catch missing details, 
                manage contracts, signatures and payments, and keep every case moving forward.
              </p>

              {/* Call-to-Action Group */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={onViewDemo}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#1aabe2] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1aabe2]/30 hover:bg-[#1596c7] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1aabe2] focus:ring-offset-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  Try RitePath free for 14 days. <br /> No credit card required.
                </div>
              </div>

              {/* Quick Feature Highlights */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1aabe2]" />
                  <span>Instant E-Signatures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1aabe2]" />
                  <span>Auto FTC Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1aabe2]" />
                  <span>Real-Time Case Sync</span>
                </div>
              </div>
            </div>

            {/* Right Product Interactive Showcase Card */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl border border-slate-200/80 relative overflow-hidden group">
                {/* Mockup Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-mono text-slate-400">app.ritepath.com/case-304</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Active Case
                  </span>
                </div>

                {/* Dashboard Case Preview Mockup */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Case #2026-8941 • Harrison Family</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Arrangement Director: Sarah Jenkins</p>
                    </div>
                    <span className="bg-[#1aabe2]/10 text-[#1aabe2] text-xs px-2.5 py-1 rounded-md font-semibold">
                      95% Complete
                    </span>
                  </div>

                  {/* Task List Widget */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs font-medium text-slate-800">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span>First Call & Intake Information</span>
                      </div>
                      <span className="text-emerald-700 font-semibold">Signed</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs font-medium text-slate-800">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span>Digital General Price List (GPL) Delivered</span>
                      </div>
                      <span className="text-emerald-700 font-semibold">Verified</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-sky-50 rounded-xl border border-sky-100 text-xs font-medium text-slate-800">
                      <div className="flex items-center gap-2.5">
                        <Zap className="h-4 w-4 text-[#1aabe2] animate-bounce" />
                        <span>AI Assistant: Generating Obituary & Service Order</span>
                      </div>
                      <span className="bg-[#1aabe2] text-white px-2 py-0.5 rounded text-[10px] uppercase font-bold">
                        In Progress
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-medium text-slate-700">
                      <div className="flex items-center gap-2.5">
                        <FileText className="h-4 w-4 text-slate-400" />
                        <span>E-Signature Contract Sent to Next of Kin</span>
                      </div>
                      <span className="text-slate-400 font-medium">Pending Review</span>
                    </div>
                  </div>
                </div>

                {/* Floating AI Notification Toast */}
                <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-[#000D25] to-slate-900 text-white shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#1aabe2]">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">RitePath AI Assistant</p>
                      <p className="text-[11px] text-slate-300">Auto-checked missing permits. Zero errors found.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Built on trusted enterprise technology
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-80 hover:opacity-100 transition-opacity">
            {/* AWS Logo */}
            <div className="flex items-center gap-2 text-slate-800 font-bold text-lg">
              <ShieldCheck className="h-6 w-6 text-[#FF9900]" />
              <span>Amazon Web Services</span>
            </div>

            {/* Google Cloud Logo */}
            <div className="flex items-center gap-2 text-slate-800 font-bold text-lg">
              <div className="flex gap-1">
                <span className="h-3 w-3 rounded-full bg-[#4285F4]" />
                <span className="h-3 w-3 rounded-full bg-[#EA4335]" />
                <span className="h-3 w-3 rounded-full bg-[#FBBC05]" />
                <span className="h-3 w-3 rounded-full bg-[#34A853]" />
              </div>
              <span>Google Cloud</span>
            </div>

            {/* ICCFA Badge */}
            <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200 px-3 py-1.5 rounded-lg bg-slate-50">
              <Layers className="h-5 w-5 text-[#1aabe2]" />
              <span>ICCFA Member</span>
            </div>

            {/* OfficeLogic Badge */}
            <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm sm:text-base border border-slate-200 px-3 py-1.5 rounded-lg bg-slate-50">
              <span>OfficeLogic Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
