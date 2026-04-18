import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero, { FinalCTA } from "@/components/PageHero";
import { Icon } from "@/components/icons";
import { articles } from "@/content/articles";

export const metadata = {
  title: "Resources | Water Damage Guides & Education",
  description:
    "Educational articles on water damage restoration, mitigation, insurance claims, mold prevention, and common causes of water damage in Inland Empire homes.",
  alternates: { canonical: "https://treadwellrestoration.com/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Resources"
          title="Guides, explainers, and honest answers."
          subtitle="Practical education about water damage, the restoration process, insurance claims, and how to prevent damage before it happens. Written for homeowners, not for search engines."
        />

        <section className="py-16 bg-surface">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-5">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group block bg-white rounded-md p-7 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display font-extrabold text-[9px] tracking-[0.12em] uppercase text-cherry bg-cherry/10 px-2.5 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="font-body text-[11px] text-silver-dark">
                      {article.readTimeMin} min read
                    </span>
                  </div>
                  <h2 className="font-display font-black text-[19px] tracking-[-0.015em] text-navy mb-2 group-hover:text-cherry transition-colors leading-tight">
                    {article.title}
                  </h2>
                  <p className="font-body text-[14px] leading-relaxed text-silver-dark mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-display font-bold text-[10px] tracking-[0.06em] uppercase text-cherry group-hover:gap-2 transition-all">
                    Read guide <Icon.Arrow size={11} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
