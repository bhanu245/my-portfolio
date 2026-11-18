---
title: "Ship-to-Shore AI Triage: turning crew chat messages into superintendent tickets"
summary: "A working two-screen prototype for ship managers: crew report problems the way they already do, with a quick message and photo from a phone, and AI turns each one into a prioritised ticket on the superintendent's dashboard and replies to the ship."
domain: "Maritime"
role: "Product Owner: problem discovery, competitor research, product decisions, prototype and go-to-market"
order: 1
status: "published"
skills: ["Problem discovery", "Competitor analysis", "AI product design", "Multimodal AI (text + photo)", "Prototyping", "B2B pricing hypotheses", "Ship management operations"]
downloads: []
---

> **About this project:** a self-initiated product concept with a working prototype on synthetic data. Vessel names are fictional. It is currently in discovery: I am interviewing superintendents and technical managers to test the problem before building further.
>
> **[Open the live demo](https://claude.ai/artifact/6TvuF4u4dzakACaNGni4mC)** (requires a Claude sign-in, so I run it live in meetings) · **[Book a 10-minute live walkthrough](/contact)**

## Watch the demo

<video controls preload="metadata" playsinline style="width:100%;border-radius:10px;border:1px solid #e5e7eb">
  <source src="/videos/ship-to-shore-ai-triage.mp4" type="video/mp4">
  Your browser cannot play this video.
</video>

A crew member sends a photo and a short message from the vessel. AI files a prioritised ticket on the superintendent's dashboard, replies to the ship, and the superintendent follows up from the same screen.

## The problem

Ship managers have planned maintenance systems, but much of the day-to-day troubleshooting between ship and shore happens elsewhere: messaging-app chats, voice notes and phone photos sent to a superintendent's personal phone.

Dualog reported in 2026 that 70% of the people it surveyed already use personal messaging apps, including WhatsApp, for work communication. The result is information that never reaches the PMS, superintendents re-typing and chasing details, and records that leave with people when they change roles.

At the same time, superintendents are stretched. Depending on the manager, one superintendent may look after four vessels or eight to ten, and workload is consistently named as a top stress factor in industry surveys.

## The idea

Meet the crew where they already are. No new app for the crew and no training: they keep sending a quick message and a photo. AI does the filing.

## What the prototype does

1. **Crew phone:** a messaging-style chat. The crew member types or voice-types a problem and attaches a photo.
2. **AI triage:** reads the message and photo together, and decides whether it is a new defect, an update to an open ticket, or just conversation.
3. **Structured ticket:** system, equipment, severity with a stated reason, action required, spares requested and where they are needed.
4. **Auto-reply to the ship:** confirms what was logged and the priority, without promising anything the superintendent has not decided.
5. **Superintendent dashboard:** live message feed, tickets by status and severity, reply straight to the vessel, one-click handover summary for leave periods.
6. **PMS export preview:** shows the structured record that would be pushed into the company's existing maintenance system, so nothing is typed twice.

## Key product decisions

| Decision | Chosen | Why |
|---|---|---|
| Crew channel | Keep the messaging habit; no new app | Adoption is the main reason ship software fails on board |
| WhatsApp design | One-to-one messages to a company number, not a bot inside vessel groups | Meta's Groups API caps groups at 8 participants and requires an Official Business Account; existing app groups cannot be connected |
| Relationship to the PMS | Feed it, never replace it | Managers already pay for their PMS; the value is capturing what never gets entered |
| Human control | AI files and suggests; the superintendent decides | Severity and next steps stay a human call |
| Demo build | Lookalike chat on a zero-cost stack | Proves the experience before investing in WhatsApp Business API integration |

## Competitor landscape

| Player | Focus | How this concept differs |
|---|---|---|
| Dualog Workspace | Secure ship–shore chat built for shipping, replacing generic apps | Works with the channel crews already use, and adds AI filing |
| Kaiko Systems (KAI) | Guided crew inspection app with AI photo analysis | No structured app for the crew; captures unplanned issues as they happen |
| PMS defect modules (PRIME Marine, AMOS and others) | Defect reporting inside the maintenance system | Sits in front of the PMS and feeds it |

Pricing for most of these products is not published, so pricing is one of the questions in my discovery interviews.

## Business hypotheses to test

- **Buyer:** technical directors at third-party ship managers.
- **Value:** more vessels per superintendent, fewer lost defects, and an auditable record under the ISM Code. This is measured in a pilot, not assumed.
- **Price:** per vessel per month, positioned between low-cost mobile apps and enterprise PMS suites.

## Discovery in progress

Before building further, I am running short interviews with superintendents and technical managers in Cyprus and Greece. Five questions:

1. Walk me through the last defect a ship reported to you.
2. What share of these arrive by messaging app or phone rather than the PMS?
3. What happens to those messages and photos afterwards?
4. Has scattered information ever caused a real problem?
5. What have you tried, and why didn't it stick?

## Result so far

- A working end-to-end prototype: phone message and photo in, AI-filed ticket out, two-way replies, handover summaries and a PMS export preview.
- A competitor map and a corrected WhatsApp architecture, based on Meta's published platform limits.
- An outreach and interview plan to validate the problem with real users.

## What I'd do differently

- **Validate before polishing.** I started from a strong hypothesis. The interviews will show whether messaging-app chaos is a top-three problem for superintendents or just background noise, and the product should follow that answer.
- **Check platform limits first.** My first architecture assumed a bot inside each vessel's WhatsApp group. Meta's documented limits ruled that out, and checking earlier would have saved a design round.

## Sources

- [Dualog: Workspace launch and survey figure](https://www.hellenicshippingnews.com/?p=1143120)
- [Voyager Worldwide: superintendent workload](https://voyagerww.com/news/think-seafarers-have-a-hard-life-try-being-a-superintendent)
- [Faststream: Superintendent Employment Survey](https://www.faststream.com/blog/2023/09/results-from-the-superintendent-employment-survey-2023-revealed)
- [Meta: WhatsApp Groups API documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/)
- [Dualog Workspace](https://dualog.com/introducing-workspace-by-dualog-where-ship-and-shore-work-as-one/)
- [Kaiko Systems KAI](https://www.hellenicshippingnews.com/?p=1055183)
- [PRIME Marine: defect reporting](https://primemarine.com/ship-maintenance-system-defect)
