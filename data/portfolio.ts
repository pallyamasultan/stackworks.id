export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "website" | "aplikasi";
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  demoUrl?: string;
  image: string;
  gallery?: string[];
  featured?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "lumina-retail",
    slug: "lumina-retail-store",
    title: "Lumina Retail & Lifestyle Store",
    client: "PT Lumina Gaya Nusantara",
    category: "website",
    summary: "Website e-commerce modern dengan katalog produk dinamis dan checkout WhatsApp otomatis.",
    problem: "Klien sebelumnya hanya mengandalkan penjualan manual via DM Instagram dan spreadsheet yang sering menimbulkan salah pencatatan stok dan respon lambat ke pelanggan.",
    solution: "StackWorks membangun website e-commerce berbasis Next.js dengan antarmuka yang bersih, filter produk instan, sinkronisasi stok, dan integrasi pesan checkout rapi langsung ke WhatsApp admin.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    results: [
      "Waktu respon pesanan berkurang dari 45 menit menjadi < 2 menit",
      "Peningkatan konversi penjualan online sebesar 42%",
      "Skor performa Google Lighthouse 98/100"
    ],
    demoUrl: "https://example.com/lumina",
    image: "/portfolio/lumina.webp",
    featured: true
  },
  {
    id: "sentosa-logistik",
    slug: "sentosa-logistik-indonesia",
    title: "Sentosa Logistik Portal Perusahaan",
    client: "CV Sentosa Express Logistik",
    category: "website",
    summary: "Website profil perusahaan B2B dengan fitur pelacakan armada dan kalkulator estimasi tarif pengiriman.",
    problem: "Perusahaan logistik kargo membutuhkan citra digital yang kredibel untuk memenangkan tender korporat serta mengurangi beban CS dalam menjawab estimasi tarif rute Jawa-Bali.",
    solution: "Kami merancang platform web berstandar enterprise yang menampilkan armada, sertifikasi legalitas, sistem kalkulasi estimasi ongkos kirim, dan formulir kerja sama B2B.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    results: [
      "Penurunan 60% pertanyaan berulang mengenai rute & estimasi tarif",
      "3 kontrak kemitraan B2B baru ditutup dalam 2 bulan pertama",
      "Loading time halaman di bawah 1.2 detik"
    ],
    demoUrl: "https://example.com/sentosa",
    image: "/portfolio/sentosa.webp",
    featured: true
  },
  {
    id: "klinik-medika-sehat",
    slug: "klinik-medika-sehat",
    title: "Klinik Medika Sehat Online Appointment",
    client: "Klinik Medika Sehat Jakarta",
    category: "website",
    summary: "Portal reservasi jadwal dokter dan informasi layanan kesehatan terpadu ramah lansia.",
    problem: "Antrean pasien menumpuk di meja pendaftaran fisik karena ketiadaan sistem reservasi nomor antrean mandiri secara daring.",
    solution: "StackWorks merancang portal web responsif dengan tipografi kontras tinggi, alur booking jadwal dokter 3-klik yang simpel, dan pengingat WhatsApp otomatis.",
    technologies: ["Next.js", "Tailwind CSS", "WhatsApp API", "Cloudflare"],
    results: [
      "Pengurangan waktu tunggu pasien di klinik hingga 50%",
      "Tingkat ketidakhadiran (no-show) janji temu turun drastis",
      "Desain lolos uji aksesibilitas WCAG 2.1 Level AA"
    ],
    demoUrl: "https://example.com/medika",
    image: "/portfolio/medika.webp",
    featured: true
  },
  {
    id: "himpunan-teknik-informatika",
    slug: "portal-himpunan-mahasiswa-ti",
    title: "Portal Informasi HMIF Kampus Merdeka",
    client: "Himpunan Mahasiswa Informatika",
    category: "website",
    summary: "Website resmi organisasi kemahasiswaan untuk pusat arsip materi, event kampus, dan showcase karya mahasiswa.",
    problem: "Penyebaran informasi acara kampus terfragmentasi di berbagai grup chat dan feeds sosial media yang cepat tenggelam.",
    solution: "Dibangun website organisasi yang modern, responsif, dan mudah diperbarui oleh pengurus baru tanpa keahlian teknis tingkat tinggi.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Pages"],
    results: [
      "Menjadi pusat informasi tunggal yang diakses > 2.000 mahasiswa per bulan",
      "Arsip modul dan tutorial praktikum tertata rapi",
      "Mendapat apresiasi sebagai Website Lembaga Mahasiswa Terbaik"
    ],
    demoUrl: "https://example.com/hmif",
    image: "/portfolio/hmif.webp",
    featured: false
  },
  {
    id: "trackpack-driver-app",
    slug: "trackpack-driver-courier-app",
    title: "TrackPack Driver & Courier Mobile App",
    client: "PT Kurir Kilat Nusantara",
    category: "aplikasi",
    summary: "Aplikasi mobile kurir untuk pemindaian barcode resi, tanda tangan digital penerima, dan peta navigasi rute.",
    problem: "Kurir lapangan kesulitan mencatat bukti pengiriman saat berada di area dengan sinyal lemah dan sering kehilangan lembar tanda terima fisik.",
    solution: "Aplikasi mobile lintas platform dengan kemampuan offline-first, pemindai barcode kamera berkecepatan tinggi, dan sinkronisasi otomatis saat online.",
    technologies: ["React Native", "TypeScript", "Tailwind (NativeWind)", "SQLite"],
    results: [
      "100% digitalisasi bukti pengiriman (paperless)",
      "Proses serah terima paket berkurang menjadi 15 detik per paket",
      "Baterai smartphone kurir lebih hemat 30% berkat optimasi background sync"
    ],
    demoUrl: "https://example.com/trackpack",
    image: "/portfolio/trackpack.webp",
    featured: true
  }
];
