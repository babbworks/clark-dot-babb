# Clark Courses — Curriculum Map

**Version:** 1.0
**Date:** 2026-03-27
**Status:** Internal planning document — approved for sharing with training delivery partners and prospective corporate clients

This document is the master curriculum map for Clark Courses. It covers all three levels: Foundations (L1), Professional Practice (L2), and Advanced Topics (L3). Each course entry includes the course code, title, description, duration, delivery format, prerequisites, and target audience.

For the full service profile — including revenue model, delivery model, relationship to IPC certification, and competitive positioning — see `/docs/clark-courses.md`.

---

## Level 1 — Foundations

The Foundations level provides essential industry literacy for anyone entering or orienting to electronics manufacturing. No prior electronics manufacturing experience is required. Courses in this level are appropriate as standalone professional development or as preparation for Level 2 content.

---

### CC-L1-01: The Electronics Manufacturing Industry — History, Scale, and Structure

**Duration:** Full day
**Delivery format:** Lecture + discussion
**Prerequisites:** None
**Target audience:** Anyone entering or orienting to the electronics manufacturing industry, including career changers, managers from adjacent industries, and administrative and commercial personnel at electronics firms.

Electronics manufacturing is one of the largest and most globally distributed industries in human history, yet most people who enter it have little sense of how it developed, who the major actors are, or how value flows through the system. This course traces the industry from the emergence of the printed circuit board through the rise of contract manufacturing, the formation of global supply chains, and the current era of reshoring, redundancy, and regional manufacturing investment. Participants develop a mental map of the industry's key segments — PCB fabrication, EMS, ODM, OEM, DEMS, and component distribution — and understand the economic logic of contract versus captive manufacturing. The course examines how the major quality and standards bodies emerged, why they exist, and what role they play in commercial and regulatory relationships. By the end of the day, participants can place their own organization within the industry structure and describe the upstream and downstream relationships that define their work.

---

### CC-L1-02: The Printed Circuit Board — Anatomy, Materials, and Fabrication

**Duration:** Full day
**Delivery format:** Lecture + hands-on
**Prerequisites:** None
**Target audience:** Technicians, assemblers, quality personnel, engineers, and anyone who works with printed circuit boards but lacks a systematic understanding of how they are made and what their physical properties mean.

The printed circuit board is the substrate of modern electronics, but most people who handle, assemble, inspect, or test PCBs have never had a systematic introduction to how a board is designed, specified, and fabricated. This course covers board construction from the laminate up: base materials (FR4, high-Tg, PTFE, polyimide), copper weights and layer counts, via types (through-hole, blind, buried, microvias), surface finishes (HASL, ENIG, ENEPIG, OSP, immersion silver), soldermask and silkscreen, and the fabrication processes that produce the final substrate. Participants examine reference samples of boards at multiple fabrication stages, learning to read physical board characteristics as diagnostic information. The course addresses design constraints — minimum trace and space, aspect ratio limits, impedance requirements — not to make participants into PCB designers, but to give them the vocabulary to communicate effectively with designers and fabricators and to understand why certain board conditions are acceptable and others are not. Hands-on exercises use the Clark Courses sample board library at the Hamilton facility.

---

### CC-L1-03: Components — A Visual and Technical Survey of What Goes on Boards

**Duration:** Full day
**Delivery format:** Lecture + hands-on
**Prerequisites:** None
**Target audience:** Technicians, assemblers, inspection operators, quality personnel, and anyone who needs to identify, handle, and understand the components used in electronics assembly.

A finished PCB assembly can contain dozens to thousands of individual components spanning passive, active, electromechanical, and interconnect families — and the physical packages those components come in have multiplied in complexity as miniaturization has accelerated. This course provides a systematic visual and technical survey of the component landscape, organized by function (passives, discretes, ICs, connectors, electromechanical) and cross-referenced by package type (through-hole axial and radial, SMT chip, SOIC, QFP, BGA, CSP, QFN, LGA, and others). Participants learn to read component markings, interpret reference designators and BOM line items, understand polarity and orientation conventions, and recognize the handling and storage requirements — particularly ESD sensitivity and moisture sensitivity levels — that govern responsible component management. The course uses the Clark Courses component library for hands-on identification exercises, moving from schematic symbol to physical package to mounted component. By the end of the day, participants can navigate a BOM, identify components on a populated board, and apply appropriate handling protocols.

---

