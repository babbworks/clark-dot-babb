# CC-L3-04: Embedded Systems in the Manufacturing Context — Firmware, Programming, and Provenance

**Clark Courses — Level 3: Advanced Topics**
**Facility:** Clark, Hamilton, Ontario
**Course Code:** CC-L3-04

---

## 1. Course Overview

Modern electronic assemblies are not finished when the last solder joint passes inspection — they are not functional products until the correct version of the correct firmware has been loaded, verified, and recorded. This course equips manufacturing professionals with the knowledge they need to manage the firmware dimension of electronics production intelligently: not to write firmware, but to understand what firmware is, how it gets onto hardware, what can go wrong in that process, and how to build a production programming workflow that protects software integrity and generates a complete, traceable record. The course covers the physical and software interfaces used for production programming (JTAG, SWD, ISP), binary file formats and version identification, programmer and verification tooling, firmware security considerations in a manufacturing context, and the provenance record that ties a specific binary to a specific board, operator, and timestamp. The Clark IPE Firmware Panel is used as a concrete illustration of the principles developed throughout the course, demonstrating how they can be implemented in a production environment.

---

## 2. Learning Objectives

By the end of this course, participants will be able to:

- Explain the relationship between hardware and firmware in an embedded system, distinguish microcontrollers from microprocessors, and describe the roles of bootloader, application firmware, and RTOS in a production assembly
- Identify the binary file formats used in embedded firmware (ELF, HEX, BIN), explain what each format contains and why they differ, and determine which format is appropriate for a given production programmer
- Describe the JTAG and SWD physical interfaces — connector standards, signal lines, and electrical behavior — and explain what a programmer/debugger does during a programming operation
- Distinguish between development debugging and production programming workflows, and describe the design requirements for a PCB that will be programmed in a production environment (test point access, JTAG/SWD connector, production programmer compatibility)
- Explain what a firmware provenance record must contain (binary hash, programmer serial, operator ID, timestamp) and why each element is required for traceability, field recall readiness, and failure investigation
- Describe the common embedded MCU code protection mechanisms (read-out protection, security bits) and explain the security risk of leaving code protection disabled in production assemblies
- Explain how OTA (over-the-air) firmware updates affect the manufacturing provenance record and the quality system obligations created by post-shipment firmware changes

---

## 3. Target Audience

This course is designed for manufacturing engineers, test engineers, quality engineers, production supervisors, and program managers at electronics manufacturers who produce products with embedded firmware. It is also relevant for hardware engineers who specify the programming interface and for quality or regulatory staff who need to understand what "firmware traceability" means and requires. No software development background is assumed or required. Participants who have completed embedded firmware development will find the manufacturing and quality perspective complementary to their existing knowledge.

---

## 4. Prerequisites

**Recommended prior courses:**

- CC-L1-01: Electronics Fundamentals for Manufacturing Professionals (or equivalent)
- CC-L2-04: Test and Inspection Fundamentals — Flying Probe, ICT, and Functional Test (or equivalent)

Participants should be comfortable reading block diagrams of electronic systems and should understand what a microcontroller is at a functional level (a processor, memory, and peripherals on a single chip). No programming experience is required. Familiarity with production quality concepts (traveler, lot traceability, operator qualification) from L2 course content will make Module 4 more accessible.

---

## 5. Duration and Format

**Duration:** 1.5 days (approximately 10-11 instructional hours)

**Format:** Instructor-led classroom with hands-on demonstration of programming interfaces and tools where possible. The Clark Hamilton facility's production programming station (or a representative station) should be used for the demonstration sessions. Participants benefit from having physical JTAG/SWD connectors, programmer hardware (J-Link, ST-Link, or equivalent), and a development board (STM32 Nucleo, Nordic DK, or equivalent) to examine and interact with during Module 2. A laptop with a hex editor open to a sample .hex and .elf file is useful for Module 1. The Clark IPE Firmware Panel demonstration in Module 5 should be a live session if the platform is accessible from the training room.

---

## 6. Module Outline

### Module 1: What Firmware Is and Where It Lives

**Session 1.1: Hardware, Software, and the Embedded System**

