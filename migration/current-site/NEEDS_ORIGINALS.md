# SPL Website Migration Gaps

This file tracks scraped assets/content that should be replaced by originals or manually reviewed.


Likely manual follow-up:
- Original high-resolution SPL logo and brand kit colors.
- Original laboratory/team images currently compressed by Wix.
- Any embedded documents or forms not exposed as public static files.

## MVP Review Notes

- Scrape succeeded for the six public pages: Home, Research, Team, Publications, Creed, Contact.
- Scrape downloaded 29 public image assets from Wix.
- The current images are adequate for layout and staging, but many are Wix-resized/cropped and should be replaced before final launch.
- Team entries contain duplicates and ordering artifacts from the current Wix page; the MVP deduplicates obvious repeats but needs Francesco/lab review.
- Publications are currently a selected hand-curated list from the current site. Before launch, migrate to a DOI/BibTeX-driven source of truth.
- Contact form is represented as a mail link in the MVP. Add Netlify Forms or another backend during staging if an actual form is desired.
- Brand red was sampled from the current logo at approximately `#a82038`.
- Giulia Ballio's placeholder image has been replaced with the user-provided portrait at `public/assets/team/giulia-balio.jpg`.

## Screenshot Checks

- Desktop MVP screenshot: `migration/current-site/mvp-desktop-2.png`
- Mobile MVP screenshot: `migration/current-site/mvp-mobile-4.png`
