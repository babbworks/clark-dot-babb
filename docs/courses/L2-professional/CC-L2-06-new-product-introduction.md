# CC-L2-06: New Product Introduction — DFM, First Articles, and the Pilot Run

**Clark Courses — Level 2: Professional Practice**
Hamilton, Ontario | CLARK Electronics Manufacturing

---

## 1. Course Overview

New product introduction is the highest-leverage activity in electronics manufacturing: decisions made — or not made — in the first weeks of a product's production life determine its cost structure, quality baseline, and manufacturing efficiency for the entire production run. This course examines the NPI process from the CM/EMS perspective, covering how a design moves from a customer's engineering package to a stable, production-released assembly. Topics span DFM and DFA analysis, the mechanics of first article inspection, the discipline of the pilot run, and the change management processes that keep production stable as designs evolve. The course is structured around the practical reality that most quality and cost problems in electronics manufacturing are introduced before the first production board is built — and can be prevented if the right engineering work is done at the right time.

---

## 2. Learning Objectives

- Perform a DFM review of a PCB assembly design, applying component spacing rules, fiducial requirements, panelization criteria, and stencil aperture design implications to identify assembly-risk features.
- Explain the via-in-pad design consideration and recommend the appropriate design rule or mitigation for a via-in-pad scenario involving a BGA.
- Describe the NPI workflow at a CM/EMS shop from design package receipt to production release, identifying the key deliverables and approval gates at each stage.
- Specify the elements of a first article inspection for an IPC Class 2 and a Class 3 assembly, describing how acceptance criteria differ between the two classes.
- Define the purpose and structure of a pilot run and explain how pilot yield data is used to establish process targets and identify process adjustments before volume production.
- Describe the engineering change order (ECO) process in production, identify the types of changes that require re-qualification, and explain the version management disciplines that prevent mixing of different revision levels in production.
- Apply DFT (design for test) principles to evaluate a PCB layout for test point accessibility and identify features required to support flying probe and ICT.

---

## 3. Target Audience

NPI engineers, manufacturing engineers, process engineers, and DFM analysts working at EMS shops or OEM manufacturers. Also appropriate for PCB designers who want to understand the assembly and test consequences of their layout decisions, quality engineers involved in first article inspection and production release, and account managers who manage the NPI relationship between customers and the CM.

---

## 4. Prerequisites

Recommended Level 1 completions:
- CC-L1-01: Introduction to PCB Assembly — How Electronics Gets Built
- CC-L1-02: Soldering Fundamentals — Materials, Metallurgy, and Joints
- CC-L1-03: Quality Fundamentals — IPC Standards, Inspection, and Documentation

Participants who have completed CC-L2-01 (SMT Assembly in Depth) and CC-L2-03 (Inspection and Test) will have the strongest foundation for this course. Basic familiarity with PCB layout concepts (component placement, routing, land patterns) is assumed but not required at an expert level.

---

## 5. Duration and Format

**Duration:** 2 days (16 hours of instruction)
**Format:** Instructor-led classroom with hands-on DFM review exercises using printed or digital PCB fabrication and assembly documentation. Approximately 50% lecture and discussion, 50% structured exercises and case study work. Access to sample Gerber files or ODB++ data, a representative first article inspection package, and an engineering change order log is required for the practical sessions.

---

## 6. Module Outline

### Module 1: Why NPI Deserves Special Treatment — The Cost of Getting It Wrong

**Session 1.1: The Production-Simulation Gap**
Designs that function perfectly in simulation, prototype, and even hand-built engineering samples fail in production for a systematic set of reasons: prototype builds use hand-placed components with manually adjusted solder, avoiding the placement tolerance stack-up of a production machine; prototype stencils are often cut oversized to compensate for design uncertainty; prototype reflow profiles are hand-tweaked for each board. When the design enters production, none of those accommodations exist — the line runs at speed with standard parameters, and every marginal design decision produces a defect. The cost of a DFM problem caught in design review is a comment in a report; the same problem caught in the pilot run is one or more defective boards; caught in volume production it is a yield hit, rework cost, and potential customer delivery impact.