This session builds the conceptual foundation for participants who have not encountered embedded systems from the inside before. The hierarchy is: silicon (the transistors), hardware (the circuit, the PCB), firmware (the software that runs directly on the hardware and controls it), and application (the higher-level behavior the product is designed to deliver). The distinction between a microcontroller (MCU) and a microprocessor (MPU) is drawn practically: an MCU integrates processor, memory, and peripherals on one chip and is self-contained; an MPU requires external memory and typically runs a full operating system. Most embedded products in electronics manufacturing — IoT devices, industrial controllers, medical devices, automotive modules — are built on MCUs. The session covers flash memory as the non-volatile storage medium for firmware, the concept of memory map (where in the address space the bootloader lives, where the application lives, where configuration and calibration data are stored), and the bootloader's role: a small, permanent program that initializes the hardware and then either jumps to the application or waits for a new application to be loaded.

**Session 1.2: Firmware Versioning and Build Systems**

Firmware versioning is critical for manufacturing because the version of firmware loaded on a board is part of the product's identity and its regulatory record. This session covers semantic versioning (major.minor.patch — what each level means and when it increments), how version strings are embedded in firmware (typically a const char array in a known memory address, or a dedicated section in the linker script, or a value returned by a firmware API), and why the version string alone is not sufficient as a unique identifier for the exact binary loaded (the same version string can appear in binaries with different build-time configurations). The session introduces the concept of a build system — the toolchain that converts source code into a binary (GCC compiler, linker, CMake or Make build scripts, PlatformIO as an integrated build environment) — not to teach participants to use these tools but to give them vocabulary for conversations with firmware engineers about what the build process produces and how to identify a specific build. The key takeaway: the authoritative identifier for a firmware binary is its cryptographic hash (SHA-256), not its version string.

**Session 1.3: Binary File Formats — ELF, HEX, and BIN**

When a build system produces firmware, it generates binary files in one or more formats. This session covers the three formats that manufacturing professionals will encounter: ELF (Executable and Linkable Format) — the native output of the GCC toolchain, containing not only the binary instructions but also debug symbols, section headers, and metadata; it is the most information-rich format but is not directly flashable by most production programmers. Intel HEX — a text-based format that encodes binary data as hexadecimal ASCII records with address and checksum fields; widely supported by production programmers and the most common format for firmware distribution. Raw BIN — a flat binary image of the memory content with no metadata; the simplest format, but requires the programmer to know the base address explicitly. The session includes a brief demonstration (or screenshot walkthrough) of opening each format in a hex editor to make the differences tangible. The practical point: when receiving firmware from an engineering team for production, the manufacturing engineer needs to know which format the production programmer expects and verify that the received file is the correct type.

---

### Module 2: Physical Programming Interfaces — JTAG and SWD

**Session 2.1: JTAG — Architecture, Signals, and Connector Standards**

JTAG (Joint Test Action Group, standardized as IEEE 1149.1) was originally designed for board-level testing but has become the dominant interface for programming and debugging microcontrollers and FPGAs. This session covers the JTAG signal lines: TCK (test clock), TMS (test mode select), TDI (test data in), TDO (test data out), and TRST (test reset, optional). The JTAG state machine (TAP — Test Access Port) is explained at a functional level: how the controller shifts data through the instruction register and data registers to access the device's internal state, including flash memory. Connector standards for JTAG in production: the 20-pin ARM JTAG connector (2.54mm pitch, the classic), the 10-pin Cortex Debug Connector (1.27mm pitch, more compact), and the Tag-Connect footprint (which eliminates the connector entirely and uses spring-loaded pins pressed to test points — widely used for space-constrained production programming). Physical participants handle connectors and a Tag-Connect cable where available.

**Session 2.2: SWD — Serial Wire Debug**

SWD (Serial Wire Debug) is ARM's two-wire alternative to JTAG, implemented on virtually all ARM Cortex-M microcontrollers. It uses only two signals: SWDIO (bidirectional data) and SWDCLK (clock), with optional SWO (Serial Wire Output) for trace. SWD's advantages for production programming: fewer pins required (simplifying PCB routing and reducing connector size), slightly faster programming throughput on many MCUs, and simpler cable assemblies. The session covers the SWD connector standards (the 10-pin Cortex Debug Connector supports both JTAG and SWD), the signal levels (typically 3.3V, but the programmer must match the target VCC), and the comparison between JTAG and SWD in a production context. The key practical question for PCB design is covered: does the design expose sufficient test points or a connector for the production programmer to access JTAG or SWD without mechanical interference from nearby components?

