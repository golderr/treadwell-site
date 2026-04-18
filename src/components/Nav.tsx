"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TreadwellMark, Icon } from "./icons";

const PHONE = "(909) 340-3888";
const PHONE_HREF = "tel:9093403888";

const links = [
  { label: "Services", href: "/services" },
  { label: "Service Area", href: "/service-area" },
  { label: "Process", href: "/process" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md" : "bg-navy"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[60px]">
        <Link href="/" className="flex items-center gap-[10px] flex-shrink-0">
          <TreadwellMark size={30} />
          <span className="font-display font-black italic text-[17px] text-white tracking-[-0.01em]">
            TREADWELL
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display font-semibold text-[11px] tracking-[0.06em] uppercase text-white/50 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Phone - desktop */}
        <div className="hidden sm:flex items-center text-right">
          <div>
            <div className="font-display font-bold text-[9px] tracking-[0.1em] uppercase text-cherry-light">
              24/7 Emergency
            </div>
            <a
              href={PHONE_HREF}
              className="font-display font-extrabold text-[13px] text-white hover:text-powder transition-colors"
            >
              {PHONE}
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="bg-cherry text-white p-2 rounded-md"
            aria-label="Call now"
          >
            <Icon.Phone size={18} />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M3 12h18M3 6h18M3 18h18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-deep border-t border-white/5 px-6 py-4">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-display font-semibold text-sm tracking-[0.04em] uppercase text-white/70 hover:text-white py-2"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
