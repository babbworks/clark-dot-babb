# CC-L1-03 — Components: A Visual and Technical Survey of What Goes on Boards

**Clark Courses | Level 1: Foundations**
**Course Code:** CC-L1-03
**Version:** 1.0 | March 2026

---

## 1. Course Overview

This course provides a comprehensive visual and technical survey of the electronic components that populate printed circuit boards — what they are, what they do, how they are packaged, how to handle them safely, and how to read the documentation that governs their use. Students will develop the ability to visually identify major component categories and package types, interpret datasheets, apply correct ESD and moisture sensitivity handling procedures, and understand why component obsolescence and approved-vendor management matter to a manufacturing organization. This knowledge underpins every other discipline in electronics assembly: you cannot solder, inspect, program, test, or purchase what you cannot identify and understand.

---

## 2. Learning Objectives

Upon completing this course, participants will be able to:

- Identify and describe the function of the major categories of passive components — resistors, capacitors, inductors, and protection devices — including the key variants within each category.
- Identify and describe the function of active discrete components — diodes and transistors — and explain the basic operational principle distinguishing each major type.
- Describe the major categories of integrated circuits by function (logic, memory, microcontroller, FPGA, etc.) and explain what distinguishes each category at the application level.
- Identify common connector and electromechanical component types and explain their assembly and mechanical considerations.
- Trace the evolution of component packaging from through-hole DIP to advanced packages such as BGA, QFN, and flip-chip, and explain the manufacturing implications of each package type.
- Explain how to read a component datasheet, identifying the sections relevant to assembly: package drawing, absolute maximum ratings, recommended operating conditions, and soldering information.
- Describe ESD sensitivity, MSL (Moisture Sensitivity Level), and DKBR (Do Not Buy, Restricted) policies and apply correct handling procedures for each.

---

## 3. Target Audience

This course is intended for:

- Assembly operators and line technicians who handle components and need to recognize what they are working with.
- Materials handlers, kitting staff, and storeroom personnel responsible for receiving, storing, and issuing components.
- Quality inspectors who perform incoming component inspection or first-article inspection.
- Procurement and supply chain staff who need working knowledge of the components they are purchasing.
- Engineers and technologists new to electronics manufacturing who need a broad survey before specializing.

---

## 4. Prerequisites

CC-L1-01 and CC-L1-02, or equivalent. Students should understand the basic concept of a PCB and how components are attached to it before taking this course. No prior electronics theory is required, but basic familiarity with the concept of electrical circuits is helpful.

---

## 5. Duration and Format

- **Total Duration:** 8 hours
- **Format:** Instructor-led, classroom-based; physical component sample kit strongly recommended
- **Session Structure:** Four 2-hour sessions across two days, or two full-day blocks
- **Materials:** Slides, component identification reference cards, datasheet examples, physical component samples, ESD awareness materials, MSL label examples
- **Room Setup:** Classroom style with tables; component sample trays visible to all students; a projector-connected digital microscope is valuable for showing small components at scale

---

## 6. Module Outline

### Module 1 — Passive Components

**Topic 1.1 — Resistors: Chip, MELF, Wirewound, and Array**

A resistor is a passive component that opposes the flow of electrical current, converting electrical energy to heat in a controlled and predictable way. Chip resistors (the ubiquitous rectangular SMT package in sizes from 0201 through 2512) dominate modern assembly; they are rated by resistance value, tolerance, power rating, and temperature coefficient. MELF (Metal Electrode Leadless Face) resistors use a cylindrical body and offer better power handling and lower noise than chip types, but are prone to rolling on the stencil during paste print. Wirewound resistors wind resistance wire around a ceramic core and are used for high-power and precision applications. Resistor arrays consolidate multiple matched resistors into a single package, saving board space in applications such as pull-up/pull-down networks and termination arrays. Reading a chip resistor marking code (three or four digit numeric, or E-series EIA-96 code) is a practical skill for operators and inspectors.

**Topic 1.2 — Capacitors: MLCC, Electrolytic, Tantalum, and Film**

