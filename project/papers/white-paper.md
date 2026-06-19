---
title: "Clark: An Activation Protocol for Industrial Recovery Across the Anglosphere"
subtitle: "White Paper — June 2026"
author: "Clark"
date: 2026-06-14
documentclass: report
classoption:
  - 12pt
  - a4paper
  - twoside
geometry:
  - inner=2.5cm
  - outer=5cm
  - top=3cm
  - bottom=3cm
  - marginparwidth=3.5cm
  - marginparsep=0.5cm
fontfamily: libertinus
bibliography: white-paper.bib
csl: chicago-fullnote-bibliography.csl
toc: true
toc-depth: 3
numbersections: true
header-includes: |
  \usepackage{marginnote}
  \usepackage{tcolorbox}
  \usepackage{booktabs}
  \usepackage{graphicx}
  \usepackage{float}
  \tcbuselibrary{breakable}
  \newenvironment{inset}[1][]{\begin{tcolorbox}[breakable,title=#1,colback=gray!5,colframe=gray!50]}{\end{tcolorbox}}
  \renewcommand{\marginnote}[1]{\marginpar{\footnotesize\raggedright #1}}
---

\newpage

# Executive Summary

The English-speaking industrial nations — the United States, the United Kingdom, Canada, Australia, and New Zealand — share a pattern of manufacturing decline that is not universal among advanced economies. Manufacturing as a share of GDP has fallen from roughly 23 per cent to 10 per cent in the United States, from 25 per cent to 8 per cent in the United Kingdom, and from 25 per cent to 5.5 per cent in Australia, while Germany has held at approximately 18 per cent, Japan at 21 per cent, and South Korea has grown to over 25 per cent.[^1] This divergence is not inevitable. It is the consequence of institutional choices — made and unmade — over four decades.

[^1]: World Bank, "Manufacturing, Value Added (% of GDP)," World Development Indicators, accessed June 2026; FRED, "Value Added by Private Industries: Manufacturing as a Percentage of GDP," Federal Reserve Bank of St. Louis; Robert D. Atkinson, "Stagnation, Deindustrialization, and the Decline of Anglo-Saxon Economics," Information Technology and Innovation Foundation, August 12, 2024.

The countries that maintained their industrial capacity — Germany, Japan, South Korea — did so through interlocking institutional architectures: apprenticeship systems, regional patient-capital banks, applied research networks, and coordination chambers. The Anglosphere dismantled or never built equivalents in each domain. The result is a systemic condition we call **output-drag**: the friction between manufacturing intent and fabrication capacity in a given region. Where output-drag is low, reshoring announcements become production lines. Where it is high, strategies sit on shelves and lots sit behind fences.

<!-- FIG.01: Comparative deindustrialization chart — Manufacturing as % of GDP, 1970–2024, for US/UK/CA/AU/NZ vs DE/JP/KR. Line chart, sourced from World Bank/FRED. | TYPE: chart -->

This paper presents the case for **Clark**, an Industrial Ecosystem Platform and activation protocol designed to lower output-drag in Anglosphere industrial regions by providing the institutional backbone that these regions no longer have. Clark integrates five capabilities that no existing entity combines: certified electronics workforce training, physical assembly nodes, facility-aware operational software, industrial evidence publishing, and regional M&A facilitation through independently operated anchor entities.

Clark begins in Hamilton, Ontario — at the head of the Niagara Peninsula — as a reference implementation, with near-simultaneous experimentation in counterweight locations across the corridor. The protocol is designed to travel to any industrial town in any Common Law jurisdiction where the same pattern presents: ready land, approved strategies, and no mechanism to convert either into an ecosystem of producers.

:::margin
The combined GDP of the five Anglosphere nations exceeds US$28 trillion. Combined manufacturing output is approximately $3.47 trillion, representing roughly 18 per cent of global manufacturing — a base large enough to rebuild from, not a rounding error.
:::

The market for Clark's services intersects several large and growing segments: the connected worker platform market ($5.9–8.6 billion in 2024, projected to reach $18–27 billion by 2030), the North American electronics manufacturing services market ($53.2 billion, growing to $97.4 billion), IPC-certified workforce training, and the franchise and distributed-network economy (over $920 billion in US output alone).[^2] Clark's unique position — straddling all of these while belonging fully to none — is both its competitive advantage and its category-creation challenge.

[^2]: Connected worker market: MarketsandMarkets, "Connected Worker Market," 2024; EMS market: Grand View Research, "Electronics Manufacturing Services Market," 2024; Franchise data: International Franchise Association, "Franchising Economic Outlook 2026."

This paper is organized in nine sections: the scale of the decline, the pattern that explains it, the gap in the current landscape, the Clark model, the structural precedents, the market evidence, the geography, the economics, and the ask. Appendices provide the full evidence base — extended case studies, competitor matrices, policy analysis, and financial models — published for inspection in keeping with Clark's evidence discipline.

\newpage

# The Decline

## The Anglosphere Divergence

In the mid-twentieth century, the industrial economies of the English-speaking world were among the most productive on earth. The United States was the world's largest manufacturer. The United Kingdom had invented modern manufacturing and still maintained substantial capacity. Canada, Australia, and New Zealand had built diversified industrial bases on the back of resource wealth and British engineering inheritance.

By 2024, all five had experienced a manufacturing decline far steeper than anything seen in comparable economies:

<!-- FIG.02: Table — Manufacturing Value Added as % of GDP, Anglosphere vs. Comparators. Formatted as a formal table with decade columns. | TYPE: table -->

| Country | c. 1970 | c. 1990 | c. 2000 | c. 2024 | Relative Decline |
|:--------|--------:|--------:|--------:|--------:|:-----------------|
| United States | 23% | ~17% | ~14% | ~10% | −57% |
| United Kingdom | ~25% | 15% | ~13% | ~8% | −68% |
| Canada | ~20% | ~17% | ~20% | ~10% | −50% |
| Australia | ~25% | ~14% | ~12% | 5.5% | −78% |
| New Zealand | ~22% | ~16% | ~14% | ~9% | −59% |
| **Germany** | ~33% | ~27% | ~22% | 17.8% | −46% |
| **Japan** | ~30% | ~25% | ~22% | ~20.6% | −31% |
| **South Korea** | ~14% | ~25% | ~28% | 24.3% | +74% |

:::inset[The Anglo-Saxon vs. Listian Split]
Robert Atkinson's 2024 ITIF analysis provides the most systematic framing. Advanced Industries Location Quotients (2020): the five Anglo-Saxon nations average 0.81 (below the global average of 1.0), while the five "Listian" nations — China, Japan, Korea, Taiwan, Singapore — average 1.45. Labour productivity growth in the Listian economies runs more than four times higher: 19 per cent over five years versus 4.3 per cent.[^3]
:::

[^3]: Robert D. Atkinson, "Stagnation, Deindustrialization, and the Decline of Anglo-Saxon Economics," ITIF, August 2024. The term "Listian" refers to Friedrich List (1789–1846), the German-American economist who advocated strategic protection of infant industries — the intellectual ancestor of East Asian industrial policy.

The decline was not gradual in all cases. Australia experienced the most dramatic collapse: from roughly 25 per cent of GDP in manufacturing to 5.5 per cent — a 78 per cent relative decline. The United Kingdom accelerated its deindustrialization in the 2020s, coinciding with its exit from the EU's manufacturing network.[^4] The United States, despite remaining the world's second-largest manufacturer in absolute terms, now sits below the global average in advanced industries concentration.

[^4]: Richard Baldwin, "How the G7 Deindustrialised," Substack, 2024. Baldwin documents the acceleration pattern: Anglo-Saxon nations experienced not just decline but a relative deindustrialization — manufacturing grew slower than the world average since 1995.

:::margin
South Korea's trajectory is the starkest rebuke to the "deindustrialization is inevitable" narrative. It *grew* manufacturing from 14% to over 25% of GDP during the same decades that the Anglosphere was declining — through deliberate industrial policy, not geographic luck.
:::

## The Root Causes

The Anglosphere's deindustrialization was not caused by a single policy error. It was caused by a shared intellectual framework that treated all economic activity as equivalent — the doctrine that, in the frequently cited formulation, "computer chips and potato chips" were interchangeable contributors to GDP.[^5]

[^5]: The phrase is attributed to Michael Boskin, chairman of the Council of Economic Advisers under George H. W. Bush. Whether he said it precisely this way is disputed, but the doctrine it represents — that the composition of GDP does not matter, only its growth — was the operative assumption of Anglo-Saxon economic policy from the 1980s onward.

The specific mechanisms of decline varied by country but shared common elements:

1. **Market fundamentalism.** The assumption that market failures in manufacturing were few, and that government intervention was more likely to cause harm than to prevent it. This assumption was not shared by the comparator nations, all of which maintained active industrial policies.

2. **Financial sector prioritization.** Capital flowed toward finance, real estate, and services, where returns were faster and regulatory burdens lighter. Manufacturing investment was systematically deprioritized by both public and private capital allocation.

3. **The absence of institutional maintenance.** Germany maintained four interlocking pillars of industrial ecosystem support: the dual apprenticeship system (~1.2 million enrolled, ~400,000 training companies), the Sparkassen regional banks (70 per cent market share of SME financing), the Fraunhofer institutes (75 institutes, €3.6 billion budget, ~65 per cent of commercial clients are SMEs), and the IHK chambers of commerce (mandatory membership for all companies, providing training administration and regional coordination).[^6] The Anglosphere dismantled or never built equivalents in each domain.

[^6]: German dual system: expatrio, "German Dual Apprenticeship System," 2024; Sparkassen: "Sparkassen Market Share in SME Financing," Deutscher Sparkassen- und Giroverband; Fraunhofer: Fraunhofer-Gesellschaft, annual report 2024; IHK: Association of German Chambers of Industry and Commerce (DIHK).

<!-- FIG.03: Diagram — Germany's Four Pillars vs. Anglosphere Equivalents (or lack thereof). Side-by-side comparison showing Dual System / Sparkassen / Fraunhofer / IHK against the empty or weak equivalents in US/UK/CA/AU. | TYPE: diagram -->

4. **The "managed decline" doctrine.** In 1981, Geoffrey Howe, then Chancellor of the Exchequer, wrote privately to Margaret Thatcher after the Toxteth riots asking whether Britain should pursue "managed decline" for Liverpool. The cabinet papers, released under the thirty-year rule in 2011, confirmed the phrase.[^7] What Howe articulated as a radical option for one city became the default industrial policy of the entire Anglosphere for the next four decades — not a deliberate plan, but an absence of one.

[^7]: "Geoffrey Howe Suggested 'Managed Decline' for Liverpool," BBC News, December 30, 2011. Howe later denied advocating the position.

:::margin
"Should we rather go for 'managed decline'? This is not a term for use, even privately." — Geoffrey Howe to Margaret Thatcher, September 4, 1981
:::

## The Consequences, Quantified

The human and economic consequences of this decline are now measurable with precision:

- **1.9 million** manufacturing jobs may go unfilled in the United States by 2033 without intervention.[^8]
- **65 per cent** of manufacturers cite attracting and retaining talent as their primary business challenge.[^9]
- Electronics assembler and hand solderer are the **most difficult production roles to fill** in the electronics industry globally.[^10]
- The skilled trades face a **five-to-one exit-to-entry ratio** — five workers retiring for every one entering.[^11]
- Asia produces **more than 85 per cent** of global PCB output; North America accounts for roughly 5 per cent.[^12]
- A stronger skilled workforce would bring back **30 per cent** of currently offshored production — seven percentage points more than the effect of 15 per cent tariffs across all imports.[^13]

[^8]: Deloitte and The Manufacturing Institute, "Creating Pathways for Tomorrow's Workforce Today," 2024. Updated from the 2021 study's 2.1 million figure.

[^9]: National Association of Manufacturers, "Manufacturers' Outlook Survey," Q4 2024.

[^10]: IPC, "Building Electronics Better: A Comprehensive Strategy to Address the Electronics Industry's Global Workforce Challenge," April 2024.

[^11]: Canadian Apprenticeship Forum and multiple provincial trades analyses. The ratio varies by trade and province but the 5:1 figure is consistently cited in skilled trades advocacy across the Anglosphere.

[^12]: IPC, "World PCB Production Report," 2023. The precise North American share fluctuates between 4–5 per cent depending on the year and methodology.

[^13]: IndustryWeek and Reshoring Initiative, "2025 Reshoring Survey Report," survey of 500+ manufacturers conducted February–April 2025.

:::inset[The Workforce Gap Outweighs the Tariff Effect]
The IndustryWeek/Reshoring Initiative 2025 survey is the strongest single data point for Clark's thesis. Asked what would bring back the most offshored production, manufacturers ranked a larger skilled workforce at 30 per cent versus 23 per cent for 15 per cent tariffs — a seven-percentage-point advantage. Workforce beats tariffs. Capability beats incentives. The ecosystem beats everything.
:::

The final number is the most important for this paper's argument. Tariff policy dominates the political conversation about reindustrialization. Workforce capability — the thing Clark builds — is demonstrably more effective, and it is the thing no government programme currently delivers at the ground level.

<!-- FIG.04: Bar chart — "What would bring back the most offshored production?" from IndustryWeek 2025 survey. Workforce (30%) vs. Tariffs (23%) vs. Lower dollar vs. Fewer regulations. | TYPE: chart -->

\newpage

# The Pattern

## What Every Successful Ecosystem Had

Every industrial ecosystem that achieved sustained productivity — from Manchester in the 1800s to Shenzhen in the 2000s — was sustained by the same three mechanisms, first identified by the economist Alfred Marshall in 1890.[^14]

[^14]: Alfred Marshall, *Principles of Economics* (London: Macmillan, 1890), Book IV, Chapter X, "Industrial Organization, Continued. The Concentration of Specialized Industries in Particular Localities."

:::margin
Marshall's *Principles* was published in 1890 but the phenomena he described were already centuries old. Birmingham's workshop economy dates to the 1600s. What Marshall did was name the mechanisms — and in doing so, make it possible to deliberately recreate them.
:::

**Knowledge spillover.** Marshall's most famous passage: "The mysteries of the trade become no mysteries; but are as it were in the air, and children learn many of them unconsciously. Good work is rightly appreciated, inventions and improvements in machinery, in processes and the general organization of the business have their merits promptly discussed: if one man starts a new idea, it is taken up by others and combined with suggestions of their own."[^15] This describes ambient knowledge transfer — tacit know-how that cannot be codified or transmitted through formal channels but permeates a geographic community of practice.

[^15]: Marshall, *Principles of Economics*, Book IV, Chapter X.

**Labour market pooling.** Specialized workers attract firms that need them; firms attract more workers. The pooled market reduces risk for both: employers can find skills, workers can find jobs. The cycle is self-reinforcing until it is broken.

**Subsidiary industries.** As the district grows, firms specialize more narrowly, creating a deeper division of labour that no single firm could sustain alone. Marshall: "Subsidiary industries devoting themselves each to one small branch of the process of production, and working it for a great many of their neighbours, are able to keep in constant use machinery of the most highly specialized character."[^16]

[^16]: Marshall, *Principles of Economics*, Book IV, Chapter X.

Beyond these three mechanisms, a review of eight major ecosystem case studies — Manchester, Birmingham, the Connecticut River Valley, Detroit, Shenzhen, Silicon Valley, the German Mittelstand, and Emilia-Romagna — reveals two additional requirements that Marshall implied but did not name explicitly:

**Patient capital.** In Germany, the Sparkassen provide long-term, stable financing to SMEs. In Italy's Emilia-Romagna (€198 billion GDP, 25.2 per cent manufacturing employment), cooperative banks serve the same function.[^17] In the Anglosphere, quarterly-earnings-driven finance systematically deprioritizes multi-year capability development.

[^17]: Emilia-Romagna GDP and manufacturing employment: Eurostat and ISTAT regional accounts, 2023. The region's economic model — high-value SME clusters with cooperative financial infrastructure — is one of the most studied examples of successful industrial districts outside Asia.

**A coordination entity.** This is the finding that matters most for Clark's thesis. Every successful ecosystem had an institution whose purpose — explicit or emergent — was to maintain the conditions for the ecosystem's operation:

<!-- FIG.05: Timeline/map diagram — "The Coordination Entity Through History." Visual showing the entity in each ecosystem: Lit & Phil (Manchester, 1781), Soho Manufactory (Birmingham, 1761), Springfield Armory (Connecticut, 1794), SAE (Detroit, 1905), Stanford Industrial Park (Silicon Valley, 1951), Huaqiangbei (Shenzhen, 1988), Fraunhofer (Germany, 1949). | TYPE: diagram -->

- In Manchester, the Literary and Philosophical Society (founded 1781) diffused frontier science into industrial practice, while the Mechanics' Institute (1824) translated it into workforce capability.[^18]
- In Birmingham, Matthew Boulton's Soho Manufactory (from 1761) demonstrated what was possible at scale while the surrounding workshop economy provided the specialization.[^19]
- In the Connecticut River Valley, the Springfield Armory (1794) served as anchor customer, R&D sponsor, and IP diffuser — creating the precision tool industry that shipped 25 per cent of the country's machine tools.[^20]
- In Detroit, the Society of Automotive Engineers (1905) published interoperability standards that made a supplier ecosystem possible. By 1921, SAE standards saved the industry an estimated seven million dollars annually and enabled hundreds of independent firms to participate in a shared production network.[^21]
- In Silicon Valley, Frederick Terman at Stanford deliberately fostered the academic, industrial, and governmental relationships that transformed a farming region into the world's most productive technology cluster.[^22]
- In Shenzhen, the Huaqiangbei market — thirty times larger than Tokyo's Akihabara — became a real-time intelligence system, matchmaking platform, and trust network that coordinated a million-firm supply chain.[^23]
- In Germany, the Fraunhofer network was explicitly designed to bridge the gap between university research and industrial application, serving over 30,000 SMEs as commercial clients.[^24]

[^18]: Manchester Literary and Philosophical Society: Britannica, "Manchester — Evolution of the Modern City"; Mechanics' Institute: Wikipedia, "Mechanics' Institute, Manchester."

[^19]: Soho Manufactory: Historic England, "When Soho Led the World," 2020.

[^20]: Robert Forrant, "The Government's Role in Creating an Innovation Ecosystem: The Springfield Armory as Hub in the Connecticut River Valley Innovation Ecosystem," *Journal of Management History* 26, no. 4 (2020): 557–74.

[^21]: Howard E. Coffin's standardization programme: "Intercompany Technical Standardization in the Early American Automobile Industry," *Journal of Economic History* (Cambridge University Press). SAE: Wikipedia, "SAE International."

[^22]: Fred Terman: Electronic Design, "Fred Terman: The Father of Silicon Valley Raises an Industry"; Silicon Valley Historical Association.

[^23]: Bunnie Huang, "From Gongkai to Open Source," bunniestudios.com, 2014; Global Sources, "Guide to Huaqiangbei Electronics Market."

[^24]: Fraunhofer-Gesellschaft, annual report 2024; National Academies, "The German Model of Applied Research."

## What Killed Them

:::inset[The Central Finding]
In every case where an industrial ecosystem died, the cause was the same: **no entity was responsible for maintaining the ecosystem as a whole.** The ecosystem's components — knowledge, skills, suppliers — were treated as natural phenomena that would sustain themselves. They did not. When the coordination entity was removed, weakened, or never existed, the ecosystem collapsed within a generation.
:::

The case studies are precise about the mechanisms of death:

**Birmingham** peaked in the 1960s with GDP per capita 10 per cent above the national average. The Distribution of Industry Act 1945 required Industrial Development Certificates before building new factories — controls that made it impossible to regenerate businesses. The 1970s recession and oil crisis hit an economy that had over-concentrated on the motor industry, abandoning the diversified workshop model that had been its strength. Between 1971 and 1987, Birmingham lost almost one-third of its total employment.[^25]

[^25]: "The Forgotten Post-War Decree That Deliberately Strangled Birmingham," Birmingham Dispatch; De Propris and Lazzeretti, "Measuring the Decline of a Marshallian Industrial District: The Birmingham Jewellery Quarter," *European Planning Studies* (2009).

**The Connecticut River Valley** lost its anchor when the Springfield Armory closed in 1968. But the ecosystem's decline had deeper roots: in the 1960s, the US machine tool industry entered what one historian calls a "death spiral precipitated by managerial deficiencies, corporate reorganizations, and heightened international competition." By the mid-1970s, the United States had become the world's largest importer of machine tools — a catastrophic reversal for the region that had invented precision manufacturing.[^26]

[^26]: Robert Forrant, "The Roots of Connecticut River Valley Deindustrialization," *Historical Journal of Massachusetts*; Valley Advocate, "Springfield Industry: A Long, Slow Death."

:::margin
The Connecticut River Valley went from "America's Silicon Valley" — the phrase used by academic historians — to a deindustrialized corridor within two decades of losing its anchor institution. The speed of ecosystem death, once the coordination entity is removed, is consistently faster than the speed of ecosystem formation.
:::

**Detroit's** supplier ecosystem was hollowed not by imports but by Ford's vertical integration model — the deliberate elimination of ecosystem complexity through internalization — followed by GM's offshoring of the supplier relationships that SAE had made interoperable. The city that had 285,000 residents in 1900 and nearly 1.3 million by 1930 has undergone one of the most documented urban-industrial collapses in history.[^27]

[^27]: Ford River Rouge Complex: Detroit Historical Society; Alfred Sloan's multidivisional structure and the Fisher Body case: Klein, Crawford, and Alchian, "Vertical Integration, Appropriable Rents, and the Competitive Contracting Process," *Journal of Law and Economics* (1978).

The lesson is consistent across centuries and continents: industrial ecosystems are not self-sustaining. They require deliberate institutional maintenance. The Anglosphere's deindustrialization is not a story of inevitable economic evolution. It is a story of institutional abandonment.

\newpage

# The Gap

## What Exists Today

A comprehensive scan of the competitive landscape reveals that no existing entity combines the five capabilities required to function as an ecosystem activation protocol. Each comparable covers one or two layers. None integrates all five.

<!-- FIG.06: Matrix diagram — "The Five-Layer Gap." Visual version of the competitor matrix showing Tulip, Ignition, Xometry, Vistage, EOS, Mondragon, and Clark across the five capability layers. | TYPE: diagram -->

**Industrial software platforms** address the operational layer but not the ecosystem:

- **Tulip Interfaces** ($1.3 billion valuation, $120 million Series D in January 2026) provides no-code frontline operations apps deployed at workstations — but no training, no physical nodes, no network model, no evidence publishing, no M&A facilitation.[^28]
- **Ignition by Inductive Automation** ($41 million ARR, used by 69 per cent of the Fortune 100) does plant-level SCADA — but not workstation-level job orchestration, not training, not ecosystem coordination.[^29]
- **Plex Systems** (acquired by Rockwell Automation for $2.22 billion) and **Sight Machine** ($21 million revenue) operate in the same plant-level, sell-to-existing-manufacturers paradigm.[^30]

[^28]: Tulip, "Tulip Secures $120M Series D," January 2026; Tulip pricing page, tulip.co/plans.

[^29]: Inductive Automation: Getlatka revenue data; Enlyft market share analysis.

[^30]: Plex: Rockwell Automation acquisition announcement, June 2021; Sight Machine: Crunchbase and Getlatka.

**Manufacturing marketplaces** address order routing but not capability building:

- **Xometry** ($676 million revenue, NYSE: XMTR) routes manufacturing orders to a network of shops — but does not train the workforce, does not activate ecosystems, does not take equity positions, and does not publish evidence.[^31]
- **Protolabs** ($500.9 million revenue) operates a similar model with its Hubs network.[^32]

[^31]: Xometry, Inc., FY2025 guidance and Q4 2024 earnings; IndustryWeek coverage.

[^32]: Proto Labs, Inc., FY2025 earnings release.

**Advisory and operating-system networks** address coordination but not production:

- **Vistage Worldwide** (~$127 million revenue, 45,000 members across 40 countries) provides CEO peer advisory — but does not touch production, training, or physical capability.[^33]
- **EOS Worldwide** ($145–226 million revenue, 275,000 companies using the framework, 732 implementers) provides an operating system for businesses — but not for ecosystems.[^34]

[^33]: Vistage: company website and Getlatka; EOS Worldwide: company website and industry reporting.

[^34]: EOS Worldwide: company website; implementer count from certified-implementer directory.

**Cooperative and franchise models** address network structure but not industrial activation:

- **Mondragon Corporation** (€11.2 billion revenue, 70,085 workers, 260 cooperatives) proves that industrial-scale distributed networks work — but requires worker ownership, which limits replicability.[^35]
- The **US franchise economy** exceeds $920 billion in output, demonstrating the power of branded, protocol-driven networks — but franchise models have not been applied to industrial ecosystem activation.[^36]

[^35]: "Mondragon Worker Co-Op Federation Reports Sales of €11.213bn," Co-operative News, 2025.

[^36]: International Franchise Association, "Franchising Economic Outlook 2026."

:::inset[The Connected Worker Market]
The market segment closest to Clark's software layer — connected worker platforms — was valued at $5.9–8.6 billion in 2024–2025 and is projected to reach $18–27 billion by 2030–2032.[^37] This represents just one of Clark's five layers. The other four — physical nodes, workforce training, evidence publishing, and regional M&A — have no established market category because no one has built them as a combined offering.
:::

[^37]: MarketsandMarkets and Grand View Research, "Connected Worker Market" reports, 2024–2025.

## The Integration Claim

Each of Clark's five layers has working precedents. Nobody runs them as one loop:

| Capability | Existing precedent | What it proves | What it lacks |
|:-----------|:-------------------|:---------------|:-------------|
| Workforce training | EPTAC, BEST Inc., Lernfabriken | Bench-level certification works | No ecosystem context |
| Physical nodes | Fraunhofer, Fab Labs, makerspaces | Applied R&D and prototyping work | No production capability |
| Operational software | Tulip, Ignition, Plex | Shop-floor digitization works | No job-level orchestration |
| Evidence publishing | ProPublica, Hagerty, The Information | Data-backed journalism works | Never applied to industrial ground |
| Regional M&A | Constellation, HEICO, keiretsu | Decentralized acquisition works | No activation protocol attached |

Clark's invention is the loop itself: bench produces builders, builders need space, the registry knows where the space is, the reports make all of it legible to institutions and landowners, the software captures the evidence that makes the reports trustworthy and the ladder auditable. Then it repeats.

\newpage

# The Model

## Clark as Industrial Ecosystem Platform

Clark is an activation protocol for industrial recovery — a deliberate, repeatable method for lowering output-drag in a given region by providing the institutional backbone that the Anglosphere's industrial towns no longer have.

:::margin
**Output-drag** is the friction between manufacturing intent and fabrication capacity in a given region. Where it is low, everything moves. Where it is high, strategies sit on shelves. Germany's output-drag is low because four interlocking institutions maintain the fabrication backbone. The Anglosphere's is high and rising.
:::

It operates as a Platform-Franchise: a common brand, shared operational standards, and an open model for spawning regional entities that serve the unique needs of an area while delivering a core set of universal services. Each node is independently owned and operated; Clark holds a minority equity position (target 10 per cent, upper band 15–20 per cent) and provides methodology, benchmarking, curriculum, software, and network intelligence.

The protocol inverts the standard sequence for industrial revival. Instead of strategy → resources → builders, Clark runs:

**Observation → Evidence → Micro-action → Capability → Resources**

You do not start by asking for the land or the grant. You start by looking, in person. You publish what you see. You take the smallest real action the evidence supports. The action builds capability. And capability — demonstrated, documented — is what unlocks resources. Resources arrive last, attached to proof.

<!-- FIG.07: Diagram — The Protocol Inversion. Two flows side by side: Standard (Strategy → Resources → Builders, with "?" at the end) vs. Clark (Observation → Evidence → Micro-action → Capability → Resources, with a feedback loop). | TYPE: diagram -->

## The Five Layers

### Layer 1: Electronics Education and Industrial Intelligence

Clark's first commercial product is certified electronics training delivered at bench level.

The training centres on IPC certifications — the credentials the electronics industry checks for: IPC-A-610 (acceptability of electronic assemblies), J-STD-001 (soldering), and the Certified IPC Trainer pathway. Market reference pricing: $700–1,200 per student for A-610 CIS; $1,400–2,300 for combined packages.[^38]

[^38]: EPTAC and industry pricing surveys; IPC, "Building Electronics Better," April 2024. Clark's training is delivered in partnership with the established certification ecosystem (EPTAC partnership pathway).

Around the certifications sits Clark's own sixteen-course curriculum — five foundation courses, six professional practice courses, and five advanced courses — covering electronics manufacturing history, PCB anatomy, assembly processes, quality standards, supply chain operations, industry verticals, high-reliability workmanship, regulatory compliance, and the capstone: how to build and run a training programme. The capstone is how the curriculum propagates to other nodes without Clark teaching every class forever.[^39]

[^39]: Full curriculum details in Appendix I: The Bench Plan.

:::margin
The capstone course — CC-L3-05, "Building and Running a Training Program" — is the most strategically important course in the curriculum. Each graduate becomes a licensed delivery partner. This is how Clark's training capacity scales without linear instructor hiring. It borrows the structural logic of ham radio's Volunteer Examiner model: graduates certify the next cohort.
:::

The timing is significant. Ontario's colleges lost roughly $1.8 billion in revenue in 2026 and suspended some six hundred programmes, driven by the international-student permit cap. Hamilton's Mohawk College and London's Fanshawe College — the institutions that strategies like Hamilton's Bayfront plan assumed as training partners — are mid-contraction.[^40] A bench that issues industry-recognized credentials for hundreds of dollars, with a ladder that turns graduates into validators, is a working counter-model: education priced and shaped by what the ground needs.

[^40]: "Ontario Colleges Federal Policy Impact," Global News, 2026; "How Is the International Student Cap Impacting Fanshawe College?" CBC News London, 2025. Fanshawe projects deficits of $26.5M → $50.6M → $54.1M over three years.

### Layer 2: Electronics Processing and Assembly

Clark's physical nodes provide small-batch custom electronics creation and responsive product development — the local fabrication capacity that eliminates the queue to a distant continent.

The entry point is a single working bench, equipped to industry standard for $10,000–25,000: ESD bench, inspection scope, soldering stations, fume extraction, test equipment, and camera-and-display rigs. Comparators: a twenty-station institutional lab costs $100,000–300,000+; recently funded mobile training labs cost $500,000–1.2 million. The bench is 20–50× cheaper.[^41]

[^41]: Equipment pricing: Mantis-class scope (~$4–6K), JBC/Metcal-grade stations ($1–4K/station). Lab comparators: EPTAC and IPC facility data. Mobile lab comparators: recent US DoD-funded programmes.

<!-- FIG.08: Photo placement — A working electronics assembly bench at industry standard. Should show the ESD surface, soldering station, inspection scope, fume extraction, and camera rig. Ideally photographed in an industrial setting, not a classroom. | TYPE: photo -->

As nodes mature, they progress from bench to training centre to assembly-capable facility. The physical centre is not optional — it is the mechanism itself. It is the place where Marshall's knowledge spills over, where the labour pool forms, where the supplier network becomes visible and connected.

:::inset[Why Electronics?]
Electronics is the oxygen of modern industry. It sits inside every industrial operation and every industrial product. The machines that make things run on embedded control; the things they make ship with sensors, firmware, and connectivity. An ecosystem without local electronics capability is breathing through a straw — every pivot, every adjustment, every retrofit waits on a distant queue. Electronics is the highest-leverage, lowest-footprint capability per dollar and per square metre. It touches every sector on every industrial strategy's target list. One bench in a mid-size city can credibly serve customers on other continents. That is why the entry vector is a bench, not a bay.
:::

### Layer 3: Production and Logistics Software (Clarkware)

Clarkware is Clark's operational software family — a clerk for industrial work. Its central loop: log activities as they happen (human, machine, and AI), synthesize them into operational understanding, and report them in forms that support trust, quality, and decision-making.[^42]

[^42]: Full technical architecture in Appendix J: The Evidence Machine.

The unit of deployment is the Intelligent Process Environment (IPE) at workstation level: a current-job view, note composer, artifact attachment, job threads, event stream, and AI summary pane. The non-negotiable property: human actions, AI actions, and automation actions are always distinguishable and auditable.

Clarkware is bundled by default into Assembly Centre participation and separately billable only for non-centre users. The software is part of what a node *is*, not an upsell. Pricing for the software layer follows the connected worker platform market, where Tulip charges approximately $100–250 per interface per month.

### Layer 4: Industrial Evidence Publishing

Clark publishes what it observes and what it does — and only what it does. The discipline is structural: **no action, no amplification.** Coverage cannot be purchased, only earned by documented work.

The publication unit is the standardized industrial field report: simultaneously a readable narrative and a structured data record — claims table, source links, observation dates, correction history. As Clarkware matures, the pipeline closes: bench events → facility record → published report → registry update → the next observation.

:::margin
When local newspapers close, municipal borrowing costs rise 5–11 basis points. Credible local evidence measurably lowers a region's information-risk premium. The field report is infrastructure, not content.
:::

The registry — Clark's activation map of genuinely available, serviced, and idle industrial space — is the field report's geographic complement. A working demonstration runs at atlas.babb.tel, currently pointed at UK data. The precedents are concrete: London's Meanwhile Space has placed 1,100 occupants in 60 idle buildings; Renew Newcastle filled 70 projects into a dead downtown on rolling licences and wound itself down after reviving the market.[^43]

[^43]: Meanwhile Space CIC: company data; Renew Newcastle: Marcus Westbury, "Creating Cities" (2015).

### Layer 5: Capital Brokering and Regional Acquisition

Each Clark node is anchored by and co-owned with a regional ecosystem entity — for example, "Niagara Assembly" in the Hamilton-Niagara corridor. That anchor entity, operating under the Clark brand and with Clark's counsel and resources, progressively develops the sophistication to perform mergers and acquisitions within its own ecosystem.

This is the mechanism that distinguishes Clark from everything else on the landscape. The progression runs: observation → bench → training centre → assembly-capable node → regional acquirer. At acquirer status, the anchor entity performs M&A with Clark's counsel, benchmarking data, and network intelligence — acquiring key assets, properties, and companies to ensure the ecosystem's acceleration.

This is not Clark performing the acquisitions. It is the regional anchor, independently owned, performing M&A at its own discretion and with its own capital, informed and counselled by Clark.

<!-- FIG.09: Diagram — The Node Progression. Visual showing the five stages: Observation → Bench → Training Centre → Assembly Node → Regional Acquirer. Each stage shows what the node can do and what revenue it generates. | TYPE: diagram -->

\newpage

# The Precedents

## Structural Models That Validate Clark

Three structural precedents validate the specific combination of decentralized ownership, shared methodology, minority equity, and regional M&A that Clark employs:

### Constellation Software

Constellation Software (TSX: CSU) is the purest precedent for Clark's "branded network with autonomous nodes" model. Founded in Toronto in 1995, it has completed over 1,100 permanent-hold acquisitions and generated CAD $11.6 billion in annual revenue in 2025.[^44]

[^44]: Constellation Software Inc., Q4 2025 and Full Year Results, February 2026.

Mark Leonard's operating philosophy — "delegation to the point of abdication" — is explicitly the opposite of scale-through-centralization. Management retention rates exceed 80 per cent post-acquisition. Headquarters provides capital allocation, benchmarking, and best-practice dissemination; it does not integrate operations, centralize product, or force synergies.[^45]

[^45]: Mark Leonard, Constellation Software Shareholder Letters, 2010–2024; Quartr, "Mark Leonard: The Mysterious Brain Behind Constellation Software."

The translation challenge: Constellation acquires 100 per cent of capital-light software companies. Clark takes 10–20 per cent minority positions in capital-heavy physical manufacturing. Constellation proves the thesis that decentralized intelligence plus shared benchmarking is superior to centralized integration. The question Clark answers is whether the model works with minority equity rather than full ownership.

### HEICO Corporation

HEICO (NYSE: HEI), with $4.5 billion in annual sales, empowers its subsidiaries to identify and execute their own acquisitions — the closest existing precedent for Clark's model of the regional anchor doing the M&A.[^46]

[^46]: HEICO Corporation, FY2025 Annual Report.

:::margin
HEICO's Flight Support Group generates over $3 billion in revenue from a collection of independently run businesses that share supply-chain access and operational methodology but retain their own leadership, customer relationships, and strategic direction. This is the structural template for Clark's regional anchors at maturity.
:::

HEICO's governance model is instructive: subsidiaries are not passive portfolio companies. They are active operators with M&A authority within their domain. This is precisely what Clark envisions for mature regional anchors — Niagara Assembly, having developed through the observation-to-bench-to-centre progression, begins acquiring key regional assets with Clark's counsel but on its own initiative.

### The Keiretsu Model

Toyota's supplier network — 580 Tier-1 firms and 1,476 Tier-2 firms, bound by minority equity stakes, shared methodology (the Toyota Production System), and geographic clustering — is the strongest structural analogue for Clark's full model.[^47]

[^47]: Toyota Motor Corporation supplier network data: Toyota Industries Corporation annual reports and industry analyses. The keiretsu structure is extensively documented in academic literature on Japanese industrial organization.

The keiretsu model is not command-and-control. It is a web of minority relationships coordinated through shared standards and mutual investment. The key features that map to Clark:

- Minority equity (typically 5–30 per cent) rather than full ownership
- Shared methodology and quality standards applied network-wide
- Geographic clustering around anchor demand
- Cooperative associations that manage collective interests
- Multi-generational relationships that compound institutional knowledge

The adaptation for Common Law jurisdictions is structural, not cultural: Clark's contracts, IP licensing, and equity instruments operate through the legal frameworks that La Porta et al. have shown to provide the strongest investor protections and the most adaptive commercial-law environments in the world.[^48]

[^48]: Rafael La Porta, Florencio Lopez-de-Silanes, Andrei Shleifer, and Robert W. Vishny, "Law and Finance," *Journal of Political Economy* 106, no. 6 (1998): 1113–55.

<!-- FIG.10: Diagram — Clark's Structural DNA. Visual showing the three precedents (Constellation, HEICO, Keiretsu) and what Clark takes from each, converging on the Clark model. | TYPE: diagram -->

### Additional Precedents

Several additional models inform specific aspects of Clark's design:

- **Fraunhofer's 30/70 funding model** (30 per cent base funding, 70 per cent contract revenue) validates applied research institutions that are self-sustaining rather than grant-dependent.[^49]
- **ITRI (Taiwan)** spawned TSMC and 162 other spinoffs, proving that a coordinating institution can birth world-class manufacturing capacity — and used military conscription as a workforce pipeline for its early research programmes.[^50]
- **The search fund model** (12 million+ businesses expected to change hands as Baby Boomers retire, with search funds achieving 35.1 per cent IRR at the top quartile) validates the acquisition economics Clark's regional anchors will operate within.[^51]

[^49]: Fraunhofer-Gesellschaft, "Financing Structure," annual report 2024.

[^50]: ITRI: National Academies, "The New Global Ecosystem in Advanced Computing" (2012); TSMC founding: company history.

[^51]: Stanford GSB, "2024 Search Fund Study"; International Search Fund Institute data.

:::inset[The Cautionary Models]
Not all institutional models succeed. **NIST MEP** (the US Manufacturing Extension Partnership) is being defunded after its own Office of Inspector General found overstated impact claims. **UK Catapult Centres** received a damning EY governance review. **Fab Labs** hit a structural ceiling: they enable prototyping but cannot cross into production. Each cautionary case validates one of Clark's design choices: evidence discipline over impact theatre (vs. MEP), private-sector accountability over government governance (vs. Catapults), and a production pathway beyond prototyping (vs. Fab Labs).
:::

\newpage

# The Market

## Twenty-Three Investor-Grade Claims

The following claims constitute the evidence base for Clark's market thesis. Each is sourced, and the full citation with methodology notes appears in Appendix F.[^52]

[^52]: The claims discipline follows the Clark Claims Register protocol: each claim is classified as Safe (independently verifiable), Needs Validation (sourced but not independently confirmed), or Rejected (found to be unsupported). Only Safe claims appear here.

### Workforce Demand

1. **3.8 million** new manufacturing employees needed in the US by 2033; nearly half (~1.9 million) may go unfilled without intervention.[^53]
2. **65%** of manufacturers cite talent attraction and retention as their primary business challenge.[^54]
3. Electronics assembler and hand solderer are the **most difficult production roles to fill** globally.[^55]
4. **80%** of the hardest-to-fill manufacturing roles are entry and mid-level positions requiring only a post-secondary certificate or high-school diploma.[^56]
5. The **5:1 exit-to-entry ratio** in skilled trades means the knowledge pipeline is collapsing faster than any training programme currently addresses.
6. IPC has created the **first three Department of Labor-approved apprenticeship programs** for electronics: Electronics Assemblers, PCB Designers, PCB Fabricators.[^57]

[^53]: Deloitte and The Manufacturing Institute, 2024 study.
[^54]: NAM Outlook Survey, Q4 2024.
[^55]: IPC, "Building Electronics Better," April 2024.
[^56]: Deloitte and The Manufacturing Institute, 2021 study.
[^57]: IPC, "Building Electronics Better," April 2024.

### Reshoring Momentum

7. **244,000** US manufacturing jobs announced in 2024 via reshoring and FDI; over **2 million cumulative since 2010**.[^58]
8. **88%** of 2024 reshoring jobs were in high- or medium-high-tech sectors.[^59]
9. Computer and electronics was the **leading sector at 28%** of all reshoring/FDI jobs in 2024.[^60]
10. A stronger skilled workforce would bring back **30% of currently offshored production** vs. 23% for 15% tariffs — a **7-percentage-point advantage** for workforce over tariffs.[^61]
11. Tariffs were cited in **454% more cases** in 2025 vs. 2024, accelerating the reshoring decision cycle.[^62]

[^58]: Reshoring Initiative, 2024 Annual Report.
[^59]: Ibid.
[^60]: Ibid.
[^61]: IndustryWeek/Reshoring Initiative, 2025 Reshoring Survey.
[^62]: Reshoring Initiative, April 2025 press release.

### Semiconductor and Electronics Gaps

12. **CHIPS Act:** $52.7 billion authorized for semiconductor manufacturing; the sector attracted ~$102.6 billion in capital investment in 2024.[^63]
13. The US semiconductor industry faces a **59,000–146,000 worker shortfall** by 2029.[^64]
14. Asia produces **85%+ of global PCB output**; North America accounts for roughly **5%**.[^65]
15. The North American EMS market is projected to grow from **$53.2 billion to $97.4 billion**.[^66]

[^63]: CHIPS Act text; Reshoring Initiative sector data.
[^64]: McKinsey estimate reported in IEEE Spectrum, 2024.
[^65]: IPC World PCB Production Report, 2023.
[^66]: Grand View Research, "Electronics Manufacturing Services Market," 2024.

### Canadian-Specific

16. Canada's first **Defence Industrial Strategy** commits over **$500 billion** over 10 years, with a "Build-Partner-Buy" framework prioritizing Canadian firms.[^67]
17. Ontario targets tripling its defence workforce from **13,000 to 43,000 by 2035**.[^68]
18. The **Canada-Ontario Workforce Tariff Response** allocates **$228.8 million** to retrain up to 27,000 tariff-hit workers — steel and automotive named.[^69]
19. Ontario colleges lost **~$1.8 billion** in revenue in 2026; ~600 programmes suspended or cancelled.[^70]
20. **Buy Canadian** procurement policy applied to ~$3.6 billion in solicitations by mid-April 2026.[^71]

[^67]: PM Canada, "Prime Minister Carney Launches Canada's First Defence Industrial Strategy," February 17, 2026.
[^68]: Northern Ontario Business, "Ontario Strategy Aims to Put More Pop in the Defence Industry," CANSEC 2026 coverage.
[^69]: CBC News, "$229M Tariff Retraining"; Ontario Budget 2026.
[^70]: Global News, "Ontario Colleges Federal Policy," 2026.
[^71]: PM Canada, Buy Canadian policy progress reports, April 2026.

### Anglosphere-Wide

21. CANZUK has **72–75% public support** across its four member nations, with a combined GDP of **>$8.3 trillion**.[^72]
22. Combined Anglosphere manufacturing output is approximately **$3.47 trillion** — roughly 18% of global manufacturing.[^73]
23. All five Anglosphere nations have active reindustrialization programmes, ranging from US trillions to NZ millions.[^74]

[^72]: CANZUK International polling, February 2026.
[^73]: World Bank manufacturing value added data, compiled across all five nations.
[^74]: See Appendix K: Policy Environment by Nation.

<!-- FIG.11: Infographic — "23 Claims at a Glance." Key numbers from the claims arranged as a visual dashboard: 1.9M jobs unfilled, 85% PCB in Asia, 30% reshoring from workforce, $8.3T CANZUK GDP, etc. | TYPE: diagram -->

\newpage

# The Geography

## Hamilton as Reference Implementation

Hamilton, Ontario sits at the head of the Niagara Peninsula. It is a steel city and a port city, home to over eighteen thousand industrial jobs in its Bayfront district alone. It also has one of the cleanest-documented cases of the stalled reindustrialization pattern in the Anglosphere — the subject of Clark's first field report.[^75]

[^75]: Clark, "Field Report 001: The Lots That Nobody Builds On," 2026. The report documents the Bayfront Industrial Area Strategy (approved September 2022, 47 actions, 6 achieved as of end 2024), the Central Hamilton Business Park (18 lots, 26 acres, remediated by 2018, unbuilt), and Action 42 (not started).

:::margin
Action 42 of the Bayfront strategy — "Form partnerships with local institutions to create space for start-up research and innovation opportunities" — has not started. Not because it was forgotten, but because it has no natural owner. Clark is the answer to Action 42.
:::

Hamilton is not a pilot site in the sequential sense. It is the **reference implementation** — the most thoroughly documented, most transparent experiment, generating the field reports and working papers that any other region can study, adapt, and deploy. But it is not a gate. The urgency does not permit sequential validation.

**Niagara Assembly** is the regional anchor entity for the Hamilton-Niagara corridor — independently owned and operated, adopting the Clark protocol, developing through the observation-to-bench-to-centre-to-acquirer progression. The Niagara Peninsula — Hamilton through St. Catharines, Thorold, Welland, and Port Colborne to Niagara Falls and Fort Erie, rolling across the river into Buffalo and Western New York — is a natural distributed production zone: many small and mid-size nodes, not one hub. The border is a feature: two funding systems, two markets, one geography.

<!-- FIG.12: Map — The Niagara Peninsula as Distributed Production Zone. Showing Hamilton at the head, the arc of towns through to Fort Erie/Buffalo, the Welland Canal, key industrial sites, and the border. Should also show the westward hinge to London/St. Thomas. | TYPE: diagram -->

## The Counterweight Question

Two nodes prove a protocol. The counterweight candidates:

| Candidate | Strength | Friction |
|:----------|:---------|:---------|
| **Buffalo/WNY** | Binational proof; two funding stacks; $88B annual freight crossing; Artaflex precedent | Cross-border entity, insurance, compliance |
| **St. Catharines/Welland** | Lowest friction; same province; fastest second bench | Proves replication, not jurisdiction-independence |
| **Niagara Falls, NY** | Highest need; sharpest contrast | Thinnest institutional partner layer |

The protocol does not permit adjudicating the counterweight from a desk. Field Report 002 goes to look.[^76]

[^76]: Full counterweight evaluation criteria in Appendix H: The Counterweight File.

## The Westward Arc

Hamilton faces two directions. To the west: London (GDLS armoured vehicles, 1,700 workers, awaiting Defence Industrial Strategy orders), St. Thomas (PowerCo $7 billion gigafactory, production from 2027), and the defence-industrial corridor to Windsor. Both stories are electronics-hungry. Ontario targets tripling its defence workforce to 43,000 by 2035 with no named entry-level training mechanism. The hinge matters.

## The Anglosphere Map

Beyond the peninsula, the pattern repeats:

| Nation | Reindustrialization Scale | Key Mechanism | Clark's Entry |
|:-------|:-------------------------|:-------------|:-------------|
| **United States** | >$2 trillion (CHIPS + IRA + IIJA) | CHIPS workforce gap (59K–146K); reshoring (244K jobs/yr) | I-Corridor (Upstate NY); defence corridors |
| **United Kingdom** | £ billions (Modern Industrial Strategy) | Freeports (£6.4B attracted); Catapults; Black Country / Sheffield | Atlas already maps UK industrial towns |
| **Canada** | $500B+ (Defence Industrial Strategy) | Buy Canadian; 125K jobs target; college contraction | Hamilton (reference); London/SW Ontario |
| **Australia** | A$15B (NRF) + critical minerals | AUKUS Pillar II; Geelong Treaty; minerals processing | Defence-industrial integration demand |
| **New Zealand** | Modest (ITP framework) | 10% of GDP, 73.5% of goods exports from advanced mfg | Small enough for handful of nodes |

\newpage

# The Economics

## First Node: Hamilton

:::inset[The First Proof Case]
The investor-grade proof is a single node plus one enablement relationship:

| Line | Amount (CAD) |
|:-----|-------------:|
| Hamilton training contribution (base case, net) | ~62,536 |
| One paid discovery engagement | ~5,000 |
| One node onboarding engagement | ~25,000 |
| One node on recurring enablement (12 months × $3,500) | ~42,000 |
| **Illustrative first proof-case contribution** | **~134,536** |

This is deliberately not a scale case. It is a proof case: Clark can generate revenue from both direct operation and network enablement before any platform maturity exists.[^77]
:::

[^77]: Full financial models in Appendix I: The Bench Plan and Appendix H: Node Economics.

**Training economics (Year 1 base case):**

| Metric | Conservative | Base | Optimistic |
|:-------|:-------------|:-----|:-----------|
| Courses delivered | 14 | 22 | 34 |
| Student-events | 112 | 176 | 306 |
| Gross revenue | CAD 123,200 | CAD 211,200 | CAD 413,100 |
| Net Clark contribution | CAD 41,146 | CAD 62,536 | CAD 138,023 |

**Training economics (Year 2 base case):**

| Metric | Conservative | Base | Optimistic |
|:-------|:-------------|:-----|:-----------|
| Courses + modules | 24 | 40 | 60 |
| Student-events | 190 | 330 | 540 |
| Gross revenue | CAD 218,500 | CAD 429,000 | CAD 810,000 |
| Net Clark contribution | CAD 66,892 | CAD 145,328 | CAD 309,696 |

Break-even: approximately two eight-student courses per month against ~CAD $8,738 in monthly fixed costs. The binding risk is instructor readiness and delivery capacity, not the fee structure.

## The Fee Stack

| Revenue Line | Range | Trigger |
|:-------------|:------|:--------|
| Direct training contribution | Per planning models above | Cohort delivery |
| Discovery and qualification fees | CAD 2,500–7,500 per engagement | Facility/town assessment |
| Node onboarding | CAD 15,000–40,000 per node | New node standing up |
| Recurring node enablement | CAD 2,000–8,000/month per active node | Ongoing support |
| Software (Clarkware) | Bundled in nodes; separate billing for non-centre users | Assembly Centre participation |
| Equity (10–20% in regional anchors) | Long-term upside | Node maturation |

:::margin
**Rule:** Equity appreciation is never counted as operating revenue. This is the discipline that keeps Clark honest about whether its services are worth paying for independent of its ownership positions.
:::

## The 24-Month Proof Bar

By month 24, the stack must have demonstrated, with evidence in the record:

1. Repeatable training contribution — more than one cohort cycle at or above base case
2. At least one paid node-onboarding path completed
3. At least one recurring node-support relationship that survives its first renewal
4. Software value visible enough that bundling is defensible rather than asserted

## Addressable Markets

| Market | Current Size | Projected | Clark's Layer |
|:-------|:-------------|:----------|:-------------|
| Connected worker platforms | $5.9–8.6B | $18–27B by 2030 | Software |
| SCADA | $11B | $22B by 2032 | Software (adjacent) |
| IPC training and certification | ~$200M+ globally | Growing with reshoring | Training |
| North American EMS | $53.2B | $97.4B | Assembly nodes |
| US franchise economy | $920B+ output | Growing | Network model |
| Global accelerator market | $5.1B | $6.1B by 2026 | Network model (adjacent) |

\newpage

# The Ask

## What Clark Needs

Clark is seeking founding-stage capital to execute the Hamilton reference implementation and first counterweight node. The capital funds:

1. **Instructor certification and first cohort delivery** — the CIT pathway for Clark's first IPC-certified instructor is the critical-path upfront cost
2. **Bench equipment and host-facility build-out** — $10,000–25,000 for the bench; ~4,500 sq ft co-location fit-out at the host facility
3. **Clarkware development** — IPE shell, first instrument integration, field report pipeline
4. **Field Report 002** — the counterweight investigation and publication
5. **Entity formation** — Canadian and (if Buffalo) US operating entities, insurance, regulatory compliance

<!-- TODO: Specific raise amount, valuation, instrument (SAFE/equity/convertible), and use-of-funds breakdown to be determined in collaboration with the founding team. This section is a placeholder for the financial terms. -->

## What Investors Get

- Minority equity in Clark (the platform entity)
- Indirect exposure to the network of regional anchors through Clark's 10–20% positions
- A business model with five distinct revenue streams, several of which generate cash from month one
- The structural advantage of a category-creation position: no existing entity combines Clark's five layers
- A protocol designed for Common Law jurisdictions — the legal environment with the strongest investor protections and the most adaptive commercial frameworks

## The Rules

Three rules govern Clark and are published here because the discipline is the product:

**No action, no amplification.** Clark does not publish what it has not done. This is the structural rule that prevents Clark from becoming a marketing operation dressed as an evidence platform.

**Resources follow capability.** Every revenue line is earned by a service actually delivered. Equity appreciation is never operating revenue. Onboarding economics are never waived.

**The protocol is the product.** Clark scales through evidence, not announcement. This paper, the field reports, the working papers, the claims register — all published for inspection. If the model works, the evidence will be visible. If it does not, the record will show that too.

---

\newpage

# Bibliography

<!-- TODO: Convert footnotes to formal Chicago Notes-Bibliography format bibliography. For Pandoc production, this will be auto-generated from the .bib file using chicago-fullnote-bibliography.csl. -->

Atkinson, Robert D. "Stagnation, Deindustrialization, and the Decline of Anglo-Saxon Economics." Information Technology and Innovation Foundation, August 12, 2024.

Baldwin, Richard. "How the G7 Deindustrialised." Substack, 2024.

Constellation Software Inc. "Q4 2025 and Full Year Results." February 2026.

De Propris, Lisa, and Luciana Lazzeretti. "Measuring the Decline of a Marshallian Industrial District: The Birmingham Jewellery Quarter." *European Planning Studies* 17, no. 9 (2009).

Deloitte and The Manufacturing Institute. "Creating Pathways for Tomorrow's Workforce Today." 2024.

Forrant, Robert. "The Government's Role in Creating an Innovation Ecosystem: The Springfield Armory as Hub in the Connecticut River Valley Innovation Ecosystem." *Journal of Management History* 26, no. 4 (2020): 557–74.

Fraunhofer-Gesellschaft. Annual Report 2024.

HEICO Corporation. FY2025 Annual Report.

Huang, Bunnie. "From Gongkai to Open Source." bunniestudios.com, 2014.

International Franchise Association. "Franchising Economic Outlook 2026."

IPC. "Building Electronics Better: A Comprehensive Strategy to Address the Electronics Industry's Global Workforce Challenge." April 2024.

La Porta, Rafael, Florencio Lopez-de-Silanes, Andrei Shleifer, and Robert W. Vishny. "Law and Finance." *Journal of Political Economy* 106, no. 6 (1998): 1113–55.

Marshall, Alfred. *Principles of Economics.* London: Macmillan, 1890.

National Association of Manufacturers. "Manufacturers' Outlook Survey." Q4 2024.

Prime Minister of Canada. "Prime Minister Carney Launches Canada's First Defence Industrial Strategy." February 17, 2026.

Reshoring Initiative. "2024 Annual Report." June 2025.

Reshoring Initiative and IndustryWeek. "2025 Reshoring Survey Report." 2025.

World Bank. "Manufacturing, Value Added (% of GDP)." World Development Indicators. Accessed June 2026.
