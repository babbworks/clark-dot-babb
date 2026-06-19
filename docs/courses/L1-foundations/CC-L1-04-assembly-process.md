# CC-L1-04 — The Assembly Process: From Bare Board to Finished Product

**Clark Courses | Level 1: Foundations**
**Course Code:** CC-L1-04
**Version:** 1.0 | March 2026

---

## 1. Course Overview

This course provides a complete, step-by-step walkthrough of the SMT and through-hole assembly process — from bare board loading to finished, inspected, and tested product. Students will learn what happens at each process station, why each step exists, what can go wrong and why, and how traceability is maintained throughout the line. This is the core manufacturing process course in the Level 1 Foundations track: it connects the board knowledge from CC-L1-02, the component knowledge from CC-L1-03, and the quality framework from CC-L1-05 into a coherent picture of how electronic assemblies are built. It is essential for anyone working on or near an assembly line, in process engineering, quality, or production planning.

---

## 2. Learning Objectives

Upon completing this course, participants will be able to:

- Describe the complete SMT assembly line sequence in correct order, explaining the purpose of each station.
- Explain the function and key parameters of the solder paste printing process, including paste composition, stencil design principles, and the SPI (Solder Paste Inspection) step.
- Describe how a pick-and-place machine operates, identifying the role of feeders, vision systems, nozzle types, and placement tolerances.
- Explain the purpose and structure of a reflow oven profile, distinguishing the preheat, soak, reflow peak, and cooling zones, and describe the differences between SAC305 and SnPb profiles.
- Describe the wave solder and selective solder processes and identify the product types for which each is appropriate.
- Identify the major SMT assembly defects — bridging, insufficient solder, tombstoning, cold joints, solder balls, head-in-pillow, and non-wet opens — describe the root cause of each, and identify which process step is most likely responsible.
- Explain what traceability means in the context of PCB assembly and describe how it is maintained at each step of the process.

---

## 3. Target Audience

This course is intended for:

- Assembly line operators, machine operators, and technicians who need to understand the full process they work within, not just their individual station.
- Process engineers and manufacturing engineers new to SMT assembly.
- Quality technicians and inspectors who perform in-process, AOI, and final inspection.
- Production supervisors and planners who schedule and manage the assembly line.
- Engineers and managers from related functions (procurement, test, new product introduction) who need working knowledge of the assembly process.

---

## 4. Prerequisites

CC-L1-01, CC-L1-02, and CC-L1-03, or equivalent knowledge. Students should be able to identify common component types and packages, and understand the basic structure of a printed circuit board before taking this course.

---

## 5. Duration and Format

- **Total Duration:** 8 hours
- **Format:** Instructor-led, classroom-based; a facility tour of an active or demonstration SMT line is strongly recommended as a companion to this course
- **Session Structure:** Four 2-hour sessions across two days, or two full-day blocks
- **Materials:** Slides, process step handouts, defect reference images (IPC-A-610 style), cross-section photographs of solder joints, sample stencil segment, defect sample boards (if available)
- **Room Setup:** Classroom style; access to a projector for close-up defect photographs; defect sample boards or reference cards at student tables if available

---

## 6. Module Outline

### Module 1 — Solder Paste and the Print Process

**Topic 1.1 — Solder Paste: Composition, Types, and Parameters**

Solder paste is a homogeneous mixture of solder alloy powder, flux, and carrier vehicle, formulated to be deposited through a metal stencil onto PCB pads and then reflowed to form solder joints. The alloy determines the melting temperature and joint properties: SnPb (63/37 eutectic) melts at 183°C and is the legacy alloy used before RoHS; SAC305 (96.5% tin, 3.0% silver, 0.5% copper) is the dominant lead-free alloy with a melting range of approximately 217–221°C. The flux activates metal oxide surfaces to allow wetting — flux chemistry is classified as no-clean (residues remain on board, designed to be benign) or water-washable (requires post-reflow cleaning). Paste particle size is defined by IPC Type number: Type 3 (25–45 micrometers) is standard for most SMT work; Type 4 (20–38 micrometers) and Type 5 (15–25 micrometers) are required for very fine pitch pads and miniature apertures. Paste must be managed carefully — refrigerated storage, controlled warm-up time before use, monitoring of working life, and disposal of expired paste are all part of paste management. Paste specification is one of the most consequential choices in an SMT process setup.

