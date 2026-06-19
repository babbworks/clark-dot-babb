# Clark Research Board

This board turns CLARK's open research questions into a managed execution pipeline.

## Working Rules

- Every task must end in one of three states: validated, rejected, or still too weak to use.
- Facts stay in `docs/process/research.md` until they are strong enough to promote.
- Only evidence-backed conclusions should move into `docs/venture/business-plan.md`, `docs/venture/venture-overview.md`, or `docs/venture/pitch.md`.
- The orchestrator should review this board at the start and end of each research cycle.

## Status Key

- `Queued`: not started
- `Active`: currently being worked
- `Ready for Decision`: enough evidence exists for a strategy decision
- `Promoted`: conclusions have been incorporated into project docs
- `Blocked`: missing evidence or unresolved dependency

## Priority Queue

| Priority | Workstream | Owner | Current Status | Expected Output | Promotion Target |
| --- | --- | --- | --- | --- | --- |
| 1 | Beachhead customer selection | Research agent | Promoted | Selected first segment with buyer, urgency, program type, and fit | `docs/venture/venture-overview.md`, `docs/venture/business-plan.md`, `docs/venture/pitch.md` |
| 2 | Competitor and analog map | Research agent | Active | Comparison table for MacroFab, STI, EMS firms, firmware consultancies, and IPC training providers | `docs/process/research.md`, `docs/venture/pitch.md` |
| 3 | Corridor advantage validation | Research agent | Ready for Decision | Hamilton-Buffalo corridor memo with logistics, talent, and relative advantage analysis | `docs/process/research.md`, `docs/venture/pitch.md` |
| 4 | Incentive and policy validation | Research agent | Promoted | Claim-by-claim validation sheet for Canadian and New York incentives and policy tailwinds | `docs/process/research.md`, `docs/venture/business-plan.md`, `docs/process/incentive-validation-sheet.md` |
| 5 | Fee stack and node economics | Business-plan agent | Promoted | Draft platform economics model covering training-first revenue, ownership, bundled software, and capital recycling | `docs/venture/business-plan.md`, `docs/venture/venture-overview.md`, `docs/financials/node-economics-and-fee-stack.md` |
| 6 | Software scope definition | Business-plan agent | Promoted | Version 1 boundary for software, tooling, messaging, and agent infrastructure | `docs/venture/business-plan.md`, `docs/products/clarkware/network-operating-model.md`, `docs/products/clarkware/clarkware.md` |
| 7 | Dunkirk scope decision | Orchestrator + business-plan agent | Promoted | Classification of Dunkirk as core asset, later option, or out of scope | `docs/venture/venture-overview.md`, `docs/venture/business-plan.md`, `docs/venture/pitch.md`, `docs/process/dunkirk-scope-memo.md` |
| 8 | Workforce housing scope decision | Orchestrator + business-plan agent | Promoted | Classification of housing concept as core, adjacent, or out of scope | `docs/venture/venture-overview.md`, `docs/venture/business-plan.md`, `docs/process/workforce-housing-scope-memo.md` |
| 9 | Hamilton training legal/commercial model | Orchestrator + business-plan agent | Promoted | Defined operating structure for CLARK's direct Hamilton training operation inside Niagara Assembly | `docs/products/training-services/hamilton-training-model.md`, `docs/venture/business-plan.md`, `docs/venture/venture-overview.md`, `docs/financials/hamilton-colocation-draft-terms.md` |

## Task Cards

### 1. Beachhead Customer Selection

- Owner: Research agent
- Objective: Identify the first customer segment CLARK should pursue.
- Current promoted result: industrial-controls OEMs and integrators are the chosen first segment, with adjacent rugged-hardware categories treated as later expansion lanes.
- Required output:
  - Top 3 candidate segments
  - Buyer and user for each segment
  - Typical program profile
  - Why CLARK is differentiated for that segment
  - Risks and confidence level
- Decision threshold:
  - One segment should clearly win on urgency, fit, and willingness to buy.
