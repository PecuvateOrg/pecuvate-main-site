# Skill: Section Status

## Purpose

Gives a quick status snapshot of any one section of the project. Useful when picking up after a break or handing off context.

---

## Prompt

When this skill is invoked, the user will specify a section name. Valid sections:

- `hero`
- `what-pecuvate-does`
- `ecosystem`
- `thinking-and-insights`
- `connect`
- `footer`
- `design`
- `technical`
- `deployment`
- `assets`

Do the following:

1. Identify which folder and file(s) correspond to the named section
2. Read the relevant file(s)
3. Output a status summary showing:
   - What has been decided (`[approved]` or filled in)
   - What is still pending (`[ ]`)
   - Any notes or blockers called out in the file
   - A recommended next action

Format the output as:

---

**Section Status: [Section Name]**

**Decided:**
- Item 1
- Item 2

**Pending:**
- [ ] Item 1
- [ ] Item 2

**Notes / Blockers:**
- Any flagged issues

**Recommended next action:** [one sentence]

---

If the section is fully resolved: "This section is complete. No action needed."
