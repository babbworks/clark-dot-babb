# CC-L2-05: Industry Verticals — Medical, Defense, Automotive, Consumer, and Industrial Demands

**Clark Courses — Level 2: Professional Practice**
Hamilton, Ontario | CLARK Electronics Manufacturing

---

## 1. Course Overview

Electronics assembly does not exist in a vacuum: the requirements placed on a board assembly vary enormously depending on the end market it serves. A consumer smart speaker and a cardiac monitor may use identical component types and similar PCB layouts, but they are assembled, inspected, documented, and qualified to entirely different standards, under entirely different regulatory and contractual frameworks. This course maps those differences across five major industry verticals — consumer electronics, automotive, medical, defense and aerospace, and industrial and IoT — examining the quality management systems, regulatory requirements, IPC class expectations, traceability demands, environmental requirements, and business dynamics unique to each. The goal is to equip participants to recognize which vertical they are working in, what it demands of the assembly operation, and why those demands exist.

---

## 2. Learning Objectives

- Identify the quality management system standard, IPC assembly class, and primary regulatory requirements applicable to each of the five verticals covered in this course.
- Explain the PPAP process used in automotive electronics and describe what documentation is required in a typical Tier 1 submission.
- Describe the traceability requirements specific to medical device manufacture — including lot codes, operator identification, and device history records — and explain the regulatory basis for each.
- Compare the qualification hierarchies for military and aerospace components (JANS, JANTX, JANTXV, commercial) and identify the application scenarios that drive each selection.
- Explain what ITAR and Canada's Controlled Goods Program mean in practice for an EMS shop handling defense work, including the physical and administrative controls required.
- Describe the industrial functional safety standards IEC 61508 and IEC 62443 and identify how safety integrity levels affect hardware and software development requirements.
- Analyze a product brief and identify the vertical(s) it serves, the applicable quality management system, the IPC assembly class, and the top three compliance requirements it creates for the assembly operation.

---

## 3. Target Audience

Manufacturing engineers, quality engineers, account managers, operations managers, and business development personnel at EMS shops or OEM manufacturers who work across multiple market segments or are transitioning into a new vertical. Also appropriate for engineers entering the electronics manufacturing sector from a general engineering background who need to rapidly develop awareness of industry-specific requirements.

---

## 4. Prerequisites

Recommended Level 1 completions:
- CC-L1-01: Introduction to PCB Assembly — How Electronics Gets Built
- CC-L1-03: Quality Fundamentals — IPC Standards, Inspection, and Documentation

No specific vertical experience is required. Participants with experience in one vertical will deepen their understanding of the others; participants with no vertical experience will gain an essential professional orientation.

---

## 5. Duration and Format

**Duration:** 1.5 days (12 hours of instruction)
**Format:** Instructor-led classroom with structured discussion and case study analysis. Approximately 70% lecture and facilitated discussion, 30% group exercises and case study work. No laboratory access is required. Guest speakers from one or more verticals (a medical device engineer, an automotive quality engineer, or a defense program manager from the local industry community) are strongly recommended where available — even a 30-minute panel discussion adds significant credibility and contextual richness.

---

## 6. Module Outline

### Module 1: Consumer Electronics — Price, Speed, and the OEM/ODM Model

**Session 1.1: Market Dynamics — Volume, Cycle Time, and IPC Class**
Consumer electronics (smartphones, tablets, laptops, smart home devices, wearables) is the largest single segment by volume and the most price-sensitive. IPC Class 1 (general electronics, non-critical) covers the lowest-tier products; Class 2 (dedicated service electronics) covers the bulk of consumer products. Product lifecycles are short — typically 12–18 months — driving extremely aggressive NPI timelines. Margins per unit are thin, and production volumes are enormous; quality strategy is built around statistical process control and first-pass yield optimization rather than individual unit traceability. The implications for EMS assembly include very high automation, minimal manual operations, and intense cost competition.