### CC-L1-04: The Assembly Process — From Bare Board to Finished Product

**Duration:** Full day
**Delivery format:** Lecture + hands-on
**Prerequisites:** CC-L1-02 and CC-L1-03, or equivalent experience
**Target audience:** Technicians entering assembly or production roles, engineers in NPI or process roles, and quality personnel seeking a systemic understanding of the assembly process they are inspecting or auditing.

Electronics assembly is a precisely sequenced set of process steps, each with its own parameters, failure modes, and quality gates, that transforms a bare PCB and a set of components into a finished, tested assembly. This course walks through the complete assembly process in sequence: solder paste printing (stencil selection, paste rheology, print parameters), SMT component placement (pick-and-place programming, feeder management, placement accuracy), reflow soldering (profile design, zone control, nitrogen atmosphere), through-hole insertion and wave or selective soldering, cleaning and conformal coating where applicable, and final assembly and mechanical integration. Each process step is described in terms of its inputs, its outputs, its critical parameters, and its characteristic defect modes. Participants observe process demonstrations at the Hamilton facility where curriculum timing permits, and examine reference samples showing acceptable and non-conforming conditions at each stage. The goal is not to train operators to run equipment but to give all participants a systemic map of the process so that they can reason about quality, yield, and process control from a position of understanding.

---

### CC-L1-05: Quality and Standards — Why IPC Exists and What It Demands

**Duration:** Full day
**Delivery format:** Lecture + discussion
**Prerequisites:** CC-L1-04, or equivalent experience with the assembly process
**Target audience:** Anyone working in or moving into a quality, inspection, or standards-related role; technicians and engineers who want to understand the standards framework before pursuing IPC certification; managers who need to understand quality system requirements.

Quality standards in electronics manufacturing exist because the consequences of failure are serious — from field returns and warranty costs at the commercial end to aircraft mishaps and medical device failures at the high-reliability end — and because the global nature of the industry requires a shared technical language for specifying, auditing, and certifying acceptable work. This course provides a structured introduction to the IPC standards framework: what IPC is, how it developed, how its standards are organized and maintained, and what the key standards cover. The course examines IPC-A-610 (acceptability of electronic assemblies), J-STD-001 (requirements for soldering), IPC-A-600 (acceptability of printed boards), and IPC-7711/7721 (rework and repair) in terms of their scope, structure, and practical application. It introduces the three product classes (Class 1, Class 2, Class 3) and explains the logic of acceptance criteria differentiation by product class. The course also addresses the relationship between customer contractual requirements, IPC standards, and internal workmanship specifications, and introduces the IPC certification pathway — CIS, CQE, CSE — that Clark Courses participants may pursue after completing the Foundations level.

---

## Level 2 — Professional Practice

The Professional Practice level develops working knowledge for participants who are active in or transitioning into professional roles in electronics manufacturing. Foundations-level knowledge or equivalent industry experience is assumed across this level. Courses address real process depth, organizational context, and business logic rather than introductory survey.

---

### CC-L2-01: SMT Assembly in Depth — Equipment, Process Control, and Defect Modes

**Duration:** 2 days
**Delivery format:** Lecture + hands-on
**Prerequisites:** CC-L1-04 or minimum 6 months of direct experience in an SMT assembly environment
**Target audience:** Process engineers, SMT operators advancing into process control roles, quality engineers, NPI engineers, and manufacturing engineers responsible for SMT line qualification and process improvement.

Surface mount technology assembly is the dominant process in modern electronics manufacturing, and mastery of its process variables, equipment capabilities, and defect taxonomy is a core professional competency for anyone in a process, quality, or engineering role on the production floor. This two-day course moves well beyond the introductory assembly process overview to examine each SMT subprocess with engineering depth: solder paste selection and qualification, stencil design (aperture geometry, area ratio, step stencils, nano-coating), printer closed-loop control and SPI integration, pick-and-place machine architecture (gantry versus turret versus parallel), feeder management and component presentation, placement force and vision systems, reflow oven profiling (TAL, peak temperature, ramp-soak-spike versus ramp-to-peak), voiding in BTC joints, and the interaction effects between paste, stencil, placement, and profile that produce common defect conditions. Participants work through structured defect analysis exercises using the Clark Courses defect sample library, developing the diagnostic reasoning that distinguishes an engineer who can identify a defect from one who can trace it to a root cause and correct it at the process level.

---