**Session 1.2: The Cost-of-Change Curve in NPI**
The cost of making a design change increases by roughly an order of magnitude at each stage of the product lifecycle: a component change during design review costs an hour of engineering time; the same change during pilot costs stencil rework, AOI program update, and potential re-test; the same change during volume production costs all of those plus production interruption, inventory write-off of the superseded components, and potential customer notification. The NPI process exists to front-load the discovery and resolution of design problems before the cost of change becomes prohibitive. Students map five common DFM issues onto the cost-of-change curve and calculate the cost differential between early and late discovery.

**Session 1.3: The Design Package — What a CM Needs to Build Your Board**
A complete design package for assembly includes: Gerber RS-274X files or ODB++ (the preferred single-file format that includes all design data in a structured database), a Board of Materials with all required fields (see CC-L2-04), an assembly drawing specifying component side(s), orientation conventions, and any special instructions, a test specification (if applicable), and any customer-specific requirements or notes. Incomplete packages — missing assembly drawings, BOMs with unresolved alternates, Gerbers without a complete fab spec — are one of the leading sources of NPI delay. The instructor walks through a checklist for evaluating the completeness of an incoming design package and identifies the most commonly missing elements.

---

### Module 2: DFM — Design for Manufacturability

**Session 2.1: Component Spacing and Land Pattern Standards**
IPC-7351 provides nominal, most, and least land pattern dimensions for standard SMT package types. Adequate component spacing — the clearance between adjacent component bodies and between components and board edges — affects: stencil aperture design (insufficient spacing prevents step-stencil transitions), pick-and-place nozzle access (a component too close to a tall neighbor may be shadowed during pick), reflow thermal uniformity (components in the shadow of a taller neighbor may be under-heated), and AOI inspection angle (components too close together obscure solder joints from the camera). IPC-7351 minimum spacing guidelines (0.25 mm between 0402 bodies, 0.15 mm between 0201 bodies, increasing for taller components) are reviewed against a sample layout. Students identify spacing violations and assess which ones would cause which production problems.

**Session 2.2: Fiducial Placement, Panelization, and Board Edge Clearances**
Fiducial marks must be placed to support both the printer (stencil registration) and the pick-and-place machine (board registration). Two global fiducials minimum are required, placed at opposite corners of the board; local fiducials near fine-pitch components provide additional registration precision for those component regions. Panelization design (V-score, tab-route, or mouse-bite tabs) must support the assembly process: adequate tab strength to survive the reflow conveyor without panel deflection, and clean separation without mechanical stress on nearby components. Board edge clearances (typically 5 mm from component bodies to the edge for SMT lines with conveyor edge supports) ensure that edge components are not damaged by conveyor rails and that the stencil apertures at the board edge are not compromised. Students evaluate a panelization drawing for DFM compliance.

**Session 2.3: Via-in-Pad, Stencil Aperture Implications, and BGA Land Pattern Optimization**
Via-in-pad (VIP) — routing a via directly through a component pad rather than adjacent to it — is increasingly common as board density increases. For non-BGA components, VIP causes solder to wick into the via barrel during reflow, depleting the joint of solder volume and often causing an open or insufficient joint. The IPC-7095 mitigation is via plugging and capping: the via is filled with epoxy and plated over, providing a flat pad surface that performs like a solid pad. For BGAs, via-in-pad under the BGA footprint is common in dense designs; plugged and capped vias under BGA pads are the standard mitigation. BGA land pattern optimization (IPC-7095 SMD vs. NSMD pad definitions) affects the ball collapse geometry and solder joint height after reflow; students work through the trade-offs for a 0.8 mm pitch BGA.

---

### Module 3: DFA and DFT — Design for Assembly and Design for Test

**Session 3.1: Design for Assembly — Component Standardization and Rotation Conventions**
DFA focuses on reducing the assembly complexity of a board without changing its function. Component rotation standardization — specifying that all 0402 resistors on a given board are oriented in a consistent direction — reduces the number of distinct placement program entries and reduces the risk of polarity errors during setup. Minimizing unique component types (consolidating 1% and 5% tolerance resistors of the same nominal value, using a preferred parts list) reduces feeder count, BOM complexity, and kitting errors. Minimizing component count through integration reduces solder joint count and assembly time per board. Students analyze a sample BOM for DFA opportunities and estimate the assembly time savings achievable through specific consolidation actions.

