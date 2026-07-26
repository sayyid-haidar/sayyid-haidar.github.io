# Sayyid Haidar — Portfolio & Knowledge Studio

A light, Markdown-driven personal site for selected software projects,
cheatsheets, and long-form writing.

## Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS
- React Router
- Markdown with GFM and syntax highlighting
- Vitest and Testing Library
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Quality gates

```bash
npm run lint
npm test
npm run build
```

`npm run build` validates every Markdown file before creating `dist/` and the
GitHub Pages `404.html` route fallback.

## Writing content

Add Markdown files to:

```text
content/
├── projects/
├── cheatsheets/
└── writing/
```

Filenames become URL slugs and must use lowercase kebab-case:

```text
postgresql-commands.md → /cheatsheets/postgresql-commands
```

New files remain private unless frontmatter explicitly contains:

```yaml
draft: false
```

See [content/README.md](content/README.md) and the draft templates in each
content folder.

## Shared frontmatter

```yaml
title: PostgreSQL commands I keep forgetting
description: A compact reference for inspecting and debugging PostgreSQL.
publishedAt: 2026-07-20
language: en
tags:
  - database
draft: false
```

Knowledge entries also require:

```yaml
topic: Database
icon: "🐘"
```

Projects also require:

```yaml
year: 2026
role: Backend and system design
stack:
  - Java
  - PostgreSQL
featured: true
order: 1
```

Run the validator for file-specific metadata errors:

```bash
npm run validate:content
```

## Deployment

The GitHub Actions workflow deploys a tagged version:

```bash
git tag v1.0.0
git push origin v1.0.0
```

It can also deploy a chosen tag through manual workflow dispatch. A normal push
to `main` does not deploy automatically.

## Content policy

- Publish only truthful project details.
- Do not invent metrics or outcomes.
- Generalize private client information while keeping engineering reasoning
  concrete.
- Draft templates never appear on the public site.

MIT License © Sayyid Haidar
