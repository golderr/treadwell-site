import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FinalCTA } from "@/components/PageHero";
import { Icon } from "@/components/icons";
import { CallButton, SectionLabel } from "@/components/CTA";
import { cities, getCity } from "@/content/cities";
import { services } from "@/content/services";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `Water Damage Restoration in ${city.name}, CA`,
    description: `24/7 water damage mitigation and reconstruction for homes and businesses in ${city.name}. Locally owned. We handle your insurance. Free estimates. Call (909) 340-3888.`,
    alternates: { canonical: `https://treadwellrestoration.com/service-area/${city.slug}` },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  return (
    <>
      <Nav />
      <main>
        <section className="bg-linear-to-br from-navy-deep via-navy to-navy-grad pt-12 pb-14 sm:pt-16 sm:pb-20">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="flex items-center gap-2 mb-5 text-[12px] text-silver-dark">
              <Link href="/" className="hover:text-powder">Home</Link>
              <span>/</span>
              <Link href="/service-area" className="hover:text-powder">Service Area</Link>
              <span>/</span>
              <span className="text-silver">{city.name}</span>
            </div>
            <SectionLabel color="powder">{city.county}</SectionLabel>
            <h1 className="font-display font-black text-[36px] sm:text-[46px] leading-[1.08] tracking-[-0.025em] text-white mb-4">
              Water Damage Restoration<br />in {city.name}, California
            </h1>
            <p className="font-body text-[17px] leading-relaxed text-silver max-w-[600px]">
              24/7 emergency water damage mitigation and full reconstruction for homes and businesses in {city.name}. We handle your insurance. Free estimates. Locally owned.
            </p>
          </div>
        </section>

        <section className="py-14 bg-surface">
          <div className="max-w-[900px] mx-auto px-6 grid lg:grid-cols-[2fr_1fr] gap-10">
            <article>
              <h2 className="font-display font-black text-[24px] tracking-[-0.015em] text-navy mb-4">
                About our service in {city.name}
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-navy mb-6">{city.localContext}</p>

              <h2 className="font-display font-black text-[24px] tracking-[-0.015em] text-navy mb-4">
                Common water damage issues in {city.name} homes
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-navy mb-6">{city.housingNote}</p>

              <h2 className="font-display font-black text-[24px] tracking-[-0.015em] text-navy mb-4">
                What we do in {city.name}
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-navy mb-4">
                Treadwell Restoration provides both phases of water damage response for {city.name} homeowners and businesses:
              </p>
              <ul className="space-y-3 mb-8">
                {services.map((s) => (
                  <li key={s.slug} className="flex gap-3">
                    <div className="w-6 h-6 rounded-md bg-cherry/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-cherry">
                      <Icon.Check size={14} />
                    </div>
                    <span className="font-body text-[15px] leading-relaxed text-navy">
                      <Link href={`/services/${s.slug}`} className="font-semibold hover:text-cherry">{s.title}</Link> — {s.tagline}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-white rounded-md p-6 border-l-4 border-cherry mb-8">
                <h3 className="font-display font-black text-[18px] text-navy mb-2">
                  Why {city.name} homeowners call Treadwell
                </h3>
                <p className="font-body text-[14px] leading-relaxed text-silver-dark mb-3">
                  We&apos;re local. We know {city.name} housing stock, we know the neighborhoods, and we know the quirks of building in this part of the Inland Empire. When you call, you&apos;re not getting routed to a national dispatch center — you&apos;re getting the same team that will be at your door.
                </p>
                <p className="font-body text-[14px] leading-relaxed text-silver-dark">
                  Our background is 25+ years of general contracting, which means we can handle reconstruction in-house. If you want one company for the entire process — from water extraction through final paint — we can do that. If you only need the mitigation phase or only need reconstruction after another company did the cleanup, that&apos;s also fine.
                </p>
              </div>

              <h2 className="font-display font-black text-[24px] tracking-[-0.015em] text-navy mb-4">
                Nearby cities we also serve
              </h2>
              <div className="flex flex-wrap gap-2">
                {city.nearbyCities.map((nearby) => {
                  const match = cities.find((c) => c.name === nearby);
                  if (!match) return (
                    <span key={nearby} className="font-body text-[13px] text-silver-dark bg-white px-3 py-1.5 rounded-md">
                      {nearby}
                    </span>
                  );
                  return (
                    <Link
                      key={nearby}
                      href={`/service-area/${match.slug}`}
                      className="font-body text-[13px] text-navy bg-white px-3 py-1.5 rounded-md hover:bg-cherry hover:text-white transition-colors"
                    >
                      {nearby}
                    </Link>
                  );
                })}
              </div>
            </article>

            <aside>
              <div className="bg-white rounded-md p-5 sticky top-20">
                <div className="font-display font-black text-[14px] text-navy mb-3">
                  Emergency in {city.name}?
                </div>
                <p className="font-body text-[13px] leading-relaxed text-silver-dark mb-4">
                  Call us now. We answer 24/7 and can have a crew on-site fast.
                </p>
                <CallButton variant="primary" size="sm" className="w-full justify-center" />
                <div className="border-t border-surface mt-5 pt-4">
                  <div className="font-display font-extrabold text-[10px] tracking-[0.08em] uppercase text-silver-dark mb-3">Our Services</div>
                  <div className="flex flex-col gap-2">
                    {services.map((s) => (
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
