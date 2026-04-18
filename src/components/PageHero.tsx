import { SectionLabel } from "./CTA";

export default function PageHero({
  label,
  title,
  subtitle,
  children,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-linear-to-br from-navy-deep via-navy to-navy-grad py-14 sm:py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-[720px]">
          {label && <SectionLabel color="powder">{label}</SectionLabel>}
          <h1 className="font-display font-black text-[36px] sm:text-[46px] leading-[1.1] tracking-[-0.025em] text-white mb-5">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-[16px] sm:text-[18px] leading-relaxed text-silver">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({
  title = "Water damage is stressful.",
  highlight = "Getting help shouldn't be.",
  subtitle = "Call Treadwell any time, day or night. We'll take it from here.",
}: {
  title?: string;
  highlight?: string;
  subtitle?: string;
}) {
  const PHONE = "(909) 340-3888";
  return (
    <section className="py-20 bg-linear-to-br from-navy-deep to-navy">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <h2 className="font-display font-black text-[32px] sm:text-[38px] leading-[1.1] tracking-[-0.02em] text-white mb-4">
          {title}<br />
          <span className="text-powder">{highlight}</span>
        </h2>
        <p className="font-body text-[16px] text-silver mb-8">{subtitle}</p>
        <a
          href="tel:9093403888"
          className="inline-flex items-center gap-2 font-body font-bold text-base bg-cherry hover:bg-cherry-dark text-white px-8 py-4 rounded-md transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          {PHONE}
        </a>
        <p className="font-body text-[12px] text-silver-dark mt-4">
          Free estimates · No obligation · 24/7 availability
        </p>
      </div>
    </section>
  );
}
