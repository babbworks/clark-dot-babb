# CC-L2-02: Through-Hole, Mixed Technology, and Selective Processes

**Clark Courses — Level 2: Professional Practice**
Hamilton, Ontario | CLARK Electronics Manufacturing

---

## 1. Course Overview

Despite the dominance of surface-mount technology, through-hole components remain a critical part of electronics assembly — and the challenge of managing them alongside SMT on the same board is one of the most practically demanding problems in production. This course examines why through-hole persists, what processes are available to assemble it reliably, and how to design a rational mixed-technology strategy for any given product. Coverage spans wave soldering, selective soldering, hand soldering, mixed-board palletizing, and conformal coating, with attention to the process interactions and trade-offs that make mixed-technology boards disproportionately difficult relative to pure SMT. Participants will leave with the technical vocabulary and decision framework to evaluate and specify through-hole and mixed-technology processes with confidence.

---

## 2. Learning Objectives

- Explain the technical and application reasons why specific component types remain in through-hole package form despite the cost pressure of SMT conversion.
- Describe the anatomy and process parameters of a wave soldering machine, and select appropriate flux type and conveyor speed for a given substrate and component combination.
- Compare selective soldering machine types (mini-wave, laser, drag) and select the appropriate method for a given board population and production volume.
- Specify hand solder acceptance criteria per IPC-A-610 Class 2 and Class 3, identify the visual difference between an acceptable and defective hand-soldered joint, and describe the contributing causes of common hand solder defects.
- Develop a mixed-technology assembly sequence strategy for a given board design, justifying the order of SMT, wave, and selective operations and identifying thermal management constraints.
- Select a conformal coating type for a given environmental protection requirement, specify the application method, and identify masking requirements per IPC-CC-830.
- Identify the primary process risks in each through-hole and mixed-technology process and describe the process controls used to manage them.

---

## 3. Target Audience

Manufacturing engineers, process engineers, quality personnel, and production supervisors responsible for mixed-technology boards. Also appropriate for PCB designers who need to understand the downstream assembly implications of through-hole component selection, EMS estimators quoting mixed-technology work, and technicians seeking to understand the process context behind their hands-on work.

---

## 4. Prerequisites

Recommended Level 1 completions:
- CC-L1-01: Introduction to PCB Assembly — How Electronics Gets Built
- CC-L1-02: Soldering Fundamentals — Materials, Metallurgy, and Joints

Familiarity with basic PCB construction (laminate, copper layers, through-hole plating) and general awareness of the SMT process is assumed. No hands-on wave or selective soldering experience is required, but participants with floor experience will benefit most from the process control and strategy discussions.

---

## 5. Duration and Format

**Duration:** 1.5 days (12 hours of instruction)
**Format:** Instructor-led classroom with integrated lab observation sessions. Approximately 55% lecture and discussion, 45% lab observation, hands-on exercises, and case study work. Access to a wave soldering machine (at minimum for observation), a selective soldering system or demonstration setup, and a hand soldering station is required.

---

## 6. Module Outline

### Module 1: Why Through-Hole Persists — Components and Application Requirements

**Session 1.1: Mechanical and Electrical Reasons for Through-Hole**
Through-hole components offer mechanical advantages that surface-mount cannot match: the plated through-hole provides an anchor through the board thickness, giving connectors, switches, and relays the pull-out and flex resistance required in connectorized assemblies subject to cable stress or repeated mating cycles. High-current components — power terminals, large inductors, bus capacitors — use through-hole because the lead cross-section and hole-wall bond area provide lower resistance and better heat sinking paths than SMT pads. Through-hole IPC Class 3 solder joints also offer higher intermetallic bond area, making them preferred in shock and vibration environments where fatigue life is critical.

