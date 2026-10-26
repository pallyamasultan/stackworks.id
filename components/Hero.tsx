import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Users } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-white via-indigo-50/20 to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold text-indigo-700 shadow-xs mb-8">
          <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
          <span>Solusi Digital & Mentoring Belajar Coding Terpercaya</span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.15]">
          Solusi Website & Aplikasi Modern, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent">
            Built to Work. Built to Grow.
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl leading-relaxed">
          Kami membantu bisnis berkembang lewat website dan aplikasi berkinerja tinggi, serta mendampingi mahasiswa menguasai coding secara mandiri dan profesional.
        </p>

        {/* Two Primary CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/bisnis"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-indigo-500/25 hover:bg-indigo-700 hover:shadow-indigo-500/35 transition-all active:scale-95"
          >
            <Code2 className="h-5 w-5" />
            <span>Untuk Bisnis</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/mahasiswa"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900 transition-all active:scale-95"
          >
            <Users className="h-5 w-5 text-indigo-600" />
            <span>Untuk Mahasiswa</span>
          </Link>
        </div>

        {/* Guarantees / Highlights */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10 border-t border-slate-200/80 text-left">
          <div>
            <div className="text-2xl font-bold text-slate-900">10 Orang</div>
            <div className="text-xs text-slate-500 mt-1">Tim engineer & designer siap bantu</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">14 Hari</div>
            <div className="text-xs text-slate-500 mt-1">Garansi perbaikan bug tanpa ribet</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">100% Edukatif</div>
            <div className="text-xs text-slate-500 mt-1">Bimbingan belajar mandiri terarah</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900">&gt; 90 Score</div>
            <div className="text-xs text-slate-500 mt-1">Kecepatan & standar performa tinggi</div>
          </div>
        </div>
      </div>
    </section>
  );
}
