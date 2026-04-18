import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FinalCTA } from "@/components/PageHero";
import { Icon } from "@/components/icons";
import { CallButton, SectionLabel } from "@/components/CTA";
import { articles, getArticle, type ArticleSection } from "@/content/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `https://treadwellrestoration.com/resources/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "Treadwell Restoration",
      url: "https://treadwellrestoration.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Treadwell Restoration",
      url: "https://treadwellrestoration.com",
    },
  };

  return (
    <>
      <Nav />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section className="bg-linear-to-br from-navy-deep via-navy to-navy-grad pt-12 pb-12 sm:pt-16 sm:pb-16">
          <div className="max-w-[780px] mx-auto px-6">
            <div className="flex items-center gap-2 mb-5 text-[12px] text-silver-dark">
              <Link href="/" className="hover:text-powder">Home</Link>
              <span>/</span>
              <Link href="/resources" className="hover:text-powder">Resources</Link>
              <span>/</span>
              <span className="text-silver line-clamp-1">{article.category}</span>
            </div>
            <SectionLabel color="powder">{article.category}</SectionLabel>
            <h1 className="font-display font-black text-[32px] sm:text-[42px] leading-[1.1] tracking-[-0.025em] text-white mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-[12px] text-silver">
              <span>Published {new Date(article.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span>·</span>
              <span>{article.readTimeMin} min read</span>
            </div>
          </div>
        </section>

        <section className="py-14 bg-surface">
          <div className="max-w-[780px] mx-auto px-6">
            <article>
              {article.content.map((block, i) => <Block key={i} block={block} />)}
            </article>

            <div className="bg-white rounded-md p-7 mt-12 border-l-4 border-cherry">
              <h3 className="font-display font-black text-[18px] tracking-[-0.015em] text-navy mb-2">
                Need help with water damage right now?
              </h3>
              <p className="font-body text-[14px] leading-relaxed text-silver-dark mb-4">
                Treadwell Restoration handles both emergency mitigation and full reconstruction across the Inland Empire. Call us any time, day or night.
              </p>
              <CallButton variant="primary" size="sm" />
            </div>

            {related.length > 0 && (
              <div className="mt-14">
                <h2 className="font-display font-black text-[20px] tracking-[-0.015em] text-navy mb-5">More reading</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {related.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/resources/${a.slug}`}
                      className="group block bg-white rounded-md p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="font-display font-extrabold text-[9px] tracking-[0.1em] uppercase text-cherry mb-2">
                        {a.category}
                      </div>
                      <h3 className="font-body font-bold text-[14px] text-navy leading-snug group-hover:text-cherry transition-colors">
                        {a.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function Block({ block }: { block: ArticleSection }) {
  if (block.type === "p") {
    return <p className="font-body text-[16px] leading-[1.8] text-navy mb-5">{block.text}</p>;
  }
  if (block.type === "h2") {
    return <h2 className="font-display font-black text-[24px] tracking-[-0.02em] text-navy mt-10 mb-4">{block.text}</h2>;
  }
  if (block.type === "h3") {
    return <h3 className="font-display font-black text-[18px] tracking-[-0.015em] text-navy mt-7 mb-3">{block.text}</h3>;
  }
  if (block.type === "ul") {
    return (
      <ul className="space-y-2.5 mb-6">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <div className="w-5 h-5 rounded-md bg-cherry/10 flex items-center justify-center flex-shrink-0 mt-1 text-cherry">
              <Icon.Check size={11} />
            </div>
            <span className="font-body text-[15px] leading-[1.7] text-navy">{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "ol") {
    return (
      <ol className="space-y-2.5 mb-6 list-decimal pl-6">
        {block.items.map((item, i) => (
          <li key={i} className="font-body text-[15px] leading-[1.7] text-navy pl-2">{item}</li>
        ))}
      </ol>
    );
  }
  if (block.type === "callout") {
    return (
      <div className="bg-white rounded-md p-5 my-6 border-l-4 border-powder-dark">
        <div className="font-display font-extrabold text-[10px] tracking-[0.1em] uppercase text-powder-dark mb-1">
          {block.title}
        </div>
        <p className="font-body text-[14px] leading-[1.7] text-navy m-0">{block.text}</p>
      </div>
    );
  }
  return null;
}
