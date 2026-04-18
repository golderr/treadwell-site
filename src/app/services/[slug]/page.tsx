import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FinalCTA } from "@/components/PageHero";
import { Icon } from "@/components/icons";
import { CallButton, SectionLabel } from "@/components/CTA";
import { services, getService } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary.slice(0, 160),
    alternates: { canonical: `https://treadwellrestoration.com/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    "water-damage-mitigation": Icon.Droplet,
    "reconstruction": Icon.Hammer,
    "mold-assessment": Icon.Shield,
    "insurance-coordination": Icon.Clipboard,
  };
  const IconComp = iconMap[service.slug];

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Nav />
      <main>
        {/* Breadcrumb hero */}
        <section className="bg-linear-to-br from-navy-deep via-navy to-navy-grad pt-12 pb-14 sm:pt-16 sm:pb-20">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="flex items-center gap-2 mb-5 text-[12px] text-silver-dark">
              <Link href="/" className="hover:text-powder">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-powder">Services</Link>
              <span>/</span>
              <span className="text-silver">{service.shortTitle}</span>
            </div>
            <SectionLabel color="powder">{service.category === "mitigation" ? "Phase 1 — Emergency" : service.category === "reconstruction" ? "Phase 2 — Rebuild" : "Supporting Service"}</SectionLabel>
            <h1 className="font-display font-black text-[36px] sm:text-[46px] leading-[1.08] tracking-[-0.025em] text-white mb-4">
              {service.title}
            </h1>
            <p className="font-body text-[17px] italic text-powder mb-0">{service.tagline}</p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-14 bg-surface">
          <div className="max-w-[900px] mx-auto px-6 grid lg:grid-cols-[2fr_1fr] gap-10">
            <article>
              <h2 className="font-display font-black text-[24px] tracking-[-0.015em] text-navy mb-4">
                What this is
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-navy mb-8">{service.summary}</p>

              <h2 className="font-display font-black text-[24px] tracking-[-0.015em] text-navy mb-4">
                What&apos;s included
              </h2>
              <ul className="space-y-3 mb-8">
                {service.whatItIncludes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <div className="w-6 h-6 rounded-md bg-cherry/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-cherry">
                      <Icon.Check size={14} />
                    </div>
                    <span className="font-body text-[15px] leading-relaxed text-navy">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display font-black text-[24px] tracking-[-0.015em] text-navy mb-4">
                When you need it
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-navy mb-8">{service.whenYouNeedIt}</p>

              <div className="bg-white rounded-md p-6 border-l-4 border-powder-dark mt-10">
                <h3 className="font-display font-black text-[18px] text-navy mb-2">Not sure what you need?</h3>
                <p className="font-body text-[14px] leading-relaxed text-silver-dark mb-4">
                  Call us. We&apos;ll ask a few questions, walk through what&apos;s happening, and tell you honestly whether you need emergency mitigation, reconstruction, both, or neither. Free estimates, no pressure.
                </p>
                <CallButton variant="primary" size="sm" />
              </div>
            </article>

            <aside>
              <div className="bg-white rounded-md p-5 sticky top-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-cherry/10 flex items-center justify-center text-cherry-dark">
                    {IconComp && <IconComp size={20} />}
                  </div>
                  <div className="font-display font-black text-[15px] text-navy">{service.shortTitle}</div>
                </div>
                <div className="border-t border-surface pt-4">
                  <div className="font-display font-extrabold text-[10px] tracking-[0.08em] uppercase text-silver-dark mb-3">Other Services</div>
                  <div className="flex flex-col gap-2">
                    {otherServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="font-body text-[13px] text-navy hover:text-cherry"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
