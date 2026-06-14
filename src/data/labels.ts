import type { LabEvent, LabEventKind } from "./labEvents";
import type { Publication } from "./site";

export type LabelCategory =
  | "news-kind"
  | "publication-status"
  | "publication-output"
  | "publication-provenance"
  | "research-theme"
  | "visibility";

export type Label = {
  id: string;
  category: LabelCategory;
  text: string;
};

export type PublicationLabelSet = {
  status: Label;
  output: Label;
  provenance: Label;
  themes: Label[];
  visibility: Label[];
  primary: Label;
  secondary: Label[];
};

export const newsKindLabels: Record<LabEventKind, Label> = {
  peerReviewedArticle: { id: "peer-reviewed-article", category: "news-kind", text: "Peer-reviewed article" },
  preprint: { id: "preprint", category: "news-kind", text: "Preprint" },
  resource: { id: "resource", category: "news-kind", text: "Resource" },
  dataset: { id: "dataset", category: "news-kind", text: "Dataset" },
  software: { id: "software", category: "news-kind", text: "Software" },
  grant: { id: "grant", category: "news-kind", text: "Grant" },
  sponsoredResearch: { id: "sponsored-research", category: "news-kind", text: "Sponsored research" },
  personnel: { id: "personnel", category: "news-kind", text: "Personnel" },
  award: { id: "award", category: "news-kind", text: "Award" },
};

const publicationKinds = {
  peerReviewedArticle: { id: "peer-reviewed-article", category: "publication-status", text: "Peer-reviewed article" },
  preprint: { id: "preprint", category: "publication-status", text: "Pre-print article" },
  review: { id: "review", category: "publication-status", text: "Review" },
  bookChapter: { id: "book-chapter", category: "publication-status", text: "Book chapter" },
  editorialCommentary: { id: "editorial-commentary", category: "publication-status", text: "Editorials or commentary" },
} satisfies Record<string, Label>;

const publicationOutputs = {
  article: { id: "article", category: "publication-output", text: "Peer-reviewed article" },
} satisfies Record<string, Label>;

const publicationProvenance = {
  spl: { id: "spl", category: "publication-provenance", text: "SPL" },
  preSpl: { id: "pre-spl", category: "publication-provenance", text: "pre-SPL" },
} satisfies Record<string, Label>;

const researchThemes = {
  instrumentedCells: { id: "instrumented-cells", category: "research-theme", text: "Instrumented cells" },
  tissueSystems: { id: "tissue-systems", category: "research-theme", text: "Tissue systems" },
  compBio: { id: "comp-bio", category: "research-theme", text: "CompBio" },
  artScience: { id: "art-science", category: "research-theme", text: "Art & science" },
} satisfies Record<string, Label>;

const visibilityLabels = {
  recent: { id: "recent", category: "visibility", text: "Recent" },
  highlyCited: { id: "highly-cited", category: "visibility", text: "Highly cited" },
} satisfies Record<string, Label>;

const includesAny = (source: string, terms: string[]) => {
  const value = source.toLowerCase();
  return terms.some((term) => value.includes(term));
};

const uniqueLabels = (labels: Label[]) => {
  const seen = new Set<string>();
  return labels.filter((label) => {
    if (seen.has(label.id)) return false;
    seen.add(label.id);
    return true;
  });
};

export const getPublicationLabels = (paper: Publication): PublicationLabelSet => {
  const search = `${paper.title} ${paper.venue} ${paper.tag}`;
  const status = (() => {
    if (paper.tag === "Preprint" || paper.venue.toLowerCase().includes("biorxiv")) {
      return publicationKinds.preprint;
    }
    if (paper.tag === "Essay" || paper.tag === "Commentary") {
      return publicationKinds.editorialCommentary;
    }
    if (paper.tag === "Review") {
      return publicationKinds.review;
    }
    if (paper.tag === "Book chapter") {
      return publicationKinds.bookChapter;
    }
    return publicationKinds.peerReviewedArticle;
  })();

  const output = publicationOutputs.article;
  const provenance = paper.provenance === "pre-spl" ? publicationProvenance.preSpl : publicationProvenance.spl;
  const isQuantImaging = paper.tag === "Bioimage analysis"
    || paper.tag === "Modeling"
    || includesAny(search, [
      "microsplit",
      "musplit",
      "bioimage",
      "fucci",
      "fluorescence",
      "microscopy",
      "imaging",
      "deep learning",
      "model",
      "simulation",
      "isogeometric",
      "computational",
      "particle",
      "finite",
      "action potential",
    ]);

  const themes = uniqueLabels([
    ...(isQuantImaging
      ? [researchThemes.compBio]
      : []),
    ...(includesAny(search, [
      "hydrogel",
      "matrix",
      "biomaterial",
      "biomimetic",
      "biofabrication",
      "bioprint",
      "micro-comb",
      "photo-functionalization",
      "functionalization",
      "substrate",
      "mechanotransduction",
      "confinement",
      "tissue",
      "organ",
      "cardiac",
      "heart",
      "cardiomyocyte",
      "valve",
      "traction force",
    ])
      ? [researchThemes.tissueSystems]
      : []),
    ...(includesAny(search, ["stem", "hipsc", "fucci", "calipers", "reporter", "genome", "cell-cycle", "cell cycle", "lumenoid", "morphogenesis"])
      ? [researchThemes.instrumentedCells]
      : []),
    ...(includesAny(search, ["art and science", "art"])
      ? [researchThemes.artScience]
      : []),
  ]);

  const normalizedThemes = themes.length > 0 ? themes : [researchThemes.instrumentedCells];
  const visibility = uniqueLabels([
    ...(paper.tag === "Recent" || Number.parseInt(paper.year, 10) >= 2025 ? [visibilityLabels.recent] : []),
    ...(paper.tag === "Highly cited" ? [visibilityLabels.highlyCited] : []),
  ]);

  const primary = status;

  const secondary = uniqueLabels([
    ...(output.id === "article" ? [] : [output]),
    ...visibility,
  ]).filter((label) => label.id !== primary.id);

  return { status, output, provenance, themes: normalizedThemes, visibility, primary, secondary };
};

export const getLabEventLabel = (event: LabEvent) => newsKindLabels[event.kind];
