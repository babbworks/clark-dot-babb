# Clarkware Niagara Pilot Demo Script

## Purpose

This script defines a concise investor-facing demonstration for the first Clarkware Niagara pilot. It is designed for a 5 to 10 minute walkthrough.

The goal is not to show every feature. The goal is to show one believable operational loop from workstation activity to evidence capture to messaging to AI support to facility-level visibility.

## Demo Goal

By the end of the demo, an investor should believe five things:

1. Clarkware is tied to real production work, not generic software abstractions.
2. The workstation IPE is a believable operational environment.
3. Evidence from real tools can enter the system with usable context.
4. Human, AI, and remote expert participation are visibly auditable.
5. Management visibility is generated from the same underlying record.

## Demo Setup

Use one prepared Niagara pilot scenario centered on a diagnostics or test workstation.

Recommended demo context:

- facility: Niagara Assembly
- workstation: Test Bench A01
- station type: diagnostics and validation station
- job: board diagnostics or validation run
- issue: anomaly detected during test
- evidence source: bench oscilloscope or equivalent diagnostics instrument with CSV export
- participants: diagnostics technician, remote diagnostics expert, AI summarizer, supervisor

## Demo Flow

### 1. Open The Workstation IPE

Show:

- workstation identity
- active job context
- current tasks or checklist
- note composer
- job-linked conversation pane
- event stream

Narration:

"This is Clarkware as an Integrated Production Environment. It is the workstation environment where the operator can see the job, capture observations, review recent activity, and coordinate with other participants without leaving the context of the work."

### 2. Import Or Capture Test Evidence

Show:

- a test export, trace image, or measurement file being attached or imported
- resulting artifact record
- resulting `test.run.imported` event

Narration:

"The point here is not abstract connectivity. The point is that machine-linked evidence enters the same operational record as the human work around it."

### 3. Capture A Human Observation

Show:

- operator writes a short observation note
- note is linked to workstation and job
- note appears in record and recent history

Narration:

"Clarkware is designed around the idea that operational memory matters. A note is not floating text. It is part of a structured record tied to a real workstation, job, and event history."

### 4. Show Job-Linked Messaging

Show:

- job thread or issue thread
- operator message to remote expert or supervisor
- contextual linkage to job and attached evidence

Narration:

"The messaging layer is not generic chat. It stays tied to the work context so decisions and explanations are reviewable later."

### 5. Show AI Participation

Show:

- AI summarizer posts a recommendation or anomaly summary
- AI identity is visible
- review state is visible
- human accepts, edits, or rejects the suggestion

Narration:

"AI in Clarkware is assistive and auditable. You can see the agent, the context, and the review outcome. That is central to trust."

### 6. Show Remote Expert Participation

Show:

- remote expert enters the issue thread
- expert reviews evidence and adds guidance
- permissions are bounded to the relevant context

Narration:

"Remote participation is controlled. The expert can contribute where needed without gaining broad uncontrolled visibility into the facility."

### 7. Show Facility-Level View

Show:

- manager or quality-facing dashboard
- current job status
- recent imported tests
- unresolved issues
- AI items pending review

Narration:

"This view is derived from the same underlying operational record. It is not a separate reporting process."

## Demo Close

Close with:

"Clarkware starts with a narrow but compounding wedge: workstation-level production environments, machine-linked evidence, job-linked messaging, and auditable AI support. If this wedge works, it becomes the memory and coordination layer of the node."

## Demo Do Not Do

Avoid:

- broad claims about replacing ERP or MES
- showing too many mocked screens without one coherent workflow
- over-emphasizing future architecture instead of present operational value
- allowing AI features to dominate the story

## Demo Success Criteria

A successful demo should leave the viewer believing:

- this can be deployed in a real facility
- the product wedge is narrow enough to build
- the data model and messaging model are coherent
- the software creates trust and visibility rather than only automation theater

## Demo Prep Checklist

- confirm workstation scenario
- confirm artifact import path works
- confirm operator note flow works
- confirm AI summarizer output is relevant and reviewable
- confirm remote expert access works
- confirm facility dashboard reflects the same underlying records
- prepare one backup static screenshot path in case of live demo instability