**Session 1.2: Component Types That Remain in Through-Hole**
Axial components (resistors, diodes, small capacitors) are decreasing in through-hole use but persist in defense, repair, and legacy designs. Radial through-hole components include electrolytic capacitors (where large capacitance values in SMT formats are expensive or physically unavailable), relays, and certain transformers. DIPs (dual in-line packages) remain in use for legacy microcontrollers, optocouplers, and discrete logic. Pin headers and edge connectors are almost universally through-hole. Press-fit connectors provide a solderless through-hole interconnect by mechanical press interference, used in automotive and high-reliability applications. Power components — TO-220, TO-247, and similar packages — are often through-hole for thermal and mechanical reasons.

**Session 1.3: Class 3 and Military/Aerospace Preference**
IPC-A-610 Class 3 assemblies (high-reliability, life-critical applications) specify tighter solder joint acceptance criteria for through-hole joints than Class 2, including minimum barrel fill requirements (75% minimum vs 50% for Class 2), lead protrusion minimums, and surface coverage requirements. Military and aerospace specifications frequently mandate through-hole for specific mechanical nodes, citing long service life, field rework capability, and heritage qualification databases. The course frames through-hole not as a legacy burden but as a deliberate design decision that carries process consequences that the assembly team must plan for.

---

### Module 2: Wave Soldering — Machine Anatomy, Flux, and Parameters

**Session 2.1: Wave Soldering Machine Anatomy and Process Flow**
A wave soldering machine processes boards through three zones: fluxer (application of flux to the bottom side of the board), preheater (activating flux and preheating board to reduce thermal shock), and the solder pot (where the board contacts the liquid solder wave). The solder pot contains a pump mechanism generating either a chip wave (turbulent, for component clearance), a laminar wave (smooth, for minimizing bridging), or a dual-wave configuration combining both. Dross — the tin oxide skin that forms on the wave surface — must be managed by periodic removal and nitrogen atmosphere where justified. Students trace a board through a machine schematic and identify the function of each section.

**Session 2.2: Flux Types for Wave Soldering**
VOC (volatile organic compound) containing fluxes were historically dominant; they are high-activity, fast-drying, and provide excellent wetting but are subject to environmental regulations and require VOC abatement systems. VOC-free (water-based) fluxes reduce emissions but may require longer preheat to fully activate and are sensitive to application uniformity. No-clean fluxes for wave soldering leave residues that, like SMT no-clean pastes, must be confirmed as electrically benign through the full process — particularly under wave, where flux can be pushed into areas that are not fully heated. Water-soluble wave fluxes require in-line or batch aqueous cleaning after soldering. Students evaluate flux selection against environmental, cleaning, and application requirements for a set of case scenarios.

**Session 2.3: Conveyor Speed, Contact Angle, and Dross Management**
Conveyor speed determines dwell time on the wave — typically 3–10 seconds. Slower speeds increase heat input and solder contact time, improving barrel fill but risking thermal damage and increased bridging on fine-pitch. The board contact angle relative to the wave (typically 3–7 degrees) affects drainage of solder from the board — a slight downward angle helps solder drain off the trailing edge, reducing bridging. Dross management protocols (frequency of removal, nitrogen consumption targets, pot temperature control at 245–260°C for SAC305) are discussed as part of routine process maintenance. Students identify the parameters that are most likely to cause bridging on a specific board layout.

---

### Module 3: Selective Soldering — Machines, Programming, and Trade-Offs

**Session 3.1: Selective Soldering Machine Types — Mini-Wave, Laser, and Drag**
Mini-wave selective soldering uses a small, localized solder nozzle to solder individual through-hole sites without exposing the rest of the board to the wave. It is programmable, flexible, and can be used inline. Laser soldering heats the joint without a solder nozzle, depositing solder wire mechanically while the laser provides thermal energy — extremely precise, with no flux splattering, but slow and costly. Drag selective soldering uses a point or wire nozzle dragged along a row of pins in one motion, suited to header-style components. Each machine type has a distinct nozzle selection catalogue, and nozzle fouling (solder oxide buildup) is a common cause of quality issues requiring a cleaning protocol.

