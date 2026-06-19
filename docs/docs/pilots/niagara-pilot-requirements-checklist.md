# Niagara Clarkware Pilot Requirements Checklist

## Purpose

This checklist converts the Niagara Clarkware pilot plan into concrete preparation and delivery requirements.

## 1. Pilot Scope Confirmation

- Confirm the first pilot workstation.
- Recommended: Test Bench A01 as a diagnostics and validation station.
- Confirm the pilot workstation label and station type.
- Confirm the first operational workflow to demonstrate.
- Confirm the first test-tool or diagnostics integration target.
- Recommended: bench oscilloscope or equivalent diagnostics instrument with CSV export.
- Confirm that the pilot will stay limited to one station for initial proof.

## 2. Pilot User Confirmation

- Identify 1 to 2 daily workstation users.
- Recommended profile: 1 diagnostics / test technician and 1 production-support technician.
- Identify 1 supervisor or production lead.
- Identify 1 quality reviewer.
- Identify 1 remote expert.
- Recommended profile: firmware-aware diagnostics expert or senior test engineer.
- Identify 1 AI agent role for the pilot.
- Confirm who owns pilot signoff at Niagara Assembly.

## 3. Workstation Requirements

- Confirm workstation hardware baseline.
- Confirm operating system and browser or desktop-client path.
- Confirm local file access expectations.
- Confirm image capture path if images are part of the pilot.
- Confirm network availability and expected disconnection edge cases.

## 4. Software Requirements

- Deploy first IPE shell.
- Enable job context view.
- Enable note composer and note history.
- Enable artifact attachment flow.
- Enable event stream view.
- Enable job-linked messaging.
- Enable AI summary pane or AI recommendation surface.

## 5. Messaging Requirements

- Stand up XMPP server or XMPP-aligned messaging service.
- Create identities for pilot humans.
- Create identity for pilot AI agent.
- Create identity for first integration adapter if needed.
- Create workstation channel.
- Create job-thread model.
- Create issue escalation thread path.
- Confirm review-state handling for AI-generated recommendations.

## 6. Integration Requirements

- Confirm first tool or instrument to integrate.
- Confirm integration mode: watched folder, file import, serial, or network adapter.
- Confirm expected file formats or output schema.
- Confirm artifact naming and storage rules.
- Confirm mapping from imported outputs to `Artifact` and `Event` objects.
- Confirm error-handling path for failed imports.

## 7. Data And Audit Requirements

- Confirm canonical IDs for facility and workstation.
- Confirm job creation path for pilot scenarios.
- Confirm note, message, and event retention expectations.
- Confirm audit requirements for AI recommendations.
- Confirm export package contents for owner review.
- Confirm backup path for pilot artifacts and records.

## 8. Permission Requirements

- Confirm facility-level admin users.
- Confirm workstation-scoped operator permissions.
- Confirm job-scoped remote expert permissions.
- Confirm quality reviewer permissions.
- Confirm bounded AI permissions.
- Confirm export permissions.

## 9. Reporting Requirements

- Define the first manager or quality-facing reporting view.
- Recommended first view: active jobs, recent test imports, open issues, unresolved recommendations, and items awaiting human review.
- Confirm required fields in that view.
- Confirm issue and exception visibility requirements.
- Confirm whether AI pending-review items should appear in the reporting surface.
- Confirm what counts as pilot success in the reporting layer.

## 10. Demo Requirements

- Prepare one end-to-end live pilot scenario.
- Prepare one test artifact import example.
- Prepare one operator note example.
- Prepare one AI summary or recommendation example.
- Prepare one remote expert interaction example.
- Prepare one facility-level reporting example.
- Prepare one fallback static demo path in case live systems fail.

## 11. Success Metrics

- Define minimum number of live jobs for pilot credibility.
- Define target percentage of jobs with contextual notes.
- Define target percentage of jobs with attached artifacts.
- Define target response time for issue-thread escalation.
- Define target review rate for AI recommendations.
- Define exportability success criteria.

## 12. Exit Criteria

- Real workstation use is demonstrated.
- At least one evidence-import path is stable.
- Job-linked messaging is operating.
- Human and AI actions are visibly distinct.
- Facility reporting is generated from underlying records.
- Owner-accessible export is demonstrated.

## 13. Open Decisions To Resolve

- Which exact Niagara instrument is first.
- Which two human users are first operators.
- Which remote expert role enters first.
- Which exported file format is the first stable integration target.
- How many real jobs are needed before investor demonstration.
