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

## WebDesigner Governance

This repository is the website working directory for Dross wearing the
WebDesigner hat. The `webdesign` Telegram account routes into main Dross as a
dedicated WebDesigner session, not as a separate OpenClaw agent runtime. This is
not a separate privacy boundary from Dross-owned runtime auth or host context,
so do not claim that it is isolated from Dross.

Durable WebDesigner behavior is owned by `/Users/dross/Super Dross`, not by
local persona, skill, memory, bootstrap, runtime, or OpenClaw state copied into
this website repo. Keep this repo limited to SPL website code, assets, content,
and website-specific instructions.

Do not load or depend on deleted legacy pre-migration workspace files. Do not use
Gmail, Google Drive, Calendar, Slack, Linear, GBrain/GStack maintenance, or Dross
private memory for website work unless Francesco explicitly asks for non-website
Dross context or provides curated context for this website task.

For generated illustrations or raster assets, use the image-generation workflow
and keep prompts anchored to SPL identity rather than generic AI imagery.

## Preview Link Contract

When replying in Telegram after a site check, build, preview restart, design
change, layout change, or content change, always include a bare, standalone
clickable preview URL line. Do not report only server status.

The GitHub Pages custom domain is configured and verified as
`syntheticphysiologylab.com`. For deployed builds, send the public custom-domain
URL first:

https://syntheticphysiologylab.com/

Do not use this project Pages URL as the primary link after the custom domain is
attached:

https://fspasqualini.github.io/spl-website-dev/

For work-in-progress local previews, the first served preview URL must be the
Tailscale MagicDNS URL. Francesco may be reading Telegram on another device, so
a loopback URL is not a sufficient click-ready link. Never send `127.0.0.1` as
the only preview link unless Francesco explicitly asks for a Mac-local URL.

Primary click-ready preview link for Francesco uses the actual Astro dev-server
port shown at startup. The default is:

http://drosss-mac-mini-2.tail76b099.ts.net:4321/spl-website/

Local fallback on the Mac mini uses the same port:

http://127.0.0.1:4321/spl-website/

The working Astro site path is `/spl-website/`. Do not present
`http://127.0.0.1:<port>/` or `/` as the working preview URL; root returns 404
because `astro.config.mjs` sets `base: '/spl-website'`.

## Migration Rules

- Current public Wix scrape lives in `migration/current-site/`.
- Scraped images live in `public/assets/scraped/`.
- Track missing or low-quality source material in `migration/current-site/NEEDS_ORIGINALS.md`.
- Do not change DNS, GitHub Pages settings, or GitHub remotes unless explicitly requested.

## GitHub/Deployment Plan

- Start locally in `spl-website-dev`.
- Connect to a personal GitHub repo first when requested.
- Port/transfer to the SPL GitHub organization before DNS changes.
- Use Netlify free staging/preview when Francesco has the account ready.

## Deployment Guardrail

The live site is served by GitHub Pages from `main` at
`https://syntheticphysiologylab.com/`. A push to `main` can publish changes
online. Treat ordinary requests to "make changes", "try this", "edit the site",
or "show me a version" as local preview work only. Do not push, publish, deploy,
or trigger GitHub Pages unless Francesco explicitly says to publish, deploy, push
to main, or make the change live.

After local changes, build/check them and send the Tailscale preview URL first.
