# CC-L2-03: Inspection and Test — AOI, X-ray, ICT, Flying Probe, and Functional Test

**Clark Courses — Level 2: Professional Practice**
Hamilton, Ontario | CLARK Electronics Manufacturing

---

## 1. Course Overview

Inspection and test are the mechanisms by which an assembly operation knows — with evidence — that it has built what was specified. This course examines the full spectrum of inspection and test technologies used in PCB assembly, from automated optical inspection integrated into the SMT line to flying probe, ICT, and functional test at the back end. The course treats inspection and test not as bureaucratic steps but as information-generating processes: the goal is to understand what each method can and cannot detect, at what cost, at what point in the process, and how the resulting data should drive process improvement. Participants will leave with the analytical framework to specify inspection strategies, interpret test data, and integrate inspection findings into meaningful quality metrics.

---

## 2. Learning Objectives

- Distinguish between defect detection and defect prevention, and articulate why inspection strategy decisions have a larger impact on quality than individual inspection actions.
- Explain how 3D AOI generates a three-dimensional measurement of a solder joint and identify the key parameters — lighting, optics, and algorithm type — that determine detection capability.
- Evaluate the trade-off between false call rate and escape rate in AOI programming, and describe the impact of each on production throughput and field quality.
- Describe the physical principles of X-ray transmission in solder inspection, and apply IPC-7095 acceptance criteria to interpret a BGA X-ray image for voids, bridging, and missing balls.
- Explain the operating principle of in-circuit test (ICT), specify the design features required to support ICT, and identify the risks of backdriving and the boundary scan alternative.
- Compare flying probe and ICT on key dimensions: test coverage, cost, speed, and appropriate application scenarios.
- Interpret first-pass yield, test escape rate, and test coverage metrics together as a system, and explain what each metric reveals about process and test program quality.

---

## 3. Target Audience

Quality engineers, test engineers, process engineers, and manufacturing engineers involved in assembly quality planning and test strategy development. Also appropriate for production managers who need to understand the economics of test, NPI engineers planning the test strategy for a new product, and EMS account managers who need to communicate test options to customers.

---

## 4. Prerequisites

Recommended Level 1 completions:
- CC-L1-01: Introduction to PCB Assembly — How Electronics Gets Built
- CC-L1-03: Quality Fundamentals — IPC Standards, Inspection, and Documentation

Participants should have basic familiarity with PCB assembly processes and understand what solder joints are expected to look like. No prior test engineering experience is required; the course builds from first principles.

---

## 5. Duration and Format

**Duration:** 1.5 days (12 hours of instruction)
**Format:** Instructor-led classroom with lab demonstration sessions. Approximately 50% lecture and discussion, 50% lab observation, hands-on data interpretation exercises, and case study discussions. Access to an AOI system (post-reflow preferred), an X-ray system (even for brief demonstration), and test data from ICT or flying probe systems is required for the lab components.

---

## 6. Module Outline

### Module 1: Inspection Philosophy — Detection, Prevention, and Value Placement

**Session 1.1: The Difference Between Detection and Prevention**
100% inspection does not produce a 100% defect-free output stream — a counterintuitive but critical point for any quality professional to internalize. Every inspection system has a false call rate (flagging good product as defective) and an escape rate (passing defective product). Detection is reactive: it finds defects after they are made. Prevention acts on the process parameters and materials that produce defects before they occur. An inspection-heavy strategy with a neglected process is more expensive, slower, and less effective than a capable process with verification-level inspection. Students will trace the economics of both strategies using a simple first-pass yield model.

**Session 1.2: Where in the Process Inspection Adds the Most Value**
Inspection at the earliest possible point in the process minimizes the cost of the defect: a misprint caught at SPI costs a board cleaning cycle; the same defect caught at final visual inspection costs rework of a fully assembled board; the same defect escaping to field return costs warranty, field service, and reputational damage. This cost-of-quality escalation model is the justification for in-line inspection at each major process step. Students map the detection points for five common SMT defect types (solder bridge, cold joint, tombstone, missing component, wrong polarity) across the inspection stations in a typical SMT line and identify which defect types are best caught at which step.