### CC-L2-02: Through-Hole, Mixed Technology, and Selective Processes

**Duration:** Full day
**Delivery format:** Lecture + hands-on
**Prerequisites:** CC-L1-04 or equivalent assembly process experience
**Target audience:** Process engineers, quality engineers, and manufacturing engineers working with mixed-technology assemblies; technicians in manual assembly or rework roles; NPI engineers specifying through-hole or selective processes for new products.

Through-hole assembly and the wave soldering, selective soldering, and hand soldering processes that support it remain a significant and technically demanding portion of electronics manufacturing work — particularly in industrial, defense, automotive, and power electronics applications where component size, current capacity, or mechanical retention requirements make SMT impractical. This course covers through-hole component types and insertion methods (manual, semi-automated, and fully automated axial and radial insertion), wave solder machine architecture and process parameters (flux selection and application, preheat, solder pot temperature, wave geometry, conveyor speed and angle), and selective soldering systems (laser flux, mini-wave, and robotic soldering). It addresses the challenges of mixed-technology assemblies — boards carrying both SMT and through-hole components — including process sequencing, thermal management, and the masking and selective pallet strategies used to protect SMT joints during wave processing. Hand soldering standards, tip management, and iron qualification under J-STD-001 are covered in the context of rework, prototype, and low-volume production. Participants examine reference samples from each process type and work through process parameter optimization exercises.

---

### CC-L2-03: Inspection and Test — AOI, X-ray, ICT, Flying Probe, and Functional Test

**Duration:** Full day
**Delivery format:** Lecture + discussion
**Prerequisites:** CC-L1-05 or equivalent familiarity with IPC quality standards
**Target audience:** Quality engineers, test engineers, manufacturing engineers, and operations managers responsible for inspection and test strategy; NPI engineers designing test coverage into new products; quality managers evaluating or specifying inspection and test systems.

Inspection and test are the mechanisms by which electronics manufacturing organizations convert process confidence into product assurance, and the technology available to accomplish that conversion has expanded dramatically in capability and cost-effectiveness over the past two decades. This course provides a systematic survey of the inspection and test spectrum: automated optical inspection (AOI) — 2D versus 3D, camera and lighting architectures, programming strategies, false call management; X-ray inspection — 2D, laminography, and CT modes, void measurement, BGA joint characterization; in-circuit test (ICT) — bed-of-nails fixture design, analog and digital test coverage, boundary scan integration; flying probe — fixtureless electrical test, probe strategies, coverage versus throughput trade-offs; and functional test — custom and standard fixtures, coverage philosophy, test-driven design feedback. The course addresses the economics and strategy of inspection and test system selection — coverage, capital cost, throughput, fixture cost, and the relationship between first-pass yield and the cost of escapes — providing participants with a framework for evaluating and optimizing inspection and test investment decisions.

---

### CC-L2-04: The Supply Chain and BOM — How Electronics Actually Gets Made

**Duration:** Full day
**Delivery format:** Lecture + discussion
**Prerequisites:** CC-L1-01 or equivalent industry orientation
**Target audience:** Supply chain and procurement personnel, program managers, NPI engineers, operations managers, and anyone responsible for managing or communicating about material availability, BOM accuracy, or supply chain risk.

Electronics manufacturing is fundamentally a supply chain discipline: the ability to build a product depends entirely on the ability to procure the right components, in the right quantities, to the right specifications, at the right time, from sources whose quality and integrity can be verified. This course examines the structure and logic of the electronics supply chain from the perspective of a contract manufacturer or OEM operating in the current environment. Topics include BOM architecture and data quality (reference designators, manufacturer part numbers, approved vendor lists, cross-references and substitutions, REACH/RoHS compliance documentation), component distribution channels (authorized versus independent distribution, broker risk, counterfeit detection), lead time dynamics and supply chain risk (single-source parts, allocated components, end-of-life management, lifetime buys), and the interaction between BOM decisions and manufacturing yield, scheduling, and cost. The course addresses the role of component engineering in NPI, the management of approved vendor lists, and the practical implications of supply chain disruption for production scheduling and customer commitments. Participants leave with a systemic understanding of the supply chain as a process — with its own quality requirements, failure modes, and management disciplines.

---

### CC-L2-05: Industry Verticals — Medical, Defense, Automotive, Consumer, and Industrial Demands