- Promotion rule:
  - Only the top-ranked segment moves into the main thesis docs.

### 2. Competitor And Analog Map

- Owner: Research agent
- Objective: Test the claim that CLARK's three-pillar network model has limited direct competition.
- Current first-pass result:
  - MacroFab is the strongest distributed-manufacturing-platform analog.
  - STI Electronics is the strongest manufacturing-plus-training analog.
  - EPTAC is a training analog.
  - Conclusive Engineering is a firmware and embedded-development analog.
  - Jabil and Celestica are large-scale benchmarks, not close operating analogs.
- Required output:
  - Table of analogs by category
  - Where each analog overlaps with CLARK
  - Where each analog differs materially
  - Confidence level for each comparison
- Decision threshold:
  - Enough evidence to state the competitive framing without exaggeration.
- Promotion rule:
  - Only validated distinctions can be used in the pitch.

### 3. Corridor Advantage Validation

- Owner: Research agent
- Objective: Determine whether Hamilton-Buffalo is meaningfully better than realistic alternatives.
- Current first-pass result: Hamilton-Buffalo is credible enough to keep as the working corridor, but not yet validated as clearly superior.
- Required output:
  - Corridor memo
  - Comparative view against at least 2 alternative corridors
  - Logistics reality check
  - Talent and incentive implications
- Decision threshold:
  - A defensible reason to keep or revise the initial corridor thesis.
- Promotion rule:
  - Keep only validated advantages in investor-facing narrative.

### 4. Incentive And Policy Validation

- Owner: Research agent
- Objective: Verify which public-policy and incentive claims are real, relevant, and usable.
- Current first-pass result:
  - SR&ED, NRC IRAP, FedDev Ontario coverage, and NYPA hydropower programs are real at the program level.
  - START-UP NY is closed to new applicants and should not be used as an active Buffalo claim.
- Required output:
  - Validation sheet for each named program or policy claim
  - Applicability to Hamilton, Buffalo, and Dunkirk
  - Constraints, conditions, and disqualifiers
- Decision threshold:
  - Clear separation of usable claims versus speculative claims.
- Promotion rule:
  - Unsupported claims remain in research only.

### 5. Fee Stack And Node Economics

- Owner: Business-plan agent
- Objective: Convert the platform model into believable economics.
- Current founder inputs:
  - First revenue should come from IPC certification and train-the-trainer activity.
  - Hamilton should start with a direct CLARK-operated training facility inside Niagara Assembly.
  - Default ownership in new centers should be 10%, with a practical upper band of 15% to 20%.
  - Software should be bundled into Assembly Centre / Assembly Center licensing and separately billed only for non-center users.
- Required output:
  - Initial fee stack
  - Minority ownership range
  - Capital recycling assumptions
  - Node onboarding economics
  - Participation-rights structure for node-originated IP
- Decision threshold:
  - The model must be specific enough to explain how CLARK makes money without hand-waving.
- Promotion rule:
  - Once coherent, update the business plan.

### 6. Software Scope Definition

- Owner: Business-plan agent
- Objective: Define what software is core to CLARK version 1.
- Current founder input:
  - Clark software should be built for direct interaction with physical facilities, tools, machinery, operators, and experts.
  - Its central purpose is to log, synthesize, and report on facility activity, including human and AI agent activity.
  - CLARK should use the Theia Framework, open-source resources, and proprietary products to build Integrated Production Environments.
  - Secure on-site operation with controlled remote participation is a core requirement.
  - Chat and workflow coordination aligned with XMPP-style standards should support agile collaboration across production partners, AI agents, and automation services.
  - CLARK should operate inspectable server infrastructure inside key North American nodes and preserve easy owner access to stored data and backups.
- Current working result:
  - Version 1 should include facility activity logging, human-and-AI audit trails, role-based reporting, Theia-based production workspaces, secure on-site-first collaboration, workflow chat and presence, and owner-accessible local data controls.
  - Later phases should carry broader cross-node intelligence, wider machine integration, and richer external inspection surfaces.
  - Version 1 should stay out of generic ERP replacement, full digital twins, and over-automated deterministic factory control.
