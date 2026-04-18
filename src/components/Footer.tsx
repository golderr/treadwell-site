import Link from "next/link";
import { TreadwellMark } from "./icons";
import { cities } from "@/content/cities";
import { services } from "@/content/services";

const PHONE = "(909) 340-3888";
const PHONE_HREF = "tel:9093403888";

export default function Footer() {
  return (
    <footer className="bg-navy-deep pt-12 pb-8 text-silver-dark">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-start gap-2 mb-4">
              <TreadwellMark size={30} />
              <span className="font-display font-black italic text-[14px] text-white tracking-[-0.01em] leading-[30px]">
                TREADWELL RESTORATION
              </span>
            </Link>
            <p className="text-[13px] leading-relaxed max-w-[280px]">
              Water damage mitigation and reconstruction for the Inland Empire. Locally owned. 24/7 emergency response. We handle your insurance.
            </p>
          </div>

          <div>
            <h4 className="font-display font-extrabold text-[10px] tracking-[0.1em] uppercase text-powder mb-4">
              Services
            </h4>
            <div className="flex flex-col gap-2 text-[13px]">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="hover:text-white transition-colors">
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-extrabold text-[10px] tracking-[0.1em] uppercase text-powder mb-4">
              Service Area
            </h4>
            <div className="flex flex-col gap-2 text-[13px]">
              {cities.slice(0, 6).map((c) => (
                <Link key={c.slug} href={`/service-area/${c.slug}`} className="hover:text-white transition-colors">
                  {c.name}
                </Link>
              ))}
              <Link href="/service-area" className="hover:text-white text-silver transition-colors mt-1">
                View all →
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-extrabold text-[10px] tracking-[0.1em] uppercase text-powder mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-[13px]">
              <a href={PHONE_HREF} className="font-bold text-[14px] text-white hover:text-powder transition-colors">
                {PHONE}
              </a>
              <span>Fontana, CA</span>
              <span>Serving the Inland Empire</span>
              <span className="text-navy-light text-[11px] mt-1">24/7 emergency response</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-navy-light">
            © {new Date().getFullYear()} Treadwell Restoration. All rights reserved.
          </p>
          <div className="flex gap-4 text-[11px]">
            <Link href="/faq" className="text-navy-light hover:text-silver">FAQ</Link>
            <Link href="/about" className="text-navy-light hover:text-silver">About</Link>
            <Link href="/resources" className="text-navy-light hover:text-silver">Resources</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
