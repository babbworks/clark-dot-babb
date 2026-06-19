# IPE Principles

These are the rules that should govern product and architecture decisions.

## 1. Workflow before tooling

Build around what people do at the bench, not around a tool catalog.

## 2. Evidence first

Every important action should leave a usable record:

- job context
- artifact
- note
- timestamp
- actor
- station
- result

## 3. Station centric

The unit of work is not just a project or repo.
It is a station doing a job with equipment, procedures, and evidence.

## 4. Open by default

Prefer formats and protocols that are inspectable and portable:

- Markdown
- JSON
- YAML
- CSV
- Git
- standard file system paths

## 5. Separate shell from domain logic

Theia should provide the shell and interaction layer.
Industrial behavior should live in focused services and extensions.

## 6. Keep the first wedge narrow

The first release should win one real workflow first.
Electronics assembly, firmware flashing, and repair are the wedge because they are repetitive, evidence-heavy, and already structured enough to model well.

## 7. Make the system auditable

Users should be able to see what happened and why.
Hidden side effects are a defect.

## 8. Make AI subordinate to the record

AI may summarize, suggest, and draft.
It should not blur provenance or overwrite the chain of evidence.

## 9. Prefer reusable primitives

Build capabilities that can serve multiple workflows:

- jobs
- jobs threads
- stations
- procedures
- artifacts
- equipment
- reviews
- exports

## 10. Stay extensible

The first useful product should also be a platform for later industrial domains.