**Duration:** Full day
**Delivery format:** Lecture + discussion
**Prerequisites:** CC-L1-05 and CC-L2-01, or equivalent professional experience
**Target audience:** Sales and business development personnel, program managers, quality engineers, and anyone interacting with customers in specialized industry segments; professionals transitioning between vertical markets.

Electronics manufacturing is not a homogeneous industry — the requirements imposed by a medical device customer, a defense prime contractor, an automotive OEM, and a consumer electronics brand differ in ways that have profound implications for process qualification, quality system requirements, documentation, traceability, and supply chain management. This course examines the five major industry verticals served by contract electronics manufacturers: medical devices (FDA quality system regulation, ISO 13485, design history file, device master record, traceability requirements); defense and aerospace (ITAR, controlled goods, AS9100, DFARS material requirements, counterfeit prevention under AS6174 and AS5553); automotive (IATF 16949, PPAP, control plans, measurement system analysis, zero-defect expectations); consumer electronics (speed-to-market pressure, cost sensitivity, product lifecycle dynamics, social and environmental compliance); and industrial electronics (long product lifecycles, harsh environment requirements, functional safety standards including IEC 61508). For each vertical, the course identifies the distinctive customer requirements, the regulatory frameworks that shape them, and the quality system and process elements that a contract manufacturer must have in place to serve that market credibly.

---

### CC-L2-06: New Product Introduction — DFM, First Articles, and the Pilot Run

**Duration:** Full day
**Delivery format:** Lecture + discussion
**Prerequisites:** CC-L2-01 and CC-L2-04, or equivalent professional experience in NPI or process engineering roles
**Target audience:** NPI engineers, process engineers, program managers, design engineers working with contract manufacturers, and quality engineers involved in first article inspection and product launch.

New product introduction is the process by which a design becomes a manufacturable, testable, repeatable product — and it is where the gap between design intent and manufacturing reality is most consequential and most costly to ignore. This course covers the NPI process from the initial design transfer review through DFM analysis, process development, first article inspection, and pilot run qualification. DFM topics include PCB layout constraints (component spacing, courtyard clearances, panelization strategy, fiducial placement), stencil aperture design for new components, thermal management in reflow, and test access considerations. First article inspection is covered in terms of its structure, documentation requirements (IPC-1710, AS9102), and role in transferring quality risk from the manufacturer to the record. The pilot run is examined as a process qualification event: what it is designed to prove, how process capability data is collected and interpreted, and how lessons learned from pilot are captured and fed back into the production process. The course addresses the organizational dynamics of NPI — the relationship between the customer's design team, the contract manufacturer's engineering team, and the production floor — and the communication and documentation practices that make NPI transitions successful.

---

## Level 3 — Advanced Topics

The Advanced Topics level addresses the specialized knowledge demands of high-reliability manufacturing, emerging packaging technologies, regulatory and compliance frameworks, embedded systems in a manufacturing context, and the development of structured training programs. Active professional experience in electronics manufacturing is assumed. These courses are appropriate for specialists, team leads, engineers in senior roles, and individuals preparing to deliver training.

---

### CC-L3-01: Class 3 Workmanship — High-Reliability Standards for Defense and Aerospace

**Duration:** 2 days
**Delivery format:** Lecture + hands-on
**Prerequisites:** CC-L1-05, CC-L2-01, and CC-L2-05, or active professional experience in a Class 3 manufacturing environment
**Target audience:** Quality engineers, process engineers, inspection personnel, and manufacturing engineers working in or transitioning into high-reliability electronics manufacturing for defense, aerospace, or space applications.

IPC Class 3 workmanship is the most demanding standard tier in commercial electronics manufacturing, and building a process and quality system capable of meeting it consistently requires a level of process control, documentation discipline, and inspector training that goes substantially beyond Class 2 practice. This two-day course examines the Class 3 requirements across the IPC standards suite — IPC-A-610, J-STD-001, IPC-A-600, IPC-7711/7721 — with specific attention to the acceptance criteria, process controls, and documentation requirements that distinguish Class 3 from Class 2 practice. Topics include solderability and surface finish requirements for Class 3, solder joint acceptance criteria by joint type, conformal coating coverage and inspection standards, cleanliness testing requirements, flux residue management, and the documentation and traceability requirements that underpin Class 3 quality systems. The course examines the interaction between Class 3 workmanship requirements and the AS9100 and NADCAP quality system frameworks common in aerospace and defense supply chains. Participants work through inspection exercises using Class 3 reference samples, developing the visual discrimination and documentation discipline required for Class 3 IPC certification and daily quality work.

