import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Syarat dan Ketentuan Layanan",
  description: "Syarat dan ketentuan layanan pengembangan software dan pendampingan edukasi StackWorks.",
};

export default function SyaratLayananPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-2.5 text-indigo-600 mb-3">
            <ShieldCheck className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-wider">Ketentuan Resmi</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-6">
            Syarat dan Ketentuan Layanan
          </h1>
          <p className="text-xs text-slate-400 mb-8">Terakhir diperbarui: Januari 2026</p>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Pendahuluan</h2>
              <p>
                Selamat datang di StackWorks. Dengan menggunakan layanan pengembangan website, aplikasi mobile, atau sesi bimbingan belajar kami, Anda menyetujui seluruh ketentuan yang tercantum pada halaman ini.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Layanan Pengembangan Bisnis & Garansi Bug</h2>
              <p>
                Setiap proyek website dan aplikasi komersial dimulai setelah persetujuan brief teknis dan pembayaran uang muka (DP) sebesar 50%. Pelunasan 50% dilakukan pada saat serah terima hasil pengerjaan. Seluruh proyek bisnis berhak atas garansi perbaikan bug selama 14 (empat belas) hari kerja setelah status serah terima disepakati.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Ketentuan Bimbingan & Pendampingan Mahasiswa</h2>
              <p>
                Layanan mahasiswa yang disediakan StackWorks secara eksklusif bersifat <strong>pendampingan belajar mandiri, mentoring teknis, dan code review edukatif</strong>. Mahasiswa wajib mengetik dan mengoperasikan kode mereka sendiri dengan bimbingan mentor. StackWorks secara tegas <strong>tidak melayani pengerjaan tugas akademik untuk dikumpulkan atas nama orang lain</strong> demi menjaga integritas akademik.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Hak Kekayaan Intelektual (HAKI)</h2>
              <p>
                Setelah pelunasan pembayaran dilakukan secara penuh, seluruh hak milik atas kode sumber (source code) dan aset desain yang diproduksi secara khusus untuk proyek komersial klien akan sepenuhnya menjadi milik klien.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Kerahasiaan Informasi</h2>
              <p>
                StackWorks berkomitmen menjaga kerahasiaan seluruh data bisnis, kredensial, maupun materi praktikum yang dibagikan klien atau mahasiswa selama masa kerja sama.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
