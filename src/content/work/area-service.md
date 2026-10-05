---
title: 'Pulling a shared domain out of four services'
summary: 'Shared reference data was owned by one service and read by several others. I wrote the RFC, founded a dedicated service and moved every consumer over without a big-bang cut-over.'
period: '2026'
order: 2
tags: ['domain design', 'CDC', 'migration']
draft: true
---

> **Draft.** Needs review before publishing.

## Context

A piece of reference data that changes rarely but is read constantly lived inside one busy service, and several other services depended on it at runtime.

## Decision

I analysed the dependencies and wrote an RFC proposing a dedicated service for that domain. The key constraint: no big-bang migration and a way back at every step.

## Migration in phases

1. **Active replica via CDC.** The new service started as a read model fed by change data capture.
2. **Read-only APIs first.** Consumers switched their reads one by one.
3. **Event-backed cache** for the hottest read paths.
4. **Write ownership behind config.** Writes move gradually, with a fallback to the old path on errors.

## Result

Every consumer now reads the domain from one place.

<!-- TODO: generic before/after dependency diagram -->
