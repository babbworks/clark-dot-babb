# CC-L3-02: Advanced Packaging — BGA, CSP, QFN, Flip-Chip, and High-Density Interconnect

**Clark Courses — Level 3: Advanced Topics**
**Facility:** Clark, Hamilton, Ontario
**Course Code:** CC-L3-02

---

## 1. Course Overview

Modern electronics increasingly depend on package formats that are invisible to conventional inspection, assembled at densities that push conventional process equipment to its limits, and interconnected at pitches where a single misplaced ball or an undetected void determines whether the product works in the field. This course provides a deep technical treatment of advanced component packaging and high-density PCB interconnect — from the physics of why packaging has evolved the way it has, through the detailed assembly and inspection challenges of BGA, CSP, QFN, flip-chip, and HDI technologies, to the emerging world of embedded components, System in Package, and acoustic microscopy. Participants leave with the knowledge to specify assembly processes, qualify inspection methods, and diagnose failures for the package formats that increasingly dominate high-performance electronics. This course is substantially more technical than Level 2 survey content and requires a working foundation in SMT process and PCB design.

---

## 2. Learning Objectives

By the end of this course, participants will be able to:

- Describe the construction and assembly characteristics of the major BGA package variants (PBGA, CBGA, TBGA, FBGA) and explain how ball pitch affects paste volume, land pattern design, and reflow process requirements
- Identify the causes and detection methods for head-in-pillow and solder joint voiding defects in BGA assembly, and specify process controls to prevent each
- Explain QFN/DFN thermal pad design requirements, including thermal via arrays and paste aperture reduction for outgassing control, and describe how wettable-flank QFN affects optical inspection capability
- Describe the construction and assembly sequence for flip-chip and chip scale package (CSP) devices, explain when underfill is required and why, and outline the underfill dispensing and cure process
- Explain the sequential lamination process for HDI PCBs and distinguish between stacked, staggered, and skip-via structures; explain via-in-pad (VIP) design considerations for filled and plated-over vias
- Select and justify appropriate inspection methods — including X-ray, acoustic microscopy (C-SAM), and cross-section analysis — for advanced packages where visual inspection is insufficient or impossible
- Apply IPC-7095 void acceptance criteria to BGA X-ray images and explain the limitations of X-ray in detecting head-in-pillow and interfacial delamination

---

## 3. Target Audience

This course is aimed at process engineers, manufacturing engineers, quality engineers, and design engineers who work with or are transitioning into products using advanced packaging. It is also relevant to EMS technical staff who need to understand the assembly and inspection requirements before quoting or accepting assemblies containing BGA, CSP, QFN, flip-chip, or HDI. The course will benefit engineering managers who need to make build-versus-buy decisions about advanced package capability.

---

## 4. Prerequisites

**Recommended prior courses:**

- CC-L1-02: PCB Fundamentals — Construction, Layers, and Materials (or equivalent)
- CC-L1-03: Soldering and the Solder Joint (or equivalent)
- CC-L2-02: SMT Process — Paste, Placement, and Reflow (or equivalent)
- CC-L2-03: Inspection Methods — Visual, AOI, and X-Ray Overview (or equivalent)

Participants should understand the standard SMT process flow (print-place-reflow), the basics of PCB layer stackup, and the fundamentals of solder joint formation. Familiarity with basic component package types (SOIC, QFP, 0402 chip) is assumed. No semiconductor physics background is required.

---

## 5. Duration and Format

**Duration:** 2 days (approximately 14 instructional hours)

**Format:** Instructor-led classroom with heavy use of visual reference materials (cross-section photographs, X-ray images, acoustic scan images, scanning electron microscope images where available). Physical component and board samples for each package type are strongly recommended. Access to a live X-ray system for a demonstration session is ideal but not required. The course benefits from IPC-7095 and IPC-2226 being available as reference documents.

---

## 6. Module Outline

### Module 1: Why Packaging Has Evolved — Drivers and Trade-offs

**Session 1.1: The Forces Driving Package Miniaturization**

Package evolution is not arbitrary — it is driven by a set of competing pressures that course participants should understand before they encounter the specific package formats. This session surveys the key drivers: bandwidth demands (more signal pins required per chip as CPU and FPGA complexity grows), power efficiency (shorter interconnects mean lower inductance and capacitance, reducing switching losses), silicon economics (smaller die, more die per wafer, lower cost per function), miniaturization pressure from end markets (wearables, implantables, aerospace, mobile), and thermal management (thermal resistance from junction to board is a function of package geometry). The session establishes the framework that explains why each package format exists and what trade-off it represents.

