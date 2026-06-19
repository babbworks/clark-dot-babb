# Repos Review — clarkware, clarkware-dev, clark-chat

- Review date: 2026-06-11
- Sources: `/Users/mp/Documents/Vaults/babb/repos/{clarkware, clarkware-dev, clark-chat}`
- Compounds on: `01-corpus-review.md` (clarkinc corpus)

---

## 1. Headline Finding: The Code Is Missing, the Plans Have Moved On

The single most important discovery across these three repos:

- **`clarkware-dev`** (planning repo, progress assessment dated 2026-03-27) declares **"P1V1 feature-complete"**: Theia IPE shell, Fastify API, 15 ADR-007-compliant bounded contexts, XMPP messaging, CFX/AMQP outbox, AI assistant, inspection panel, firmware flash, reporting, export — all five Phase 1 milestones (M1.1–M1.5) marked achieved.
- **`clarkware`** (the supposed code repo) contains **4 tracked files** (verified via `git ls-files`): README.md, the 44KB plan compile, a Prosody README, and one SVG. All `apps/*/src/` and `packages/*/src/` directories are **empty scaffolding**. Zero functional code, zero tests.
- The clarkware README describes the P1V1 system in present tense ("working", "complete") — it documents a system that is not in the repo.

**Interpretation options (must be resolved with the user):**
1. The P1V1 codebase exists elsewhere (another local folder, unpushed working copy, different machine) and was never committed here
2. The code was lost or intentionally removed, leaving docs as the surviving record
3. The "feature-complete" assessment described a prototype that was discarded for a rebuild

Either way: **the authoritative Clarkware spec is now stronger than ever, but the implementation of record is absent.** This supersedes 01-corpus-review §8.3 ("pilot engineering unstarted") — engineering apparently *did* happen (per detailed progress logs and a 15-service compliance tracker), but its artifact is unaccounted for.

## 2. Repo-by-Repo State

### clarkware (`repos/clarkware`) — spec shell, no code

- Git: 3 commits — initial + "first push" (2026-04-29), README heybabb-standard rewrite (2026-06-10, most recent activity of all Clark repos)
- Monorepo skeleton (pnpm/Turborepo): apps `api` (Fastify) + `ipe` (Theia); 13 packages (ai, cfx, core, db, events, firmware-utils, identity, ipc-criteria, mcp-server, messaging, reporting, storage, sync) — **all src/ empty**
- `Clark Plan Compile CaaS.md` (1,687 lines): consolidated compile of the four clarkinc-era Clarkware docs — 6-layer architecture, 17-object data model, XMPP messaging model, Phase 0–6 roadmap, Niagara pilot scope, open questions (event store design, identity provider, retention classes, federation scope)
- README claims P1 V1 status with working job lifecycle, notes, WebSocket events, JWT+RBAC, MinIO, AI routes; scaffolded issues/conversations/shifts/presence; "XMPP package complete but not wired to UI" — **none of this is present**

### clarkware-dev (`repos/clarkware-dev`) — richest, most current technical authority

- Git: 1 commit ("first push"); content dated through ~2026-04-18 (code_reviews folder timestamps); progress assessment dated 2026-03-27 (Session 5). README has an unresolved merge conflict
- **7 ADRs** (the engineering decision record clarkinc lacked):
  - ADR-001: AMQP 0.9.1/RabbitMQ for CFX; tiered topology; `cfx_outbox` table for offline durability — Accepted
  - ADR-002: OpenOCD default GDB server, J-Link when detected; cortex-debug DAP adapter; SWD default — Accepted
  - ADR-003: Theia AI for in-IPE agents + MCP server for external AI; Claude primary, Ollama air-gapped fallback — Accepted
  - ADR-004: PlatformIO primary embedded build system; FreeRTOS Phase 1, Zephyr Phase 2 — Accepted
  - ADR-005: Curated SVD library; SHA-256 ELF hashing; version via readelf/symbols — Accepted
  - ADR-006: Decompose into 5 domain extensions (core, cfx, firmware, inspection, ai) — **Proposed, not implemented**
  - ADR-007: Modular monolith; service layer mandatory; no SQL in routes; outbox pattern; data ownership per context — Accepted, tracked 15/15 compliant
