---
title: "Finding the right first AI use case for a ship-maintenance operation"
summary: "How a fleet operator with many AI ideas and no way to compare them chose one pilot using a weighted scoring matrix and a requirements package."
domain: "Maritime"
role: "Business Analyst leading discovery, prioritisation and requirements"
order: 1
status: "published"
skills: ["AI use-case discovery", "Stakeholder workshops", "Scoring matrix", "Requirements", "Process modelling"]
downloads:
  - label: "Download the scoring matrix (Excel)"
    href: "/downloads/AI_UseCase_Scoring_Matrix.xlsx"
  - label: "Download the as-is / to-be diagram (draw.io)"
    href: "/downloads/WorkOrder_AsIs_ToBe.drawio"
---

> **About this case study:** The company, data and figures are illustrative and anonymised. No confidential employer material is used. Items in [square brackets] are placeholders to replace with your own facts.

## Context and problem

A fleet operator held maintenance, inspection and compliance data across several systems. Leadership kept asking, "Where should we start with AI?" Teams proposed many ideas, but there was no consistent way to compare them, so the loudest idea was winning instead of the most valuable one.

## My role

Business analyst leading discovery, prioritisation and the requirements for the chosen pilot, working with operations, compliance, procurement and IT.

## Approach

### 1. Stakeholder map

Identified who owns maintenance, compliance, procurement and IT, and who would use or be affected by an AI solution. This showed early where adoption risk would sit.

### 2. Pain-point workshops

Structured sessions asked: What takes the most time? What causes rework? Which decisions rely on gut feel today? Every pain point was tied to **revenue, cost or efficiency**, so ideas could be compared in business terms.

### 3. Idea longlist

Ten candidate use cases, including work-order auto-classification, inspection report summarisation, predictive maintenance alerts, a regulation Q&A assistant, spare-parts demand forecasting and certificate expiry alerts.

### 4. Weighted scoring matrix

Each idea was scored from 1 to 5 against five criteria. The weights were agreed with stakeholders before any scoring, so the result could not be bent to favour a pet idea.

| Criterion | Weight | What a 5 looks like |
|---|---|---|
| Business value | 30% | Large, measurable gain in revenue, cost or efficiency |
| Data readiness | 25% | Clean, accessible, well-governed data already exists |
| Feasibility | 20% | Proven approach, simple integration |
| Risk / compliance | 15% | Low risk, easy to keep a human in the loop |
| Adoption ease | 10% | Users want it and it fits today's workflow |

The matrix is available to download above. Weighted scores, ranks and priority tiers calculate automatically.

### 5. Decision and business case

The top-ranked idea, **work-order auto-classification**, became the pilot. The one-page business case set a baseline (planner time spent on triage), a target improvement and the KPIs to track.

### 6. Process redesign

I mapped the as-is manual triage process and a to-be process where an AI service suggests the type and priority with a confidence score. Low-confidence items go to a planner, a sample of auto-tagged items is spot-checked, and safety-critical items always get human sign-off.

### 7. Requirements package for the pilot

- User stories with acceptance criteria written as Given / When / Then
- Data requirements and a data dictionary
- AI-specific requirements: accuracy target, confidence threshold, human review rules, fallback behaviour
- Evaluation plan: how accuracy and misclassification cost are measured before and after launch
- Risk register covering data quality, over-reliance on the model and safety-critical misclassification

## Artifacts

- Stakeholder map
- Scoring matrix (downloadable)
- As-is and to-be process diagram (downloadable)
- User stories and acceptance criteria
- KPI table

## Result

[Add your quantified estimate here, for example: "Pilot projected to reduce planner triage time from X to Y minutes per work order." Label estimates clearly as estimates.]

## What I'd do differently

[Add two or three honest lines, for example what you learned about agreeing weights early, or about data quality surprises.]