**Topic 1.2 — Stencil Design: Aperture Ratio, Squeegee Parameters, and Print Speed**

The stencil is a laser-cut metal sheet (typically 0.12mm or 0.15mm thick stainless steel) with apertures that define where paste is deposited on the board. The aperture size and shape relative to the stencil thickness governs how much paste is deposited and whether it releases cleanly from the aperture walls. The aperture ratio (area of the aperture opening divided by the area of the aperture walls) must exceed approximately 0.66 for reliable paste release — below this value, paste sticks to the walls rather than depositing on the pad. For very fine-pitch components, step-stencils (locally thinned to reduce paste volume in dense areas) or step-up areas (locally thickened for larger components needing more paste) may be required on the same stencil. Squeegee pressure, speed, separation speed, and snap-off distance are the print process parameters — each affects paste deposition volume, smear, and bridging. The print process is the single most consequential step in SMT assembly: studies consistently attribute 60–70% of all SMT defects to solder paste printing.

**Topic 1.3 — Solder Paste Inspection (SPI)**

Solder Paste Inspection (SPI) machines use 3D optical measurement (typically structured light or laser triangulation) to measure the volume, height, area, and position of every solder paste deposit on the board immediately after printing, before any components are placed. SPI allows print defects — insufficient paste, excess paste, bridged paste, smeared paste, misregistered deposits, missing deposits — to be caught and corrected before the board enters the placement machine. Boards that fail SPI can be cleaned and reprinted at minimal cost; boards that pass printing with defects but are not caught until post-reflow AOI require expensive rework or scrap. SPI data also feeds statistical process control (SPC) charts that reveal print process drift over time, enabling predictive maintenance of squeegee blades, stencil cleaning cycles, and paste management. Implementing 100% SPI is a best practice that has a well-documented positive ROI in most assembly environments.

---

### Module 2 — Pick-and-Place

**Topic 2.1 — Machine Mechanics: Feeders, Vision Systems, and Nozzles**

Pick-and-place machines retrieve components from feeders and place them on solder paste deposits with high speed and precision. Tape-and-reel feeders are the most common component supply method — components arrive on embossed paper or plastic tape wound on reels, and the feeder advances the tape one component at a time. Tube feeders handle components supplied in sticks or tubes; tray feeders handle components supplied in matrix trays (typical for BGAs and other large ICs). Vision systems inspect each component after pickup: they verify component presence, measure rotation and offset relative to the nozzle center, confirm component identity by shape, and check for lead coplanarity (whether all leads are in the same plane) for fine-pitch ICs. Nozzles are the vacuum tooling that contacts and lifts the component; nozzle selection by size and shape is critical for reliable pickup of components from 0201 chip resistors to large connectors. Machine throughput is measured in components per hour (CPH), but practical throughput depends on feeder management, component mix, placement accuracy requirements, and changeover time.

**Topic 2.2 — Placement Tolerances and Process Challenges**

Placement accuracy is specified as a position accuracy (e.g., ±25 micrometers at 3 sigma) and a rotational accuracy (e.g., ±0.05 degrees). For standard SMT components, these tolerances are easily met by modern equipment. The challenges arise at the extremes: 0201 and 01005 chip components require exceptional feeder precision and nozzle design; fine-pitch QFPs and CSPs require precise vision and fiducial alignment; large BGAs require careful thermal expansion compensation because the board expands slightly at production temperature. Placement force is also a process parameter — insufficient force leaves components floating on paste and vulnerable to movement; excessive force pushes components into the paste and can cause bridging. Package skew, feeder jams, nozzle contamination, and component polarity errors are common placement process failure modes that operators and process engineers need to recognize and respond to.

---

### Module 3 — Reflow Soldering

**Topic 3.1 — The Reflow Profile: Zones, Parameters, and SAC305 vs SnPb**