Capacitors store electrical charge and are used for power supply bypassing and decoupling, filtering, coupling AC signals while blocking DC, and timing applications. Multi-Layer Ceramic Capacitors (MLCC) are the dominant capacitor type in SMT assembly — compact, reliable, and available from picofarads to tens of microfarads, but subject to cracking from mechanical stress and flex. Electrolytic capacitors (aluminum electrolytic) store large capacitance values in relatively compact packages and are essential for bulk power supply filtering, but are polarized (polarity reversal destroys them), have limited operating temperature ranges, and degrade over time. Tantalum capacitors offer higher capacitance density and better ESR than aluminum electrolytics and are widely used in portable electronics, but are sensitive to overvoltage and reverse polarity — a miswired tantalum can ignite. Film capacitors use polymer dielectric films and offer low loss and stability, commonly used in audio, filtering, and precision applications.

**Topic 1.3 — Inductors, Ferrite Beads, and Protection Devices**

Inductors store energy in a magnetic field and are used in power conversion (buck/boost converters), RF filtering, and signal processing. Their key parameters are inductance value, DC resistance (DCR), saturation current, and self-resonant frequency. Ferrite beads are a related component — they appear inductive at low frequencies but convert noise energy to heat at high frequencies, functioning primarily as EMI filters rather than energy-storage inductors; they are placed in series on power and signal lines. Varistors (Metal Oxide Varistors, MOV) are voltage-dependent resistors that clamp overvoltage spikes to protect downstream circuitry; they are used for surge protection on AC power inputs and data lines. Thermistors are temperature-dependent resistors: NTC (Negative Temperature Coefficient) types decrease in resistance as temperature rises (used in temperature sensing and inrush current limiting); PTC types increase in resistance as temperature rises (used as self-resetting overcurrent protection fuses). Fuses are single-use overcurrent protection devices; resettable polyfuses use PTC technology.

---

### Module 2 — Active Discrete Components

**Topic 2.1 — Diodes: Rectifier, Zener, Schottky, TVS, and Optocouplers**

A diode is a two-terminal semiconductor device that allows current to flow predominantly in one direction. Rectifier diodes convert AC to DC by passing current in one direction only; their key parameters are forward voltage drop, reverse voltage rating, and current rating. Zener diodes are designed to operate in reverse breakdown at a precise voltage (the Zener voltage), making them useful as voltage references and clamps. Schottky diodes use a metal-semiconductor junction rather than a p-n junction, resulting in a lower forward voltage drop (~0.3V vs ~0.7V) and faster switching speed — used extensively in switching power supplies and RF circuits. TVS (Transient Voltage Suppressor) diodes are designed to absorb transient energy spikes on signal and power lines, protecting sensitive downstream components; they are similar in function to MOV varistors but respond faster and are more precise. Optocouplers (optoisolators) combine an LED and a photodetector in a single package to pass a signal across a galvanic isolation boundary, used extensively in power supplies, industrial I/O interfaces, and medical equipment.

**Topic 2.2 — Transistors: BJT, MOSFET, and JFET**

Transistors are three-terminal active devices capable of amplification and switching. Bipolar Junction Transistors (BJT) — NPN and PNP types — are current-controlled devices in which a small base current controls a larger collector-emitter current; they are used in analog amplification, switching applications, and as output drivers. MOSFETs (Metal-Oxide-Semiconductor Field-Effect Transistors) are voltage-controlled devices in which a gate voltage controls the drain-source current with very high input impedance, making them preferred for power switching (P-channel and N-channel types), digital logic, and motor control. JFETs (Junction Field-Effect Transistors) are an older voltage-controlled device type used in low-noise amplifier applications and analog signal processing. In assembly contexts, the key knowledge is correct orientation (identifying source, drain, and gate or emitter, collector, and base from package markings), ESD sensitivity for MOSFETs, and the thermal considerations for power transistors.

---

### Module 3 — Integrated Circuits

**Topic 3.1 — Logic, Memory, and Programmable Devices**

