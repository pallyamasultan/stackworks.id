"use client";

import React, { useState } from "react";
import { FaqItem } from "@/data/faq";
import { ChevronDown } from "lucide-react";

interface FaqProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function Faq({
  items,
  title = "Pertanyaan yang Sering Diajukan (FAQ)",
  subtitle = "Jawaban jujur dan transparan untuk pertanyaan seputar layanan StackWorks.",
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="mx-auto max-w-4xl py-6">
      {title && (
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-indigo-200 bg-white shadow-xs"
                  : "border-slate-200/80 bg-white hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between p-5 text-left font-semibold text-slate-900 text-sm sm:text-base focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-indigo-600" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-slate-600 border-t border-slate-50 mt-1">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
