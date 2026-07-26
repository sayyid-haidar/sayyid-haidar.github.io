# Personal Portfolio Knowledge Studio Implementation Plan

**Date:** 2026-07-27

**Source spec:** `docs/superpowers/specs/2026-07-27-personal-portfolio-knowledge-studio-design.md`

**Goal:** Replace the employment-focused single-page portfolio with a light, Markdown-driven portfolio and knowledge studio while preserving React, Vite, Tailwind, and GitHub Pages.

## Working rules

- Complete tasks in order.
- Keep published content truthful; never invent project metrics or outcomes.
- Write or update automated tests before the implementation they cover.
- Run the task-specific verification before committing each task.
- Preserve user changes outside the files named by a task.
- Keep `.superpowers/` out of commits; it contains brainstorming artifacts.

## Target dependencies

Production:

```text
react-router-dom
react-markdown
remark-gfm
rehype-highlight
github-slugger
yaml
zod
```

Development:

```text
vitest
jsdom
@testing-library/react
@testing-library/jest-dom
@testing-library/user-event
tsx
```

Do not add a CMS, API client, state-management library, animation library, or head-management library.

## Task 1: Establish the test and repository baseline

**Files**

- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `.gitignore`
- Modify: `.github/workflows/deploy.yml`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/App.test.tsx`

**Steps**

1. Record the baseline by running:

   ```bash
   npm run lint
   npm run build
   ```

2. Install the approved production and development dependencies.
3. Add `.superpowers/` to `.gitignore`.
4. Add scripts:

   ```json
   {
     "test": "vitest run",
     "test:watch": "vitest",
     "validate:content": "tsx scripts/validate-content.ts"
   }
   ```

5. Configure Vitest for `jsdom` and load `src/test/setup.ts`.
6. Add one smoke test proving the current `App` renders before the redesign begins.
7. Update the deployment workflow to run `npm test`; remove `continue-on-error` from lint so all three gates are mandatory.

**Verification**

```bash
npm run lint
npm test
npm run build
```

**Commit**

```text
test: establish portfolio quality gates
```

## Task 2: Build and validate the Markdown content pipeline

**Files**

- Create: `src/content/types.ts`
- Create: `src/content/schema.ts`
- Create: `src/content/parse.ts`
- Create: `src/content/registry.ts`
- Create: `src/content/search.ts`
- Create: `src/content/schema.test.ts`
- Create: `src/content/parse.test.ts`
- Create: `src/content/search.test.ts`
- Create: `scripts/validate-content.ts`
- Create: `content/README.md`
- Create: `content/projects/example-project.md`
- Create: `content/cheatsheets/example-cheatsheet.md`
- Create: `content/writing/example-article.md`
- Modify: `package.json`

**Steps**

1. Define shared content types:
   - `ProjectContent`
   - `KnowledgeContent`
   - `ContentLanguage`
   - `ExternalLinks`
2. Define Zod schemas for shared, project, and knowledge frontmatter.
3. Implement a pure parser that:
   - splits YAML frontmatter from Markdown;
   - derives the slug from a lowercase kebab-case filename;
   - defaults omitted `draft` to `true`;
   - validates dates, language, links, and type-specific fields;
   - computes reading time;
   - returns file-specific error messages.
4. Implement a Vite registry using an eager raw `import.meta.glob` over the three content directories.
5. Reject duplicate slugs within a collection.
6. Expose typed functions:
   - `getPublishedProjects`
   - `getProjectBySlug`
   - `getPublishedCheatsheets`
   - `getCheatsheetBySlug`
   - `getPublishedWriting`
   - `getArticleBySlug`
7. Implement normalized search over title, description, and tags.
8. Add a Node validation script that reads every Markdown file before the Vite build. This is required because browser registry code alone cannot fail the build reliably.
9. Change the build script to run `validate:content` first.
10. Add documentation and three structurally complete templates with `draft: true`. The templates must not publish fabricated content.

**Tests**

- Valid content parses into the correct type.
- Missing required fields name the file and field.
- Invalid dates, languages, links, and filenames fail.
- Omitted `draft` becomes `true`.
- Duplicate slugs fail.
- Draft items are excluded.
- Featured projects sort by `order`, then date.
- Knowledge items sort by updated or published date.
- Search is case-insensitive and matches title, description, and tags.

**Verification**

```bash
npm run validate:content
npm test
npm run build
```

**Commit**

```text
feat: add validated markdown content pipeline
```

## Task 3: Introduce routing, the application shell, and Pages fallback

**Files**

- Modify: `src/main.tsx`
- Replace: `src/App.tsx`
- Create: `src/components/layout/AppShell.tsx`
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/layout/MobileNav.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Create: `src/pages/HomePage.tsx`
- Create: `src/pages/ProjectsPage.tsx`
- Create: `src/pages/ProjectPage.tsx`
- Create: `src/pages/ContentIndexPage.tsx`
- Create: `src/pages/ContentPage.tsx`
- Create: `src/pages/NotFoundPage.tsx`
- Create: `src/lib/usePageMetadata.ts`
- Create: `src/routes.test.tsx`
- Create: `scripts/create-spa-fallback.mjs`
- Modify: `package.json`

**Steps**

1. Add the approved route tree with `react-router-dom`.
2. Move persistent navigation and footer into `AppShell`.
3. Set navigation targets to:
   - Work → `/projects`
   - Cheatsheets → `/cheatsheets`
   - Writing → `/writing`
   - Contact → `/#contact`
