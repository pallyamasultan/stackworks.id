import React from "react";
import Link from "next/link";
import { PortfolioItem } from "@/data/portfolio";
import { ArrowUpRight, Laptop, Smartphone } from "lucide-react";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300">
      <div>
        {/* Placeholder Graphic / Image Card */}
        <div className="relative h-48 w-full bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-800 p-6 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/15">
              {item.category === "website" ? (
                <Laptop className="h-3.5 w-3.5 text-indigo-300" />
              ) : (
                <Smartphone className="h-3.5 w-3.5 text-emerald-300" />
              )}
              <span className="capitalize">{item.category}</span>
            </span>
            <span className="text-xs text-slate-300 font-medium">{item.client}</span>
          </div>

          <div className="z-10">
            <h4 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors line-clamp-1">
              {item.title}
            </h4>
          </div>

          {/* Decorative geometric blur circles */}
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-indigo-500/20 blur-xl group-hover:scale-150 transition-transform duration-500" />
        </div>

        {/* Content body */}
        <div className="p-6">
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
            {item.summary}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
        <Link
          href={`/portofolio/${item.slug}`}
          className="text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors inline-flex items-center gap-1"
        >
          Lihat Studi Kasus
        </Link>

        {item.demoUrl && (
          <a
            href={item.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