**Session 3.2: Design for Test — Test Points, Boundary Scan Headers, and Coverage**
Every ICT and flying probe test requires physical access to the circuit node being tested, achieved through test pads or component through-hole pads used as test points. IPC-2221 recommends test point pads of 1.0–1.5 mm diameter, on a minimum 2.0 mm grid (1.5 mm for dense designs), accessible from the bottom side of the board for ICT. Via-as-test-point is acceptable for flying probe but must be confirmed as probe-accessible (not tented or plugged). JTAG boundary scan headers (a 2×5 or 2×10 header with the four JTAG signals: TCK, TDI, TDO, TMS, and ground) should be placed on all boards with boundary-scan-capable ICs. Students evaluate a sample board layout for test point density and identify nodes with no test access, proposing DFT changes to close the coverage gaps.

**Session 3.3: Thermal Relief, Ground Plane Considerations, and Stencil Aperture Interaction**
Thermal relief spokes on through-hole pads connected to large copper pours (particularly ground planes) control the heat sinking of the pad during hand soldering and wave soldering. Without thermal relief, the ground plane absorbs heat so rapidly that the pad cannot reach soldering temperature without excessive iron dwell or wave contact time, damaging the board or nearby components. SMT pad thermal relief must be balanced against the need for a solid electrical connection — too much relief increases resistance and affects high-current or RF designs. Stencil aperture design implications of fine-pitch QFP components (0.5 mm pitch or below) are examined: aperture width reduction to prevent bridging (typically 0.8× to 0.9× pad width), the effect of aperture reduction on paste volume, and the compensating effect on joint height for a given paste type.

---

### Module 4: The NPI Workflow at a CM/EMS Shop

**Session 4.1: Design Package Receipt, DFM Review, and Quotation**
The NPI process begins when the CM receives the design package. The first formal output is the DFM report — a written assessment of all design features that carry assembly risk, organized by severity (stop, fix before build; recommend to fix; informational observation) with specific recommendations for each issue. The DFM report is the primary communication vehicle between the CM's engineering team and the customer's design team. Simultaneously, the quotation process uses the BOM, component lead time data, and process routing estimates to produce a manufacturing cost. NPI pricing is typically higher per unit than production pricing because tooling costs, engineering time, and process uncertainty are amortized over a small initial quantity. Students review a sample DFM report and evaluate the quality of the findings and recommendations.

**Session 4.2: Tooling Build — Stencils, Fixtures, AOI Programs, and ICT**
Once the DFM report is accepted and the order placed, the CM builds tooling: the SMT stencil (typically 3–5 working day lead time for laser-cut stainless), pick-and-place program (built from Gerber/ODB++ centroid data and component library), AOI program (built from CAD data and component library, typically requiring post-first-article tuning), and any wave soldering pallets or selective soldering programs required. If ICT is in scope, fixture design and fabrication is on the critical path — 3–6 weeks for most fixtures — and must be initiated early in the NPI cycle. The ICT test program development runs in parallel with fixture fabrication and requires the board net list and component library. Students map all tooling items onto a sample NPI Gantt chart and identify the critical path.

**Session 4.3: Engineering Sign-Off and Production Release**
Production release is the formal authorization to begin volume production. It follows: successful first article build and FAI sign-off, resolution of all open DFM issues (or formal waivers for issues accepted with risk acknowledged), tooling qualification (stencil print verification, pick-and-place offset study, AOI program tuning), and test program sign-off. The production release document captures the approved process parameters, tooling part numbers, component revision levels, and any standing process notes — it becomes the baseline against which all subsequent production is controlled. Re-qualification is triggered by changes to any of these baseline elements. Students review a sample production release checklist and identify the items most likely to be incomplete in a real NPI handoff.

---

### Module 5: First Article Inspection — What It Is and What It Must Prove

**Session 5.1: First Article Inspection Purpose and Structure**
The first article inspection (FAI) is the formal verification that the first complete assembly produced by the production process meets all design requirements. It is not the same as a production inspection: the FAI inspects everything — not a statistical sample, but the complete assembly, to every requirement in the drawing and specification. A first article is built using production tooling (the actual stencil, the actual production pick-and-place program, the actual reflow oven profile) and production materials (production BOM components, not engineering samples). The FAI report documents the result of each inspection and test activity against each specified requirement, and it is signed off by both the CM's engineering representative and (for Class 3 or aerospace/medical products) the customer's quality representative.