---

### CC-L3-02: Advanced Packaging — BGA, CSP, QFN, Flip-Chip, and High-Density Interconnect

**Duration:** Full day
**Delivery format:** Lecture + hands-on
**Prerequisites:** CC-L2-01 and CC-L1-03, or equivalent professional experience with advanced component packages
**Target audience:** Process engineers, NPI engineers, quality engineers, and manufacturing engineers responsible for processes involving BGA, CSP, QFN, LGA, flip-chip, or HDI substrates.

The progressive miniaturization of electronics has driven a shift toward area-array and bottom-terminated package types whose joints are formed beneath the component body — invisible to optical inspection and subject to process failure modes that differ fundamentally from those of conventional leaded packages. This course provides a deep technical treatment of the advanced packaging landscape: BGA (ball grid array) in its full range of variants (PBGA, CBGA, UBGA, FBGA, fine-pitch), CSP (chip-scale package), QFN and LGA (bottom-terminated no-lead packages), flip-chip (direct die attachment, underfill, and reliability implications), and the HDI (high-density interconnect) substrates that these packages require. For each package type, the course covers joint formation mechanics, the process parameters and controls that govern joint quality, the inspection technologies used to characterize and accept joints, and the failure modes and reliability risks that practitioners must manage. Rework of BGA and area-array devices is addressed in terms of reballing, site preparation, profile development, and X-ray characterization of reworked joints. The course uses the Clark Courses advanced package sample library for hands-on examination and X-ray interpretation exercises.

---

### CC-L3-03: Regulatory and Compliance — ITAR, Controlled Goods, ISO 13485, AS9100, and IEC 60601

**Duration:** Full day
**Delivery format:** Lecture + discussion
**Prerequisites:** CC-L2-05 or equivalent professional experience in a regulated industry vertical
**Target audience:** Quality managers, operations managers, program managers, compliance personnel, and senior engineers working in or moving into regulated manufacturing environments for medical, defense, or aerospace customers.

Electronics manufacturers serving defense, medical device, and aerospace customers operate within an interconnected web of regulatory and quality system requirements that shape every dimension of how they run their businesses — from which countries they can ship to, to how they document a process change, to what their inspection records must contain. This course provides a structured overview of the major regulatory and compliance frameworks relevant to a Canadian electronics manufacturer with US customer relationships: ITAR (International Traffic in Arms Regulations) — scope, registration, license requirements, and the penalties for non-compliance; Controlled Goods Program — Canadian equivalent to ITAR, registration requirements, designated official obligations, and security assessment procedures; ISO 13485 — quality management for medical devices, the distinctions from ISO 9001, design controls and risk management under ISO 14971; AS9100 — aerospace quality management, the first-article and production approval requirements, nonconformance management, and the OASIS audit process; and IEC 60601 — medical electrical equipment safety, the manufacturer versus assembler distinction, and the implications for EMS providers. The course does not prepare participants to manage compliance programs independently, but it provides the conceptual map and vocabulary that senior personnel need to participate in compliance decisions and to work effectively with compliance specialists and auditors.

---

### CC-L3-04: Embedded Systems in the Manufacturing Context — Firmware, Programming, and Provenance

**Duration:** Full day
**Delivery format:** Lecture + discussion
**Prerequisites:** CC-L2-06 or equivalent NPI/process engineering experience; basic familiarity with microcontrollers or embedded systems is helpful but not required
**Target audience:** NPI engineers, test engineers, quality engineers, program managers, and manufacturing engineers involved in products that contain programmable devices — microcontrollers, FPGAs, DSPs, or application processors — and who need to understand the manufacturing implications of firmware, programming, and software provenance.

Modern electronics assemblies are rarely purely hardware products — they contain programmable devices that must be loaded with verified firmware as part of the manufacturing process, and the integrity of that firmware loading is as much a quality and traceability challenge as the integrity of the solder joints. This course addresses the embedded systems dimension of electronics manufacturing for practitioners who are not firmware engineers but who are responsible for or affected by the programming and provenance of firmware in manufactured products. Topics include in-system programming (ISP) and boundary scan programming methods, programming station qualification and verification, firmware version control and release management as they interface with production, the traceability requirements for programmed devices in defense and medical applications, the risks of unauthorized firmware substitution or modification in the supply chain, and the role of cryptographic signing and secure boot in protecting firmware integrity. The course also addresses the increasing prevalence of field-updatable firmware — over-the-air updates, controlled distribution, and the quality system implications of post-shipment software changes. Participants leave with a framework for thinking about firmware as a manufacturing quality variable and for asking the right questions of design teams, test engineers, and supply chain partners.