4. Remove CV, About, and Experience navigation.
5. Add simple route shells that use the content registry and render not-found when a slug does not exist.
6. Add `usePageMetadata` to update title and description without a head-management dependency.
7. Create `scripts/create-spa-fallback.mjs` to copy `dist/index.html` to `dist/404.html` after the production build.
8. Append the fallback script to `npm run build`.

**Tests**

- Every approved route renders its page shell.
- Unknown paths render `NotFoundPage`.
- Unknown project, cheatsheet, and article slugs render `NotFoundPage`.
- Navigation uses the approved labels and targets.
- Page title and description change by route.

**Verification**

```bash
npm test
npm run build
test -f dist/404.html
```

**Commit**

```text
feat: add portfolio content routes
```

## Task 4: Replace the visual foundation with the light design system

**Files**

- Modify: `tailwind.config.js`
- Replace: `src/index.css`
- Modify: `src/components/layout/Container.tsx`
- Modify: `src/components/ui/Button.tsx`
- Modify: `src/components/ui/Section.tsx`
- Modify: `src/components/ui/ScrollReveal.tsx`
- Delete: `src/components/ui/ThemeToggle.tsx`
- Delete: `src/hooks/useTheme.ts`
- Modify: related tests

**Steps**

1. Define the approved white, warm off-white, near-black, gray, and blue palette.
2. Define consistent spacing, reading widths, borders, radii, and focus rings.
3. Remove theme state, theme persistence, theme controls, and dark-mode paths.
4. Keep motion CSS-only and low-amplitude.
5. Ensure every decorative animation becomes static under `prefers-reduced-motion`.
6. Preserve semantic components while removing styles that conflict with the approved direction.

**Tests**

- No theme toggle is rendered.
- Reduced-motion mode disables reveal movement.
- Buttons and links retain visible focus styles.

**Verification**

```bash
npm run lint
npm test
npm run build
```

**Commit**

```text
style: establish light editorial design system
```

## Task 5: Implement the homepage and Notion avatar hero

**Files**

- Replace: `src/pages/HomePage.tsx`
- Replace: `src/components/sections/HeroSection.tsx`
- Create: `src/components/sections/SelectedWorkSection.tsx`
- Create: `src/components/sections/LatestKnowledgeSection.tsx`
- Modify: `src/components/sections/ContactSection.tsx`
- Create: `src/components/ui/NotionAvatar.tsx`
- Create: `src/components/ui/KnowledgeRow.tsx`
- Modify: `src/components/ui/ProjectCard.tsx`
- Use: `public/assets/sayyid-notion-face.png`
- Add: optimized avatar derivative under `public/assets/`
- Modify: `src/data/hero.json` or replace it with a smaller typed configuration
- Modify: relevant tests

**Steps**

