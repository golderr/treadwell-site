import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero, { FinalCTA } from "@/components/PageHero";
import { Icon } from "@/components/icons";
import { services, type Service } from "@/content/services";

export const metadata = {
  title: "Water Damage Services | Mitigation & Reconstruction",
  description:
    "Treadwell offers both emergency water damage mitigation (extraction, drying, mold prevention) and full reconstruction (drywall, flooring, rebuild). Hire us for one, the other, or both.",
  alternates: { canonical: "https://treadwellrestoration.com/services" },
};

export default function ServicesPage() {
  const phase1 = services.filter((s) => s.category === "mitigation" || s.slug === "mold-assessment");
  const phase2 = services.filter((s) => s.category === "reconstruction" || s.slug === "insurance-coordination");

  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Services"
          title="Two phases of response. One company."
          subtitle="Treadwell handles both the emergency mitigation work and the full reconstruction. You can hire us for one phase, the other, or both. There's no bundle requirement, and no surprise — just the work you actually need."
        />

        <section className="py-16 bg-surface">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="mb-12">
              <div className="font-display font-extrabold text-[11px] tracking-[0.12em] uppercase text-powder-dark mb-4 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-powder-dark" />
                Phase 1 — Emergency Mitigation
              </div>
              <p className="font-body text-[15px] leading-relaxed text-silver-dark mb-6">
                The emergency phase. Stop active damage, remove standing water, dry the structure, and prevent mold. This is the work that needs to happen within hours of a water event, not days.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {phase1.map((s) => (
                  <ServiceCard key={s.slug} service={s} accent="powder" />
                ))}
              </div>
            </div>

            <div>
              <div className="font-display font-extrabold text-[11px] tracking-[0.12em] uppercase text-cherry mb-4 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-cherry" />
                Phase 2 — Reconstruction & Administrative
              </div>
              <p className="font-body text-[15px] leading-relaxed text-silver-dark mb-6">
                The rebuild. Everything that needs to happen after the structure is dry: drywall, flooring, cabinetry, paint, trim. Plus the insurance coordination that runs alongside every project.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {phase2.map((s) => (
                  <ServiceCard key={s.slug} service={s} accent="cherry" />
                ))}
              </div>
            </div>

            <div className="mt-14 bg-white rounded-md p-8 border-l-4 border-cherry">
              <h3 className="font-display font-black text-[22px] tracking-[-0.015em] text-navy mb-3">
                One company through both phases, if you want it.
              </h3>
              <p className="font-body text-[15px] leading-relaxed text-silver-dark mb-4">
                Most restoration companies in the Inland Empire only handle mitigation. They dry out your property, then hand you a list of contractors for the rebuild. That works, but it means managing two companies, two timelines, two insurance conversations, and two points of failure.
              </p>
              <p className="font-body text-[15px] leading-relaxed text-silver-dark">
                Because our background is general contracting, we do both in-house. If you want continuity from emergency response through final paint touchup, we can do that. If you prefer to split the work between companies, or if another company already handled the mitigation, we&apos;re also happy to come in for just the reconstruction phase.
              </p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function ServiceCard({ service, accent }: { service: Service; accent: "cherry" | "powder" }) {
  const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    "water-damage-mitigation": Icon.Droplet,
    "reconstruction": Icon.Hammer,
    "mold-assessment": Icon.Shield,
    "insurance-coordination": Icon.Clipboard,
  };
  const IconComp = iconMap[service.slug];
  const bg = accent === "cherry" ? "bg-cherry/10 text-cherry-dark" : "bg-powder-light text-powder-dark";

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white rounded-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className={`w-11 h-11 rounded-md flex items-center justify-center mb-4 ${bg}`}>
        {IconComp && <IconComp size={22} />}
      </div>
      <h3 className="font-body font-bold text-[16px] text-navy mb-1.5">{service.title}</h3>
      <p className="font-body text-[13px] leading-relaxed text-silver-dark mb-4">{service.tagline}</p>
      <span className="inline-flex items-center gap-1 font-display font-bold text-[10px] tracking-[0.06em] uppercase text-cherry group-hover:gap-2 transition-all">
        Learn more <Icon.Arrow size={11} />
      </span>
    </Link>
  );
}