The reflow oven heats the assembled board through a controlled thermal profile that activates the flux, melts the solder, allows wetting and joint formation, and cools the board to solidify the joints. A convection reflow oven has multiple independently controlled zones; the board's thermal profile is shaped by the zone setpoints and conveyor speed. The preheat zone ramps the board and components from ambient to approximately 150°C at a controlled rate (typically 1–3°C per second) to avoid thermal shock. The soak zone holds the board at 150–180°C for approximately 60–120 seconds, allowing the flux to activate and the board to reach thermal equilibrium. The reflow zone raises the temperature above the solder's liquidus point — for SAC305, peak temperature is typically 235–250°C; for SnPb, approximately 210–225°C. Time above liquidus (TAL) for SAC305 is typically 30–90 seconds. The cooling zone brings the board down to below 150°C at a controlled rate (typically not exceeding 4–6°C per second) to avoid thermal stress. SAC305 profiles operate at 20–30°C higher than SnPb profiles, which has implications for board and component compatibility — high-Tg FR4 is required, and some legacy components are not rated for lead-free peak temperatures.

**Topic 3.2 — Profiling: Thermocouples, Profile Development, and Thermal Mass Variation**

Reflow profile development is performed by attaching thermocouples to representative locations on a production board — typically on the largest thermal mass component (a large BGA or power device), the smallest component (a 0201 passive near a board edge), and a reference location in the center of the board. The profiled board is run through the oven at candidate settings, and the thermocouple data is captured by a profile logger. The resulting profile curves are analyzed against the solder paste and component manufacturer's recommended profile windows. Achieving a profile that satisfies all component requirements simultaneously — particularly when a board contains both large thermal mass areas and delicate miniature components — requires iterative adjustment of zone temperatures and conveyor speed. Thermal mass variation across the board is the fundamental challenge: components with large thermal mass heat up and cool down more slowly than small components, and both must stay within their allowable limits throughout the profile.

---

### Module 4 — Through-Hole and Post-Reflow Processing

**Topic 4.1 — Wave Soldering and Selective Soldering**

Through-hole components — connectors, large electromechanical devices, power devices, and legacy ICs — that cannot be reflowed are soldered after the SMT process. Wave soldering passes the board over a wave of molten solder that contacts all through-hole leads and SMT components on the underside of the board simultaneously. The wave solder process sequence is: flux application (spray or foam), preheat, solder wave contact, board exit, and cooling. Wave solder requires careful fixture design for boards with mixed SMT/THT content, since SMT components on the underside must be protected from the solder wave. Selective soldering is an alternative to wave that uses a small-diameter solder nozzle to solder individual through-hole joints with CNC-controlled motion; it is preferred for high-mix production, boards with bottom-side SMT components that cannot be masked, and high-reliability applications where wave solder joint quality is difficult to achieve. The choice between wave and selective solder is driven by board design, production volume, and quality requirements.

**Topic 4.2 — Cleaning, Conformal Coat, and Singulation**

If the assembly uses no-clean solder paste and flux, cleaning may not be required — the residues are designed to be electrically benign and mechanically stable. However, some applications — medical, military, aerospace, and high-reliability industrial — require cleaning to remove all flux residues regardless of no-clean designation, because residues under fine-pitch components can cause ionic contamination failures in humid environments. Aqueous cleaning uses heated water with a saponifier or detergent, followed by rinsing and drying. Conformal coating is a thin protective polymer film (acrylic, polyurethane, silicone, epoxy, or parylene) applied to the finished assembly to protect against moisture, dust, chemical contamination, and mechanical abrasion. Application methods include spray (selective or blanket), dip, and brush; cure methods include UV, heat, and moisture cure. Singulation (depaneling) separates the assembly panel into individual boards using V-score breaking, routing, or laser cutting; mechanical singulation methods must be chosen to minimize stress on nearby components. Each of these steps — cleaning, conformal coat, singulation — is optional depending on product requirements, but each requires process documentation and quality verification.

**Topic 4.3 — Post-Assembly Inspection and Test**

After reflow and any through-hole processing, the assembly undergoes inspection and test to verify conformance to design and quality requirements. Automated Optical Inspection (AOI) systems use cameras and image processing algorithms to check component presence and orientation, detect missing or wrong components, identify gross solder defects (bridging, open joints, insufficients), and verify polarity of polarized components. AOI is fast and 100% coverage, but it can only see what is visible from above — BGA joints require X-ray inspection. Automated X-Ray Inspection (AXI) uses X-ray imaging to examine hidden joints under area array packages, looking for voids, opens, shorts, and misalignment. In-circuit test (ICT) uses a bed-of-nails fixture or flying probe system to test individual component values and junction integrity. Functional test applies power and a representative stimulus to the assembled board and verifies that it operates to specification. The combination of inspection methods deployed depends on the product's quality class, volume, and the test coverage required by the customer.