Logic integrated circuits perform Boolean operations on digital signals. The original 74-series TTL logic family (dating to the 1960s) and its CMOS successors (74HC, 74HCT, 74LVC, etc.) remain in widespread use as building blocks — gates, buffers, shift registers, multiplexers. Memory ICs store data: SRAM (Static RAM) retains data as long as power is applied; DRAM (Dynamic RAM) requires periodic refresh cycles; Flash/NAND memory retains data without power (used in USB drives, SSDs, and embedded firmware storage); EEPROM (Electrically Erasable Programmable Read-Only Memory) is used for non-volatile parameter storage in embedded systems. FPGAs (Field Programmable Gate Arrays) are reconfigurable silicon — their internal logic fabric is defined by programming after manufacture, allowing a single physical device to implement different hardware functions. ASICs (Application-Specific Integrated Circuits) are custom silicon designed for one specific function; they are costly to develop but highly optimized for their application.

**Topic 3.2 — Microcontrollers, Microprocessors, DSPs, and SoCs**

Microcontrollers (MCUs) integrate a processor core, memory (Flash for program storage, RAM for data), and peripheral interfaces (GPIO, UART, SPI, I2C, ADC, timers, PWM) on a single chip. They range from simple 8-bit devices for basic control tasks to 32-bit ARM Cortex-M series parts that run real-time operating systems and handle complex signal processing. Microprocessors are processor cores that require external memory and peripheral chips; they are used in applications requiring higher performance and more complex operating systems (Linux, embedded Android). DSPs (Digital Signal Processors) are optimized for the mathematical operations required by audio processing, communications, and sensor fusion. SoCs (Systems on Chip) integrate processor(s), memory, graphics, connectivity (Wi-Fi, Bluetooth, cellular), and application-specific logic on a single die — the defining device of the modern smartphone and IoT era. From an assembly standpoint, the critical knowledge is package type (often fine-pitch BGA), handling requirements, programming and configuration (is the chip pre-programmed or does it need in-circuit programming?), and the distinction between leaded and lead-free configurations.

**Topic 3.3 — Crystals, Oscillators, and Timing Devices**

Virtually every digital system requires a precision timing reference. Crystals (quartz resonators) use the piezoelectric effect of a cut quartz plate to produce a highly stable oscillation frequency; they require external oscillator circuitry and are sensitive to mechanical shock during handling. Crystal oscillators integrate the quartz resonator with the oscillator circuit in a sealed package, providing a complete clock output. TCXOs (Temperature-Compensated Crystal Oscillators) add circuitry to compensate for the crystal's frequency drift with temperature, used in precision instrumentation and communications equipment. VCXOs (Voltage-Controlled Crystal Oscillators) allow frequency tuning via a control voltage, used in phase-locked loop (PLL) circuits. MEMS oscillators replace the quartz resonator with a silicon MEMS resonator, offering improved shock resistance, smaller size, and compatibility with standard PCB reflow processes (quartz crystals are sensitive to thermal shock and require careful handling).

---

### Module 4 — Connectors, Electromechanical Components, and Transformers

**Topic 4.1 — Connectors: Headers, D-Sub, USB, RJ45, Board-to-Board, FFC/FPC, and RF**

Connectors are the interface points between a PCB and the external world — cables, other PCBs, power supplies, external devices, and antennas. Header/receptacle connectors (2.54mm and 2.0mm pitch pin headers and their mating receptacles) are among the most common PCB connectors, used for power and signal connections in industrial and embedded applications. D-sub connectors (DB9, DB15, DB25) are legacy serial and parallel interface connectors still found in industrial equipment. USB connectors (Type A, Type B, Mini, Micro, Type-C) are universal in consumer and commercial electronics; the mechanically demanding Type-C connector requires careful stencil design for reliable soldering. RJ45 connectors interface Ethernet cabling to PCBs, often incorporating magnetics. Board-to-board connectors (high-density mezzanine types from manufacturers such as Hirose, Molex, and Samtec) allow stacked PCB assemblies in compact enclosures. FFC/FPC (Flexible Flat Cable / Flexible Printed Circuit) connectors interface flexible cables and circuits to rigid PCBs, common in consumer electronics. SMA and related RF connectors interface coaxial cable or antenna feeds to RF circuitry and are sensitive to correct torque and soldering process.