**Session 1.2: The OEM/ODM Manufacturing Model and Geographic Dynamics**
Original Equipment Manufacturers (OEMs) design products and contract manufacturing to EMS companies or Original Design Manufacturers (ODMs). ODMs design and manufacture products that OEMs brand; this model dominates smartphone and laptop production. Contract manufacturing for consumer electronics has historically been concentrated in China (Foxconn, Pegatron, Compal) and Southeast Asia (Vietnam, Malaysia). The reshoring and friendshoring trends of the early 2020s — driven by geopolitical risk, supply chain disruption, and government incentives (US CHIPS Act, Canadian industrial policy) — are creating new production activity in North America. Students discuss the conditions under which a consumer product might be manufactured in Hamilton vs. Shenzhen and what that means for an EMS shop like CLARK.

**Session 1.3: Fast NPI and Design Churn in Consumer Electronics**
Consumer electronics NPI timelines can be 12–20 weeks from design freeze to mass production — dramatically shorter than medical or defense products. This places extreme pressure on the CM to build prototype batches, iterate quickly, and scale without extended qualification cycles. Design changes during NPI are frequent and must be managed through rapid ECO cycles. The course discusses what an EMS shop optimized for consumer NPI looks like (agile NPI team, rapid stencil turnaround, flexible SMT lines, short tooling lead times) and how this differs from a shop optimized for stable, long-lifecycle medical or defense production.

---

### Module 2: Automotive Electronics — Zero Defect, IATF 16949, and Functional Safety

**Session 2.1: IATF 16949 and the Zero-Defect Culture**
IATF 16949 is the quality management system standard for automotive production and service part organizations, built on the ISO 9001 base with automotive-specific requirements for defect prevention, process control, and supply chain management. The automotive industry operates under a zero-defect expectation — not as a marketing claim but as an operational target that drives every process parameter decision. A field recall in automotive is measured in millions of dollars; the pressure for zero defects flows directly to the EMS supplier through customer-specific requirements (CSRs) appended to IATF 16949. Students examine a sample CSR and identify the requirements it places on the assembler beyond the base IATF standard.

**Session 2.2: AEC-Q Component Qualification and PPAP**
AEC-Q100 (ICs), AEC-Q101 (discrete semiconductors), AEC-Q102 (optoelectronics), and AEC-Q200 (passive components) are qualification standards developed by the Automotive Electronics Council specifying the stress tests and failure rate requirements for automotive-grade components. Components qualified to AEC-Q standards have been tested to much wider temperature ranges, higher humidity, and longer life than commercial-grade parts. The Production Part Approval Process (PPAP) is a formal submission required by automotive OEMs before a supplier can begin production shipments; it documents that the production process produces parts that meet engineering requirements. A full PPAP includes dimensional results, material certifications, process flow diagram, FMEA, control plan, MSA, and initial process capability study. Students map the PPAP elements to their purpose in the quality system.

**Session 2.3: Functional Safety — ISO 26262 and ASIL Levels**
ISO 26262 is the functional safety standard for road vehicles; it defines Automotive Safety Integrity Levels (ASIL A through D, with D being the most stringent) based on severity, exposure, and controllability of a hazard. ASIL classification drives hardware and software development requirements, fault detection and diagnostic coverage targets, and independence of safety-relevant hardware from non-safety hardware. For the PCB assembler, ASIL requirements translate into: tighter process capability requirements, additional inspection steps, mandatory test coverage minimums, and potentially redundant or diagnostic circuits designed into the board. The electrification trend (EV powertrains, ADAS, battery management systems) is driving an enormous increase in PCBA content per vehicle and dramatically raising the functional safety requirements on automotive PCBs.

---

### Module 3: Medical Electronics — ISO 13485, FDA Pathways, and Lot Traceability