**Session 3.2: Flux Drop Application and Nozzle Programming**
Selective soldering typically uses a dedicated flux dropper (or spray fluxer with a localized nozzle) to apply flux only to the sites to be soldered, before the board reaches the solder nozzle. This is a critical distinction from wave soldering: because flux is applied site-specifically, flux activation and coverage must be confirmed for each programmed location. Nozzle selection balances the desire for a nozzle opening large enough to surround all pins in a connector footprint against the need for precision to avoid wetting adjacent SMT components or board features. Programming a selective soldering recipe involves specifying flux drop locations, nozzle travel paths, dwell times, Z-height, and preheat parameters for the specific board and component combination.

**Session 3.3: Use Cases, Limitations, and Integration with SMT Lines**
Selective soldering is the right choice when through-hole component count is low (less than 30–40% of board solder joints), the board has SMT components on the bottom side that cannot be wave-exposed, or pallet design is impractical. Its limitations include cycle time (it is slower per joint than wave), nozzle maintenance overhead, and flux consumption management. On high-volume lines, selective soldering can become a bottleneck; the course discusses when to invest in additional selective cells versus redesigning the board to separate SMT and through-hole onto separate panels. Students will complete a process routing decision exercise for three different board designs.

---

### Module 4: Hand Soldering — Standards, Technique, and Defects

**Session 4.1: Iron Selection, Temperature, and Solder Wire**
Tip geometry selection is determined by the joint type: conical or bevel tips for general through-hole work, knife tips for drag soldering, chisel tips for large pads and connectors. Tip temperature for lead-free (SAC305) hand soldering is typically set 370–400°C to compensate for the tip-to-joint thermal gradient — but higher tip temperature accelerates tip oxidation and requires more frequent tip maintenance. Solder wire alloy selection matches the board assembly alloy: SAC305 wire (typically 0.6–1.0 mm diameter) for lead-free boards, SnPb63/37 for legacy or exempted products. Flux-cored wire provides flux at the joint; rosin core is most common in hand soldering, but the flux type must be compatible with the board's cleaning specification.

**Session 4.2: IPC-A-610 Class 2 and Class 3 Hand Solder Acceptance Criteria**
IPC-A-610 defines through-hole hand solder acceptance by: barrel fill (minimum 75% for Class 3, 50% for Class 2), lead protrusion above the solder surface (0.5–2.5 mm preferred), solder fillet coverage on the source and destination side, and meniscus shape (concave fillet indicating good wetting vs. convex indicating insufficient heat or flux). Participants review the IPC-A-610 visual criteria using reference photographs, classifying a series of sample joints as Acceptable, Process Indicator, or Defect under Class 2 and Class 3 criteria. The practical difference between Class 2 and Class 3 acceptance in the hand soldering context is examined with reference to real joint cross-sections.

**Session 4.3: Common Hand Solder Defects and Root Causes**
Insufficient heat (the most common root cause): produces excess flux residue visible around the joint, inadequate barrel fill, and a dull, grainy fillet surface. Cold joint from disturbing the joint before solidification: produces a fractured or crystalline appearance, poor mechanical strength, and variable electrical resistance. Excess solder: covers the component lead, obscures the fillet geometry, makes IPC inspection impossible, and may bridge adjacent pads. Overheated joint: produces de-wetting (solder pulled back from the pad), component damage, or pad lift from the laminate. Solder splash and balls from improper iron withdrawal. Students diagnose a set of hand-solder photographs and write a brief root cause note for each.

---

### Module 5: Mixed-Technology Strategy — Sequencing and Thermal Management