**Session 1.3: Building an Inspection Strategy — Risk-Based Thinking**
Not all solder joints are equal in consequence: an incorrect resistor value on a pull-up in a non-critical net is a very different risk from a missing decoupling capacitor near a high-speed processor, or a solder bridge on a high-voltage power rail. Risk-based inspection strategy allocates the most rigorous inspection to the highest-consequence features. Students are introduced to a simple risk matrix (consequence of failure × probability of occurrence) as a tool for selecting inspection method, frequency, and acceptance criteria for different board regions.

---

### Module 2: Automated Optical Inspection (AOI) — Technology, Programming, and Integration

**Session 2.1: How Machine Vision Works — Lighting, Optics, and Algorithms**
AOI machines use structured lighting (multi-angle LED arrays, often with multiple colors and polarization) to maximize surface feature contrast: specular reflection from well-wetted solder fillet surfaces, diffuse reflection from oxidized or dull surfaces, and shadow patterns indicating component height or misalignment. 2D AOI captures one or more top-down images and applies pixel-level comparison algorithms. 3D AOI adds a structured light projector (fringe projection or photometric stereo) to reconstruct height maps of the board surface, enabling volumetric measurement of solder joints rather than just area. The measurement capability of 3D AOI for joint volume is what makes it a process monitoring tool rather than only a pass/fail filter.

**Session 2.2: Programming an AOI — Library-Based vs. Trained Programs**
Library-based AOI programming builds inspection parameters from a component library (package footprint, nominal dimensions, polarity marking location) combined with CAD data from the board design. The program is assembled rapidly but may require tuning for board-specific variations in lighting response, solder fillet shape, or component marking variations across manufacturers. Trained programs are built by imaging a known-good board and setting acceptance thresholds based on measured variation across a sample set of good joints. Trained programs capture real-world variation but require a population of known-good boards and periodic retraining as materials or processes change. Students walk through the AOI programming workflow for a sample component, identifying the parameters to be set and the decisions that affect false call and escape rate.

**Session 2.3: False Call Rate vs. Escape Rate — The Operating Point Trade-Off**
A tight inspection threshold reduces escapes (defects passing inspection) but increases false calls (good boards flagged for manual review). Each false call costs operator time for manual review verification and risks introducing defects during re-handling. An excessively loose threshold reduces false calls but allows defects to escape. The optimal operating point depends on the relative cost of a false call vs. an escape in the specific production context — which in turn depends on the product's application, the subsequent test stages that will catch escapes, and the cost of field failure. Students calculate the operating cost of three different threshold settings for a simulated production run and identify the optimal setting under two different cost assumptions.

---

### Module 3: X-Ray Inspection — Physics, BGA Inspection, and Automated AXI

**Session 3.1: X-Ray Physics and Solder Contrast**
X-ray inspection relies on the differential X-ray absorption of solder relative to substrate, copper, and component body materials. Tin (the primary constituent of both SAC305 and SnPb alloys) has high atomic number and absorbs X-rays strongly, producing high contrast against the glass-epoxy substrate. SAC305 and SnPb produce similar contrast levels; the silver content of SAC305 contributes marginally higher absorption. The image is a two-dimensional projection of three-dimensional structures, meaning that stacked features (through-hole pins, multi-layer copper planes, component leads) can overlap and obscure each other. 3D X-ray (computed tomography, CT, or laminography) reconstructs cross-sectional slices, eliminating overlap and enabling precise measurement of void geometry and joint topology.

