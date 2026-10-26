export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: "bisnis" | "mahasiswa";
  shortDescription: string;
  description: string;
  iconName: string;
  features: string[];
  deliverables?: string[];
}

export const servicesData: ServiceItem[] = [
  // Layanan Bisnis
  {
    id: "landing-page",
    title: "Landing Page Berkonversi Tinggi",
    slug: "landing-page",
    category: "bisnis",
    shortDescription: "Halaman promosi cepat, responsif, dan dirancang khusus untuk meningkatkan penjualan produk atau jasa Anda.",
    description: "Kami mendesain dan membangun landing page modern dengan copywriting persuasif, loading kilat, dan optimasi SEO lokal untuk mengubah pengunjung menjadi pelanggan setia.",
    iconName: "Layout",
    features: [
      "Desain responsif mobile-first",
      "Kecepatan loading < 1.5 detik",
      "Integrasi WhatsApp & form leads",
      "Optimasi SEO On-Page",
      "Garansi perbaikan bug 14 hari"
    ]
  },
  {
    id: "company-profile",
    title: "Website Profil Perusahaan",
    slug: "company-profile",
    category: "bisnis",
    shortDescription: "Tingkatkan kredibilitas bisnis Anda dengan website profesional multi-halaman yang elegan.",
    description: "Situs web profil komprehensif yang menampilkan visi, layanan, portofolio, dan keunggulan bisnis Anda di hadapan klien dan calon investor.",
    iconName: "Globe",
    features: [
      "Struktur multi-halaman rapi",
      "Panel pengelolaan konten mudah",
      "Desain branding eksklusif",
      "Integrasi media sosial & peta",
      "Garansi bug 14 hari"
    ]
  },
  {
    id: "online-store",
    title: "Toko Online (E-Commerce)",
    slug: "online-store",
    category: "bisnis",
    shortDescription: "Katalog produk interaktif dengan alur checkout instan terhubung ke WhatsApp atau payment gateway.",
    description: "Bangun platform penjualan mandiri tanpa potongan komisi pihak ketiga, lengkap dengan manajemen produk dan pesanan yang praktis.",
    iconName: "ShoppingBag",
    features: [
      "Katalog produk dengan filter dinamis",
      "Checkout langsung ke WhatsApp / Payment",
      "Hitung ongkir otomatis",
      "Dashboard admin intuitif",
      "Garansi bug 14 hari"
    ]
  },
  {
    id: "mobile-app",
    title: "Aplikasi Mobile (iOS & Android)",
    slug: "mobile-app",
    category: "bisnis",
    shortDescription: "Aplikasi mobile lintas platform yang mulus, responsif, dan siap rilis di Play Store & App Store.",
    description: "Solusi aplikasi berbasis React Native/Flutter untuk automasi operasional, loyalitas pelanggan, atau produk digital startup Anda.",
    iconName: "Smartphone",
    features: [
      "Aplikasi Android & iOS dari satu basis kode",
      "Performa native & UI mulus",
      "Push notification & offline mode",
      "Bantuan rilis ke store",
      "Garansi bug 14 hari"
    ]
  },

  // Layanan Mahasiswa (Pendampingan Belajar Mandiri & Edukasi Terarah)
  {
    id: "mentoring-coding",
    title: "Mentoring Coding 1-on-1 / Kelompok",
    slug: "mentoring-coding",
    category: "mahasiswa",
    shortDescription: "Bimbingan intensif tatap muka daring untuk memahami konsep pemrograman, arsitektur, dan logika aplikasi.",
    description: "Sesi privat di mana mentor membedah konsep yang sulit dimengerti, memandu alur pemecahan masalah, dan memastikan kamu memahami setiap baris kode yang kamu tulis sendiri.",
    iconName: "GraduationCap",
    features: [
      "Dipandu langsung software engineer berpengalaman",
      "Fokus logika, algoritma, dan arsitektur kode",
      "Jadwal fleksibel (Google Meet / Zoom)",
      "Mahasiswa menulis kodenya sendiri dengan dipandu",
      "Bebas tanya jawab tanpa takut dihakimi"
    ]
  },
  {
    id: "kelas-kilat",
    title: "Kelas Kilat (Sprint Coding)",
    slug: "kelas-kilat",
    category: "mahasiswa",
    shortDescription: "Program intensif singkat (3-5 sesi) untuk membangun website atau aplikasi pertama dari nol.",
    description: "Belajar praktis berbasis proyek nyata: HTML/CSS/Tailwind, React/Next.js, atau database backend untuk mempercepat pemahaman akademis.",
    iconName: "Zap",
    features: [
      "Kurikulum terstruktur & materi ringkas",
      "Praktik langsung (hands-on project)",
      "Source code starter pack & cheatsheet",
      "Sertifikat penyelesaian sesi",
      "Forum diskusi interaktif"
    ]
  },
  {
    id: "code-review",
    title: "Code Review & Debugging Terpandu",
    slug: "code-review",
    category: "mahasiswa",
    shortDescription: "Bantuan analisis error, refactoring, dan optimasi kode buatanmu agar bersih dan siap presentasi.",
    description: "Kodinganmu macet kena error merah atau nilai performanya rendah? Kami bantu telusuri akar masalahnya dan jelaskan mengapa error terjadi agar kamu bisa memperbaikinya.",
    iconName: "Bug",
    features: [
      "Analisis bug bersama secara real-time",
      "Penjelasan detail penyebab error & solusinya",
      "Peningkatan kerapian kode (clean code)",
      "Persiapan simulasi tanya jawab dosen penguji",
      "Edukasi best practice debugging mandiri"
    ]
  },
  {
    id: "web-organisasi",
    title: "Pembuatan Website Organisasi Mahasiswa",
    slug: "web-organisasi",
    category: "mahasiswa",
    shortDescription: "Layanan pembuatan website resmi untuk BEM, Himpunan, UKM, atau portofolio pribadi mahasiswa.",
    description: "Website modern berbiaya terjangkau khusus organisasi kampus atau mahasiswa yang ingin memiliki portofolio profesional untuk melamar kerja/magang.",
    iconName: "Users",
    features: [
      "Diskon khusus pelajar / mahasiswa (KTM aktif)",
      "Domain & hosting setup bantuan",
      "Desain keren & siap pamer di LinkedIn",
      "Pelatihan admin pengelola website",
      "Dukungan teknis berkala"
    ]
  }
];