---

### Module 5 — Defects and Traceability

**Topic 5.1 — SMT Defect Taxonomy: Causes and Attribution**

Understanding assembly defects requires both the ability to recognize them visually and the ability to attribute them to their process root cause — because fixing the symptom without addressing the cause means the defect will recur. Solder bridging (solder connecting two adjacent pads that should be separate) is most commonly caused by excess paste volume, paste smear, or incorrect stencil aperture; it can also result from component movement during reflow. Insufficient solder (too little solder on a joint, resulting in a thin or concave fillet) is caused by insufficient paste deposition, SPI failures not caught, or paste scooping. Tombstoning (a chip component standing vertically on one end) is caused by unbalanced reflow forces — typically a mismatch in pad size, component offset, or reflow profile asymmetry that causes one end of the component to wet and reflow before the other. Cold joints (dull, grainy, or rough joint surface) indicate that the solder did not fully melt or that the joint was disturbed during cooling; root causes include insufficient peak temperature, contaminated pads, or vibration during cooling. Solder balls are small solder spheres scattered around joints, caused by paste splatter during reflow from moisture, contamination, or excessive paste volume. Head-in-pillow (HIP) defects on BGA packages occur when the solder sphere and the paste deposit do not fuse, leaving a visible dimple; HIP is associated with board warpage at reflow temperatures, flux degradation, or surface oxidation. Non-wet opens (NWO) are joints where solder melted but did not wet to one of the metal surfaces, often caused by oxidized surfaces, expired paste, or contaminated component leads.

**Topic 5.2 — Traceability: What It Is and How It Works in Assembly**

Traceability in PCB assembly means the ability to reconstruct, after the fact, exactly which board was built when, using which batch of bare boards, which lots of components, run on which equipment, and inspected by whom. Traceability serves several purposes: it enables targeted recalls (if a bad batch of a specific component is discovered, traceability identifies which boards it went into rather than requiring a blanket recall); it supports root cause investigation (when a field failure occurs, traceability data allows the failure to be correlated with specific process conditions); and it is a contractual requirement in defense, aerospace, and medical product manufacturing. Traceability is implemented through barcodes or QR codes on individual boards (assigned at board loading), feeder setup records linking component lot numbers to job numbers, machine logs recording which components were placed at which positions, oven log data linking batch records to time-stamped process conditions, and operator identification at manual process steps. The combination of these data streams creates a complete "birth certificate" for each assembly.

---

## 7. Key Terms and Concepts

**Solder Paste:** A suspension of solder alloy powder in a flux and carrier vehicle, used to deposit controlled volumes of solder on PCB pads prior to component placement and reflow.

**SAC305:** A lead-free solder alloy containing 96.5% tin, 3.0% silver, and 0.5% copper; the dominant lead-free alloy in PCB assembly, with a melting range of approximately 217–221°C.

**Stencil:** A laser-cut metal sheet with apertures defining the size, shape, and position of solder paste deposits; typically 0.12–0.15mm thick stainless steel.

**Aperture Ratio:** The ratio of aperture opening area to aperture wall area in a stencil; must exceed approximately 0.66 for reliable paste release from the stencil.

**SPI (Solder Paste Inspection):** Automated 3D optical measurement of solder paste deposits after printing, used to verify volume, height, area, and position before component placement.

**Pick-and-Place:** An automated machine that retrieves components from feeders and places them precisely on solder paste deposits; the primary placement machine in SMT assembly.

**Reflow Profile:** The time-temperature curve that an assembly follows through a reflow oven, defined by the preheat, soak, reflow peak, and cooling zones.

**TAL (Time Above Liquidus):** The duration in the reflow profile during which the solder is above its melting point; must be sufficient for wetting but not excessive to avoid component and board damage.

**Wave Solder:** A process that solders through-hole components by passing the board over a standing wave of molten solder; suited to high-volume through-hole production.

**Selective Solder:** A process that uses a small-diameter solder nozzle under CNC control to solder individual through-hole joints; suited to high-mix or mixed-technology boards where wave solder is impractical.

