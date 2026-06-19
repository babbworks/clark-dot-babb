# White Paper — Visual Brief

**Purpose:** Gathered list of all figure placements from the main white paper, with descriptions, suggested sources, and production notes. These visuals can be assigned, commissioned, or photographed and then inserted into the LaTeX/Pandoc build.

---

## FIG.01 — Comparative Deindustrialization Chart
**Location:** Executive Summary (p. 1)
**Type:** Line chart
**Description:** Manufacturing as % of GDP, 1970–2024, for US/UK/CA/AU/NZ vs DE/JP/KR. Eight lines on one chart, with the Anglosphere lines declining steeply and the comparator lines holding relatively flat or rising (Korea).
**Data source:** World Bank World Development Indicators; FRED; Trading Economics country profiles
**Production notes:** Use two colour families — warm tones for Anglosphere, cool tones for comparators. Label the divergence zone (~1980–2000). Consider annotating key policy moments (Thatcher/Reagan era, 2008 GFC, 2020s reshoring).
**Format:** Full-width, high-resolution, print-ready

## FIG.02 — Manufacturing Value Added Table
**Location:** Section 2 (The Decline), subsection 2.1
**Type:** Formal table
**Description:** Extended version of the deindustrialization data with decade columns and relative decline calculation. Already exists as markdown table in the text — needs formal typographic treatment for PDF.
**Production notes:** Use booktabs-style LaTeX table with \toprule, \midrule, \bottomrule. Anglosphere rows in bold or highlighted.

## FIG.03 — Germany's Four Pillars vs. Anglosphere Equivalents
**Location:** Section 2 (The Decline), subsection 2.1
**Type:** Diagram (comparison)
**Description:** Side-by-side showing Germany's four pillars (Dual System, Sparkassen, Fraunhofer, IHK) on the left, with the weak or absent Anglosphere equivalents on the right. Should visually convey that the German system is interlocking while the Anglosphere side is fragmented/empty.
**Suggested approach:** Two columns with connecting lines showing the mapping (or lack thereof). German side solid and connected; Anglosphere side dashed, broken, or partially empty.
**Format:** Half-page diagram

## FIG.04 — "What Would Bring Back Offshored Production?" Bar Chart
**Location:** Section 2 (The Decline), subsection 2.2
**Type:** Horizontal bar chart
**Description:** From IndustryWeek 2025 survey. Bars: Workforce (30%), Tariffs (23%), Lower dollar, Fewer regulations, Other. Workforce bar should be visually dominant.
**Data source:** IndustryWeek/Reshoring Initiative, 2025 Reshoring Survey Report
**Production notes:** This is the single most important chart for Clark's thesis. Make it prominent. Consider a callout annotation showing the 7-percentage-point gap.

## FIG.05 — The Coordination Entity Through History
**Location:** Section 3 (The Pattern), subsection 3.1
**Type:** Timeline/map diagram
**Description:** Showing the coordination entity in each historical ecosystem along a timeline:
- 1761: Soho Manufactory (Birmingham)
- 1781: Lit & Phil (Manchester)
- 1794: Springfield Armory (Connecticut)
- 1905: SAE (Detroit)
- 1949: Fraunhofer (Germany)
- 1951: Stanford Industrial Park (Silicon Valley)
- 1988: Huaqiangbei (Shenzhen)
Each with a one-line description of function.
**Suggested approach:** Horizontal timeline with icons or small illustrations for each entity. Below each, a label showing what function it served (knowledge diffusion, workforce training, IP sharing, standards, etc.).
**Format:** Full-width, landscape orientation possible

## FIG.06 — The Five-Layer Gap (Competitor Matrix)
**Location:** Section 4 (The Gap)
**Type:** Matrix diagram
**Description:** Visual version of the synthesis table showing Tulip, Ignition, Xometry, Vistage, EOS, Mondragon, and Clark across seven capability layers. Clark is the only column with all boxes filled.
**Suggested approach:** Grid with filled/empty circles or checkmarks. Clark column highlighted. Could also use a radar/spider chart showing how each competitor covers a partial area while Clark covers all.
**Production notes:** This is the "no one else does all five" visual. Must be immediately legible at a glance.

## FIG.07 — The Protocol Inversion
**Location:** Section 5 (The Model), subsection 5.1
**Type:** Flow diagram
**Description:** Two flows side by side:
- **Standard:** Strategy → Resources → Builders → [?]
- **Clark:** Observation → Evidence → Micro-action → Capability → Resources → [feedback loop back to Observation]
The standard flow ends with a question mark (the assumed step that never happens). Clark's flow is a loop.
**Suggested approach:** Two parallel horizontal flows, standard on top (linear, ending in void), Clark below (circular, with the feedback arrow). Use colour to distinguish.