1. Use the owner-supplied 2400 × 2400 transparent PNG at `public/assets/sayyid-notion-face.png`.
2. Generate an optimized delivery derivative under `public/assets/` while preserving the supplied PNG as the source asset. Do not use the brainstorming screenshot.
3. Build the hero with:
   - approved label;
   - concise build-and-document statement;
   - primary Work link;
   - secondary Notes link;
   - floating avatar, breathing halo, and rotating orbit.
4. Implement Selected Work from published featured project Markdown.
5. Implement the latest three cheatsheets and articles.
6. Apply the specified empty-collection rules.
7. Simplify Contact to email plus footer social links.
8. Remove stats, current position, availability, profile photo, CV, and employment copy.

**Tests**

- Hero contains no prohibited employment or CV content.
- Featured project order is respected.
- Latest knowledge shows at most three items per collection.
- Empty collections hide or expand according to the spec.
- Avatar motion has a reduced-motion static state.

**Verification**

```bash
npm test
npm run build
```

Perform desktop and 390 px mobile visual checks.

**Commit**

```text
feat: build curated knowledge studio homepage
```

## Task 6: Implement searchable Cheatsheets and Writing indexes

**Files**

- Replace: `src/pages/ContentIndexPage.tsx`
- Create: `src/components/content/ContentIndex.tsx`
- Create: `src/components/content/ContentRow.tsx`
- Create: `src/components/content/ContentFilters.tsx`
- Create: `src/components/content/EmptyContentState.tsx`
- Create: `src/components/content/ContentIndex.test.tsx`

**Steps**

1. Reuse `ContentIndex` for both collections.
2. Add collection-specific icon, title, and description.
3. Add an accessible search field and topic filters.
4. Show title, topic, language, and effective date on desktop.
5. Reduce each mobile row to icon, title, and the most useful secondary property.
6. Announce filtered result counts to assistive technology.
7. Keep filter state local; no URL synchronization is needed for the first version.

**Tests**

- Cheatsheets and Writing receive separate source collections.
- Search and topic filters compose correctly.
- Clearing search restores all items.
- Language labels render correctly.
- Empty results and empty collections have distinct messages.
- Search has a label and live result count.

**Verification**

```bash
npm test
npm run build
```

Perform keyboard-only and mobile checks.

**Commit**

```text
feat: add searchable knowledge indexes
```

## Task 7: Implement the Markdown reader

**Files**

- Replace: `src/pages/ContentPage.tsx`
- Create: `src/components/content/MarkdownRenderer.tsx`
- Create: `src/components/content/CodeBlock.tsx`
- Create: `src/components/content/TableOfContents.tsx`
- Create: `src/components/content/ContentProperties.tsx`
- Create: `src/components/content/MarkdownRenderer.test.tsx`
- Modify: `src/index.css`

**Steps**

1. Render Markdown with GFM tables, task lists, and autolinks.
2. Keep raw HTML disabled.
3. Treat Markdown blockquotes as the Notion-inspired callout presentation.
4. Generate stable heading IDs with `github-slugger`.
5. Build a desktop table of contents from level-two and level-three headings.
6. Add code syntax highlighting, language label, copy control, and mobile overflow.
7. Render breadcrumbs, language, topic, date, and reading time.
8. Hide the table of contents on small screens without removing heading navigation.

**Tests**

- Headings receive unique stable IDs.
- Tables and task lists render.
- Raw HTML remains escaped or omitted.
- External links receive safe attributes.
- Code copy writes the exact code text.
- Duplicate heading names produce distinct IDs.
- Table of contents matches rendered headings.

**Verification**

```bash
npm test
npm run build
```

Perform a narrow-screen code overflow check.

**Commit**

```text
feat: add notion-inspired markdown reader
```

## Task 8: Implement project listings and case studies

**Files**

- Replace: `src/pages/ProjectsPage.tsx`
- Replace: `src/pages/ProjectPage.tsx`
- Replace: `src/components/sections/ProjectsSection.tsx`
- Modify: `src/components/ui/ProjectCard.tsx`
- Create: `src/components/projects/ProjectHero.tsx`
- Create: `src/components/projects/ProjectProperties.tsx`
- Create: `src/components/projects/ProjectVisual.tsx`
- Create: `src/components/projects/ProjectOutcome.tsx`
- Create: `src/components/projects/ProjectNavigation.tsx`
- Create: `src/components/projects/ProjectPage.test.tsx`

