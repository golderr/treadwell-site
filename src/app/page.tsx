import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProcessFlow from "@/components/ProcessFlow";
import { Icon } from "@/components/icons";
import { CallButton, GhostButton, SectionLabel } from "@/components/CTA";
import { services } from "@/content/services";
import { cities } from "@/content/cities";

export const metadata = {
  title: "Treadwell Restoration | 24/7 Water Damage Restoration in the Inland Empire",
  description:
    "Water damage mitigation and reconstruction across the Inland Empire. Emergency response 24/7. We handle your insurance so you don't have to. Serving Fontana, Rancho Cucamonga, Ontario, and surrounding cities.",
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-linear-to-br from-navy-deep via-navy to-navy-grad">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }} />
          <div className="relative max-w-[1100px] mx-auto px-6 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cherry/10 rounded-full px-3.5 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                <span className="font-display font-bold text-[10px] tracking-[0.08em] uppercase text-cherry-light">
                  Available now — 24/7 emergency response
                </span>
              </div>

              <h1 className="font-display font-black text-[40px] sm:text-[48px] lg:text-[54px] leading-[1.05] tracking-[-0.03em] text-white mb-6">
                Water damage<br />
                <span className="text-powder">doesn&apos;t wait.</span><br />
                Neither do we.
              </h1>

              <p className="font-body text-[17px] leading-relaxed text-silver mb-8 max-w-[500px]">
                Treadwell handles both phases of water damage response — emergency mitigation and full reconstruction — for homes and businesses across the Inland Empire. Hire us for one, the other, or both. Either way, we handle the insurance.
              </p>

              <div className="flex flex-wrap gap-3">
                <CallButton variant="primary" size="md" />
                <GhostButton href="/process">How It Works</GhostButton>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-10 pt-7 border-t border-white/10">
                {[
                  "Locally owned & operated",
                  "Insurance coordination included",
                  "Free estimates",
                  "Serving 12 IE cities",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <Icon.Check size={13} className="text-powder" />
                    <span className="font-display font-semibold text-[10px] tracking-[0.05em] uppercase text-white/50">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-6">
              <ProcessFlow />
            </div>
          </div>
        </section>

        {/* ============ URGENCY BAR ============ */}
        <div className="bg-cherry">
          <div className="max-w-[1100px] mx-auto px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <p className="font-body font-semibold text-[14px] text-white">
              Water damage worsens every hour. Mold can begin growing in as little as 24 hours.
            </p>
            <a
              href="tel:9093403888"
              className="font-display font-bold text-[10px] tracking-[0.05em] uppercase bg-navy text-white px-4 py-2 rounded-md hover:bg-navy-deep whitespace-nowrap"
            >
              Get Help Now →
            </a>
          </div>
        </div>

        {/* ============ TWO-PHASE SERVICES ============ */}
        <section id="services" className="py-20 bg-surface">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="max-w-[560px] mb-12">
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="font-display font-black text-[32px] sm:text-[38px] leading-[1.15] tracking-[-0.02em] text-navy mb-3">
                Two phases.<br />
                <span className="text-silver-dark">Pick one, the other, or both.</span>
              </h2>
              <p className="font-body text-[15px] leading-relaxed text-silver-dark">
                Most restoration companies do emergency mitigation and then hand you off to a separate contractor for the rebuild. We do both in-house because our background is general contracting. That said, there&apos;s no requirement to hire us for both phases. Some clients come to us after another company handled the cleanup. Others only need the mitigation work. Both are fine.
              </p>
            </div>

            {/* Phase 1: Mitigation */}
            <div className="mb-4">
              <div className="font-display font-extrabold text-[10px] tracking-[0.12em] uppercase text-powder-dark mb-3 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-powder-dark" />
                Phase 1 — Emergency
              </div>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {services.filter((s) => s.category === "mitigation" || s.category === "supporting" && s.slug === "mold-assessment").map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group block bg-white rounded-md p-7 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-md bg-powder-light flex items-center justify-center flex-shrink-0 text-powder-dark">
                        {s.slug === "water-damage-mitigation" ? <Icon.Droplet size={22} /> : <Icon.Shield size={22} />}
                      </div>
                      <div>
                        <h3 className="font-body font-bold text-[17px] text-navy mb-1">{s.title}</h3>
                        <p className="font-body text-[13px] leading-relaxed text-silver-dark">{s.tagline}</p>
                        <span className="inline-flex items-center gap-1 font-display font-bold text-[10px] tracking-[0.06em] uppercase text-cherry mt-3 group-hover:gap-2 transition-all">
                          Learn more <Icon.Arrow size={11} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Phase 2: Reconstruction */}
            <div>
              <div className="font-display font-extrabold text-[10px] tracking-[0.12em] uppercase text-cherry mb-3 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-cherry" />
                Phase 2 — Rebuild
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {services.filter((s) => s.category === "reconstruction" || s.slug === "insurance-coordination").map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group block bg-white rounded-md p-7 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-md bg-cherry/10 flex items-center justify-center flex-shrink-0 text-cherry-dark">
                        {s.slug === "reconstruction" ? <Icon.Hammer size={22} /> : <Icon.Clipboard size={22} />}
                      </div>
                      <div>
                        <h3 className="font-body font-bold text-[17px] text-navy mb-1">{s.title}</h3>
                        <p className="font-body text-[13px] leading-relaxed text-silver-dark">{s.tagline}</p>
                        <span className="inline-flex items-center gap-1 font-display font-bold text-[10px] tracking-[0.06em] uppercase text-cherry mt-3 group-hover:gap-2 transition-all">
                          Learn more <Icon.Arrow size={11} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ EASY FOR THE HOMEOWNER ============ */}
        <section className="py-20 bg-surface-warm">
          <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionLabel>Why Treadwell</SectionLabel>
              <h2 className="font-display font-black text-[32px] sm:text-[38px] leading-[1.15] tracking-[-0.02em] text-navy mb-5">
                Your only job is to call.<br />
                <span className="text-silver-dark">The rest is ours.</span>
              </h2>
              <p className="font-body text-[15px] leading-relaxed text-silver-dark mb-6">
                Water damage is stressful. The insurance process is stressful. The decision of whether to tear out flooring, salvage cabinets, or knock down drywall is stressful. We remove as much of that burden from you as possible so you can focus on what actually matters — your family, your business, your routine.
              </p>
              <p className="font-body text-[15px] leading-relaxed text-silver-dark">
                You make one call. We do the rest. That means showing up fast, knowing what to do before we walk in the door, documenting everything for insurance, explaining our recommendations clearly, and communicating with your adjuster directly.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { title: "We handle the insurance", desc: "Photos, moisture readings, scope of work, direct adjuster communication. You sign the paperwork. We handle the rest." },
                { title: "We know what to do", desc: "Our background is 25+ years of general contracting. We&apos;ve been inside thousands of homes and know how they&apos;re built." },
                { title: "One point of contact", desc: "The same person runs your project from the first call to the final walkthrough. No subcontractor runaround." },
                { title: "Clear recommendations", desc: "We explain what needs to happen, what doesn&apos;t, and why. No scare tactics, no upsells on things your home doesn&apos;t need." },
                { title: "Clean, respectful crews", desc: "Uniformed technicians, shoe covers, furniture protection, daily cleanup. Your home is treated with care." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3.5 bg-white rounded-md p-5">
                  <div className="w-9 h-9 rounded-md bg-cherry/10 flex items-center justify-center flex-shrink-0 text-cherry">
                    <Icon.Check size={16} />
                  </div>
                  <div>
                    <div className="font-body font-bold text-[15px] text-navy mb-0.5" dangerouslySetInnerHTML={{__html: item.title}} />
                    <div className="font-body text-[13px] leading-relaxed text-silver-dark" dangerouslySetInnerHTML={{__html: item.desc}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVICE AREA ============ */}
        <section id="areas" className="py-20 bg-linear-to-br from-navy-deep to-navy-grad">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center max-w-[480px] mx-auto mb-10">
              <SectionLabel color="powder">Service Area</SectionLabel>
              <h2 className="font-display font-black text-[32px] sm:text-[38px] leading-[1.15] tracking-[-0.02em] text-white mb-3">
                Serving the Inland Empire.
              </h2>
              <p className="font-body text-[15px] leading-relaxed text-silver">
                Twelve cities across San Bernardino, Riverside, and eastern Los Angeles counties. If you&apos;re close to any of these, give us a call — we likely cover your area.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-w-[900px] mx-auto">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-area/${city.slug}`}
                  className="flex items-center gap-2 bg-white/5 hover:bg-cherry/10 rounded-md px-4 py-3 transition-colors group"
                >
                  <Icon.Pin size={12} className="text-cherry flex-shrink-0" />
                  <span className="font-body font-semibold text-[13px] text-white group-hover:text-powder">{city.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="py-20 bg-linear-to-br from-navy-deep to-navy">
          <div className="max-w-[600px] mx-auto px-6 text-center">
            <h2 className="font-display font-black text-[32px] sm:text-[38px] leading-[1.1] tracking-[-0.02em] text-white mb-4">
              Water damage is stressful.<br />
              <span className="text-powder">Getting help shouldn&apos;t be.</span>
            </h2>
            <p className="font-body text-[16px] text-silver mb-8 leading-relaxed">
              Call Treadwell any time, day or night. We&apos;ll take it from here.
            </p>
            <CallButton variant="primary" size="lg" />
            <p className="font-body text-[12px] text-silver-dark mt-4">
              Free estimates · No obligation · 24/7 availability
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
