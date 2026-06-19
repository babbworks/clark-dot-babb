# CC-L2-04: The Supply Chain and BOM — How Electronics Actually Gets Made

**Clark Courses — Level 2: Professional Practice**
Hamilton, Ontario | CLARK Electronics Manufacturing

---

## 1. Course Overview

A perfectly engineered PCB design means nothing if the components cannot be sourced on time, at acceptable quality, and in a form the assembly operation can use. This course examines the electronics supply chain from BOM structure and approved vendor management through distribution channels, procurement models, component risk, regulatory compliance, and supply chain strategy. The emphasis throughout is practical: participants learn to read and evaluate a BOM the way an experienced procurement or manufacturing engineer does — identifying risk, redundancy, and likely problems before the build starts. The events of 2020–2024 made supply chain resilience a board-level issue for electronics manufacturers; this course provides the technical vocabulary and frameworks to participate in that conversation productively.

---

## 2. Learning Objectives

- Evaluate a BOM for completeness, accuracy, and supply chain risk, identifying missing fields, single-source components, and obsolescence risk indicators.
- Describe the structure of the authorized electronics distribution channel and explain why purchasing through unauthorized or gray-market sources creates quality and legal exposure.
- Define component obsolescence terminology (EOL, NRND, LTB, DKBR) and develop a buffer stock and multi-source strategy appropriate to a given production scenario.
- Compare the consignment, turnkey, and hybrid procurement models used in EMS production and identify the risk and responsibility allocation in each.
- Describe the procedures used in incoming inspection and component authentication, referencing AS6081 and the role of certificates of conformance.
- Explain the requirements of the EU RoHS Directive, identify exemption categories applicable to specific market segments, and describe the tin whisker risk associated with pure-tin finishes.
- Apply design-for-supply-chain principles to identify and resolve BOM vulnerabilities during the NPI stage before production begins.

---

## 3. Target Audience

Manufacturing engineers, procurement specialists, supply chain coordinators, NPI engineers, quality engineers, and EMS account managers who interact with BOMs, sourcing decisions, and supplier relationships. Also valuable for product engineers and PCB designers who want to understand the downstream supply chain consequences of their component selection decisions.

---

## 4. Prerequisites

Recommended Level 1 completions:
- CC-L1-01: Introduction to PCB Assembly — How Electronics Gets Built
- CC-L1-03: Quality Fundamentals — IPC Standards, Inspection, and Documentation

No specific procurement experience is required, but participants who work with BOMs or have handled components in a production context will find the material immediately applicable.

---

## 5. Duration and Format

**Duration:** 1 day (8 hours of instruction)
**Format:** Instructor-led classroom with discussion-heavy case study sessions. Approximately 65% lecture and structured discussion, 35% BOM analysis exercises and group case work. No laboratory access is required; the primary hands-on material is BOM and procurement document analysis.

---

## 6. Module Outline

### Module 1: BOM Structure — Fields, Formats, and What a Good BOM Looks Like

**Session 1.1: The Anatomy of an Electronics BOM**
A production-ready BOM is not a simple parts list — it is a contractual and engineering document. Essential fields include: reference designator (the unique identifier for each component placement on the board), manufacturer part number (MPN), manufacturer name, component description, quantity per assembly, designator count, and approved alternate MPNs. Optional but important fields include: package/footprint, unit of measure, commodity code, and estimated lead time. A BOM missing any of the required fields forces either a procurement assumption (with attendant quality risk) or a delay while the design team provides clarification. Participants review sample BOMs with varying levels of completeness and identify the gaps.

**Session 1.2: Approved Vendor Lists (AVL) and Alternate Sources**
An Approved Vendor List is the controlled document specifying which manufacturers and/or distributors are approved to supply specific components to a product. In regulated industries (medical, defense), the AVL is a quality-controlled document requiring formal change control to update. In commercial EMS, the AVL may be embedded in the BOM as an alternates column or maintained as a separate document. The AVL serves two purposes: it ensures that alternate parts are functionally and dimensionally equivalent (not just cross-reference equivalent), and it provides supply chain resilience by identifying multiple approved sources. Students examine a BOM with a single-source component lacking alternates and construct a rationale for AVL expansion.

**Session 1.3: BOM Formats — Excel, Structured Databases, and IPC-2581**
Excel-based BOMs are the most common format in the industry but are vulnerable to version control failures, formula errors, and inconsistent field naming across customers. Structured BOM formats (PLM/ERP database records, PDM-linked BOMs) provide version control, field validation, and direct integration into MRP and procurement systems. IPC-2581 is an industry-standard format for transferring design data (including BOM) between design tools, CM tools, and ERP systems; its BOM component enables machine-readable transfer of component data without the ambiguity of hand-formatted spreadsheets. Students discuss the operational impact of receiving a BOM in each format from a production planning perspective.

