# Personal Portfolio Knowledge Studio Design

**Date:** 2026-07-27

**Status:** Approved design, awaiting written-spec review

**Project:** `sayyid-haidar.github.io`

## 1. Summary

Redesign the existing React portfolio into a light, minimal personal site focused on three public outputs:

1. selected portfolio projects;
2. practical cheatsheets;
3. long-form writing.

The site will not show a real profile photo, work-experience timeline, skills cards, career statistics, current position, or CV download. The hero will use the Notion Faces portrait selected by the owner, surrounded by subtle motion. Cheatsheets and Writing will use a shared, Notion-inspired reading system. Project pages will use a more editorial, Apple-inspired case-study layout.

The selected product direction is **Curated Knowledge Studio**: portfolio work remains the primary signal while cheatsheets and writing establish a public knowledge base.

## 2. Goals

- Present selected software projects through internal case studies instead of an employment history.
- Make cheatsheets useful as both public references and the owner's personal technical notes.
- Support long-form articles separately from cheatsheets.
- Make new content publishable by adding Markdown files to the repository.
- Use a calm, light visual system with generous whitespace and restrained motion.
- Preserve the existing React, Vite, Tailwind, and GitHub Pages foundation.
- Support English interface copy while allowing either Indonesian or English per content item.

## 3. Non-goals

- No work-experience section or employment timeline.
- No real profile photograph.
- No About, What I Do, skills-card, career-statistics, current-position, availability, or CV-download block.
- No dark theme or theme toggle.
- No CMS, database, authentication, comments, reactions, newsletter, or content editor.
- No full bilingual interface or automatic content translation.
- No fabricated project descriptions, outcomes, or metrics.

## 4. Information Architecture

The primary navigation is:

- **Work** → `/projects`
- **Cheatsheets** → `/cheatsheets`
- **Writing** → `/writing`
- **Contact** → `/#contact`

Routes:

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/projects` | All published projects |
| `/projects/:slug` | Project case study |
| `/cheatsheets` | Searchable cheatsheet index |
| `/cheatsheets/:slug` | Cheatsheet reader |
| `/writing` | Searchable writing index |
| `/writing/:slug` | Article reader |
| `*` | Not-found page |

The homepage order is fixed:

1. Hero
2. Selected Work
3. Latest Cheatsheets
4. Latest Writing
5. Contact
6. Footer

## 5. Visual Direction

### 5.1 Global style

- Light-only interface.
- White and warm off-white surfaces.
- Near-black primary text, muted gray secondary text, and one restrained blue accent.
- Generous vertical spacing and narrow reading widths.
- Soft borders and shadows; no decorative gradients behind content.
- Interface typography uses a clean system sans-serif stack.
- Long-form body copy may use a restrained serif stack to improve reading rhythm.

The visual language may be inspired by Apple and Notion, but it will not reproduce either product's exact layout, branding, or proprietary assets beyond the owner-created Notion Faces portrait.

### 5.2 Motion

The Notion Faces portrait itself remains unchanged. Motion is applied to its presentation:

- a slow vertical float;
- a subtle breathing background halo;
- a thin rotating orbit with one blue point.

The approved portrait is the portrait encoded by
`https://faces.notion.com/customize?face=s1e22y3b14n29m61h181`.
The owner has supplied its portrait-only download at
`public/assets/sayyid-notion-face.png`. Implementation will optimize that local
source asset for delivery and will not use a screenshot of the Notion Faces
interface.

Scroll reveals and hover feedback remain short and low-amplitude. When `prefers-reduced-motion: reduce` is active, all decorative motion is disabled and content remains fully visible.

### 5.3 Responsive behavior

- Desktop hero uses a text-and-avatar split layout.
- Mobile stacks hero copy above the avatar.
- Project grids collapse to one column.
- Content database rows reduce to title, icon, and the most useful property.
- Article table of contents is hidden on small screens.
- Code blocks scroll horizontally without widening the page.

## 6. Homepage

### 6.1 Hero

The hero contains:

