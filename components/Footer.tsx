import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  Code2,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "@/components/SocialIcons";

export default function Footer() {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "instagram":
        return <InstagramIcon className="h-4 w-4" />;
      case "linkedin":
        return <LinkedinIcon className="h-4 w-4" />;
      case "github":
        return <GithubIcon className="h-4 w-4" />;
      default:
        return <ArrowUpRight className="h-4 w-4" />;
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      {/* Top Banner / Guarantee / Principle Bar */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-200">
              StackWorks Studio & Mentoring:
            </span>
            <span>Garansi bug 14 hari untuk bisnis & pendampingan belajar terarah untuk mahasiswa.</span>
          </div>
          <div className="flex items-center gap-1.5 text-indigo-400">
            <ShieldCheck className="h-4 w-4" />
            <span className="font-medium">100% Edukatif & Beretika</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Description (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group"
              aria-label="StackWorks Home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-500 text-white shadow-md shadow-indigo-500/20">
                <Code2 className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Stack<span className="text-indigo-400">Works</span>
                </span>
                <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase mt-0.5">
                  Built to work. Built to grow.
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase block mb-3">
                Ikuti Kami
              </span>
              <div className="flex items-center gap-2.5">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-200"
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Layanan Kami
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footer.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak & Jam Operasional */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp Resmi</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="h-4 w-4 text-indigo-400 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-xs">
                <Clock className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  Respon pesan: <strong className="text-slate-300">{siteConfig.contact.responseTime}</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{siteConfig.footer.copyright}</p>
          <div className="flex items-center gap-6">
            {siteConfig.footer.legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-slate-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