---

### Module 2: The Electronics Distribution Channel — Authorized, Franchise, and Independent

**Session 2.1: Authorized Distributors and the Franchise Model**
Authorized distributors (Digi-Key, Mouser Electronics, Arrow Electronics, Avnet, Future Electronics, TTI) hold a direct franchise agreement with the component manufacturer — they purchase from the manufacturer's authorized supply, maintain manufacturer-specified storage conditions, and are accountable to the manufacturer for quality and traceability. This means that components purchased from an authorized distributor carry a known chain of custody from factory to receiving dock. Franchise relationships also provide access to manufacturer product support, date code controls, and FIFO inventory management. Students review the authorized distributor programs of several major semiconductor manufacturers and identify what protections the franchise agreement provides.

**Session 2.2: The Gray Market — Independent Brokers, Spot Market, and Associated Risks**
Independent distributors (non-franchise brokers) purchase excess inventory, end-of-life stock, and spot market components from various sources — other distributors, contract manufacturers, corporate asset disposals. The gray market is not inherently fraudulent, but it lacks the chain-of-custody assurances of the franchise channel. Risks include: counterfeit components (re-marked obsolete parts, functional clones of premium parts, non-functional parts with authentic markings), moisture-compromised components improperly stored (damaged MSL packaging, condensation exposure), incorrect date codes (components out of manufacturer-specified shelf life), and re-marked parts (different performance grade or temperature range re-marked as a higher spec). These risks are managed through incoming inspection and authentication, covered in Module 5.

**Session 2.3: Spot Market Dynamics and Shortage Procurement Behavior**
During the 2020–2022 semiconductor shortage (and prior shortage cycles), lead times for common microcontrollers extended to 52–104 weeks, driving buyers to the spot market and gray market out of production necessity. This created conditions for counterfeit infiltration at unprecedented scale — demand was extreme, supply was constrained, and buyers were accepting components from unknown sources. Students examine the dynamics of shortage-driven gray market procurement and discuss how a quality-conscious organization manages the tension between production continuity and component integrity. AS6081 and its role in this environment is introduced here and expanded in Module 5.

---

### Module 3: Supply Chain Risk — Obsolescence, Lead Times, and Diversification

**Session 3.1: Component Obsolescence — EOL, NRND, LTB, and DKBR**
End of Life (EOL): the manufacturer has announced discontinuation of the component; production will cease at a specified date. Not Recommended for New Designs (NRND): the component is still manufactured but the manufacturer is discouraging design-in, typically because a successor product exists; NRND components have higher obsolescence risk going forward. Last Time Buy (LTB): a final ordering opportunity before production ceases, allowing customers to purchase lifetime supply inventory. Digi-Key Back-Ordered (DKBR) and similar distributor status codes indicate immediate availability issues but not necessarily obsolescence. Students query a set of sample MPNs against a distributor's website and IHS Markit/SiliconExpert-equivalent tools to assess each component's lifecycle status.

**Session 3.2: Long Lead Times and Buffer Stock Strategy**
For components with lead times of 20+ weeks (a normal condition for many complex ICs, even outside of shortage periods), a production operation that does not carry buffer stock is perpetually one supply disruption away from a line stop. Buffer stock strategy requires balancing the cost of carrying inventory (capital tied up, storage cost, potential obsolescence of the buffered components) against the cost of a production stop (customer penalties, line reallocation, expediting fees). The economic order quantity (EOQ) model provides a framework; students apply a simplified version to a sample component scenario. Safety stock calculation methods (demand variability × replenishment lead time) are introduced.

**Session 3.3: Single-Source vs. Multi-Source, and Post-2020 Supply Chain Thinking**
A single-source component is one where only one manufacturer produces the specific part and no alternative has been qualified. Single-source components are high-risk; when that manufacturer experiences a supply disruption (fab fire, geopolitical event, process change), there is no qualified alternative. The post-2020 period forced widespread reconsideration of single-source dependencies and geographic concentration risk (Taiwan/TSMC concentration for advanced semiconductors, for example). Multi-source qualification requires engineering validation of the alternate part — dimensional, functional, and sometimes reliability testing — and formal AVL update. Students develop a prioritized list of supply chain diversification actions for a sample BOM with four single-source components.

---

### Module 4: Procurement Models in EMS — Consignment, Turnkey, and Hybrid

