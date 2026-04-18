import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero, { FinalCTA } from "@/components/PageHero";
import { Icon } from "@/components/icons";

export const metadata = {
  title: "Our Process | What Happens When You Call Treadwell",
  description:
    "Step-by-step walkthrough of what happens when you call Treadwell Restoration after a water damage event — from initial call through final walkthrough.",
  alternates: { canonical: "https://treadwellrestoration.com/process" },
};

const steps = [
  {
    num: "01",
    title: "You call. We answer.",
    body: "Our line is answered 24/7 by someone on our team — not an answering service. We&apos;ll ask a few quick questions to understand the situation: what happened, when it started, how much water, and whether it&apos;s still active. If it&apos;s an active leak, we&apos;ll talk you through shutting off the water supply while we dispatch.",
    time: "First 5 minutes",
  },
  {
    num: "02",
    title: "We arrive on-site fast.",
    body: "For emergencies in our service area, we&apos;re typically on-site within 60 to 90 minutes. We bring the equipment we need to start extraction and drying immediately — water extractors, dehumidifiers, air movers, moisture meters, and containment materials.",
    time: "Within 1–2 hours",
  },
  {
    num: "03",
    title: "We assess and document.",
    body: "Before any work starts, we walk the affected area with you, take photos, measure the scope, and log moisture readings on structural materials. This documentation becomes the foundation of your insurance claim. We&apos;ll explain what we see, what we think happened, and what needs to come next.",
    time: "First hour on-site",
  },
  {
    num: "04",
    title: "We contact your insurance.",
    body: "If you haven&apos;t already filed a claim, we&apos;ll help you start one. Either way, we&apos;ll communicate directly with your adjuster and send them our documentation, scope of work, and moisture readings. You can stay copied on the conversation or step out of it entirely — your call.",
    time: "Same day",
  },
  {
    num: "05",
    title: "We mitigate — extraction, drying, prevention.",
    body: "Standing water comes out first. Then unsalvageable materials (wet drywall, soaked insulation, damaged carpet pad). Then we set up industrial air movers and dehumidifiers sized to the affected area. We apply antimicrobial treatment to prevent mold growth, and we come back daily to log moisture readings until everything is dry.",
    time: "Typically 3–5 days",
  },
  {
    num: "06",
    title: "We verify the structure is dry.",
    body: "Before any rebuild happens, we confirm that structural materials (framing, subfloor, drywall, insulation) have returned to normal moisture levels. Skipping this step is how you get mold inside a wall six months later. We document the final readings and share them with your insurance for the record.",
    time: "Day 4–7",
  },
  {
    num: "07",
    title: "We reconstruct — if you want us to.",
    body: "This is where most restoration companies hand you off. We don&apos;t. Because our background is general contracting, we handle the rebuild in-house: drywall, flooring, trim, paint, cabinetry, texture matching. Same team, same foreman, same point of contact. If you&apos;d rather use your own contractor for the rebuild, no problem — we&apos;ll close out our scope cleanly and hand over full documentation.",
    time: "Varies by scope",
  },
  {
    num: "08",
    title: "Final walkthrough and claim closeout.",
    body: "We walk the finished project with you, confirm you&apos;re satisfied, handle any last touch-ups, and close out the insurance claim. We leave you with a complete documentation package — photos, readings, scope of work, and final invoices — for your records.",
    time: "Final day",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Process"
          title="What happens when you call."
          subtitle="Here's a step-by-step walkthrough of how we handle a water damage project from the first phone call through the final walkthrough. Our goal is to make it as easy on you as possible."
        />

        <section className="py-16 bg-surface">
          <div className="max-w-[780px] mx-auto px-6">
            <div className="space-y-5">
              {steps.map((step) => (
                <div key={step.num} className="bg-white rounded-md p-7 flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="font-display font-black text-[34px] tracking-[-0.03em] text-cherry leading-none">
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="font-display font-black text-[19px] tracking-[-0.015em] text-navy">
                        {step.title}
                      </h2>
                      <span className="font-display font-extrabold text-[9px] tracking-[0.1em] uppercase text-silver-dark bg-surface px-2 py-1 rounded">
                        {step.time}
                      </span>
                    </div>
                    <p className="font-body text-[15px] leading-[1.7] text-silver-dark" dangerouslySetInnerHTML={{ __html: step.body }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-md p-8 mt-10 border-l-4 border-powder-dark">
              <h3 className="font-display font-black text-[20px] tracking-[-0.015em] text-navy mb-3">
                What&apos;s different about working with us
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "One point of contact from call to closeout",
                  "We handle insurance communication directly",
                  "Daily updates during drying and rebuild phases",
                  "Complete documentation package at the end",
                  "No subcontractor handoff between phases",
                  "Clean, uniformed crews with shoe covers and furniture protection",
                ].map((item) => (
                  <div key={item} className="flex gap-2.5">
                    <Icon.Check size={14} className="text-cherry flex-shrink-0 mt-1" />
                    <span className="font-body text-[14px] text-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