- the label `Backend engineer · builder · writer`;
- a concise statement about building useful systems and documenting lessons;
- one primary link to selected work;
- one secondary link to notes;
- the owner-selected Notion Faces portrait.

It does not contain stats, employment information, availability, a CV button, or social-link clutter.

### 6.2 Selected Work

- Show published projects with `featured: true`.
- Sort by explicit project order, then publication date.
- Use one visually dominant project and smaller supporting projects where space permits.
- Each card links to an internal case study.
- GitHub, demo, or documentation links appear inside the case study rather than competing with the card click.
- If there are no published projects, hide the section rather than show fabricated examples.

### 6.3 Latest knowledge

- Show the three newest published cheatsheets.
- Show the three newest published articles.
- Display title, topic, language, reading time, and date.
- Each group links to its complete index.
- If one collection is empty, show the populated collection at full width.
- If both collections are empty, hide the knowledge section.

### 6.4 Contact

The contact section contains:

- one short invitation;
- the existing email address;
- GitHub and LinkedIn links in the footer.

There is no contact form.

## 7. Project Case Studies

Project pages use an editorial layout distinct from the Notion-inspired knowledge pages.

Page structure:

1. Project label and title
2. One-paragraph summary
3. Role, stack, year, and external links
4. Project visual or neutral visual fallback
5. Context and constraints
6. Approach and important trade-offs
7. Outcome and reflection
8. Link to the next published project

Real public metrics may be used. When metrics are private or unavailable, the author must describe observable outcomes without inventing numbers. Sensitive company or client details may be generalized, but technical reasoning should remain concrete.

## 8. Cheatsheets and Writing

Cheatsheets and Writing are separate collections but share the same components and visual system.

### 8.1 Index pages

Each index provides:

- collection icon, title, and description;
- client-side text search;
- topic filters;
- rows containing icon, title, topic, language, and updated or published date.

Search matches normalized title, description, and tags. Results update without a network request.

### 8.2 Reader pages

Reader pages provide:

- breadcrumbs;
- emoji or simple page icon;
- title and description;
- topic, language, date, and computed reading time;
- Markdown content;
- an automatically generated table of contents on desktop;
- styled headings, lists, tables, callouts, links, and code blocks;
- a copy button on code blocks.

Raw HTML in Markdown is disabled.

## 9. Content Model

Markdown files live outside `src`:

```text
content/
├── projects/
├── cheatsheets/
└── writing/
```

The URL slug is derived from the Markdown filename. Filenames must be unique within their collection and use lowercase kebab-case.

### 9.1 Shared frontmatter

All content types require:

```yaml
title: PostgreSQL commands I keep forgetting
description: A compact reference for inspecting and debugging PostgreSQL.
publishedAt: 2026-07-20
language: en
tags:
  - database
draft: false
```

Rules:

- `language` is `en` or `id`.
- `publishedAt` uses `YYYY-MM-DD`.
- `updatedAt` is optional and uses the same format.
- `draft` defaults to `true` when omitted so unfinished content cannot publish accidentally.
- Reading time is computed from the Markdown body.

### 9.2 Project frontmatter

Projects additionally require:

```yaml
year: 2026
role: Backend and system design
stack:
  - Java
  - PostgreSQL
featured: true
order: 1
```

Projects may include:

```yaml
cover: /assets/projects/project-name.webp
links:
  github: https://github.com/example/project
  demo: https://example.com
  docs: https://example.com/docs
```

The project Markdown body supplies the Context, Approach, and Outcome narrative. Implemented templates may demonstrate the expected structure, but all example content remains `draft: true` and never appears on the published site.

### 9.3 Knowledge frontmatter

Cheatsheets and Writing additionally require:

```yaml
topic: Database
icon: "🐘"
```

## 10. Application Architecture

The existing stack remains:

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub Pages

The implementation adds a routing layer and a Markdown content pipeline. It does not add a backend service.

Primary units:

