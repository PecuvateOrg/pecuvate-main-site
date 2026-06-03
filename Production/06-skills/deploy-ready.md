# Skill: Deploy Ready

## Purpose

Checks the project against the deploy checklist and surfaces anything that would block a production deploy.

---

## Prompt

When this skill is invoked, do the following:

1. Read `Production/04-deployment/deploy-checklist.md`
2. Read all files in `Production/01-content/`, `Production/02-design/`, `Production/03-technical/`
3. For each checklist item, assess whether it is likely resolved based on the documentation
4. Flag any item that is:
   - Explicitly unresolved (`[ ]`)
   - Not mentioned anywhere in the docs
   - Potentially missing (e.g., no Medium URL found anywhere)

Format the output as:

---

**Deploy Readiness Report**

**Blocking issues** (must fix before deploy):
- Item description — why it's blocking

**Warnings** (should fix, not strictly blocking):
- Item description — what to check

**Clear** (confirmed or not applicable):
- Item description

**Verdict**: READY / NOT READY

---

If everything is clear, output: "No blocking issues found. Review warnings and proceed to deploy."