**Session 4.1: Customer-Supplied Material (Consignment) Model**
In the consignment model, the customer purchases all components and ships them to the EMS shop for assembly. The EMS shop provides labor and processes only. Advantages for the customer: they control component sourcing, maintain their supplier relationships, and may achieve better component pricing through volume agreements. Disadvantages: the customer bears all component supply risk (shortages, quality issues, incorrect parts), and the EMS shop must receive, inspect, count, and control customer-owned inventory separately from its own stock — a significant material management overhead. The EMS shop is typically not responsible for shortfalls or quality issues in customer-supplied material, but this boundary of responsibility must be clearly defined in the contract.

**Session 4.2: Turnkey Model and EMS Procurement Risk**
In the turnkey model, the EMS shop procures all components, manages the supply chain, and delivers completed assemblies. The customer receives a price per assembly that includes material and labor. This model requires the EMS shop to have active distributor relationships, preferred pricing agreements, and purchasing infrastructure. The EMS shop takes on component supply risk — shortages, price increases, and component quality problems are now the shop's problem to manage. The pricing model must include material cost plus markup (to cover procurement overhead, carrying cost, and risk premium). Customers benefit from simplified supply chain management; the EMS shop benefits from the margin on material and the deeper customer relationship.

**Session 4.3: Hybrid Model, Consignment vs. Turnkey Decision, and BOM Ownership**
Most real EMS relationships use a hybrid model: the customer consigns long-lead or single-source components they have already procured, while the EMS shop turns the commodity components (passives, standard logic, connectors). The decision about which components to consign and which to turn is driven by lead time risk, customer pricing advantage, and the EMS shop's purchasing leverage with specific distributors. BOM ownership — who is responsible for maintaining the approved BOM and AVL — is a contractual point that determines change control responsibility. Students review a sample EMS contract excerpt and identify the consignment, turnkey, and hybrid boundaries specified.

---

### Module 5: Component Authentication and Incoming Inspection

**Session 5.1: Certificates of Conformance and Their Limitations**
A Certificate of Conformance (CoC) is a document provided by the supplier certifying that the supplied components conform to the specified requirements. From an authorized distributor, the CoC is backed by the manufacturer's quality system and the distributor's procurement chain. From an independent broker, the CoC is only as reliable as the broker's own incoming inspection and quality management system — which varies enormously. A CoC is not a substitute for physical inspection of high-risk or high-value components. Students review sample CoC documents from both an authorized distributor and an independent broker, identifying the chain-of-custody information present or absent in each.

**Session 5.2: AS6081 — Counterfeit Electronic Component Avoidance**
AS6081 (SAE International) is the standard for counterfeit electronic parts avoidance in the aerospace, defense, and high-reliability industries, but its inspection methodology is increasingly used as best practice in commercial applications. AS6081 defines counterfeit detection methods including: external visual inspection (marking verification, package condition, lead condition), dimensional verification, electrical testing, decapsulation and die inspection, and X-ray inspection for internal structure. GIDEP (Government-Industry Data Exchange Program) alerts document confirmed counterfeit component sightings and are circulated to subscribers; students review a sample GIDEP alert and identify the actionable content.

**Session 5.3: Incoming Inspection Protocols for High-Risk Components**
A tiered incoming inspection approach allocates the most rigorous inspection to the highest-risk components: those procured from non-authorized sources, those on active GIDEP or advisory alerts, high-value components, and components for Class 3 assemblies. Inspection tools used in incoming inspection include: visual inspection under magnification (marking consistency, lead condition, date code and lot code verification), electrical test (basic functional verification), and X-ray inspection (internal die structure verification for suspected counterfeits). Students develop an incoming inspection protocol for a set of four components representing different risk levels (authorized distributor commodity resistor, broker-sourced obsolete IC, authorized distributor BGA, broker-sourced military component).

---

### Module 6: Regulatory Compliance — RoHS, REACH, and Tin Whiskers

**Session 6.1: EU RoHS Directive — Requirements and Exemptions**
The EU Restriction of Hazardous Substances (RoHS) Directive restricts the use of ten substances in electrical and electronic equipment placed on the EU market, including lead (Pb), mercury, cadmium, hexavalent chromium, and several brominated flame retardants. The practical impact on PCB assembly is primarily the elimination of tin-lead (SnPb) solder in most products. Exemptions under RoHS Annex III and IV cover specific applications: medical devices (with some exceptions), military equipment, server/storage/networking infrastructure, photovoltaic panels, and specific high-reliability applications. Students review the current exemption list and classify a set of sample products as RoHS-compliant mandatory, exempted, or exempt with conditions.