**Session 3.2: BGA Inspection Criteria — Voids, Bridging, Missing Balls, and Non-Wet**
BGA joints are not visible from the top surface of the board and cannot be reliably inspected by optical methods; X-ray is the primary inspection method. The X-ray image of a BGA shows each ball as a circular projection: a fully wetted, void-free ball appears as a uniform density circle; a void appears as a lighter circular region within the ball image; a bridge between adjacent balls appears as a light smear connecting two ball images. Missing balls appear as absent circles in the grid pattern. Non-wet balls appear as an irregular ball image (the ball may have rolled or been displaced from its pad). IPC-7095 acceptance criteria are reviewed: maximum allowable void percentage per ball (typically 25% area), and the more stringent limits applied to thermal management balls directly below the package.

**Session 3.3: Automated X-Ray Inspection (AXI) vs. Manual X-Ray**
Automated AXI systems use computed laminography or sequential layer tomography to generate slice images through the BGA array, measuring void percentage, ball diameter, and bridge detection at full production line speeds (1–5 seconds per board for laminography, longer for full CT). Manual X-ray involves an operator examining projected X-ray images on a monitor, often with magnification, at low throughput — suited to failure analysis, auditing, and NPI first article inspection rather than 100% production screening. The economics of AXI (capital cost, throughput, fixture-free operation) vs. manual X-ray (low capital, operator-intensive, high skill requirement) are evaluated in the context of BGA-populated product volume.

---

### Module 4: In-Circuit Test (ICT) — Fixture Design, Coverage, and Limits

**Session 4.1: Bed-of-Nails Fixture Design and Test Coverage**
ICT applies a bed-of-nails fixture — a custom-built spring-loaded probe array — to simultaneously contact all test points on the bottom side of the board. The test system applies voltages and measures currents to test for opens (broken connections), shorts (unintended connections), and component values (resistance, capacitance, inductance). ICT test coverage — the percentage of circuit nodes accessible for testing — is directly limited by the density of accessible test points. IPC-2221 recommends a minimum test point grid of 2.0 mm (with 1.5 mm capable for dense designs); via-as-test-point and dedicated test pad design are discussed. Fixture cost (typically $5,000–$25,000 CAD depending on board size and probe density) and lead time (3–6 weeks) are significant NPI considerations.

**Session 4.2: Backdriving Risks and Boundary Scan as an Alternative**
ICT tests components by applying signals to their input pins and measuring outputs — a practice called backdriving when it forces a logic state onto a pin that may be driven low or high by another active device on the board. Backdriving can damage output drivers, particularly on CMOS and LVDS outputs, if the overdrive current is not limited. The test engineer must identify backdriving hazards in the circuit and use current-limited measurement techniques or isolation strategies. Boundary scan (JTAG, IEEE 1149.1) provides a software-controlled alternative for testing digital connectivity: dedicated boundary scan cells in ICs can drive and sense their I/O pins under software control, testing board-level connectivity without physical probing. Students compare the test coverage of a hybrid ICT + boundary scan strategy against a full ICT strategy for a sample board.

**Session 4.3: Fixture Economics, Density Limits, and the ICT Decision**
The financial break-even between ICT and flying probe is typically reached at 150–400 boards per product lifetime, depending on board complexity, test time, and fixture cost amortization. Below the break-even, the fixture cost per board exceeds the reduced labor cost of ICT over flying probe. Above the break-even, ICT's superior throughput (typically 15–60 seconds per board vs. 10–60 minutes for flying probe) drives cost advantage. Students work through a break-even calculation for a provided scenario and identify which additional factors (time-to-market, test coverage requirements, fixture availability) would shift the decision.

---

### Module 5: Flying Probe Test — Principles, Coverage, and Use Cases

**Session 5.1: How Flying Probe Works and What It Tests**
A flying probe machine uses two to eight motorized probes that move under CNC control to contact individual test points on the board sequentially. It requires no custom fixture; the test program is generated from CAD net list data and adjusted by the test engineer. Flying probe can test opens, shorts, component values, and with four-wire Kelvin measurement, accurate resistance at low values. Some flying probe systems incorporate optical cameras for component presence, polarity, and marking verification, adding hybrid AOI capability. Because each net is tested sequentially, total test time scales with board complexity — a dense, high-net-count design may require 30–90 minutes of flying probe test time per board.