---

### CC-L3-05: Building and Running a Training Program — Curriculum Delivery, Instructor Development, and Clark Partnership

**Duration:** 2 days
**Delivery format:** Seminar
**Prerequisites:** Completion of at least 4 Clark Courses courses across L1 and L2 levels; active role in a training, quality, or engineering function at an EMS, OEM, technical college, or workforce development organization
**Target audience:** Individuals and organizations seeking to become licensed Clark Courses delivery partners; training managers at EMS and OEM companies developing internal training programs; technical college faculty integrating electronics manufacturing content into formal curriculum.

Effective professional training in electronics manufacturing is not simply a matter of deep subject knowledge — it requires curriculum architecture, instructional design, assessment strategies, and a sustained commitment to content currency that most subject matter experts have never been asked to develop. This two-day seminar is the gateway to the Clark Courses licensed delivery partner program and a standalone professional development offering for anyone building or improving a training function in electronics manufacturing. Day one covers the principles of adult professional education as applied to technical manufacturing content: learning objectives versus topic lists, session design and time management, the use of physical samples and demonstrations to anchor abstract concepts, discussion facilitation, and managing the heterogeneous experience levels typical of manufacturing training cohorts. Day two covers the Clark Courses partnership framework: curriculum licensing terms, delivery kit contents and use, instructor certification requirements and renewal, content update and alignment processes, and the mutual referral relationship between licensed delivery partners and Clark Courses public cohorts. Participants who complete CC-L3-05 and meet the Clark Courses instructor qualification criteria are eligible to apply for licensed delivery partner status, entitling them to deliver designated Clark Courses curricula under license at their own facilities or client sites.

---

## Curriculum Summary Table

| Code | Title | Level | Duration | Format |
|------|-------|-------|----------|--------|
| CC-L1-01 | The Electronics Manufacturing Industry | L1 Foundations | Full day | Lecture + discussion |
| CC-L1-02 | The Printed Circuit Board | L1 Foundations | Full day | Lecture + hands-on |
| CC-L1-03 | Components — A Visual and Technical Survey | L1 Foundations | Full day | Lecture + hands-on |
| CC-L1-04 | The Assembly Process | L1 Foundations | Full day | Lecture + hands-on |
| CC-L1-05 | Quality and Standards | L1 Foundations | Full day | Lecture + discussion |
| CC-L2-01 | SMT Assembly in Depth | L2 Professional Practice | 2 days | Lecture + hands-on |
| CC-L2-02 | Through-Hole, Mixed Technology, and Selective Processes | L2 Professional Practice | Full day | Lecture + hands-on |
| CC-L2-03 | Inspection and Test | L2 Professional Practice | Full day | Lecture + discussion |
| CC-L2-04 | The Supply Chain and BOM | L2 Professional Practice | Full day | Lecture + discussion |
| CC-L2-05 | Industry Verticals | L2 Professional Practice | Full day | Lecture + discussion |
| CC-L2-06 | New Product Introduction | L2 Professional Practice | Full day | Lecture + discussion |
| CC-L3-01 | Class 3 Workmanship | L3 Advanced Topics | 2 days | Lecture + hands-on |
| CC-L3-02 | Advanced Packaging | L3 Advanced Topics | Full day | Lecture + hands-on |
| CC-L3-03 | Regulatory and Compliance | L3 Advanced Topics | Full day | Lecture + discussion |
| CC-L3-04 | Embedded Systems in the Manufacturing Context | L3 Advanced Topics | Full day | Lecture + discussion |
| CC-L3-05 | Building and Running a Training Program | L3 Advanced Topics | 2 days | Seminar |

**Total curriculum:** 16 courses | 5 half- or full-day Foundations courses | 6 Professional Practice courses | 5 Advanced Topics courses
**Total instructional days (all courses delivered once):** 21 days

---

*Clark Courses is a service of CLARK. This curriculum map is a planning document and is subject to revision. For the most current scheduling, pricing, and partner information, contact the Clark Courses program office at the Hamilton facility.*