**AOI (Automated Optical Inspection):** Machine-vision inspection of assembled boards using cameras and image processing to detect component presence, orientation, and visible solder joint defects.

**AXI (Automated X-Ray Inspection):** X-ray imaging of assembled boards used to inspect hidden solder joints under area array packages (BGA, LGA, QFN) for voids, opens, and shorts.

**Tombstoning:** An SMT assembly defect in which a chip component stands vertically on one end, caused by unbalanced solder reflow forces acting on the two pads at different times.

**Head-in-Pillow (HIP):** A BGA solder joint defect in which the solder sphere and paste deposit do not fuse during reflow, resulting in a concave dimple rather than a fused joint; associated with board warpage and flux degradation.

**Conformal Coating:** A thin protective polymer film applied to a finished PCB assembly to protect against moisture, contamination, and environmental stress; common in military, medical, and industrial applications.

---

## 8. Instructor Notes

### What to Emphasize

The assembly process is a linked chain — every step's output becomes the next step's input, and a defect not caught early becomes exponentially more expensive to resolve downstream. This principle — early detection = low cost; late detection = high cost — should be woven throughout the course. The solder paste print step is the single highest-leverage intervention point because it is responsible for the majority of defects and it occurs before any components are committed to the board.

The defect taxonomy section is where students who will work in quality or on the line get the most immediate practical value. Spend time on defect photographs — ideally IPC-A-610 reference quality images. Ask students to diagnose the root cause before you give the answer. Developing diagnostic reasoning ("this looks like a cold joint caused by insufficient peak temperature, not insufficient paste") is more valuable than memorization.

The traceability section often surprises students by showing how much data is captured in a well-run assembly operation. Connect it explicitly to real-world scenarios: a medical device field failure, a defense contract audit, or a customer requesting batch records for a specific product shipment. The business case for traceability becomes immediately clear.

### Common Misconceptions to Address

- "No-clean means no issues." No-clean flux residues are designed to be benign under normal conditions, but they are not appropriate for all applications, and they can become corrosive if the reflow profile is wrong (under-activated flux). "No-clean" means the residue does not require removal, not that it is guaranteed harmless in all circumstances.
- "The oven is set-and-forget." Reflow profile development is iterative and product-specific. A profile that works for one board design may not be adequate for another with different thermal mass distribution. Profile maintenance and periodic verification are ongoing process responsibilities.
- "Wave solder is old technology." Wave soldering is still the most efficient method for soldering large numbers of through-hole joints simultaneously, and millions of through-hole connections are wave-soldered every day. It requires skill and process discipline, not just legacy tolerance.
- "AOI catches everything." AOI catches what it can see. Hidden joints — anything under a component body, any BGA ball, any QFN thermal pad — are invisible to optical inspection. AOI is a powerful tool but not a comprehensive one.

### Useful Analogies

- For the print/place/reflow sequence: think of it like decorating a cake. First you pipe the icing (paste print) onto the cake (PCB). Then you place the decorations (pick-and-place). Then you put it in the oven (reflow) and the icing melts and bonds the decorations permanently. If the icing is in the wrong places, nothing fixes that once the decorations are placed.
- For the reflow profile zones: preheat is like warming up before exercise (gradual, prevents injury); soak is like stretching (equalization); reflow peak is the actual work (the solder melts and wets); cooling is the cool-down (controlled, prevents stress fractures).
- For traceability: think of it like a food supply chain recall. When there is a problem with lettuce from a specific farm, the tracking system identifies which bags went to which stores in which cities, rather than requiring every store in the country to pull all lettuce. Without traceability, a recall is the entire product universe; with it, the affected population is precisely identified.

### Discussion Questions

1. Your SPI machine shows that a specific component type consistently has paste deposits 15% below the target volume. The machine just ran 50 boards before you noticed. What do you do now, and what do you change for the next run?
2. A customer's board design has a 0201 chip resistor on the same stencil as a large aluminum electrolytic capacitor. What stencil challenges does this create, and what options do you have to address them?
3. You are setting up a reflow profile for a new board design. The board has a large BGA in the center and a row of 0402 chip components along the edge. Your thermocouple data shows that the BGA is 8°C below target peak temperature when the edge components are already at the top of their specification. What are your options?
4. A batch of 200 assemblies passes AOI but three are returned from the field within 30 days showing open circuits under a large BGA. What type of investigation would you initiate, and what data would you request from the production records?