**Session 1.2: Package Taxonomy and Where Each Format Fits**

A structured overview of the package landscape as a map — not an exhaustive catalog but a navigable framework. Leaded vs. leadless; area array vs. perimeter; discrete die vs. packaged die vs. module; wire-bonded vs. flip-chip interconnect. Each category is illustrated with examples from the formats covered in depth later in the course. This session also introduces the concept of package-on-package (PoP) and System in Package (SiP) as directions for continued evolution. The session prepares participants to understand that no single package format is universally better — each is optimized for specific trade-offs that their downstream assembly process must accommodate.

---

### Module 2: Ball Grid Array (BGA) — Construction, Assembly, and Defects

**Session 2.1: BGA Package Construction and Variants**

The four main BGA variants are treated in detail: PBGA (plastic, most common, organic substrate), CBGA (ceramic, used in high-reliability and high-thermal applications), TBGA (tape BGA, thin form factor), and FBGA (fine-pitch BGA, pitch below 0.8mm, approaching wafer-level package territory). For each variant, the session covers the substrate material and its coefficient of thermal expansion (CTE), the ball composition (SAC or SnPb, implications for mixed-metallurgy assembly), and the mechanical and thermal characteristics that affect the assembly process. Ball pitch options — 1.0mm, 0.8mm, 0.5mm, 0.4mm — are discussed in terms of what they demand from stencil design, paste volume control, and placement accuracy.

**Session 2.2: Land Pattern, Stencil, and Reflow for BGA**

BGA land pattern design is governed by IPC-7351 (land pattern standard) and has significant consequences for solder joint quality. This session covers the NSMD (non-solder-mask defined) vs. SMD (solder-mask defined) pad choice and its implications for joint strength and reliability. Stencil aperture design for BGA: achieving the correct paste volume to collapse and wet the ball without bridging or insufficient joint height — the paste volume is critical because, unlike gull-wing, you cannot directly observe the joint during reflow. Reflow profile requirements for BGA: the need for a slow, even thermal ramp to prevent head-in-pillow; peak temperature and time-above-liquidus; the consequences of too-fast ramp or insufficient time-above-liquidus. Flux chemistry interaction with BGA: oxide removal from the ball surface during reflow must be complete before the solder freezes.

**Session 2.3: BGA Defects — Head-in-Pillow, Voiding, and Bridging**

Head-in-pillow (HIP) is the BGA's characteristic failure mode and the primary subject of this session. The mechanism is explained in detail: during reflow, the PCB paste and the BGA ball both melt; if the ball surface is oxidized or if the thermal profile causes the paste to re-solidify before the ball properly wets, the ball sits in the solder pool without forming a metallurgical bond — creating a joint that appears dimensionally correct on X-ray but has no or poor electrical continuity. Causes include board-level warpage (the BGA substrate and PCB bow differentially during reflow, lifting balls out of their paste deposits), flux exhaustion before wetting, and contaminated ball surfaces. Prevention: board support during reflow, profile adjustment, higher-activity flux, storage and handling controls for BGAs. Voiding: IPC-7095 void acceptance criteria (percentage of joint area that may be voided, as viewed on X-ray), the distinction between acceptable distributed voids and unacceptable large central voids that compromise thermal and electrical performance, and the process changes (paste type, reflow atmosphere, via-in-pad filled vias) that reduce voiding.

**Session 2.4: X-Ray Inspection and BGA Rework**

X-ray inspection for BGA is covered in detail: 2D X-ray (transmission) and what it can and cannot reveal (it shows ball diameter, voiding, and bridging well; it cannot reliably detect HIP because a HIP joint is dimensionally near-normal), 3D X-ray (computed tomography, laminography) and its enhanced defect detection capability, and the qualifications for X-ray interpretation (the same board viewed at different angles and magnifications can tell very different stories). BGA rework: the process sequence (profile-based reflow using IR or convection hot-air rework station, controlled placement of the replacement BGA, flux application, solder paste or flux-only reflow), ball replacement on a reworked site, and the documentation requirements at Class 2 and Class 3. The session notes the practical limit: most BGAs can be reworked once or twice on a high-quality site; repeated rework progressively damages the PCB land.

---

### Module 3: Chip Scale Packages, QFN/DFN, and Underfill