**Session 5.2: IPC Class 2 vs. Class 3 First Article Acceptance Criteria**
IPC-A-610 Class 2 and Class 3 acceptance criteria differ in several critical dimensions for FAI. Through-hole barrel fill (50% Class 2, 75% Class 3), solder fillet requirements (Class 3 requires side fillet on QFP leads where Class 2 does not mandate it), BGA void acceptance limits (Class 3 tighter per IPC-7095), and conformal coating coverage requirements (Class 3 may require X-ray or cross-section verification of coating coverage under low-standoff components) are key differences. Students work through a side-by-side comparison of the acceptance criteria for five joint types (SMT resistor, QFP lead, BGA ball, through-hole pin, and hand-soldered connector) under Class 2 and Class 3, documenting the specific criterion difference for each.

**Session 5.3: FAI Report Structure, Sign-Off, and the FAI-to-Production Handoff**
The FAI report should be structured to align with the assembly drawing and specification, recording each requirement as a line item with the inspection result and accept/reject determination. Supporting evidence (photographs, measurement data, test logs) is attached or referenced. The sign-off process: the CM's quality engineer completes the report; the NPI engineer reviews and concurs; the customer quality representative reviews for Class 3 products. Conditional sign-off (signing with open items tracked) is common when minor discrepancies are found but are not product-safety or functional defects. The FAI report, once signed, becomes part of the permanent product quality record — for medical and defense products, it must be retained for the life of the product. Students evaluate a sample FAI report for completeness and identify three issues with the documentation quality.

---

### Module 6: The Pilot Run and ECO Management

**Session 6.1: Pilot Run Purpose, Structure, and Yield Analysis**
The pilot run is a small production lot (typically 5–50 units) built under production conditions but with heightened monitoring and engineering support present on the floor. Its purpose is to validate the process before committing to full production: to confirm that the DFM fixes implemented after the first article actually solve the problems, to identify any defect modes not apparent in the FAI single unit, and to generate yield data for process baseline establishment. Every defect in the pilot run is documented, root-caused, and dispositioned — not just reworked and shipped. The defect data from the pilot drives the process adjustment decisions (aperture tweaks, profile adjustments, component library updates) that determine the production first-pass yield.

**Session 6.2: Lessons-Learned Documentation and Process Baseline**
After the pilot run, the NPI team produces a lessons-learned document capturing: every defect type observed, the root cause conclusion, the corrective action taken, and the process change implemented. This document serves as the institutional memory of the NPI — it is the information that prevents the same problems from recurring on the next revision or the next production start after a line shutdown. The process baseline (confirmed stencil parameters, reflow profile, pick-and-place program revision, AOI threshold settings) is recorded in the work instructions and process control plan. Students draft a sample lessons-learned entry for three hypothetical pilot run defects and discuss the difference between a useful lessons-learned entry and a formulaic one.

**Session 6.3: Engineering Change Orders in Production — Change Control and Re-Qualification**
An ECO is a formal document authorizing a change to the approved design, BOM, or process of a product in production. ECOs arise from: customer-initiated design changes (component substitution, layout revision, firmware update), supplier-driven changes (manufacturer part number change, EOL substitution, packaging change), and CM-initiated process improvements. Every ECO must answer: what is changing, why is it changing, what is the impact on form/fit/function, what re-qualification is required, and when does the change take effect in production. Version management — ensuring that production is building to a single, clearly identified revision level with no mixing of old and new components or stencils — is the most common failure mode in ECO management. Students trace a simulated ECO through the change control process, identifying each decision point and its potential failure mode.

---

## 7. Key Terms and Concepts

**DFM (Design for Manufacturability)** — The practice of designing a product so that it can be manufactured reliably and efficiently at acceptable cost; in PCB assembly, focuses on component spacing, land patterns, panelization, and stencil aperture design.

**DFA (Design for Assembly)** — The practice of designing a product to minimize assembly complexity, typically by reducing unique component count, standardizing orientations, and simplifying the assembly process sequence.

**DFT (Design for Test)** — The practice of designing a PCB to maximize the coverage and efficiency of electrical test, including test point placement, boundary scan header inclusion, and ICT-compatible pad design.

**ODB++** — A single-file design data format that packages all PCB fabrication and assembly information in a structured database, enabling complete machine-readable transfer of design intent to manufacturing.

