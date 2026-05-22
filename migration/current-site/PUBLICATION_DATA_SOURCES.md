# Publication Data Sources

Goal: keep public highlights curated, while refreshing the rolling inventory from maintainable scholarly metadata sources.

## Recommended Pipeline

1. Keep a small curated highlights list in the repo.
   - Most recent
   - Most cited
   - Lab-priority papers/preprints

2. Generate the rolling inventory from official or stable metadata APIs.
   - PubMed / NCBI E-utilities for biomedical papers with PMIDs.
   - Crossref for DOI metadata and links.
   - OpenAlex for broader coverage, citation counts, author IDs, institutions, and non-PubMed records.
   - bioRxiv/medRxiv metadata for preprints when DOI records lag.

3. Treat Google Scholar as human-facing validation only.
   - Google Scholar does not provide an official public API.
   - Scraping Scholar is brittle and likely to hit bot/terms issues.
   - Third-party Scholar APIs exist, but they add vendor dependence and are not the best source of truth.

4. Treat Web of Science / Scopus as optional enrichment.
   - Useful for citation metrics if the University has API access.
   - Not low-friction for this MVP because access is paid/institutional.

## Site Shape

- src/data/site.ts currently holds both curated highlights and inventory data.
- Later, move publication inventory into generated JSON, for example:
  - src/data/publications.generated.json
  - src/data/publication-highlights.ts
- Add a script such as scripts/update-publications.mjs that:
  - queries PubMed by author/ORCID/DOI list,
  - enriches by DOI through Crossref/OpenAlex,
  - preserves manual highlight flags,
  - writes sorted publication inventory.

## Open Questions

- Confirm canonical author identifiers for Francesco/SPL members.
- Decide whether citation counts should come from OpenAlex, Web of Science, Google Scholar manually, or not be shown.
- Decide whether preprints should appear in the same inventory or a separate section.
