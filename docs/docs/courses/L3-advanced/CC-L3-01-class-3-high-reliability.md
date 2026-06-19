# CC-L3-01: Class 3 Workmanship — High-Reliability Standards for Defense and Aerospace

**Clark Courses — Level 3: Advanced Topics**
**Facility:** Clark, Hamilton, Ontario
**Course Code:** CC-L3-01

---

## 1. Course Overview

This course examines what Class 3 workmanship means in practice — not simply as a stricter version of Class 2, but as a fundamentally different operational philosophy built on the premise that failure in the field is unacceptable. Students explore the full IPC-A-610 and J-STD-001 Class 3 criteria in detail, tracing how those requirements cascade through every stage of the manufacturing process: material selection, paste printing, placement, reflow profiling, inspection, rework authorization, conformal coating, and documentation. The course addresses the human and organizational dimensions of high-reliability manufacturing — the certification roles, the approval chains, and the traveler-based process control that make Class 3 work auditable. Real field failure case studies ground the technical content in the consequences of getting it wrong.

---

## 2. Learning Objectives

By the end of this course, participants will be able to:

- Distinguish Class 3 acceptance criteria from Class 2 criteria across solder joint, component damage, board damage, marking, and cleanliness categories as defined in IPC-A-610
- Explain how J-STD-001 Class 3 process requirements affect solder paste selection, print parameter tolerances, reflow profile design, and in-process monitoring frequency
- Describe the complete documentation trail required for a Class 3 assembly from first article inspection through shipment, including traveler sign-offs and inspection records
- Evaluate a rework scenario against IPC-7711/21 procedures and explain what approvals and documentation are required before and after rework on a Class 3 assembly
- Identify the conformal coating requirements applicable to Class 3 assemblies and explain how coating type, coverage, and inspection are managed
- Trace a real or hypothetical field failure back through workmanship categories to identify the process control gap that allowed it
- Explain the roles of IPC Certified IPC Specialist (CIS) and Certified IPC Trainer (CIT) in a Class 3 manufacturing environment and the organizational value each provides

---

## 3. Target Audience

This course is designed for process engineers, quality engineers, manufacturing engineers, production supervisors, and inspection personnel working in — or transitioning into — defense, aerospace, or medical electronics manufacturing. It is also appropriate for program managers and customer-facing technical staff at EMS companies who regularly deal with Class 3 customer requirements and need to understand what they are committing to when they accept a Class 3 contract. IPC-CIS or CIT candidates will find this course directly preparatory.

---

## 4. Prerequisites

**Recommended prior courses:**

- CC-L1-03: Soldering and the Solder Joint (or equivalent)
- CC-L1-04: Inspection Basics and IPC-A-610 Overview (or equivalent)
- CC-L2-02: SMT Process — Paste, Placement, and Reflow (or equivalent)
- CC-L2-05: Quality Systems and Process Control (or equivalent)

Participants should be comfortable reading IPC acceptance criteria tables and have a working understanding of the SMT process flow. Some background in defense or aerospace manufacturing is helpful but not required.

---

## 5. Duration and Format

**Duration:** 2 days (approximately 14 instructional hours)

**Format:** Instructor-led classroom with physical sample review, document exercises, and case study discussion. IPC-A-610 and J-STD-001 standards documents should be available to participants during the session (either physical copies or licensed PDF access). Soldered board samples at Class 2 and Class 3 acceptance thresholds are strongly recommended as props.

---

## 6. Module Outline

### Module 1: The Philosophy of Class 3 — Why It Exists and What It Demands

**Session 1.1: From Class 2 to Class 3 — Not Just Tighter Tolerances**

Class 3 is not simply Class 2 with smaller numbers. It represents a fundamentally different relationship between the manufacturer and the consequences of failure. This session opens with the IPC classification framework — Class 1 (general electronics), Class 2 (dedicated service), Class 3 (high reliability) — and then presses into what "high reliability" actually means operationally. The philosophical shift is this: in Class 2, some defects are acceptable because rework is possible and field consequences are bounded; in Class 3, the cost of a field failure in a cardiac defibrillator or fly-by-wire flight controller is so severe that the entire manufacturing system must be designed to prevent defects from escaping, not just to catch them. Participants examine the formal definition of Class 3 in IPC-A-610 and J-STD-001 and trace what it implies for process design.