**Session 6.2: Tin Whisker Risk and Mixed Alloy Concerns**
Pure tin (Sn) electroplated finishes on component leads — the dominant lead-free finish — are susceptible to spontaneous growth of electrically conductive tin whiskers from the plated surface. Whiskers can cause shorts between adjacent leads at fine pitch. NASA, the US military, and the aerospace industry maintain databases of tin whisker field failures and mitigation strategies. Mitigation includes: nickel underplating beneath the tin finish, matte tin finishes (less whisker-prone than bright tin), and conformal coating over assembled boards. Mixing SnPb solder paste with SAC305 component finishes (or vice versa) creates a mixed-alloy joint with different solidification behavior — students review the conditions under which mixed alloy joints create head-in-pillow risk, embrittlement concerns, and fillet geometry changes.

**Session 6.3: REACH, Halogen-Free, and Other Regulatory Compliance Frameworks**
REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals) is a broader EU chemical regulation that covers a large number of substances of very high concern (SVHCs); it affects PCB laminate materials, component finishes, adhesives, and flux chemistries. Halogen-free laminates and solder masks are specified by some customers (particularly those in the IT/telecom sector and those targeting Japanese markets) to avoid combustion products from brominated materials; halogen-free laminates process differently from standard FR4 and may require adjusted drill parameters and surface finish options. FCC Part 15 (US) and CE marking (EU) address electromagnetic compatibility and are test and documentation requirements, not manufacturing restrictions — but they are often bundled with RoHS and REACH compliance inquiries by customers.

---

## 7. Key Terms and Concepts

**Bill of Materials (BOM)** — A structured list of all components, subassemblies, and materials required to manufacture a product, including manufacturer part numbers, quantities, and reference designators.

**Reference designator** — A unique alphanumeric identifier (e.g., R1, C24, U3) assigned to each component placement on a PCB, linking the assembly drawing to the BOM.

**Approved Vendor List (AVL)** — A controlled document specifying the approved manufacturers and/or distributors from which specific components may be sourced for a product.

**Authorized distributor** — A distributor holding a direct franchise agreement with a component manufacturer, providing traceability, storage compliance, and quality assurance for distributed components.

**Gray market** — The distribution of genuine but non-franchised components through channels outside the manufacturer's authorized supply chain; associated with higher risk of counterfeits, improper storage, and untraceable provenance.

**EOL (End of Life)** — A manufacturer designation indicating that a component has been officially discontinued and will no longer be produced after a specified date.

**NRND (Not Recommended for New Designs)** — A manufacturer designation indicating that a component is still available but should not be designed into new products, typically because a successor exists or the component is approaching EOL.

**LTB (Last Time Buy)** — A manufacturer-announced final opportunity to purchase a component before production ceases; enables customers to stock a lifetime supply.

**Consignment model** — An EMS procurement model in which the customer procures and delivers all components to the assembler; the EMS shop provides assembly services only.

**Turnkey model** — An EMS procurement model in which the EMS shop procures all components, manages the supply chain, and delivers complete assemblies; the customer buys finished goods only.

**Certificate of Conformance (CoC)** — A supplier-provided document certifying that delivered components conform to specified requirements; reliability depends entirely on the quality system behind it.

**AS6081** — An SAE International standard for counterfeit electronic parts avoidance, providing inspection and procurement criteria used in aerospace, defense, and high-reliability manufacturing.

**RoHS Directive** — The EU Restriction of Hazardous Substances Directive, restricting ten substances including lead in most electrical and electronic equipment placed on the EU market.

**Tin whisker** — A spontaneous growth of a conductive tin filament from a pure-tin electroplated surface; a known failure mechanism in lead-free component finishes that can cause electrical shorts.

**REACH** — The EU Registration, Evaluation, Authorisation and Restriction of Chemicals regulation governing chemical substances in products sold in the EU; affects laminate materials, finishes, and adhesives in PCB assemblies.

---

## 8. Instructor Notes

The BOM analysis exercises in this course are most effective when performed on real — or at least realistic — BOMs rather than simplified teaching examples. The Clark facility's NPI team should be able to supply sanitized (customer-identifying information removed) BOMs from past projects for use as training material. A BOM with 80–150 lines, a mix of active and passive components, at least one single-source IC, and at least one obsolete or NRND component provides rich material for analysis exercises.

The supply chain risk module (Module 3) should be presented with reference to concrete events: the 2020–2022 semiconductor shortage, the 2011 Japan earthquake impact on specialty capacitor supply, and the recurring disruptions in passive component supply from Murata and TDK are all well-documented and directly relevant. Participants with production experience will have their own stories to contribute; encourage this.

