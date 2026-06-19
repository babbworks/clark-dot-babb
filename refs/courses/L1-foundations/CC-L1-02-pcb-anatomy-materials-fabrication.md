# CC-L1-02 — The Printed Circuit Board: Anatomy, Materials, and Fabrication

**Clark Courses | Level 1: Foundations**
**Course Code:** CC-L1-02
**Version:** 1.0 | March 2026

---

## 1. Course Overview

This course provides a thorough grounding in what a printed circuit board physically is — the materials it is made from, the structural decisions that define its construction, the processes by which it is manufactured, and the ways fabrication quality affects downstream assembly outcomes. Students will develop the ability to read and interpret PCB fabrication specifications, recognize common board defects, and communicate intelligently with PCB fabricators and design engineers. This knowledge is foundational for anyone involved in PCB assembly, procurement, quality inspection, or engineering support, because the board is the substrate on which everything else depends — a poorly specified or poorly fabricated board makes excellent assembly work impossible.

---

## 2. Learning Objectives

Upon completing this course, participants will be able to:

- Identify the common substrate materials used in PCB fabrication and explain the trade-offs that govern material selection for different applications.
- Describe the structure of a multi-layer PCB stackup, including the function of copper layers, prepreg, and core materials.
- Explain the differences between plated through holes, blind vias, buried vias, and microvias, and describe when each is used.
- Identify the six most common PCB surface finishes and describe the functional and process implications of each.
- Describe the major steps of the PCB fabrication process in sequence, from photoplot through final inspection.
- Interpret a PCB fabrication specification drawing and identify critical parameters including copper weight, trace/space rules, layer count, surface finish, and controlled impedance requirements.
- Identify the major categories of PCB defects rooted in fabrication quality and describe how each can affect assembly or end-product reliability.

---

## 3. Target Audience

This course is intended for:

- Assembly line operators and technicians who handle PCBs and need to recognize board quality issues before assembly begins.
- Quality inspectors who perform incoming board inspection or who need to communicate defect findings to fabricators.
- Materials handlers, store room staff, and kitting personnel responsible for managing bare board inventory.
- Engineers and engineering technologists new to the electronics manufacturing industry.
- Anyone in the Clark Courses Level 1: Foundations track.

---

## 4. Prerequisites

CC-L1-01 (The Electronics Manufacturing Industry — History, Scale, and Structure) or equivalent industry orientation. Students should understand the difference between a PCB fabricator and an assembler before taking this course.

---

## 5. Duration and Format

- **Total Duration:** 6 hours
- **Format:** Instructor-led, classroom-based; physical board samples required
- **Session Structure:** Three 2-hour sessions, or one full-day block with breaks
- **Materials:** Slides, cross-section diagram handouts, physical PCB sample kit (bare boards showing various layer counts, surface finishes, via types), fabrication specification example
- **Room Setup:** Classroom style with tables; magnification loupes or a digital microscope recommended for examining samples

---

## 6. Module Outline

### Module 1 — Substrate Materials and Copper

**Topic 1.1 — FR4: The Workhorse Substrate**

FR4 (Flame Retardant 4) is the glass-reinforced epoxy laminate that accounts for the overwhelming majority of PCBs manufactured globally. It consists of woven fiberglass cloth impregnated with an epoxy resin system, cured under heat and pressure into rigid sheets. The "FR" designation indicates flame retardant properties meeting UL 94 V-0 classification. FR4 is valued for its combination of mechanical rigidity, electrical insulation, dimensional stability, solderable surface chemistry, and low cost. Its limitations — relatively high dielectric loss at microwave frequencies, moisture absorption over time, and a glass transition temperature (Tg) that limits high-temperature applications — are well understood, and material substitutions are made when those limits are reached.

**Topic 1.2 — Beyond FR4: Rogers/PTFE, Polyimide Flex, and Ceramic**

