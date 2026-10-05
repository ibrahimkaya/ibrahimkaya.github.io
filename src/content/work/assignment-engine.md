---
title: 'Courier assignment at quick-commerce scale'
summary: 'Event-driven assignment, capacity, route history and the concurrency problems you only meet in production.'
period: '2022 – 2025'
order: 3
tags: ['concurrency', 'event-driven', 'Java']
draft: true
---

> **Draft outline.** To be written together.

- Context: what assignment does, scale (millions of orders a month, thousands of couriers)
- Integrating an optimiser into manual assignment
- Capacity calculation; persistent route history
- Concurrency: manual vs. automatic assignment, and how locking fixed it
- Rolling out event-based assignment everywhere
- An RFC we decided **not** to implement, and why
- Result: TODO
