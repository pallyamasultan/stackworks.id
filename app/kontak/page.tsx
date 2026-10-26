import React from "react";
import { siteConfig } from "@/data/site";
import ContactForm from "@/components/ContactForm";
import {
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "@/components/SocialIcons";

export const metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi tim StackWorks via WhatsApp atau kirimkan formulir brief proyek untuk mendiskusikan kebutuhan website, aplikasi, atau mentoring.",
};

export default function KontakPage() {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "instagram": return <InstagramIcon className="h-4 w-4" />;
      case "linkedin": return <LinkedinIcon className="h-4 w-4" />;
      case "github": return <GithubIcon className="h-4 w-4" />;
      default: return <ArrowUpRight className="h-4 w-4" />;
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 px-3.5 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Mulai Diskusi Sekarang</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hubungi <span className="text-indigo-600">StackWorks</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Punya ide produk digital baru atau ingin konsultasi bimbingan belajar? Kami siap merespons dengan cepat dan ramah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct WhatsApp & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Big WhatsApp Card */}
            <div className="rounded-3xl bg-gradient-to-tr from-emerald-600 to-teal-700 p-8 text-white shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md mb-6">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Respon Cepat via WhatsApp</h2>
              <p className="mt-2 text-sm text-emerald-50 leading-relaxed">
                Ingin konsultasi langsung tanpa harus mengisi form panjang? Hubungi tim admin kami di WhatsApp resmi.
              </p>
              <div className="mt-6">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 px-4 text-sm font-bold text-emerald-700 shadow-md hover:bg-emerald-50 transition-all active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat WhatsApp Sekarang</span>
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Informasi Kontak
              </h3>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-slate-500">Email Resmi</div>
                  <div className="text-sm font-medium text-slate-900">{siteConfig.contact.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-slate-500">Waktu Respons</div>
                  <div className="text-sm font-medium text-slate-900">{siteConfig.contact.responseTime}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-slate-500">Lokasi Tim</div>
                  <div className="text-sm font-medium text-slate-900">{siteConfig.contact.address}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-500 mb-2">Media Sosial</div>
                <div className="flex items-center gap-2">
                  {siteConfig.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-indigo-600 hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      {getSocialIcon(social.name)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brief Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-slate-900">Kirimkan Brief Kebutuhan</h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Isi form berikut agar kami bisa menyiapkan estimasi dan proposal yang akurat.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
