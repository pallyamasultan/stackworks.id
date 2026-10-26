import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";

export const metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi dan perlindungan data pengguna di StackWorks.",
};

export default function KebijakanPrivasiPage() {
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
            <Lock className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-wider">Perlindungan Data</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-6">
            Kebijakan Privasi
          </h1>
          <p className="text-xs text-slate-400 mb-8">Terakhir diperbarui: Januari 2026</p>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Data yang Kami Kumpulkan</h2>
              <p>
                Kami hanya mengumpulkan informasi yang Anda berikan secara sukarela melalui formulir kontak, pesan WhatsApp, atau korespondensi email, seperti nama, alamat email, nomor telepon/WhatsApp, dan deskripsi kebutuhan proyek atau bimbingan.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Penggunaan Informasi</h2>
              <p>
                Informasi yang dikumpulkan digunakan semata-mata untuk:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Menghubungi Anda kembali mengenai estimasi penawaran atau jadwal sesi mentoring.</li>
                <li>Menjalankan koordinasi pengerjaan proyek dan serah terima dokumen teknis.</li>
                <li>Meningkatkan kualitas layanan dan pengalaman pengunjung pada website StackWorks.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Tanpa Penjualan Data ke Pihak Ketiga</h2>
              <p>
                StackWorks tidak pernah dan tidak akan menjual, menyewakan, atau memperjualbelikan data pribadi Anda kepada pihak ketiga mana pun untuk tujuan periklanan atau pemasaran tanpa izin tegas dari Anda.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Keamanan Informasi</h2>
              <p>
                Kami menerapkan standar keamanan teknis yang wajar untuk melindungi data kontak dan brief proyek Anda dari akses, pengungkapan, atau penyalahgunaan tanpa wewenang.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