**Fiducial mark** — A precisely etched copper reference mark on a PCB used by automated assembly equipment to establish a coordinate reference frame for component placement; required on all SMT boards.

**Via-in-pad (VIP)** — A PCB design feature where a plated-through via is placed within the land area of a component pad; requires plugging and capping to prevent solder drainage during reflow.

**IPC-7351** — The IPC standard for land pattern design for surface-mount components; provides nominal, most-material, and least-material land pattern dimensions for all standard SMT package types.

**First Article Inspection (FAI)** — A comprehensive documented inspection of the first production assembly to verify conformance to all design requirements; uses production tooling and materials.

**Pilot run** — A small production build, under heightened engineering monitoring, conducted after first article sign-off to validate process performance at production conditions and establish the defect and yield baseline before volume production.

**Production release** — The formal authorization to begin volume production of a product, issued after successful FAI, process qualification, and tooling validation.

**ECO (Engineering Change Order)** — A formal document authorizing and controlling a change to a product design, BOM, or manufacturing process; includes impact assessment and re-qualification requirements.

**Device Master Record (DMR)** — In medical device manufacturing, the controlled documentation package specifying how a device is to be manufactured, including drawings, specifications, process procedures, and quality plans.

**Stencil step** — A stencil with two different thicknesses in different regions, achieved by etching or machining; used to accommodate different paste volume requirements for large and fine-pitch components on the same board.

**NSMD (Non-Solder Mask Defined) pad** — A BGA land pattern in which the solder mask opening is larger than the copper pad; the pad edge defines the ball attachment geometry, providing better standoff height and self-centering during reflow.

**SMD (Solder Mask Defined) pad** — A BGA land pattern in which the solder mask opening is smaller than the copper pad; the mask edge defines the ball attachment geometry, providing a controlled smaller contact area with lower reliability for fine-pitch BGAs.

---

## 8. Instructor Notes

The DFM review exercises in Module 2 are the core hands-on content of this course. They require real PCB documentation — ideally ODB++ data or Gerbers with assembly drawings from an actual product. The Clark facility's NPI archive should contain suitable examples from past projects; any customer-identifying information should be removed but the design data itself is the valuable teaching resource. Instructors should pre-select two or three boards that have known DFM issues (some identified and corrected, some that made it into production and caused problems) to use as training material.

The cost-of-change curve exercise in Module 1 Session 2 benefits from the instructor sharing real data if available — real numbers about what a DFM escape cost in rework time, stencil replacement, or yield loss are far more impactful than hypothetical figures. If the Clark facility tracks NPI rework costs, even anonymized summary data is valuable.

The ECO management discussion in Module 6 frequently generates strong reactions from participants with production experience, because ECO management failures are one of the most frustrating and costly recurring problems in production environments. Reserve time for this discussion — it often runs long because participants have strong opinions and real stories to share. The most important points to reinforce: version control is a discipline, not a system; systems fail when the discipline to use them breaks down; and the most dangerous ECO is the one that "doesn't need formal paperwork" because it's a small change.

The FAI sign-off exercise should use a real FAI report — even a simplified one — because the format and documentation discipline of a real FAI is not intuitive from a description. If the Clark facility has produced FAI reports for past products, a sanitized version is ideal teaching material.

Instructors without direct NPI floor experience should spend time with the Clark NPI team before delivering this course. The NPI workflow module in particular contains content that is best taught by someone who has personally managed the stencil-to-first-article cycle. If the instructor has a process or quality background but not NPI specifically, arrange for a short panel or Q&A with the NPI team as part of the module.

---

## 9. Hands-On and Discussion Exercises

### Exercise 1: DFM Report Writing

Participants receive a printed assembly drawing and Gerber plot (or ODB++ viewer screenshot set) for a representative board with at least six embedded DFM issues spanning: a component spacing violation near a fine-pitch QFP, a missing fiducial on a high-density section, a via-in-pad under a BGA with no plugging specification, an unspecified stencil thickness with an 01005 component and a large connector footprint on the same board, a test point on a 1.0 mm grid that will not support ICT, and a panelization V-score that runs too close to an edge component. Working in pairs, participants must write a DFM report entry for each issue following the format: issue description, location (reference designator or coordinates), severity classification, recommended corrective action, and consequence if not corrected. Reports are peer-reviewed against a reference answer key and discussed as a class.

