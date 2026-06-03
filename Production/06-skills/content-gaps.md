# Skill: Content Gaps

## Purpose

Surfaces all unresolved decisions across the content files. Run this before starting any design or build work to know exactly what's missing.

---

## Prompt

When this skill is invoked, do the following:

1. Read all files in `Production/01-content/`
2. Find every line marked `- [ ]` (unresolved decision)
3. Group them by file (i.e., by page section)
4. Output a clear list showing:
   - Which section has gaps
   - What specifically is unresolved
   - A count of total gaps remaining

Format the output as:

---

**Content Gaps Report**

**[Section Name]** (X gaps)
- [ ] Item 1
- [ ] Item 2

**[Section Name]** (X gaps)
- [ ] Item 1

**Total unresolved: X**

---

If all items are resolved, output: "All content decisions are approved. Ready to design."