**Session 3.1: ISO 13485 and the Design History File**
ISO 13485 is the quality management system standard for medical device manufacturers; it is built on ISO 9001 but adds medical-specific requirements including design controls, post-market surveillance, risk management integration, and rigorous change control. The Design History File (DHF) documents the complete design development process for a medical device — design inputs, design outputs, design verification, design validation, and design reviews. The Device Master Record (DMR) is the production documentation package — drawings, specifications, process procedures, and quality requirements — that defines how the device is to be manufactured. The Device History Record (DHR) is the per-lot or per-unit production record documenting that the device was built per the DMR. Students trace the relationship between DHF, DMR, and DHR through the product lifecycle.

**Session 3.2: FDA Regulatory Pathways — 510(k), PMA, and QSR**
The FDA 510(k) pathway allows a manufacturer to market a medical device by demonstrating substantial equivalence to a legally marketed predicate device; it does not require clinical trial data but does require performance testing and design documentation. The Premarket Approval (PMA) pathway requires clinical evidence of safety and effectiveness and is required for Class III devices (life-sustaining, implanted, or presenting unreasonable risk). Both pathways require the manufacturer to operate under the FDA Quality System Regulation (QSR, 21 CFR Part 820) — now being harmonized with ISO 13485. For the EMS shop manufacturing under contract to a device OEM, the relevant question is what quality system requirements flow down through the supply agreement and what documentation must be maintained to support the OEM's FDA compliance.

**Session 3.3: Lot Traceability, Operator IDs, and Cleanroom Requirements**
Medical device assembly requires traceability to the component lot level: for every unit built, the assembly record must capture the lot codes and date codes of all components used, the identity of every operator who performed an operation, and the results of all in-process inspections and tests. This level of traceability enables a surgical recall — if a particular component lot is found to be defective, the manufacturer can identify every device that contains that lot and act accordingly. Some medical devices require assembly in controlled environments: cleanrooms (ISO 14644 Class 7 or 8) for devices that contact sterile fields, humidity-controlled environments for moisture-sensitive devices, and ESD-controlled environments for implantable device electronics. Implantable devices have additional requirements for materials biocompatibility (ISO 10993) and hermetic sealing.

---

### Module 4: Defense and Aerospace — AS9100, ITAR, Class 3, and Long Lifecycle

**Session 4.1: AS9100 Quality Management and First Article Inspection**
AS9100 is the quality management standard for the aerospace industry, built on ISO 9001 with additions specific to aviation, space, and defense: configuration management, first article inspection, risk management, and foreign object debris/damage (FOD) prevention. First Article Inspection (FAI) per AS9102 is a documented, comprehensive verification that a manufactured part or assembly conforms to all design requirements — not just a visual check, but a full dimensional, materials, and process verification against the engineering drawing. FAI is required for new part numbers, for reactivated part numbers after a break in production, and after significant design or process changes. Students review an FAI checklist and identify which elements are beyond what a standard production inspection would capture.

**Session 4.2: ITAR, the Controlled Goods Program, and Physical Controls**
The International Traffic in Arms Regulations (ITAR) is a US regulatory regime governing the export and import of defense articles and services on the US Munitions List. For a Canadian EMS shop (or any non-US shop) working on US defense programs, ITAR compliance requires that ITAR-controlled technical data, components, and hardware are protected from access by non-authorized persons, including non-US citizens working at the facility. Canada's Controlled Goods Program (CGP, administered by Public Services and Procurement Canada) is the domestic equivalent, controlling access to Canadian controlled goods. Physical controls at a CGP/ITAR-registered facility include: designated secure areas, access control systems, visitor escort procedures, destruction protocols for controlled technical data, and annual employee security assessments. Students discuss what a facility audit for CGP registration involves.

**Session 4.3: Military Component Qualifications, Long Lifecycles, and Rework Complexity**
Military components are qualified to MIL-PRF standards: JANS (highest grade, space-level screening), JANTXV, JANTX, and JAN (qualification tested) represent descending levels of screening and reliability. Commercial-Off-The-Shelf (COTS) components are increasingly used in military equipment with enhanced incoming inspection as a cost reduction measure, but life-critical and radiation-sensitive applications continue to require mil-spec parts. Defense and aerospace products have operational lifespans of 20–50 years; this creates challenges for component obsolescence management (a 30-year-old avionics system may use ICs that have been out of production for 20 years), rework and repair (technicians must be able to rework any joint on the board to IPC Class 3 standards years after original manufacture), and documentation retention (AS9100 may require production records to be retained for the life of the product plus a specified period).

