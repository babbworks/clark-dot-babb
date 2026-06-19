# Clark Documentation Status

This document takes stock of what the repo already covers well, what is still incomplete, and where the next documentation work should go.

## Current Folder Shape

- Use `docs/process/` for living control documents such as the research board, claims register, decision log, workflow, and documentation audit.
- Use `docs/venture/` for the main venture thesis, business-plan, and pitch documents.
- Use `docs/research/supporting/` for market scans, comparative analysis, and background research artifacts.
- Use `docs/products/` for product-family documentation, with one folder per revenue-bearing line.
- Use `docs/pilots/` for Niagara pilot execution documents and demo materials.
- Use `docs/financials/` for startup-capital, launch-cost, and finance-planning documents.
- Use `docs/support-dev/` for investor, partner, and strategic-promotion support materials that sit behind the main pitch.

## Documentation That Is Already In Place

### Core Venture Control Docs

- `docs/venture/venture-overview.md`
- `docs/process/research.md`
- `docs/process/research-board.md`
- `docs/venture/business-plan.md`
- `docs/venture/pitch.md`
- `docs/process/decision-log.md`
- `docs/process/claims-register.md`
- `docs/process/workflow.md`

These documents establish the thesis, evidence gate, decision process, business framing, and narrative layer.

### Research And Market Support

- `docs/research/supporting/competitor-map.md`
- `docs/research/supporting/clark-southern-ontario-market-research.md`
- `docs/research/supporting/clark-stakeholder-intelligence.md`
- `docs/research/supporting/clark-training-market-sizing.md`

These documents provide supporting research inputs, but several findings still need promotion into the core docs through explicit decisions.

### Decision-Ready Memos

- `docs/process/beachhead-customer-decision.md`
- `docs/process/corridor-comparison-memo.md`
- `docs/process/incentive-validation-sheet.md`
- `docs/process/dunkirk-scope-memo.md`
- `docs/process/workforce-housing-scope-memo.md`
- `docs/products/training-services/clark-certified-records-implementation-brief.md`

These documents now give the repo explicit positions on first customer focus, corridor language, incentive safety, Dunkirk scope, housing scope, and the Clark Certified records path.

### Product And Platform Docs

- `docs/products/clarkware/clarkware.md`
- `docs/products/clarkware/clarkware-architecture.md`
- `docs/products/clarkware/clark-ipe-architecture.md`
- `docs/products/clarkware/clarkware-data-model.md`
- `docs/products/clarkware/clarkware-messaging-model.md`
- `docs/products/clarkware/network-operating-model.md`
- `docs/products/clarkware/clarkware-roadmap.md`
- `docs/products/clarkware/clarkware-financial-plan.md`

The Clarkware concept is now documented from thesis through architecture and pilot-ready product direction.

### Pilot Execution Docs

- `docs/pilots/niagara-clarkware-pilot.md`
- `docs/pilots/niagara-clarkware-demo-script.md`
- `docs/pilots/niagara-pilot-requirements-checklist.md`
- `docs/pilots/niagara-pilot-staffing-and-station-sheet.md`
- `docs/pilots/niagara-pilot-task-tracker.md`
- `docs/products/training-services/hamilton-training-model.md`

The first pilot and the first training-facility operating model both have meaningful documentation depth.

### Training Curriculum Docs

- `docs/courses/clark-courses.md`
- `docs/courses/README.md`
- `docs/courses/L1-foundations/`
- `docs/courses/L2-professional/`
- `docs/courses/L3-advanced/`

Clark Courses now has a substantive curriculum workspace with a service profile, a curriculum map, and level-specific course materials. This is strong progress for the training-services line and materially upgrades CLARK's training-product depth.

### Financial Planning Docs

- `docs/financials/startup-costs-first-pass.md`
- `docs/financials/use-of-funds-12-to-18-months.md`
- `docs/financials/node-economics-and-fee-stack.md`
- `docs/financials/hamilton-colocation-draft-terms.md`
- `docs/products/training-services/training-financial-model.md`
- `docs/products/clarkware/clarkware-financial-plan.md`
- `docs/products/partner-facility-development/partner-facility-development-financial-plan.md`

The repo now has first-pass working financial plans for the initial product stack plus startup-capital and 12-to-18-month use-of-funds memos. Training is the most quantitative of the product-level plans. Clarkware and partner-facility development remain structured pricing-and-gating plans that still need validation through real deployment and partner conversations.

### Support-Development Docs

- `docs/support-dev/clarkware-technical-diligence.md`
- `docs/support-dev/clarkware-investor-one-pager.md`
- `docs/support-dev/clarkware-slide-outline.md`
- `docs/support-dev/clarkware-deck-draft.md`
- `docs/support-dev/clarkware-deck-short.md`
- `docs/support-dev/clarkware-faq.md`

The repo now has a strong supporting package behind the main pitch, even if the pitch still depends on a few unresolved research questions.

## Documentation That Is Still Outstanding

The following gaps are implied by the current `docs/process/research-board.md`, `docs/process/claims-register.md`, and open-decision sections in the main thesis docs.

| Priority | Missing Or Incomplete Document | Why It Matters | Likely Promotion Target |
| --- | --- | --- | --- |
| 1 | Customer interview and account pipeline evidence | The beachhead is now selected, but the repo still lacks real buyer conversations and named account proof. | `docs/process/research.md`, `docs/venture/business-plan.md`, `docs/venture/pitch.md` |
| 2 | Corridor economics reality check | Hamilton-Buffalo is now the working investor-safe default, but project-specific freight, customs, and handoff economics still need validation. | `docs/process/research.md`, `docs/venture/business-plan.md` |
| 3 | Platform-fee validation through live node work | The fee stack is now explicit, but recurring support burden and willingness to pay are still modeled more than proven. | `docs/financials/node-economics-and-fee-stack.md`, `docs/products/partner-facility-development/partner-facility-development-financial-plan.md` |
| 4 | Hamilton negotiated agreement package | Draft positions now exist, but they still need counterpart review, legal drafting, and final commercial negotiation. | `docs/financials/hamilton-colocation-draft-terms.md`, `docs/products/training-services/hamilton-training-model.md` |
| 5 | Clark Certified operational implementation | The staged path is now defined, but record format, verification mechanics, and system ownership still need operational design. | `docs/products/training-services/clark-certified-records-implementation-brief.md`, `docs/products/clarkware/clarkware-roadmap.md` |

## Recommended Next Documentation Moves

1. Gather real buyer evidence inside the selected industrial-controls beachhead so the investor story rests on customer proof, not only strategic fit.
2. Pressure-test the Hamilton-Buffalo proof corridor with project-specific logistics and handoff economics.
3. Validate the explicit fee stack against at least one real partner-facility conversation and one real delivery scenario.
4. Convert the Hamilton draft terms and Clark Certified records brief into named owners, operating workflows, and implementation decisions.

## Working Rule

When a supporting memo becomes strong enough to change the main thesis, record that promotion in `docs/process/decision-log.md`, update the relevant status in `docs/process/claims-register.md`, and then refresh the destination source-of-truth document.
