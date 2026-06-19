# Venture Multi-Agent OS

This folder is a reusable starter framework for venture development through coordinated multi-agent work. It is designed to be copied into a new project before company-specific research and planning begins.

## Purpose

Use this framework when you want a new venture repo to start with:

- a clear source-of-truth document structure
- explicit separation between evidence, decisions, and narrative
- reusable agent roles
- reusable prompts and task packets
- claim-gating so pitch language does not outrun research
- a workflow that anticipates later OpenClaw usage

## Folder Layout

- `docs/`: core project documents and control logs
- `agents/`: reusable agent role briefs
- `prompts/`: reusable kickoff and sprint prompts
- `templates/`: structured templates for repeated research tasks
- `workflows/`: recurring operating cycles and runbooks

## Core Principles

1. Evidence first
2. Decisions second
3. Narrative third
4. Claims must be tracked explicitly
5. Scope must be controlled deliberately
6. The orchestrator resolves conflicts across agents and documents

## Source-Of-Truth Model

A new project should treat these files as the control layer:

- `docs/venture/venture-overview.md`: current company thesis
- `docs/process/research.md`: evidence base and unresolved questions
- `docs/process/research-board.md`: prioritized research execution queue
- `docs/venture/business-plan.md`: strategy and business model decisions
- `docs/venture/pitch.md`: investor-facing narrative
- `docs/process/decision-log.md`: resolved decisions
- `docs/process/claims-register.md`: safe, weak, and rejected claims

## Recommended Setup In A New Project

1. Copy this entire folder into the new repo.
2. Copy the contents of `docs/` into the project-level `docs/` directory.
3. Copy `agents/`, `prompts/`, `templates/`, and `workflows/` into the project root.
4. Replace placeholder company references.
5. Define the initial venture thesis in `docs/venture/venture-overview.md`.
6. Start the first cycle with the orchestrator prompt.

## Recommended Operating Order

1. Orchestrator frames the current cycle.
2. Research agent gathers and synthesizes evidence.
3. Business-plan agent converts evidence into decisions.
4. Brand and pitch agents refine positioning and narrative only after the model is coherent.
5. Orchestrator closes the cycle and updates priorities.

## What This Framework Does Not Do

- It does not supply market facts.
- It does not replace project-specific judgment.
- It does not make unsupported claims safe.
- It does not remove the need to validate incentives, legal structure, or customer demand.

## Intended Use With OpenClaw

This framework is useful even without OpenClaw installed, because the assets are just repo content. The advantage of later loading it into an OpenClaw environment is operational: easier agent execution, reuse of prompts and task packets, and a tighter loop for multi-agent work.