---

## 9. Hands-On and Discussion Exercises

### Exercise 1 — Stencil Aperture Ratio Calculation (25 minutes)

Provide students with a worksheet containing five stencil aperture design scenarios, each with a pad size, stencil thickness, and proposed aperture size. Ask students to calculate the aperture ratio for each scenario and determine whether it is above or below the 0.66 threshold for reliable paste release. For those below threshold, ask them to propose an adjustment (reduce stencil thickness? modify aperture shape?) and recalculate. Include one scenario involving a step-stencil with two different thickness zones and ask students to evaluate both apertures. This exercise builds quantitative fluency with one of the most important process design parameters in SMT.

### Exercise 2 — Defect Root Cause Mapping (30 minutes)

Provide a set of 10 defect photographs (use IPC-A-610 style reference images or equivalent). For each photograph, ask students to: name the defect type, identify the most likely root cause, identify the process step most likely responsible, and describe one corrective action. Conduct the exercise individually first, then compare answers in pairs, then debrief as a full group. Expect disagreement on root causes for some defects — this is healthy and productive, as it reflects the genuine ambiguity in real defect analysis. The instructor should be prepared to explain the reasoning behind the most likely attribution while acknowledging that multiple causes can produce similar symptoms.

### Exercise 3 — Traceability Reconstruction (25 minutes)

Present a scenario: a customer has called with three field failures on a specific product. All three boards were in Shipment 47, which contained 60 assemblies. The failures are all in the same location on the board. Provide students with a simplified (fictional) set of production records: a component lot number map for the job, the oven profile log for the production run, the SPI pass/fail summary, and the AOI result summary. Ask students to: identify which data would be most useful for narrowing down the root cause, determine whether all 60 boards in the shipment are at risk or only a subset, and describe what additional information they would request from the customer or from test. Debrief as a group, focusing on what traceability enables versus what must be investigated by other means.

---

## 10. Assessment Suggestions

**Option A — Process Sequence Ordering (individual):**
Provide students with a shuffled list of 20 process steps, including all major SMT, through-hole, inspection, cleaning, and post-processing steps. Ask them to arrange the steps in the correct sequence and, for each step, write one sentence explaining what is being accomplished and one sentence describing the most common defect or quality concern at that step. Assess for correct sequence, accuracy of explanation, and quality of defect attribution.

**Option B — Defect Analysis Report (individual or paired):**
Provide three close-up photographs of different solder joint defects. Ask students to write a one-paragraph analysis of each: defect identification, probable root cause, the process step responsible, and the recommended corrective action. Assess for accuracy of identification, quality of reasoning, and practicality of the corrective action.

**Option C — Short Quiz (15 questions):**
Factual questions covering: process step sequence, solder paste type definitions, aperture ratio threshold, reflow zone definitions and temperatures (SAC305), common defect types and their root causes, wave vs. selective solder applications, and traceability definitions. Suitable for standardized assessment across cohorts.

---

## 11. Recommended Resources

- IPC-A-610 — Acceptability of Electronic Assemblies (the definitive visual quality standard for SMT and through-hole assemblies; the defect reference standard used industry-wide)
- J-STD-001 — Requirements for Soldering Electrical and Electronic Assemblies (the process requirements standard that governs what must be done, not just what acceptable results look like)
- IPC-7525 — Stencil Design Guidelines (aperture ratio, step-stencil design, fiducial requirements, cleaning)
- SMTA technical papers on reflow profile development, lead-free transition process challenges, and head-in-pillow failure analysis
- Paste manufacturer application notes (Indium Corporation, Alpha Assembly Solutions, Henkel, and others publish detailed application notes on paste management, profile development, and defect troubleshooting — these are free and practically oriented)
- IPC white papers on solder paste inspection implementation and ROI
- Reflow oven manufacturer application notes on profiling methodology (Heller, Vitronics Soltec, BTU, and others publish detailed profiling guides)
- IPC-7711/7721 — Rework, Repair, and Modification of Electronic Assemblies (covers the methods used when assembly defects require correction; useful for understanding what rework costs and why prevention is preferable)
- SMTA and IPC conference proceedings on no-clean flux residue reliability, selective soldering process development, and AXI inspection methodology