**Steps**

1. Build the complete published-project index.
2. Build the editorial case-study shell:
   - summary;
   - properties;
   - optional project visual;
   - Context;
   - Approach and trade-offs;
   - Outcome and reflection;
   - next project.
3. Render the Markdown body through the shared safe Markdown renderer.
4. Use a neutral visual when `cover` is absent.
5. Display only supplied links and outcome content.
6. Never synthesize metrics from frontmatter or prose.

**Tests**

- Draft projects do not render.
- Missing covers use the neutral fallback.
- Optional links are omitted cleanly.
- Project body sections render.
- Next-project navigation follows published order and wraps at the end.

**Verification**

```bash
npm test
npm run build
```

Perform desktop and mobile case-study checks using a draft fixture.

**Commit**

```text
feat: add editorial project case studies
```

## Task 9: Remove legacy portfolio paths and update documentation

**Files**

- Delete: `src/components/sections/AboutSection.tsx`
- Delete: `src/components/sections/ExperienceSection.tsx`
- Delete: `src/components/ui/ExperienceCard.tsx`
- Delete: `src/components/ui/SkillCard.tsx`
- Delete: `src/data/experiences.json`
- Delete: `src/data/what-i-do.json`
- Delete: matching `public/data` files
- Remove if unused: `public/assets/sayyid-haidar-profile.jpg`
- Remove if unused: `public/assets/Sayyid-Haidar-Resume.pdf`
- Modify: `src/types/index.ts`
- Modify: `README.md`
- Modify: `docs/ANALYSIS_AND_IMPROVEMENTS.md`
- Modify: `.github/workflows/deploy.yml`

**Steps**

1. Confirm each legacy file has no remaining import before deletion.
2. Remove experience, skill, photo, resume, and obsolete JSON data.
3. Remove unused types, skeletons, and dependencies discovered by lint.
4. Rewrite README content-authoring instructions for Markdown.
5. Document frontmatter, drafts, local preview, validation errors, build, and tag-based release.
6. Update the historical improvement document so it no longer claims removed features are current.
7. Confirm the workflow enforces lint, tests, validation, and build.

**Verification**

```bash
rg -n "Experience|Years Exp|Download CV|profileImage|what-i-do|experiences.json" src public README.md
npm run lint
npm test
npm run build
```

Review every remaining search match and keep only intentional documentation or tests.

**Commit**

```text
refactor: remove employment-focused portfolio content
```

## Task 10: Final accessibility, responsive, and deployment verification

**Files**

- Modify only files required by verified failures

**Steps**

1. Run the complete local gate:

   ```bash
   npm run lint
   npm test
   npm run build
   ```

2. Serve `dist` through the production preview.
3. Verify at desktop and 390 × 844 mobile:
   - homepage;
   - projects index;
   - project case study;
   - cheatsheets index;
   - cheatsheet reader;
   - writing index;
   - article reader;
   - not-found page.
4. Verify keyboard navigation and visible focus.
5. Verify reduced-motion behavior.
6. Verify direct-route refresh through the Pages fallback.
7. Verify no dark-mode toggle, employment content, real profile photo, CV action, broken image, horizontal page overflow, or fabricated public item remains.
8. Inspect the final diff for unrelated changes.

**Release**

Do not create or push a release tag without a separate explicit instruction from the user. The existing workflow deploys only version tags or manual dispatches.

**Commit**

```text
fix: complete portfolio redesign verification
```

## Content handoff

The application can be completed with draft templates, but the Work section stays hidden until the owner adds at least one truthful project file with `draft: false`. Before publishing real content:

1. Replace draft example titles and prose with real project information.
2. Include only metrics that can be stated publicly.
3. Add optimized project images only when they improve the case study.
4. Change `draft` to `false`.
5. Run `npm run validate:content` and review the page locally.

## Completion criteria

Implementation is complete when all acceptance criteria in the source spec pass, every task verification succeeds, and the final worktree contains no unintended files or edits.
