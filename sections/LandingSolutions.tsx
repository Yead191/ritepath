"use client";

import { useState } from "react";
import { PhoneCall, FolderKanban, ShoppingBag, FileSignature, CheckCircle, ArrowRight, ShieldCheck, Clock, BellRing, Smartphone } from "lucide-react";

export const LandingSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const workflows = [
    {
      id: "first-call",
      title: "First Call Made Simple",
      badge: "Intake & Initial Contact",
      icon: PhoneCall,
      description:
        "Capture essential information during the initial family contact with guided forms. Our intuitive interface ensures you never miss critical details during this sensitive time.",
      secondaryText:
        "Everything is encrypted and auto-saved, so you can focus on providing compassionate support to families in their time of need.",
      features: ["Guided Intake Checklist", "Encrypted Auto-Save", "Instant Notification to Team"],
      mockup: {
        title: "First Call Intake • Smith Family",
        status: "Auto-Saved at 10:14 AM",
        items: [
          { label: "Deceased Full Legal Name", value: "Robert James Smith", status: "Verified" },
          { label: "Date & Location of Passing", value: "St. Jude Hospital, Rm 402", status: "Verified" },
          { label: "Next of Kin Contact", value: "Mary Smith (Spouse) • (555) 234-5678", status: "Contacted" },
          { label: "Initial Transport Dispatch", value: "Driver En Route • ETA 20 mins", status: "Active" },
        ],
      },
    },
    {
      id: "case-management",
      title: "Centralized Case Management",
      badge: "Dashboard & Tracking",
      icon: FolderKanban,
      description:
        "Organize vital statistics, documents, and family preferences in one secure place. Track your desktop and mobile workflow rankings from any location and plot your full case history on interactive dashboards.",
      secondaryText:
        "Set up automated notifications to be sent to your team, so you'll never forget to check important case progress or miss critical deadlines.",
      features: ["Interactive Dashboard", "Team Task Routing", "Automated Deadlines"],
      mockup: {
        title: "Case Management Overview",
        status: "12 Active Cases This Week",
        items: [
          { label: "Death Certificate Filing", value: "Vital Stats Submitted", status: "In Review" },
          { label: "Obituary & Memorial Program", value: "Approved by Family", status: "Complete" },
          { label: "Cemetery Burial Permit", value: "County Registrar Approved", status: "Complete" },
          { label: "Staff Handoff Schedule", value: "Service Director: Marcus Vance", status: "Assigned" },
        ],
      },
    },
    {
      id: "digital-catalog",
      title: "Digital Family Catalog",
      badge: "Family Presentation",
      icon: ShoppingBag,
      description:
        "Share packages and services with families via secure digital links. Let families browse and select options from the comfort of their home, giving them time to make thoughtful decisions.",
      secondaryText:
        "Real-time updates ensure both you and the family are always on the same page, with transparent pricing and package customization options.",
      features: ["Transparent Pricing Link", "At-Home Family Browsing", "Live Package Customizer"],
      mockup: {
        title: "Digital Selection Room Link",
        status: "Shared with Informant",
        items: [
          { label: "Selected Package", value: "Traditional Celebration of Life Service", status: "Selected" },
          { label: "Casket & Vault Selection", value: "Mahogany Hardwood / Sealed Vault", status: "Selected" },
          { label: "Stationery & Video Memory", value: "Custom Photo Cards + Streaming Link", status: "Selected" },
          { label: "Estimated GPL Total", value: "Itemized Summary Transferred", status: "Approved" },
        ],
      },
    },
    {
      id: "instant-esign",
      title: "Instant E-Signatures",
      badge: "Contracts & Compliance",
      icon: FileSignature,
      description:
        "Generate contracts and collect digital signatures instantly. No more printing, scanning, or waiting for documents to be signed and returned.",
      secondaryText:
        "Legal, secure, and compliant e-signatures with automated filing ensure your paperwork is always organized and accessible when you need it.",
      features: ["Instant Mobile Signatures", "FTC GPL Compliance", "Audit Trail & PDF Archiving"],
      mockup: {
        title: "E-Signature Portal",
        status: "Legally Binding & Audit Tracked",
        items: [
          { label: "Statement of Funeral Goods", value: "Signed by Mary Smith", status: "Signed" },
          { label: "Cremation Authorization", value: "Verified with State ID", status: "Signed" },
          { label: "Payment Authorization", value: "Deposit Paid via Card", status: "Completed" },
          { label: "Final Document Vault", value: "Auto-Archived to Cloud", status: "Secured" },
        ],
      },
    },
  ];

  return (
    <section className="relative bg-[#fafafa] py-24 sm:py-32 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1aabe2]/10 border border-[#1aabe2]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1aabe2] mb-4">
            <span>Better in Every Way</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            RitePath, Better in every way
          </h2>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-600 font-normal">
            Streamlined workflows designed to help you serve families with compassion while reducing administrative burden by up to 70%.
          </p>
        </div>

        {/* Tab Navigation for Desktop/Mobile */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/70 border border-slate-300/70 gap-2">
            {workflows.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-[#1aabe2] text-white shadow-md shadow-[#1aabe2]/30"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Workflow Showcase */}
        {workflows.map((item, index) => {
          if (index !== activeTab) return null;
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl transition-all duration-500"
            >
              {/* Text Information Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-50 text-[#1aabe2] text-xs font-bold uppercase tracking-wider">
                  <Icon className="h-4 w-4" />
                  <span>{item.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
                  {item.description}
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {item.secondaryText}
                </p>

                <div className="space-y-3 pt-2">
                  {item.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                      <CheckCircle className="h-5 w-5 text-[#1aabe2] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="#calculator"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1aabe2] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1596c7] shadow-md hover:shadow-lg"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Interactive Dashboard Card Column */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-2xl border border-slate-800 relative">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-amber-500" />
                      <div className="h-3 w-3 rounded-full bg-emerald-500" />
                      <span className="ml-2 text-xs font-semibold text-slate-300">{item.mockup.title}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#1aabe2] bg-[#1aabe2]/15 px-2.5 py-1 rounded-md border border-[#1aabe2]/30">
                      {item.mockup.status}
                    </span>
                  </div>

                  {/* List of Mockup Items */}
                  <div className="space-y-3">
                    {item.mockup.items.map((row, rIdx) => (
                      <div key={rIdx} className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-slate-400">{row.label}</p>
                          <p className="text-sm font-bold text-white mt-0.5">{row.value}</p>
                        </div>
                        <span className="text-xs font-bold bg-[#1aabe2]/20 text-[#1aabe2] px-2.5 py-1 rounded-lg border border-[#1aabe2]/30">
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