**Topic 4.2 — Electromechanical: Relays, Switches, and Buzzers**

Electromechanical components combine electrical and mechanical action. Relays use an electromagnetic coil to mechanically actuate switch contacts, allowing a low-power signal to control a high-power circuit with galvanic isolation; they are used extensively in industrial control, automotive, and power management applications. PCB-mount relays are typically through-hole components for mechanical robustness, though SMT relay packages exist. Switches — toggle, push-button, DIP switch arrays, rotary encoders — are user interface and configuration elements. Buzzers (piezoelectric or magnetic) provide audible indicators; piezo buzzers require only a voltage drive while magnetic buzzers require an oscillating drive signal. All electromechanical components introduce mechanical stress concerns in assembly — particularly for wave soldering — and long-term reliability considerations from contact wear and sealing.

**Topic 4.3 — Transformers and Magnetics**

Transformers transfer electrical energy between circuits at different voltage levels via magnetic coupling, providing both voltage conversion and galvanic isolation. Switching transformer design is a specialized engineering discipline, but assembly personnel encounter them as physical components that must be handled carefully (heavy for their size, sometimes potted, often with specific orientation requirements), soldered to high standards (poor joints in power magnetics carry significant current), and tested for correct functionality. Common magnetics in PCB assembly include: power transformers in AC-DC converters, gate drive transformers in motor drives, current transformers for sensing, common-mode chokes for EMI filtering, and Ethernet magnetics (typically integrated into RJ45 connectors with integrated magnetics). The key assembly considerations are polarity/orientation marking, thermal mass (requiring extended dwell time in wave solder or selective solder), and post-assembly testing.

---

### Module 5 — Package Evolution, Datasheets, and Handling

**Topic 5.1 — Package Evolution: DIP to Flip-Chip**

Package evolution has been driven relentlessly by the demand for smaller size, more I/O pins, better thermal performance, and lower parasitic inductance/capacitance. DIP (Dual Inline Package) — the classic through-hole IC with two rows of pins — gave way to SOP/SOIC (Small Outline Package) as the first mainstream SMT IC package. QFP (Quad Flat Pack) extended this to four sides, enabling higher pin counts with visible gull-wing leads. BGA (Ball Grid Array) moved the connections underneath the package, dramatically increasing I/O density and improving electrical performance by shortening the connection path — but making visual inspection impossible. QFN (Quad Flat No-Lead) and DFN (Dual Flat No-Lead) provide a flat leadless package with thermal pad — compact, excellent thermal performance, but requiring precise paste printing and placement. CSP (Chip Scale Package) brings the package footprint to within 120% of the die size. Flip-chip directly connects the die to the substrate via solder bumps on the chip face, achieving the shortest possible interconnect — used in processors, FPGAs, and advanced memory. Each package transition requires changes to PCB land pattern design, stencil aperture design, reflow profile, and inspection strategy.

**Topic 5.2 — How to Read a Datasheet**

A component datasheet is the manufacturer's technical specification for the component — it is the authoritative document governing how the component can and cannot be used. Key sections relevant to assembly include: the package drawing and land pattern recommendation (dimensions, tolerances, pad layout); absolute maximum ratings (the hard limits that must not be exceeded under any condition — voltage, current, temperature — exceeding them risks permanent damage); recommended operating conditions (the range within which the part performs to specification); soldering information (recommended reflow profile, peak temperature, time above liquidus, manual soldering guidelines — this section is critical for assembly process setup); and moisture sensitivity level (MSL rating, which governs floor life and bake requirements). Instructors should walk through a complete datasheet for a real mid-complexity component (an NXP or STM32 microcontroller, for example) and demonstrate how to find each critical assembly-relevant parameter.

