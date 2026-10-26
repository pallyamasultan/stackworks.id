import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { teamData } from "@/data/team";
import TeamCard from "@/components/TeamCard";
import { Users, Target, Shield, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Tentang Kami",
  description:
    "Cerita, nilai tim, dan 10 engineer profesional di balik studio pengembangan web & edukasi coding StackWorks.",
};

export default function TentangPage() {
  const values = [
    {
      icon: Target,
      title: "Solutif & Berdaya Guna",
      description: "Setiap baris kode yang kami bangun harus menyelesaikan masalah riil dan memberi dampak pertumbuhan nyata bagi klien.",
    },
    {
      icon: Shield,
      title: "Transparan & Bergaransi",
      description: "Tanpa biaya tersembunyi, estimasi timeline jujur, dan garansi bug 14 hari penuh di setiap proyek komersial.",
    },
    {
      icon: HeartHandshake,
      title: "Edukasi Beretika",
      description: "Untuk mahasiswa, kami mentransfer keahlian coding secara mandiri, bukan mengambil alih pengerjaan tugas.",
    },
    {
      icon: Sparkles,
      title: "Standar Kode Modern",
      description: "Memanfaatkan teknologi terbaru, arsitektur bersih, dan performa cepat dengan skor Core Web Vitals tinggi.",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 px-3.5 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <Users className="h-3.5 w-3.5" />
            <span>Mengenal Lebih Dekat</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Cerita di Balik <span className="text-indigo-600">StackWorks</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            StackWorks lahir dari perkumpulan software engineers dan tech educator yang percaya bahwa teknologi yang baik haruslah <em>built to work and built to grow</em>. Kami menggabungkan kapabilitas studio komersial dengan semangat mendampingi talenta muda memahami esensi pemrograman secara mendalam.
          </p>
        </div>

        {/* Nilai Tim */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Nilai yang Kami Pegang Teguh
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Fondasi yang memandu cara kerja kami bersama klien dan mahasiswa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:border-indigo-200 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-4">
                  <val.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Grid (10 Orang) */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Tim Kami (10 Talenta)
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Kombinasi engineer, desainer, dan mentor yang siap mewujudkan proyek impianmu.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold">Ingin Berkolaborasi Bersama Kami?</h3>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Apakah Anda memiliki proyek bisnis yang perlu dibangun atau butuh bimbingan belajar, pintu kami selalu terbuka.
          </p>
          <div className="mt-8">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition-all active:scale-95"
            >
              <span>Hubungi Tim StackWorks</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