For applications where FR4 falls short, a range of specialized substrates is available. Rogers Corporation laminates (and competing PTFE-based materials) offer very low dielectric loss and stable dielectric constants at RF and microwave frequencies, making them essential for antenna substrates, radar systems, and high-frequency communications hardware. Polyimide (most commonly sold as Kapton) enables flexible and rigid-flex circuits that can bend, fold, or conform to three-dimensional structures — found in wearables, aerospace cabling, and compact consumer devices. Ceramic substrates (aluminum oxide, aluminum nitride) are used in high-temperature, high-power applications such as power electronics modules, automotive under-hood electronics, and LED drivers, where thermal conductivity is the primary constraint. Each material carries a significant cost premium over FR4 and requires process adjustments at assembly.

**Topic 1.3 — Copper Weight, Trace, and Space**

The copper on a PCB is described by weight per unit area — one-ounce copper (1 oz/ft²) is approximately 35 micrometers thick; half-ounce is approximately 17 micrometers; two-ounce is approximately 70 micrometers. Heavier copper carries higher current but is harder to etch into fine features. Trace width and spacing (trace/space rules, sometimes written as 4/4 mil meaning 4 mil trace, 4 mil space) define the minimum feature size the fabricator can reliably produce. These rules are driven by the fabricator's photolithography and etching capability, and tighter rules command higher prices and longer lead times. Understanding trace/space rules is essential for both design review and for evaluating whether a board specification is within a given fabricator's capability.

---

### Module 2 — Layer Stackup and Via Types

**Topic 2.1 — Single, Double, and Multi-Layer Stackups**

A single-layer board has copper on one side only — suitable for very simple circuits. A double-sided board has copper on both sides connected through plated holes. Multi-layer boards interleave signal layers, power planes, and ground planes between insulating prepreg layers, bonded together under heat and pressure. Common layer counts are 4L, 6L, 8L, and 12L, though very complex designs may use 20+ layers. The stackup — the specific arrangement of copper weights, dielectric materials, and layer thicknesses — is specified by the PCB designer or electrical engineer and has direct implications for signal integrity, impedance control, EMI performance, and fabrication cost. Reviewing a stackup for manufacturability is one of the first design-for-manufacturing checks a fabricator will perform.

**Topic 2.2 — PTH, Blind Vias, Buried Vias, and Microvias**

Plated through holes (PTH) are drilled mechanically from one side of the board to the other and plated with copper throughout their depth, creating electrical connections between any layers they pass through. They are the original and most common via type, and they consume board real estate on every layer they traverse. Blind vias connect an outer layer to one or more inner layers without passing all the way through the board — they are "blind" in the sense that they are not visible from the opposite side. Buried vias connect inner layers to each other and are completely hidden inside the board. Microvias are very small-diameter vias (typically 75–100 micrometers) formed by laser drilling rather than mechanical drilling; they are the enabling technology for High Density Interconnect (HDI) boards. Each via type adds fabrication complexity and cost.

**Topic 2.3 — Controlled Impedance and HDI**

In high-speed digital and RF circuits, the characteristic impedance of traces must be controlled to match source and load impedances, preventing signal reflections that degrade performance. Controlled impedance is achieved by precisely managing trace width, dielectric thickness, and copper weight according to transmission line calculations. Fabricators that offer controlled impedance maintain tighter process controls and measure impedance on test coupons that run alongside the production panel. HDI (High Density Interconnect) boards use microvias, finer trace/space rules, and thin dielectric layers to achieve component densities and routing densities that are impossible on conventional PCBs — they are the technology that enables smartphones and other miniaturized consumer devices. HDI fabrication requires more advanced equipment and tighter process control than standard multi-layer fabrication.

---

### Module 3 — Surface Finishes and Board Coatings

**Topic 3.1 — HASL and ENIG**

Hot Air Solder Leveling (HASL) is the oldest and most cost-effective surface finish: the bare copper pads are coated with molten solder and the excess is blown off with hot air, leaving a solder coating on all exposed copper. HASL provides good solderability but results in uneven pad surfaces that are problematic for fine-pitch components. Lead-free HASL (LF-HASL) uses SAC alloy rather than SnPb. Electroless Nickel Immersion Gold (ENIG) deposits a layer of nickel over the copper followed by a thin flash of immersion gold; the nickel acts as a diffusion barrier and the gold preserves solderability. ENIG provides extremely flat, uniform pad surfaces suited to fine-pitch BGAs and QFNs, and is the dominant finish in mid- to high-complexity assemblies. "Black pad" is a specific ENIG failure mode caused by phosphorus-rich nickel corrosion at the nickel-gold interface, resulting in non-wetting joints.