**Session 5.2: Test Coverage Comparison — Flying Probe vs. ICT**
Flying probe achieves comparable opens and shorts coverage to ICT if the board has adequate test point access. However, flying probe cannot test at the functional speed of the board (it tests statically), and it cannot apply powered, in-circuit functional stimuli to analog circuits the way ICT can. Functional test coverage — verifying that a circuit performs its intended function — requires additional test resources beyond what flying probe provides for static parameters. Students map the test coverage of flying probe, ICT, and functional test against a list of 20 fault types for a hypothetical board and identify which faults are uniquely caught by each method.

**Session 5.3: Flying Probe in NPI and Low-Volume Production**
Flying probe is the dominant test method for NPI (new product introduction) and prototype boards because it requires no fixture and can be programmed from CAD data in hours rather than weeks. It provides early confirmation of board-level connectivity and component population before functional test equipment is ready. In ongoing low-volume production (fewer than 50–100 boards per week for most products), the absence of fixture amortization keeps flying probe cost-competitive even at its lower throughput. The instructor should discuss how many EMS shops run flying probe for 100% of low-volume product and ICT only for high-volume, and what the transition trigger typically looks like in practice.

---

### Module 6: Functional Test, Environmental Stress Screening, and Test Data

**Session 6.1: Functional Test — Philosophy, Coverage, and Custom Equipment**
Functional test applies power to the assembled board and exercises it in a manner representative of its end-use function. Test coverage in functional test is defined by the set of exercised functions vs. the total design functionality — a 60% functional test coverage means 40% of the board's functions are not exercised. Custom functional test equipment (a test jig with power supplies, signal generators, measurement instruments, and a test software application) must be designed, built, and validated alongside the product — this is the most expensive and time-consuming aspect of test strategy planning for a new product. Students discuss the functional test coverage trade-off: more coverage costs more to build and maintain; less coverage increases escape risk to field.

**Session 6.2: Environmental Stress Screening — Temperature Cycling and Vibration**
Environmental Stress Screening (ESS) applies accelerated stress to 100% of product to precipitate latent defects (intermittent solder joint defects, component early life failures, contamination-driven issues) that would not appear in ambient functional test. Temperature cycling (typically −40°C to +85°C for commercial products, extended ranges for military) stresses solder joints thermomechanically, accelerating crack propagation in marginal joints. Vibration screening exposes loose component parts, connector intermittencies, and resonance-induced failures. Burn-in (extended high-temperature power-on soak) is used for high-reliability products to screen out early-life IC failures following the Weibull bathtub curve. Students review an ESS specification for a military product and identify the test purpose of each stress step.

**Session 6.3: Test Data, Traceability, and First-Pass Yield Metrics**
Linking test results to individual board serial numbers (or traveler IDs) enables traceability: when a field failure occurs, the entire test history for that specific unit is retrievable, supporting root cause analysis and corrective action. First-pass yield (the fraction of boards passing all test stages without any rework or repair) is the primary operational quality metric. Test escape rate (defects per unit reaching the field that were not caught by test) is the primary customer quality metric. Test data archiving requirements (duration, format, access) are specified in customer contracts and regulatory frameworks (medical, aerospace) — students examine a sample test data specification and identify the archiving, format, and access requirements.

---

## 7. Key Terms and Concepts

**First-pass yield (FPY)** — The percentage of boards that pass all inspection and test steps without requiring any rework, repair, or re-test; a primary indicator of assembly process capability.

**Escape rate** — The fraction of defective boards that pass through an inspection or test step undetected; the complement of detection effectiveness.

