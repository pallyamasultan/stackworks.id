# BRIEF PROYEK: Website StackWorks

## 1. Ringkasan
StackWorks adalah studio pengembangan web dan aplikasi mobile, sekaligus penyedia pendampingan belajar coding untuk mahasiswa. Bangun SATU website multi-halaman, responsif (mobile-first), cepat, dan profesional.

- Bahasa: Indonesia
- Tone: ramah, jelas, profesional, tidak berlebihan
- Tagline: "Built to work. Built to grow."

ATURAN KONTEN (wajib):
- Jangan memakai kata "joki" di mana pun di situs.
- Layanan mahasiswa adalah pendampingan: mahasiswa mengerjakan tugasnya sendiri dengan dipandu.
- Tidak ada layanan mengerjakan tugas untuk dikumpulkan atas nama orang lain.

## 2. Tech stack (wajib dipakai)

| Lapisan | Pilihan |
|---|---|
| Framework | Next.js (App Router) |
| Bahasa | TypeScript |
| Styling | Tailwind CSS |
| Komponen UI | shadcn/ui (tombol, kartu, accordion, form) |
| Ikon | lucide-react |
| Data konten | File TypeScript/JSON di folder `data/` (tanpa database) |
| Form kontak | Formspree (awal), kirim ke email StackWorks |
| Hosting | Vercel (deploy otomatis dari GitHub) |
| Versi kode | Git + GitHub organisasi |
| Analitik | Plausible atau Google Analytics (opsional, belakangan) |
| SEO | Metadata bawaan Next.js, sitemap.xml, robots.txt |

Catatan: JANGAN menambahkan database, login, atau backend khusus. Website ini hanya profil + portofolio + formulir kontak.

## 3. Struktur folder yang diinginkan

```
stackworks/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  (Beranda)
│   ├── bisnis/page.tsx
│   ├── mahasiswa/page.tsx
│   ├── portofolio/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── tentang/page.tsx
│   ├── kontak/page.tsx
│   ├── syarat-layanan/page.tsx
│   └── kebijakan-privasi/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── PortfolioCard.tsx
│   ├── PricingTable.tsx
│   ├── ProcessSteps.tsx
│   ├── Faq.tsx
│   ├── TeamCard.tsx
│   └── ContactForm.tsx
├── data/
│   ├── site.ts                   (nama, tagline, WA, email, sosmed)
│   ├── services.ts
│   ├── pricing.ts
│   ├── portfolio.ts
│   ├── team.ts
│   └── faq.ts
├── public/                       (logo, gambar karya, foto tim)
└── BRIEF.md
```

Semua teks, harga, dan data karya disimpan di folder `data/` agar mudah diedit tanpa menyentuh komponen.

## 4. Desain
- Gaya: modern, bersih, banyak ruang kosong, nuansa teknologi
- Warna: 1 warna utama (biru/indigo), 1 aksen, netral abu/putih (mode terang; mode gelap opsional)
- Font: 1 sans-serif modern (Inter atau Plus Jakarta Sans via next/font)
- Komponen konsisten: tombol, kartu, form, footer
- Performa: gambar dioptimasi (next/image), lazy loading, target skor Lighthouse > 90
- Aksesibilitas: kontras cukup, alt text pada gambar, navigasi keyboard

## 5. Navbar (sticky, semua halaman)
- Kiri: Logo StackWorks
- Tengah: Beranda | Untuk Bisnis | Untuk Mahasiswa | Portofolio | Tentang | Kontak
- Kanan: tombol "Hubungi Kami" (link WhatsApp)
- Mobile: menu hamburger

## 6. Halaman dan isi

### 6.1 Beranda (/)
1. Hero: judul besar, subjudul 1-2 kalimat, 2 tombol [Untuk Bisnis] [Untuk Mahasiswa]
2. "Apa yang kami kerjakan": 3 kartu (Website, Aplikasi Mobile, Pendampingan Coding)
3. Karya unggulan: 3 kartu portofolio + tombol "Lihat semua karya"
4. Cara kerja: 4 langkah (Konsultasi, Penawaran, Pengerjaan, Serah Terima)
5. Mengapa StackWorks: 4 poin (tim 10 orang, harga transparan, revisi jelas, garansi bug 14 hari)
6. Testimoni: slider (placeholder dulu)
7. CTA penutup: "Punya ide? Ceritakan ke kami" + tombol WhatsApp

