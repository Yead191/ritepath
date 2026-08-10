"use client";

import { Check, ShieldAlert, Sparkles, Layers, FileSignature, CreditCard, MessageSquare, Palette } from "lucide-react";

export const LandingOneCase = () => {
  return (
    <section aria-labelledby="one-case-title" className="relative isolate overflow-hidden bg-[#000D25] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 text-white">
      {/* Radial Glow Backdrops */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#1AABE2]/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#1AABE2]/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1AABE2]/10 border border-[#1AABE2]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1AABE2]">
            <ShieldAlert className="h-4 w-4" />
            <span>Too Many Tools • Too Much Re-Entry</span>
          </div>

          <h2 id="one-case-title" className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            One funeral case shouldn’t require five different systems.
          </h2>
        </header>

        <div className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6 text-base sm:text-lg leading-relaxed text-slate-300">
            <p className="text-white font-medium text-lg sm:text-xl leading-relaxed">
              Most funeral homes are probably using 3–5 tools for each case: intake, documents, signatures, payments, design, and communication. That means repeated information, disconnected updates, and more opportunities for details to be missed.
            </p>

            <p className="text-slate-300">
              RitePath brings the entire arrangement into one connected platform — ensuring directors, staff, vendors, and family members stay completely synchronized.
            </p>

            <div className="mt-8 border-l-4 border-[#1AABE2] bg-white/5 p-5 rounded-r-2xl backdrop-blur-sm">
              <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
                One case. One platform. <span className="text-[#1AABE2]">RitePath.</span>
              </p>
            </div>
          </div>

          {/* Right Column Visual: 5 Replaced Tools Hub Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">The Fragmented Workflow vs. RitePath</h3>
                  <p className="text-xs text-slate-400">Eliminate duplicate data entry across standalone web tools</p>
                </div>
                <span className="bg-[#1AABE2]/20 text-[#1AABE2] text-xs font-semibold px-3 py-1 rounded-full border border-[#1AABE2]/40">
                  Consolidated Hub
                </span>
              </div>

              {/* Grid of Replaced Tools */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3 opacity-65">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400 shrink-0">
                    <FileSignature className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 line-through">Standalone Intake Forms</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Separate web forms & paper notes</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3 opacity-65">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 line-through">Third-Party E-Sign & Pay</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Manual contract uploading</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3 opacity-65">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    <Palette className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 line-through">Disconnected Design Tools</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Re-entering names for stationery</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3 opacity-65">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200 line-through">Unsynced Email & SMS</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Scattered family messaging</p>
                  </div>
                </div>
              </div>

              {/* The RitePath Solution Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1AABE2] to-sky-600 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-white">Unified RitePath Case Ecosystem</h4>
                    <p className="text-xs text-sky-100">All data auto-populates contracts, signatures, GPL, and family updates.</p>
                  </div>
                </div>
                <span className="shrink-0 font-bold text-xs bg-white text-[#000D25] px-4 py-2 rounded-xl shadow">
                  100% Connected
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