**Topic 3.2 — OSP, Immersion Silver, ENEPIG, and Hard Gold**

Organic Solderability Preservative (OSP) is a thin chemical coating applied directly to bare copper that protects it from oxidation until soldering; it is the lowest-cost flat finish and performs well in controlled process environments, but has a limited shelf life and does not survive multiple reflow cycles well. Immersion silver deposits a thin silver layer directly on copper through a displacement reaction; it offers good flatness and solderability but is susceptible to tarnishing and requires controlled storage. ENEPIG (Electroless Nickel Electroless Palladium Immersion Gold) adds a palladium interlayer between the nickel and gold, eliminating the black pad failure mode and providing excellent wire bondability — it is increasingly specified for advanced packages. Hard (electrolytic) gold is plated to a greater thickness than immersion gold and is used for edge connectors, contact fingers, and connector pads where repeated mating cycles must be withstood; it is not used for solder joints because thick gold causes brittle intermetallic formation.

**Topic 3.3 — Solder Mask and Silkscreen**

Solder mask is a polymer coating applied over all copper surfaces except the defined pad openings, serving two functions: it prevents solder bridging between adjacent pads during assembly, and it protects the copper from environmental degradation in service. Solder mask color (green, red, blue, black, white) is primarily cosmetic but black mask absorbs heat differently during reflow, which may require profile adjustments. Silkscreen (legend) is the printed layer of component reference designators, polarity markings, company logos, and regulatory marks on the board surface; it is an assembly and inspection aid, not a functional layer. Solder mask defined (SMD) pads are defined by the opening in the solder mask rather than by the copper pad edge — an important design distinction that affects paste printing and placement registration.

---

### Module 4 — The PCB Fabrication Process

**Topic 4.1 — From Gerber to Panel: Photoplot and Inner Layer Processing**

PCB fabrication begins with the customer's engineering data package, historically in Gerber format and increasingly in IPC-2581 format. The fabricator imports the data, performs design rule checks, and generates the photoplots — the film or digital artwork that defines each copper layer. Inner copper layers are produced by laminating copper-clad core material, applying photoresist, exposing it to UV light through the photoplot, developing away the unexposed resist, etching away the unprotected copper, and stripping the remaining resist. The result is a patterned inner copper layer. This sequence — coat, expose, develop, etch, strip — is the fundamental photolithographic process and is repeated for each layer.

**Topic 4.2 — Lamination, Drilling, and Plating**

Inner layers are stacked with prepreg (partially cured glass-epoxy sheet) between them and subjected to heat and pressure in a lamination press, bonding everything into a solid multilayer panel. Once laminated, the panel is drilled — mechanically for PTH and larger vias, and by laser for microvias. Drilling is followed by desmear (removing resin smear from inside the drilled holes) and electroless copper deposition, which seeds a thin copper film on the hole walls to enable subsequent electroplating. Panel plating or pattern plating then builds up the copper thickness in the holes to the specified minimum. The quality of the plating — its thickness, uniformity, and adhesion — is one of the most important reliability determinants in the finished board.

**Topic 4.3 — Outer Layer Processing, Surface Finish, and Final Inspection**

The outer copper layers are patterned using the same photolithographic process as the inner layers, but the outer layers retain the plated holes. Surface finish is then applied to exposed copper pads by the appropriate process (HASL, ENIG, OSP, etc.). Solder mask is applied by screen printing or photo-imaging and cured. Silkscreen is applied and cured. The finished panel undergoes electrical testing — either flying probe (pins contact each net individually) or bed-of-nails fixture test (all nets tested simultaneously) — to verify continuity and isolation. Final visual and dimensional inspection follows. The board is then scored or routed into individual units or shipping panels (with V-score or tab routing) and packaged for shipment. Each fabricator maintains process travelers and batch records that constitute the traceability chain for the board.

