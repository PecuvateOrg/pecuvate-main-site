# 06-skills — Context

## What this folder is for

This folder contains custom Claude skills for the Pecuvate project. Each skill is a reusable prompt that helps navigate, audit, or check the state of the project without having to manually read through every file.

## How to use a skill

Say: "Run the [skill name] skill" or reference the file directly.

## Skills in this folder

- `content-gaps.md` — Surfaces all unresolved `[ ]` items across `01-content/`
- `deploy-ready.md` — Checks readiness against the `04-deployment/deploy-checklist.md`
- `section-status.md` — Gives a status snapshot of any one section (content, design, or technical)

## When to use these

- Before starting a new phase of work: run `content-gaps` to know what's blocking
- Before any deploy: run `deploy-ready` to catch missing items
- When picking up after a break: run `section-status` on the area you're returning to