**Session 3.1: Chip Scale Packages (CSP) and Wafer Level Packages (WLP)**

CSPs have a footprint no larger than 1.2x the die area; WLPs are processed and tested at wafer level before singulation, making them among the most challenging packages to assemble. This session covers CSP construction (thin core substrate, fine-pitch solder balls, very small overall package), the land pattern and stencil design challenges at 0.4mm and below (aperture-to-pitch ratio, squeegee bridging risk, stencil support requirements), and the impact of CTE mismatch on reliability — because the CSP substrate is small and thin, the CTE mismatch between the package and the PCB creates significant stress on the solder joints during thermal cycling. When underfill is required: for most CSPs in demanding thermal cycling environments, underfill (a low-viscosity epoxy dispensed around the perimeter and wicked under the package by capillary action) is required to redistribute the thermal stress across the package area rather than concentrating it on the corner balls. The underfill process — dispensing, flow, cure profile, and inspection — is covered in detail.

**Session 3.2: QFN and DFN — Thermal Pad Challenges and Wettable Flanks**

QFN (Quad Flat No-Lead) and DFN (Dual Flat No-Lead) are ubiquitous in modern power management and mixed-signal design. The exposed thermal pad on the underside of the package is both a significant thermal asset and the source of the most common QFN assembly defects. This session covers: thermal via array design under the QFN pad (via quantity, diameter, and fill to maximize thermal conduction while managing solder wicking into the vias), paste aperture reduction on the thermal pad (reducing the paste coverage to 50-80% of the pad area to allow volatiles to escape during reflow — full coverage traps gas and creates large voids), the IPC-7093 acceptance criteria for thermal pad voiding, and the wettable-flank QFN variant (which adds a solderable side surface to the terminal, enabling optical side-fillet inspection and dramatically improving inspection confidence). Common defects: thermal pad voiding above acceptance limits, insufficient fillet on the signal leads, tombstoning on small DFN packages.

---

### Module 4: Flip-Chip and Direct Die Attach

**Session 4.1: Flip-Chip Construction and Assembly**

Flip-chip is the interconnect method at the foundation of most high-performance processors, FPGAs, and RF modules — understanding it is essential for engineers working with high-performance electronics even if they never directly assemble it. In flip-chip, the die is mounted face-down onto the substrate, with the electrical connections made through solder bumps (C4 bumps) or copper pillar bumps on the die surface. This eliminates the wirebond and the wirebond loop inductance, reducing signal path length and enabling much higher I/O density. The session covers: bump formation on the wafer (electroplating, solder jetting), the bump metallurgy (SAC, SnPb, copper pillar with solder cap), placement (active alignment using die-level fiducials), reflow, and the very tight process tolerances required.

**Session 4.2: Underfill in Flip-Chip and Direct Die Attach**

Underfill is not optional in virtually any flip-chip or direct die attach application. Without underfill, the CTE mismatch between the silicon die and the organic substrate (or PCB) creates fatigue stress on the solder bumps that will cause joint failure within tens to hundreds of thermal cycles — far too few for any serious product. Underfill in flip-chip is more demanding than in CSP: the gap under the die is smaller (often 50-100 microns), the bump pitch is finer, and complete void-free fill is required. This session covers: capillary underfill (dispense at die edge, wick to fill by capillary action, cure in oven), no-flow underfill (dispense before die placement, reflow and cure simultaneously), and molded underfill (used in wafer-level assembly). Post-cure inspection methods: scanning acoustic microscopy (C-SAM) for delamination and void detection — the only non-destructive method that can image the underfill/die interface.

---

### Module 5: High-Density Interconnect (HDI) PCBs

**Session 5.1: Sequential Lamination and Laser Microvias**

HDI PCBs achieve higher wiring density than conventional multilayer boards through two mechanisms: reduced layer-to-layer via diameter (microvias, typically 75-150 microns diameter, drilled by laser rather than mechanical drill) and selective layer interconnection (microvias connect only the layers they need to, freeing up routing space on other layers). Sequential lamination is the manufacturing method: the board is built up in stages, with core layers laminated and drilled first, then additional layers added and their microvias formed. This session covers: CO2 vs. UV laser drilling for microvias (CO2 is faster; UV ablates cleanly on glass/resin; the choice depends on the dielectric material), the via formation quality requirements (clean barrel, no resin smear), electroless and electrolytic copper plating of microvias, and the design rules in IPC-2226 (HDI design standard).