---

### Module 5 — Reading a Fab Spec and Recognizing Fabrication Defects

**Topic 5.1 — How to Read a PCB Fabrication Specification**

A PCB fabrication specification (sometimes called a fab note, board spec, or procurement spec) is a document — typically embedded in the fabrication drawing or Gerber package — that defines all the parameters required to build the board. Key parameters include: base material and specification (e.g., FR4 per IPC-4101/126), layer count and stackup, finished board thickness and tolerance, copper weight per layer, minimum trace/space, minimum hole size, plating specifications (IPC-6012 class), surface finish and specification, solder mask type and color, silkscreen, controlled impedance requirements (if any), UL marking requirements, and IPC Class (Class 2 or Class 3). Reading a fab spec critically — asking whether the specified parameters are achievable, whether tolerances are realistic, and whether there are internal conflicts — is an important skill for engineers, buyers, and quality personnel.

**Topic 5.2 — Common PCB Fabrication Defects and Their Consequences**

Fabrication defects that escape the board fabricator's inspection create problems at assembly or in service. Open circuits from incomplete etching, bridged traces from over-etching, drill breakout from misregistered drilling, lamination voids from entrapped air or contamination during pressing, delamination from poor material bonding, excessive copper roughness affecting controlled impedance, insufficient plating in via barrels (causing barrel cracking under thermal stress), solder mask adhesion failures, and surface finish defects (ENIG black pad, HASL non-planarity) are all documented failure modes. Quality incoming board inspection — visual examination, dimensional verification, and review of the fabricator's Certificate of Conformance — is the assembly shop's primary defense against these issues reaching the line.

**Topic 5.3 — Panelization: V-Score, Tab Routing, and Breakaway Tabs**

Individual PCBs are almost always assembled in panels — an array of multiple boards on a single sheet — to maximize the efficiency of SMT equipment that is designed to handle standard panel sizes. The panel must be depaneled into individual boards after assembly. V-score (V-groove) cuts a partial depth groove on both sides of the board between units, allowing the panel to be snapped apart cleanly; it is fast and leaves a straight edge but limits the geometry to straight-line cuts. Tab routing (or mouse-bite tabs) uses a router to cut out the individual boards while leaving small tabs of material connecting them to the panel rails; the tabs are broken off after assembly, leaving a slightly rough edge. Breakaway tabs may include small drilled holes (mouse bites) to weaken them for cleaner separation. The choice of depaneling method affects edge quality, board stress during singulation, and the design of the panel border — all of which matter for fine-pitch components mounted near board edges.

---

## 7. Key Terms and Concepts

**FR4:** Glass-reinforced epoxy laminate substrate, the dominant PCB base material, classified by flame retardant rating and standardized by IPC-4101.

**PTFE (Polytetrafluoroethylene):** A low-loss, low-dielectric-constant polymer used as a substrate in RF and microwave PCBs where FR4's dielectric properties are inadequate.

**Polyimide:** A high-temperature-resistant polymer used as the base material for flexible and rigid-flex circuits; commonly known by the DuPont trade name Kapton.

**Copper Weight:** A measure of copper thickness expressed as the weight of copper per square foot (e.g., 1 oz/ft²), with 1 oz corresponding to approximately 35 micrometers of thickness.

**Trace/Space Rule:** The minimum width of a copper trace and the minimum gap between adjacent traces, expressed in thousandths of an inch (mils) or micrometers; defines the fabricator's minimum feature resolution.

**Prepreg:** Partially cured glass-epoxy sheet used as the bonding layer between inner copper layers during multi-layer PCB lamination; fully cures under the heat and pressure of the lamination press.

**Plated Through Hole (PTH):** A drilled hole whose internal walls are plated with copper, creating an electrical connection between layers; the original inter-layer connection technology.

**Blind Via:** A via that connects an outer layer to one or more inner layers but does not pass completely through the board.

**Buried Via:** A via that connects inner layers to each other and is completely enclosed within the board, invisible from either outer surface.

**Microvia:** A small-diameter via (typically under 150 micrometers) formed by laser drilling; the enabling technology for HDI (High Density Interconnect) boards.