- **frameworks/**: deep integration specs (AMQP/CFX, firmware toolchain incl. probe enumeration by USB VID, Theia AI/MCP/LLM, Theia extension architecture)
- **planning/clark-chat-app-scope.md**: scopes a **Discord-like standalone chat app** — React + Vite + Strophe.js + Zustand + Tailwind, direct to Prosody (WebSocket :5280), Server=Facility / Channel=MUC room / Bot=AI agent mapping, MAM history; status: prerequisites met, "ready to build"
- **Own multi-agent OS** (engineering flavor): Orchestrator, Firmware Engineer, CFX Integration Engineer, Quality Inspector, AI Platform Engineer
- code_reviews/ directory exists but is **empty**
- Phase 2 deferred items: offline sync activation, debug mode, RTOS thread awareness, tiered brokers, Clark Firmware SDK
- Open questions logged: J-Link license (~$400/unit) procurement, air-gapped LLM model choice, tiered broker deployment, MCP vs A2A (deferred to Phase 3)

### clark-chat (`repos/clark-chat`) — re-architecture spec, no code

- Git: 2 commits, both 2026-04-19; no activity since
- **`chat-centric-requirements.md`** (282 lines, 20 formal requirements with EARS-style acceptance criteria): a significant conceptual evolution — **conversation-first architecture** where conversations are persistent, typed, structured objects and the system of record:
  - **13 conversation types** in semantic groups: Work Groups (Rooms, Locations, Stations, Tools), Work Types (Jobs, Tasks, Reviews), Work Materials (Inputs, Outputs), Learning Contexts (Classes, Courses, Teams)
  - **13 reusable elements** attachable to any conversation: Members, Context, Purpose, Access, History, Files, Qs & As, Choices, Web, Terms, Apps, AI, Instructions
  - Requirements cover lifecycle (Active→Archived→Deleted), microservice attachment, traceability (Inputs/Outputs), relationships, access control, search, notifications
  - Internal inconsistency: Req 1 lists "Roles" as a type, conflicting with the 13-type taxonomy
- Architecture: Clark Chat client(s) → XMPP over WebSocket → Prosody. src/ (components/store/xmpp) and dist/ are **empty placeholders**
- `monocles/` = vendored docs/assets (136 files, no source) from monocles chat (Conversations-based XMPP Android client) — reference material only, unmodified

## 3. Evolution of the Clarkware Concept (clarkinc → now)

| Aspect | clarkinc era (Mar 2026) | clarkware-dev / clark-chat era (Mar–Apr 2026) |
|---|---|---|
| Spec form | Prose architecture docs | 7 ADRs + framework specs + compliance tracker |
| Backend | Unspecified | Fastify, PostgreSQL, MinIO, RabbitMQ, Prosody; modular monolith (ADR-007) |
| AI | 4 named Theia AI agents, posture ambiguous | Theia AI + MCP server; Claude primary, Ollama air-gapped; review states retained |
| Events | IPC-CFX v2.0 over AMQP (conceptual) | RabbitMQ/amqplib + `cfx_outbox` pattern (concrete) |
| Messaging | XMPP job/issue threads inside IPE | + standalone Discord-like Clark Chat app; then re-architected as conversation-first system of record (13 types × 13 elements) |
| Firmware | Theia LSP/DAP intent | Concrete toolchain: PlatformIO, OpenOCD/J-Link, cortex-debug, SVD, ELF hashing |
| Status claim | Pilot 47/60 tasks not started | "P1V1 feature-complete" (2026-03-27) — but code not in repo |

Notable scope signal: clark-chat's conversation types include **Classes, Courses, Teams** — the messaging layer is being designed to also carry the training pillar (Clark Courses), not just factory ops. This is a new convergence not present in clarkinc planning.

## 4. New Contradictions / Issues (extends 01-corpus-review §7)

10. **Feature-complete claim vs empty repo** — clarkware-dev progress assessment and clarkware README both describe a working P1V1 that is not in version control. Resolve before any plan: locate, recover, or formally write off the P1V1 codebase
11. **Two messaging architectures** — clarkware-dev's clark-chat-app-scope (Discord-like MUC client, "ready to build") vs clark-chat's chat-centric-requirements (conversation-first re-architecture, 13×13 taxonomy). The latter (Apr 19) postdates the former and says "system under re-architecture" — likely supersedes, but unconfirmed
12. **clarkware-dev README merge conflict** — unresolved HEAD-vs-branch conflict committed in the repo
13. **Tech stack drift from clarkinc** — IPE architecture doc (clarkinc) said Electron desktop default; clarkware README is browser-Theia in Docker. Minor but should be normalized
14. **clark-chat taxonomy inconsistency** — "Roles" appears as a conversation type in Req 1 but not in the 13-type list
15. **Single-commit repos** — clarkware-dev and clark-chat each have ~1 meaningful commit; iteration history (sessions 1–5 etc.) happened outside version control and is unrecoverable from git

## 5. What This Changes in the Synthesis Picture

- **Spec maturity is much higher than clarkinc suggested.** The ADR set + frameworks make Clarkware implementable without re-deriving architecture. Phase 1 effort estimate if rebuilt from scratch: ~12–17 focused weeks
- **The pilot-blocking question changes** from "lock architecture choices" (clarkinc D-021 era) to "where is the P1V1 build, and is the chat-centric re-architecture in or out of v1 scope?"
- **The conversation-first model is a strategic fork**: it reframes Clarkware from "IPE with messaging" toward "conversations as the system of record," and pulls training (Classes/Courses) into the same substrate. This needs an explicit decision: adopt as v2 direction, fold into v1, or park
- **Activity timeline**: clarkinc planning (Mar) → clarkware-dev engineering docs (Mar–Apr) → clark-chat re-architecture (Apr 19) → repo standardization touches (Jun 10). The June README touch shows the project is still live but in documentation mode

## 6. Open Questions for the User

1. Where is the P1V1 codebase that clarkware-dev describes (Theia IPE + Fastify + 15 services)? Another folder, machine, or lost?
2. Is `chat-centric-requirements.md` (conversation-first, 13×13) the current authoritative direction for the messaging layer, superseding the Discord-like clark-chat app scope?
3. Should the master synthesis treat clarkware-dev's ADRs as locked decisions (extending the clarkinc decision log), and register them accordingly?
4. Is the Niagara pilot still the target deployment, and does "P1V1 feature-complete" mean it ever ran at/for a real station?

## 7. Inputs to Carry Into the Master Plan

- Adopt clarkware-dev as the **engineering source of truth** (ADRs 001–005, 007 locked; ADR-006 pending) and reconcile it with clarkinc's decision log in one register
- Resolve the messaging-layer fork (Q2) before any rebuild — it determines data model and v1 scope
- Recover-or-rebuild decision for P1V1 is the first execution gate; until then, all "feature-complete" claims must be excluded from investor materials (same evidence discipline clarkinc applies elsewhere)
- Carry forward concrete open engineering items: event store design, identity provider, J-Link procurement, air-gapped LLM choice, tiered broker rollout, ADR-006 extension decomposition