---

### Module 5: Industrial and IoT — Class 2, EMC, Functional Safety, and Connectivity

**Session 5.1: Industrial Assembly Requirements — Class 2, Temperature, and Vibration**
Industrial electronics (PLCs, motor drives, sensors, SCADA hardware, industrial networking) typically assembles to IPC Class 2, though critical safety-related subsystems may require Class 3. Industrial products face operating environments significantly harsher than consumer electronics: wide temperature ranges (−40°C to +85°C is common, −40°C to +105°C for industrial-grade), high vibration and shock (IEC 60068-2 test methods), and exposure to contamination, humidity, and corrosive atmospheres. These environments drive design choices (component derating, through-hole for mechanical nodes, conformal coating, robust connector selection) that the assembly operation must understand and support. The course connects environmental requirements to assembly decisions: why conformal coating matters for an industrial outdoor product, why through-hole connectors are specified on a vibration-exposed board, why thermal interface materials matter for a drive controller.

**Session 5.2: EMC Compliance — FCC Part 15, CE Marking, and CISPR Standards**
Electromagnetic Compatibility (EMC) compliance is a regulatory requirement for virtually all electronic products sold in North America (FCC Part 15) and Europe (CE marking under the EMC Directive 2014/30/EU). CISPR standards (CISPR 11, 22, 32) provide the measurement methods and limits referenced by both frameworks. From the assembly perspective, EMC is primarily a design problem — trace routing, decoupling capacitor placement, shield can installation, cable shielding — but the assembly operation affects EMC by: ensuring shield cans are properly soldered to all ground pads, verifying that EMC-critical components (ferrite beads, common mode chokes, ESD protection devices) are installed at correct value and orientation, and maintaining the integrity of EMC-related gaskets, clips, and ground connections. A correctly designed board assembled incorrectly can fail EMC; students examine a case study where a missing ground strap caused an EMC failure.

**Session 5.3: IIoT Connectivity, Functional Safety (IEC 61508), and Cybersecurity (IEC 62443)**
Industrial IoT products integrate industrial sensing, control, and communication with networked data infrastructure. From a manufacturing standpoint, IIoT products introduce complexity in: programming and configuration (firmware must be loaded and verified in production), wireless RF certification (FCC/IC module certification or full device certification), and connector and mechanical assembly for environmental sealing (IP67/IP68 ratings). IEC 61508 defines functional safety requirements for programmable electronic safety systems, categorized into Safety Integrity Levels (SIL 1–4); SIL requirements flow into hardware reliability targets (hardware fault tolerance, safe failure fraction) and diagnostics coverage that must be achieved by the hardware design and manufacturing process. IEC 62443 addresses cybersecurity for industrial control systems — increasingly relevant as connected industrial hardware is subject to network-based attacks.

---

## 7. Key Terms and Concepts

**IATF 16949** — The quality management system standard for automotive production organizations, providing requirements for defect prevention, process control, and supply chain management in the automotive supply chain.

**AEC-Q100** — An Automotive Electronics Council qualification standard for integrated circuits used in automotive applications, specifying stress tests for temperature, humidity, and reliability over automotive operating life.

**PPAP (Production Part Approval Process)** — An automotive industry process requiring formal documentation and approval from the customer before a supplier begins production shipments; ensures that the production process reliably produces conforming parts.

**ISO 26262** — An international functional safety standard for road vehicles specifying requirements for the development of safety-related electrical and electronic systems, including Automotive Safety Integrity Level (ASIL) classification.