**Session 1.2: Where Class 3 Hardware Lives — End Markets and Consequence Analysis**

This session surveys the end markets for Class 3 electronics: military avionics, missile guidance, aircraft fly-by-wire systems, satellite electronics, implantable and life-sustaining medical devices, and critical industrial control. For each category, participants work through a consequence analysis: what happens if the assembly fails in service? The goal is not to frighten but to calibrate — manufacturing decisions that seem minor (a borderline solder joint accepted on an expedited shipment, a rework not documented) acquire their proper weight when consequence is understood. The session includes a review of publicized field failures with confirmed workmanship root causes, drawn from defense safety reports and FDA enforcement actions.

---

### Module 2: IPC-A-610 Class 3 Acceptance Criteria in Depth

**Session 2.1: Solder Joint Criteria at Class 3**

This session works through the IPC-A-610 solder joint acceptance criteria for Class 3, category by category: through-hole solder joints (hole fill percentage, vertical fill, solder fillet geometry), SMT chip components (end-cap coverage, side-overhang limits, toe-and-heel fillets), gull-wing leads (toe length, side fillet height, contact angle), J-leads, and BTC/QFN. The instructor should use the actual standard tables alongside photographic examples. Key contrasts with Class 2 are highlighted explicitly — not as a memorization exercise but to illustrate the logic behind each delta. Participants practice classifying sample photographs of solder joints against Class 3 criteria.

**Session 2.2: Component Damage, Board Damage, Marking, and Cleanliness Criteria**

Beyond solder joints, Class 3 has specific acceptance criteria governing component body damage (case cracking, broken leads, delamination, deformation), PCB surface damage (measling, crazing, scratches, lifted lands, delamination), legend and marking integrity (IPC requires markings to be legible and permanent), and cleanliness (residue types, distribution, and the permitted residues under no-clean process — which at Class 3 may be more constrained than at Class 2). This session covers each category with the same use-the-standard-document approach. The cleanliness section introduces ionic contamination testing (ROSE test, SIR testing, localized extraction) as the measurement tools that underlie cleanliness acceptance.

---

### Module 3: J-STD-001 Class 3 Process Requirements

**Session 3.1: Solder Paste Selection and Print Process at Class 3**

J-STD-001 Class 3 requirements begin with materials. This session covers solder alloy selection for Class 3 — including the argument for higher silver content SAC alloys (SAC305, SAC405) for better thermal fatigue resistance in aerospace environments, and the continued use of SnPb in MIL-spec and NASA Class 3 work where lead-free exceptions are invoked. Solder paste type (Type 3, Type 4, Type 5), flux activity classification (ROL0, ROM0, REL0, REM0 at Class 3), and paste print parameter tolerances are addressed: aperture-to-pad alignment, stencil wipe frequency, paste volume measurement (2D vs 3D SPI), and the tighter SPI acceptance windows appropriate for Class 3 work.

**Session 3.2: Placement Tolerances, Reflow Profiling, and In-Process Monitoring**

Placement accuracy at Class 3 is governed both by IPC acceptance criteria (the landing must meet Class 3 criteria after reflow) and by the process capability required to reliably achieve it. This session addresses pick-and-place machine capability requirements, vision system calibration, and nozzle condition monitoring for Class 3 work. Reflow profiling receives detailed treatment: the J-STD-001 Class 3 requirements for profile documentation, thermocouple placement, profile qualification runs, and production monitoring (frequency of profile checks, thermocouple board requirements). The concept of the "narrow process window" at Class 3 — and why it demands more monitoring, not less — is developed through worked examples.

---

### Module 4: Inspection, Conformal Coating, and ESD/Handling

**Session 4.1: Inspection Frequency and Methods at Class 3**

Class 3 does not permit sampling-based inspection at the same rates as lower-class work. This session covers the inspection touch-points in a Class 3 flow: SPI after print, AOI after placement (optional but common), post-reflow AOI, manual visual inspection (MVI) requirements, X-ray inspection for hidden joints (BGA, QFN thermal pads), and the use of 3D AOI. The qualification requirements for inspectors in a Class 3 environment — IPC-A-610 CIS certification, documented training, eye examination records — are covered. The session also addresses the distinction between in-process inspection (which controls the process) and final inspection (which certifies the assembly), and why the two serve different functions.