**False call rate** — The fraction of conforming (good) boards that are incorrectly flagged as defective by an inspection or test system; directly impacts throughput and handling cost.

**3D AOI** — An automated optical inspection system that uses structured light projection to generate height-map data in addition to 2D imaging, enabling volumetric measurement of solder joints.

**Fringe projection** — A 3D AOI measurement technique in which a pattern of alternating light and dark fringes is projected onto the board surface; deformation of the fringe pattern by surface topography is used to calculate height.

**AXI (Automated X-ray Inspection)** — An in-line X-ray inspection system that uses computed laminography or tomography to generate two-dimensional slice images through a BGA or other hidden-joint assembly at production speeds.

**Computed laminography** — An X-ray imaging technique that generates a focused image of a specific depth plane by combining multiple X-ray images taken at different angles; used in AXI for BGA joint inspection without full CT reconstruction.

**Bed-of-nails fixture** — A custom ICT test fixture with spring-loaded probes arranged to contact all test points on a specific PCB simultaneously; enables high-throughput in-circuit testing.

**Test coverage** — The fraction of circuit nodes, fault types, or functional behaviors exercised by a given test method; no single test method achieves 100% coverage of all possible fault types.

**Backdriving** — An ICT technique in which a test stimulus signal is applied to a circuit node that is also driven by an active device output; creates a risk of overcurrent damage to the driven device.

**Boundary scan (JTAG)** — A digital test methodology (IEEE 1149.1) using dedicated scan cells in ICs to drive and sense I/O pins under software control, enabling board-level connectivity testing without physical probing.

**Flying probe** — A fixtureless test method using CNC-controlled probes to contact individual test points sequentially; requires no custom fixture and is suited to NPI and low-volume production.

**Environmental Stress Screening (ESS)** — The application of accelerated thermal, vibration, or electrical stress to 100% of production units to precipitate and expose latent manufacturing defects before product reaches the field.

**Burn-in** — A high-temperature, extended power-on soak applied to assembled boards or systems to screen for early-life component failures; based on the Weibull early-failure (infant mortality) distribution model.

**Test escape** — A defective assembly that passes through all test stages and reaches the customer or field without the defect being detected.

---

## 8. Instructor Notes

The single most important conceptual shift for participants in this course is moving from a "more inspection equals more quality" mental model to a "capable process with targeted verification" mental model. This deserves explicit attention at the start of the course and repeated reinforcement throughout. The cost-of-quality framework in Module 1 is the right tool for this.

The AOI programming exercise in Module 2 requires access to an AOI machine with a live or simulated programming environment. If the Clark facility's AOI is available for a 30-minute teaching session, this is far more valuable than any slide-based explanation of the programming workflow. If it cannot be accessed mid-production, consider scheduling this session at the start or end of a shift.

For the X-ray module, the most common challenge is sourcing BGA X-ray images that are clear enough for training use but not covered by customer confidentiality. The Clark facility should maintain a library of training X-ray images from non-confidential builds. If this library does not exist, it should be created — images of known-void, known-bridge, and known-good BGA assemblies are the minimum needed. Alternatively, IPC-7095 includes reference images that can be used for instruction.

The ICT break-even calculation in Module 4 Session 3 is a practical financial tool that participants often find immediately useful in their work. Allow time for participants to work through their own current product scenarios if they have relevant data — this is where the course becomes directly applicable to their job.

Instructors should be prepared to address the question of why functional test coverage is almost never 100%. The answer requires honest discussion of the cost and complexity of test equipment development — and the risk mitigation trade-off — which is a nuanced conversation that benefits from the instructor drawing on real project examples.

---

## 9. Hands-On and Discussion Exercises

### Exercise 1: AOI Operating Point Decision

