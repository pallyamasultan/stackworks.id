"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    serviceType: "Website",
    budget: "< Rp 3 Juta",
    deadline: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Placeholder Formspree integration simulation
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs">
      {status === "success" ? (
        <div className="text-center py-10 space-y-4">
          <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Pesan Berhasil Terkirim!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Terima kasih telah menghubungi StackWorks. Tim kami akan merespons pesan Anda dalam waktu 1x24 jam kerja.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs font-semibold text-indigo-600 hover:underline pt-2"
          >
            Kirim formulir lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Nama Lengkap *
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Contoh: Budi Santoso"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Nomor WhatsApp / Email Aktif *
            </label>
            <input
              type="text"
              id="contact"
              required
              placeholder="0812xxxx atau nama@email.com"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Jenis Layanan *
              </label>
              <select
                id="serviceType"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="Website">Website (Landing Page / Profil)</option>
                <option value="Aplikasi Mobile">Aplikasi Mobile</option>
                <option value="Toko Online">Toko Online / E-Commerce</option>
                <option value="Pendampingan Mahasiswa">Pendampingan Coding Mahasiswa</option>
                <option value="Lainnya">Kebutuhan Lainnya</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Estimasi Anggaran
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="< Rp 1.5 Juta">&lt; Rp 1.5 Juta (Khusus Mahasiswa/Sesi)</option>
                <option value="Rp 1.5 Juta - Rp 4 Juta">Rp 1.5 Juta - Rp 4 Juta</option>
                <option value="Rp 4 Juta - Rp 10 Juta">Rp 4 Juta - Rp 10 Juta</option>
                <option value="> Rp 10 Juta">&gt; Rp 10 Juta</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="deadline" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Target Tenggat Waktu (Opsional)
            </label>
            <input
              type="text"
              id="deadline"
              placeholder="Contoh: Akhir bulan ini / 2 minggu lagi"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Deskripsi Kebutuhan *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="Ceritakan gambaran fitur, referensi website, atau materi yang ingin dipelajari..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>Gagal mengirim formulir. Silakan hubungi langsung via WhatsApp.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            <span>{status === "submitting" ? "Mengirim..." : "Kirim Brief Kebutuhan"}</span>
          </button>
        </form>
      )}
    </div>
  );
}