**Session 5.2: Via-in-Pad (VIP) — Filled, Capped, and Plated-Over**

Via-in-pad is the HDI feature that most often surprises assembly engineers encountering it for the first time. Standard design practice puts vias outside component pads; VIP puts the via directly under the component pad, enabling tighter BGA land patterns, better thermal paths, and denser routing. The problem: if the via is open, paste will wick into it during print, reducing the paste volume available for the joint and potentially causing solder balls inside the via to create reliability problems. The solution: fill and plate-over the via before component assembly. This session covers the three treatments: filled-only (resin or copper fill, not plated over — not suitable for component assembly), filled-and-capped (fill plus copper cap, suitable), and filled-capped-and-planarized (the via is planar with the pad surface — required for fine-pitch BGA). The session also covers stacked vs. staggered microvia structures: stacked vias (one directly above another, connecting three or more layers) are more demanding to fill reliably and have different reliability characteristics than staggered.

**Session 5.3: Any-Layer HDI and Design for HDI**

Any-layer HDI (also called ELIC — Every Layer Interconnection) extends the principle of sequential lamination to every layer in the stackup, so any layer can connect directly to any other layer through a microvia. This eliminates the buried and blind via complexity of conventional HDI and enables very high routing density, but demands extremely precise sequential lamination control. The session covers the assembly implications of any-layer HDI: the boards are thinner and mechanically less rigid than conventional multilayer, requiring support fixturing during assembly; the via-in-pad population is typically very high; and X-ray inspection is more complex because via structures overlap. The design-for-HDI section covers the IPC-2226 rules for microvia aspect ratio, capture pad sizing, annular ring, and the minimum land-to-land clearance that governs HDI routing density.

---

### Module 6: Embedded Components, SiP, and Advanced Inspection

**Session 6.1: Embedded Components and System in Package**

Embedded passive components (resistors and capacitors embedded within the PCB laminate layers) represent a significant evolution in board-level integration. Instead of placing a 0402 resistor on the surface, the resistor is formed as a thin-film layer inside the PCB stackup during lamination. The assembly process advantages: reduced component count on surface, shorter signal paths, better impedance control, no placement or soldering required for the embedded components. The assembly challenges: the PCB supplier's process must be qualified and controlled; if an embedded component fails, board-level repair is essentially impossible; and incoming inspection must include electrical testing of the embedded passives before assembly begins. System in Package (SiP) is the module-level equivalent: multiple die (potentially from different processes — logic, memory, RF, power management) packaged together in a single module, either in a laminate substrate or with molded encapsulation. SiP modules are assembled onto PCBs as standard components but their internal assembly is performed at a wafer or die-level process.

**Session 6.2: X-Ray Limitations and Acoustic Microscopy (C-SAM)**

This session is a critical capstone: it addresses the limits of X-ray inspection — the workhorse advanced inspection tool — and introduces the complementary techniques required for complete inspection coverage of advanced packages. X-ray excels at: solder ball imaging, void detection, bridging detection in area arrays, and verifying component placement. X-ray cannot reliably detect: head-in-pillow (a HIP joint is near-normal in cross-section), interfacial delamination under flip-chip or at the underfill/die interface, delamination within a package substrate, or moisture ingress. Scanning acoustic microscopy (C-SAM) uses a focused ultrasonic beam to image internal material interfaces; acoustic impedance mismatch at delaminations and voids produces reflected signals that are mapped into a 2D image. C-SAM is the standard tool for detecting package delamination, underfill voids, and moisture-induced package damage (popcorning pre-screening). Cross-section analysis (destructive) is covered as the ground-truth method: mechanical cross-section polished to reveal via fill, solder joint profile, and intermetallic layer thickness — the only way to definitively characterize some failure modes.

---

## 7. Key Terms and Concepts

**PBGA (Plastic Ball Grid Array)** — The most common BGA variant, using an organic (FR4 or BT resin) substrate; prone to CTE mismatch with the PCB at very large body sizes.

**Head-in-Pillow (HIP)** — A BGA failure mode in which the ball and the paste pool both reflow but fail to form a metallurgical bond; typically caused by ball surface oxidation, board warpage during reflow, or profile-related flux exhaustion.

**IPC-7095** — The IPC standard for design and assembly process implementation for BGAs, including void acceptance criteria for BGA solder joints.