**Topic 5.3 — ESD, MSL, and Obsolescence**

ESD (Electrostatic Discharge) damage occurs when a static charge difference between a person, tool, or surface and a component discharges through a sensitive semiconductor junction, causing latent or immediate damage that may not manifest until the product is in service. MOSFETs, GaAs RF devices, and certain precision analog components are highly sensitive. The ESDS (ESD Sensitive) marking system and the EPA (ESD Protected Area) requirements, wrist straps, grounded work surfaces, ionizers, and packaging requirements are covered in ANSI/ESD S20.20 and JEDEC standards. MSL (Moisture Sensitivity Level) ratings (JEDEC J-STD-020) define how long a moisture-sensitive component can be exposed to ambient conditions before it must be baked and soldered; components that absorb moisture and are then subjected to solder reflow temperatures can experience internal delamination ("popcorning"). DKBR (Do Not Buy, Restricted) is a supply chain management category covering: obsolete parts for which the original manufacturer has issued a last-time buy; restricted parts under REACH, RoHS, or military restriction; and parts on a manufacturer's end-of-life notification. Managing DKBR requires coordination between procurement, engineering, and quality.

---

## 7. Key Terms and Concepts

**MLCC (Multi-Layer Ceramic Capacitor):** The dominant SMT capacitor type, constructed of alternating ceramic dielectric and metal electrode layers; valued for compact size and reliability but susceptible to cracking under board flex.

**ESR (Equivalent Series Resistance):** The resistive component of a capacitor's impedance, representing energy losses; a key parameter for power supply decoupling capacitors, where low ESR is required for effective high-frequency noise suppression.

**BJT (Bipolar Junction Transistor):** A three-terminal current-controlled transistor type (NPN or PNP) used for amplification and switching; requires a base current to control collector current.

**MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor):** A three-terminal voltage-controlled transistor with very high input impedance; the dominant device type in power switching and digital logic.

**BGA (Ball Grid Array):** An IC package in which solder balls on the underside of the package form the I/O connections; provides high I/O density and good electrical performance but requires X-ray inspection to verify solder joint quality.

**QFN (Quad Flat No-Lead):** A leadless SMT package with pads on the bottom perimeter and an exposed thermal pad, offering compact size and good thermal performance; requires precise stencil and reflow process.

**CSP (Chip Scale Package):** A package whose footprint is no more than 120% of the die area, representing the most aggressive miniaturization short of bare-die mounting.

**Flip-Chip:** A die mounting technology in which the active face of the silicon die is bonded directly to the substrate via solder bumps, achieving the shortest possible electrical interconnect and used in high-performance processors and advanced memory.

**Datasheet:** The manufacturer's authoritative technical specification document for a component, containing parametric data, package drawings, land pattern recommendations, and soldering information.

**Absolute Maximum Rating:** A datasheet parameter defining the hard limit for a stress condition (voltage, current, temperature) beyond which the component may be permanently damaged; not a design operating point.

**ESD (Electrostatic Discharge):** The sudden flow of electricity between two objects at different electrical potentials; a major cause of latent semiconductor damage in electronics assembly, requiring controlled handling in an ESD Protected Area (EPA).

**MSL (Moisture Sensitivity Level):** A JEDEC classification (levels 1 through 6) indicating how sensitive a component is to moisture absorption and the maximum time it may be exposed to ambient conditions before soldering; higher levels require shorter floor life and may require baking.

**JEDEC:** The Joint Electron Device Engineering Council, a semiconductor standards organization responsible for standards governing component packages, testing, and moisture sensitivity classification.

**DKBR (Do Not Buy, Restricted):** A procurement classification covering obsolete, end-of-life, restricted, or otherwise unsourceable components; triggers a design-change or supply-chain-resolution process.

**Ferrite Bead:** A passive component that presents inductive impedance at lower frequencies but dissipates EMI noise energy as heat at higher frequencies; placed in series on power or signal lines for noise suppression rather than energy storage.

---

## 8. Instructor Notes

### What to Emphasize

