export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  readTimeMin: number;
  content: ArticleSection[];
};

export type ArticleSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string };

export const articles: Article[] = [
  {
    slug: "first-24-hours-after-water-damage",
    title: "What to Do in the First 24 Hours After Water Damage",
    description:
      "A step-by-step homeowner's guide to the first 24 hours after discovering water damage — what to do, what not to do, and when to call for help.",
    publishedAt: "2026-01-15",
    category: "Emergency Response",
    readTimeMin: 6,
    content: [
      { type: "p", text: "The first 24 hours after a water damage event determine how much damage you end up with, how much your insurance claim will cover, and how long your property will be disrupted. What you do in that window matters more than most homeowners realize." },
      { type: "p", text: "Here's a practical walkthrough, in order of priority." },

      { type: "h2", text: "Step 1: Stop the water" },
      { type: "p", text: "Before anything else, stop the source. If a pipe has burst under a sink, shut off the valve directly below that fixture. If a supply line has ruptured behind a washing machine, dishwasher, or refrigerator, there's typically a valve near the appliance. If you can't find the local shutoff — or if water is coming from multiple places — go to your home's main water shutoff valve." },
      { type: "p", text: "The main shutoff is usually in one of three places: in a basement or crawl space near where the water supply enters the house, in a garage on the wall adjacent to the front yard, or outside near a hose bib. In Inland Empire homes, it's often near the front of the house on the exterior wall, sometimes behind a small access panel." },
      { type: "callout", title: "If you can't find the main shutoff", text: "Call your water utility. Most utility companies can dispatch someone to shut off water at the street within 30 to 60 minutes in an emergency. Save the after-hours number to your phone before you need it." },

      { type: "h2", text: "Step 2: Protect yourself, then your belongings" },
      { type: "p", text: "If the water is anywhere near electrical outlets, appliances, or your electrical panel, turn off the breaker for affected circuits before wading into the water. Electrocution risk in a flooded area is real and often underestimated." },
      { type: "p", text: "Once the area is safe, move anything salvageable off the wet floor. Furniture legs wick water up, so even if the cushion is dry, the frame may be absorbing water from below. Lift upholstered furniture onto blocks or move it to an unaffected room. Remove rugs, shoes, and anything porous from the affected area. Valuables, electronics, documents, and photos go first." },

      { type: "h2", text: "Step 3: Document everything before you clean up" },
      { type: "p", text: "Take photos and video of the affected area as you first found it. This is the single most important step for your insurance claim. Get wide shots of each room, close-ups of damaged materials, photos of the water source if visible, and photos of any affected belongings." },
      { type: "p", text: "Document everything before you move anything. If you've already moved some items for safety, photograph them in their new location and note where they were originally. If possible, photograph the timestamp on your phone or a clock in the background so there's a visual record of when the damage was documented." },

      { type: "h2", text: "Step 4: Start removing standing water (carefully)" },
      { type: "p", text: "If you have a wet/dry vacuum and the water is clean (from a supply line, not a toilet or sewer), you can start removing standing water yourself. Don't use a household vacuum — that's a fire hazard." },
      { type: "p", text: "If the water is contaminated (toilet backup, sewage, flood water from outside), don't try to handle it yourself. Contaminated water exposes you to bacteria, viruses, and mold spores. Call a professional restoration company and wait for them to arrive." },

      { type: "h2", text: "Step 5: Call your insurance and a restoration company" },
      { type: "p", text: "You can do these in either order, but don't wait. Most homeowners insurance policies require prompt notification of a loss, and delaying the call can affect your coverage." },
      { type: "p", text: "When you call a restoration company, ask these questions:" },
      { type: "ul", items: [
        "How fast can you be on-site?",
        "Do you handle insurance documentation?",
        "Do you do reconstruction in-house or only mitigation?",
        "Are you local, or am I being routed to a national dispatch?",
        "What's included in your estimate?",
      ] },
      { type: "p", text: "Get clear answers. A reputable company will answer directly without dodging." },

      { type: "h2", text: "What NOT to do in the first 24 hours" },
      { type: "ul", items: [
        "Don't try to dry wet drywall with household fans — it's not enough air movement or dehumidification to prevent mold.",
        "Don't throw away damaged materials before your insurance adjuster has seen them (or you've thoroughly documented them).",
        "Don't lift soaked carpet and leave it in place hoping it'll dry. Wet carpet pad becomes a mold incubator within 48 hours.",
        "Don't assume small leaks are minor. Water travels along framing and subfloor and often causes damage far from the visible source.",
        "Don't use bleach on mold you find. It doesn't actually kill mold on porous surfaces and can mask the problem.",
      ] },

      { type: "h2", text: "The bottom line" },
      { type: "p", text: "The first 24 hours are about stopping the damage, documenting what happened, and getting professional help on-site fast. Mitigation needs to begin within that window to prevent secondary damage, especially mold growth. The longer the structure stays wet, the more materials you'll end up replacing, and the more expensive your project gets." },
      { type: "p", text: "If you're in the Inland Empire and need help now, call Treadwell at (909) 340-3888. We answer 24/7." },
    ],
  },

  {
    slug: "water-damage-categories-explained",
    title: "Water Damage Categories Explained: Clean, Gray, and Black Water",
    description:
      "The IICRC classifies water damage into three categories based on contamination level. Understanding which category your water loss falls into affects everything from cleaning protocol to insurance coverage.",
    publishedAt: "2026-01-22",
    category: "Education",
    readTimeMin: 7,
    content: [
      { type: "p", text: "Water damage isn't just water damage. The restoration industry classifies water losses into three categories based on how contaminated the water is. This classification — set by the IICRC, the Institute of Inspection, Cleaning and Restoration Certification — determines what can be cleaned versus what must be removed, what protective equipment your crew needs, and often how your insurance handles the claim." },
      { type: "p", text: "Here's what each category means and why it matters to you as a homeowner." },

      { type: "h2", text: "Category 1: Clean Water" },
      { type: "p", text: "Category 1 water is water from a sanitary source that hasn't picked up meaningful contamination. Examples include:" },
      { type: "ul", items: [
        "A burst copper or PEX supply line under a sink",
        "An overflowing bathtub filled with tap water",
        "A water heater that has failed without rust or sediment",
        "An appliance supply line (to a refrigerator ice maker, washing machine, dishwasher) rupturing",
        "Rainwater coming through a roof leak, before it has contacted building materials for more than 48 hours",
      ] },
      { type: "p", text: "Category 1 water is the easiest scenario. Wet materials can often be dried in place and saved. Carpet pads usually need replacement, but carpet itself can sometimes be salvaged if addressed quickly. Drywall can often be dried without cutting if the drying starts fast." },
      { type: "callout", title: "Category escalation", text: "Category 1 water becomes Category 2 after about 48 hours of sitting at room temperature, and Category 3 after about 72 hours. Bacterial growth and contamination start immediately. The longer water sits, the worse the classification — and the more materials you lose." },

      { type: "h2", text: "Category 2: Gray Water" },
      { type: "p", text: "Category 2 water contains significant contamination — chemical, biological, or physical — and could cause illness or discomfort if humans are exposed to it. Examples include:" },
      { type: "ul", items: [
        "Washing machine overflows (laundry detergent + soil + bacteria)",
        "Dishwasher overflows (food particles + detergent residue)",
        "Toilet overflows of only urine (no feces)",
        "Discharge from aquariums",
        "Seepage from ground water entering the home through cracks",
        "Water from a broken water bed",
        "Category 1 water that has sat for more than 48 hours",
      ] },
      { type: "p", text: "With Category 2, porous materials that have been directly saturated (carpet, carpet pad, unsealed drywall below the flood line) usually need to be removed rather than dried in place. Semi-porous materials (plywood subfloor, framing) can often be cleaned and dried if treated quickly with antimicrobial agents. Non-porous materials (tile, sealed concrete, metal) can be cleaned and reused." },

      { type: "h2", text: "Category 3: Black Water" },
      { type: "p", text: "Category 3 water is grossly contaminated and contains pathogens — bacteria, viruses, fungi — that pose serious health risks. Examples include:" },
      { type: "ul", items: [
        "Sewage backups",
        "Toilet overflows containing feces",
        "Flood water from outside the home (rivers, storm runoff)",
        "Ground water that has contacted soil or septic systems",
        "Standing water from any source that has sat for more than 72 hours",
        "Any water that has contacted mold or other biological contaminants",
      ] },
      { type: "p", text: "Category 3 is the most aggressive protocol. Essentially all porous materials in the affected area must be removed and replaced: carpet, pad, drywall up to at least 2 feet above the water line, insulation, baseboards, and often cabinets. Semi-porous materials (subfloor, framing) often require HEPA vacuuming, antimicrobial treatment, and encapsulation if they're to be kept. Crews wear full PPE including Tyvek suits, respirators, and eye protection." },

      { type: "h2", text: "How category affects your insurance claim" },
      { type: "p", text: "Most homeowners policies cover all three categories of water damage when the cause of loss is sudden and accidental. A burst pipe is covered whether it's Category 1, 2, or 3 by the time you discover it. The category affects the scope of work (and therefore the cost), but usually doesn't affect coverage." },
      { type: "p", text: "Where the category does matter for coverage is in two situations. First, flood damage from outside the home (Category 3 by definition) is almost never covered by standard homeowners insurance. You need separate flood insurance through the NFIP or a private carrier. Second, gradual leaks that sit for weeks or months and become Category 3 through time may be denied as 'long-term seepage' rather than a sudden accident." },

      { type: "h2", text: "Why you can't tell just by looking" },
      { type: "p", text: "Contamination isn't always visible. Water from a broken washing machine looks identical to water from a burst supply line. Water from a slab leak might be Category 1 initially, but if it's been sitting under your floor for a month, it's become contaminated. The category is determined by the source of the water and the time elapsed, not by appearance or smell." },
      { type: "p", text: "Professional restoration companies use this classification from the moment they arrive. It drives every decision — what to remove, what to dry, what to clean, what protective equipment to use. If a company is treating every job the same way regardless of source and time, they're cutting corners you don't want cut." },

      { type: "h2", text: "Bottom line" },
      { type: "p", text: "Category matters. It affects how much of your home has to be demolished versus dried and kept. It affects the equipment and protective measures needed. It affects how your insurance handles the claim. And it changes over time, which is why fast response matters — a Category 1 loss handled in the first 24 hours is a very different project than the same loss after 72 hours." },
    ],
  },

  {
    slug: "prevent-mold-after-water-damage",
    title: "How to Prevent Mold After Water Damage",
    description:
      "Mold can begin growing within 24 to 48 hours of water exposure. Here's what actually prevents it — and what doesn't.",
    publishedAt: "2026-02-02",
    category: "Mold Prevention",
    readTimeMin: 6,
    content: [
      { type: "p", text: "Mold is the secondary disaster after water damage. It can turn a simple mitigation project into a costly remediation, and it can turn a routine insurance claim into a long dispute. The good news: mold is almost entirely preventable if the water damage is handled correctly. The bad news: the window for prevention is narrow, and most of the tactics homeowners try don't actually work." },
      { type: "p", text: "Here's what actually prevents mold, what doesn't, and why." },

      { type: "h2", text: "Why mold grows after water damage" },
      { type: "p", text: "Mold spores are everywhere. They're in the air in your home right now. They're in your walls, your carpet, your HVAC system. At normal conditions they're harmless and inactive. But when they land on a wet surface with organic material — drywall paper, wood, fabric, dust — they can germinate and start growing." },
      { type: "p", text: "Three conditions have to be present for mold to actively grow: a food source (organic material), moisture, and time. Temperature matters too — mold thrives between 60 and 80 degrees Fahrenheit, which is exactly the temperature range of a typical home. The food source is almost always available in a home. The temperature is almost always right. That leaves moisture and time as the controllable variables." },

      { type: "h2", text: "The critical window: 24 to 48 hours" },
      { type: "p", text: "Mold germination begins as early as 24 hours after water exposure. Visible growth typically appears within 48 to 72 hours. By 5 to 7 days, growth is established and colonies are producing new spores." },
      { type: "p", text: "That's why professional mitigation crews treat the first 24 hours as the most important window of a water damage project. Every hour structural materials remain wet is an hour mold is more likely to establish." },

      { type: "h2", text: "What actually prevents mold" },
      { type: "h3", text: "1. Fast extraction of standing water" },
      { type: "p", text: "Every gallon of water removed in the first hour is a gallon that can't evaporate back into the structure later. Professional water extractors pull water out of carpet, carpet pad, hard flooring, and subfloor cavities. Household wet/dry vacuums can handle small amounts but don't have the power to pull water from below a carpet pad." },

      { type: "h3", text: "2. Industrial-grade drying" },
      { type: "p", text: "This is the biggest difference between DIY drying and professional drying. Household box fans move air, but they don't dehumidify. Moving wet air around a room just evaporates water into the air — and unless that air is then dehumidified and replaced, the moisture cycles back into the materials." },
      { type: "p", text: "Professional drying uses two tools together: air movers (high-velocity fans that speed evaporation off wet surfaces) and dehumidifiers (which remove moisture from the air). Sized correctly for the affected area, they can bring structural moisture levels back to normal in 3 to 5 days." },

      { type: "h3", text: "3. Removing materials that can't be dried" },
      { type: "p", text: "Some materials can't be dried fast enough to prevent mold, no matter what equipment you use. Wet carpet pad is the most common example — it's thick, absorbent, and slow to release moisture. Wet insulation is similar. Saturated drywall with visible water staining often has to come out. A professional crew makes these calls based on moisture readings, not appearance. Materials that can't be dried within the critical window are removed and replaced." },

      { type: "h3", text: "4. Antimicrobial treatment" },
      { type: "p", text: "After extraction and demolition but during drying, professional crews apply antimicrobial agents to exposed framing, subfloor, and other materials that will stay in the structure. These products don't kill existing mold (that requires remediation), but they prevent new growth from establishing during the days the materials are drying out." },

      { type: "h3", text: "5. Moisture verification before rebuild" },
      { type: "p", text: "This is the step most commonly skipped, and it's the one that causes mold to appear months later inside finished walls. Before any drywall, flooring, or cabinetry goes back in, moisture levels in framing and subfloor need to be verified back to normal. If they're not, whatever moisture remains becomes trapped inside the rebuilt wall assembly with no ventilation, no way to dry, and perfect conditions for mold growth." },

      { type: "h2", text: "What doesn't prevent mold" },
      { type: "ul", items: [
        "Household fans running for a few days. Not enough air movement, no dehumidification.",
        "Opening windows to 'let it dry.' Adds humid outdoor air, doesn't accelerate drying.",
        "Bleach. Doesn't kill mold on porous surfaces (just surface staining) and doesn't prevent future growth.",
        "Drying carpet but leaving wet pad underneath. Pad holds moisture for weeks and grows mold from below.",
        "'Letting it air out' for a few days before starting work. By the time you're done airing, mold has already established.",
        "Turning up the HVAC. Conditioned air is drier than outdoor air, but the HVAC system isn't designed for structural drying. It's also a fast way to spread mold spores throughout the house.",
      ] },

      { type: "h2", text: "When mold is already present" },
      { type: "p", text: "If you're finding mold during the mitigation phase — not weeks later, but during initial demolition — it typically means the water damage predates what you thought. A slow leak, a prior undetected event, or water that sat longer than expected. In those cases, the project shifts from mitigation to mitigation-plus-remediation. Affected areas are contained, air scrubbers are set up to filter spores during removal, and affected materials are bagged and disposed of rather than just cut out." },
      { type: "p", text: "The remediation scope is specific to mold and requires specific certifications. Treadwell coordinates with licensed mold remediation specialists when a project exceeds our scope, and we incorporate the remediation work into the overall project timeline and insurance documentation." },

      { type: "h2", text: "Bottom line" },
      { type: "p", text: "Mold prevention is a race against a 24 to 48 hour clock. Winning that race requires fast response, professional equipment, correct decisions about what to remove versus dry, and moisture verification before rebuild. It's not a DIY project for anything beyond a very small spill. The cost of mold remediation after the fact almost always exceeds the cost of doing mitigation right in the first place." },
    ],
  },

  {
    slug: "water-damage-insurance-claims-guide",
    title: "A Homeowner's Guide to Water Damage Insurance Claims",
    description:
      "Filing a water damage insurance claim is stressful. Here's what's typically covered, what isn't, and how to make the process as smooth as possible.",
    publishedAt: "2026-02-14",
    category: "Insurance",
    readTimeMin: 8,
    content: [
      { type: "p", text: "The insurance process after water damage is often the most stressful part of the whole experience. Most homeowners have never filed a major claim before, don't know what's covered versus excluded, and aren't sure how to handle an adjuster. Here's a practical walkthrough of how water damage claims typically work — and how to handle yours without losing money or sleep." },

      { type: "h2", text: "What's typically covered" },
      { type: "p", text: "Most standard homeowners insurance policies (HO-3 and HO-5 forms, which are what the majority of California homeowners carry) cover sudden and accidental water damage from internal sources. Covered examples typically include:" },
      { type: "ul", items: [
        "A pipe bursting behind a wall",
        "A water heater failing and leaking",
        "An appliance supply line rupturing (dishwasher, refrigerator, washing machine)",
        "A toilet supply line failing",
        "Roof damage causing water intrusion from a covered peril (wind, hail)",
        "An overflow from a bathtub or sink caused by a malfunction, not negligence",
      ] },
      { type: "p", text: "The common thread is 'sudden and accidental.' If the damage happened quickly due to something you couldn't have reasonably prevented, it's typically covered." },

      { type: "h2", text: "What's typically NOT covered" },
      { type: "ul", items: [
        "Flood damage from outside the home. This requires separate flood insurance, usually through the NFIP (National Flood Insurance Program) or a private flood carrier. Inland Empire homeowners in flood zones should have this.",
        "Gradual leaks. A slow drip that you should have noticed and didn't is often denied as a maintenance issue.",
        "Sewer or drain backups — unless you've added the sewer backup endorsement to your policy (usually $30 to $75 per year).",
        "Earthquake-related water damage (requires earthquake insurance).",
        "Damage to the source of the leak itself. Your insurance may cover the damage caused by a burst pipe, but it usually won't pay to replace the pipe.",
        "Mold, unless it's a direct result of a covered loss and discovered promptly. Many policies have mold caps even in covered scenarios.",
      ] },

      { type: "h2", text: "Deductibles and limits" },
      { type: "p", text: "You'll pay your deductible out of pocket before insurance pays the rest. Standard deductibles in California are typically $1,000 to $2,500, though some policies have separate (higher) deductibles for water damage specifically. Check your policy's declarations page." },
      { type: "p", text: "Policies have limits on total coverage (dwelling coverage), as well as sub-limits for things like personal property, additional living expenses (if you have to temporarily relocate), and mold remediation. A large water damage event can exceed sub-limits even if it's well within total coverage. This is one of the reasons thorough documentation matters — you need to account for every item and every scope element to get fair payout within those limits." },

      { type: "h2", text: "The claim process, step by step" },

      { type: "h3", text: "1. File the claim promptly" },
      { type: "p", text: "Call your insurance carrier's claims line (usually on the back of your insurance card, or on your policy documents) as soon as you know you have damage. Most policies require 'prompt' notification, often within a few days. Delaying can give the carrier grounds to deny or reduce payment." },

      { type: "h3", text: "2. Get a claim number and an adjuster assigned" },
      { type: "p", text: "Write down your claim number. The adjuster is assigned within 24 to 72 hours and will contact you to schedule an inspection. Keep their name, phone number, and email — this person is your main point of contact for the claim." },

      { type: "h3", text: "3. Document everything before any work" },
      { type: "p", text: "Photos, video, a written inventory of damaged belongings. Do this before a restoration crew starts demolition. If demolition has to happen before the adjuster arrives (common for emergencies), document thoroughly and the restoration company should document as they go." },

      { type: "h3", text: "4. The adjuster inspects" },
      { type: "p", text: "The adjuster walks the property, takes their own photos and measurements, and writes up a scope of work using industry-standard software (usually Xactimate). They'll estimate the cost to repair based on their scope and the carrier's pricing in your area." },

      { type: "h3", text: "5. You receive the adjuster's estimate" },
      { type: "p", text: "This typically arrives within a week or two of the inspection. It breaks down the scope line by line with prices. Your restoration company should review this with you — often there are items missed (especially on the reconstruction side) that need to be added via a supplement." },

      { type: "h3", text: "6. Work is completed and invoiced" },
      { type: "p", text: "If you've authorized the restoration company to invoice insurance directly (an 'assignment of benefits' or 'direction to pay'), the carrier pays them directly. If not, the carrier issues you a check and you pay the restoration company." },

      { type: "h3", text: "7. Supplements, if needed" },
      { type: "p", text: "If the original scope missed work that's actually required (discovered during demolition, for example), the restoration company files a supplement with documentation. These are common and usually approved without issue when the documentation is good." },

      { type: "h2", text: "Common mistakes homeowners make" },
      { type: "ul", items: [
        "Throwing away damaged materials before the adjuster has seen them (or before they're documented).",
        "Accepting the first adjuster's estimate without review. Missed scope items are common.",
        "Starting work before the adjuster has inspected (unless it's a genuine emergency).",
        "Signing up for public adjusters or attorneys unnecessarily. For simple claims they add cost without adding value.",
        "Not reading the policy. You'd be surprised how many people don't know their own deductible, sub-limits, or exclusions.",
        "Delaying the claim. Prompt notification is usually a policy requirement.",
      ] },

      { type: "h2", text: "How Treadwell handles insurance for you" },
      { type: "p", text: "On every project where you're filing a claim, we document everything from our first site visit — photos, moisture readings, affected-area measurements, scope of work in carrier-friendly language. We communicate directly with your adjuster on your behalf. If supplements are needed, we prepare and submit them. You stay informed but you don't have to play middleman. That's the core of what we mean when we say we make the process easy on the homeowner." },
      { type: "p", text: "We're not attorneys or licensed public adjusters. We don't negotiate settlements or handle coverage disputes. Our role is to accurately document and communicate the scope of work, which is usually what gets claims approved quickly and fairly." },

      { type: "h2", text: "Bottom line" },
      { type: "p", text: "Insurance claims for water damage are more manageable than they seem if you respond quickly, document thoroughly, and work with a restoration company that takes the insurance coordination off your plate. The wrong approach can add weeks of stress and leave money on the table. The right approach can make the process almost invisible." },
    ],
  },

  {
    slug: "common-causes-water-damage-inland-empire",
    title: "Common Causes of Water Damage in Inland Empire Homes",
    description:
      "Water damage causes vary by region. In the Inland Empire, specific factors — old housing stock, slab foundations, hot summers, and winter storms — drive predictable patterns of damage.",
    publishedAt: "2026-02-28",
    category: "Prevention",
    readTimeMin: 7,
    content: [
      { type: "p", text: "Water damage causes aren't random. They follow patterns driven by housing stock, climate, geology, and local building practices. The Inland Empire has its own pattern — a combination of aging housing in older neighborhoods, rapid newer construction in cities like Eastvale and Jurupa Valley, hot dry summers, and concentrated winter rains that create predictable water damage scenarios." },
      { type: "p", text: "Here are the most common causes we see across the IE, roughly in order of frequency." },

      { type: "h2", text: "1. Failed water heaters" },
      { type: "p", text: "Water heaters are the single most common cause of water damage in residential properties nationally, and the IE is no different. Most tank-style water heaters have a 10 to 12 year service life. When they fail, they typically fail catastrophically — the bottom of the tank rusts through and the full capacity (40 to 80 gallons) drains into whatever space the heater occupies." },
      { type: "p", text: "In IE homes, water heaters are typically located in garages, hallway closets, or exterior closets off the back of the house. Garage-mounted water heaters often cause the least damage because garage floors are usually sloped and the water exits to the driveway. Interior closet installations are the worst-case scenario — the water travels into hallways, carpet, and adjacent rooms before anyone notices." },
      { type: "callout", title: "Prevention tip", text: "If your water heater is more than 10 years old, consider proactive replacement. A new water heater costs $1,500 to $3,000 installed; the damage from a failed one often runs $10,000 to $40,000 in restoration and reconstruction costs." },

      { type: "h2", text: "2. Appliance supply line failures" },
      { type: "p", text: "Washing machine, dishwasher, and refrigerator supply lines are the second most common cause we see. The rubber or braided stainless supply lines on these appliances typically have 5 to 10 year service lives. When they fail, they can release a surprising amount of water — a washing machine supply line at normal household water pressure can discharge 6+ gallons per minute." },
      { type: "p", text: "Newer Eastvale, Jurupa Valley, and Ontario Ranch homes with second-floor laundry rooms are particularly vulnerable. When an upstairs washing machine supply line fails, water can saturate the laundry room floor, soak through to the ceiling below, and damage multiple rooms across two levels." },

      { type: "h2", text: "3. Slab leaks" },
      { type: "p", text: "Most IE homes are built on concrete slab foundations. The supply lines that run through or under the slab can develop leaks from corrosion, shifting soil, or improper installation. Slab leaks are insidious — often the first sign is a warm spot on the floor (from a hot-water line leak), an unexpected water bill spike, or water bubbling up through a crack in the slab." },
      { type: "p", text: "By the time a slab leak is visible, water has often been collecting under the floor for weeks or months. The restoration scope typically involves cutting the slab to repair the pipe, drying the affected subfloor area, and restoring flooring and any damaged materials. Insurance coverage can be tricky on slab leaks — some policies cover the damage but not the pipe repair." },

      { type: "h2", text: "4. Galvanized pipe failures in older homes" },
      { type: "p", text: "Fontana, Rialto, Ontario, Upland, Claremont, and parts of Riverside and Pomona have significant inventories of pre-1970s homes with original galvanized steel supply lines. Galvanized pipes corrode from the inside out over decades. By the 50+ year mark, many have substantial interior corrosion that restricts flow, reduces water pressure, and eventually ruptures." },
      { type: "p", text: "Galvanized failures often happen at joints and fittings, and often inside walls where the damage isn't visible until water is running down drywall. Homes that still have galvanized plumbing are candidates for proactive repipe (typically to PEX or copper) — both for water damage prevention and because old galvanized water is often discolored and slow-flowing." },

      { type: "h2", text: "5. HVAC condensate line issues" },
      { type: "p", text: "Air conditioners produce condensate during operation — water that's pulled from the indoor air. The condensate line carries this water out of the house, usually through a small PVC drain line exiting an exterior wall. If the line clogs (dust, algae, sediment), the condensate backs up into the HVAC unit and overflows onto whatever surface is below." },
      { type: "p", text: "In IE summers, HVAC units run continuously, producing substantial amounts of condensate. Attic-mounted units dropping water into a ceiling are particularly common. An overflow switch (a small sensor that shuts off the AC if water backs up) prevents this if installed and functional, but many older systems don't have one." },

      { type: "h2", text: "6. Polybutylene pipe failures" },
      { type: "p", text: "Homes built in the late 1970s through mid-1990s sometimes have polybutylene (PB) supply lines. PB is a gray plastic pipe that reacts poorly with chlorine in municipal water and becomes brittle over time. Class-action settlements against the manufacturer recognized the widespread failure issue decades ago, but many homes still have it." },
      { type: "p", text: "PB failures typically happen at fittings and joints, often behind walls or in crawl spaces. Homes with visible gray plastic plumbing from this era are candidates for preemptive repipe." },

      { type: "h2", text: "7. Roof leaks during winter storms" },
      { type: "p", text: "The IE gets most of its annual rainfall in concentrated winter storms from December through March. Flat or low-slope roofs, aging tile roofs with deteriorated underlayment, and skylights with failed flashing are common entry points. A roof leak that's barely noticeable in light rain can dump significant water during an atmospheric river event." },
      { type: "p", text: "Attic-level leaks often saturate insulation and ceiling drywall before anyone notices. The visible drywall stain or sag is usually preceded by weeks or months of lower-grade moisture infiltration. That's why catching a roof leak early makes a big difference in the ultimate scope." },

      { type: "h2", text: "8. Sewer line root intrusion (especially in Upland and Claremont)" },
      { type: "p", text: "Cities with mature tree canopies — especially Upland with its historic tree-lined streets and Claremont with its dense heritage trees — see substantial sewer line damage from root intrusion. Tree roots find their way into the joints of old clay or cast iron sewer lines, eventually blocking flow. Backups into the house through lowest-level drains are the result." },
      { type: "p", text: "Sewer backups are Category 3 water damage (grossly contaminated) and require aggressive response. They're also often not covered by standard homeowners insurance unless you've added a sewer backup endorsement, which is worth the $30 to $75 annual cost for homes with significant tree cover." },

      { type: "h2", text: "What this means for Inland Empire homeowners" },
      { type: "p", text: "The common causes on this list share one thing: most of them are at least partially preventable with proactive maintenance. Water heater replacement before failure, appliance supply line inspection and replacement every 5 years, repipe of old galvanized or PB systems, HVAC maintenance including condensate line cleaning, and sewer inspections in older tree-lined neighborhoods all dramatically reduce the chance of a major water damage event." },
      { type: "p", text: "When water damage does happen — and eventually it happens to most homeowners over a long enough timeline — fast professional response determines whether you're dealing with a straightforward mitigation or a months-long restoration and mold remediation project." },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
