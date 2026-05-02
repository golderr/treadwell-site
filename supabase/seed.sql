-- Seed all 52 checklist items for Treadwell Restoration pre-launch checklist

-- Phase 1 — File & Found (8 items)
INSERT INTO checklist_items (id, phase, phase_order, item_order, title, tags, meta_cost, meta_time, meta_who, is_gate, gate_group, detail_html) VALUES
('p1-ein', 'Phase 1 — File & Found', 1, 1, 'Get EIN from IRS (Monday morning)', '{critical}', 'Free', '15 min', 'You', false, null, 'Apply online at irs.gov. Takes 15 minutes, you get the EIN immediately. Do this first thing Monday morning — everything else depends on it.'),
('p1-verify-license', 'Phase 1 — File & Found', 1, 2, 'Verify Jesse''s B license is active and clean', '{blocker}', 'Free', '10 min', 'You', false, null, 'Check at cslb.ca.gov. Search by license number. Confirm status is "Active" with no pending disciplinary actions. If anything is off, STOP and investigate before proceeding with the CSLB application.'),
('p1-bank', 'Phase 1 — File & Found', 1, 3, 'Open business bank account', '{}', 'Free', '45 min', 'You — In person', false, null, 'Bring EIN letter, LLC formation docs, and personal ID. Chase, Wells Fargo, or a local credit union. Get a business debit card and checks.'),
('p1-cslb-app', 'Phase 1 — File & Found', 1, 4, 'File CSLB contractor''s license application', '{critical}', '~$1,500 setup', '2 hrs to file, 6-9 weeks approval', 'You + Jesse', false, null, 'See the CSLB Application Walkthrough doc for full step-by-step. This is the longest lead-time item — file ASAP.'),
('p1-comp-talk', 'Phase 1 — File & Found', 1, 5, 'Have the comp conversation with Jesse — formally', '{critical}', 'Free', '2 hours', 'You + Jesse', false, null, 'See the Jesse Conversation Script doc. Do this in person. Cover Phase 1-3 comp structure, get alignment, then document in writing.'),
('p1-gbp-video', 'Phase 1 — File & Found', 1, 6, 'Submit GBP verification video', '{}', 'Free', '30 min', 'You — On site', false, null, 'See the GBP Verification Protocol doc. Record at Jesse''s Fontana location with truck, equipment, and business docs visible.'),
('p1-phone', 'Phase 1 — File & Found', 1, 7, 'Set up phone system + email', '{}', '$22/mo', '30 min', 'You', false, null, 'OpenPhone or Google Voice for business line. Set up info@treadwellrestoration.com email. Forward calls to your cell initially.'),
('p1-fontana', 'Phase 1 — File & Found', 1, 8, 'Apply for Fontana business license', '{}', '$50-150', '30 min', 'You', false, null, 'Apply through City of Fontana business licensing portal. Standard business license for a contractor operating from a residential address.');

-- Phase 2 — Insurance & Compliance (4 items)
INSERT INTO checklist_items (id, phase, phase_order, item_order, title, tags, meta_cost, meta_time, meta_who, is_gate, gate_group, detail_html) VALUES
('p2-gl', 'Phase 2 — Insurance & Compliance', 2, 1, 'Get General Liability + Pollution Liability quotes', '{critical}', null, null, null, false, null, 'See Insurance Broker Scripts doc. Get 3 quotes. Pollution coverage is non-negotiable for water damage restoration.'),
('p2-wc', 'Phase 2 — Insurance & Compliance', 2, 2, 'Set up Workers'' Comp through State Fund', '{}', null, null, null, false, null, 'Apply at statefundca.com. Needed for CSLB application and before Jesse starts W-2 work. Expect $300-500 initial deposit.'),
('p2-auto', 'Phase 2 — Insurance & Compliance', 2, 3, 'Resolve commercial auto coverage for Jesse''s truck', '{critical}', null, null, null, false, null, 'Either add hired/non-owned auto endorsement to GL policy, or add Treadwell as additional insured on Jesse''s existing commercial auto policy.'),
('p2-legal', 'Phase 2 — Insurance & Compliance', 2, 4, 'Operating Agreement + Employment Agreement', '{critical}', null, null, null, false, null, 'See Operating Agreement Notes doc. Draft both agreements, then get a CSLB attorney spot-check for $300-500.');