**Session 2.3: Programmers, Debuggers, and Production Gang Programmers**

The programmer/debugger hardware is the tool that drives the JTAG or SWD interface. This session surveys the landscape: J-Link (SEGGER) — the most widely supported professional programmer, with broad MCU support and a programmable automation API; ST-Link — integrated into ST's Nucleo and Discovery development boards, also available as a standalone programmer for STM32; CMSIS-DAP — an open standard for ARM debug adapters, implemented in many low-cost development tools; Black Magic Probe — an open-source programmer with an integrated GDB server, popular in hobbyist and small-team development. For production, the session covers gang programmers: production-grade programming systems that program multiple boards simultaneously, with automated pass/fail output, programmer serial number logging, and database connectivity. The distinction between development debugging (interactive, source-level, stop at breakpoints) and production programming (automated, scripted, non-interactive) is developed: the production programmer must reliably load the exact binary, verify the result, and record the outcome, without requiring operator interaction with the programming software.

---

### Module 3: Firmware Verification and Programming in Production

**Session 3.1: Programming Workflow and Verification**

A production firmware programming workflow has three stages: load, verify, and record. This session covers each in detail. Load: the programmer downloads the binary from the host (or reads it from local storage), erases the target flash, programs the binary page-by-page, and releases the device. Verify: after programming, the programmer reads back the flash contents and compares against the source binary — this is a readback verify, and it is the minimum verification step. Beyond readback verify, the session covers two stronger verification methods: CRC check (the firmware includes a CRC value computed at build time; the programmer commands the target to compute its CRC and report the result — this verifies not just that the binary was written but that the firmware itself can compute correctly), and hash-based provenance (the SHA-256 hash of the ELF file is computed at build time and stored in the manufacturing record; when a board is field-returned, the hash of the in-field binary can be compared against the manufacturing record to verify that the correct, unmodified firmware was loaded). The session makes clear that readback verify alone is necessary but not sufficient for high-reliability production.

**Session 3.2: PCB Design for Production Programming**

Production programming is significantly easier or harder depending on decisions made in PCB design. This session covers the design requirements for producible firmware programming: the test point or connector strategy (does the design expose JTAG/SWD test points that the production programmer can reach without component interference? are the test points sized and spaced for production pogo pins or Tag-Connect?), power supply requirements during programming (the programmer must be able to supply or sense the target VCC; the board must not have large capacitive loads that prevent stable power-up), and the clock source requirements (some MCUs require an external crystal or oscillator to be present for JTAG/SWD to function; if the crystal is absent at programming time, a workaround is needed). The session includes examples of well-designed and poorly-designed production programming footprints and a discussion of how late-stage design review by manufacturing engineering can catch these issues before PCB fabrication.

---

### Module 4: Firmware in the Quality Record

**Session 4.1: The Provenance Record — What Must Be Captured and Why**

The firmware provenance record is the manufacturing documentation that proves, for a specific unit, what software was loaded, by whom, on what equipment, at what time. This session builds the case for each element of the minimum provenance record: the binary hash (SHA-256 of the ELF or HEX file) identifies the exact binary uniquely — this is the only element that can confirm, during a field failure investigation, that the correct firmware was loaded and has not been modified; the programmer serial number identifies which physical programmer performed the operation, enabling investigation of programmer faults that might produce silent misloads; the operator ID identifies who performed the operation, enabling investigation of process deviations; the timestamp places the programming event in the chronological record of the board's production history. The session addresses the question of where this record lives: in a manufacturing execution system (MES), in a database associated with the board serial number, or in the paper traveler — and makes the argument that a manual, paper-based record is vulnerable to transcription errors and loss in ways that an automated, database-backed record is not.

**Session 4.2: OTA Updates — Implications for the Manufacturing Record**

Over-the-air (OTA) firmware updates allow a deployed product to receive firmware updates without physical access to the programming interface. This is increasingly standard in IoT, industrial, medical, and automotive products. The manufacturing quality implications are significant: once a product leaves the factory, the firmware state captured in the manufacturing record may no longer reflect the device's actual firmware state. This session covers: delta updates vs. full-image updates (delta updates modify only changed sections; full-image updates replace the complete application), the version management challenge (how does the quality system know which firmware version is running on which serialized unit in the field?), secure boot (the mechanism that prevents unauthorized firmware from running on the device — covered in detail in Module 5), and the regulatory implications for medical and defense products (some regulated products require regulatory approval before an OTA update can be deployed; the manufacturer must maintain a post-market software change management process that treats each OTA update as a product change).