### Exercise 2: NPI Gantt and Critical Path Analysis

Participants receive a product brief: a new IoT module with a BGA, mixed SMT and through-hole, ICT required, Class 2 assembly, 8-week target from order receipt to production release. They are given a list of NPI activities with standard durations (design package review: 2 days; DFM report: 3 days; customer DFM response: 5 days; stencil fabrication: 5 days; pick-and-place programming: 2 days; AOI programming: 3 days; ICT fixture design: 10 days; ICT fixture fabrication: 15 days; ICT test program development: 8 days; first article build: 1 day; FAI report: 2 days; customer FAI sign-off: 3 days; pilot run: 2 days; production release: 1 day). Participants build a Gantt chart, identify the critical path, and determine whether the 8-week target is achievable. If not, they identify which activities could be compressed or run in parallel and what the minimum achievable timeline is.

### Exercise 3: ECO Impact Assessment

Participants receive a scenario: a product is in volume production (200 units/week) at revision C. The customer has issued ECO-047, which changes one resistor value (R23 from 10K to 4.7K) and replaces a PWM controller IC (U12, old MPN, new MPN from a different manufacturer with a footprint and pin-compatible but different internal configuration). Participants must complete an ECO impact assessment form answering: what process changes are required (BOM update, pick-and-place program update, AOI library update, test program update), what re-qualification steps are required (class of change: form/fit/function impact), when the change takes effect in production (at what build lot), what happens to the inventory of old R23 and old U12 components, and whether any customer notification or approval is required before implementation. The class compares assessments and discusses the version management controls needed to prevent old-revision components from being mixed into new-revision builds.

---

## 10. Assessment Suggestions

**DFM Report Assessment:** Participants submit the DFM report written in Exercise 1 (or an equivalent exercise on a different board) for formal evaluation. Evaluated on: identification of all significant DFM issues (scoring per issue found vs. reference list), severity classification accuracy, quality and specificity of recommended corrective actions, and professional report format.

**NPI Process Knowledge Quiz:** 20 questions covering: design package completeness requirements, DFM rule thresholds (area ratio, fiducial requirements, test point grid), FAI structure and content, difference between first article and pilot run, and ECO classification criteria. Mix of multiple choice and short answer. Evaluated on accuracy and demonstrated understanding of the rationale behind each requirement.

**ECO Scenario Written Assessment:** Each participant receives an ECO scenario (different from the in-class exercise) involving a PCB layout change that adds two new components and removes one, with a statement that the change "should not affect the assembly process." Participants must write a one-page impact assessment arguing either that the statement is correct (with specific justification) or that it is incorrect (with specific identification of each affected process step and required action). Evaluated on thoroughness of impact identification and quality of reasoning.

---

## 11. Recommended Resources

- IPC-7351: Generic Requirements for Surface Mount Design and Land Pattern Standard (current revision)
- IPC-2221: Generic Standard on Printed Board Design — spacing rules, via design, test point requirements
- IPC-7095: Design and Assembly Process Implementation for BGAs — via-in-pad, land pattern options, void criteria
- IPC-A-610: Acceptability of Electronic Assemblies — Class 2 and Class 3 acceptance criteria for all joint types
- IPC-7711/7721: Rework, Modification and Repair of Electronic Assemblies — ECO rework guidance
- IPC-2581: Design Transfer Format — ODB++ and IPC-2581 design package standards
- Valor DFM Software (Siemens EDA) — industry-standard DFM analysis tool; documentation and application notes available
- Mentor Graphics / Siemens EDA: *DFM and Process Optimization for PCB Assembly* — application white papers
- Gary Ferrari and others, *NPI (New Product Introduction) Best Practices* — SMTA technical papers on NPI process optimization
- IPC APEX Expo Proceedings — annual conference with extensive NPI, DFM, and process engineering content (ipc.org)
- Zulki Khan, *Minimizing and Controlling Warpage of BGA and CSP Assemblies* — SMTA technical paper on BGA DFM
- SMTA (smta.org) — NPI and DFM technical papers from SMTAI and APEX proceedings
- IPC-J-STD-001 — soldering requirements; relevant for understanding process constraints driving DFM rules