**Session 4.2: Conformal Coating at Class 3**

Conformal coating requirements at Class 3 are driven by IPC-CC-830 (qualification) and IPC-A-610 acceptance criteria for coated assemblies. This session covers the coating materials in common use (acrylic, urethane, silicone, epoxy, parylene), their relative strengths and weaknesses, and the process methods (spray, selective spray, dip, brush). Class 3 acceptance criteria for coating coverage (no voids over specified areas, coating thickness), the areas that must not be coated (connectors, test points, heat-generating components), and the UV inspection method are addressed. The session includes a brief treatment of masking — both liquid dispensed mask and tape-and-plug — because masking quality is a significant failure mode in conformal coating.

**Session 4.3: ESD and Handling Requirements at Class 3**

ESD handling requirements at Class 3 are not categorically different from Class 2, but they are applied more rigorously and the audit trail must be more complete. This session covers the ANSI/ESD S20.20 program elements as they apply to Class 3 work: EPA design and verification, wriststrap and footwear testing frequency and records, packaging requirements for Class 3 assemblies, handling after conformal coating (additional mechanical fragility), and the specific vulnerabilities of high-density and fine-pitch components that commonly appear in Class 3 hardware.

---

### Module 5: Process Documentation and the Class 3 Traveler

**Session 5.1: The Traveler, Router, and Operator Sign-Off System**

Class 3 process documentation is not optional and it is not light. This session covers the anatomy of a traveler/router for a Class 3 assembly: the work order header, the operation sequence, the material call-outs (including lot numbers for critical materials such as solder paste and flux), the operator ID fields, the inspector ID fields, and the hold/release mechanism for non-conformances. The concept of the "living document" — a traveler that captures what actually happened, not just what was planned — is central. Participants examine example traveler formats and practice identifying what is missing or inadequate in provided samples.

**Session 5.2: First Article Inspection, In-Process Records, and Rework Documentation**

First article inspection (FAI) at Class 3 is a gate, not a formality. This session covers the FAI process: what is inspected, what evidence is generated, who signs off, and how the FAI record is stored. In-process inspection records — including the specific Class 3 requirement for documented inspector sign-off at defined process steps — are addressed. The rework and repair section is the most sensitive: IPC-7711/21 provides the technical procedures, but Class 3 rework also requires an approval chain (typically engineering authorization before rework, quality inspection after), documentation of the rework in the product record (what was wrong, what was done, who did it, what materials were used), and in some contracts, customer notification for specific rework categories.

---

### Module 6: Certification, Roles, and Organizational Requirements

**Session 6.1: IPC CIS and CIT — Roles, Scope, and Value**

The IPC Certified IPC Specialist (CIS) and Certified IPC Trainer (CIT) credentials are the industry standard for formalizing Class 3 competence. This session covers the CIS exam scope (IPC-A-610 workmanship criteria, J-STD-001 process requirements), the recertification cycle, and how the CIS credential functions as evidence of inspector qualification in a Class 3 quality system. The CIT pathway — training the trainer — is addressed for participants who may deliver internal training. The session also addresses how some customer contracts and military specifications formally require CIS-certified inspectors on Class 3 work, making certification a business requirement, not just a professional development option.

**Session 6.2: Building and Maintaining a Class 3 Operation**

This session takes a systems view: what does an organization need to actually sustain Class 3 capability? Topics include: the quality management system foundation (ISO 9001 or AS9100 as the skeleton), the calibration program (all inspection and measurement equipment), the training and qualification records system, the supplier control requirements (approved vendor lists, incoming inspection for Class 3 materials), the customer flow-down management process (understanding and translating customer Class 3 requirements into shop-floor instructions), and the internal audit program. The session closes with a candid discussion of the most common gaps found in Class 3 audits and how to close them before the auditor arrives.

---

## 7. Key Terms and Concepts

**IPC-A-610** — The IPC standard governing acceptability of electronic assemblies, organized by class; the primary workmanship acceptance document for most electronics manufacturing.

**J-STD-001** — The IPC/EIA joint standard specifying requirements for soldering electrical and electronic assemblies, with class-specific process requirements.