---

### Module 5: Security, Code Protection, and the Clark IPE Connection

**Session 5.1: Code Protection and Secure Boot in Production**

The firmware loaded onto a production unit may represent significant intellectual property, security credentials (cryptographic keys, device identity certificates), or safety-critical code that must not be tampered with. This session covers the mechanisms available for protecting firmware in production: read-out protection (RDP) on STM32 MCUs (three levels: RDP0 — unprotected, debug and readback fully enabled; RDP1 — readback of user flash disabled, debug still enabled; RDP2 — full debug disabled, irreversible — and the implication for production: RDP must be set at the correct level before shipment, and setting RDP2 cannot be undone). Security fuse bits on other MCU families (AVR, NXP, TI) serve the same function. Secure boot chains: the bootloader verifies the cryptographic signature of the application firmware before launching it; if the signature is invalid (indicating the firmware has been tampered with or replaced), the bootloader refuses to launch. Code signing: the build system signs the firmware image at build time using a private key; the bootloader holds the corresponding public key and uses it to verify the signature at boot. The ITAR implication: for defense firmware that is ITAR-controlled, code protection is not just an IP concern — it is a compliance requirement, because an unprotected device allows extraction of controlled technical data.

**Session 5.2: The Clark IPE Firmware Panel — Principles in Practice**

This session demonstrates how the principles developed throughout the course are implemented in the Clark Integrated Production Environment (IPE) Firmware Panel. The Firmware Panel is Clark's purpose-built module within the IPE platform for managing firmware programming at the production level: it automates the loading and verification process, captures the complete provenance record (binary hash, programmer serial, operator ID, timestamp, pass/fail status) to the unit's IPE record, manages firmware image version control (ensuring that operators can only load the currently-approved image for a given work order), and generates quality records compatible with ISO 13485 and AS9100 reporting requirements. The session walks through a live or recorded demonstration of the Firmware Panel workflow: selecting the work order and board serial number, initiating the programming sequence, observing the automatic pass/fail result, and reviewing the completed provenance record in the unit's IPE history. Participants see how the abstract requirements discussed in Module 4 translate into a specific, auditable production workflow.

---

## 7. Key Terms and Concepts

**Microcontroller (MCU)** — A single-chip computer integrating a processor core, flash memory, RAM, and peripheral interfaces; the dominant computational element in embedded electronic products.

**Bootloader** — A small, typically permanent firmware program stored at a fixed address in flash memory that initializes the MCU hardware and then either transfers execution to the application firmware or enters a programming mode to receive a new firmware image.

**ELF (Executable and Linkable Format)** — The native output format of the GCC toolchain; contains binary instructions, debug symbols, section headers, and metadata; not directly flashable by most production programmers but is the authoritative source for computing the binary hash.

**Intel HEX** — A text-based, line-by-line format that encodes binary firmware data as hexadecimal ASCII records with embedded address and checksum fields; the most widely accepted format for production firmware distribution and programming.

**JTAG (IEEE 1149.1)** — A four-wire (TCK, TMS, TDI, TDO) serial interface originally designed for boundary-scan testing and widely used for microcontroller and FPGA programming and debugging in both development and production.

**SWD (Serial Wire Debug)** — ARM's two-wire (SWDIO, SWDCLK) alternative to JTAG for ARM Cortex-M microcontrollers; requires fewer PCB resources than JTAG and is the dominant production programming interface for ARM-based MCUs.

**Tag-Connect** — A PCB footprint and spring-loaded cable system that enables JTAG or SWD programming through PCB test points without a permanent connector; widely used in space-constrained production designs.

**Gang Programmer** — A production-grade programming system that programs multiple boards in parallel with automated pass/fail output and logging; designed for high-volume, non-interactive operation rather than development debugging.

**SHA-256** — A cryptographic hash function that produces a 256-bit digest unique to a specific binary input; used as the authoritative identifier for a firmware image in the manufacturing provenance record — any change to the binary, however small, produces a completely different hash.

