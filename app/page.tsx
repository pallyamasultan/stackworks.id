import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { servicesData } from "@/data/services";
import { portfolioData } from "@/data/portfolio";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import ProcessSteps from "@/components/ProcessSteps";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Users2,
  Clock,
  Sparkles,
  Quote,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  // Apa yang kami kerjakan: 3 kartu utama (Website, Aplikasi Mobile, Pendampingan Coding)
  const homeServices = [
    servicesData.find((s) => s.id === "company-profile")!,
    servicesData.find((s) => s.id === "mobile-app")!,
    servicesData.find((s) => s.id === "mentoring-coding")!,
  ];

  // Karya unggulan: 3 kartu portofolio
  const featuredPortfolio = portfolioData.slice(0, 3);

  // Cara kerja 4 langkah
  const homeProcess = [
    { step: "01", title: "Konsultasi Kebutuhan", description: "Diskusikan ide proyek bisnismu atau materi coding yang ingin kamu kuasai." },
    { step: "02", title: "Penawaran & Rencana", description: "Dapatkan transparansi cakupan kerja, estimasi biaya, serta jadwal pengerjaan." },
    { step: "03", title: "Pengerjaan / Mentoring", description: "Tahap pembuatan sistem berkualitas atau sesi bimbingan live yang terstruktur." },
    { step: "04", title: "Serah Terima & Garansi", description: "Deployment sistem live, serah terima kode, dan garansi bug 14 hari penuh." },
  ];

  // Mengapa StackWorks: 4 poin
  const whyUs = [
    {
      title: "Tim Solid 10 Orang",
      description: "Gabungan software engineer berpengalaman dan tech educator yang siap mendampingi kebutuhanmu.",
      icon: Users2,
    },
    {
      title: "Harga Transparan & Terjangkau",
      description: "Tanpa biaya siluman. Seluruh rincian biaya dan milestone disepakati di awal secara transparan.",
      icon: CheckCircle,
    },
    {
      title: "Revisi Jelas & Terjadwal",
      description: "Sesi revisi terstruktur memastikan hasil akhir sesuai dengan visi produk yang kamu inginkan.",
      icon: Clock,
    },
    {
      title: "Garansi Bug 14 Hari",
      description: "Dukungan teknis dan perbaikan kendala gratis selama 14 hari kerja setelah website atau aplikasi dirilis.",
      icon: ShieldCheck,
    },
  ];

  // Testimoni placeholder
  const testimonials = [
    {
      name: "Hendrik Prasetyo",
      role: "Founder, Lumina Retail",
      content:
        "StackWorks sangat profesional dan tepat waktu. Website e-commerce toko kami selesai lebih cepat dari target dengan performa loading yang sangat cepat. Penjualan kami meningkat drastis!",
    },
    {
      name: "Rian Firmansyah",
      role: "Mahasiswa Teknik Informatika",
      content:
        "Sesi mentoring di StackWorks sangat membantu! Mentornya tidak mengerjakan tugasku, tetapi memandu logika program sampai aku benar-benar mengerti dan bisa menjawab semua pertanyaan dosen penguji dengan lancar.",
    },
    {
      name: "Siti Rahmawati",
      role: "Operational Manager, Sentosa Logistik",
      content:
        "Desainnya modern, bersih, dan kalkulator tarif otomatisnya sangat mempermudah calon klien kami. Garansi bug 14 harinya benar-benar dijalankan dengan responsif.",
    },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. "Apa yang kami kerjakan": 3 kartu */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
              Layanan Utama
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Apa yang Kami Kerjakan
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Kombinasi layanan pengembangan perangkat lunak terpercaya dan edukasi coding terarah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Karya Unggulan: 3 kartu + tombol "Lihat semua karya" */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
                Portofolio Pilihan
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Karya Unggulan Kami
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
                Studi kasus dari proyek website dan aplikasi nyata yang telah kami bangun dan rilis ke publik.
              </p>
            </div>
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all shrink-0 self-start sm:self-auto"
            >
              <span>Lihat semua karya</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPortfolio.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cara Kerja: 4 langkah */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProcessSteps
            title="Cara Kerja di StackWorks"
            subtitle="4 langkah teratur dari perkenalan awal hingga produk siap digunakan atau materi tuntas dipahami."
            steps={homeProcess}
          />
        </div>
      </section>

      {/* 5. Mengapa StackWorks: 4 poin */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
              Keunggulan Kami
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Mengapa Memilih StackWorks?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Dedikasi penuh pada kualitas rekayasa perangkat lunak dan etika pembelajaran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 hover:bg-white hover:border-indigo-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white mb-5 shadow-xs">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimoni (placeholder slider / cards) */}
      <section className="py-20 bg-gradient-to-b from-white via-indigo-50/20 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
              Ulasan & Bukti
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Apa Kata Klien & Peserta
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Pengalaman nyata berkolaborasi dan belajar bersama tim StackWorks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs relative"
              >
                <div>
                  <Quote className="h-7 w-7 text-indigo-200 mb-4" />
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{t.content}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-indigo-600 font-medium">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Penutup: "Punya ide? Ceritakan ke kami" + tombol WhatsApp */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-900/60 border border-indigo-700/50 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Mulai Perjalanan Digital Anda</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Punya Ide Proyek atau Butuh Pendampingan Belajar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
            Ceritakan ke kami sekarang. Tim StackWorks siap membantu mewujudkan solusi website, aplikasi, atau membantu kamu menguasai coding dengan percaya diri.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-emerald-500 transition-all active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Hubungi via WhatsApp</span>
            </a>
            <Link
              href="/kontak"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-8 py-3.5 text-base font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              <span>Kirimkan Brief Lengkap</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
