export type LabEventKind =
  | "peerReviewedArticle"
  | "preprint"
  | "resource"
  | "dataset"
  | "software"
  | "grant"
  | "sponsoredResearch"
  | "personnel"
  | "award";

export type FunderLogoKey =
  | "erc"
  | "chipsJu"
  | "mimit"
  | "mur"
  | "regioneLombardia"
  | "eu"
  | "pnrr";

export type LabEvent = {
  date: string;
  sortDate: string;
  kind: LabEventKind;
  title: string;
  text: string;
  href?: string;
  homepage?: boolean;
  funding?: {
    subtitle: string;
    funder: string;
    amount: string;
    logoKeys: FunderLogoKey[];
    startDate: string;
    startDateEvidence: string;
  };
};

export const labEventKindLabels: Record<LabEventKind, string> = {
  peerReviewedArticle: "Peer-reviewed article",
  preprint: "Preprint",
  resource: "Resource",
  dataset: "Dataset",
  software: "Software",
  grant: "Grant",
  sponsoredResearch: "Sponsored research",
  personnel: "Personnel",
  award: "Award",
};

export const labEvents: LabEvent[] = [
  {
    date: "2026",
    sortDate: "2026-12-31",
    kind: "peerReviewedArticle",
    title: "MicroSplit published in Nature Methods",
    text:
      "Semantic unmixing of fluorescent microscopy data, extending what can be extracted from multiplexed biological images.",
    href: "https://pubmed.ncbi.nlm.nih.gov/42086917/",
    homepage: true,
  },
  {
    date: "2026",
    sortDate: "2026-12-30",
    kind: "peerReviewedArticle",
    title: "Micro-comb 3D printing published in Biofabrication",
    text:
      "A rapid fabrication method for tissue-guiding substrates using micro-embossed nozzles.",
    href: "https://pubmed.ncbi.nlm.nih.gov/41985513/",
    homepage: true,
  },
  {
    date: "2026",
    sortDate: "2026-12-29",
    kind: "peerReviewedArticle",
    title: "Deep-learning FUCCI analysis published in npj Imaging",
    text:
      "Bioimage analysis for multiplexed FUCCI acquisitions, connecting live-cell reporters to quantitative cell-state trajectories.",
    href: "https://www.nature.com/articles/s44303-026-00159-6",
    homepage: true,
  },
  {
    date: "1 May 2024",
    sortDate: "2024-05-01",
    kind: "grant",
    title: "UNLOOC",
    text: "Unlocking the data content of Organ-on-Chips through EC Chips Joint Undertaking and Italian Ministry support.",
    funding: {
      subtitle: "Unlocking the data content of Organ-on-Chips",
      funder: "EC Chips Joint Undertaking and Italian Ministry of Enterprises",
      amount: "1M EUR",
      logoKeys: ["chipsJu", "mimit"],
      startDate: "2024-05-01",
      startDateEvidence: "CORDIS project 101140192 lists start date 1 May 2024.",
    },
  },
  {
    date: "1 May 2024",
    sortDate: "2024-05-01",
    kind: "grant",
    title: "hiPSCmore",
    text:
      "ERC Proof of Concept support for instrumented human stem cells in high-throughput screening for drug discovery and regenerative medicine.",
    funding: {
      subtitle: "Instrumented human stem cells to see more during high-throughput screening",
      funder: "ERC Proof of Concept",
      amount: "150k EUR",
      logoKeys: ["erc"],
      startDate: "2024-05-01",
      startDateEvidence: "CORDIS project 101158039 lists start date 1 May 2024.",
    },
  },
  {
    date: "2023",
    sortDate: "2023-01-01",
    kind: "grant",
    title: "RESET",
    text: "Resolving infections by modulating senescent macrophages, supported by MUR PRIN 2022.",
    funding: {
      subtitle: "REsolving infections by modulating SEnescenT macrophages",
      funder: "MUR PRIN 2022",
      amount: "125k EUR",
      logoKeys: ["mur"],
      startDate: "2023-01-01",
      startDateEvidence: "Estimated from SPL source range 2023-2025.",
    },
  },
  {
    date: "2022",
    sortDate: "2022-01-01",
    kind: "grant",
    title: "LigHTS",
    text: "All-optical engineering of human tissue models for ultra high-throughput drug screening.",
    funding: {
      subtitle: "All-Optical Engineering of Human Tissue Models for Ultra High-Throughput Drug Screening",
      funder: "MUR FARE",
      amount: "400k EUR",
      logoKeys: ["mur"],
      startDate: "2022-01-01",
      startDateEvidence: "Estimated from SPL source range 2022-2027.",
    },
  },
  {
    date: "2022",
    sortDate: "2022-01-01",
    kind: "grant",
    title: "CARDIO-SCREEN",
    text:
      "Engineered in-vitro and in-silico models of cardiometabolic diseases to screen DNA/RNA-based therapeutics through EU/MUR PNRR support.",
    funding: {
      subtitle: "Engineered in-vitro and in-silico models of cardiometabolic diseases to screen DNA/RNA-based therapeutics",
      funder: "EU/MUR PNRR",
      amount: "250k EUR",
      logoKeys: ["eu", "mur", "pnrr"],
      startDate: "2022-01-01",
      startDateEvidence: "Estimated from SPL source range 2022-2025.",
    },
  },
  {
    date: "2021",
    sortDate: "2021-01-01",
    kind: "grant",
    title: "highLight",
    text: "A competence center for bio/nano-sustainability supported by Regione Lombardia.",
    funding: {
      subtitle: "A competence center for bio/nano-sustainability",
      funder: "Regione Lombardia",
      amount: "250k EUR",
      logoKeys: ["regioneLombardia"],
      startDate: "2021-01-01",
      startDateEvidence: "Estimated from SPL source range 2021-2023.",
    },
  },
  {
    date: "2020",
    sortDate: "2020-01-01",
    kind: "grant",
    title: "SYNBIO.ECM",
    text:
      "Synthetic Matrix Biology: designer matrices to program healthy and diseased myocardial morphogenesis.",
    funding: {
      subtitle: "Synthetic Matrix Biology: Designer matrices to program healthy and diseased myocardial morphogenesis",
      funder: "ERC Starting Grant",
      amount: "2M EUR",
      logoKeys: ["erc"],
      startDate: "2020-01-01",
      startDateEvidence: "Estimated from SPL source range 2020-2025/2026.",
    },
  },
];

export const sortedLabEvents = [...labEvents].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

export const homepageLabEvents = sortedLabEvents.filter((event) => event.homepage).slice(0, 4);

export const fundedLabEvents = sortedLabEvents.filter((event) => event.funding);
