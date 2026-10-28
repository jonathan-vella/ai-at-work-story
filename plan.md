# Plan

## Purpose

Write a first-person account that gives technical peers practical ideas and gives a wider audience a credible view of how one architect changed his work.

Start with experience, not a list of AI products. Explain the problem, what Jonathan changed, what AI did, what he still decided, and what happened.

## 1. Establish the starting point

The initial interview establishes:

- Jonathan's role as a Microsoft Azure infrastructure architect.
- May 2025 as his personal starting point with GitHub agents.
- Diagrams, Azure cost estimates and Well-Architected reviews as early uses.
- Azure MCP in June-July 2025 and skills in late 2025 as later steps in his experience.
- A self-reported change from days or weeks to one day for an architecture-to-deployment-and-documentation workflow.
- Jonathan's continued responsibility for decisions.

These are personal recollections. Do not recast them as product launch dates or measured performance results.

## 2. Research the work

Review the approved public project references in the evidence table. Identify specific examples of authorship, evolution and reusable outputs.

Use Microsoft 365 material and the supplied role playbook only as research leads in the private conversation. Ask Jonathan about the publication status of specific material. Do not copy it into this repository.

For each candidate example, distinguish:

- What Jonathan personally built or changed.
- What AI contributed.
- What Jonathan reviewed, corrected or rejected.
- What exists as an artifact.
- What was actually used and what remains a proposal or preview.
- Who benefited, if that can be supported and approved for publication.

## 3. Complete the interview

Work through the questions in [interview.md](interview.md), one at a time.

Prioritise one detailed before-and-after example and one example of a genuinely new capability. Then establish what changed for other people.

Record proposed additions in the private conversation and ask for approval before committing them.

## 4. Draft the story

Develop [story.md](story.md) as the canonical narrative before deciding on other formats.

Keep the first-person voice. Use concrete actions and examples. Retain uncertainty where the evidence is incomplete.

Apply the Unslop skill to the outline, draft and revisions. Do not turn the story into product marketing or invent a neat progression that the evidence does not support.

## 5. Review the claims and publication scope

Check each factual claim against [evidence.md](evidence.md). Treat personal recollection, public artifact evidence and measured outcomes as different kinds of support.

Ask Jonathan to approve the exact proposed text, quotes, images, links and claims before adding them to the public repository. Follow [publishing.md](publishing.md).

Do not infer that a technical artifact proves adoption, successful delivery, time savings or customer impact.

## 6. Build and review the public site

The approved story uses a custom editorial Astro layout with static output for GitHub Pages. Keep `story.md` as the narrative source and the approved SVGs under `public/images/`.

Build locally with `npm run build`, then review the rendered page at desktop and mobile widths. Keep evidence notes and private research out of the site.

Before any release, obtain approval for the complete rendered site and destination. Staging approved material in this repository is not permission to publish it elsewhere.

## Completion criteria

The story is ready when it explains what changed, gives concrete examples, credits AI and human judgement accurately, separates delivered work from ambition, and has Jonathan's approval for every included item.
