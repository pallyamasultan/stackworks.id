import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  Award,
  MessageCircle,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = portfolioData.find((p) => p.slug === slug);
  if (!item) return { title: "Karya Tidak Ditemukan" };
  return {
    title: `${item.title} — Studi Kasus`,
    description: item.summary,
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = portfolioData.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/portofolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Semua Portofolio</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="rounded-full bg-indigo-50 border border-indigo-200 px-3 py-1 text-xs font-semibold text-indigo-700 capitalize">
              {item.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">Klien: {item.client}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {item.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {item.summary}
          </p>

          {item.demoUrl && (
            <div className="mt-6">
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-all"
              >
                <span>Kunjungi Demo Langsung</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>

        {/* Hero Graphic / Banner Preview */}
        <div className="relative mb-12 h-64 sm:h-96 w-full rounded-3xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-800 p-8 flex flex-col justify-between text-white overflow-hidden shadow-lg">
          <div className="text-sm font-semibold text-indigo-300">Studi Kasus Proyek</div>
          <div className="max-w-md">
            <div className="text-2xl sm:text-3xl font-bold">{item.title}</div>
            <div className="text-xs text-slate-300 mt-2">{item.summary}</div>
          </div>
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        {/* Grid Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Problem */}
          <div className="rounded-2xl border border-red-100 bg-red-50/30 p-7">
            <div className="flex items-center gap-2.5 text-red-600 font-bold mb-3">
              <AlertTriangle className="h-5 w-5" />
              <span>Tantangan & Masalah Klien</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {item.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-7">
            <div className="flex items-center gap-2.5 text-emerald-700 font-bold mb-3">
              <Lightbulb className="h-5 w-5" />
              <span>Solusi dari StackWorks</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {item.solution}
            </p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-7 mb-12 shadow-xs">
          <div className="flex items-center gap-2 text-slate-900 font-bold mb-4">
            <Layers className="h-5 w-5 text-indigo-600" />
            <span>Teknologi yang Digunakan</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results & Impact */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-7 mb-12 shadow-xs">
          <div className="flex items-center gap-2 text-slate-900 font-bold mb-4">
            <Award className="h-5 w-5 text-indigo-600" />
            <span>Hasil & Dampak Nyata</span>
          </div>
          <ul className="space-y-3">
            {item.results.map((res, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to action */}
        <div className="rounded-3xl bg-slate-900 p-8 text-center text-white">
          <h3 className="text-xl font-bold">Tertarik Membangun Solusi Serupa?</h3>
          <p className="mt-2 text-sm text-slate-400 max-w-lg mx-auto">
            Konsultasikan ide bisnis Anda bersama tim kami dan dapatkan penawaran terbaik.
          </p>
          <div className="mt-6">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-500 transition-all active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Konsultasi Proyek Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
