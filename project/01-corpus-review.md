# Clark Corpus Review — Full Synthesis

- Review date: 2026-06-11
- Source: complete review of `/Users/mp/Documents/Vaults/babb/clarkinc/` (~140 markdown files)
- Last corpus activity: program status memo dated 2026-03-28; files last touched late April 2026
- Purpose: seed document for the synthesis and improved-plan work in this project folder

---

## 1. What Clark Is

Clark is a Delaware-incorporated platform company building a binational (US–Canada) network of independently owned precision electronics assembly facilities ("nodes"), connected by shared IP, training curricula, software (Clarkware), and logistics coordination. Three integrated pillars: small-batch PCB/PCBA assembly, binary-level firmware optimization, and IPC-certified workforce training. The thesis: reindustrialization will be driven by distributed networks of specialized small-batch facilities, not megafactories.

- Initial corridor: Hamilton, ON (Niagara Assembly, founding node + R&D engine, 24 Clark Ave) ↔ Buffalo, NY (American anchor)
- Closest analogs, none combining all pillars: MacroFab (distributed routing, no IP/training/ownership), STI Electronics (assembly + IPC training, single site, no firmware), firmware consultancies (no assembly/training)
- Revenue architecture: (1) platform fees, (2) minority node equity (10% default, 15–20% ceiling), (3) capital recycling, (4) production revenue through the network
- Commercial sequencing decided: **training-first** → node operating revenue → platform fees

## 2. Repo Structure and Operating System

- `docs/` is canonical: venture (thesis/plan/pitch), process (decision-log, claims-register, research-board), products, financials, pilots, research, courses, support-dev (investor materials)
- Multi-agent operating system: orchestrator, research, business-plan, pitch, brand agents + Clark Courses curriculum agent; weekly Mon–Fri research→decision→promotion cycle; evidence gates investor claims
- `framework/venture-multi-agent-os/` is an intentional **generic reusable template** (to be copied to new ventures); top-level `agents/ prompts/ workflows/ templates/` are the diverged Clark-specific live instance — not a duplication problem
- Housekeeping: `README 1.md` is an identical duplicate of `README.md` (delete candidate). Top-level `README.md` Source-of-Truth list uses stale flat `docs/` paths (files have since moved into subfolders)
- AGENTS.md conventions: markdown is canonical, kebab-case filenames, every new doc registered in README Source-of-Truth list, decisions/claims updated on every promotion

## 3. Governance State

### Decisions (27 logged, 2026-03-20 → 2026-03-28; 17 Confirmed / 8 Provisional)

Key confirmed:
- D-007 training-first revenue model; D-022 industrial-controls OEMs/integrators as first commercial segment
- D-008 node ownership 10% default, 15–20% band; D-009 software bundled into Assembly Centre licensing
- D-010/D-011 Hamilton Training Facility operated directly by CLARK inside Niagara Assembly; positioned as regional workforce center
- D-012/D-013/D-016 IPC Launch Bundle (A-610 CIS/CSE, Hand Soldering, EPTAC cable/wire, CIT) + Clark-branded wraparound + "Clark Certified" label
- D-014/D-017/D-018 Hamilton hybrid fixed-fee + revenue-share model with defined liability split
- D-006 START-UP NY removed from incentive framing (program closed Jan 1, 2026)
- D-023 Dunkirk downgraded to later logistics option; D-024 workforce housing out of scope

Key provisional: D-019 volume-banded Hamilton fees; D-020 Clarkware v1 boundary; D-021 Test Bench A01 as first pilot station; D-026 24-month colocation term

### Claims register: 27 safe / 5 need validation / 3 rejected

- Needs validation: corridor superiority (C-004, explicitly downgraded), competitor-intersection uniqueness (C-003), project-specific applicability of Canadian/Buffalo incentives (C-005/C-006)
- Rejected: Dunkirk active footprint, workforce housing, START-UP NY

### Research board: 9 workstreams, 7 promoted, 2 active (competitor map needs investor-safe framing; corridor validation "ready for decision")

## 4. Product State

### Clarkware (most developed product asset)