Participants are given a scenario: an AOI system on a high-volume SMT line is currently set to a threshold that produces an 8% false call rate and a 0.3% escape rate. The line runs 1,200 boards per shift, each board takes an average of 4 minutes to review per false call, and the labor rate for manual review is $35/hour. Each AOI escape that reaches field return costs an average of $480 in warranty and logistics cost. Field return data shows approximately 22% of escapes are AOI-type defects. Participants must calculate the current cost of false calls per shift, the current cost of escapes per shift reaching the field, and then recalculate both for two alternative threshold settings provided. They must justify which threshold they recommend and identify what process improvement actions would allow a tighter threshold without increasing false calls.

### Exercise 2: BGA X-Ray Image Interpretation

Each participant or pair receives a set of five BGA X-ray images (printed or displayed on screen) representing: a fully acceptable joint array, a joint with a single large void exceeding IPC-7095 limits, a bridge between two adjacent balls, a missing ball at a corner location, and a non-wet ball with the ball displaced from its pad. Using an IPC-7095 acceptance criteria reference card, participants classify each image as Accept or Reject, document the specific criterion applied, and write one sentence identifying the most likely root cause of each defect. The group then reviews and discusses any disagreements — borderline cases in the void images are particularly valuable for discussion.

### Exercise 3: Test Strategy Specification for a New Product

Participants are given a one-page new product brief: a wireless industrial sensor module with a BGA microcontroller, several SMT passives, a RF front-end module, two board-to-board connectors, and a 12-pin through-hole power connector. Expected production volume is 200 units per month. Participants must write a test strategy specification (1–2 pages) identifying: what inspection steps are included at each process stage (post-print SPI, post-place AOI, post-reflow AOI, X-ray, functional test), whether ICT or flying probe is recommended, the rationale for each decision, what functional test coverage is required, and what traceability data must be captured. Groups present their strategies and the class discusses the areas of agreement and disagreement.

---

## 10. Assessment Suggestions

**Inspection Strategy Justification Quiz:** Ten short-answer questions requiring participants to justify specific inspection technology choices for described scenarios (e.g., "You are introducing a BGA-heavy board in low-volume production — justify your X-ray strategy"). Evaluated on technical accuracy and quality of reasoning.

**Test Coverage Analysis Report:** Participants receive a net list and fault catalogue for a hypothetical board and a description of the available test resources (AOI, flying probe, functional test). They must calculate the estimated test coverage for each fault type under the current test strategy, identify the top three coverage gaps, and propose additions or modifications to the test strategy to close them. Evaluated on systematic coverage analysis and practicality of recommendations.

**Practical X-Ray Classification Exercise:** If X-ray access is available, participants view and classify a set of BGA assemblies under X-ray (or from a saved image library), recording their findings in a structured inspection record consistent with the facility's internal format. Evaluated on classification accuracy and documentation quality against a reference answer key.

---

## 11. Recommended Resources

- IPC-A-610: Acceptability of Electronic Assemblies — visual inspection acceptance criteria for all joint types
- IPC-7095: Design and Assembly Process Implementation for BGAs — BGA inspection criteria, void limits, X-ray interpretation
- IPC-2221: Generic Standard on Printed Board Design — test point design requirements for ICT
- IPC-9252: Requirements for Electrical Testing of Unpopulated Printed Boards
- IEEE 1149.1: Standard Test Access Port and Boundary Scan Architecture (JTAG)
- MIL-HDBK-344: Environmental Stress Screening of Electronic Equipment
- Agilent/Keysight Technologies: *In-Circuit Test Implementation Handbook* (available from Keysight) — ICT design and fixture guidance
- SMTA Technical Library — papers on AOI programming optimization, false call reduction, and AXI methodology
- Goepel Electronic: JTAG/Boundary Scan Handbook — practical boundary scan implementation guide
- Test and Measurement World (testmeasurementworld.com) — industry articles on ICT, flying probe, and AXI
- IPC-HDBK-515: Guidelines and Methods for the Evaluation and Identification of Counterfeit Electronic Components — relevant for incoming inspection
