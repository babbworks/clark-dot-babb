# Niagara Assembly Clarkware Pilot v1

## Purpose

This document defines the first Niagara Assembly pilot for Clarkware. Its purpose is to prove that Clarkware can operate credibly inside a real facility environment and produce technical evidence that matters to operators, managers, and investors.

The pilot should be narrow, instrumented, and operationally honest.

## Pilot Objectives

The Niagara pilot should prove six things:

1. A workstation-level IPE can be used in real daily work.
2. Production-relevant notes and conversations can be captured without excessive friction.
3. At least one testing-tool path can feed durable evidence into the Clarkware record.
4. Human, AI, and automation actions can be distinguished and audited clearly.
5. Remote expert participation can be useful without weakening on-site control.
6. Facility-level reporting can be generated from real workstation activity rather than manual summary reconstruction.

## Recommended Pilot Scope

The first pilot should focus on one diagnostics, test, or calibration-linked workstation at Niagara Assembly.

Recommended characteristics of the first station:

- regular test activity
- repeatable artifact generation such as files, trace images, or exported results
- existing need for notes and handoffs
- plausible remote expert involvement
- manageable number of daily users

Current recommendation:

- use Test Bench A01 as the first pilot station
- treat it as a diagnostics and validation station for board-level testing and troubleshooting
- use `Scope-01`, a provisionally identified bench oscilloscope or equivalent diagnostics instrument with CSV export, as the first evidence path
- start with watched-folder or structured file import rather than deep direct machine control

This is a stronger first proof point than attempting broad shop-floor coverage immediately.

## Proposed Pilot Workstation Profile

Working label:

- `Test Bench A01`

Suggested workstation type:

- diagnostics and validation station for board-level testing and troubleshooting

## Pilot Personas

Primary pilot users:

- `Niagara-Test-Tech-01` provisional role ID at the bench
- `Niagara-Prod-Support-01` provisional role ID for production-support context
- `Niagara-Supervisor-01` provisional role ID
- `Niagara-Quality-01` provisional role ID
- `Remote-Diagnostics-01` provisional role ID
- 1 AI summarizer or routing agent

## Pilot Deliverables

The pilot should produce:

- a functioning workstation IPE
- job-linked threads and note capture
- at least one working test-tool evidence adapter
- artifact capture for files and images
- visible AI summary or routing support
- one facility-level manager view derived from pilot activity
- an exportable record set for owner review

## Pilot System Components

### Workstation IPE

The station should run a Clarkware IPE that includes:

- current job view
- note composer
- artifact attachment area
- job thread view
- event stream view
- AI summary pane

### Messaging

The pilot should include:

- one workstation channel
- one job-thread model
- one issue escalation path
- one remote expert access path
- one AI summarizer identity

### Integration Adapter

The pilot should include at least one test-tool integration path using one of these mechanisms:

- watched export folder
- structured file import
- serial adapter
- network adapter

The recommended default is watched-folder or structured file import because it is usually the fastest path to real evidence capture with lower integration risk. For Niagara, the first target should be a bench oscilloscope or equivalent diagnostics instrument that can reliably export CSV results or trace-linked files.

### Reporting View

The pilot should include one manager or quality-facing view that shows:

- active jobs
- recent test imports
- open issues
- recent notes
- unresolved recommendations
- items awaiting human review

## Pilot Data Model Usage

The Niagara pilot should fully exercise these data objects:

- Facility
- Workstation
- Job
- Issue
- Conversation
- Message
- Note
- Event
- Tool
- Artifact
- Person
- Agent
- PermissionGrant

It does not need to exercise every eventual Clarkware object in depth.

## Example Pilot Workflow

1. Operator opens active job in the IPE.
2. Operator runs a test or imports a test export from the station's instrument.
3. Clarkware records a `test.run.imported` event and stores the artifact.
4. Operator adds an observation note linked to the job and workstation.
5. AI summarizer generates a short recommendation or anomaly summary.
6. Remote expert reviews the evidence in the issue thread.
7. Supervisor accepts, edits, or rejects the recommendation path.
8. Facility reporting view updates automatically from the underlying record.

## Success Metrics

The pilot should be judged on operational truthfulness, not vanity metrics.

Recommended success measures:

- number of real jobs processed through the IPE
- percent of pilot jobs with notes captured in context
- percent of pilot jobs with attached evidence artifacts
- number of meaningful test imports captured automatically or semi-automatically
- median time from issue creation to expert response
- percent of AI recommendations explicitly accepted, edited, or rejected
- percent of pilot records exportable without manual cleanup
- user-reported friction for note capture and handoff activity

## Minimum Demonstration Threshold

The pilot should not be called successful unless it demonstrates:

- repeated use across multiple real jobs
- at least one stable evidence import path
- durable job-linked messaging
- visible distinction between human and AI actions
- one manager-facing or quality-facing reporting surface built from live pilot data

## Risks

### 1. Over-Scope Risk

Trying to cover too many stations or too many machine integrations too early will weaken the pilot.

### 2. Workflow Avoidance Risk

If the interface adds too much friction, operators will route around it and the pilot will produce false confidence.

### 3. Messaging Without Context Risk

If conversations are not tightly linked to jobs and issues, the pilot will recreate ordinary chat fragmentation rather than solving it.

### 4. AI Credibility Risk

If AI outputs are noisy, poorly scoped, or unauditable, they will reduce trust instead of increasing it.

### 5. Reporting Theater Risk

If dashboards are hand-curated rather than generated from underlying events, the pilot will not prove the product thesis.

## Pilot Build Sequence

### Week 1 To 2

- confirm pilot station
- confirm pilot users
- confirm first test-tool integration path
- configure workstation identity and basic permissions

### Week 3 To 4

- deploy first IPE shell
- deploy note capture and job thread model
- implement artifact storage and evidence attachment flow
- stand up XMPP messaging for the pilot scope

### Week 5 To 6

- implement first automated or semi-automated test import
- implement AI summarizer for pilot threads
- implement issue escalation flow
- validate export behavior and audit logging

### Week 7 To 8

- run repeated live-job usage
- review operator friction
- refine reporting view
- document lessons and next-station rollout requirements

## Exit Criteria

The Niagara pilot is complete when CLARK can show:

- a real workstation IPE in use
- a coherent record spanning notes, messages, artifacts, and events
- a credible test-tool evidence path
- bounded useful AI participation
- facility-level visibility generated from the same underlying record

## Open Pilot Questions

- Which specific Niagara test instrument should be used first?
- Which two human users should be the first daily operators?
- Which remote expert role is most likely to produce visible value early?
- Which exported file format is the fastest stable integration target?
- What minimum number of live jobs is enough to make the pilot believable to investors?