### 6.2 Untuk Bisnis (/bisnis)
- Hero: "Website dan aplikasi untuk bisnismu"
- Layanan: Landing Page, Website Profil, Toko Online, Aplikasi Mobile, Maintenance
- Tabel paket harga (Basic, Standard, Custom; harga placeholder di `data/pricing.ts`)
- Alur pemesanan: Brief > Penawaran > DP > Pengerjaan > Revisi > Pelunasan > Serah terima > Garansi
- 2-3 karya terkait
- FAQ (accordion)
- CTA: tombol pesan

### 6.3 Untuk Mahasiswa (/mahasiswa)
- Hero: "Belajar coding sambil mengerjakan tugasmu sendiri"
- Layanan: Mentoring 1-on-1/kelompok, Kelas Kilat (mis. "Bikin website pertama dalam 3 sesi"), Code Review & Debugging kode milik sendiri, Pembuatan website untuk organisasi/portofolio/usaha mahasiswa
- Paket sesi dan harga (placeholder)
- Alur: Hubungi > Tentukan kebutuhan > Pilih paket > Sesi > Evaluasi
- Kotak "Prinsip kami": mahasiswa mengerjakan tugasnya sendiri, kami memandu dan menjelaskan
- FAQ
- CTA: tombol jadwalkan sesi (WhatsApp)

### 6.4 Portofolio (/portofolio)
- Filter: Semua | Website | Aplikasi
- Grid kartu seragam: gambar, nama proyek, 1 kalimat masalah, badge teknologi, tombol "Lihat demo"
- Data dari `data/portfolio.ts`
- Isi awal: 4 website + 1 aplikasi (placeholder, akan diganti)
- Halaman detail /portofolio/[slug]: masalah, solusi, teknologi, hasil, galeri, link demo

### 6.5 Tentang (/tentang)
- Cerita StackWorks (singkat)
- Nilai tim: 3-4 poin
- Grid anggota: foto, nama, peran, keahlian (10 kartu placeholder, data di `data/team.ts`)
- CTA ke kontak

### 6.6 Kontak (/kontak)
- Tombol besar WhatsApp
- Formulir brief: nama, email/WA, jenis layanan (Website / Aplikasi / Pendampingan Mahasiswa), deskripsi kebutuhan, anggaran (dropdown rentang), tenggat
- Validasi form + pesan sukses (kirim via Formspree)
- Info: email, jam respons (1x24 jam kerja), Instagram, LinkedIn, GitHub

### 6.7 Halaman legal
- /syarat-layanan
- /kebijakan-privasi

## 7. Footer (semua halaman)
Logo + deskripsi singkat | Menu cepat | Kontak | Sosial media | "© 2026 StackWorks" | link Syarat Layanan & Kebijakan Privasi

## 8. Tahapan pengerjaan (kerjakan SATU tahap lalu berhenti dan tunjukkan hasil)
1. Setup proyek (Next.js + TypeScript + Tailwind + shadcn/ui), struktur folder, Navbar, Footer, `data/site.ts`
2. Halaman Beranda
3. Halaman Untuk Bisnis dan Untuk Mahasiswa (paket, FAQ, alur)
4. Portofolio (daftar, filter, halaman detail)
5. Tentang, Kontak (form Formspree), halaman legal, SEO (metadata, sitemap, robots)
6. Optimasi: gambar, performa, cek responsif, siap deploy ke Vercel

## 9. Kriteria selesai
- Semua halaman bisa diakses dari navbar/footer
- Tampil baik di HP, tablet, desktop
- Konten mudah diedit dari folder `data/`
- Form kontak berfungsi
- Tidak ada kata "joki" di seluruh situs
- Build berhasil tanpa error (`npm run build`)
