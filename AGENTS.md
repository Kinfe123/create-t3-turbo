# Docs Maintenance Guide

Use this file as the handoff checklist for future edits to this documentation PR.

## Source Layout
- The docs source lives in `apps/docs`.
- `docs.json` is the Docs Cloud configuration for publishing, previews, and content roots.
- Keep every page grounded in README content, package metadata, source exports, package scripts, environment examples, or existing docs.

## Docs Routes
- /docs - create-t3-turbo
- /docs/quickstart - Quickstart
- /docs/installation - Installation
- /docs/configuration - Configuration
- /docs/configuration/database - Database
- /docs/configuration/environment - Environment Variables
- /docs/self-hosting - Self-Hosting
- /docs/self-hosting/overview - Self-Hosting Overview

## Editing Guidelines
- Prefer setup, usage, and troubleshooting notes over source inventories.
- Do not add commands, environment variables, routes, imports, or framework names unless they are present in the repository.
- If you add or rename a page, keep its frontmatter title and description accurate and update `apps/docs/docs.config.tsx`.
- Avoid internal analyzer phrasing; pages should read like product documentation, not a report about how they were produced.

## Verification
- Build the docs site with `cd apps/docs && pnpm install && pnpm build` before handing off a docs PR.
- Open `/docs` and at least one generated leaf page to confirm the sidebar and page content match the PR.
