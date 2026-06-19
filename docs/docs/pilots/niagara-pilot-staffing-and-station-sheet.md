# Niagara Pilot Staffing And Station Sheet

## Purpose

This document turns the Niagara Clarkware pilot recommendation into a concrete station-and-staffing sheet that can be completed with real names and hardware details.

Where actual names or equipment identifiers are not yet known, this sheet uses role slots and recommended assumptions rather than pretending those decisions are already final.

## Current Working Recommendation

- Pilot station: `Test Bench A01`
- Station type: diagnostics and validation station for board-level testing and troubleshooting
- First evidence source: bench oscilloscope with CSV export, provisionally treated as `Scope-01` pending actual asset confirmation
- First integration mode: watched-folder or structured file import
- First reporting view: supervisor / quality dashboard

## Station Profile

### Station Identity

- Station label: `Test Bench A01`
- Facility: `Niagara Assembly`
- Zone: `Diagnostics / Test`
- Station type: `Diagnostics and validation`
- Primary operational use: board-level testing, anomaly review, troubleshooting, validation reruns

### Why This Station Is The Right First Pilot

This station is the best first Clarkware pilot candidate if it has:

- repeatable test activity
- exportable evidence artifacts
- regular use of notes and handoffs
- enough complexity to justify remote expert review
- small enough user count to keep early rollout manageable

## Instrument Recommendation

### Preferred First Instrument Profile

- Instrument class: bench oscilloscope or equivalent diagnostics instrument
- Minimum requirement: exportable CSV or similarly structured output
- Preferred secondary evidence: trace image export or screenshot-capable output
- Preferred connection path: local export folder on workstation or removable / shared file path that can be watched reliably

### Instrument Decision Fields

- Instrument vendor: `Pending confirmation`
- Instrument model: `Pending confirmation`
- Instrument asset ID: `Scope-01` provisional
- Export format used in pilot: `CSV`
- Secondary artifacts: `trace image` if available
- Local export location: `C:/Clarkware/Imports/Scope-01` provisional working path
- Capture method: `watched-folder`

### Why Export-First Is The Right Starting Point

Export-first integration is the right first step because it:

- proves the evidence thesis quickly
- avoids premature deep device-control scope
- gives CLARK a stable first adapter path
- makes audit and artifact handling easier to reason about

## Staffing Sheet

### Slot 1: Daily Operator A

- Role label: `Diagnostics / Test Technician`
- Current status: `Provisionally assigned`
- Ideal profile:
  - regularly works at the pilot station
  - already interprets instrument outputs
  - already makes or consumes handoff notes
  - tolerant of lightweight workflow experimentation
- Main pilot responsibility:
  - run live jobs through the IPE
  - capture notes in context
  - import or attach evidence artifacts
  - participate in job-linked messaging

### Slot 2: Daily Operator B

- Role label: `Production-Support Technician`
- Current status: `Provisionally assigned`
- Ideal profile:
  - supports troubleshooting, rework, or production follow-through
  - can validate whether the record is useful outside the immediate bench context
  - helps prove that Clarkware is not only for one specialist user
- Main pilot responsibility:
  - review handoffs and notes
  - add context from adjacent production work
  - validate usefulness of artifacts and summaries

### Slot 3: Supervisor / Production Lead

- Role label: `Supervisor / Production Lead`
- Current status: `Provisionally assigned`
- Ideal profile:
  - responsible for throughput and issue visibility
  - willing to use reporting views rather than rely only on verbal updates
- Main pilot responsibility:
  - validate first reporting view
  - review issue escalation usefulness
  - confirm whether live visibility improves management decisions

### Slot 4: Quality Reviewer

- Role label: `Quality Reviewer`
- Current status: `Provisionally assigned`
- Ideal profile:
  - regularly reviews evidence and disposition logic
  - can assess whether notes, artifacts, and audit trails are sufficient for quality use
- Main pilot responsibility:
  - validate traceability quality
  - review issue and evidence records
  - identify gaps between operational notes and formal quality requirements

### Slot 5: Remote Expert

- Role label: `Firmware-Aware Diagnostics Expert` or `Senior Test Engineer`
- Current status: `Provisionally assigned`
- Ideal profile:
  - can interpret evidence remotely
  - can guide anomaly triage with real technical value
  - does not need broad facility visibility to be useful
- Main pilot responsibility:
  - participate in issue-linked threads
  - review imported evidence
  - provide bounded remote guidance

### Slot 6: AI Agent

- Role label: `AI Summarizer / Router`
- Current status: `Planned`
- Recommended first role:
  - summarize recent activity in a job or issue thread
  - highlight missing evidence or unresolved items
  - suggest next review step
- Explicit limit:
  - no autonomous final disposition authority

## Access And Permission Recommendations

### Daily Operator A

- workstation-scoped access
- job note creation
- artifact attachment
- job-thread participation

### Daily Operator B

- workstation-scoped access
- job note creation
- artifact review
- job-thread participation

### Supervisor / Production Lead

- facility or zone-scoped visibility for pilot area
- issue review access
- reporting dashboard access
- recommendation review access

### Quality Reviewer

- issue and artifact review access
- note and evidence visibility
- reporting access for quality-relevant items

### Remote Expert

- job-scoped or issue-scoped access only
- artifact review access
- thread participation access
- no broad facility visibility by default

### AI Agent

- bounded thread participation
- summary generation
- recommendation drafting
- no final approval authority

## First Reporting View Definition

### Recommended View Name

- `Pilot Supervisor / Quality Dashboard`

### Required Sections

- active jobs at Test Bench A01
- recent test imports
- open issues
- unresolved AI recommendations
- items awaiting human review
- recent notes and handoffs

### Why This View Comes First

This is the highest-value first reporting surface because it proves that Clarkware can turn workstation activity into useful supervisory visibility without building a bloated command center.

## Demo Staffing Recommendation

For the first investor or partner-facing demo, use:

- one diagnostics technician as the live workstation actor
- one remote diagnostics expert as the reviewer
- one supervisor or quality lead as the reporting consumer
- one visible AI summarizer agent in the loop

That combination best demonstrates the core Clarkware value proposition in a short time window.

## Fields To Fill In With Real Names

- Daily Operator A: `Niagara-Test-Tech-01` provisional role ID
- Daily Operator B: `Niagara-Prod-Support-01` provisional role ID
- Supervisor / Production Lead: `Niagara-Supervisor-01` provisional role ID
- Quality Reviewer: `Niagara-Quality-01` provisional role ID
- Remote Expert: `Remote-Diagnostics-01` provisional role ID
- Pilot signoff owner at Niagara Assembly: `Niagara-Ops-Lead-01` provisional role ID
- Clarkware implementation lead: `Clarkware-Lead-01` provisional role ID

## Fields To Fill In With Real Equipment Details

- Instrument vendor: `TBD`
- Instrument model: `TBD`
- Asset ID: `TBD`
- Export file format: `TBD`, CSV preferred
- Export path: `TBD`
- Secondary artifact type: `TBD`, trace image preferred

## Immediate Actions

1. Confirm whether Test Bench A01 is the correct real station label.
2. Confirm whether `Scope-01` maps to the real first oscilloscope or equivalent diagnostics instrument.
3. Replace provisional role IDs with real names.
4. Confirm whether browser-first is acceptable at the station.
5. Confirm whether the first reporting consumer is the supervisor, the quality lead, or both.