**Void (Solder Joint)** — A gas pocket within a solder joint, typically caused by flux volatiles or entrapped gas; voids above IPC-7095 threshold percentages reduce the joint's thermal and mechanical load-bearing area.

**QFN (Quad Flat No-Lead)** — A flat, leadless surface-mount package with pads on the underside perimeter and a large exposed thermal pad; requires controlled paste aperture on the thermal pad to manage outgassing voids.

**Wettable Flank QFN** — A QFN variant with a solderable side surface on the terminal, enabling optical inspection of the solder fillet and improving solder joint quality assurance.

**Flip-Chip** — A die attachment method in which the active face of the die is mounted face-down onto the substrate, with electrical connection through solder bumps or copper pillars; enables very short signal paths and high I/O density.

**Underfill** — A low-viscosity epoxy dispensed under a flip-chip, CSP, or BGA package after reflow; when cured, it distributes thermal stress across the package area, dramatically improving solder joint fatigue life.

**HDI (High-Density Interconnect)** — A PCB construction using laser-drilled microvias and sequential lamination to achieve finer pitch and higher routing density than conventional multilayer PCBs; defined by IPC-2226.

**Microvia** — A laser-drilled via in an HDI PCB, typically 75-150 microns in diameter; can be blind (connecting a surface layer to an adjacent inner layer) or buried (connecting two inner layers).

**Via-in-Pad (VIP)** — A PCB design technique in which a microvia is placed directly under a component land pad; requires filling and plating-over of the via before assembly to prevent solder wicking.

**Sequential Lamination** — The PCB manufacturing process used to build HDI boards: core layers are processed first, then additional layers are laminated and drilled in sequential build-up stages.

**C-SAM (Confocal Scanning Acoustic Microscopy)** — An inspection technique using focused ultrasound to image internal material interfaces within a package or assembly; the standard method for detecting package delamination and underfill voids.

**CTE (Coefficient of Thermal Expansion)** — The rate at which a material expands per degree of temperature change; CTE mismatch between the package substrate and the PCB is the primary driver of solder joint fatigue failure in area array packages.

**IPC-2226** — The IPC standard governing the design of HDI PCBs, including microvia geometry, aspect ratio, land pattern, and stackup rules.

---

## 8. Instructor Notes

**On visual material:** This course is more dependent on high-quality visual reference material than almost any other in the Clark Courses catalog. Cross-section photographs, X-ray images, and C-SAM scans are the primary teaching tools for Module 2 (BGA defects), Module 4 (flip-chip underfill), and Module 6 (inspection). The instructor should prepare a large, curated image library before delivery. IPC-7095 contains X-ray and cross-section images. Equipment manufacturers (Nordson DAGE for X-ray, Sonoscan for C-SAM) publish extensive image libraries in their application notes. Solder joint reliability researchers publish cross-section images in IEEE CPMT and SMTA journals, which are publicly searchable.

**On physical samples:** If your facility has access to reworked or scrap BGAs, CSPs, or QFN assemblies, bring them. A BGA under X-ray inspection (even if it is a live demonstration at a nearby X-ray station) is worth more than any number of photographs. If a live X-ray demonstration is possible, schedule 30-45 minutes for it in Module 2.

**On depth vs. breadth:** This course covers a large amount of ground. The instructor should be prepared to go deep on the topics most relevant to the specific participant group. For a group primarily working with power electronics (lots of QFN), Module 3 deserves extra time. For a group working on RF modules or high-performance computing, Modules 4 and 5 deserve more emphasis. Survey the cohort before delivery if possible.

**On IPC-7095 void criteria:** The specific percentage thresholds in IPC-7095 are subject to revision between standard editions. Always verify against the current edition before the course. The instructor should be familiar with the current figures and be prepared to explain the rationale — the thresholds are not arbitrary; they are derived from modeling of the thermal and electrical performance impact of voiding.

**On flip-chip and advanced packaging process knowledge:** Participants are unlikely to assemble bare flip-chip devices at a typical EMS facility — this process is performed at advanced packaging houses, OSATs (outsourced semiconductor assembly and test), and major OEM facilities. The value of covering flip-chip in this course is understanding: why modules and packages are constructed the way they are; how to interpret package-level failures; and what questions to ask when qualifying a module supplier. The instructor should frame flip-chip as foundational knowledge, not an immediately applicable shop skill.

---

## 9. Hands-On and Discussion Exercises

**Exercise 1: BGA X-Ray Image Analysis**

