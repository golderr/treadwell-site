export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "mitigation" | "reconstruction" | "supporting";
  tagline: string;
  summary: string;
  whatItIncludes: string[];
  whenYouNeedIt: string;
};

export const services: Service[] = [
  {
    slug: "water-damage-mitigation",
    title: "Water Damage Mitigation & Cleanup",
    shortTitle: "Mitigation & Cleanup",
    category: "mitigation",
    tagline: "Stop the damage. Dry the structure. Prevent what comes next.",
    summary:
      "Water damage mitigation is the emergency phase of a restoration project. The goal is to stop active damage, remove standing water, dry the structure thoroughly, and prevent secondary damage like mold growth or warped flooring. This work needs to start fast. Every hour that water sits in a building, the damage compounds.",
    whatItIncludes: [
      "Emergency water extraction from carpets, hard floors, and subfloor cavities",
      "Moisture mapping and assessment of affected materials",
      "Removal of unsalvageable materials (wet drywall, soaked insulation, damaged carpet pad)",
      "Industrial air movers and dehumidifiers sized to the affected area",
      "Daily moisture readings until structural materials return to normal levels",
      "Antimicrobial treatment to prevent mold and bacterial growth",
      "Documentation for insurance including photos, moisture logs, and affected area diagrams",
    ],
    whenYouNeedIt:
      "Mitigation is the first phase of any water damage response. If you have an active leak, flooding, sewage backup, or any standing water in your home, mitigation is what needs to happen first, before any rebuilding can begin.",
  },
  {
    slug: "reconstruction",
    title: "Reconstruction & Restoration",
    shortTitle: "Reconstruction",
    category: "reconstruction",
    tagline: "Rebuild what the water took. Match what was there before.",
    summary:
      "Reconstruction is the rebuild phase. Once the affected areas are dried out and mitigation is complete, reconstruction puts everything back together. This includes drywall, flooring, cabinetry, trim, paint, and any structural repairs. Our background is in general contracting, which means we handle reconstruction in-house rather than subcontracting it out.",
    whatItIncludes: [
      "Drywall replacement and finishing",
      "Flooring replacement (hardwood, laminate, vinyl, tile, carpet)",
      "Cabinet repair or replacement",
      "Baseboard, trim, and crown molding",
      "Texture matching and painting",
      "Structural framing repairs if needed",
      "Electrical and plumbing work coordinated through licensed trades",
      "Final walkthrough to confirm the property is back to pre-loss condition",
    ],
    whenYouNeedIt:
      "Reconstruction is needed any time water damage has destroyed building materials that can't be dried and saved. You can hire us for reconstruction even if another company handled the mitigation phase. If you've already had a mitigation company come out and now need the rebuild done, we pick up from where they left off.",
  },
  {
    slug: "mold-assessment",
    title: "Mold Assessment & Prevention",
    shortTitle: "Mold Assessment",
    category: "supporting",
    tagline: "Stop mold before it starts. Address it if it's already there.",
    summary:
      "Mold growth begins within 24 to 48 hours of water exposure. Prevention is part of every mitigation project we handle. We monitor moisture levels continuously during drying, apply antimicrobial treatments, and verify that affected areas return to normal moisture before closing a job. When mold is already present, we contain the affected area, document the extent, and coordinate remediation.",
    whatItIncludes: [
      "Moisture readings on structural materials (framing, subfloor, drywall)",
      "Antimicrobial application on affected surfaces",
      "Containment setup if mold is visibly present (poly sheeting, negative air)",
      "Documentation for insurance and future reference",
      "Coordination with licensed mold remediation specialists when scope exceeds our license",
    ],
    whenYouNeedIt:
      "Mold prevention is bundled into every water damage mitigation project we handle. Standalone mold assessment is available if you suspect a past water incident was never properly dried and you're seeing signs of mold growth now.",
  },
  {
    slug: "insurance-coordination",
    title: "Insurance Claims Coordination",
    shortTitle: "Insurance Coordination",
    category: "supporting",
    tagline: "We speak insurance so you don't have to.",
    summary:
      "The insurance process after water damage is often more stressful than the damage itself. We document everything from the first site visit onward. Photos, moisture readings, affected area measurements, material quantities, and line-item scope of work all go into a format your adjuster expects. We communicate directly with your insurance carrier so you can focus on your family.",
    whatItIncludes: [
      "Detailed photo documentation of affected areas",
      "Moisture readings logged throughout the drying process",
      "Scope of work written in Xactimate-compatible language where appropriate",
      "Direct communication with your adjuster",
      "Supplement requests if additional damage is discovered during the work",
      "Final documentation package for your records",
    ],
    whenYouNeedIt:
      "Insurance coordination is included on every project where you're filing a claim. It's not a separate service — it's part of how we run every job. If you've been handling a claim yourself and want us to take it over, we can do that too.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
