export interface FaqItem {
  id: string;
  category: "umum" | "bisnis" | "mahasiswa";
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  // FAQ Bisnis
  {
    id: "bisnis-1",
    category: "bisnis",
    question: "Berapa lama estimasi pengerjaan website di StackWorks?",
    answer: "Untuk Landing Page (Paket Basic) memakan waktu 3-5 hari kerja. Untuk Website Profil Perusahaan (Paket Standard) memakan waktu 7-12 hari kerja. Proyek Custom Web App atau Aplikasi Mobile disesuaikan dengan cakupan fitur yang disepakati (biasanya 2-6 minggu)."
  },
  {
    id: "bisnis-2",
    category: "bisnis",
    question: "Bagaimana alur pembayaran untuk proyek bisnis?",
    answer: "Pembayaran dibagi menjadi 2 tahap: DP (Down Payment) sebesar 50% setelah penandatanganan penawaran/kesepakatan brief, dan pelunasan 50% setelah tahap serah terima (handover) dan website siap online."
  },
  {
    id: "bisnis-3",
    category: "bisnis",
    question: "Apakah ada garansi jika ditemukan kendala atau bug?",
    answer: "Ya! Setiap proyek bisnis kami sertakan garansi perbaikan bug gratis selama 14 hari kerja setelah website live, tanpa biaya tambahan."
  },
  {
    id: "bisnis-4",
    category: "bisnis",
    question: "Apakah saya bisa mengubah atau menambah konten website sendiri nantinya?",
    answer: "Tentu saja. Kami merancang arsitektur konten yang ramah pengguna dan menyediakan sesi serah terima singkat untuk memandu tim Anda mengelola konten tanpa harus paham pemrograman."
  },

  // FAQ Mahasiswa (Prinsip Edukasi Mandiri & Bimbingan Terarah)
  {
    id: "mahasiswa-1",
    category: "mahasiswa",
    question: "Bagaimana prinsip layanan bimbingan coding untuk mahasiswa di StackWorks?",
    answer: "Layanan kami murni pendampingan belajar dan transfer keahlian. Mahasiswa mengerjakan tugas atau proyeknya sendiri dengan dipandu oleh mentor berpengalaman. Kami tidak menyediakan layanan pengerjaan tugas untuk diserahkan atas nama orang lain, melainkan melatih mahasiswa agar paham mendalam dan siap menghadapi sidang atau presentasi."
  },
  {
    id: "mahasiswa-2",
    category: "mahasiswa",
    question: "Bagaimana format sesi bimbingan / mentoring belajar coding?",
    answer: "Sesi dilakukan secara daring via Google Meet atau Zoom dengan fitur screen-sharing. Kamu akan membagikan layarmu, dan mentor akan memandu alur pemikiran, logika algoritma, arsitektur database, serta cara mendiagnosis error baris demi baris."
  },
  {
    id: "mahasiswa-3",
    category: "mahasiswa",
    question: "Kodingan saya mengalami error merah dan tidak bisa jalan, bisakah dibantu?",
    answer: "Bisa! Lewat sesi Code Review & Debugging Terpandu, kami bantu menganalisis penyebab error, menjelaskan letak logikanya yang keliru, dan memandumu memperbaikinya hingga program berjalan normal."
  },
  {
    id: "mahasiswa-4",
    category: "mahasiswa",
    question: "Apakah organisasi mahasiswa (BEM, Himpunan, UKM) bisa memesan website?",
    answer: "Bisa! Kami menyediakan paket khusus organisasi kemahasiswaan dengan harga bersahabat serta pendampingan pengelolaan admin untuk pengurus organisasi."
  }
];