The sheer range of component types covered in this course can feel overwhelming to students. Set expectations at the outset: the goal is not memorization of every parameter for every component type, but the development of a visual and conceptual map of the landscape. Students should leave able to pick up an unfamiliar component, identify its general category and package type, and know where to look for the information they need to handle and solder it correctly.

Physical samples are invaluable. A components kit showing each package type — from a 0201 chip resistor (barely visible to the naked eye) to a 300-pin BGA to a large electrolytic capacitor to a D-sub connector — makes the diversity of the landscape tangible in a way slides cannot. If a digital microscope is available, spending ten minutes examining a 0201 resistor end-cap metallization, the ball pattern on a BGA, and the pad geometry of a QFN is highly effective.

The datasheet section tends to be underserved in introductory training but is critically important. Spend time walking through a real datasheet from cover to cover — including the soldering information section and the land pattern recommendation. Engineers and operators who know how to read datasheets are more independent and make fewer process errors.

ESD is frequently taught as a compliance checkbox rather than as a real reliability concern. Use failure statistics if available — the percentage of latent ESD failures that escape test and manifest as field returns is a powerful motivator.

### Common Misconceptions to Address

- "Bigger is better for capacitors." A larger capacitance value is not always better; for high-frequency bypass applications, a smaller capacitor with lower ESR and self-resonant frequency in the right range is more effective than a large one. More is not always more.
- "All ceramic capacitors are the same." The dielectric class matters enormously. C0G/NP0 capacitors are stable and precise; X7R capacitors are widely used general purpose types; Y5V capacitors can lose more than 70% of their rated capacitance at temperature or under DC bias. Substituting one class for another is a real engineering error.
- "SMT packages are fragile." Fine-pitch SMT components are designed for machine placement and reflow, and are extremely robust when processed correctly. They become fragile only when mishandled manually or when the wrong tools and techniques are applied.
- "If it looks right, it is right." BGA solder joints are invisible from above. A BGA that passes visual inspection may have open, cold, or bridged joints underneath. This is why X-ray and boundary scan testing exist.

### Useful Analogies

- For package evolution: component packages are like the evolution of laptop computers — from the briefcase-size original "portable" to the thickness of a legal pad, to the thickness of a hardcover book, to less than a centimeter. Each generation achieves the same function in less space with better performance.
- For MSL: think of a moisture-sensitive component like a sponge in a sealed bag. As soon as you open the bag (start the floor life timer), the sponge begins absorbing moisture from the air. If you bake it in an oven (reflow) before it has absorbed too much, it dries out safely. If it has absorbed too much moisture, the steam generated during reflow can cause internal cracks.
- For ESD: think of a charged component like a charged balloon near a grounded metal object — the discharge is invisible and instantaneous but can cause permanent internal damage to a semiconductor junction the way a physical shock can crack a bone without breaking the skin.

### Discussion Questions

1. You receive a component from a supplier in non-standard packaging with no MSL label. The part matches the part number on the BOM. What do you do before putting it into production?
2. A designer wants to substitute a Y5V capacitor for an X7R capacitor with the same capacitance value to save cost. What is the risk, and how would you evaluate it?
3. Your pick-and-place machine is having difficulty reliably picking a 0201 chip resistor from the tape feeder. What factors might be causing this, and what are the options?
4. A BGA-packaged processor fails functional test after reflow. X-ray shows no visible anomalies. What are the possible causes, and what next steps would you take?

---

## 9. Hands-On and Discussion Exercises

### Exercise 1 — Component Identification Tray (30 minutes)

Prepare a set of 20 to 30 components in individual labeled bins (letters, not names). Include a representative mix: chip resistors in various sizes, an MLCC in multiple case sizes, an electrolytic capacitor, a tantalum capacitor, a ferrite bead, a diode in SOD-123, a MOSFET in SOT-23, a QFP IC, a BGA IC (non-functional sample), a QFN IC, a DIP IC, a crystal, a crystal oscillator, a relay, an RJ45 connector, an FFC connector, and at least one component that students are unlikely to recognize (a TVS array, a MEMS microphone, or a SiP module, for example). Give students a worksheet with columns for: Component Letter, Component Category, Package Type, Notes. Students sort and identify all components, then debrief as a group. The goal is visual familiarity and the development of a systematic identification process.

