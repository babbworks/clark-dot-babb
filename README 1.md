# Clark Venture Workspace

This workspace is structured to develop CLARK as a research-driven venture project that can later be run in a fuller OpenClaw environment.

## What This Repo Holds

- `docs/`: source-of-truth planning, research, decisions, and pitch materials
- `agents/`: reusable agent briefs and project-specific task packets
- `prompts/`: reusable prompts for running CLARK workstreams
- `templates/`: structured research and analysis templates
- `workflows/`: repeatable runbooks for how work should move through the repo

## Source Of Truth

- `docs/venture-overview.md`: current company thesis
- `docs/research.md`: evidence base and unresolved questions
- `docs/research-board.md`: prioritized research execution queue
- `docs/business-plan.md`: strategy and business model decisions
- `docs/pitch.md`: investor-facing narrative
- `docs/decision-log.md`: decisions that have been made
- `docs/claims-register.md`: which claims are safe, weak, or rejected
- `docs/AGENTS.md`: contributor guide for repository contributors
- `docs/competitor-map.md`: consolidated competitor, analog, benchmark, and substitute map
- `docs/clarkware.md`: software-family concept, IPE definition, and version 1 boundary
- `docs/clarkware-architecture.md`: version 1 technical architecture, data model, messaging, and deployment approach
- `docs/clarkware-data-model.md`: canonical version 1 objects, event taxonomy, and sample payloads
- `docs/clarkware-messaging-model.md`: XMPP-oriented conversation, presence, and AI-participation model
- `docs/niagara-clarkware-pilot.md`: first pilot scope, success criteria, and rollout plan
- `docs/clarkware-technical-diligence.md`: investor-facing technical diligence framing and risk analysis
- `docs/clarkware-roadmap.md`: phased milestones from workstation proof to node standardization
- `docs/niagara-clarkware-demo-script.md`: 5 to 10 minute investor demo walkthrough for the Niagara pilot
- `docs/clarkware-investor-one-pager.md`: concise investor-facing product summary for Clarkware
- `docs/clarkware-slide-outline.md`: slide-by-slide Clarkware narrative for deck integration
- `docs/niagara-pilot-requirements-checklist.md`: operational checklist for standing up the first Niagara pilot
- `docs/clarkware-deck-draft.md`: markdown deck draft for Clarkware investor narrative
- `docs/niagara-pilot-task-tracker.md`: task tracker with owners, statuses, and immediate next actions
- `docs/clarkware-faq.md`: investor and technical objection-handling FAQ
- `docs/clarkware-deck-short.md`: compressed investor-ready Clarkware deck version
- `docs/niagara-pilot-staffing-and-station-sheet.md`: concrete staffing, station, instrument, and access sheet for the first Niagara pilot

## Recommended Working Order

1. Start with `docs/research-board.md`
2. Gather evidence in `docs/research.md`
3. Record decisions in `docs/decision-log.md`
4. Update `docs/claims-register.md` when a claim becomes usable or unusable
5. Promote validated conclusions into `docs/business-plan.md` and `docs/venture-overview.md`
6. Refresh `docs/pitch.md` only after the strategy is stable

## Reusable Assets

- Use `templates/` for consistent research outputs
- Use `workflows/` for recurring execution patterns
- Use `agents/tasks/` for bounded project-specific assignments
- Use `prompts/` when running multi-agent CLARK work in sequence

## Current Status

The repo now contains a coherent CLARK operating structure: venture thesis, research system, business plan draft, pitch draft, agent prompts, task packets, templates, workflows, and decision controls. The next high-value work is validating the beachhead customer, competitor analogs, corridor advantage, and incentive stack.