**ASIL (Automotive Safety Integrity Level)** — A risk classification (A through D) under ISO 26262 describing the degree of rigor required in the development of a safety-related automotive function; ASIL D is the most stringent.

**ISO 13485** — The quality management system standard for organizations involved in the design and manufacture of medical devices; includes requirements for design controls, risk management, and post-market surveillance beyond ISO 9001.

**Device History Record (DHR)** — A per-unit or per-lot medical device production record documenting that the device was manufactured and inspected in conformance with the Device Master Record.

**FDA 510(k)** — An FDA premarket notification pathway for medical devices that are substantially equivalent to a predicate device already legally marketed; does not require clinical trial data.

**AS9100** — The quality management system standard for the aviation, space, and defense industries; includes requirements for configuration management, first article inspection, and FOD prevention beyond ISO 9001.

**ITAR (International Traffic in Arms Regulations)** — US regulations controlling the export and import of defense-related articles and services; imposes access controls, registration requirements, and export licensing obligations on organizations handling ITAR-controlled technical data or hardware.

**JANS/JANTX/JANTXV** — Military component qualification grades specifying the level of screening, testing, and quality assurance applied to military-specification electronic components; JANS is the highest grade for space-level applications.

**First Article Inspection (FAI)** — A comprehensive documented inspection of the first production unit to verify that all design requirements are met before committing to full production; required by AS9100 and AS9102 for new and reactivated aerospace part numbers.

**IEC 61508** — The international functional safety standard for programmable electronic safety systems; defines Safety Integrity Levels (SIL 1–4) and the hardware and software development requirements for each level.

**IEC 62443** — An international standard series for cybersecurity of industrial automation and control systems; increasingly applied to connected industrial electronics hardware and software.

**Controlled Goods Program (CGP)** — Canada's regulatory regime controlling access to goods, technologies, and technical data related to national security; administered by Public Services and Procurement Canada and required for any Canadian facility handling CGP-designated items.

---

## 8. Instructor Notes

This course covers a large amount of material across five verticals; the risk is that it becomes a superficial survey rather than a course that builds durable professional knowledge. Instructors should resist the temptation to cover every detail of every standard and instead focus on building a mental model: each vertical has a core driver (cost for consumer, zero-defect for automotive, traceability for medical, security for defense, robustness for industrial) and that driver permeates every requirement in the vertical. Once participants understand the core driver, the specific standards and requirements become logical rather than arbitrary.