- Required output:
  - Core-now software capabilities
  - Later-phase capabilities
  - Out-of-scope items
  - Why each belongs in its bucket
- Decision threshold:
  - Clear product boundary that prevents software sprawl.
- Promotion rule:
  - Only core-now capabilities belong in the core business plan.
- Current status:
  - The software boundary has been promoted into the business plan, venture overview, network operating model, and the dedicated Clarkware concept doc.
  - Remaining work is architectural definition: data model, XMPP messaging model, local-first behavior, first tool integrations, and permission design.

### 7. Dunkirk Scope Decision

- Owner: Orchestrator + Business-plan agent
- Objective: Decide whether Dunkirk belongs in the active thesis now.
- Current promoted treatment: Dunkirk is a later logistics option, not part of the core proof case.
- Required output:
  - `Core now`, `later option`, or `out of scope`
  - Strategic reason for the classification
  - Evidence dependency list
- Decision threshold:
  - The project docs should carry one stable treatment of Dunkirk.
- Promotion rule:
  - Only `core now` belongs in the pitch.

### 8. Workforce Housing Scope Decision

- Owner: Orchestrator + Business-plan agent
- Objective: Prevent adjacency sprawl around housing.
- Required output:
  - `Core now`, `later option`, or `out of scope`
  - Rationale and risk assessment
- Decision threshold:
  - A firm scope boundary for current planning.
- Promotion rule:
  - If not core, keep it out of investor-facing materials.

### 9. Hamilton Training Legal / Commercial Model

- Owner: Orchestrator + business-plan agent
- Objective: Define the operating structure for CLARK's first direct training facility in Hamilton.
- Current founder input:
  - CLARK operates the facility directly.
  - The facility sits inside Niagara Assembly's footprint.
  - The launch bundle should center on IPC-A-610 CIS, IPC-A-610 CSE, Hand Soldering Certification, EPTAC Hands-on Cable and Wire Harness Lab, and IPC-A-610 CIT.
  - Niagara Assembly charges nominal rent and equipment-use fees under a hybrid fixed-fee and revenue-sharing model.
  - CLARK controls training standards and carries instructor liability.
  - The facility side carries trainee injury and equipment-damage responsibility.
  - An Advisory Group should support the beta phase as a working group with monthly updates and quarterly sessions.
  - The facility should serve the broader region, with Niagara Assembly as prime beneficiary.
  - CLARK should pair IPC credentials with separate Clark Courses wraparound curriculum.
- Required output:
  - Defined commercial relationship with Niagara Assembly
  - Defined management and quality-control model
  - Defined split-responsibility areas for insurance, compliance, and liability
  - Clear statement of first-12-month priorities
- Decision threshold:
  - The Hamilton model should be clear enough to support drafting agreements and first-year operating assumptions.
- Current status:
  - The operating model and a provisional beta economics structure have been promoted into the Hamilton model doc, venture overview, business plan, and decision log.
  - Draft agreement positions now exist in `docs/financials/hamilton-colocation-draft-terms.md`.
  - The Clark Certified implementation path now exists in `docs/products/training-services/clark-certified-records-implementation-brief.md`.
- Promotion rule:
  - Promote into the Hamilton model doc, business plan, and venture overview.

## Weekly Cadence

### Monday

- Orchestrator reviews queue
- Research agent starts priorities 1 and 2

### Tuesday

- Research agent advances priorities 3 and 4
- Update `docs/process/research.md`

### Wednesday

- Business-plan agent works on priority 5

### Thursday

- Business-plan agent works on priority 6
- Orchestrator reviews scope items 7, 8, and 9

### Friday

- Orchestrator synthesis
- Promote validated conclusions into the main docs

## Closeout Format

Each completed task should end with:

### What We Learned

### Confidence

### What Changes In The Docs

### What Still Cannot Be Claimed