The gray market and counterfeit discussion in Module 2 is an area where instructors should be careful to be balanced and specific. The gray market is not inherently a source of counterfeits — many broker transactions are entirely legitimate. The point is that the verification burden is higher, and the consequences of a counterfeit in a medical or defense assembly are severe. Avoid framing all independent distribution as fraudulent; instead, frame it as a procurement decision that requires additional due diligence.

The RoHS exemptions list changes with Directive updates; instructors should verify that the current exemption status is used in any exercise involving exemption classification. The EU RoHS website (ec.europa.eu) maintains the current directive text and exemption annexes.

---

## 9. Hands-On and Discussion Exercises

### Exercise 1: BOM Risk Audit

Participants receive a 60-line BOM for a hypothetical commercial IoT product. The BOM contains the following planted problems: three components with no alternate source specified, one component with an NRND lifecycle status, one component available only from non-authorized broker sources at the time of the exercise (based on a Digi-Key/Mouser availability check), one component whose description does not match the MPN, and one component with a RoHS exception claimed but not supported by the product's market segment. Working individually, participants audit the BOM, document each finding, classify it by risk level (stop-build, mitigation required, or monitor), and write one recommended action for each finding. The group then reviews findings and discusses any disagreements.

### Exercise 2: Procurement Model Selection and Contract Review

Participants are given three product briefs: (1) a 50-unit/month medical device build with several single-source components and strict lot traceability requirements; (2) a 5,000-unit/month consumer IoT product with a fully commodity BOM; and (3) a 200-unit/month industrial controller with one long-lead FPGA and otherwise commodity components. For each product, participants must recommend a consignment, turnkey, or hybrid procurement model, justify the recommendation, and identify the two most important contract terms that would need to be addressed for that model. Groups compare recommendations and discuss the factors that drive the decision.

### Exercise 3: Obsolescence Response Planning

Participants receive a product brief for an industrial control product that has been in production for six years and is expected to continue for another ten. A key microcontroller on the BOM has just received an NRND designation from the manufacturer. Working in groups, participants must: assess the remaining production life of the component based on manufacturer guidance, calculate the lifetime quantity needed given the production forecast, develop a buffer stock strategy (how much to buy, at what intervals, what storage conditions are required), identify the top three candidate replacement parts (functional equivalents), and outline the re-qualification steps required to approve an alternate. Groups present their plan and discuss the cost and risk implications.

---

## 10. Assessment Suggestions

**BOM Completeness and Risk Classification:** Participants are given a ten-line BOM excerpt with multiple field deficiencies and one obsolete component. They must: complete the missing fields based on a provided datasheet excerpt, classify the lifecycle status of each component, identify supply chain risks, and propose corrective actions. Evaluated on accuracy of field completion and quality of risk identification.

**Regulatory Compliance Decision:** Participants are given descriptions of four products (a consumer smart speaker, a Class IIa medical device, a military avionics display, and an industrial motor controller) and must determine the RoHS compliance status (mandatory, exempted, or exempt with conditions) for each, citing the specific directive provision. A second part asks them to identify which of the four products has the highest tin whisker risk and explain why. Evaluated on correct classification and quality of regulatory reasoning.

**Supply Chain Risk Report:** Participants write a one-page supply chain risk brief for a product with a provided BOM, identifying the top three supply chain risks, a recommended mitigation action for each, and a priority ranking. Evaluated on thoroughness of risk identification, practicality of mitigations, and clarity of prioritization reasoning.

---

## 11. Recommended Resources

- IPC-2581: Generic Requirements for Implementation of Printed Board Assembly Products Manufacturing Description Data and Transfer Methodology — BOM data format standard
- SAE AS6081: Fraudulent/Counterfeit Electronic Parts: Avoidance, Detection, Mitigation, and Disposition
- EU RoHS Directive 2011/65/EU and amending Directive 2015/863/EU — current text and exemption annexes
- EU REACH Regulation (EC) No 1907/2006 — substance restriction framework
- NASA GSFC Tin Whisker Webpage (nepp.nasa.gov/whisker) — whisker database, test data, and mitigation guidance
- GIDEP (Government-Industry Data Exchange Program, gidep.org) — counterfeit component alert database
- IHS Markit / SiliconExpert / Z2Data — component lifecycle intelligence tools (commercial subscriptions)
- Digi-Key, Mouser, Arrow, Avnet, and TTI supplier portals — lifecycle status, authorized distributor confirmation
- Electronics Sourcing Magazine — practical industry coverage of supply chain issues
- Supply Chain Management Review — broader supply chain strategy and risk management frameworks
- SMTA Technical Library — papers on counterfeit avoidance, incoming inspection, and supply chain risk management in EMS
