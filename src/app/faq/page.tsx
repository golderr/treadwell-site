import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero, { FinalCTA } from "@/components/PageHero";

export const metadata = {
  title: "Frequently Asked Questions | Water Damage Restoration",
  description:
    "Answers to common questions about water damage restoration, mitigation, reconstruction, insurance claims, and how Treadwell Restoration handles the process.",
  alternates: { canonical: "https://treadwellrestoration.com/faq" },
};

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "What should I do first when I discover water damage?",
        a: "Shut off the water at the source if you can — usually at the fixture valve or the main supply valve. Then call us. While you wait, move any salvageable items away from the affected area and take photos of the damage as you first found it. Don't start drying things yourself with towels or household fans — that rarely removes enough moisture to prevent secondary damage, and insurance carriers want documentation of the original condition.",
      },
      {
        q: "Do you come out at night and on weekends?",
        a: "Yes. Water damage doesn't wait for business hours and neither do we. Our line is answered 24 hours a day, 7 days a week, 365 days a year. For active emergencies in our service area, we typically have a crew on-site within 60 to 90 minutes.",
      },
      {
        q: "How fast do I actually need to act?",
        a: "Faster than most people realize. Mold can begin growing within 24 to 48 hours of water exposure. Drywall and MDF trim start to lose structural integrity within hours of sustained wetting. Hardwood floors can cup and warp within a day. The first 24 hours after a water event determines whether materials can be saved or have to be replaced.",
      },
      {
        q: "Is there a charge for an estimate?",
        a: "No. Estimates are free. If the work is covered by your insurance, we work directly with your carrier. If it's not covered or you're paying out of pocket, we'll give you a clear written scope and price before any work begins.",
      },
    ],
  },
  {
    category: "Insurance & Billing",
    items: [
      {
        q: "Does my homeowners insurance cover water damage?",
        a: "Most standard homeowners policies cover sudden and accidental water damage — like a pipe bursting, a water heater failing, or an appliance supply line rupturing. What's typically not covered is gradual damage from a slow leak you should have noticed, flood damage from external water (that requires separate flood insurance), or damage from a lack of maintenance. Every policy is different, so the short answer is: probably, but call your carrier to confirm.",
      },
      {
        q: "Do you bill insurance directly?",
        a: "Yes. We document the loss thoroughly, communicate with your adjuster, and invoice your carrier directly when that's appropriate. You typically only pay your deductible out of pocket. If there's a portion of the work not covered by insurance, we'll make sure you understand that up front before we proceed.",
      },
      {
        q: "What if my insurance company denies the claim?",
        a: "We'll help you understand why. Sometimes denials happen because the cause of the damage isn't covered (like a slow leak that wasn't sudden), and sometimes they happen because the documentation wasn't thorough enough. If the denial is over documentation, we can often help with the supplement process. If the cause of loss genuinely isn't covered, we'll give you an honest private-pay estimate and let you decide how to proceed.",
      },
      {
        q: "Should I file a claim before or after calling you?",
        a: "Either works. If the damage is significant, call us first — we can help document the loss properly before you file, which makes the claim stronger. If you've already filed, that's fine too. Either way, we'll coordinate with your adjuster once they're assigned.",
      },
    ],
  },
  {
    category: "What You Should Know",
    items: [
      {
        q: "Do I have to hire you for both the mitigation and the reconstruction?",
        a: "No. You can hire us for just the emergency mitigation phase, just the reconstruction phase, or both. Some clients come to us after another company handled the drying and now need the rebuild done. Others only need the mitigation work. Both are fine. The advantage of using us for both phases is continuity — one company, one insurance conversation, one point of contact from first call to final walkthrough — but we don't require it.",
      },
      {
        q: "How is water damage restoration different from reconstruction?",
        a: "Water damage restoration (also called mitigation) is the emergency phase: stopping active damage, extracting water, drying the structure, and preventing mold. Reconstruction is the rebuild phase: replacing drywall, flooring, cabinetry, trim, and paint. Different skill sets and different crews. Most restoration companies only do the mitigation side. We handle both because our background is general contracting.",
      },
      {
        q: "What are the water damage categories I keep hearing about?",
        a: "The IICRC (Institute of Inspection, Cleaning and Restoration Certification) defines three categories of water damage based on contamination level. Category 1 is clean water from a broken supply line, burst pipe, or overflowing sink. Category 2 (gray water) contains some contamination — washing machine overflows, dishwasher leaks, aquariums. Category 3 (black water) is grossly contaminated — sewage, ground water, toilet overflows with feces, or flood water. The category affects what can be cleaned versus what must be removed and replaced.",
      },
      {
        q: "Can I just dry the area myself with fans?",
        a: "Sometimes, for very small spills caught immediately. For anything bigger than a minor spill, household fans move air but don't remove moisture from the environment. Drying wet structural materials requires dehumidification to actually pull moisture out of the air — otherwise the water just moves from the materials into the air and back. Professional-grade dehumidifiers are sized to the affected area and typically run 24 to 72 hours. That's the difference between 'feels dry' and 'is actually dry.'",
      },
      {
        q: "How long does the whole process take?",
        a: "Mitigation (extraction and drying) usually takes 3 to 5 days for a typical residential water damage event. Reconstruction varies enormously based on scope — a small drywall and flooring patch might take a week, while a full kitchen rebuild with custom cabinetry can take 6 to 10 weeks. We'll give you a realistic timeline at the assessment stage.",
      },
    ],
  },
  {
    category: "About Treadwell",
    items: [
      {
        q: "What cities do you serve?",
        a: "We serve 12 cities across the western Inland Empire: Fontana, Rancho Cucamonga, Ontario, Jurupa Valley, Rialto, Bloomington, Upland, Riverside, Eastvale, Norco, Montclair, and Claremont. That covers most of San Bernardino County, western Riverside County, and the eastern edge of LA County. If you're close to any of these cities but yours isn't listed, call us — we likely cover your area.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes. We carry general liability insurance and workers' compensation coverage. For details on our California Contractors State License Board (CSLB) license and classifications, please call us — we're happy to provide documentation for your records.",
      },
      {
        q: "Do you work on commercial properties or just homes?",
        a: "Both. Most of our volume is residential, but we also handle water damage events in small commercial properties — offices, retail spaces, restaurants, light industrial. Large institutional projects (hospitals, schools, multifamily apartment complexes) aren't our primary focus, but we can usually assist.",
      },
      {
        q: "What makes you different from other restoration companies?",
        a: "Three things. One: our background is 25+ years of general contracting, so we do reconstruction in-house rather than subcontracting it. Two: we handle insurance communication directly — you don't have to play middleman on your own claim. Three: we're local. When you call Treadwell, you're reaching the team that will actually be at your door, not a national dispatch center.",
      },
    ],
  },
];

export default function FAQPage() {
  // Build FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <PageHero
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Common questions about water damage, insurance claims, our process, and how we work. If you don't see your question, just call us."
        />

        <section className="py-16 bg-surface">
          <div className="max-w-[780px] mx-auto px-6">
            {faqs.map((category) => (
              <div key={category.category} className="mb-12">
                <h2 className="font-display font-black text-[20px] tracking-[-0.015em] text-navy mb-5 pb-3 border-b border-silver-light">
                  {category.category}
                </h2>
                <div className="space-y-5">
                  {category.items.map((item) => (
                    <details key={item.q} className="group bg-white rounded-md p-6">
                      <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                        <h3 className="font-body font-bold text-[16px] text-navy">{item.q}</h3>
                        <div className="w-6 h-6 rounded-full bg-cherry/10 flex items-center justify-center flex-shrink-0 text-cherry mt-0.5 group-open:rotate-180 transition-transform">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </summary>
                      <p className="font-body text-[15px] leading-[1.7] text-silver-dark mt-3">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <FinalCTA title="Still have questions?" highlight="Just call us." subtitle="We're happy to talk through your situation on the phone. No obligation." />
      </main>
      <Footer />
    </>
  );
}