## FIG.08 — Working Electronics Assembly Bench
**Location:** Section 5 (The Model), subsection 5.2.2
**Type:** Photograph
**Description:** A working electronics assembly bench at industry standard. Should show: ESD surface, soldering station(s), inspection scope (ideally Mantis-class), fume extraction, test equipment, and a camera/display rig. Ideally in an industrial setting, not a classroom or clean corporate lab.
**Production notes:** This is the physical heart of Clark's proposition. The image should feel real — slightly worn, actively used, in a working environment with natural light if possible. Avoid stock-photo sterility. If an actual Clark bench exists at the time of production, photograph it. If not, photograph a comparable working bench at an EMS facility with permission.

## FIG.09 — The Node Progression
**Location:** Section 5 (The Model), subsection 5.2.5
**Type:** Stepped diagram
**Description:** Five stages left to right:
1. Observation (eye icon) — Revenue: field reports
2. Bench (soldering iron icon) — Revenue: training fees
3. Training Centre (classroom icon) — Revenue: curriculum licensing + training
4. Assembly Node (circuit board icon) — Revenue: production + software
5. Regional Acquirer (network icon) — Revenue: M&A advisory + equity

Each step shows what the node can do and what revenue it generates.
**Format:** Full-width stepped/staircase diagram

## FIG.10 — Clark's Structural DNA
**Location:** Section 6 (The Precedents)
**Type:** Convergence diagram
**Description:** Three sources converging on Clark:
- **Constellation Software:** Decentralized ownership, shared benchmarking, permanent hold
- **HEICO:** Subsidiary-led M&A, autonomous operations
- **Keiretsu:** Minority equity, shared methodology, geographic clustering

Three arrows converging to a central Clark node, with labels showing what each precedent contributes.
**Format:** Half to full-page

## FIG.11 — 23 Claims at a Glance
**Location:** Section 7 (The Market), end of claims section
**Type:** Infographic / dashboard
**Description:** Key numbers from the 23 claims arranged visually:
- 1.9M jobs unfilled by 2033
- 85% PCB production in Asia
- 30% reshoring from workforce (vs. 23% from tariffs)
- $8.3T CANZUK GDP
- 244K reshoring jobs (2024)
- 59K–146K CHIPS workforce gap
- $500B+ Canada DIS
- 72–75% CANZUK public support
- $53.2B → $97.4B NA EMS market
- 5:1 exit-to-entry ratio

**Suggested approach:** Grid of metric tiles with large numbers and small labels. Colour-coded by category (workforce, reshoring, electronics, Anglosphere).
**Format:** Full-page

## FIG.12 — The Niagara Peninsula as Distributed Production Zone
**Location:** Section 8 (The Geography)
**Type:** Map
**Description:** Geographical map showing:
- Hamilton at the head of the peninsula
- Arc of towns: Stoney Creek, Grimsby, St. Catharines, Thorold, Welland, Port Colborne, Niagara Falls (ON), Fort Erie
- Across the border: Buffalo, Tonawanda, Lackawanna, Niagara Falls (NY)
- The Welland Canal running through
- Key industrial sites (Bayfront/Sector A highlighted)
- The westward hinge: 403/401 to Brantford, London, St. Thomas
- Major transport routes (QEW, 403, 401, I-190)

**Production notes:** This is the geography map. Should show the peninsula as a coherent economic zone, not as two separate countries. The border should be visible but not dominant. Use the atlas.babb.tel mapping layer as a starting point if appropriate.
**Format:** Full-page, possibly with insets for Sector A detail and the wider Anglosphere map

---

## Additional Visuals for Appendix

### APP-FIG.01 — Marshall's Three Sustaining Mechanisms
**Location:** Appendix B
**Type:** Diagram
**Description:** Visual representation of knowledge spillover, labour pooling, and subsidiary industries as three interlocking gears or a Venn diagram.

### APP-FIG.02 — Fairchild Family Tree
**Location:** Appendix B.6
**Type:** Network diagram
**Description:** Fairchild Semiconductor → 92+ public companies, with key branches labeled (Intel, AMD, Kleiner Perkins, Sequoia). Based on Computer History Museum genealogy.

### APP-FIG.03 — Field Report Pipeline
**Location:** Appendix J
**Type:** Flow diagram
**Description:** Bench events → Facility record → Published report → Registry update → Next observation. The Clarkware-to-field-report pipeline.

### APP-FIG.04 — The Fee Stack
**Location:** Appendix H
**Type:** Stacked bar or waterfall chart
**Description:** Visual version of the first proof case: training ($62.5K) + discovery ($5K) + onboarding ($25K) + recurring ($42K) = $134.5K

---

## Production Notes for PDF Build

- All figures should be high-resolution (300 DPI minimum for print; vector preferred for diagrams)
- Charts and diagrams: produce in a consistent visual language (colour palette, typography, line weights)
- Photographs: full bleed where possible; credit photographer
- Maps: consider using OpenStreetMap base layer with custom overlays (consistent with atlas.babb.tel approach)
- LaTeX integration: each figure should be a separate file (PDF or PNG) referenced via \includegraphics in the Pandoc build
- Figure numbering: FIG.XX in main paper, APP-FIG.XX in appendix
- Captions: formal, descriptive, with source attribution