- **v1 boundary (deliberately narrow):** one workstation-level IPE pilot, one test-tool evidence path, job-linked XMPP messaging, one AI summarizer, one facility reporting surface. Explicitly NOT an ERP/MES/digital-twin/generic chat
- **IPE concept:** industrial reinterpretation of the IDE — Theia-based shell with Job, Workmanship, Firmware, Audit panels; rationale: extensibility, LSP/DAP (clangd, OpenOCD), VS Code ecosystem, Theia AI, EPL-2.0 governance
- **Event backbone:** IPC-CFX v2.0 over AMQP, tiered brokers (workstation → node → platform), offline-first; custom `com.clark.ipe.FirmwareProvisioned` extension; append-first event history; human/AI/automation as distinct actor types
- **Messaging:** XMPP; conversation types bound to work context (job/issue/workspace threads); AI messages carry review state (pending/accepted/rejected/edited)
- **AI agents (spec):** Inspection, Defect Analysis, Firmware Advisory, Audit Summary
- **Roadmap:** Phase 0 definition → 1 workstation proof → 2 facility visibility → 3 station expansion → 4 node standardization → 5 cross-node intelligence → 6 automation. IPE build doc separately specifies a Weeks 1–40 four-phase sequence (timeline mapping between the two is unreconciled)
- **Financial posture:** staged enablement asset first; bundled node value primary monetization (CAD 1,500–7,500/mo per node); external access (CAD 75–300/user/mo) only after Gate 4; milestone-gated spend

### Training services (most mature commercially)

- Hamilton site: ~4,500 sq ft first phase inside Niagara Assembly; IPC bundle + Clark Courses
- Year 1 base case: 22 courses, 8 students/class, CAD 1,200/student → CAD 211,200 gross, CAD 62,536 net Clark contribution; Year 2: CAD 429,000 gross, CAD 145,328 net
- Break-even floor: ~2 courses/month
- Hamilton colocation (provisional): CAD 1,250 + 12% (1–2 courses/mo) / CAD 2,500 + 10% (3–4) / CAD 4,000 + 8% (5+); Clark owns instructor/training compliance, Niagara owns facility safety; 24-month term + one 12-month auto-renewal

### Clark Courses curriculum (complete)

- 16 full courses across L1 (5), L2 (6), L3 (5), ~21 delivery days, all full content (not stubs)
- L1-01 has the complete artifact set (deck, instructor guide, workbook, quiz + key); L2/L3 have core content only
- Covers SMT/THT/advanced packaging, verticals, ITAR/ISO 13485/AS9100, embedded/firmware provenance, train-the-trainer

### Other lines (defined but immature)

- Assembly services: partner-delivered; Clark earns platform value, not manufacturing revenue; needs first credible partner example
- Firmware optimization: specialist-partner model coordinated through Clarkware evidence workflows; scales after training + Clarkware traction
- Logistics/facility coordination: later phase, minimal documentation; Dunkirk explicitly deferred
- Partner-facility development: discovery CAD 2.5–7.5k, onboarding CAD 15–40k, recurring CAD 2–8k/mo, equity 10–20%; three-part economic test gates each node

## 5. Financial State

- Startup scenarios (CAD): A bare-minimum 212–315k; B lean 700k–1.25M; C **recommended 1.2–2.1M**; D buffered 2.1–3.5M; staffing dominates
- Use of funds 12 mo: lean 950k–1.5M / working 1.5–2.4M / buffered 2.4–3.8M; 18-month multiplier 1.35–1.7x; recommended raise **CAD 2.0–3.5M**; CAD 5M defensible only with 18–24 mo runway + 3 founders + 3–5 staff
- Clark Ave fit-out overlay: light 50–125k / shared 125–300k / heavy 300–600k+
- Known modeling issue: startup-cost scenarios and use-of-funds cases are framed differently and never reconciled (see §7)

## 6. Niagara Pilot State

- Scope: Test Bench A01 + CSV-capable diagnostics tool (Scope-01); watched-folder/file-import integration; 6 roles incl. AI summarizer; manager/quality reporting view
- 6 proof objectives: usable IPE, frictionless notes, durable evidence path, auditable actor distinction, useful remote expert, reporting generated from events (not manual)
- 8-week build sequence defined; success metrics and risk register defined
- **Tracker reality: 60 tasks — 5 ready, 8 in progress, 47 not started.** Workstation users, remote expert, hardware baseline, browser-vs-desktop, and XMPP server all unconfirmed
- Investor demo script and pilot requirements checklist exist

