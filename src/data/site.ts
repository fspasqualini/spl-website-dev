import { fundedLabEvents } from "./labEvents";
import type { FunderLogoKey } from "./labEvents";

export const nav = [
  { label: "Home", href: "/" },
  { label: "Creed", href: "/creed/" },
  { label: "Team", href: "/team/" },
  { label: "Research", href: "/research/" },
  { label: "News", href: "/news/" },
  { label: "Publications", href: "/publications/" },
  { label: "Contact", href: "/contact/" },
];

export const withBase = (path: string) => {
  if (path.startsWith("http:") || path.startsWith("https:") || path.startsWith("mailto:")) {
    return path;
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
};

export const brand = {
  name: "Synthetic Physiology Lab",
  shortName: "SPL",
  red: "#a82038",
  address: "Via Ferrata 9, 27100 Pavia (PV), Italy",
  logo: "/assets/scraped/005-LOGO_SPL.png",
};

const funderLogos: Record<FunderLogoKey, { src: string; alt: string }> = {
  erc: { src: "/assets/funders/erc-logo.jpg", alt: "European Research Council" },
  chipsJu: { src: "/assets/funders/chips-ju.svg", alt: "Chips Joint Undertaking" },
  mimit: {
    src: "/assets/funders/mimit.svg",
    alt: "Italian Ministry of Enterprises and Made in Italy",
  },
  mur: { src: "/assets/funders/mur.svg", alt: "Italian Ministry of University and Research" },
  regioneLombardia: { src: "/assets/funders/regione-lombardia.svg", alt: "Regione Lombardia" },
  eu: { src: "/assets/funders/eu.svg", alt: "European Union" },
  pnrr: { src: "/assets/funders/pnrr.svg", alt: "Italia Domani PNRR" },
};

export const fundedProjects = fundedLabEvents.map((event) => ({
  title: event.title,
  subtitle: event.funding!.subtitle,
  funder: event.funding!.funder,
  startDate: event.funding!.startDate,
  startDateEvidence: event.funding!.startDateEvidence,
  amount: event.funding!.amount,
  logos: event.funding!.logoKeys.map((logoKey) => funderLogos[logoKey]),
}));

export const labVisionSections = [
  {
    title: "Instrumented cell work",
    text:
      "We build cells that report on themselves. Fluorescent sensors, genetic reporters, lineage markers, and cell-cycle tools turn living human cells into readable systems, so state, function, and history can be measured while biology unfolds.",
  },
  {
    title: "Tissue models at scale",
    text:
      "Physiology is not a single-cell property. We engineer matrices, confinement, geometry, organoid systems, and high-throughput tissue platforms to test how cells coordinate across space, mechanics, and time.",
  },
  {
    title: "Computational data fusion",
    text:
      "Complex experiments only become useful when their signals can be integrated. We combine bioimage analysis, mechanistic modeling, and computational inference to connect morphology, dynamics, reporters, and physical context into coherent biological readouts.",
  },
  {
    title: "Art and science",
    text:
      "Scientific imagination is visual, material, and human. We use illustration, design, and visual culture as part of the research process: to make hypotheses concrete, expose hidden structure, and communicate complex systems without flattening them.",
  },
];

export const researchAreas = [
  {
    title: "Instrumented cells",
    label: "Stem cells and reporters",
    slug: "stem-cells-genome-editing",
    href: "/stem-cells-and-genome-editing/",
    text: "Genome-edited human iPSC systems with fluorescent reporters, live-cell phenotyping, and 2D/3D differentiation methods for watching cell state, lineage, and function emerge over time.",
    image: "/assets/scraped/012-_edited_edited_edited.png",
    vision:
      "This theme builds human stem-cell systems that report their own biology while experiments unfold. Engineered hiPSC lines, fluorescent cell-state sensors, cardiac and developmental differentiation protocols, and live imaging make it possible to follow how cells choose fates, organize tissues, and respond to perturbation in 2D and 3D contexts.",
    deepDive:
      "Instrumented cells build the inside-out measurement layer for SPL: engineered hiPSCs, genetic reporters, lineage and cell-cycle sensors, and 2D/3D differentiation systems that make morphogenesis, cell state, and function measurable over time.",
    showcase: {
      type: "image",
      src: "/assets/scraped/012-_edited_edited_edited.png",
      label: "Engineered reporter cells as experimental infrastructure",
      text: "Cell-cycle-aware imaging makes stem-cell phenotypes readable over time, so genome editing and live-cell assays become quantitative tools rather than isolated images.",
    },
    carouselEyebrow: "Platforms and capabilities",
    carouselTitle: "Cells built to report state",
    featureCards: [
      {
        title: "Reporter cell lines",
        text:
          "Genome-edited and lentiviral reporter systems make cell cycle, lineage state, and functional activity visible during experiments instead of only at endpoint.",
        type: "image",
        src: "/assets/scraped/012-_edited_edited_edited.png",
        href: "/stem-cells-and-genome-editing/",
      },
      {
        title: "Cardiac and developmental models",
        text:
          "Human cardiac and early-developmental systems let the lab watch structure, function, and cell state emerge together under controlled conditions.",
        type: "image",
        src: "/assets/scraped/028-cardioid_3d_nuclei-1-_edited.jpg",
        href: "/stem-cells-and-genome-editing/",
      },
      {
        title: "Live phenotyping workflows",
        text:
          "Longitudinal imaging connects perturbations to cell behavior over time, allowing the lab to ask how engineered cells build, repair, or reorganize tissue-like systems.",
        type: "image",
        src: "https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs44303-026-00159-6/MediaObjects/44303_2026_159_Fig3_HTML.png",
        href: "https://www.nature.com/articles/s44303-026-00159-6/figures/3",
      },
    ],
    paperTitles: [
      "MicroSplit: semantic unmixing of fluorescent microscopy data",
      "CALIPERS: Cell cycle-aware live imaging for phenotyping experiments and regeneration studies",
      "A vertically integrated system for tracking and assessing cell-cycle-aware phenotypes under confinement",
      "muSplit: image decomposition for fluorescence microscopy",
      "A tissue-engineered scale model of the heart ventricle",
      "Laminar ventricular myocardium on a microelectrode array-based chip",
      "Angiotensin II Induced Cardiac Dysfunction on a Chip",
      "Matrix elasticity regulates the optimal cardiac myocyte shape for contractility",
      "Translational cardiac stem cell therapy: advancing from first-generation to next-generation cell types",
      "Coupling primary and stem cell-derived cardiomyocytes in an in vitro model of cardiac cell therapy",
      "Structural phenotyping of stem cell-derived cardiomyocytes",
      "Modeling the mitochondrial cardiomyopathy of Barth syndrome with induced pluripotent stem cell and heart-on-chip technologies",
      "Quality metrics for stem cell-derived cardiac myocytes",
    ],
    featuredPapers: [
      {
        title: "CALIPERS: Cell cycle-aware live imaging for phenotyping experiments and regeneration studies",
        blurb:
          "CALIPERS links live imaging with cell-cycle-aware phenotyping, so regeneration and perturbation experiments can be interpreted through where cells are in time, not only where they are in space.",
        media: [
          {
            type: "image",
            src: "/assets/scraped/012-_edited_edited_edited.png",
            label: "Cell-cycle-aware imaging",
            text: "Live-cell phenotyping built around interpretable cell-cycle state.",
            href: "https://www.biorxiv.org/content/10.1101/2024.12.19.629259v1",
          },
        ],
      },
    ],
    resources: [
      {
        label: "Addgene pLV-EF1A-FUCCIplex",
        href: "https://www.addgene.org/240160/",
        text: "Direct plasmid page for the EF1A FUCCIplex lentiviral construct.",
      },
      {
        label: "Addgene pLV-CMV-FUCCIplex",
        href: "https://www.addgene.org/240221/",
        text: "Direct plasmid page for the CMV FUCCIplex lentiviral construct.",
      },
      {
        label: "Addgene pLV-cTnT-FUCCIplex",
        href: "https://www.addgene.org/240216/",
        text: "Direct plasmid page for cardiac-lineage FUCCIplex expression.",
      },
      {
        label: "Addgene R26-CAG-BST-FUCCIplex",
        href: "https://www.addgene.org/240241/",
        text: "Direct plasmid page for the Rosa26/CAG FUCCIplex knock-in construct.",
      },
    ],
  },
  {
    title: "Tissue systems",
    label: "Biofab and biomaterials",
    slug: "all-optical-biomaterials",
    href: "/all/",
    text: "Soft hydrogels, engineered matrices, confinement systems, and optical or robotic fabrication methods for building tissue environments whose mechanics, geometry, and molecular cues can be controlled.",
    image: "/assets/scraped/013-all-optical_edited.jpg",
    vision:
      "This theme develops materials and fabrication methods that make the physical context of cells experimentally programmable. Soft hydrogels, matrix chemistry, confinement, micropatterned cues, and light-based or robotic fabrication let the lab build tissue systems with defined mechanics, geometry, and scale.",
    deepDive:
      "Tissue systems turn materials, geometry, matrix chemistry, confinement, and light into practical engineering tools for biology. The goal is not fabrication as an isolated method; it is building controllable physiological systems that stay compatible with imaging, perturbation, and scale.",
    showcase: {
      type: "video",
      src: "https://static-content.springer.com/esm/art%3A10.1038%2Fs44172-025-00575-3/MediaObjects/44172_2025_575_MOESM4_ESM.mp4",
      label: "HYDRA tissue-system fabrication",
      text: "Robotic hydrogel fabrication shows why biomaterials have to meet experimental logistics: physiologically relevant soft substrates can live inside high-throughput imaging workflows instead of forcing a choice between relevance and scale.",
    },
    carouselEyebrow: "Platforms and capabilities",
    carouselTitle: "Biofabricated systems for physiology",
    featureCards: [
      {
        title: "Plate-scale hydrogel fabrication",
        text:
          "Robotic workflows fabricate compliant culture substrates directly in screening plates, keeping soft-material biology compatible with automated imaging.",
        type: "image",
        src: "https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs44172-025-00575-3/MediaObjects/44172_2025_575_Fig1_HTML.png",
        href: "https://www.nature.com/articles/s44172-025-00575-3/figures/1",
      },
      {
        title: "Light-defined matrix patterning",
        text:
          "Optical fabrication lets the lab tune surface cues, material geometry, and matrix presentation without leaving standard high-throughput formats.",
        type: "image",
        src: "/assets/scraped/013-all-optical_edited.jpg",
        href: "https://www.biorxiv.org/content/10.1101/2025.10.23.683892v1",
      },
      {
        title: "Material validation workflows",
        text:
          "Mechanical, optical, and cell-compatibility readouts turn each new substrate into an engineered experimental environment rather than a decorative surface.",
        type: "video",
        src: "https://static-content.springer.com/esm/art%3A10.1038%2Fs44172-025-00575-3/MediaObjects/44172_2025_575_MOESM4_ESM.mp4",
        href: "https://www.nature.com/articles/s44172-025-00575-3#Sec38",
      },
    ],
    paperTitles: [
      "Micro-comb 3D printing: rapid fabrication of tissue-guiding substrates using micro-embossed nozzles",
      "A vertically integrated system for tracking and assessing cell-cycle-aware phenotypes under confinement",
      "LiGHTS: Massively Parallel Biomimetic Photo-Functionalization for Imaging-Based Ultra-High-Throughput Screening",
      "Fabrication of cell culture hydrogels by robotic liquid handling automation for high-throughput drug testing",
      "Molecular Dynamics Simulation of Structural Assembly and Hydration of Hyaluronic Acid in Salt Aqueous Buffer",
      "Organotypic and Microphysiological Human Tissue Models for Drug Discovery and Development: Current State-of-the-Art and Future Perspectives",
      "Emerging strategies in 3D printed tissue models for in vitro biomedical research",
      "A Pulsatile Flow System to Engineer Aneurysm and Atherosclerosis Mimetic Extracellular Matrix",
      "A tissue-engineered scale model of the heart ventricle",
      "Traction force microscopy of engineered cardiac tissues",
      "JetValve: Rapid manufacturing of biohybrid scaffolds for biomimetic heart valve replacement",
      "Instrumented cardiac microphysiological devices via multimaterial three-dimensional printing",
      "Organ Chips: Quality Assurance Systems in Regenerative Medicine",
      "Mechanotransduction and Metabolism in Cardiomyocyte Microdomains",
      "A human in vitro model of Duchenne muscular dystrophy muscle formation and contractility",
      "Heart Valve Replacements with Regenerative Capacity",
      "Phototactic guidance of a tissue-engineered soft-robotic ray",
      "Laminar ventricular myocardium on a microelectrode array-based chip",
      "Angiotensin II Induced Cardiac Dysfunction on a Chip",
      "Matrix elasticity regulates the optimal cardiac myocyte shape for contractility",
      "The contractile strength of vascular smooth muscle myocytes is shape dependent",
    ],
    featuredPapers: [
      {
        title: "LiGHTS: Massively Parallel Biomimetic Photo-Functionalization for Imaging-Based Ultra-High-Throughput Screening",
        blurb:
          "LiGHTS uses light to pattern biomimetic cues across standard screening formats, turning matrix design into something that can scale with imaging-based discovery.",
        media: [
          {
            type: "image",
            src: "/assets/scraped/013-all-optical_edited.jpg",
            label: "All-optical matrix patterning",
            text: "Photo-functionalized biomaterials for high-throughput imaging.",
            href: "https://www.biorxiv.org/content/10.1101/2025.10.23.683892v1",
          },
        ],
      },
      {
        title: "A vertically integrated system for tracking and assessing cell-cycle-aware phenotypes under confinement",
        blurb:
          "VISTA belongs with the tissue-systems theme because it links confinement, engineered context, imaging, and analysis into one platform for asking how physical context shapes cell behavior.",
        media: [
          {
            type: "image",
            src: "/assets/scraped/012-_edited_edited_edited.png",
            label: "VISTA workflow",
            text: "Integrated confinement, tracking, and phenotype readout.",
            href: "https://pubmed.ncbi.nlm.nih.gov/41799556/",
          },
        ],
      },
      {
        title: "Fabrication of cell culture hydrogels by robotic liquid handling automation for high-throughput drug testing",
        blurb:
          "HYDRA fabricates thin planar hydrogels inside standard multiwell plates, preserving soft-substrate biology while staying compatible with automated imaging and drug testing.",
        media: [
          {
            type: "image",
            src: "https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs44172-025-00575-3/MediaObjects/44172_2025_575_Fig1_HTML.png",
            label: "HYDRA method",
            text: "Robotic fabrication of planar hydrogel films for HTS-compatible culture.",
            href: "https://www.nature.com/articles/s44172-025-00575-3/figures/1",
          },
          {
            type: "image",
            src: "https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs44172-025-00575-3/MediaObjects/44172_2025_575_Fig4_HTML.png",
            label: "HYDRA drug testing",
            text: "Long-term imaging drug response on compliant hydrogel substrates.",
            href: "https://www.nature.com/articles/s44172-025-00575-3/figures/4",
          },
          {
            type: "video",
            src: "https://static-content.springer.com/esm/art%3A10.1038%2Fs44172-025-00575-3/MediaObjects/44172_2025_575_MOESM4_ESM.mp4",
            label: "HYDRA supplementary movie",
            text: "Article supplementary video from Communications Engineering.",
            href: "https://www.nature.com/articles/s44172-025-00575-3#Sec38",
          },
        ],
      },
    ],
    resources: [
      {
        label: "HYDRA GitHub",
        href: "https://github.com/Synthetic-Physiology-Lab/hydra-hts-hydrogel-analysis",
        text: "FIJI macros and Python code for the high-throughput hydrogel analysis.",
      },
      {
        label: "SPL GitHub organization",
        href: "https://github.com/Synthetic-Physiology-Lab",
        text: "Public code and analysis repositories released by the lab.",
      },
    ],
  },
  {
    title: "CompBio",
    label: "Modeling and bioimage analysis",
    slug: "computational-modeling-data-analysis",
    href: "/computational-modeling-and-data-analysis/",
    text: "Discrete particle models, continuum and isogeometric analysis, and bioimage-analysis pipelines that connect microscopy, mechanics, and experimentally derived parameters.",
    image: "/assets/scraped/014-cardioid_3d_nuclei-1-_edited.jpg",
    vision:
      "CompBio joins modeling and bioimage analysis because both turn complex experiments into quantitative objects. Discrete particle models probe cell-ECM and nuclear mechanics, continuum and isogeometric models capture tissue-scale physiology, and deep-learning image workflows extract trajectories from reporter-rich microscopy.",
    deepDive:
      "This work connects measurement and mechanism: particle models for cell and nuclear mechanics, image-analysis pipelines for multiplexed microscopy, deep-learning tools for fluorescent reporters, and continuum models for cardiac electromechanics.",
    showcase: {
      type: "image",
      src: "https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs44303-026-00159-6/MediaObjects/44303_2026_159_Fig3_HTML.png",
      label: "From microscopy to quantitative state trajectories",
      text: "Computational analysis turns rich live-imaging data into tracks, classifications, and models that can be compared across cells, perturbations, and physical environments.",
    },
    carouselEyebrow: "Platforms and capabilities",
    carouselTitle: "Images, models, and mechanism",
    featureCards: [
      {
        title: "Bioimage analysis pipelines",
        text:
          "Segmentation, tracking, denoising, classification, and quality control convert microscopy into quantitative biological state variables.",
        type: "image",
        src: "https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs44303-026-00159-6/MediaObjects/44303_2026_159_Fig3_HTML.png",
        href: "https://www.nature.com/articles/s44303-026-00159-6/figures/3",
      },
      {
        title: "Particle and tissue mechanics",
        text:
          "Coarse-grained models connect cellular mechanics, nuclear deformation, and tissue-level organization with experimentally measurable parameters.",
        type: "image",
        src: "https://journals.plos.org/ploscompbiol/article/figure/image?size=large&id=10.1371/journal.pcbi.1014113.g001",
        href: "https://journals.plos.org/ploscompbiol/article/figure?id=10.1371/journal.pcbi.1014113.g001",
      },
      {
        title: "Multiscale physiological modeling",
        text:
          "From molecular dynamics to continuum and isogeometric analysis, the lab picks the model scale that can actually explain the experiment.",
        type: "image",
        src: "/assets/scraped/014-cardioid_3d_nuclei-1-_edited.jpg",
        href: "/computational-modeling-and-data-analysis/",
      },
    ],
    paperTitles: [
      "MicroSplit: semantic unmixing of fluorescent microscopy data",
      "Bioimage analysis for multiplexed FUCCI acquisitions powered by deep learning",
      "BIOPOINT: A particle-based model for probing nuclear mechanics and cell-ECM interactions via experimentally derived parameters",
      "An Open-Science Computational Model of Organelle Acidification to Integrate Putative Mechanisms of Synaptic Vesicle Acidification and Filling",
      "Molecular Dynamics Simulation of Structural Assembly and Hydration of Hyaluronic Acid in Salt Aqueous Buffer",
      "An efficient active-stress electromechanical isogeometric shell model for muscular thin-film simulations",
      "SEM2: Introducing mechanics in cell and tissue modeling using coarse-grained homogeneous particle dynamics",
      "muSplit: image decomposition for fluorescence microscopy",
      "Current progress toward isogeometric modeling of the heart biophysics",
      "Isogeometric mixed collocation of nearly-incompressible electromechanics in finite deformations for cardiac muscle simulations",
      "Immersed isogeometric analysis based on a hybrid collocation/finite cell method",
      "An efficient isogeometric collocation approach to cardiac electrophysiology",
      "A novel computational model of the human ventricular action potential and Ca transient",
      "Theoretical investigation of action potential duration dependence on extracellular Ca2+ in human cardiomyocytes",
    ],
    featuredPapers: [
      {
        title: "BIOPOINT: A particle-based model for probing nuclear mechanics and cell-ECM interactions via experimentally derived parameters",
        blurb:
          "BIOPOINT builds a particle-based bridge between measured nuclear/cell behavior and mechanical hypotheses, letting experiments parameterize simulations rather than sit next to them.",
        media: [
          {
            type: "image",
            src: "https://journals.plos.org/ploscompbiol/article/figure/image?size=large&id=10.1371/journal.pcbi.1014113.g001",
            label: "BIOPOINT model overview",
            text: "Particle-based modeling framework for cell-ECM and nuclear mechanics.",
            href: "https://journals.plos.org/ploscompbiol/article/figure?id=10.1371/journal.pcbi.1014113.g001",
          },
        ],
      },
      {
        title: "SEM2: Introducing mechanics in cell and tissue modeling using coarse-grained homogeneous particle dynamics",
        blurb:
          "SEM2 extends subcellular-element modeling with mechanics, making it easier to represent tissue-scale behavior through coarse-grained particle dynamics.",
        media: [
          {
            type: "image",
            src: "/assets/scraped/014-cardioid_3d_nuclei-1-_edited.jpg",
            label: "Particle mechanics",
            text: "Coarse-grained mechanics for cell and tissue modeling.",
            href: "https://pubmed.ncbi.nlm.nih.gov/38075209/",
          },
        ],
      },
      {
        title: "Bioimage analysis for multiplexed FUCCI acquisitions powered by deep learning",
        blurb:
          "The DeepFUCCI analysis stack is also a computational project: segmentation, classification, tracking, and temporal alignment for reporter-rich microscopy.",
        media: [
          {
            type: "image",
            src: "https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs44303-026-00159-6/MediaObjects/44303_2026_159_Fig3_HTML.png",
            label: "Tracking analysis",
            text: "Tracking workflow and temporal FUCCI analysis.",
            href: "https://www.nature.com/articles/s44303-026-00159-6/figures/3",
          },
        ],
      },
    ],
    resources: [
      {
        label: "BIOPOINT GitHub",
        href: "https://github.com/Synthetic-Physiology-Lab/biopoint",
        text: "SPL repository for the BIOPOINT particle-based modeling workflow.",
      },
      {
        label: "SEM2 GitHub",
        href: "https://github.com/Synthetic-Physiology-Lab/sem2",
        text: "Subcellular Element Modeling and Mechanics code repository.",
      },
      {
        label: "DeepFUCCI GitHub",
        href: "https://github.com/Synthetic-Physiology-Lab/DeepFUCCI",
        text: "Deep-learning analysis code for multiplexed FUCCI microscopy.",
      },
      {
        label: "Organelle acidification model",
        href: "https://github.com/Synthetic-Physiology-Lab/Organelle-acidification-ODE-model",
        text: "Open-science ODE model repository for vesicle/organelle acidification.",
      },
    ],
  },
  {
    title: "Art & science",
    label: "Art/Science",
    slug: "art-and-science",
    href: "/art-and-science/",
    text: "A home for the visual, material, and imaginative side of scientific work, treated as part of method rather than decoration.",
    image: "/assets/scraped/015-1000165473.png",
    vision:
      "Science does not exist apart from scientists. Scientists are human: analytical, visual, emotional, playful, and creative. If the culture of science tells people to amputate the artistic side of themselves, it loses good scientists and weaker hypotheses are the result.",
    deepDive:
      "For SPL, art and science are two ways of fighting with reality. Artistic work can live in imagination alone; scientific work must bring imagination into contact with nature, then test whether the world agrees. That loop of visualization, hypothesis, experiment, and revision is not separate from creativity. It is one of its most disciplined forms.",
    showcase: {
      type: "image",
      src: "/assets/scraped/015-1000165473.png",
      label: "Visualization as scientific method",
      text: "Visual work helps the lab imagine mechanisms, expose assumptions, and communicate engineered physiology without flattening it into jargon.",
    },
    paperTitles: [
      "When art and science collide",
    ],
    carouselEyebrow: "Fresh from the lab",
    carouselTitle: "Visual experiments",
    featureCards: [
      {
        title: "Gallery",
        text:
          "A curated entry point for lab visuals, sketches, installations, and visual experiments that make SPL's scientific imagination visible.",
        type: "image",
        src: "https://static.wixstatic.com/media/1a9389_e0538ee1aef74238a58219cf45eb5904~mv2.png/v1/fill/w_273,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/F_B2_draw2.png",
        href: "https://www.syntheticphysiologylab.com/projects-7",
      },
      {
        title: "Artistic installation: Proliferation, 2025",
        text:
          "An installation translating proliferation and growth into a public-facing visual experience, connecting biological pattern formation with human perception.",
        type: "image",
        src: "https://static.wixstatic.com/media/1a9389_2ef6bc301822411b8b32581314e3b4e3~mv2.jpg/v1/fill/w_273,h_278,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20250810_203129%20(1)_edited.jpg",
        href: "https://www.syntheticphysiologylab.com/copia-di-vista-1",
      },
      {
        title: "New SPL logo",
        text:
          "Visual identity as lab infrastructure, not decoration. The logo system carries SPL's mix of engineering, biology, and culture.",
        type: "image",
        src: "https://static.wixstatic.com/media/1a9389_6cf7e30899b44eb8b9c6b7388d99c39e~mv2.png/v1/fill/w_273,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-08-28%20111823.png",
        href: "https://www.syntheticphysiologylab.com/art-and-science/logo-spl",
      },
    ],
    resources: [
      {
        label: "Gallery",
        href: "https://www.syntheticphysiologylab.com/projects-7",
        text: "Original SPL art and science gallery from the current site.",
      },
      {
        label: "Proliferation, 2025",
        href: "https://www.syntheticphysiologylab.com/copia-di-vista-1",
        text: "Original artistic installation page from the current site.",
      },
      {
        label: "SPL logo",
        href: "https://www.syntheticphysiologylab.com/art-and-science/logo-spl",
        text: "Original visual identity page from the current site.",
      },
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  email: string;
  image: string;
};

export type FormerTeamMember = {
  name: string;
  role: string;
  focus: string;
  emails: string[];
  status: "former";
  period?: string;
  note?: string;
};

export const team: TeamMember[] = [
  {
    name: "Francesco S. Pasqualini",
    role: "Lab Director",
    focus: "Industrial Bioengineering",
    email: "francesco.pasqualini@unipv.it",
    image: "/assets/scraped/020-Francesco_Pasqualini.png",
  },
  {
    name: "Moises Di Sante",
    role: "Senior Researcher",
    focus: "Stem cells and genome editing",
    email: "moises.disante@unipv.it",
    image: "/assets/scraped/023-Moises_Di_Sante.jpg",
  },
  {
    name: "Alessandro Enrico",
    role: "Senior Scientist",
    focus: "Materials science",
    email: "alessandro.enrico@unipv.it",
    image: "/assets/scraped/025-Alessandro_Enrico.jpg",
  },
  {
    name: "Melissa Pezzotti",
    role: "Post-doctoral researcher",
    focus: "Advanced optical methods in tissue engineering",
    email: "melissa.pezzotti@unipv.it",
    image: "/assets/scraped/016-Melissa_Pezzotti.jpg",
  },
  {
    name: "Eloisa Torchia",
    role: "Post-doctoral researcher",
    focus: "Mechanobiology in engineered cell culture platforms",
    email: "eloisa.torchia@unipv.it",
    image: "/assets/scraped/024-IMG_2543.jpg",
  },
  {
    name: "Sara Rigolli",
    role: "PhD student",
    focus: "Materials science",
    email: "sara.rigolli01@universitadipavia.it",
    image: "/assets/scraped/017-1a9389_cda58112bde047758c2851182a2c15c7-mv2.jpg",
  },
  {
    name: "Tehreem Ali",
    role: "PhD student",
    focus: "Bioinformatics",
    email: "tehreem.ali@unipv.it",
    image: "/assets/scraped/018-Tehreem.jpg",
  },
  {
    name: "Martina Petrelli",
    role: "Artist in Residence",
    focus: "Scientific illustration",
    email: "martina.petrelli@unipv.it",
    image: "/assets/scraped/019-1751303894720.jpeg",
  },
  {
    name: "Maddalena Rocca",
    role: "Project Manager",
    focus: "Laboratory operations",
    email: "maddalena.rocca@unipv.it",
    image: "/assets/scraped/021-20231130_115727.jpg",
  },
  {
    name: "Giulia Ballio",
    role: "Research Assistant",
    focus: "Molecular biology",
    email: "giulia.ballio@unipv.it",
    image: "/assets/team/giulia-balio.jpg",
  },
];

export const formerTeam: FormerTeamMember[] = [
  {
    name: "Ahmed S. Khalil",
    role: "Post-doctoral researcher",
    focus: "Former SPL post-doc",
    emails: ["salehastro@gmail.com", "ahmed.khalil@unipv.it"],
    status: "former",
    period: "Approx. December 2020 - November 2021",
    note: "Email evidence: late-2020 borsa di ricerca start, Jan 2021 remote activity, Nov 2021 last update. No current-employment information recorded; avoid public-source name matches until identity is confirmed.",
  },
  {
    name: "Dr. Chimwemwe Msosa",
    role: "CICOPS Fellow",
    focus: "Biomedical engineering",
    emails: ["cmsosa@mubas.ac.mw"],
    status: "former",
    period: "June 2024 - December 2024",
    note: "Now Lecturer in Biomedical Engineering at the Malawi University of Business and Applied Sciences.",
  },
  {
    name: "Sandipan Chattaraj",
    role: "Former SPL member",
    focus: "Computational modeling of cell mechanics",
    emails: [],
    status: "former",
    period: "Approx. 2021 - 2026",
    note: "Email evidence includes SPL group activity in 2021, a Dec 2023 final borsa report followed by an assegno, and 2026 research/tooling correspondence.",
  },
  {
    name: "Julius Zimmermann",
    role: "Former SPL member",
    focus: "Bioimage analysis and computational modeling",
    emails: [],
    status: "former",
    period: "Approx. December 2023 - April 2026",
    note: "Email evidence includes Dec 2023 SPL computational-science work, Dec 2024 DICAr non-structured researcher lists, and Apr 2026 paper-proof correspondence.",
  },
  {
    name: "Emanuele Carnevale Baraglia",
    role: "Former SPL member",
    focus: "Organelle acidification and computational modeling",
    emails: ["emanuele.carnevalebaraglia@unipv.it"],
    status: "former",
    period: "Approx. December 2023 - 2025",
    note: "Email evidence includes Dec 2023 thesis/SPL interactions, 2024-2025 SPL group activity, and a PRIN 2022 project assignment running 2023-11-30 to 2025-11-29.",
  },
  {
    name: "Bohdana Horda",
    role: "Former SPL member",
    focus: "Hydrogel fabrication and engineered cell culture systems",
    emails: ["bohdana.horda@unipv.it"],
    status: "former",
    period: "Approx. November 2023 - April 2025",
    note: "Email evidence includes Nov 2023 SPL/DICAr group correspondence and 2025 HYDRA manuscript correspondence.",
  },
  {
    name: "Alice Albini",
    role: "Administrative support",
    focus: "Project management and laboratory operations",
    emails: ["alice.albini@unipv.it"],
    status: "former",
    period: "Approx. January 2021 - June 2022",
    note: "Later University of Pavia administrative support in the wider engineering area; March 2023 email refers to her new incarico.",
  },
  {
    name: "Daniela Canevari",
    role: "Administrative support",
    focus: "Project management and laboratory operations",
    emails: ["daniela.canevari@unipv.it"],
    status: "former",
    period: "Approx. December 2023 - 2025",
    note: "Currently working within the wider University of Pavia administration, with DICAr/DII-adjacent support visible in later emails.",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
  href: string;
  tag: string;
  provenance: "spl" | "pre-spl";
  citations?: string;
};

export const publications: Publication[] = [
  {
    title: "MicroSplit: semantic unmixing of fluorescent microscopy data",
    authors: "Ashesh Ashesh, Federico Carrara, Igor Zubarev, Vera Galinova, Melisande Croft, Melissa Pezzotti, Daozheng Gong, Francesca Casagrande, Elisa Colombo, Stefania Giussani, Elena Restelli, Eugenia Cammarota, Juan Manuel Battagliotti, Nikolai Klena, Moises Di Sante, Raghabendra Adhikari, Daniel Feliciano, Gaia Pigino, Elena Taverna, Oliver Harschnitz, Nicola Maghelli, Norbert Scherer, Damian Edward Dalle Nogare, Joran Deschamps, Francesco Pasqualini, Florian Jug",
    venue: "Nature Methods",
    year: "2026",
    doi: "10.1038/s41592-026-03082-1",
    href: "https://pubmed.ncbi.nlm.nih.gov/42086917/",
    tag: "Recent",
    provenance: "spl",
  },
  {
    title: "Micro-comb 3D printing: rapid fabrication of tissue-guiding substrates using micro-embossed nozzles",
    authors: "Sarkhan Butdayev, Stefan Leone, Shayla Nikzad, Janko Kajtez, Katrine Bech Lauritzen, Moises Di Sante, Francesco S Pasqualini, Kirstine Calloe, Rodolphe Marie, Stephan S Keller, Anne Z Eriksen, Johan U Lind",
    venue: "Biofabrication",
    year: "2026",
    doi: "10.1088/1758-5090/ae5fd9",
    href: "https://pubmed.ncbi.nlm.nih.gov/41985513/",
    tag: "Recent",
    provenance: "spl",
  },
  {
    title: "Bioimage analysis for multiplexed FUCCI acquisitions powered by deep learning",
    authors: "J. Zimmermann, M. Pezzotti, E. Torchia, A. Enrico, M. Di Sante, F.S. Pasqualini",
    venue: "npj Imaging",
    year: "2026",
    doi: "10.1038/s44303-026-00159-6",
    href: "https://www.nature.com/articles/s44303-026-00159-6",
    tag: "Bioimage analysis",
    provenance: "spl",
  },
  {
    title: "A vertically integrated system for tracking and assessing cell-cycle-aware phenotypes under confinement",
    authors: "Melissa Pezzotti, Eloisa Torchia, Julius Zimmermann, Sara Rigolli, Alessandro Enrico, Moises Di Sante, Francesco S. Pasqualini",
    venue: "APL Bioengineering",
    year: "2026",
    doi: "10.1063/5.0306480",
    href: "https://pubmed.ncbi.nlm.nih.gov/41799556/",
    tag: "Recent",
    provenance: "spl",
  },
  {
    title: "Fabrication of cell culture hydrogels by robotic liquid handling automation for high-throughput drug testing",
    authors: "Eloisa Torchia, Moises Di Sante, Bohdana Horda, Marko Mihajlovic, Julius Zimmermann, Melissa Pezzotti, Elisa Cimetta, Sylvain Gabriele, Ferdinando Auricchio, Johan Ulrik Lind, Alessandro Enrico, Francesco Silvio Pasqualini",
    venue: "Communications Engineering",
    year: "2025",
    doi: "10.1038/s44172-025-00575-3",
    href: "https://pubmed.ncbi.nlm.nih.gov/41430373/",
    tag: "Recent",
    provenance: "spl",
  },
  {
    title: "LiGHTS: Massively Parallel Biomimetic Photo-Functionalization for Imaging-Based Ultra-High-Throughput Screening",
    authors: "Alessandro Enrico, Sara Rigolli, Julius Zimmermann, Melissa Pezzotti, Eloisa Torchia, Moises Di Sante, Ferdinando Auricchio, Francesco S. Pasqualini",
    venue: "bioRxiv",
    year: "2025",
    doi: "10.1101/2025.10.23.683892",
    href: "https://www.biorxiv.org/content/10.1101/2025.10.23.683892v1",
    tag: "Preprint",
    provenance: "spl",
  },
  {
    title: "BIOPOINT: A particle-based model for probing nuclear mechanics and cell-ECM interactions via experimentally derived parameters",
    authors: "Sandipan Chattaraj, Julius Zimmermann, Francesco Silvio Pasqualini",
    venue: "PLOS Computational Biology",
    year: "2025",
    doi: "10.1371/journal.pcbi.1014113",
    href: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1014113",
    tag: "Modeling",
    provenance: "spl",
  },
  {
    title: "An Open-Science Computational Model of Organelle Acidification to Integrate Putative Mechanisms of Synaptic Vesicle Acidification and Filling",
    authors: "Baraglia EC, Fattorini G, Chattaraj S, Pasqualini F, Conti F",
    venue: "Neurochemical Research",
    year: "2025",
    doi: "10.1007/s11064-025-04432-9",
    href: "https://pubmed.ncbi.nlm.nih.gov/40471464/",
    tag: "Modeling",
    provenance: "spl",
  },
  {
    title: "Molecular Dynamics Simulation of Structural Assembly and Hydration of Hyaluronic Acid in Salt Aqueous Buffer",
    authors: "Vasudevan S, Chattaraj S, Enrico A, Pasqualini FS",
    venue: "Langmuir",
    year: "2025",
    doi: "10.1021/acs.langmuir.4c03966",
    href: "https://pubmed.ncbi.nlm.nih.gov/39913243/",
    tag: "Modeling",
    provenance: "spl",
  },
  {
    title: "CALIPERS: Cell cycle-aware live imaging for phenotyping experiments and regeneration studies",
    authors: "Moises Di Sante, Melissa Pezzotti, Julius Zimmermann, Alessandro Enrico, Joran Deschamps, Elisa Balmas, Silvia Becca, Alessandro Reali, Alessandro Bertero, Florian Jug, Francesco S. Pasqualini",
    venue: "bioRxiv",
    year: "2024",
    doi: "10.1101/2024.12.19.629259",
    href: "https://www.biorxiv.org/content/10.1101/2024.12.19.629259v1",
    tag: "Preprint",
    provenance: "spl",
  },
  {
    title: "An efficient active-stress electromechanical isogeometric shell model for muscular thin-film simulations",
    authors: "Torre M, Morganti S, Nitti A, de Tullio M D, Kiendl J, Pasqualini F S, Reali A",
    venue: "Mechanics of Materials",
    year: "2024",
    href: "https://doi.org/10.1016/j.mechmat.2024.105046",
    tag: "Modeling",
    provenance: "spl",
  },
  {
    title: "When art and science collide",
    authors: "Pasqualini F",
    venue: "Biophysical Reviews",
    year: "2024",
    doi: "10.1063/5.0203543",
    href: "https://pubmed.ncbi.nlm.nih.gov/38505297/",
    tag: "Essay",
    provenance: "spl",
  },
  {
    title: "SEM2: Introducing mechanics in cell and tissue modeling using coarse-grained homogeneous particle dynamics",
    authors: "Chattaraj S, Torre M, Kalcher C, Stukowski A, Morganti S, Reali A, Pasqualini FS",
    venue: "APL Bioengineering",
    year: "2023",
    doi: "10.1063/5.0166829",
    href: "https://pubmed.ncbi.nlm.nih.gov/38075209/",
    tag: "Modeling",
    provenance: "spl",
  },
  {
    title: "muSplit: image decomposition for fluorescence microscopy",
    authors: "Ashesh, Alexander Krull, Moises Di Sante, Francesco Silvio Pasqualini, Florian Jug",
    venue: "IEEE/CVF International Conference on Computer Vision",
    year: "2023",
    doi: "10.1109/iccv51070.2023.01940",
    href: "https://doi.org/10.1109/iccv51070.2023.01940",
    tag: "Bioimage analysis",
    provenance: "spl",
  },
  {
    title: "Current progress toward isogeometric modeling of the heart biophysics",
    authors: "Torre M, Morganti S, Pasqualini FS, Reali A",
    venue: "Biophysical Reviews",
    year: "2023",
    doi: "10.1063/5.0152690",
    href: "https://pubmed.ncbi.nlm.nih.gov/38510845/",
    tag: "Review",
    provenance: "spl",
  },
  {
    title: "Isogeometric mixed collocation of nearly-incompressible electromechanics in finite deformations for cardiac muscle simulations",
    authors: "Michele Torre, Simone Morganti, Alessandro Nitti, Marco D. de Tullio, Francesco S. Pasqualini, Alessandro Reali",
    venue: "Computer Methods in Applied Mechanics and Engineering",
    year: "2023",
    doi: "10.1016/j.cma.2023.116055",
    href: "https://doi.org/10.1016/j.cma.2023.116055",
    tag: "Modeling",
    provenance: "spl",
  },
  {
    title: "Immersed isogeometric analysis based on a hybrid collocation/finite cell method",
    authors: "Torre M, Morganti S, Pasqualini F S, Duster A, Reali A",
    venue: "Computer Methods in Applied Mechanics and Engineering",
    year: "2023",
    href: "https://doi.org/10.1016/j.cma.2022.115856",
    tag: "Modeling",
    provenance: "spl",
  },
  {
    title: "Organotypic and Microphysiological Human Tissue Models for Drug Discovery and Development: Current State-of-the-Art and Future Perspectives",
    authors: "Sonia Youhanna, Aurino M. Kemas, Lena Preiss, Yitian Zhou, Joanne X. Shen, Selgin D. Cakal, Francesco S. Pasqualini, Sravan K. Goparaju, Reza Zandi Shafagh, Johan Ulrik Lind, Carl M. Sellgren, Volker M. Lauschke",
    venue: "Pharmacological Reviews",
    year: "2022",
    doi: "10.1124/pharmrev.120.000238",
    href: "https://doi.org/10.1124/pharmrev.120.000238",
    tag: "Review",
    provenance: "spl",
  },
  {
    title: "Emerging strategies in 3D printed tissue models for in vitro biomedical research",
    authors: "Christian J. Pless, Carmen Radeke, Selgin D. Cakal, Janko Kajtez, Francesco S. Pasqualini, Johan U. Lind",
    venue: "Bioprinting",
    year: "2022",
    doi: "10.1016/b978-0-323-85430-6.00007-8",
    href: "https://doi.org/10.1016/b978-0-323-85430-6.00007-8",
    tag: "Book chapter",
    provenance: "spl",
  },
  {
    title: "An efficient isogeometric collocation approach to cardiac electrophysiology",
    authors: "Torre M, Morganti S, Nitti A, de Tullio M D, Pasqualini F S, Reali A",
    venue: "Computer Methods in Applied Mechanics and Engineering",
    year: "2022",
    href: "https://doi.org/10.1016/j.cma.2021.114782",
    tag: "Modeling",
    provenance: "spl",
  },
  {
    title: "Tackling the ERC paradox / Come affrontare il paradosso ERC",
    authors: "Manuela Raimondi, Francesco Pasqualini, Gianni Ciofani, Luca Biferale",
    venue: "Nature Italy",
    year: "2021",
    doi: "10.1038/d43978-021-00140-4 / 10.1038/d43978-021-00141-3",
    href: "https://doi.org/10.1038/d43978-021-00140-4",
    tag: "Commentary",
    provenance: "spl",
  },
  {
    title: "A Pulsatile Flow System to Engineer Aneurysm and Atherosclerosis Mimetic Extracellular Matrix",
    authors: "Hosseini V, Mallone A, Mirkhani N, Noir J, Salek M, Pasqualini FS, Schuerle S, Khademhosseini A, Hoerstrup SP, Vogel V",
    venue: "Advanced Science",
    year: "2020",
    doi: "10.1002/advs.202000173",
    href: "https://pubmed.ncbi.nlm.nih.gov/32596117/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "Insights Into the Pathogenesis of Catecholaminergic Polymorphic Ventricular Tachycardia From Engineered Human Heart Tissue",
    authors: "Park SJ, Zhang D, Qi Y, Li Y, Lee KY, Bezzerides VJ, Yang P, Xia S, Kim SL, Liu X, Lu F, Pasqualini FS, Campbell PH, Geva J, Roberts AE, Kleber AG, Abrams DJ, Pu WT, Parker KK",
    venue: "Circulation",
    year: "2019",
    doi: "10.1161/CIRCULATIONAHA.119.039711",
    href: "https://pubmed.ncbi.nlm.nih.gov/31311300/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "A tissue-engineered scale model of the heart ventricle",
    authors: "Luke A MacQueen, Sean P Sheehy, Christophe O Chantre, John F Zimmerman, Francesco S Pasqualini, Xujie Liu, Josue A Goss, Patrick H Campbell, Grant M Gonzalez, Sung-Jin Park, Andrew K Capulli, John P Ferrier, T Fettah Kosar, L Mahadevan, William T Pu, Kevin Kit Parker",
    venue: "Nature Biomedical Engineering",
    year: "2018",
    doi: "10.1038/s41551-018-0271-5",
    href: "https://pubmed.ncbi.nlm.nih.gov/31015723/",
    tag: "Highly cited",
    provenance: "pre-spl",
  },
  {
    title: "Traction force microscopy of engineered cardiac tissues",
    authors: "Francesco S. Pasqualini, A. Agarwal, O. B. O'Connor, Q. Liu, S. P. Sheehy, K. K. Parker",
    venue: "PLOS ONE",
    year: "2018",
    doi: "10.1371/journal.pone.0194706",
    href: "https://pubmed.ncbi.nlm.nih.gov/29590169/",
    tag: "Methods",
    provenance: "pre-spl",
  },
  {
    title: "JetValve: Rapid manufacturing of biohybrid scaffolds for biomimetic heart valve replacement",
    authors: "Capulli AK, Emmert MY, Pasqualini FS, Kehl D, Caliskan E, Lind JU, Sheehy SP, Park SJ, Ahn S, Weber B, Goss JA, Hoerstrup SP, Parker KK",
    venue: "Biomaterials",
    year: "2017",
    doi: "10.1016/j.biomaterials.2017.04.033",
    href: "https://pubmed.ncbi.nlm.nih.gov/28445803/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "Translational cardiac stem cell therapy: advancing from first-generation to next-generation cell types",
    authors: "Cambria E, Pasqualini FS, Wolint P, Gunter J, Steiger J, Bopp A, Hoerstrup SP, Emmert MY",
    venue: "npj Regenerative Medicine",
    year: "2017",
    doi: "10.1038/s41536-017-0024-1",
    href: "https://pubmed.ncbi.nlm.nih.gov/29302353/",
    tag: "Review",
    provenance: "pre-spl",
  },
  {
    title: "Safety and efficacy of cardiopoietic stem cells in the treatment of post-infarction left-ventricular dysfunction - From cardioprotection to functional repair in a translational pig infarction model",
    authors: "Emmert MY, Wolint P, Jakab A, Sheehy SP, Pasqualini FS, Nguyen TDL, Hilbe M, Seifert B, Weber B, Brokopp CE, Macejovska D, Caliskan E, von Eckardstein A, Schwartlander R, Vogel V, Falk V, Parker KK, Gyongyosi M, Hoerstrup SP",
    venue: "Biomaterials",
    year: "2017",
    doi: "10.1016/j.biomaterials.2016.11.029",
    href: "https://pubmed.ncbi.nlm.nih.gov/28107664/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "Instrumented cardiac microphysiological devices via multimaterial three-dimensional printing",
    authors: "Johan U Lind, Travis A Busbee, Alexander D Valentine, Francesco S Pasqualini, Hongyan Yuan, Moran Yadid, Sung-Jin Park, Arda Kotikian, Alexander P Nesmith, Patrick H Campbell, Joost J Vlassak, Jennifer A Lewis, Kevin Kit Parker",
    venue: "Nature Materials",
    year: "2017",
    doi: "10.1038/nmat4782",
    href: "https://pubmed.ncbi.nlm.nih.gov/27775708/",
    tag: "Highly cited",
    provenance: "pre-spl",
    citations: "900+ citations",
  },
  {
    title: "Organ Chips: Quality Assurance Systems in Regenerative Medicine",
    authors: "Francesco S. Pasqualini, Maximilian Y. Emmert, Kevin K. Parker, Simon P. Hoerstrup",
    venue: "Clinical Pharmacology & Therapeutics",
    year: "2016",
    doi: "10.1002/cpt.527",
    href: "https://doi.org/10.1002/cpt.527",
    tag: "Review",
    provenance: "pre-spl",
  },
  {
    title: "Mechanotransduction and Metabolism in Cardiomyocyte Microdomains",
    authors: "Pasqualini FS, Nesmith AP, Horton RE, Sheehy SP, Parker KK",
    venue: "BioMed Research International",
    year: "2016",
    doi: "10.1155/2016/4081638",
    href: "https://pubmed.ncbi.nlm.nih.gov/28044126/",
    tag: "Review",
    provenance: "pre-spl",
  },
  {
    title: "A human in vitro model of Duchenne muscular dystrophy muscle formation and contractility",
    authors: "Nesmith AP, Wagner MA, Pasqualini FS, O'Connor BB, Pincus MJ, August PR, Parker KK",
    venue: "Journal of Cell Biology",
    year: "2016",
    doi: "10.1083/jcb.201603111",
    href: "https://pubmed.ncbi.nlm.nih.gov/27697929/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "Heart Valve Replacements with Regenerative Capacity",
    authors: "Dijkman PE, Fioretta ES, Frese L, Pasqualini FS, Hoerstrup SP",
    venue: "Transfusion Medicine and Hemotherapy",
    year: "2016",
    doi: "10.1159/000448181",
    href: "https://pubmed.ncbi.nlm.nih.gov/27721704/",
    tag: "Review",
    provenance: "pre-spl",
  },
  {
    title: "Phototactic guidance of a tissue-engineered soft-robotic ray",
    authors: "Sung-Jin Park, Mattia Gazzola, Kyung Soo Park, Shirley Park, Valentina Di Santo, Erin L Blevins, Johan U Lind, Patrick H Campbell, Stephanie Dauth, Andrew K Capulli, Francesco S Pasqualini, Seungkuk Ahn, Alexander Cho, Hongyan Yuan, Ben M Maoz, Ragu Vijaykumar, Jeong-Woo Choi, Karl Deisseroth, George V Lauder, L Mahadevan, Kevin Kit Parker",
    venue: "Science",
    year: "2016",
    doi: "10.1126/science.aaf4292",
    href: "https://pubmed.ncbi.nlm.nih.gov/27387948/",
    tag: "Highly cited",
    provenance: "pre-spl",
    citations: "500+ citations",
  },
  {
    title: "Laminar ventricular myocardium on a microelectrode array-based chip",
    authors: "Kujala VJ, Pasqualini FS, Goss JA, Nawroth JC, Parker KK",
    venue: "Journal of Materials Chemistry B",
    year: "2016",
    doi: "10.1039/c6tb00324a",
    href: "https://pubmed.ncbi.nlm.nih.gov/32263387/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "Coupling primary and stem cell-derived cardiomyocytes in an in vitro model of cardiac cell therapy",
    authors: "Aratyn-Schaus Y, Pasqualini FS, Yuan H, McCain ML, Ye GJ, Sheehy SP, Campbell PH, Parker KK",
    venue: "Journal of Cell Biology",
    year: "2016",
    doi: "10.1083/jcb.201508026",
    href: "https://pubmed.ncbi.nlm.nih.gov/26858266/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "Angiotensin II Induced Cardiac Dysfunction on a Chip",
    authors: "Horton RE, Yadid M, McCain ML, Sheehy SP, Pasqualini FS, Park SJ, Cho A, Campbell P, Parker KK",
    venue: "PLOS ONE",
    year: "2016",
    doi: "10.1371/journal.pone.0146415",
    href: "https://pubmed.ncbi.nlm.nih.gov/26808388/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "Late Na(+) current and protracted electrical recovery are critical determinants of the aging myopathy",
    authors: "Signore S, Sorrentino A, Borghetti G, Cannata A, Meo M, Zhou Y, Kannappan R, Pasqualini F, O'Malley H, Sundman M, Tsigkas N, Zhang E, Arranto C, Mangiaracina C, Isobe K, Sena BF, Kim J, Goichberg P, Nahrendorf M, Isom LL, Leri A, Anversa P, Rota M",
    venue: "Nature Communications",
    year: "2015",
    doi: "10.1038/ncomms9803",
    href: "https://pubmed.ncbi.nlm.nih.gov/26541940/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "Structural phenotyping of stem cell-derived cardiomyocytes",
    authors: "Francesco Silvio Pasqualini, Sean Paul Sheehy, Ashutosh Agarwal, Yvonne Aratyn-Schaus, Kevin Kit Parker",
    venue: "Stem Cell Reports",
    year: "2015",
    doi: "10.1016/j.stemcr.2015.01.020",
    href: "https://pubmed.ncbi.nlm.nih.gov/25733020/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "Origin of cardiomyocytes in the adult heart",
    authors: "Leri A, Rota M, Pasqualini FS, Goichberg P, Anversa P",
    venue: "Circulation Research",
    year: "2015",
    doi: "10.1161/CIRCRESAHA.116.303595",
    href: "https://pubmed.ncbi.nlm.nih.gov/25552694/",
    tag: "Review",
    provenance: "pre-spl",
  },
  {
    title: "Modeling the mitochondrial cardiomyopathy of Barth syndrome with induced pluripotent stem cell and heart-on-chip technologies",
    authors: "Wang G, McCain ML, Yang L, He A, Pasqualini FS, Agarwal A, Yuan H, Jiang D, Zhang D, Zangi L, Geva J, Roberts AE, Ma Q, Ding J, Chen J, Wang DZ, Li K, Wang J, Wanders RJ, Kulik W, Vaz FM, Laflamme MA, Murry CE, Chien KR, Kelley RI, Church GM, Parker KK, Pu WT",
    venue: "Nature Medicine",
    year: "2014",
    doi: "10.1038/nm.3545",
    href: "https://pubmed.ncbi.nlm.nih.gov/24813252/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "Matrix elasticity regulates the optimal cardiac myocyte shape for contractility",
    authors: "McCain ML, Yuan H, Pasqualini FS, Campbell PH, Parker KK",
    venue: "American Journal of Physiology-Heart and Circulatory Physiology",
    year: "2014",
    doi: "10.1152/ajpheart.00799.2013",
    href: "https://pubmed.ncbi.nlm.nih.gov/24682394/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "Quality metrics for stem cell-derived cardiac myocytes",
    authors: "Sheehy SP, Pasqualini F, Grosberg A, Park SJ, Aratyn-Schaus Y, Parker KK",
    venue: "Stem Cell Reports",
    year: "2014",
    doi: "10.1016/j.stemcr.2014.01.015",
    href: "https://pubmed.ncbi.nlm.nih.gov/24672752/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "The contractile strength of vascular smooth muscle myocytes is shape dependent",
    authors: "Ye GJ, Aratyn-Schaus Y, Nesmith AP, Pasqualini FS, Alford PW, Parker KK",
    venue: "Integrative Biology",
    year: "2014",
    doi: "10.1039/c3ib40230d",
    href: "https://pubmed.ncbi.nlm.nih.gov/24406783/",
    tag: "Paper",
    provenance: "pre-spl",
  },
  {
    title: "A novel computational model of the human ventricular action potential and Ca transient",
    authors: "Eleonora Grandi, Francesco S Pasqualini, Donald M Bers",
    venue: "Journal of Molecular and Cellular Cardiology",
    year: "2010",
    doi: "10.1016/j.yjmcc.2009.09.019",
    href: "https://pubmed.ncbi.nlm.nih.gov/19835882/",
    tag: "Modeling",
    provenance: "pre-spl",
  },
  {
    title: "Theoretical investigation of action potential duration dependence on extracellular Ca2+ in human cardiomyocytes",
    authors: "Grandi E, Pasqualini FS, Pes C, Corsi C, Zaza A, Severi S",
    venue: "Journal of Molecular and Cellular Cardiology",
    year: "2009",
    doi: "10.1016/j.yjmcc.2008.12.002",
    href: "https://pubmed.ncbi.nlm.nih.gov/19121322/",
    tag: "Modeling",
    provenance: "pre-spl",
  },
];

export const publicationHighlights = {
  recent: publications.filter((paper) => ["Recent", "Preprint", "Bioimage analysis", "Modeling"].includes(paper.tag)).slice(0, 6),
  cited: publications.filter((paper) => paper.tag === "Highly cited").slice(0, 4),
};

export const nonArticleOutputs = [
  { type: "Plasmid", label: "pLV-EF1A-FUCCIplex", href: "https://www.addgene.org/240160/" },
  { type: "Plasmid", label: "pLV-CMV-FUCCIplex", href: "https://www.addgene.org/240221/" },
  { type: "Plasmid", label: "pLV-cTnT-FUCCIplex", href: "https://www.addgene.org/240216/" },
  { type: "Plasmid", label: "R26-CAG-BST-FUCCIplex", href: "https://www.addgene.org/240241/" },
  { type: "Cell line", label: "FUCCIplex reporter cell systems", href: "/stem-cells-and-genome-editing/" },
  { type: "Repository", label: "DeepFUCCI", href: "https://github.com/Synthetic-Physiology-Lab/DeepFUCCI" },
  { type: "Repository", label: "HYDRA HTS hydrogel analysis", href: "https://github.com/Synthetic-Physiology-Lab/hydra-hts-hydrogel-analysis" },
  { type: "Repository", label: "BIOPOINT", href: "https://github.com/Synthetic-Physiology-Lab/biopoint" },
  { type: "Repository", label: "SEM2", href: "https://github.com/Synthetic-Physiology-Lab/sem2" },
  { type: "Repository", label: "Organelle acidification ODE model", href: "https://github.com/Synthetic-Physiology-Lab/Organelle-acidification-ODE-model" },
  { type: "Art", label: "SPL art and science gallery", href: "https://www.syntheticphysiologylab.com/projects-7" },
  { type: "Art", label: "Proliferation, 2025", href: "https://www.syntheticphysiologylab.com/copia-di-vista-1" },
];

const formatCount = (count: number, suffix = "") => `${count}${suffix}`;

export const heroStats = [
  {
    value: formatCount(fundedLabEvents.length),
    label: "Funded programs",
    detail: "Auto-counted from the lab events database",
  },
  {
    value: formatCount(researchAreas.length),
    label: "Integrated research areas",
    detail: "Auto-counted from the research area database",
  },
  {
    value: formatCount(team.length, "+"),
    label: "Trainees to date",
    detail: "Temporary count from the current team list until alumni history is added",
  },
  {
    value: formatCount(publications.length),
    label: "Publications",
    detail: "Auto-counted from the publications database",
  },
  {
    value: formatCount(nonArticleOutputs.length, "+"),
    label: "Other outputs",
    detail: "Plasmids, cell systems, repositories, and art-science outcomes",
  },
];

export const creed = [
  {
    title: "Memento Mori",
    subtitle: "Live. Love. Matter.",
    text: "We choose meaningful work, serve people over ego, and optimize for being helpful, not being right.",
    behaviors: "Seek work that energizes; default to service and humility.",
    antiPatterns: "Performative busywork; winning arguments that do not advance outcomes.",
  },
  {
    title: "Be an Engineer",
    subtitle: "Build a Better Future",
    text: "Engineering is a way of thinking. Backgrounds vary; the bias to build does not.",
    behaviors: "Prototype over pontificate; ship small, iterate.",
    antiPatterns: "Tech-for-tech's-sake; endless debate without artifacts.",
  },
  {
    title: "Tell the Truth, Fast",
    subtitle: "Facts over opinions",
    text: "No spin, no hiding. Early bad news saves projects.",
    behaviors: "Separate fact, assumption, and opinion; surface risks immediately with no blame.",
    antiPatterns: "Omission, sandbagging, or late surprise reveals.",
  },
  {
    title: "Make Teammates",
    subtitle: "Not Co-workers",
    text: "We invest so people can leave; we build a place they want to stay.",
    behaviors: "Candid feedback with care; share context and credit.",
    antiPatterns: "Gatekeeping, hero culture, or silent bystanders.",
  },
  {
    title: "Build Solutions",
    subtitle: "Not Gadgets",
    text: "Start from the problem. Measure impact, not novelty.",
    behaviors: "Define user and success metric before building.",
    antiPatterns: "Searching for problems that fit our tools.",
  },
  {
    title: "Keep the Main Thing the Main Thing",
    subtitle: "One priority beats five",
    text: "Time follows strategy.",
    behaviors: "Give roughly 80% of calendar to the number-one objective; say no clearly.",
    antiPatterns: "Priority whiplash; treating everything as P0.",
  },
  {
    title: "Fail Fast, Fail Cheap",
    subtitle: "Learn Secrets",
    text: "Design experiments as low-cost Monte Carlo steps to uncover non-obvious leverage.",
    behaviors: "Pre-register what we will learn; cap cost and time; archive results.",
    antiPatterns: "Expensive, open-ended science projects with fuzzy learning.",
  },
  {
    title: "Play the Long Game",
    subtitle: "One Step at a Time",
    text: "Compound small wins. No Hail-Mary planning.",
    behaviors: "Ten-yard drives; confront weaknesses with explicit plans.",
    antiPatterns: "Overreliance on strengths; magical thinking about timelines.",
  },
  {
    title: "Model Excellence, Demand Excellence",
    subtitle: "Inspire Greatness",
    text: "Standards are viral: raise them and let others raise yours.",
    behaviors: "Define done and quality bars; coach and invite coaching.",
    antiPatterns: "Good enough creep; unreviewed output.",
  },
  {
    title: "Bring Joy to the Struggle",
    subtitle: "Hard things are hard",
    text: "We do not make them harder.",
    behaviors: "Protect sleep and health; show up with energy and respect.",
    antiPatterns: "Cynicism, drama, or adding to a teammate's load.",
  },
];

export const creedSources = [
  "Richard Feynman, Surely You're Joking, Mr. Feynman!",
  "Peter Thiel, Zero to One",
  "Ben Horowitz, The Hard Thing About Hard Things",
  "Andy Grove, High Output Management",
  "Brendon Burchard, High Performance Habits",
  "Nancy Duarte, HBR Guide to Persuasive Presentations",
];