-- Phase 3 — Certifications & Equipment (6 items)
INSERT INTO checklist_items (id, phase, phase_order, item_order, title, tags, meta_cost, meta_time, meta_who, is_gate, gate_group, detail_html) VALUES
('p3-wrt', 'Phase 3 — Certifications & Equipment', 3, 1, 'Jesse takes IICRC WRT course', '{critical}', null, null, null, false, null, 'Water Restoration Technician certification. 3-day course, ~$600-800. Required for insurance program work and credibility with adjusters.'),
('p3-rrp', 'Phase 3 — Certifications & Equipment', 3, 2, 'Apply for EPA RRP Firm Certification', '{critical}', null, null, null, false, null, 'Required for any work on pre-1978 homes (lead paint risk). Apply at epa.gov. Firm cert is separate from individual cert.'),
('p3-equipment', 'Phase 3 — Certifications & Equipment', 3, 3, 'Buy minimum essential equipment', '{}', null, null, null, false, null, 'See Equipment Shopping List doc. ~$2,250 for moisture meters, thermal camera, air movers, extraction tool, PPE. Visit Jon-Don in Ontario.'),
('p3-rental', 'Phase 3 — Certifications & Equipment', 3, 4, 'Open per-job rental account with equipment supplier', '{}', null, null, null, false, null, 'Open accounts at 2 rental suppliers for dehumidifiers and air scrubbers. See Equipment Shopping List doc for recommended vendors.'),
('p3-osha', 'Phase 3 — Certifications & Equipment', 3, 5, 'OSHA 10-hour for Jesse (verify if needed)', '{defer}', null, null, null, false, null, 'Check if Jesse already has OSHA 10. If not, online course is ~$25-40 and takes 2 days. Not urgent but good to have.'),
('p3-wrt-you', 'Phase 3 — Certifications & Equipment', 3, 6, '(Optional) You take WRT for credibility', '{defer}', null, null, null, false, null, 'Same IICRC WRT course. Helps you speak the language with adjusters and understand job scoping. Defer until after first few jobs.');

-- Phase 4 — Operations Setup (4 items)
INSERT INTO checklist_items (id, phase, phase_order, item_order, title, tags, meta_cost, meta_time, meta_who, is_gate, gate_group, detail_html) VALUES
('p4-invoicing', 'Phase 4 — Operations Setup', 4, 1, 'Job invoicing + payment system', '{}', null, null, null, false, null, 'Set up QuickBooks Online or Wave for invoicing. Connect to business bank account. Set up payment acceptance (ACH + credit card).'),
('p4-payroll', 'Phase 4 — Operations Setup', 4, 2, 'Payroll setup (Gusto)', '{}', null, null, null, false, null, 'Sign up for Gusto. Add Jesse as W-2 employee with production-based pay structure. Gusto handles payroll taxes, W-2s, and minimum wage true-up.'),
('p4-xactimate', 'Phase 4 — Operations Setup', 4, 3, 'Defer Xactimate', '{}', null, null, null, false, null, 'Xactimate is the industry standard for insurance estimates. $200+/mo. Defer until you have active insurance program work. Use manual estimates initially.'),
('p4-bookkeeping', 'Phase 4 — Operations Setup', 4, 4, 'Bookkeeping setup', '{}', null, null, null, false, null, 'QuickBooks Online or Wave. Categorize expenses, track revenue by job, reconcile bank account monthly. Consider a part-time bookkeeper after month 3.');