**Class 3 (High Reliability)** — The IPC classification for electronic assemblies in which continued performance or on-demand performance is critical, downtime cannot be tolerated, and the end environment may be uncommonly harsh.

**Solder Joint Acceptance Criteria** — The geometric, cosmetic, and structural requirements that a solder joint must meet to be acceptable; at Class 3, these are the most stringent defined in IPC-A-610.

**First Article Inspection (FAI)** — A formal, documented inspection of the first production unit or lot to verify that all processes, materials, and workmanship meet specification before full production proceeds.

**Traveler / Router** — A manufacturing document that travels with a work order through the production process, recording the planned operations, the materials used, the operators who performed each step, and the inspection results at each checkpoint.

**IPC-7711/21** — The IPC standard for rework, modification, and repair of electronic assemblies, providing approved procedures for re-soldering, component removal and replacement, PCB repair, and other corrective operations.

**Conformal Coating** — A protective chemical coating applied to assembled PCBs to protect against moisture, dust, chemicals, and temperature extremes; at Class 3, coverage, thickness, and adhesion are held to strict acceptance criteria.

**Ionic Contamination Testing** — Methods (ROSE, SIR, localized extraction/ROSE equivalent) used to measure the level of ionic residues on an assembly; elevated ionic contamination can cause electrochemical corrosion and leakage current in service.

**CIS (Certified IPC Specialist)** — An individual who has passed the IPC certification examination for workmanship inspection to IPC-A-610 and/or J-STD-001 at the Specialist level; the standard inspector qualification credential in defense and aerospace electronics.

**CIT (Certified IPC Trainer)** — An individual certified by IPC to train and certify CIS candidates; required for in-house certification programs.

**Process Window** — The range of process parameters (temperature, time, paste volume, placement force, etc.) within which a process reliably produces acceptable output; at Class 3, process windows are narrower and must be formally qualified.

**Non-Conformance Record (NCR)** — A formal document recording a departure from a specified requirement; at Class 3, NCRs must be resolved through an approved disposition process before affected assemblies can proceed.

**Read-Out Protection / Code Protection** — (Contextual to the broader program; at Class 3, this term relates to the security of firmware loaded onto defense assemblies — covered in CC-L3-04.)

**IPC-CC-830** — The IPC standard for qualification and performance of electrical insulating compound (conformal coating) used in electronic assembly.

---

## 8. Instructor Notes

**On standards access:** Participants should have access to IPC-A-610 and J-STD-001 during the course, at minimum for the inspection criteria sessions. If personal copies are not available, the instructor should arrange for shared reference copies. Teaching Class 3 without the actual standard in the room is significantly less effective — the standard's language and table structure are part of what participants need to become familiar with.

**On physical samples:** The most effective teaching tool for Class 3 workmanship criteria is a set of physical boards and components showing the borderline — a joint that passes Class 2 but fails Class 3, a coating that has the right coverage but wrong thickness, a component with damage that is a defect at Class 3 but a process indicator at Class 2. If Clark maintains a sample library, draw from it. If not, consider preparing a sample set before delivery. IPC sells commercial sample kits for CIS preparation.

**On the "failure consequence" sessions:** The field failure case studies in Module 1 are important for motivating the content, but must be handled with care. Use publicly documented cases (defense safety board reports, FDA warning letters and recall databases, published academic post-mortems) rather than anecdotes. Avoid attributing failures to named companies if the attribution is uncertain. The goal is calibration, not blame.

**On rework:** The rework approval chain in Module 5 varies by contract. Some customers require notification for any rework; others have tiered categories (authorized rework that can proceed on engineer sign-off vs. repair requiring customer disposition). The instructor should present the principles clearly and note that the specific requirements are always driven by the customer's contract flow-down and the company's quality plan.

**On IPC certification promotion:** This course is not an IPC CIS prep course in isolation — it is a comprehensive treatment of Class 3 that happens to cover the same body of knowledge. Instructors may note that the content aligns with CIS exam preparation, but should not position the course as a substitute for the formal IPC certification program.

