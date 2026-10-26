"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  MessageCircle,
  Code2,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80"
          : "bg-white/80 backdrop-blur-xs border-b border-slate-100"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform duration-200 active:scale-95"
          aria-label="StackWorks Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-blue-500 text-white shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/30 transition-shadow">
            <Code2 className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
              Stack<span className="text-indigo-600">Works</span>
            </span>
            <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase mt-0.5">
              Studio & Mentoring
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full bg-slate-100/70 p-1 border border-slate-200/60"
          aria-label="Main Navigation"
        >
          {siteConfig.navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-indigo-600 font-semibold bg-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 hover:shadow-emerald-600/20 hover:shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Hubungi Kami</span>
          </a>
        </div>

        {/* Mobile: Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-800" />
            ) : (
              <Menu className="h-6 w-6 text-slate-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 px-4 pt-3 pb-6 shadow-xl backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-semibold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={`h-4 w-4 ${
                      isActive ? "text-indigo-600" : "text-slate-400"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Hubungi via WhatsApp</span>
            </a>
            <div className="text-center text-xs text-slate-500">
              Waktu respons: <span className="font-medium text-slate-700">{siteConfig.contact.responseTime}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