## 7. Contradictions and Inconsistencies (to resolve in synthesis)

1. **Corridor language:** D-002 frames Hamilton–Buffalo as "initial corridor thesis"; D-005 downgrades "clearly best." Decision-log wording could mislead; merge/restate
2. **Financial reconciliation:** startup-costs scenarios (A–D) vs use-of-funds cases (lean/working/buffered) overlap but don't map; no burn-rate bridge table
3. **Hamilton terms:** term-sheet outline marks economics TBD with options A/B/C; draft-terms doc states banded fees as if settled; Niagara's acceptance status undocumented
4. **AI posture:** investor messaging says "assistive, reviewable"; IPE spec gives agents autonomous triggers (e.g., audit summary on job close). Define Phase-1 trigger model (human-initiated) explicitly
5. **Node selectivity vs proof speed:** pitch wants fast first paid onboarding; partner-facility plan's three-part economic test gates aggressively. Decide: first node = subsidized strategic proof case, or unit-economics-positive from node one
6. **Clarkware revenue timing:** financial plan says cost center → bundled value → external access; business plan lists bundled licensing under platform fees as if near-term. Clarify phasing in investor materials
7. **Timeline mapping:** IPE architecture's Weeks 1–40 phases vs Clarkware roadmap Phases 0–6 never reconciled into one consolidated timeline
8. **Status-label fragmentation:** decision log (Provisional/Confirmed), claims register (Safe/Needs Validation/Rejected), research board (Queued…Promoted) have no cross-document consistency check
9. **Duplicate/stale files:** `README 1.md` identical duplicate; README Source-of-Truth paths stale (flat `docs/` vs actual subfolders)

## 8. Critical Gaps (highest-value open work)

1. **No real customer proof** — beachhead (industrial-controls OEMs/integrators) is decided, but zero named accounts, interviews, or LOIs. Top program risk
2. **Hamilton agreement not executed** — entire training-first wedge depends on Niagara Assembly terms that exist only as Clark-side drafts; EPTAC partnership status also unconfirmed (no LOI referenced)
3. **Pilot engineering unstarted** — 47/60 tasks not started; no named users; no engineering staffing/budget tied to the 8-week sequence; "Clarkware Lead" unnamed
4. **Legal/tax structure undefined** — SR&ED/IRAP/FedDev claims require specific entity forms (e.g., CCPC); no incorporation plan or eligibility opinion
5. **Corridor economics unvalidated** — freight/customs/handoff unit costs never modeled
6. **Clark Certified implementation** — digital-first decided (blockchain optional) but no record schema, verification mechanics, or system ownership
7. **No capital ask in pitch** — financial docs imply CAD 2.0–3.5M but pitch states no number; no use-of-funds slide, no 3-year burn/runway projection
8. **No post-Year-1 scaling model** — multi-node economics, expansion geography, hiring plan, CAC/LTV all absent
9. **Competitive analysis thin for investors** — analog map exists internally but no investor-safe competitive matrix (incl. MES/software adjacents: Tulip, Ignition, etc.)
10. **Regulatory landscape unmapped** — CUSMA/ITAR/EAR/defense-adjacent constraints named but never detailed

## 9. Strengths to Preserve

- Rigorous evidence governance (decision log, claims register, research board) — rare discipline for this stage
- Conservative, scenario-based financial modeling; weak claims actively rejected (START-UP NY, Dunkirk, housing)
- Deliberately narrow Clarkware v1 boundary with credible technical foundations (Theia, IPC-CFX, XMPP)
- Complete, high-quality 16-course curriculum — a real, sellable asset today
- Coherent training-first sequencing consistently applied across venture, product, and pitch docs
- Reusable venture-multi-agent-os framework cleanly separated from the Clark instance

## 10. Recommended Next Steps for This Project

1. Synthesize a single **master plan** document resolving §7 contradictions and locking the consolidated timeline
2. Produce an **execution plan**: Hamilton agreement package, named pilot staffing, customer-discovery sprint for the industrial-controls beachhead, legal-entity setup
3. Produce a **reconciled financial model**: one scenario table bridging startup costs ↔ use of funds ↔ burn ↔ raise target, with an explicit capital ask
4. Refresh **investor materials** from the synthesis (deck, one-pager, FAQ) with standardized claims only
5. Migrate this project folder to the master location and define which clarkinc docs it supersedes