**Session 5.1: Assembly Sequence Strategies — SMT First, THT First, and Hybrid**
The most common strategy is SMT-first (both sides), then through-hole — because SMT processes require a clean, flat board surface and precise registration that is easier to achieve before any through-hole components are installed. The bottom side of the board may receive SMT components before the top side if they are small enough to be held by adhesive or solder paste tack during subsequent processes. THT-first is occasionally used when a large connector or mechanical component must be located before SMT components that register off it. Hybrid sequencing for boards with bottom-side SMT and top-side through-hole must account for the thermal exposure of bottom-side SMT components during any subsequent thermal process (wave, selective, or rework).

**Session 5.2: Pallet Design for Mixed Boards**
Wave soldering pallets (typically FR4 or titanium) mask the bottom-side SMT components from flux and solder exposure while the through-hole joints on the top side are soldered from below. Pallet design is a significant tooling cost and engineering task: cutouts must expose all through-hole joints to the wave while providing full mask coverage for SMT components, and the pallet material must withstand repeated thermal cycling without warping. Spring-loaded finger clamps hold the board flat against the pallet. Students examine a pallet design drawing for a sample mixed-technology board, identify masking adequacy for each SMT component, and flag any through-hole joints that would be shadowed or underfilled.

**Session 5.3: Thermal Management on Mixed Boards**
The thermal challenge on mixed boards arises from components with different thermal mass and temperature ratings sharing a board that must survive multiple thermal cycles (reflow top side, reflow bottom side, then wave or selective). Cumulative heat exposure is tracked through the IPC-7711/7721 rework guidance framework. Students examine a component datasheets for maximum number of reflow cycles and solder temperature exposure. High-thermal-mass through-hole components (large electrolytic capacitors, power inductors) require extended preheat in wave soldering to achieve adequate barrel fill without exceeding the board's maximum thermal exposure limits on nearby components.

---

### Module 6: Conformal Coating — Types, Application, and Standards

**Session 6.1: Coating Types — Acrylic, Silicone, Urethane, Epoxy, and Parylene**
Acrylic coatings (Type AR per IPC-CC-830) are the most common: easy to apply and rework, good moisture resistance, and fast curing. Silicone coatings (Type SR) offer excellent temperature and humidity resistance, making them the choice for high-temperature environments (automotive underhood, industrial outdoor), but they are difficult to rework and can inhibit secondary bonding. Urethane coatings (Type UR) provide excellent chemical and abrasion resistance at the cost of more difficult rework. Epoxy coatings (Type ER) are the hardest and most chemically resistant, used in extreme environments, but are essentially irreversible once cured. Parylene (Type XY) is applied by vacuum vapor deposition, forming an ultra-thin, pinhole-free conformal film — the gold standard for protection but also the most expensive and least reworkable.

**Session 6.2: Application Methods — Spray, Selective, and Dip**
Aerosol and manual spray application is low-cost and appropriate for low-volume or prototype work but provides inconsistent film thickness and poor coverage of component undersides. Automated selective coating uses a programmable coating nozzle to apply liquid coating to defined areas of the board, leaving connectors, test points, and other masked areas uncoated without the use of masking tape or boots. This is the dominant production method for medium and high volumes. Dip coating immerses the board in the coating material — maximum coverage and penetration under low-standoff components, but requires masking of all areas that must not be coated. Film thickness measurement (typically 25–75 µm for most liquid coatings, confirmed by wet film gauge or fluorescent inspection under UV) is a required process verification step.

**Session 6.3: IPC-CC-830 Standard, Masking, and Quality Verification**
IPC-CC-830 (Qualification and Performance of Electrical Insulating Compound Used for Printed Circuit Assemblies) is the reference standard governing conformal coating qualification. It specifies dielectric strength, insulation resistance, moisture and humidity resistance, fungus resistance, and thermal shock requirements. Masking requirements — the specification of which areas must remain uncoated — must be part of the engineering documentation package (assembly drawing or a separate masking specification). Coverage inspection uses UV fluorescent tracers added to most commercial coatings, allowing 100% visual inspection under a UV lamp for voids, bubbles, and coverage boundaries. Students will review a conformal coat drawing package and identify any masking ambiguities.