The ITAR and Controlled Goods module is sensitive territory for Canadian EMS shops. Instructors should be clear about what ITAR is (a US law with extraterritorial effect), what CGP is (Canada's domestic controlled goods regime), and what the practical implications are for a Hamilton shop that works on a defense contract. Do not provide legal advice; recommend that participants consult their organization's export controls or legal team for specific compliance questions. The purpose here is awareness, not compliance training.

The guest speaker recommendation is particularly important for the medical and defense verticals. A practicing medical device quality engineer or a defense program manager can communicate the cultural reality of operating in those verticals — the documentation discipline, the consequence of a quality escape, the relationship with the FDA or DCSA — in a way that lecture alone cannot. Even a 20-minute Q&A session with a guest adds significant value.

If the Clark facility serves or is pursuing work in any of these verticals, the instructor should incorporate facility-specific examples where confidentiality allows. Real examples from the shop floor are far more impactful than hypothetical scenarios.

---

## 9. Hands-On and Discussion Exercises

### Exercise 1: Vertical Identification and Requirements Mapping

Participants receive one-paragraph product briefs for six different products: (1) a wireless home thermostat, (2) a battery management system for a hybrid vehicle, (3) a wearable cardiac rhythm monitor for clinical use, (4) a targeting system for a military unmanned aircraft, (5) a programmable logic controller for a water treatment plant, and (6) a commercial Wi-Fi access point. For each product, working individually, participants must identify: the applicable vertical, the IPC assembly class, the primary quality management system standard, the top two regulatory requirements, and one specific implication for the assembly operation. The group then compares results; differences in classification (e.g., does the cardiac monitor require Class 2 or 3?) generate discussion of the decision factors.

### Exercise 2: PPAP Documentation Mapping

Participants receive a simplified description of a new automotive PCBA product (a motor controller for a seat adjustment actuator) going through PPAP for a Tier 1 automotive customer. They are given a list of 18 PPAP elements (Part Submission Warrant, process flow diagram, FMEA, control plan, MSA, initial capability study, etc.). Working in groups, they must: identify which elements the EMS assembler would be responsible for producing vs. which would come from the design owner (the Tier 1 customer), explain the purpose of each element in the quality system, and identify the three elements that pose the greatest challenge for a first-time PPAP submission. Groups present their assignments and the class discusses the boundary of EMS vs. customer responsibility in automotive supply chain quality.

### Exercise 3: Defense Program Scenario — Controlled Goods and First Article

Participants work through a scenario: CLARK has received a request for quotation for a defense electronics assembly involving a radar signal processing board. The customer has indicated the board contains ITAR-controlled technical data and requires AS9100 production and a full FAI per AS9102. Participants must identify: what facility registrations and certifications would be required before work could begin, what physical facility controls would be required for ITAR/CGP handling, what documentation the FAI would require from CLARK, and what the three most significant unknowns CLARK would need to resolve in the quotation process. The exercise is discussion-based and does not require technical answers — it is intended to develop the professional awareness of what defense work entails operationally.

---

## 10. Assessment Suggestions

**Vertical Profile Summary:** Each participant selects one vertical not from their current work experience and writes a two-page professional brief covering: the core market driver, the applicable QMS standard, the IPC assembly class, the top three regulatory or customer requirements, two specific assembly process implications, and one aspect of the vertical they found surprising or counterintuitive. Evaluated on accuracy, depth, and quality of the connection between vertical requirements and assembly implications.

**Comparative Analysis Quiz:** A 20-question multiple-choice quiz comparing requirements across verticals (e.g., "Which vertical requires a Device History Record for each production unit?", "What is the minimum barrel fill for a through-hole joint in a Class 3 assembly?", "What does ASIL D mean in practice for the hardware developer?"). Tests breadth of retention across all five verticals.

**Case Study Debrief (Group):** Groups of three work through a detailed case study — a product currently in production that is being adapted for a new vertical (e.g., a commercial IoT sensor being adapted for medical device use). They must identify every new requirement that the medical vertical adds relative to the commercial specification and write a gap analysis identifying what changes are needed to the assembly process, documentation system, and quality plan. Presented and discussed as a class.

---

## 11. Recommended Resources

- IATF 16949:2016 — Quality management system requirements for automotive production and relevant service part organizations
- AIAG PPAP Manual (4th Edition) — Production Part Approval Process reference
- ISO 26262: Road Vehicles — Functional Safety (Parts 1–12, current edition)
- ISO 13485:2016 — Medical Devices — Quality management systems
- US FDA 21 CFR Part 820 — Quality System Regulation (transitioning to alignment with ISO 13485)
- AS9100 Rev D — Quality Management Systems: Requirements for Aviation, Space, and Defense Organizations
- SAE AS9102: First Article Inspection Requirement
- ITAR (22 CFR Parts 120–130) — International Traffic in Arms Regulations (current text via DDTC, state.gov)
- Public Services and Procurement Canada: Controlled Goods Program (tpsgc-pwgsc.gc.ca/pmc-cgp)
- IEC 61508: Functional Safety of E/E/PE Safety-Related Systems
- IEC 62443: Security for Industrial Automation and Control Systems
- IPC-A-610 (current revision): Acceptability of Electronic Assemblies — Class 1, 2, and 3 criteria
- SMTA and IPC conference proceedings — vertical-specific technical papers (particularly APEX Expo and SMTAI proceedings for automotive, medical, and defense assembly topics)
- SAE International (sae.org) — AEC-Q qualification standards and automotive electronics technical resources