**ENIG (Electroless Nickel Immersion Gold):** A two-layer surface finish consisting of a nickel barrier layer over copper followed by a thin immersion gold deposit; widely used for its flat, solderable surface.

**OSP (Organic Solderability Preservative):** A thin organic coating applied to bare copper pads to prevent oxidation before soldering; the lowest-cost flat finish, with limited shelf life.

**Controlled Impedance:** A design requirement specifying the characteristic impedance of signal traces to defined tolerances, achieved through precise management of trace geometry and dielectric properties.

**HDI (High Density Interconnect):** A PCB construction using fine trace/space rules, thin dielectrics, and laser-drilled microvias to achieve component and routing densities not achievable with standard fabrication.

**V-Score:** A panelization technique in which a V-shaped groove is cut partway through the panel on both sides, allowing the panel to be snapped apart into individual boards after assembly.

---

## 8. Instructor Notes

### What to Emphasize

Physical samples are essential for this course. Abstract descriptions of "a 6-layer board with blind vias and ENIG finish" become immediately comprehensible when students hold an actual board and examine cross-sections under magnification. If possible, have a set of sample boards representing: a 2-layer FR4 board with HASL finish, a 4-layer board with ENIG, a flex or rigid-flex board, and an HDI board with microvias. Photographs of cross-sections (barrel plating, via structures, layer stackup) should be projected as large as possible.

The surface finish section is often underestimated by students but has real-world consequences at every solder joint on every pad on every board that comes through the shop. Emphasize that surface finish is not a cosmetic choice — it directly determines whether solder wets reliably, how the board must be stored, how many times it can be reflowed, and what defects to expect.

The fabrication process section should be taught with the attitude of a customer who needs to understand what they are buying, not as a potential fabricator. The point is not to teach board-making but to understand what fabricators do, what can go wrong, and what questions to ask.

### Common Misconceptions to Address

- "FR4 is FR4." There are multiple grades and formulations of FR4. Standard Tg (~135°C), mid-Tg (~150°C), and high-Tg (~170°C) versions exist, and the difference matters for lead-free reflow processes that peak at 245–260°C. A board built on standard Tg FR4 and reflowed at lead-free temperatures may delaminate.
- "ENIG is always better." ENIG is a high-performance finish that requires tight process control at the fabricator. A poorly controlled ENIG line produces black pad, which causes non-wetting solder joints that pass visual inspection but fail under vibration. An excellent OSP from a quality fabricator outperforms poor ENIG.
- "More layers means a better board." Layer count is a function of routing complexity — a 12-layer board is not inherently higher quality than a 4-layer board; it is just more complex. Quality is determined by process control, materials, and inspection rigor.
- "Vias are just holes." Students often underestimate via reliability. Via barrel cracking under thermal cycling is a common field failure mode, particularly in lead-free assemblies that experience higher peak temperatures. Plating quality in the barrel is critical.

### Useful Analogies

- For the lamination/stackup: a multi-layer PCB is like a lasagna — alternating layers of pasta (core/prepreg) and filling (copper patterns), pressed together under heat until the layers are inseparably bonded.
- For controlled impedance: think of it like plumbing — if you change pipe diameter mid-run, you get pressure waves and turbulence at the transition. In high-speed signals, impedance mismatches create reflections that corrupt the signal in the same way.
- For surface finish selection: think of it like choosing a food preservation method. HASL is like canning — robust and forgiving. ENIG is like vacuum sealing — cleaner and more precise but requires the right conditions. OSP is like putting it in the fridge — effective but time-limited.

### Discussion Questions

1. A customer sends you a 10-layer board design with blind vias, controlled impedance, and an ENEPIG finish requirement. What questions would you ask before sending it to your preferred fabricator?
2. You receive a shipment of bare boards and notice that some pads have a slightly gray discoloration instead of bright gold. The finish is ENIG. What might be happening, and what would you do?
3. Why does a board assembly shop care about how a PCB was fabricated? Isn't that the fabricator's problem?
4. A design engineer wants to change a board from 4-layer to 6-layer to improve EMI performance. What other changes to the board spec might be required or affected?

