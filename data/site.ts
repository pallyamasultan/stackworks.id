export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    whatsappNumber: string;
    whatsappUrl: string;
    email: string;
    responseTime: string;
    address?: string;
  };
  navItems: NavItem[];
  socialLinks: SocialLink[];
  footer: {
    quickLinks: NavItem[];
    services: NavItem[];
    legalLinks: NavItem[];
    copyright: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "StackWorks",
  tagline: "Built to work. Built to grow.",
  description:
    "Studio pengembangan website dan aplikasi mobile profesional, serta pendampingan belajar coding terpercaya untuk mahasiswa.",
  url: "https://stackworks.id",
  contact: {
    whatsappNumber: "+62 812-3456-7890",
    whatsappUrl:
      "https://wa.me/6281234567890?text=Halo%20StackWorks%2C%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20proyek%2Fbelajar",
    email: "halo@stackworks.id",
    responseTime: "1x24 jam kerja",
    address: "Jakarta & Bandung, Indonesia",
  },
  navItems: [
    { label: "Beranda", href: "/" },
    { label: "Untuk Bisnis", href: "/bisnis" },
    { label: "Untuk Mahasiswa", href: "/mahasiswa" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Tentang", href: "/tentang" },
    { label: "Kontak", href: "/kontak" },
  ],
  socialLinks: [
    {
      name: "Instagram",
      href: "https://instagram.com/stackworks.id",
      icon: "Instagram",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/stackworks",
      icon: "Linkedin",
    },
    {
      name: "GitHub",
      href: "https://github.com/stackworks-id",
      icon: "Github",
    },
  ],
  footer: {
    quickLinks: [
      { label: "Beranda", href: "/" },
      { label: "Portofolio", href: "/portofolio" },
      { label: "Tentang Kami", href: "/tentang" },
      { label: "Kontak", href: "/kontak" },
    ],
    services: [
      { label: "Pengembangan Website", href: "/bisnis" },
      { label: "Aplikasi Mobile", href: "/bisnis" },
      { label: "Pendampingan Coding Mahasiswa", href: "/mahasiswa" },
      { label: "Mentoring & Code Review", href: "/mahasiswa" },
    ],
    legalLinks: [
      { label: "Syarat Layanan", href: "/syarat-layanan" },
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    ],
    copyright: "© 2026 StackWorks. All rights reserved.",
  },
};
