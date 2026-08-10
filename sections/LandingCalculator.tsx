"use client";

import { useState } from "react";
import { Calculator, Clock, TrendingUp, Sparkles } from "lucide-react";

export const LandingCalculator = () => {
  const [casesPerMonth, setCasesPerMonth] = useState(25);

  // Math estimations based on industry averages
  // ~6 hours admin per case manually vs ~1.8 hours with RitePath (70% reduction)
  const hoursSavedPerCase = 4.2;
  const totalHoursSavedMonth = Math.round(casesPerMonth * hoursSavedPerCase);
  const estimatedCostSavingsMonth = Math.round(totalHoursSavedMonth * 35); // $35/hr average administrative rate

  return (
    <section id="calculator" className="relative bg-slate-900 py-20 sm:py-24 text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#1aabe2]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1aabe2]/15 border border-[#1aabe2]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1aabe2] mb-4">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive ROI Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Calculate Your Funeral Home’s Time Savings
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            See how many administrative hours RitePath can save your arrangement team every single month.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="rounded-3xl bg-slate-800/80 border border-slate-700/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Slider Column */}
            <div className="lg:col-span-6 space-y-6">
              <label className="block text-sm font-bold text-slate-200 uppercase tracking-wider">
                Monthly Funeral Case Volume: <span className="text-[#1aabe2] text-xl font-black ml-2">{casesPerMonth} cases / mo</span>
              </label>

              <input
                type="range"
                min="5"
                max="150"
                step="5"
                value={casesPerMonth}
                onChange={(e) => setCasesPerMonth(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#1aabe2]"
              />

              <div className="flex justify-between text-xs font-semibold text-slate-400">
                <span>5 cases</span>
                <span>50 cases</span>
                <span>100 cases</span>
                <span>150+ cases</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 leading-relaxed">
                <p className="font-semibold text-white mb-1">Based on 70% reduction in paper re-entry:</p>
                First call forms, GPL checks, contract signatures, and vendor notifications auto-populate across your whole team.
              </div>
            </div>

            {/* Results Display Column */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1aabe2] to-sky-600 text-white shadow-xl text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 opacity-90" />
                <p className="text-3xl sm:text-4xl font-black">{totalHoursSavedMonth} hrs</p>
                <p className="text-xs font-bold uppercase tracking-wider mt-1 text-sky-100">Saved Every Month</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
                <p className="text-3xl sm:text-4xl font-black text-emerald-400">${estimatedCostSavingsMonth.toLocaleString()}</p>
                <p className="text-xs font-bold uppercase tracking-wider mt-1 text-slate-400">Est. Staff Cost Saved / Mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