**Readback Verify** — A post-programming step in which the programmer reads back the contents of the target flash and compares them byte-by-byte against the source binary; the minimum verification step for production firmware programming.

**Read-Out Protection (RDP)** — A security feature on STM32 and other MCU families that prevents debugging access and/or readback of flash memory contents; must be set to the correct level before shipment to protect firmware IP and security credentials.

**Secure Boot** — A mechanism in which the bootloader cryptographically verifies the signature of the application firmware before executing it; prevents unauthorized or tampered firmware from running on the device.

**Firmware Provenance Record** — The manufacturing quality record that documents, for a specific serialized unit: which firmware binary was loaded (identified by hash), on which programmer, by which operator, at what time, with what result.

**OTA (Over-the-Air) Update** — A mechanism for delivering firmware updates to deployed products without physical access to the programming interface; creates quality system obligations for version management, change control, and post-market surveillance.

**Clark IPE Firmware Panel** — Clark's production module for managing firmware programming: automates the load-verify-record workflow, enforces approved image selection, and writes the complete provenance record to the unit's IPE history.

---

## 8. Instructor Notes

**On the "not to write firmware" framing:** The course brief is explicit that this course is for manufacturing professionals, not firmware developers. The instructor must hold this framing consistently throughout delivery. When participants from a software background want to go deeper into toolchain configuration, RTOS internals, or firmware architecture, the instructor should acknowledge the question, provide a brief answer, and return to the manufacturing and quality perspective. The goal is calibration and vocabulary, not developer skill.

**On demonstration hardware:** This course benefits greatly from physical demonstration. A J-Link and an STM32 Nucleo board (or equivalent) connected to a laptop running SEGGER J-Flash or OpenOCD provides a live programming demonstration that takes about fifteen minutes and anchors the entire Module 2 and 3 content in tangible reality. The instructor should set up and verify this demonstration before the session. If live hardware is not available, a screen-recorded video of a programming session is a strong second choice.

**On the Clark IPE Firmware Panel session:** If the Clark IPE platform is accessible from the training facility, this session should be a live demonstration. If not, a recorded demonstration video with live narration is the alternative. The instructor should be familiar with the Firmware Panel workflow before delivery — if there are any discrepancies between the course content description and the current state of the platform, the instructor should update the session to reflect the actual product.

**On security content:** The code protection and secure boot session (5.1) is one of the most practically important in the course for participants at defense or regulated medical device manufacturers. The instructor should be prepared for questions about specific MCU families (What is the equivalent of RDP on an NXP Kinetis? On a TI MSP430?). The core principles — protect the flash from readback, implement signature verification in the boot chain — apply broadly; specific MCU implementations vary and the instructor should be comfortable saying "the specific mechanism on MCU X is Y — verify against the current reference manual."

**On ITAR in this context:** The ITAR reference in Session 5.1 is brief but important. Code protection is not just an IP issue for defense customers — it is a compliance mechanism preventing extraction of controlled technical data from a fielded device. If participants work in a defense context, this connection is worth dwelling on. If the group is entirely commercial, the IP and security motivations are sufficient.

**Instructor background recommendation:** The ideal instructor for this course has firmware engineering or embedded systems experience in addition to manufacturing knowledge — ideally someone who has managed both the technical and quality aspects of a production programming workflow. If the delivering instructor does not have hands-on embedded experience, thorough preparation using MCU vendor application notes (STMicroelectronics application notes on JTAG/SWD programming, SEGGER J-Link documentation, ARM Cortex-M debug architecture documentation) is required.

---

## 9. Hands-On and Discussion Exercises

**Exercise 1: Binary File Identification and Hash Computation**

Participants receive a USB drive (or network folder) containing three files: a .elf, a .hex, and a .bin file, all generated from the same firmware build. Using a hex editor (HxD, xxd, or equivalent — pre-installed on the course laptops) and a SHA-256 hash utility (sha256sum on Linux/Mac, certutil on Windows, or an online tool if offline tools are unavailable), participants: open each file in the hex editor and note the first 16 bytes (the ELF magic bytes, the first HEX record, the first bytes of raw binary), compute the SHA-256 hash of each file and record the results, and answer: Are the three hashes the same? Why not? If you received only the SHA-256 hash of the approved ELF file from engineering, and you computed the SHA-256 of the .hex file you received from the same team, would they match? This exercise makes the abstract concept of hash-based provenance concrete and reveals the nuance that the hash of the ELF is not the same as the hash of the HEX even if they represent the same firmware.