| Unit | Responsibility |
|---|---|
| `AppShell` | Shared navigation, footer, page container, and route outlet |
| `HomePage` | Composes approved homepage sections |
| `ProjectsPage` | Lists all published projects |
| `ProjectPage` | Renders one project case study |
| `ContentIndex` | Shared searchable index for Cheatsheets and Writing |
| `ContentPage` | Shared reader shell for Cheatsheets and Writing |
| `MarkdownRenderer` | Safe Markdown rendering and custom block presentation |
| `NotionAvatarHero` | Hero avatar, halo, orbit, and reduced-motion behavior |
| `content` module | Discovers, parses, validates, sorts, filters, and searches content |

Each page depends on the content module's typed output rather than parsing Markdown directly.

## 11. Data Flow

```text
Markdown files
  → Vite content discovery
  → frontmatter and body parsing
  → schema validation
  → slug uniqueness validation
  → draft filtering
  → typed content registry
  → sorting, filtering, and search
  → route-level page components
  → Markdown renderer or case-study renderer
```

Content is bundled at build time. Browsing, filtering, and searching require no runtime API calls.

## 12. Routing and GitHub Pages

Use clean history-based routes. The production build creates a GitHub Pages fallback document from the application entry so direct navigation and browser refresh can boot the React router. The wildcard application route then renders a deliberate not-found page for unknown slugs.

The existing tag-based deployment remains in place. The workflow must run the full quality gate before upload and must not treat lint failures as optional.

## 13. Error Handling

- Invalid required metadata, invalid dates, unsupported language values, malformed links, and duplicate slugs fail the build.
- Validation errors name the offending file and field.
- Unknown content slugs render the application not-found page.
- Empty collections render a calm empty state on their index.
- Empty homepage collections hide their section according to the rules in Section 6.
- Missing optional project covers use a neutral visual fallback.
- Image components expose meaningful alt text or an empty alt attribute for decorative images.
- External links use safe new-tab attributes.
- Raw HTML from Markdown is never rendered.

## 14. Accessibility and Performance

- Semantic landmarks and headings follow document order.
- Keyboard users can reach navigation, filters, links, and code-copy controls.
- Focus indicators remain visible.
- Search has a programmatic label and result count announcement.
- Color contrast meets WCAG AA for body text and controls.
- Motion follows `prefers-reduced-motion`.
- The Notion avatar is stored locally and optimized.
- Non-critical routes and Markdown rendering code are lazy-loaded.
- Content lists avoid loading full-size project images.

## 15. Testing

Add automated tests for:

- frontmatter parsing and schema validation;
- slug generation and duplicate detection;
- draft filtering, featured ordering, category filtering, language labels, and search;
- route rendering for homepage, index, detail, and not-found pages;
- Markdown output for headings, links, tables, code blocks, and disabled raw HTML;
- reduced-motion behavior and empty-state behavior.

The release quality gate is:

```text
lint → test → production build
```

Before release, perform responsive browser checks at desktop and mobile widths, keyboard-only navigation, code-block overflow, broken-image fallback, direct-route refresh, and the reduced-motion variant.

## 16. Migration

Remove or replace:

- `ExperienceSection` and its data flow;
- `AboutSection` and What I Do cards;
- hero photo, stats, current position, availability, and employment-oriented copy;
- CV actions;
- dark-mode controls and dark-only styling paths;
- navigation entries for About and Experience.

Preserve:

- current contact email;
- GitHub and LinkedIn URLs;
- reusable layout primitives where they fit the approved design;
- GitHub Pages tag-based release workflow.

Existing `projects.json` is empty and is not a migration source. Project Markdown templates will be draft-only until the owner supplies real project narratives.

## 17. Acceptance Criteria

- No real photo, employment experience, career stats, skills cards, current position, availability badge, or CV button appears.
- The selected Notion Faces portrait appears in the hero with restrained motion and a static reduced-motion state.
- Homepage order matches Section 4.
- All published projects open internal case-study routes.
- Cheatsheets and Writing are distinct searchable Markdown collections.
- Each knowledge item displays its language.
- Markdown code blocks work on mobile and provide copy controls.
- Invalid content stops the build with a file-specific error.
- Direct GitHub Pages routes boot the application and unknown slugs show the custom not-found page.
- Lint, automated tests, and the production build pass before deployment.
