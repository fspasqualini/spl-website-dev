# SPL Website Agent Notes

This repository is the local development workspace for the Synthetic Physiology Lab website rebuild.

## Goal

Build a modern static Astro site for SPL while preserving the lab's recognizable identity:

- SPL logo
- black, graphite, light grey, and SPL red brand palette
- research-lab credibility over generic startup/AI website style
- structured content for team, projects, publications, research areas, creed, and recruiting/contact

## Design Guardrails

- Avoid generic AI website patterns: vague gradients, decorative blobs, oversized marketing cards, and empty slogans.
- Prefer dense but readable scientific information architecture.
- Use actual SPL microscopy/lab imagery from public assets or originals.
- Keep pages direct: Home, Research, Team, Publications, Creed, Contact.
- Use screenshots across desktop and mobile before calling a design iteration good.

## Migration Rules

- Current public Wix scrape lives in `migration/current-site/`.
- Scraped images live in `public/assets/scraped/`.
- Track missing or low-quality source material in `migration/current-site/NEEDS_ORIGINALS.md`.
- Do not change DNS, Netlify settings, or GitHub remotes unless explicitly requested.
- Keep Wix live until Francesco explicitly authorizes cutover.

## GitHub/Deployment Plan

- Start locally in `spl-website-dev`.
- Connect to a personal GitHub repo first when requested.
- Port/transfer to the SPL GitHub organization before DNS changes.
- Use Netlify free staging/preview when Francesco has the account ready.
