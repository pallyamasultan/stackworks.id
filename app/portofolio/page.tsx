"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import PortfolioCard from "@/components/PortfolioCard";
import { Briefcase, Filter } from "lucide-react";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<"semua" | "website" | "aplikasi">("semua");

  const filteredItems = portfolioData.filter((item) => {
    if (filter === "semua") return true;
    return item.category === filter;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 px-3.5 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Karya & Bukti Hasil</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Portofolio Proyek Terpilih
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Kumpulan website dan aplikasi yang kami rancang dengan fokus pada performa nyata, konversi, dan pengalaman pengguna optimal.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setFilter("semua")}
            className={`rounded-xl px-5 py-2 text-sm font-semibold transition-all ${
              filter === "semua"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
            }`}
          >
            Semua ({portfolioData.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("website")}
            className={`rounded-xl px-5 py-2 text-sm font-semibold transition-all ${
              filter === "website"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
            }`}
          >
            Website ({portfolioData.filter((i) => i.category === "website").length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("aplikasi")}
            className={`rounded-xl px-5 py-2 text-sm font-semibold transition-all ${
              filter === "aplikasi"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
            }`}
          >
            Aplikasi ({portfolioData.filter((i) => i.category === "aplikasi").length})
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
