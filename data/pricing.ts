export interface PricingTier {
  id: string;
  name: string;
  category: "bisnis" | "mahasiswa";
  price: string;
  billingPeriod?: string;
  popular?: boolean;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  notes?: string;
}

export const businessPricing: PricingTier[] = [
  {
    id: "business-basic",
    name: "Paket Basic",
    category: "bisnis",
    price: "Rp 1.500.000",
    popular: false,
    description: "Cocok untuk UMKM atau profesional yang butuh landing page kilat & berdaya saing tinggi.",
    features: [
      "1 Halaman Landing Page Responsif",
      "Desain Modern Mobile-First",
      "Integrasi Tombol WhatsApp & Form",
      "Optimasi Kecepatan & SEO Dasar",
      "Garansi Bug 14 Hari",
      "Pengerjaan 3 - 5 Hari Kerja"
    ],
    ctaLabel: "Pilih Paket Basic",
    ctaHref: "https://wa.me/6281234567890?text=Halo%20StackWorks%2C%20saya%20tertarik%20dengan%20Paket%20Basic%20Website",
    notes: "Sudah termasuk panduan update konten sederhana."
  },
  {
    id: "business-standard",
    name: "Paket Standard",
    category: "bisnis",
    price: "Rp 3.800.000",
    popular: true,
    description: "Solusi lengkap website profil bisnis multi-halaman dengan fitur interaktif andalan.",
    features: [
      "Hingga 5 Halaman Utama (Beranda, Layanan, Portofolio, Tentang, Kontak)",
      "Desain Kustom Eksklusif",
      "Integrasi CMS / Panel Konten",
      "Optimasi SEO On-Page Lengkap",
      "2x Sesi Revisi Mayor",
      "Garansi Bug 14 Hari Penuh",
      "Pengerjaan 7 - 12 Hari Kerja"
    ],
    ctaLabel: "Pilih Paket Standard",
    ctaHref: "https://wa.me/6281234567890?text=Halo%20StackWorks%2C%20saya%20tertarik%20dengan%20Paket%20Standard%20Website",
    notes: "Paling banyak dipilih oleh bisnis berkembang."
  },
  {
    id: "business-custom",
    name: "Paket Custom / Aplikasi",
    category: "bisnis",
    price: "Mulai Rp 7.500.000",
    popular: false,
    description: "Untuk aplikasi web kompleks, toko online kustom, atau aplikasi mobile Android/iOS.",
    features: [
      "Sistem Web App atau Mobile App (React Native/Flutter)",
      "Arsitektur API & Database Skalabel",
      "Desain UI/UX Lengkap via Figma",
      "Integrasi Payment Gateway & WhatsApp Notifikasi",
      "Garansi Bug 30 Hari + Dukungan Teknis",
      "Timeline & Milestone Terstruktur"
    ],
    ctaLabel: "Konsultasi Kebutuhan",
    ctaHref: "https://wa.me/6281234567890?text=Halo%20StackWorks%2C%20saya%20ingin%20konsultasi%20Paket%20Custom%20%2F%20Aplikasi",
    notes: "Penawaran harga formal setelah sesi brief teknis."
  }
];

export const studentPricing: PricingTier[] = [
  {
    id: "student-single-session",
    name: "Sesi Mentoring 1-on-1",
    category: "mahasiswa",
    price: "Rp 150.000",
    billingPeriod: "/ sesi (90 menit)",
    popular: false,
    description: "Bimbingan langsung via Google Meet untuk membedah error, alur program, atau materi praktikum.",
    features: [
      "Durasi 90 menit interaktif",
      "Screen sharing & live code analysis",
      "Mahasiswa mengetik kodenya sendiri",
      "Penjelasan konsep langkah demi langkah",
      "Tanya jawab bebas tanpa batasan",
      "100% Edukatif & Pembelajaran Mandiri"
    ],
    ctaLabel: "Jadwalkan Sesi",
    ctaHref: "https://wa.me/6281234567890?text=Halo%20StackWorks%2C%20saya%20ingin%20jadwalkan%20Sesi%20Mentoring%201-on-1",
    notes: "Cocok untuk mahasiswa yang stuck di bug atau konsep tertentu."
  },
  {
    id: "student-sprint-bundle",
    name: "Paket Sprint Belajar",
    category: "mahasiswa",
    price: "Rp 450.000",
    billingPeriod: "/ paket (4 sesi)",
    popular: true,
    description: "Program terarah 4 sesi untuk menguasai pembuatan aplikasi dari perancangan hingga testing.",
    features: [
      "4 Sesi Tatap Muka Daring (@ 90 menit)",
      "Pendampingan perancangan database & struktur kode",
      "Review arsitektur & persiapan uji coba",
      "Simulasi tanya jawab sidang praktikum/proyek",
      "Dukungan tanya jawab via WhatsApp antar sesi",
      "Sertifikat bimbingan teknologi"
    ],
    ctaLabel: "Daftar Paket Sprint",
    ctaHref: "https://wa.me/6281234567890?text=Halo%20StackWorks%2C%20saya%20ingin%20daftar%20Paket%20Sprint%20Belajar",
    notes: "Hemat Rp 150.000 dibanding ambil sesi satuan."
  },
  {
    id: "student-org-web",
    name: "Website Organisasi / Portofolio",
    category: "mahasiswa",
    price: "Rp 850.000",
    billingPeriod: "/ proyek",
    popular: false,
    description: "Jasa pembuatan website resmi untuk Himpunan, BEM, UKM kampus, atau CV online pribadi.",
    features: [
      "Harga bersahabat khusus kantong mahasiswa (wajib KTM)",
      "Website modern multi-section",
      "Siap dipamerkan di LinkedIn / CV beasiswa",
      "Bantuan setup domain .id / domain kampus",
      "Pelatihan update konten untuk pengurus",
      "Garansi bug 14 hari"
    ],
    ctaLabel: "Pesan Web Organisasi",
    ctaHref: "https://wa.me/6281234567890?text=Halo%20StackWorks%2C%20saya%20ingin%20membuat%20Website%20Organisasi%20Mahasiswa",
    notes: "Menyertakan diskon khusus organisasi kemahasiswaan."
  }
];