---

## 9. Hands-On and Discussion Exercises

### Exercise 1 — Board Examination Station (30 minutes)

Set up three to five stations, each with a different PCB type and a loupe or digital microscope. Include: a 2-layer HASL board, a 4-layer ENIG board with fine-pitch BGAs, an HDI board with visible laser-drilled microvias, a flex or rigid-flex board, and a V-scored panel before depaneling. Give students a worksheet with questions for each station: How many layers does this appear to have? What surface finish do you think this is, and why? Can you find a via? Can you identify the solder mask opening shape around a pad? Can you find the silkscreen reference designators? Students rotate through stations and compare observations in a debrief discussion.

### Exercise 2 — Reading a Fabrication Specification (25 minutes)

Provide students with a simplified (one-page) PCB fabrication specification drawing. Include deliberately challenging elements: a controlled impedance requirement referencing a specific stackup, copper weights that differ by layer, a surface finish with a military or IPC specification number, and a note about via fill requirements. Ask students to answer a structured list of questions: What is the finished board thickness? What copper weight is specified on the outer layers vs. inner layers? What surface finish is required? Is controlled impedance required, and if so, on which layers? What IPC performance class is specified? Debrief as a group, correcting misreadings and discussing where ambiguities exist in the spec.

### Exercise 3 — Defect Identification (20 minutes)

Provide a printed set of PCB photographs showing various fabrication defects: solder mask voids, drill breakout, ENIG black pad (close-up of corroded nickel under gold), a cross-section showing insufficient barrel plating, a panel with misregistered drill holes, and a board with trace lifting. For each image, ask students to: name the defect type if they can, describe what they see, explain whether this board should be accepted at incoming inspection, and predict what assembly problem might result if the defect is missed. This exercise develops the visual vocabulary for incoming inspection and reinforces the connection between fabrication quality and assembly outcomes.

---

## 10. Assessment Suggestions

**Option A — Annotated Stackup Drawing (individual):**
Provide students with a blank 4-layer stackup diagram (two outer copper layers, two inner layers, prepreg and core shown). Ask them to label all elements, specify appropriate copper weights for a mixed-signal board with one power plane and one ground plane, specify a surface finish and justify the choice, and identify where controlled impedance traces would most likely appear. Assess for completeness, technical accuracy, and quality of justification.

**Option B — Fabrication Spec Review (paired):**
Give student pairs a complete (real or realistic) PCB fabrication specification and ask them to identify: any parameters that appear to be outside standard capability, any inconsistencies or ambiguities in the spec, and three questions they would send to a fabricator as part of a pre-quote review. Assess for critical reading ability and understanding of manufacturing constraints.

**Option C — Short Quiz (10–15 questions):**
Factual questions covering: substrate material properties, via type definitions, surface finish characteristics and trade-offs, fabrication process sequence, solder mask function, and panelization methods. Suitable for standardized assessment across cohorts.

---

## 11. Recommended Resources

- IPC-4101 — Specification for Base Materials for Rigid and Multilayer Printed Boards (defines FR4 grades and other substrate materials)
- IPC-6012 — Qualification and Performance Specification for Rigid Printed Boards (the primary bare board quality specification)
- IPC-2221 — Generic Standard on Printed Board Design (covers trace/space, via design, stackup considerations, controlled impedance)
- IPC-7711/7721 — Rework, Repair, and Modification of Electronic Assemblies (contains cross-section photography and defect illustrations useful for the defect identification exercise)
- Rogers Corporation technical literature on high-frequency laminate materials and dielectric properties (widely available from the manufacturer)
- PCB fabricator design guides (many major fabricators publish detailed, free design rule guides with stackup examples and surface finish comparisons — Würth Elektronik and others publish particularly comprehensive versions)
- SMTA technical papers on PCB fabrication quality, incoming inspection practices, and correlation between bare board defects and assembly yield
- IPC white papers on HDI design and fabrication, and on ENIG black pad failure analysis
- Cross-section photography collections from PCB failure analysis laboratories (used in IPC training materials and available through IPC member resources)