**Instructor background recommendation:** Delivery is significantly enhanced if the instructor has either held a Class 3 production role, conducted Class 3 quality audits, or holds an IPC CIS or CIT credential. If the delivering instructor does not have Class 3 floor experience, thorough pre-course reading of IPC-A-610 (current edition), J-STD-001 (current edition), and IPC-7711/21 is required, supplemented if possible by an interview with a practitioner.

---

## 9. Hands-On and Discussion Exercises

**Exercise 1: Accept/Reject Sorting — Class 3 Criteria**

Participants receive a set of photographs (minimum 20 images) showing solder joints, component conditions, board conditions, and coating coverage. Working individually and then comparing with a partner, they classify each image as Accept, Reject (with the specific criterion cited), or Process Indicator for Class 3. The exercise is run with the IPC-A-610 standard open. After individual work, the instructor facilitates a group review, spending the most time on the genuinely borderline cases. The exercise reveals how much interpretation is involved in applying written criteria to physical evidence — and why human calibration among inspectors matters.

**Exercise 2: Traveler Gap Analysis**

Participants receive two sample traveler documents for a fictitious Class 3 assembly: one that is reasonably complete and one that has been deliberately degraded (missing lot number fields, no inspector sign-off boxes for certain operations, rework section absent, no FAI reference). Working in small groups, participants identify every gap and draft a list of required corrections. Groups present their findings; the instructor facilitates a discussion of which gaps are administrative (easily fixed) and which are systemic (indicating a quality system problem). This exercise builds practical document-auditing skill.

**Exercise 3: Rework Scenario Analysis — Decision Tree**

The instructor presents a scenario: a Class 3 assembly has been found after reflow to have three solder joints on a 0402 resistor that do not meet Class 3 criteria (insufficient heel fillet). The board has not yet been conformally coated. Participants must work through the decision tree: Can this be reworked to a Class 3 standard using IPC-7711/21 procedures? What approval is required before rework begins? Who performs the rework, and what qualification is required? What is documented, and where does it go in the product record? Is the customer notified? The scenario is then varied (same assembly, but already conformally coated; same assembly, but the component is a QFP rather than a resistor) to test whether participants understand the principles rather than memorizing a fixed answer.

---

## 10. Assessment Suggestions

**Written Knowledge Check (20-30 questions):** Multiple choice and short-answer questions drawn from IPC-A-610 Class 3 criteria, J-STD-001 process requirements, and documentation requirements. Suitable as a pre/post assessment or as a standalone end-of-course check.

**Practical Inspection Demonstration:** Participants inspect a set of physical boards or photographs against Class 3 criteria and produce a written inspection report (accept/reject disposition for each joint/condition, criterion cited for each reject). Competency is demonstrated by accuracy against an answer key and by quality of criterion citation.

**Case Study Analysis (Written Submission):** Participants review a provided field failure report and write a two-to-three paragraph analysis identifying: (a) the workmanship category implicated, (b) the process control that should have prevented the escape, and (c) the documentation that, if present, would have aided the failure investigation. This is appropriate for participants in engineering or quality roles.

---

## 11. Recommended Resources

**Standards (current editions):**
- IPC-A-610: Acceptability of Electronic Assemblies
- J-STD-001: Requirements for Soldering Electrical and Electronic Assemblies
- IPC-7711/21: Rework, Modification and Repair of Electronic Assemblies
- IPC-CC-830: Qualification and Performance of Electrical Insulating Compound
- IPC-7095: Design and Assembly Process Implementation for BGAs (referenced in CC-L3-02)
- MIL-STD-2000: Standard Requirements for Soldering Electrical and Electronic Assemblies (for DoD contract context)

**Books and References:**
- Juran's Quality Handbook (for quality system context)
- Ray Prasad, *Surface Mount Technology: Principles and Practice* — Chapter on process qualification
- IPC white papers on Class 3 process control (available at ipc.org)

**Online:**
- IPC CIS/CIT certification information: ipc.org/certification
- NASA workmanship standards portal (NTSS): workmanship.nasa.gov — publicly available, excellent photographic acceptance criteria

**Clark Resources:**
- Clark Courses L1 and L2 prerequisite course materials
- Clark sample board library (if available at Hamilton facility)
- Contact Clark quality team for case study examples from Hamilton operations

---

*Clark Courses — Professional Electronics Manufacturing Education*
*Hamilton, Ontario | clark.ca*