Participants receive a set of BGA X-ray images (printed or projected) showing: a normal assembly, an assembly with voiding at various percentages of joint area, an assembly with suspected head-in-pillow, and an assembly with bridging between adjacent balls. Using IPC-7095 void acceptance criteria and guided discussion questions, participants analyze each image: What do you see? What is the likely cause? Does it pass or fail IPC-7095? What additional inspection would you request? This exercise develops comfort with X-ray image interpretation and reinforces the limitations of X-ray (particularly for HIP detection). The debrief should emphasize why certain defects require additional techniques beyond X-ray.

**Exercise 2: QFN Paste Aperture Design Decision**

Participants receive the datasheet for a hypothetical QFN package (defined thermal pad dimensions, suggested land pattern, package body size) and work through the paste aperture design decision: If the full thermal pad is covered with paste, what is the estimated paste volume? What outgassing behavior is expected? What IPC-7093 void acceptance criterion applies? Calculate the aperture reduction required to achieve the target paste coverage percentage while maintaining adequate thermal interface. Groups compare their aperture designs and discuss the trade-offs between thermal performance (more solder = better thermal contact when fully wet) and void risk (more paste = more potential for entrapped gas). This exercise grounds the theoretical discussion in practical engineering decisions.

**Exercise 3: HDI Stackup Review and Via Strategy Discussion**

The instructor presents two PCB stackup drawings for a hypothetical high-density FPGA design: one using conventional through-hole vias with a six-layer board, and one using HDI with sequential lamination and via-in-pad for the FPGA BGA. In small groups, participants identify: the routing density advantage of the HDI design, the VIP treatment requirements (which vias are under BGA pads and what fill specification is required), the assembly implications of each stackup (warpage risk, assembly fixturing needs, inspection approach for the BGA), and one risk specific to the HDI design that the conventional design does not have. Groups present their analysis and the instructor facilitates a discussion of when HDI is worth the cost and process complexity.

---

## 10. Assessment Suggestions

**Image-Based Quiz (15-20 items):** Participants are shown X-ray images, cross-section photographs, and optical images of QFN and BGA assemblies and must identify the defect type, cite the relevant standard, and select the correct disposition. This format directly exercises the inspection and analysis skills developed in the course.

**Package Selection and Process Specification Exercise:** Given a set of product requirements (performance, size, temperature range, cost target, production volume), participants select and justify a package strategy (which packages to use, which to avoid, what special process considerations are required) and draft a one-page process specification summary. This is appropriate for engineering participants.

**Group Case Study Presentation:** Groups of three to four participants are assigned a package format (BGA, flip-chip, QFN, HDI) and prepare a ten-minute presentation covering: how it works, what can go wrong, how failures are detected, and what process controls prevent them. This drives deeper independent engagement with the material.

---

## 11. Recommended Resources

**Standards (current editions):**
- IPC-7095: Design and Assembly Process Implementation for BGAs
- IPC-7093: Design and Assembly Process Implementation for Bottom Termination SMD Components (QFN, DFN)
- IPC-2226: Sectional Design Standard for High Density Interconnect (HDI) Printed Boards
- IPC-7351: Generic Requirements for Surface Mount Design and Land Pattern Standard
- IPC-A-610: Acceptability of Electronic Assemblies (for inspection acceptance criteria)

**Technical Papers and Application Notes:**
- SMTA International conference proceedings: smta.org (search for BGA, HIP, QFN, HDI)
- IEEE CPMT (Components, Packaging, and Manufacturing Technology) journal
- Indium Corporation application notes on BGA voiding and head-in-pillow
- Henkel and Namics application notes on underfill materials and processes
- IPC white paper on HDI design and manufacturing

**Books:**
- C.P. Wong, K.C. Moon, Y. Li (eds.), *Nano-Bio-Electronic, Photonic and MEMS Packaging* — advanced packaging reference
- Turlik and Ohme, *Multichip Module Technology Handbook* — foundational flip-chip and substrate reference

**Online:**
- Nordson DAGE X-ray application notes: nordson.com/dage
- Sonoscan C-SAM technical resources: sonoscan.com
- JEDEC standards for package outlines: jedec.org

**Clark Resources:**
- Clark Courses CC-L2-03 (Inspection Methods) as prerequisite review
- Clark IPE platform data for in-house BGA and HDI assembly examples

---

*Clark Courses — Professional Electronics Manufacturing Education*
*Hamilton, Ontario | clark.ca*
