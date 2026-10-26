import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/data/services";
import { Check, ArrowRight, Layout, Globe, ShoppingBag, Smartphone, GraduationCap, Zap, Bug, Users } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const renderIcon = (name: string) => {
    const props = { className: "h-6 w-6 text-indigo-600" };
    switch (name) {
      case "Layout": return <Layout {...props} />;
      case "Globe": return <Globe {...props} />;
      case "ShoppingBag": return <ShoppingBag {...props} />;
      case "Smartphone": return <Smartphone {...props} />;
      case "GraduationCap": return <GraduationCap {...props} />;
      case "Zap": return <Zap {...props} />;
      case "Bug": return <Bug {...props} />;
      default: return <Users {...props} />;
    }
  };

  const targetUrl = service.category === "bisnis" ? "/bisnis" : "/mahasiswa";

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all duration-200">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 mb-5">
          {renderIcon(service.iconName)}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.shortDescription}</p>

        <ul className="space-y-2.5 mb-6 text-xs text-slate-600 border-t border-slate-100 pt-4">
          {service.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={targetUrl}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors pt-2 group"
      >
        <span>Pelajari selengkapnya</span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
