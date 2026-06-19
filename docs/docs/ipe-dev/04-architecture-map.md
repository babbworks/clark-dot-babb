# Architecture Map

This is the preferred mental model for the IPE architecture.

## Layer 1: Theia shell

Theia should provide:

- workspace and file navigation
- dockable panels and views
- command palette and shortcuts
- editors
- terminal access
- extension hosting
- browser and desktop delivery options

This layer should stay thin.

## Layer 2: Industrial domain services

The IPE needs domain-specific services for:

- jobs and work orders
- procedures and documentation
- equipment and station registry
- evidence and artifact capture
- flashing and tool execution
- test result ingestion
- notes and collaboration
- search and retrieval
- exports and reporting

## Layer 3: Adapters and integrations

This layer connects the workbench to the real bench:

- serial and USB tools
- firmware flashing tools
- watched folders and file imports
- test equipment exports
- Git repositories
- local databases
- remote services where needed

## Layer 4: Data and records

Use the right storage shape for the job:

- Git for versioned docs, procedures, and configuration
- plain text formats for human-reviewable records
- database tables for transactional state
- artifact storage for logs, images, binaries, and exports
- event logs for time-ordered provenance

## Likely Theia responsibilities in `v2ww`

The current `v2ww` app should be treated as the implementation vehicle for the shell plus extension layer.

It likely owns:

- Theia app packaging
- browser and desktop shell configuration
- custom widgets and views
- workspace behavior
- frontend/backend extension wiring

## What should not live in Theia widgets

- business rules
- audit logic
- artifact indexing
- data normalization
- device protocol adapters

Those belong in services or backend modules.

## Design rule

If a feature becomes hard to test because it is trapped inside the UI, it is in the wrong layer.

