import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { studentPricing } from "@/data/pricing";
import { servicesData } from "@/data/services";
import { faqData } from "@/data/faq";
import ServiceCard from "@/components/ServiceCard";
import PricingTable from "@/components/PricingTable";
import ProcessSteps from "@/components/ProcessSteps";
import Faq from "@/components/Faq";
import {
  MessageCircle,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Pendampingan Belajar Coding untuk Mahasiswa",
  description:
    "Bimbingan belajar coding 1-on-1, sprint praktikum, dan code review terarah. Mahasiswa mengerjakan kodenya sendiri dengan dipandu oleh mentor berpengalaman.",
};

export default function MahasiswaPage() {
  const studentServices = servicesData.filter((s) => s.category === "mahasiswa");
  const studentFaqs = faqData.filter((f) => f.category === "mahasiswa");

  const studentProcess = [
    { step: "01", title: "Hubungi Mentor", description: "Sampaikan materi praktikum, error yang dihadapi, atau konsep yang ingin dipelajari." },
    { step: "02", title: "Tentukan Jadwal", description: "Pilih waktu sesi bimbingan daring yang fleksibel dan cocok dengan jadwal kuliahmu." },
    { step: "03", title: "Sesi Live Mentoring", description: "Screen share interaktif, bahas alur program, dan kamu mengetik kode sendiri dengan arahan." },
    { step: "04", title: "Evaluasi & Pemahaman", description: "Uji pemahaman mandiri dan simulasi tanya jawab agar siap menghadapi ujian praktikum." },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 px-3.5 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <GraduationCap className="h-4 w-4" />
            <span>Edukatif & Bimbingan Mandiri Terarah</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Belajar Coding Sambil <br />
            <span className="text-indigo-600">Mengerjakan Tugasmu Sendiri</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Stuck dengan error merah atau bingung alur program? Mentor StackWorks siap mendampingi dan membedah logika coding langkah demi langkah secara privat.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-500 transition-all active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Jadwalkan Sesi Mentoring</span>
            </a>
          </div>
        </div>

        {/* Kotak Prinsip Kami (Wajib & Sangat Tegas) */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="rounded-3xl border-2 border-indigo-100 bg-gradient-to-r from-indigo-50/70 via-blue-50/40 to-white p-8 sm:p-10 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Prinsip Bimbingan Belajar StackWorks
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Kami percaya bahwa kemampuan pemrograman yang sesungguhnya hanya bisa didapat melalui pemahaman langsung. Di StackWorks:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-800">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Mahasiswa mengetik kodenya sendiri</strong> dengan arahan terstruktur dari mentor.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Fokus pemahaman logika & arsitektur</strong>, bukan sekadar kode instan yang tak dimengerti.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Simulasi persiapan sidang praktikum</strong> agar kamu percaya diri menjelaskan tiap fungsi.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong>100% Edukatif & Beretika</strong> tanpa mengambil alih pengerjaan tugas pihak lain.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan Mahasiswa Grid */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Format Belajar yang Tersedia
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Pilih bentuk pendampingan yang paling pas dengan tempo dan kebutuhan belajarmu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Tabel Paket Harga Mahasiswa */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Paket Sesi & Biaya Terjangkau
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Biaya khusus kantong mahasiswa untuk investasi keahlian jangka panjang.
            </p>
          </div>
          <PricingTable tiers={studentPricing} />
        </section>

        {/* Alur Sesi */}
        <section className="mb-20">
          <ProcessSteps
            title="Alur Sesi Pendampingan"
            subtitle="Praktis, fleksibel, dan fokus pada solusi masalah teknis yang kamu hadapi."
            steps={studentProcess}
          />
        </section>

        {/* FAQ Mahasiswa */}
        <section className="mb-16">
          <Faq
            items={studentFaqs}
            title="Tanya Jawab Seputar Bimbingan Mahasiswa"
            subtitle="Semua hal yang perlu kamu ketahui sebelum memulai sesi perdana."
          />
        </section>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-indigo-600 p-8 sm:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold">Siap Menguasai Kodinganmu Sekarang?</h3>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto text-sm sm:text-base">
            Jangan biarkan deadline semakin dekat dengan error yang tak terselesaikan. Konsultasikan materi atau kode kamu bersama mentor kami.
          </p>
          <div className="mt-8">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-indigo-700 shadow-md hover:bg-slate-50 transition-all active:scale-95"
            >
              <MessageCircle className="h-5 w-5 text-emerald-600" />
              <span>Jadwalkan Sesi via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
