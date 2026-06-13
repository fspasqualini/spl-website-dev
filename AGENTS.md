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

## Required Web Designer Skills

Before substantial design, layout, copy-flow, CSS, or visual-system work in this
repo, load the workspace-local Web Designer skills from `skills/`:

- `skills/frontend-design-guidelines/SKILL.md` for creative direction, audience fit,
  and avoiding generic AI/startup aesthetics.
- `skills/web-design/SKILL.md` for production CSS, responsive layout, spacing,
  typography, and accessibility implementation patterns.
- `skills/ui-design/SKILL.md` when changing navigation, components, interaction
  states, cards, visual hierarchy, or information-dense interfaces.

For generated illustrations or raster assets, use the image-generation workflow
and keep prompts anchored to SPL identity rather than generic AI imagery.

This Web Designer workspace is independent from the Dross workspace. Do not load
or depend on deleted legacy Dross files, Dross GBrain state, or Dross/GStack
runtime authority unless Francesco explicitly routes that request through Dross.

## Preview Link Contract

When replying in Telegram after a site check, build, preview restart, design
change, layout change, or content change, always include a bare, standalone
clickable preview URL line. Do not report only server status.

In Telegram, the first served preview URL must be the Tailscale MagicDNS URL.
Francesco may be reading Telegram on another device, so a loopback URL is not a
sufficient click-ready link. Never send `127.0.0.1` as the only preview link
unless Francesco explicitly asks for a Mac-local URL.

Primary click-ready preview link for Francesco:

http://drosss-mac-mini-2.tail76b099.ts.net:4321/spl-website/

Local fallback on the Mac mini:

http://127.0.0.1:4321/spl-website/

The working Astro site path is `/spl-website/`. Do not present
`http://127.0.0.1:4321/` or `/` as the working preview URL; root returns 404
because `astro.config.mjs` sets `base: '/spl-website'`.

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
