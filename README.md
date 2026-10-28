# Practice the change: an infra architect's journey with AI

Jonathan Vella's personal account of how AI is changing his work as a Microsoft Azure infrastructure architect.

The audience is architects and technical peers, alongside a broader professional audience interested in an honest account of changing how they work.

This is a personal account, not official Microsoft role guidance or a statement on Microsoft's behalf.

## What this project is trying to explain

How AI helps me complete architecture work faster, take on work I could not previously fit in, and expand what I can contribute with colleagues, partners and customers.

The first part has a concrete personal example. The claims about new capabilities and value to others still need specific examples and evidence.

## Start here

| File | Purpose |
| --- | --- |
| [Plan](plan.md) | Research, interviews, drafting and review stages |
| [Story](story.md) | The approved first-person narrative |
| [Evidence](evidence.md) | Claim status, approved references and evidence gaps |
| [Interview](interview.md) | Questions to develop the story in Jonathan's own words |
| [Publication rules](publishing.md) | Approval boundaries for this public repository |

## Current state

The approved story is presented as a static Astro site for GitHub Pages. The narrative remains in `story.md`; approved SVGs are in `public/images/`.

## Local development

Requires Node.js 24 or later.

```sh
npm ci
npm run dev
```

Create the production site in `dist/` with `npm run build`. GitHub Actions deploys the `main` branch to GitHub Pages.

Later additions to the public story still require Jonathan's explicit publication approval.