-- Phase 5 — Brand & Marketing Prep (8 items)
INSERT INTO checklist_items (id, phase, phase_order, item_order, title, tags, meta_cost, meta_time, meta_who, is_gate, gate_group, detail_html) VALUES
('p5-hero', 'Phase 5 — Brand & Marketing Prep', 5, 1, 'Improve website hero section', '{}', null, null, null, false, null, 'Update hero with stronger imagery and clearer value prop. Consider adding a photo of Jesse/truck once available.'),
('p5-cards', 'Phase 5 — Brand & Marketing Prep', 5, 2, 'Print 250 business cards', '{}', null, null, null, false, null, 'Include: Treadwell Restoration LLC, CSLB license number (once received), phone, email, website. Match brand colors.'),
('p5-iicrc-firm', 'Phase 5 — Brand & Marketing Prep', 5, 3, 'IICRC Firm Certification application', '{}', null, null, null, false, null, 'After Jesse passes WRT, apply for IICRC Firm Certification. Adds credibility with insurance companies and TPAs.'),
('p5-yelp', 'Phase 5 — Brand & Marketing Prep', 5, 4, 'Claim Yelp Business Profile', '{}', null, null, null, false, null, 'Claim and complete Yelp business profile. Add photos, services, hours. Don''t pay for Yelp Ads yet.'),
('p5-lsa', 'Phase 5 — Brand & Marketing Prep', 5, 5, 'Apply for Google Local Services Ads (LSA)', '{parallel}', null, null, null, false, null, 'Requires verified GBP, insurance, and CSLB license. Apply early — approval process takes 2-4 weeks. Don''t activate spend until gate criteria are met.'),
('p5-plumbers', 'Phase 5 — Brand & Marketing Prep', 5, 6, 'Visit 10+ plumbers in person', '{critical}', null, null, null, false, null, 'See Plumber Outreach Pitch doc. Highest-leverage marketing activity. Jesse leads these visits. Track every visit and follow up.'),
('p5-tpa', 'Phase 5 — Brand & Marketing Prep', 5, 7, 'Apply to TPAs (Alacrity, Contractor Connection)', '{parallel}', null, null, null, false, null, 'Third-party administrators connect contractors with insurance-referred work. Apply to Alacrity and Contractor Connection. Requires COI, IICRC, and CSLB license.'),
('p5-pm-agents', 'Phase 5 — Brand & Marketing Prep', 5, 8, 'Visit property managers + insurance agents', '{}', null, null, null, false, null, 'Similar to plumber outreach but different pitch. Property managers need reliable on-call restoration. Insurance agents refer policyholders.');

-- Phase 6 — Final Pre-Launch (6 items)
INSERT INTO checklist_items (id, phase, phase_order, item_order, title, tags, meta_cost, meta_time, meta_who, is_gate, gate_group, detail_html) VALUES
('p6-bind-insurance', 'Phase 6 — Final Pre-Launch', 6, 1, 'Bind insurance policies', '{}', null, null, null, false, null, 'Bind GL + Pollution + WC + Auto coverage. Time this 2-3 weeks before expected CSLB license approval. Get COIs issued.'),
('p6-license-marketing', 'Phase 6 — Final Pre-Launch', 6, 2, 'Update all marketing with CSLB license #', '{}', null, null, null, false, null, 'CA law requires CSLB license number on all advertising. Update: website footer, business cards, GBP, Yelp, truck signage, email signature.'),
('p6-uniforms', 'Phase 6 — Final Pre-Launch', 6, 3, 'Order branded uniforms', '{}', null, null, null, false, null, 'Polo shirts or work shirts with Treadwell Restoration logo. 3-4 for Jesse, 2 for you. Professional appearance matters for customer trust.'),
('p6-lsa-activate', 'Phase 6 — Final Pre-Launch', 6, 4, 'Activate Google LSA', '{}', null, null, null, false, null, 'Only after all Marketing Spend Activation gate criteria are met. Set initial budget conservatively ($500/month) and increase based on lead quality.'),
('p6-equipment-check', 'Phase 6 — Final Pre-Launch', 6, 5, 'Final equipment readiness check', '{}', null, null, null, false, null, 'Verify all essential equipment is on hand, tested, and organized. Confirm rental accounts are active. Do a dry run: simulate a water damage call.'),
('p6-phone-active', 'Phase 6 — Final Pre-Launch', 6, 6, 'Activate phone for inbound calls', '{}', null, null, null, false, null, 'Ensure business phone is active, forwarding correctly, and voicemail is professional. Test inbound calls from multiple numbers.');

