import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { businessPricing } from "@/data/pricing";
import { servicesData } from "@/data/services";
import { faqData } from "@/data/faq";
import ServiceCard from "@/components/ServiceCard";
import PricingTable from "@/components/PricingTable";
import ProcessSteps from "@/components/ProcessSteps";
import Faq from "@/components/Faq";
import { MessageCircle, ShieldCheck, ArrowRight, Code2 } from "lucide-react";

export const metadata = {
  title: "Solusi Website & Aplikasi untuk Bisnis",
  description:
    "Jasa pembuatan website profil, landing page konversi tinggi, toko online, dan aplikasi mobile profesional dengan garansi bug 14 hari.",
};

export default function BisnisPage() {
  const businessServices = servicesData.filter((s) => s.category === "bisnis");
  const businessFaqs = faqData.filter((f) => f.category === "bisnis");

  const businessProcess = [
    { step: "01", title: "Brief & Konsultasi", description: "Pahami model bisnis dan tujuan spesifik website atau aplikasimu." },
    { step: "02", title: "Penawaran & DP", description: "Transparansi biaya, timeline kerja, dan pembayaran uang muka 50%." },
    { step: "03", title: "Desain & Pengerjaan", description: "Pengembangan kode rapi, loading cepat, dan 2x sesi revisi terarah." },
    { step: "04", title: "Serah Terima & Garansi", description: "Pelunasan, deployment online, dan pendampingan garansi bug 14 hari." },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 px-3.5 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <Code2 className="h-3.5 w-3.5" />
            <span>Layanan Bisnis & Korporat</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Website dan Aplikasi <br />
            <span className="text-indigo-600">untuk Mengakselerasi Bisnismu</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Dari landing page promosi kilat hingga aplikasi custom terukur. Kami membangun teknologi yang tahan uji, cepat, dan siap menaikkan konversi penjualanmu.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-all active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Konsultasi Proyek Gratis</span>
            </a>
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <span>Lihat Hasil Karya</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Layanan Bisnis Grid */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Pilihan Solusi Pengembangan
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Setiap produk dikembangkan dengan standar kode modern dan optimasi performa tinggi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Tabel Paket Harga */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Paket Harga Transparan
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Tanpa biaya siluman. Seluruh paket mencakup garansi perbaikan bug selama 14 hari penuh.
            </p>
          </div>
          <PricingTable tiers={businessPricing} />
        </section>

        {/* Alur Kerja */}
        <section className="mb-20">
          <ProcessSteps
            title="Alur Pengerjaan yang Rapi & Terjadwal"
            subtitle="Kami memastikan Anda selalu terinformasi di setiap tahap pembuatan."
            steps={businessProcess}
          />
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <Faq
            items={businessFaqs}
            title="Pertanyaan Umum Seputar Proyek Bisnis"
            subtitle="Pelajari cara kerja, garansi, dan sistem pembayaran kami."
          />
        </section>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold">Siap Mengonlinekan Bisnis Anda?</h3>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Ceritakan ide atau kebutuhan produk Anda kepada tim kami. Kami siap berdiskusi dan memberikan solusi yang paling efisien.
          </p>
          <div className="mt-8">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-500 transition-all active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat WhatsApp dengan Tim StackWorks</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