---

## 7. Key Terms and Concepts

**Wave soldering** — A mass soldering process in which the bottom side of a PCB passes over a continuously pumped wave of molten solder, forming through-hole solder joints in a single pass.

**Selective soldering** — A soldering process using a localized, programmable solder nozzle or laser to solder specific through-hole components individually, without exposing the entire board to the solder wave.

**Barrel fill** — The percentage of the plated through-hole barrel height that is filled with solder; IPC-A-610 Class 3 requires a minimum of 75% fill.

**Press-fit connector** — A through-hole connector designed to form a gas-tight electrical connection with the PCB barrel by mechanical press interference, without requiring soldering.

**Chip wave** — A turbulent solder wave used to penetrate under component bodies and flush gas pockets before the laminar wave; part of a dual-wave configuration used in through-hole wave soldering.

**Laminar wave** — A smooth, forward-flowing solder wave that produces the final joint geometry in a dual-wave solder system; it minimizes bridging by providing directional solder drainage.

**Dross** — The tin oxide and intermetallic compound layer that forms on the surface of the molten solder pot; it must be periodically skimmed and managed to prevent contamination of solder joints.

**Pallet (wave soldering)** — A tooling carrier, typically machined from FR4 or titanium, that supports a mixed-technology PCB over the wave while masking bottom-side SMT components from solder contact.

**IPC-CC-830** — The IPC standard governing the qualification and performance requirements for conformal coating materials used on assembled PCBs.

**Parylene** — A family of poly-para-xylylene polymers applied as a conformal coating by vacuum vapor deposition; it produces a pinhole-free, ultra-thin film with superior barrier properties and is not reworkable by conventional methods.

**No-clean flux (wave)** — A wave soldering flux formulated to leave residues that are electrically benign without cleaning, provided full flux activation is achieved; verification of this assumption under specific thermal conditions is required.

**Conformal coating** — A thin protective polymer film applied to an assembled PCB to protect it from moisture, chemical exposure, contamination, and temperature extremes.

**Rework heat exposure tracking** — The practice of documenting cumulative thermal process exposures on a board to ensure that no component exceeds the maximum number of solder exposures or total temperature-time integral specified by its manufacturer.

**VOC-free flux** — A wave or selective soldering flux formulated without volatile organic compound solvents, typically water-based, used to comply with environmental air quality regulations.

**Mixed technology** — A PCB assembly that incorporates both surface-mount and through-hole components on one or both board sides, requiring a multi-step assembly and soldering process.

---

## 8. Instructor Notes

Lab observation of the wave soldering machine should be scheduled when the machine is running production or can be run with a demonstration board. A cold, idle machine explains very little; participants need to observe flux application, preheat zones, wave contact, and the behavior of solder bridging vs. well-drained joints in person.

If a selective soldering machine is available, a programming demonstration is highly valuable — even 20 minutes of watching a technician enter a new program for a through-hole connector, set flux drop positions, and do a dry run teaches more than an hour of slides. If no selective machine is on site, the instructor should source vendor demonstration videos (Pillarhouse, ERSA, and Nordson produce good training content).

The conformal coating module should include a UV lamp demonstration of fluorescent coating inspection. If coating is done at the facility, arrange a brief tour of the coating area and inspection station. If coating is outsourced, bring a coated sample board under UV — the visual recognition of coating voids and bubble inclusions is far more memorable than a diagram.

The IPC-A-610 hand solder assessment in Module 4 Session 2 is most effective when participants handle physical samples or at minimum work from high-quality printed photographs. Generic stock photos from the internet are frequently ambiguous about acceptance classification; use IPC's official reference photographs or samples prepared from the facility's own boards.

Instructors should draw the distinction between selective soldering as a process capability decision and selective soldering as a band-aid for a bad board design. Part of the message in Module 5 is that smart DFM decisions during board design can eliminate or significantly reduce the need for the most expensive mixed-technology operations.

