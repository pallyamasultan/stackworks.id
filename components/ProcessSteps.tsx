import React from "react";
import { LucideIcon } from "lucide-react";

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title?: string;
  subtitle?: string;
  steps: StepItem[];
}

export default function ProcessSteps({
  title = "Alur Kerja Transparan & Terarah",
  subtitle = "Proses jelas dari awal konsultasi hingga proyek selesai dan siap pakai.",
  steps,
}: ProcessStepsProps) {
  return (
    <div className="py-8">
      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto mb-12">
          {title && <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>}
          {subtitle && <p className="mt-3 text-slate-600 text-sm sm:text-base">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs hover:border-indigo-300 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 font-bold text-sm text-indigo-700">
                {item.step}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                Tahap {idx + 1}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