-- Gate: First Job Readiness (10 items)
INSERT INTO checklist_items (id, phase, phase_order, item_order, title, tags, is_gate, gate_group, detail_html) VALUES
('g-fj-1', 'First Job Readiness', 7, 1, 'CSLB license is approved and active for Treadwell LLC', '{}', true, 'first-job', 'Verify at cslb.ca.gov that the license shows "Active" status under Treadwell Restoration LLC.'),
('g-fj-2', 'First Job Readiness', 7, 2, 'Jesse''s RMM designation is on file with CSLB', '{}', true, 'first-job', 'Confirm Jesse is listed as Responsible Managing Manager on the CSLB license record.'),
('g-fj-3', 'First Job Readiness', 7, 3, 'GL + Pollution + Workers'' Comp + Auto coverage bound and in force', '{}', true, 'first-job', 'All four coverage types active with valid COIs on file. No coverage gaps.'),
('g-fj-4', 'First Job Readiness', 7, 4, 'Jesse completed WRT course (exam pass ideal)', '{}', true, 'first-job', 'IICRC Water Restoration Technician certification completed. Exam passed or scheduled.'),
('g-fj-5', 'First Job Readiness', 7, 5, 'EPA RRP firm certification approved (for pre-1978 home work)', '{}', true, 'first-job', 'EPA Renovation, Repair, and Painting firm certification approved and on file.'),
('g-fj-6', 'First Job Readiness', 7, 6, 'Essential equipment on hand and tested', '{}', true, 'first-job', 'Moisture meters, thermal camera, air movers, extraction tool, PPE — all purchased, tested, and organized.'),
('g-fj-7', 'First Job Readiness', 7, 7, 'Phone, email, invoicing, payroll systems functional', '{}', true, 'first-job', 'Business phone active, email configured, invoicing system connected to bank, Gusto payroll set up for Jesse.'),
('g-fj-8', 'First Job Readiness', 7, 8, 'Bank account can accept payments and pay vendors', '{}', true, 'first-job', 'Business bank account open, debit card active, checks available, ACH transfers enabled.'),
('g-fj-9', 'First Job Readiness', 7, 9, 'Operating Agreement and Jesse''s Employment Agreement signed', '{}', true, 'first-job', 'Both agreements executed and stored securely. Attorney review completed.'),
('g-fj-10', 'First Job Readiness', 7, 10, 'Pre-formation founder''s letter signed (Phase 1 documentation)', '{}', true, 'first-job', 'Short letter documenting the pre-formation co-founder period and both parties'' understanding. Signed by both Nate and Jesse.');

-- Gate: Marketing Spend Activation (6 items)
INSERT INTO checklist_items (id, phase, phase_order, item_order, title, tags, is_gate, gate_group, detail_html) VALUES
('g-mk-1', 'Marketing Spend Activation', 8, 1, 'All First Job Readiness criteria met', '{}', true, 'marketing', 'Every item in the First Job Readiness gate must be checked off before spending on marketing.'),
('g-mk-2', 'Marketing Spend Activation', 8, 2, 'GBP verified', '{}', true, 'marketing', 'Google Business Profile verification video approved and profile is live in Google Maps/Search.'),
('g-mk-3', 'Marketing Spend Activation', 8, 3, 'At least 1-2 organic jobs completed', '{}', true, 'marketing', 'Complete 1-2 jobs from plumber referrals or word of mouth before spending on ads. Proves the operation works end-to-end.'),
('g-mk-4', 'Marketing Spend Activation', 8, 4, 'Jesse comfortable with end-to-end job delivery', '{}', true, 'marketing', 'Jesse has run at least 1-2 jobs from initial call through final walkthrough and feels confident in the process.'),
('g-mk-5', 'Marketing Spend Activation', 8, 5, 'Tested rental supply chain for equipment surge capacity', '{}', true, 'marketing', 'Confirmed that rental suppliers can deliver dehumidifiers and air scrubbers same-day or next-day when needed.'),
('g-mk-6', 'Marketing Spend Activation', 8, 6, 'Pricing structure defined', '{}', true, 'marketing', 'Have a clear pricing structure for mitigation and reconstruction work. Know your margins, labor costs, and equipment rental costs per job type.');