### Exercise 2 — Datasheet Navigation Relay Race (25 minutes)

Provide each student or pair with the same datasheet (a commonly available, freely downloadable IC datasheet — an STM32 microcontroller or similar). Conduct a "relay race" format: the instructor calls out a specific piece of information (e.g., "What is the maximum storage temperature?"; "What is the recommended peak reflow temperature for lead-free process?"; "What is the land pad dimension for pad A1 in the LQFP-48 package?"; "What is the MSL rating?"). Students race to find and call out the answer. This exercise develops speed and fluency in datasheet navigation, which is a practical daily skill.

### Exercise 3 — ESD and MSL Scenario Cards (20 minutes)

Prepare a set of scenario cards, each describing a situation involving component handling. Examples: "You receive a shipment of FPGA BGAs. The moisture indicator in the bag shows exposure. The bags have been in the storeroom for an unknown period. What do you do?"; "An operator removes a bag of MOSFET transistors from the bench to make room and sets them on a rolling metal cart without a wrist strap. What is the concern and what should be done?"; "A reel of ICs was opened last Tuesday and has been sitting in an ESD bag on the bench since. Today is the following Monday. The MSL rating is 3. What is the floor life for MSL 3, and is this reel safe to use?" Students work in pairs on the scenarios and present their reasoning to the group. This exercise applies both ESD and MSL knowledge to realistic situations.

---

## 10. Assessment Suggestions

**Option A — Component Identification Quiz (practical):**
Present students with a tray of 15 unmarked or lightly marked components. Ask them to identify each by category and package type, note any handling considerations (ESD, MSL), and indicate where they would find the soldering information for each. Scored for accuracy and completeness.

**Option B — Datasheet Report (individual):**
Assign each student a different common component (a specific microcontroller, a MOSFET, a crystal oscillator). Ask them to produce a one-page assembly information card covering: component function, package type, critical dimensions, recommended reflow profile (from the datasheet), MSL rating, ESD sensitivity class, and one design or process risk they identified from reading the datasheet. Assess for accuracy, completeness, and ability to extract relevant information.

**Option C — Short Quiz (15 questions):**
Factual questions covering: component category definitions, package type identification from photographs, MSL floor life rules, ESD protection requirements, datasheet terminology, and basic passive component parameters. Suitable for standardized assessment across cohorts.

---

## 11. Recommended Resources

- JEDEC J-STD-020 — Moisture/Reflow Sensitivity Classification for Nonhermetic Surface Mount Devices (the definitive MSL standard)
- JEDEC J-STD-033 — Handling, Packing, Shipping and Use of Moisture/Reflow Sensitive Surface Mount Devices
- ANSI/ESD S20.20 — Development of an Electrostatic Discharge Control Program for Protection of Electrical and Electronic Parts, Assemblies, and Equipment
- Component manufacturer datasheets — available free from any major distributor (Digi-Key, Mouser, Arrow); NXP, STMicroelectronics, Texas Instruments, and Vishay all publish exemplary datasheets with comprehensive assembly information sections
- IPC-SM-782 — Surface Mount Design and Land Pattern Standard (land pattern recommendations for all common SMT package types)
- SMTA technical papers on component handling best practices, MSL management in a production environment, and ESD program implementation
- EIA (Electronic Industries Alliance) and JEDEC package standards for DIP, SOIC, QFP, BGA, QFN package dimensions and designations
- Distributor component parametric search and selection guides (Digi-Key and Mouser publish filtering tools and parametric tables that are excellent teaching tools for understanding the range of variants within each component category)
- Industry trade articles on component obsolescence management, DKBR programs, and last-time-buy strategies (available in Supply Chain Management Review, Electronics Sourcing, and similar publications)
