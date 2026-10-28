# Practice the change: an infra architect's journey with AI

Jonathan Vella's personal account of how AI changed his work as a Microsoft Azure infrastructure architect, and how other infrastructure architects can start with one repeated task.

Read it at <https://jonathan-vella.github.io/ai-at-work-story/>.

This is a personal account, not official Microsoft guidance or a statement on Microsoft's behalf.

## What is in this repository

| File | Purpose |
| --- | --- |
| [story.mdx](story.mdx) | The story. Every reader-facing word lives here. |
| [evidence.md](evidence.md) | Approved claims, their limitations and public references |
| [captions.md](captions.md) | Captions and alt text for the images |
| [publishing.md](publishing.md) | Approval rules for this public repository |
| [PRODUCT.md](PRODUCT.md) | Who the page is for and what it should do |
| `src/` | Astro page, components and styles |
| `public/images/` | Photos, diagrams and the share card |

## How the site works

It is a static [Astro](https://astro.build) site with MDX, deployed to GitHub Pages by GitHub Actions on every push to `main`.

`story.mdx` holds the text. The components in `src/components/` only receive that text as props or children, so changing a word means editing `story.mdx`. The page shell, share tags and components are supplied by `src/pages/index.astro`.

Mark unfinished text with a `[Your words]` or `[Draft line]` marker. The production build fails while any marker remains, so a draft cannot be deployed by accident.

## Local development

Requires Node.js 24 or later.

```sh
npm ci
npm run dev
```

To preview on a phone on the same network, run `npm run dev -- --host` and open `http://<your-computer-address>:4321/ai-at-work-story/`.

Create the production site in `dist/` with `npm run build`.

## Publishing rules

New public material needs Jonathan's approval of the exact wording, and each claim is recorded in `evidence.md` with its limitations. See [publishing.md](publishing.md). Private research stays in the git-ignored `.private-research/` folder.
