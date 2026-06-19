# Working Paper · The Evidence Machine

**Status:** Speculative working paper — planning record, not a commitment.
**Synthesized:** 2026-06-12, from `docs/products/clarkware/clarkware.md`, `docs/pilots/niagara-clarkware-pilot.md`, and `project/04-research-deepening.md` (Track 4).
**Companion to:** Field Report 001, "Reports like this one" and "A registry."

---

## 1. The claim this paper substantiates

Field Report 001 says Clark's publishing "is not marketing for the protocol; it is the protocol's evidence layer." That only holds if evidence is captured where work happens, as it happens — not reconstructed for the newsletter afterward. The Evidence Machine is the software and method stack that makes the field report a *byproduct of real work* rather than a piece of content.

It has two halves: **Clarkware**, the software that records work at the bench; and the **field report**, the published unit built from those records. The atlas (the registry's mapping instrument, live at [atlas.babb.tel](https://atlas.babb.tel)) is the third surface, covered in the registry sections of the Bench Plan and Counterweight File.

## 2. Clarkware: a clerk for industrial work

Clarkware is Clark's software family. The root concept: Clark behaves like a modern clerk or scribe for industrial work. The software exists to record and relay the ongoing stories of research, testing, assembly, quality control, maintenance, and coordination inside real facilities — to preserve operational memory, improve accountability, and accelerate sound technical and commercial decisions.

Its central loop:

- **log** activities as they happen (human, machine, and AI),
- **synthesize** them into operational understanding,
- **report** them in forms that support trust, quality, and decision-making.

The unit of deployment is the **IPE — Intelligent Process Environment** — at workstation level: a current-job view, a note composer, artifact attachment, job threads, an event stream, and an AI summary pane. Messaging is conversation-first (XMPP-based model: workstation channels, job threads, issue escalation, remote-expert access), with one non-negotiable property: human actions, AI actions, and automation actions are always distinguishable and auditable. What happened, why, who or what contributed, what evidence exists, what decisions followed — visible by design.

This is the same discipline as the field reports, pointed inward. Clarkware is the evidence layer for a facility; the field report is the evidence layer for a place.

## 3. The first proof: one bench, one instrument, eight weeks

The pilot plan is deliberately narrow — one diagnostics/test workstation at the host facility ("Test Bench A01"), one instrument with file export ("Scope-01," a bench oscilloscope or equivalent with CSV output), and a watched-folder import as the first evidence path. No heroic machine integration; the fastest honest path to real captured evidence.

**What one pilot cycle looks like:**

1. Operator opens the active job in the IPE.
2. Runs a test; the instrument's export lands in a watched folder.
3. Clarkware records a `test.run.imported` event and stores the artifact.
4. Operator adds an observation note linked to job and workstation.
5. An AI summarizer drafts a recommendation or anomaly note.
6. A remote expert reviews evidence in the issue thread.
7. A supervisor accepts, edits, or rejects the recommendation.
8. The facility-level reporting view updates from the underlying record — never hand-curated.

**Eight-week build sequence:** weeks 1–2 confirm station, users, and integration path; 3–4 deploy the IPE shell, notes, threads, artifact flow, and messaging; 5–6 add the test import, AI summarizer, escalation, and audit/export validation; 7–8 run repeated live jobs and document friction.

**Success is measured in operational truthfulness, not vanity metrics:** real jobs processed; % of jobs with notes captured in context; % with attached evidence artifacts; median time from issue to expert response; % of AI recommendations explicitly accepted/edited/rejected; % of records exportable without manual cleanup.

**Named failure modes, designed against:** over-scope (too many stations too early), workflow avoidance (friction makes operators route around the tool), messaging without context (chat fragmentation reborn), AI credibility decay (noisy, unauditable outputs), and reporting theatre (dashboards curated by hand). The last one is the cardinal sin: if a report is not generated from the underlying events, the product thesis is unproven.

## 4. Why this stack, commercially

Every layer of the media-and-data model has a working precedent — always as a fragment, never combined:

- **Hagerty**: car media → valuation data → marketplace ($1.2B transactions in 2024; NYSE-listed). The full media→data→transaction flywheel, for collectible cars.
- **The Information**: journalism with a $999/yr structured-data tier — the data is the premium product; the journalism is acquisition and data generation.
- **ProPublica**: open, inspectable databases as civic infrastructure — the trust architecture.
- **Texas Tribune**: sponsorship and events behind a hard, labeled editorial firewall — the template for taking council, landlord, or manufacturer money without selling coverage.
- **Vice** (the cautionary control): the immersive field format worked; advertising dependence and authenticity decay killed it. Hence the structural rule: **no action, no amplification** — coverage cannot be bought, only earned by documented work.

One quantified line worth keeping: when local newspapers close, municipal borrowing costs rise 5–11 basis points. Credible local evidence measurably lowers a region's information-risk premium. The field report is not content; it is infrastructure with a balance-sheet effect.

**The revenue ladder, in precedent order:** free field documentary → membership/community → premium structured-data product for councils, owners, and investors → transaction/deal-flow layer. Software monetization follows the node model: Clarkware is bundled by default into Assembly Centre participation and separately billable only for non-centre users (see Node Economics).

## 5. The standardized unit: the field report as data record

The publication unit is a **standardized industrial field report**: simultaneously a readable narrative and a structured data record (claims table, source links, observation dates, correction history). Field Report 001 is the prototype — its annotations, source rail, and published corrections are the data layer showing through the prose. As Clarkware matures, the pipeline closes: bench events → facility record → published report → registry update → the next observation. The machine's whole purpose is that the sentence "Field Report 002 will tell you what happened next — and only what happened" is a system property, not a promise.

## 6. Open questions

- Which instrument and export format first (CSV vs trace-linked files)?
- Which two daily operators, and which remote-expert role produces visible value earliest?
- Minimum live-job count for the pilot to be credible to outside reviewers.
- How much of the IPE record can flow into public field reports without exposing host-facility commercial detail — the firewall design, applied inward.