**Exercise 2: Production Programming Scenario Analysis**

The instructor presents three production programming scenarios and participants analyze each: (a) A board has been programmed and readback-verified successfully. Two weeks after shipment, the customer reports that units from this lot occasionally fail to boot on first power-up. What information from the programming record would help diagnose this? What information is missing from a minimal (operator-only, no programmer serial, no hash) record? (b) An OTA update has been deployed to field units running firmware version 1.2.1. A medical device regulatory authority requests a list of all currently deployed units and their current firmware version. Can your current manufacturing and OTA records satisfy this request? (c) A defense product ships with code protection at RDP1. A security researcher reports a vulnerability in the firmware. Your team releases a patched firmware. The customer asks: how do you update RDP1-protected devices in the field? What are the options and trade-offs? Discussion is structured around the principles from Modules 3 and 4, not specific MCU answers.

**Exercise 3: Clark IPE Firmware Panel Walkthrough**

Using the live Firmware Panel (or a recorded demonstration), participants complete a guided walkthrough: follow a simulated board through the programming workflow, identify the elements of the completed provenance record, locate the board's firmware history in its IPE unit record, and answer: If this unit were returned by a customer reporting a field failure, what information in the IPE record would you use first to investigate? What additional information would you want that the record currently captures? What would you want that it does not currently capture? This exercise connects the platform demonstration to the quality principles and gives participants a structured framework for evaluating any production programming system they encounter in their own organizations.

---

## 10. Assessment Suggestions

**Technical Vocabulary Check (10-15 questions):** Multiple choice and matching questions covering firmware concepts, interface terminology, binary formats, and provenance record elements. Designed as a lightweight knowledge check at the end of Day 1 or the beginning of Day 2.

**Provenance Record Design Exercise:** Participants are given a one-paragraph description of a production environment (product type, volume, regulatory framework, field support model) and asked to design the minimum provenance record for that environment: what data fields are captured, where they are stored, how they are retrieved for failure investigation, and what procedures govern OTA updates if applicable. Evaluated on completeness against the principles from Module 4 and appropriateness to the regulatory context.

**Flash Security Configuration Scenario (Written):** Participants receive a specification for a defense electronics product requiring firmware protection and are asked to recommend: which RDP level to set and when in the production flow to set it, whether to implement secure boot (and why), and what the recovery procedure is if a unit with RDP2 set must receive a firmware update in the field. This assesses judgment about security trade-offs, not just knowledge recall.

---

## 11. Recommended Resources

**Technical References:**
- ARM Debug Interface Architecture Specification: developer.arm.com (free download)
- SEGGER J-Link documentation and application notes: segger.com/j-link
- STMicroelectronics application note AN2606: STM32 microcontroller system memory boot mode (reference manual for programming modes)
- STMicroelectronics application note AN4701: Proprietary code read-out protection (RDP) on STM32 (for code protection details)
- OpenOCD documentation: openocd.org
- IEEE 1149.1-2013: Standard for Test Access Port and Boundary-Scan Architecture (JTAG standard)

**Firmware and Build Systems:**
- ARM GNU Toolchain documentation: developer.arm.com/Tools and Software/GNU Toolchain
- PlatformIO documentation: docs.platformio.org
- FreeRTOS documentation: freertos.org
- Zephyr RTOS documentation: docs.zephyrproject.org

**Security:**
- NIST SP 800-193: Platform Firmware Resiliency Guidelines
- NIST SP 800-147: BIOS Protection Guidelines (for secure boot principles applicable to MCUs)
- ITAR reference: 22 CFR Parts 120-130 (for controlled technical data handling obligations)

**Books:**
- Jack Ganssle, *The Art of Designing Embedded Systems* — practitioner-level embedded systems reference
- Michael Barr and Anthony Massa, *Programming Embedded Systems* — accessible introduction to embedded firmware concepts

**Clark Resources:**
- Clark IPE platform documentation (Firmware Panel module)
- Clark Hamilton facility production programming station for live demonstrations
- Clark Courses CC-L3-03 (Regulatory and Compliance) for ITAR and medical device regulatory context

---

*Clark Courses — Professional Electronics Manufacturing Education*
*Hamilton, Ontario | clark.ca*