---

## 9. Hands-On and Discussion Exercises

### Exercise 1: Wave Solder Parameter Sensitivity Analysis

Participants are given a board with a known bridging problem between a DIP component's pins and several adjacent passive SMT components (masked by a pallet). Working from a parameter sheet showing the current conveyor speed, contact angle, preheat zone temperatures, and flux type, they must identify which parameters are likely contributing to the bridging, propose two or three specific parameter changes, and predict the secondary effect of each change on other quality characteristics (barrel fill, flux activation, SMT component thermal exposure). Groups present their analysis and the instructor reveals what changes were made in the real production scenario and what the outcome was.

### Exercise 2: Mixed-Technology Sequencing Design

Each participant receives a one-page brief describing a product: a power supply module with bottom-side SMT (passives and a controller IC), top-side SMT (power MOSFETs, driver ICs), and top-side through-hole (large electrolytic capacitors, a connector bank, and a transformer). They must write a step-by-step assembly sequence, specifying at each step what process is used, which components are affected, what pallet or carrier tooling is needed, and what thermal exposure risks exist. The class then compares sequences and discusses the trade-offs of different approaches.

### Exercise 3: Conformal Coating Specification Review

Participants are given a two-page conformal coating specification and assembly drawing for an industrial outdoor product. The drawing has three deliberate defects: one area that must remain uncoated (a programming header) is not called out in the masking specification; one coating type specified is not compatible with the operating temperature range stated in the product brief; and the film thickness requirement is not stated. Participants must find all three defects, explain why each is a problem, and draft corrected specification language for each.

---

## 10. Assessment Suggestions

**Process Selection Justification (Short Written):** Participants are given descriptions of three boards (high-volume consumer with minimal through-hole, a medical device with a populated through-hole connector and multiple Class 3 requirements, and an industrial control board with a mix of SMT and a dense through-hole section). For each, they write a one-paragraph justification of the through-hole soldering process choice (wave, selective, or hand) citing specific technical, quality, and economic factors.

**IPC-A-610 Hand Solder Classification Exercise:** Participants receive a set of ten printed or displayed hand-solder joint photographs and must classify each as Class 2 Acceptable, Class 3 Acceptable (but Class 2 Defect), or Defect under both classes. Scoring is based on correct application of the IPC-A-610 criteria, with partial credit for correct reasoning on borderline cases.

**Mixed-Technology Case Study Report:** In groups of two, participants write a process engineering brief (2–3 pages) for a hypothetical new product introduction of a mixed-technology board described in the course brief. The report must cover: assembly sequence justification, pallet/tooling requirements, flux selection, wave or selective selection rationale, conformal coating specification, and one identified process risk with a proposed mitigation. Evaluated on completeness, technical accuracy, and the quality of trade-off reasoning.

---

## 11. Recommended Resources

- IPC-A-610: Acceptability of Electronic Assemblies (current revision) — through-hole solder joint acceptance criteria
- IPC J-STD-001: Requirements for Soldering Electrical and Electronic Assemblies — through-hole process requirements
- IPC-7711/7721: Rework, Modification and Repair of Electronic Assemblies
- IPC-CC-830: Qualification and Performance of Electrical Insulating Compound Used for Printed Circuit Assemblies
- IPC-HDBK-830: Guidelines for Design, Selection, and Application of Conformal Coatings
- Pillarhouse International Technical Application Notes — selective soldering process guidance
- ERSA GmbH Technical Documentation — selective soldering process and programming guides
- Humiseal Application Notes — conformal coating selection and application guides (humiseal.com)
- Ray Prasad, *Surface Mount Technology: Principles and Practice* — chapters on wave soldering and mixed technology
- Clyde Coombs (ed.), *Printed Circuits Handbook* — through-hole assembly chapters
- IPC-2221: Generic Standard on Printed Board Design — DFM considerations for through-hole design
