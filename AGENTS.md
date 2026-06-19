# Repository Guidelines

## Project Structure & Module Organization
- This repo is documentation-centric. `docs/` holds the source thesis, research board, decision log, and operational plans; `agents/`, `prompts/`, `workflows/`, and `templates/` contain reusable briefs, prompts, runbooks, and scaffolding. `framework/` mirrors the operating structure, while `README.md` and `clark_detailed_v2.docx.md` explain the overall intent. Treat Markdown files as the canonical artifacts.

## Build, Test, and Development Commands
- There is no build system—changes are textual. Use `rg -n keyword docs/` for fast lookups and preview Markdown manually or with `python3 -m http.server` from the repo root when needed. Document validation is done by human review rather than automated tests.

## Coding Style & Naming Conventions
- Use 2-space indentation for YAML/frontmatter fragments and keep prose short, direct, and present tense. File names follow kebab-case (e.g., `clarkware-architecture.md`). Maintain consistent headings (`#`, `##`, `###`) and cite decisions via explicit references (`docs/process/decision-log.md`).

## Testing Guidelines
- No automated tests exist. Verify updates by re-reading relevant Markdown, ensuring cited sources (e.g., `docs/process/claims-register.md`) remain accurate, and keeping research findings traceable in tables.

## Commit & Pull Request Guidelines
- Write descriptive commits such as `docs: add Clarkware architecture spec`. Each PR should summarize the change, mention impacted claims or decisions, and note any follow-up validation. Update `docs/process/decision-log.md` and `docs/process/claims-register.md` whenever a claim is promoted or rejected.

## Operational Tips
- Add every new document to `README.md`’s Source Of Truth list. When updating workflows or plans, update the relevant row in `docs/process/research-board.md`. Keep assertions gated by research; promote only what can be linked back to a documented source.
