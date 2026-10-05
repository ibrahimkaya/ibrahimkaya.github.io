---
title: 'Kafka consumers that survive bad events: retries, dead-letter topics and replay'
summary: 'Non-blocking retries, dead-letter topics and replay tooling that operations could use without engineers.'
period: '2023 – 2025'
order: 1
tags: ['Kafka', 'reliability', 'Spring Boot']
draft: true
---

> **Draft.** Needs review before publishing.

## Context

A delivery domain reacts to order state changes published on Kafka. If a consumer stops, or quietly skips a message, work that should happen downstream simply never happens.

## The problem

- A single bad event could block a partition, or be dropped after a few blocking retries.
- Retrying in place held up every healthy event behind the broken one.
- Recovering a failed event was manual work for an engineer.

## What we built

1. **Non-blocking retries.** Failed events move to retry topics with increasing delays, so the main topic keeps flowing.
2. **Dead-letter topics (DLT).** Events that exhaust their retries land in a DLT and are persisted with the failure reason.
3. **Self-service replay.** Operations can list and replay failed events without an engineer.
4. **Guardrails.** No retries for errors that can never succeed, and replays that stay idempotent.

The same pattern later carried a move from synchronous calls to event-driven flows (Avro, feature-flagged rollout).

## Result

Major incidents caused by failed events dropped to near zero.

<!-- TODO: simple diagram (main topic → retry topics → DLT → replay) -->
