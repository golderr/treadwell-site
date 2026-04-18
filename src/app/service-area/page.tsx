import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero, { FinalCTA } from "@/components/PageHero";
import { Icon } from "@/components/icons";
import { cities } from "@/content/cities";

export const metadata = {
  title: "Service Area | Water Damage Restoration Across the Inland Empire",
  description:
    "Treadwell Restoration serves 12 cities across the Inland Empire: Fontana, Rancho Cucamonga, Ontario, Jurupa Valley, Rialto, Bloomington, Upland, Riverside, Eastvale, Norco, Montclair, and Claremont.",
  alternates: { canonical: "https://treadwellrestoration.com/service-area" },
};

export default function ServiceAreaPage() {
  const sb = cities.filter((c) => c.county === "San Bernardino County");
  const rs = cities.filter((c) => c.county === "Riverside County");
  const la = cities.filter((c) => c.county === "Los Angeles County");

  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Service Area"
          title="Serving 12 cities across the Inland Empire."
          subtitle="Our service area covers San Bernardino County, Riverside County, and the eastern edge of Los Angeles County. If you're close to any of these cities — even if yours isn't listed — give us a call. We likely cover your area."
        />

        <section className="py-16 bg-surface">
          <div className="max-w-[1000px] mx-auto px-6">
            <CityGroup title="San Bernardino County" cities={sb} />
            <CityGroup title="Riverside County" cities={rs} />
            <CityGroup title="Los Angeles County" cities={la} />

            <div className="bg-white rounded-md p-8 mt-10 border-l-4 border-cherry">
              <h3 className="font-display font-black text-[20px] tracking-[-0.015em] text-navy mb-2">
                Don&apos;t see your city?
              </h3>
              <p className="font-body text-[14px] leading-relaxed text-silver-dark">
                Our service area is the western Inland Empire, but we regularly travel beyond these 12 cities for the right project. If you&apos;re in Corona, Pomona, Colton, San Bernardino, Chino, or another nearby city, give us a call. Water damage doesn&apos;t respect city boundaries — we don&apos;t either.
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

function CityGroup({ title, cities }: { title: string; cities: typeof import("@/content/cities").cities }) {
  if (cities.length === 0) return null;
  return (
    <div className="mb-10">
      <h2 className="font-display font-black text-[20px] tracking-[-0.015em] text-navy mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/service-area/${city.slug}`}
            className="group block bg-white rounded-md p-5 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon.Pin size={14} className="text-cherry" />
              <span className="font-body font-bold text-[15px] text-navy group-hover:text-cherry transition-colors">
                {city.name}
              </span>
            </div>
            <p className="font-body text-[12px] text-silver-dark line-clamp-2">{city.localContext}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
