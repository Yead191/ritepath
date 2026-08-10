"use client";

import Image from "next/image";
import { CheckCircle2, Clock, Eye, ShieldCheck, Smartphone } from "lucide-react";

export const LandingBenefits = () => {
  const benefits = [
    {
      title: "Save Time",
      description: "Reduce administrative work by up to 70% with automated workflows",
      icon: Clock,
    },
    {
      title: "Increase Transparency",
      description: "Families can view and approve arrangements from their own devices",
      icon: Eye,
    },
    {
      title: "Stay Compliant",
      description: "Built-in GPL generation and FTC compliance features",
      icon: ShieldCheck,
    },
    {
      title: "Mobile-First",
      description: "Access your cases from anywhere, on any device",
      icon: Smartphone,
    },
  ];

  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28 border-t border-slate-100">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          {/* Left Column Graphic Container */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-3xl blur-3xl opacity-50 transform -rotate-3" />
            <div className="relative rounded-3xl bg-slate-900 p-8 text-white shadow-2xl border border-slate-800">
              <div className="flex items-center gap-3 pb-6 border-b border-slate-800 mb-6">
                <div className="h-4 w-4 rounded-full bg-[#1aabe2] animate-ping" />
                <span className="font-bold text-lg text-white">Compassionate Care Engine</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Admin Burden Reduction</p>
                    <p className="text-2xl font-extrabold text-[#1aabe2]">Up to 70% Saved</p>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/40">
                    Automated
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-400">FTC Rule Compliance</p>
                    <p className="text-lg font-bold text-white">General Price List Auto-Audit</p>
                  </div>
                  <span className="bg-[#1aabe2]/20 text-[#1aabe2] text-xs font-bold px-3 py-1 rounded-full border border-[#1aabe2]/40">
                    100% Compliant
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-400">Family Portal Experience</p>
                    <p className="text-lg font-bold text-white">At-Home Review & E-Sign</p>
                  </div>
                  <span className="bg-sky-500/20 text-sky-400 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/40">
                    Mobile-Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1aabe2] mb-4">
              <span>Why Directors Choose RitePath</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
              Built for Compassionate Care
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-normal">
              Every feature is designed with both funeral directors and grieving families in mind.
            </p>

            {/* 4 Pillars List */}
            <div className="space-y-6">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors">
                    <div className="w-10 h-10 bg-[#1aabe2] rounded-xl flex items-center justify-center shrink-0 text-white shadow-md shadow-[#1aabe2]/30 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
