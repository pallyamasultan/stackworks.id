import React from "react";
import { PricingTier } from "@/data/pricing";
import { Check, MessageCircle, Star } from "lucide-react";

interface PricingTableProps {
  tiers: PricingTier[];
}

export default function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-200 ${
            tier.popular
              ? "border-2 border-indigo-600 bg-white shadow-xl shadow-indigo-600/10 scale-100 lg:-translate-y-2"
              : "border border-slate-200/80 bg-white shadow-xs hover:shadow-md"
          }`}
        >
          {tier.popular && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-3.5 py-1 text-xs font-semibold text-white shadow-sm">
                <Star className="h-3 w-3 fill-current" />
                Pilihan Paling Populer
              </span>
            </div>
          )}

          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
              <p className="mt-1 text-xs text-slate-500 min-h-[32px]">{tier.description}</p>
            </div>

            <div className="my-6 flex items-baseline gap-1">
              <span className="text-3xl font-extrabold tracking-tight text-slate-900">
                {tier.price}
              </span>
              {tier.billingPeriod && (
                <span className="text-xs font-medium text-slate-500">
                  {tier.billingPeriod}
                </span>
              )}
            </div>

            <div className="border-t border-slate-100 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Fitur & Cakupan:
              </p>
              <ul className="space-y-3 text-xs text-slate-600">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <a
              href={tier.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all active:scale-95 ${
                tier.popular
                  ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-700"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              <span>{tier.ctaLabel}</span>
            </a>
            {tier.notes && (
              <p className="mt-2.5 text-center text-[11px] text-slate-400">
                {tier.notes}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
