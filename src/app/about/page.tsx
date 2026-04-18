import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero, { FinalCTA } from "@/components/PageHero";
import { Icon } from "@/components/icons";

export const metadata = {
  title: "About Treadwell Restoration",
  description:
    "Treadwell Restoration is a locally-owned water damage restoration and reconstruction company serving the Inland Empire, founded on 25+ years of general contracting experience.",
  alternates: { canonical: "https://treadwellrestoration.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="About"
          title="Built on 25+ years in the trades."
          subtitle="Treadwell Restoration is a locally-owned water damage restoration and reconstruction company serving the Inland Empire. Our foundation is a long career in general contracting — not a restoration franchise playbook."
        />

        <section className="py-16 bg-surface">
          <div className="max-w-[780px] mx-auto px-6">
            <article className="prose-custom">
              <h2 className="font-display font-black text-[26px] tracking-[-0.02em] text-navy mb-4">
                Why we started Treadwell
              </h2>
              <p className="font-body text-[16px] leading-[1.75] text-navy mb-5">
                Most water damage restoration companies are really mitigation specialists. They&apos;re set up to dry out a property quickly, and they&apos;re good at it. But once the drying is done, they hand the homeowner off to a separate contractor for the rebuild — which is where a lot of projects stall out.
              </p>
              <p className="font-body text-[16px] leading-[1.75] text-navy mb-5">
                We&apos;ve spent years watching that handoff go poorly. Insurance scopes get misinterpreted. Timelines slip. Homeowners end up managing multiple companies during one of the most stressful moments they&apos;ve had in their home. The reconstruction work — which is where most of the budget lives — often ends up in the hands of a contractor who doesn&apos;t know the mitigation history.
              </p>
              <p className="font-body text-[16px] leading-[1.75] text-navy mb-10">
                Treadwell exists to close that gap. We handle both phases — emergency mitigation and full reconstruction — under one company, with one point of contact, and one unified conversation with your insurance carrier. Or, if you only want one phase, we do that too.
              </p>

              <div className="bg-white rounded-md p-7 my-10 border-l-4 border-powder-dark">
                <div className="font-display font-extrabold text-[10px] tracking-[0.1em] uppercase text-powder-dark mb-2">
                  Our Founder
                </div>
                <h3 className="font-display font-black text-[22px] tracking-[-0.015em] text-navy mb-3">
                  [CONTRACTOR NAME]
                </h3>
                <p className="font-body text-[14px] leading-[1.7] text-silver-dark mb-3">
                  [CONTRACTOR NAME] has spent [YEARS] years as a licensed general contractor, with deep experience in [TYPES OF PROJECTS — e.g., custom residential, remodels, commercial tenant improvements, multifamily]. Over that career, he&apos;s worked on [APPROX NUMBER] homes across [CITIES / REGIONS], including [A NOTABLE PROJECT OR TYPE OF WORK WORTH MENTIONING].
                </p>
                <p className="font-body text-[14px] leading-[1.7] text-silver-dark mb-3">
                  [CONTRACTOR NAME] founded Treadwell after seeing too many restoration projects handled by companies that knew how to dry a property but didn&apos;t know how to rebuild one. His philosophy is straightforward: [ONE OR TWO SENTENCES ON PERSONAL APPROACH — e.g., &apos;Do the job the way you&apos;d want it done in your own home.&apos; / &apos;Tell the homeowner what they actually need, not what sells.&apos; / &apos;Be the company you&apos;d hire yourself.&apos;]
                </p>
                <p className="font-body text-[12px] text-silver italic">
                  [To fill in: name, specific years, project types, a grounded personal approach statement. Avoid superlatives.]
                </p>
              </div>

              <h2 className="font-display font-black text-[26px] tracking-[-0.02em] text-navy mb-4">
                How we&apos;re different
              </h2>
              <p className="font-body text-[16px] leading-[1.75] text-navy mb-5">
                Three things separate us from most restoration companies in the Inland Empire:
              </p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    title: "We do reconstruction in-house.",
                    body: "Our background is 25+ years of general contracting. When water damage takes out your kitchen cabinets and flooring, we can rebuild it ourselves — we don&apos;t hand you a list of contractors to chase down. Same company, same foreman, from the first call through the final walkthrough.",
                  },
                  {
                    title: "We speak insurance.",
                    body: "We document everything the way your adjuster expects: photos, moisture logs, affected-area measurements, Xactimate-compatible scope language. We communicate directly with your carrier so you&apos;re not playing middleman on your own claim.",
                  },
                  {
                    title: "We&apos;re local, and we pick up the phone.",
                    body: "When you call Treadwell at 2 a.m., you&apos;re not getting routed to a national dispatch center in another state. You&apos;re reaching the local team that will be at your door.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-md bg-cherry/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-cherry">
                      <Icon.Check size={16} />
                    </div>
                    <div>
                      <h3 className="font-body font-bold text-[17px] text-navy mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                      <p className="font-body text-[15px] leading-relaxed text-silver-dark" dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-black text-[26px] tracking-[-0.02em] text-navy mb-4">
                Where we work
              </h2>
              <p className="font-body text-[16px] leading-[1.75] text-navy mb-5">
                We serve twelve cities across the western Inland Empire, covering San Bernardino County, Riverside County, and the eastern edge of Los Angeles County. That deliberate focus lets us show up fast, stay involved, and know the housing stock in every neighborhood we work.
              </p>
              <p className="font-body text-[16px] leading-[1.75] text-navy mb-5">
                We&apos;re not trying to be a regional restoration giant. We&apos;re trying to be the best water damage and reconstruction company in our corner of Southern California — the company your neighbor recommends when your ceiling starts dripping at midnight.
              </p>
            </article>
          </div>
        </section>

        <FinalCTA title="Have a water emergency?" highlight="We're here 24/7." subtitle="Or if it's not urgent and you just want to talk it through, call during the day. We're happy to walk through your situation." />
      </main>
      <Footer />
    </>
  );
}
