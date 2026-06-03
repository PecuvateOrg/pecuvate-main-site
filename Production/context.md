## What this workspace is for

This is the production workspace for building and deploying the Pecuvate landing page. It contains all planning, content, design, technical, and deployment documentation needed to take the site from concept to live on Netlify.

Always start with `claude.md` at the project root for identity and rules, then `context-guide.md` here for the master structure of the page.

## What the process looks like (first I do this, then I do that)

1. **Content** — Fill in all section files in `01-content/` before touching design or code
2. **Design** — Resolve design system decisions in `02-design/` based on content
3. **Technical** — Confirm integration and requirements decisions in `03-technical/`
4. **Assets** — Gather and log all required assets in `05-assets/`
5. **Build** — Write the code (HTML/CSS/JS or chosen framework)
6. **Deploy** — Follow the checklist in `04-deployment/` to push to Netlify

## What files are in here and how they are organized

- `context-guide.md` — Master structure document for the landing page (source of truth)
- `context.md` — This file. Workspace orientation.
- `01-content/` — One file per page section. Documents approved copy and content gaps.
- `02-design/` — Design system, color, typography, visual direction.
- `03-technical/` — Medium integration, performance, accessibility requirements.
- `04-deployment/` — Netlify config, environment variables, deploy checklist.
- `05-assets/` — Tracking for all required assets (logo, icons, imagery).
- `06-skills/` — Custom Claude skills for navigating and checking this project.

## What skills or tools to use in this workspace

- Use files in `06-skills/` to run project-specific checks (content gaps, deploy readiness, section status)
- Refer to `context-guide.md` for any structural or design decisions not yet resolved
- Refer to `04-deployment/netlify-config.md` before making any build or output folder decisions