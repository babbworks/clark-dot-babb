# CLARK Weekly Agent Workflow

This file is the reusable operating sequence for running the CLARK venture build with multiple agents.

## Objective

Use agents in a controlled order so evidence feeds strategy and strategy feeds narrative.

## Sequence

### Step 1: Orchestrator

Run `prompts/orchestrator-kickoff.md` first.

Goal:

- Identify the most important unresolved questions
- Route them to the right specialist agents
- Prevent parallel work from drifting into conflicting assumptions

### Step 2: Research Agent

Run `prompts/research-sprint.md` next.

Goal:

- Validate the first beachhead customer
- Clarify substitutes and competitors
- Test the Hamilton-Buffalo corridor thesis
- Strengthen `docs/process/research.md`

### Step 3: Business-Plan Agent

Run `prompts/business-plan-sprint.md` after research findings are added.

Goal:

- Convert findings into model decisions
- Tighten licensing, ownership, and GTM logic
- Improve `docs/venture/business-plan.md`

### Step 4: Pitch Agent

Run `prompts/pitch-sprint.md` only after the business model is coherent.

Goal:

- Make the company easy to explain
- Sharpen the return model narrative
- Remove claims that are not yet defensible

### Step 5: Brand Agent

Run `prompts/brand-sprint.md` after the pitch draft exists.

Goal:

- Improve positioning language
- Remove generic or inflated phrasing
- Keep CLARK's role and the nodes' role distinct

### Step 6: Orchestrator Synthesis

Run the orchestrator again.

Goal:

- Check for contradictions across docs
- Prioritize the next round of work
- Produce a short list of remaining unknowns

## Rules For Effective Use

- Do not start with pitch writing if the customer and model are still unstable.
- Treat `docs/process/research.md` as the evidence base.
- Treat `docs/venture/business-plan.md` as the decision layer.
- Treat `docs/venture/pitch.md` as the narrative layer.
- Have the orchestrator resolve conflicts before a new cycle starts.

## Suggested Cadence

- Monday: Orchestrator and research kickoff
- Tuesday: Research synthesis
- Wednesday: Business-model decisions
- Thursday: Business plan revision
- Friday: Pitch and brand refinement
