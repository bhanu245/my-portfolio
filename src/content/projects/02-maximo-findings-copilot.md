---
title: "Findings-to-Work-Order Copilot: AI that turns inspection findings into Maximo work orders"
summary: "A working AI prototype that converts an inspector's free-text finding into a validated, prioritised Maximo work order, with a planner approving every record and an expert-labelled accuracy test behind it."
domain: "Maritime"
role: "Product Owner: problem selection, product decisions, backlog, AI design, prototype and evaluation"
order: 0
status: "published"
skills: ["AI product ownership", "IBM Maximo data model", "Backlog prioritisation (MoSCoW, RICE)", "LLM prompt and output design", "Human-in-the-loop design", "AI evaluation", "Release and pilot planning"]
downloads: []
---

> **About this project:** a portfolio prototype built on synthetic data shaped like real Maximo objects. Vessel names are fictional. No employer or client data is used.
>
> **[Try the live demo](https://claude.ai/artifact/7V3UEi5RNhRabsn7C3gvs9)** · **[Read the full case study](https://claude.ai/artifact/Gh9wpmPubtY8SrD997erqu)**

## The problem

Inspectors and surveyors record findings as free text, for example: *"Heavy corrosion on No. 2 ballast tank stiffeners, approx 20% wastage, port side."* Maximo needs a structured record: the asset, location, failure code, priority and due date.

Someone has to translate one into the other. That step is slow, different planners classify the same defect differently, failure codes are often left blank, and critical items can sit in a long backlog. It is the main source of poor maintenance data.

## Why this problem, and not another

IBM's own Maximo AI already covers generic work-order intelligence and a general assistant. The open gap is domain-specific workflows such as class and condition findings, where customers want to bring their own AI into Maximo-driven processes. I chose a problem I had seen first-hand on a Maximo-based classification platform.

## What the product does

1. **Extract:** reads the finding and pulls out the component, defect, extent and severity, quoting the words it relied on.
2. **Match:** picks the asset only from that vessel's ASSET records.
3. **Classify:** chooses problem, cause and remedy only from the failure list for that asset's failure class.
4. **Draft:** writes the work order with work type, priority, target date and a one-line reason.
5. **Validate:** any asset or code that is not in the data is rejected and flagged.
6. **Decide:** the planner edits, approves or rejects. Every edit is logged against the AI suggestion.

A rule-based risk score then ranks the open backlog for the superintendent: asset criticality × severity, plus a due-date bonus and repeat failures in the last 12 months. It is rule-based on purpose, so every ranking can be explained.

## Key product decisions

| Decision | Chosen | Why |
|---|---|---|
| Where AI adds value | Finding-to-work-order | Generic assistants already exist; domain findings are an open gap |
| How much autonomy | Draft with human approval | Trust and data quality come first; planners stay accountable |
| How to rank the backlog | Rule-based score | Superintendents must be able to explain why an item is at the top |
| Demo data | Synthetic, using real Maximo objects and fields | No confidentiality risk, and the design maps directly onto a real instance |
| Proof of quality | Expert-labelled accuracy test | Evidence is what turns a demo into a pilot decision |

## Backlog and scope

The MVP was cut to what proves the core value: correct drafts, human control and evidence of accuracy. Prioritised with MoSCoW, with RICE to break ties.

- **Must:** extraction and drafting, validation against master data, approve / edit / reject with audit log, accuracy test
- **Should:** confidence levels per field, risk-ranked backlog
- **Could:** voice dictation
- **Won't (now):** photo findings, live Maximo integration (designed, not built)

## Release plan with go / no-go gates

| Release | Scope | Gate to the next release |
|---|---|---|
| R0 Demo | Synthetic marine data, text findings | At least 80% on asset match and problem code across 20 test findings |
| R1 Shadow pilot | One vessel, read-only real master data | Time per finding down at least 40%; no wrong-asset drafts approved |
| R2 Assisted pilot | Approved drafts written to a test Maximo via API | Over 70% accepted without edits; IT security sign-off |
| R3 Rollout | All vessels, plus a second domain pack | Pilot metrics hold across sites |

## How it would connect to Maximo

The copilot sits beside Maximo. It reads assets, locations and failure lists through Maximo's REST API (object structures such as MXAPIASSET and MXAPIWODETAIL) and, on approval, creates the work order and its failure report. No change to Maximo's core is needed.

## Artifacts

- Working prototype with copilot, risk-ranked backlog, accuracy test and data-model view (live demo above)
- Case study: problem, personas, 10 user stories with acceptance criteria, data model, AI design, ROI hypotheses, risks and governance, release plan
- Synthetic Maximo dataset: 2 vessels, 16 assets, 10 failure classes, 40 historical work orders

## Result

- A working prototype covering the full loop: finding in, validated draft, planner decision, audit trail, risk-ranked backlog.
- Guardrails built in: any asset or failure code the AI proposes that is not in the vessel's Maximo data is rejected before a planner sees it.
- An evaluation harness of 20 expert-labelled findings, from clear cases to deliberately vague ones, scored field by field.
- Integration-ready output: every approved draft is shown as the exact payload Maximo's work order API (MXAPIWODETAIL) would receive, so the path from prototype to a real Maximo instance needs no change to Maximo's core.

## What I'd do differently

- **Get planners to label the test set, not just me.** I wrote the expert answers and designed the prompt, so the test may favour how I think. In a real pilot, two or three planners should label independently, and their disagreement rate becomes the benchmark the AI has to match.
- **Measure the baseline first.** The ROI case assumes how long manual translation takes today. Before a pilot I would time planners on real findings, so the time saving is measured rather than estimated.
- **Test with messier, real findings sooner.** Synthetic findings are cleaner than what inspectors write on board: abbreviations, mixed languages, several defects in one note. The vague test case is a start, but real anonymised findings would show the true error rate faster than more synthetic ones.
