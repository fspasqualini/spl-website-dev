export const newsCategories = [
  "research",
  "funding",
  "people",
  "events",
  "awards",
  "resources",
  "labLife",
] as const;

export type NewsCategory = (typeof newsCategories)[number];
export type NewsDatePrecision = "day" | "month" | "year";

export type NewsEntry = {
  id: string;
  date: string;
  datePrecision: NewsDatePrecision;
  dateLabel?: string;
  category: NewsCategory;
  title: string;
  blurb: string;
  links?: { label: string; href: string }[];
  people?: string[];
  topics?: string[];
  order?: number;
  featured?: boolean;
  image?: { src: string; alt: string };
};

export const categoryLabels: Record<NewsCategory, string> = {
  research: "Research",
  funding: "Funding",
  people: "People",
  events: "Events",
  awards: "Awards",
  resources: "Resources",
  labLife: "Lab life",
};

export const newsArchive: NewsEntry[] = [
  {
    "id": "2026-francesco-at-wcb-2026",
    "date": "2026-07-12",
    "datePrecision": "day",
    "category": "events",
    "title": "Francesco at WCB 2026",
    "blurb": "Francesco gave an invited presentation at the 10th World Congress of Biomechanics in Vancouver, sharing SPL's cell-cycle-aware phenotyping platforms for tracking structural and functional changes in engineered tissues.",
    "links": [
      {
        "label": "WCB 2026",
        "href": "https://wcb2026.com/"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "topics": [
      "Cell-cycle-aware phenotyping"
    ],
    "order": 1001
  },
  {
    "id": "2026-erc-days-at-univpm",
    "date": "2026-07-01",
    "datePrecision": "month",
    "category": "events",
    "title": "ERC Days at UNIVPM",
    "blurb": "Francesco joined ERC Days at UNIVPM to discuss frontier-research funding, share experience of the ERC programme, and advocate for conditions that help ambitious research thrive in Italy.",
    "links": [
      {
        "label": "ERC Days @ UNIVPM",
        "href": "https://www.univpm.it/Entra/Universita_Politecnica_delle_Marche_-_Ancona_-_Servizi_on-_line_Ricerca_Strutture_Eventi_In_evidenza_-_Home_Page/Tutti_gli_avvisi_di_UnivPM/ERC_Days_UNIVPM"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "topics": [
      "Research advocacy"
    ],
    "order": 1000
  },
  {
    "id": "2026-eloisa-and-melissa-defend-their-phds",
    "date": "2026-06-26",
    "datePrecision": "day",
    "category": "people",
    "title": "Eloisa and Melissa defend their PhDs",
    "blurb": "Congratulations to Dr Eloisa Torchia and Dr Melissa Pezzotti, who defended their PhDs after four years of advancing SPL's engineered culture, mechanobiology, and live-imaging platforms. We are delighted that both are continuing the adventure with SPL.",
    "links": [
      {
        "label": "Eloisa's thesis",
        "href": "https://iris.unipv.it/handle/11571/1553615"
      },
      {
        "label": "Melissa's thesis",
        "href": "https://iris.unipv.it/handle/11571/1553616"
      }
    ],
    "people": [
      "Melissa Pezzotti",
      "Eloisa Torchia"
    ],
    "order": 999,
    "featured": true,
    "image": {
      "src": "/assets/news/eloisa-melissa-phd-defense-2026.jpg",
      "alt": "Eloisa Torchia and Melissa Pezzotti at their PhD defense celebration"
    }
  },
  {
    "id": "2026-francesco-discusses-ai-in-research-at-the-university-of-pavia",
    "date": "2026-06-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Francesco discusses AI in research at the University of Pavia",
    "blurb": "Francesco discussed how artificial intelligence can expand experimental possibilities at the University of Pavia's event on AI in research, while keeping scientific judgment, empirical evidence, and the limits of the technology firmly in view.",
    "links": [
      {
        "label": "UniPV event page",
        "href": "https://www.unipv.news/notizie/lintelligenza-artificiale-alluniversita-di-pavia-incontro-il-10-giugno-su-iniziative-e"
      },
      {
        "label": "official programme",
        "href": "https://www.unipv.news/sites/magazine/files/2026-05/2026_06_10_IA%20in%20Ateneo_Programma_v3.pdf"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "topics": [
      "Research culture"
    ],
    "order": 998
  },
  {
    "id": "2026-janelia-conference",
    "date": "2026-06-01",
    "datePrecision": "month",
    "dateLabel": "May–June 2026",
    "category": "events",
    "title": "Janelia conference",
    "blurb": "Francesco presented SPL's work at Janelia's meeting on the intersection of mechanics and metabolism across biological scales, connecting engineered tissues with a broad community studying how physical context shapes cell state.",
    "links": [
      {
        "label": "Janelia conference page",
        "href": "https://www.janelia.org/you-janelia/conferences/intersection-of-mechanics-and-metabolism-across-biological-scales"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 997
  },
  {
    "id": "2026-microsplit-published-in-nature-methods",
    "date": "2026-05-01",
    "datePrecision": "month",
    "category": "research",
    "title": "MicroSplit published in Nature Methods",
    "blurb": "MicroSplit is published in Nature Methods, using semantic unmixing to recover richer biological information from multiplexed fluorescence images.",
    "links": [
      {
        "label": "Nature Methods",
        "href": "https://www.nature.com/articles/s41592-026-03082-1"
      }
    ],
    "order": 996
  },
  {
    "id": "2026-micro-comb-3d-printing-published",
    "date": "2026-04-01",
    "datePrecision": "month",
    "category": "research",
    "title": "Micro-comb 3D printing published",
    "blurb": "Micro-comb 3D printing is published in Biofabrication, introducing a rapid route to tissue-guiding substrates through micro-embossed printing nozzles.",
    "links": [
      {
        "label": "Biofabrication",
        "href": "https://doi.org/10.1088/1758-5090/ae5fd9"
      }
    ],
    "order": 995
  },
  {
    "id": "2026-francesco-eloisa-and-melissa-at-termis-eu-in-palma-de-mallorca",
    "date": "2026-04-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Francesco, Eloisa, and Melissa at TERMIS-EU in Palma de Mallorca",
    "blurb": "Francesco, Eloisa, and Melissa presented SPL's work at TERMIS-EU 2026 in Palma de Mallorca, sharing new approaches to cell-cycle-aware imaging, intracellular mechanics, and engineered tissue models.",
    "links": [
      {
        "label": "TERMIS-EU 2026",
        "href": "https://eu2026.termis.org/general-information"
      }
    ],
    "people": [
      "Francesco S. Pasqualini",
      "Melissa Pezzotti",
      "Eloisa Torchia"
    ],
    "order": 994
  },
  {
    "id": "2026-deep-learning-fucci-analysis-published",
    "date": "2026-04-01",
    "datePrecision": "month",
    "category": "research",
    "title": "Deep-learning FUCCI analysis published",
    "blurb": "Our deep-learning workflow for multiplexed FUCCI imaging is published in npj Imaging, turning live-cell reporters into quantitative trajectories of cell state.",
    "links": [
      {
        "label": "npj Imaging",
        "href": "https://www.nature.com/articles/s44303-026-00159-6"
      }
    ],
    "order": 993
  },
  {
    "id": "2026-biopoint-published",
    "date": "2026-03-01",
    "datePrecision": "month",
    "category": "research",
    "title": "BIOPOINT published",
    "blurb": "BIOPOINT is now published in PLOS Computational Biology, offering a particle-based framework for probing nuclear mechanics and cell–matrix interactions with experimentally grounded parameters.",
    "links": [
      {
        "label": "PLOS Computational Biology",
        "href": "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1014113"
      }
    ],
    "order": 992
  },
  {
    "id": "2026-vista-published",
    "date": "2026-03-01",
    "datePrecision": "month",
    "category": "research",
    "title": "VISTA published",
    "blurb": "VISTA is published in APL Bioengineering, integrating engineered confinement, live FUCCI imaging, and analysis to follow cell-cycle-aware phenotypes from experiment to quantitative readout.",
    "links": [
      {
        "label": "APL Bioengineering",
        "href": "https://pubs.aip.org/aip/apb/article/10/1/016114/3382255/A-vertically-integrated-system-for-tracking-and"
      }
    ],
    "order": 991
  },
  {
    "id": "2026-spl-at-the-biophysical-society-annual-meeting",
    "date": "2026-02-01",
    "datePrecision": "month",
    "category": "events",
    "title": "SPL at the Biophysical Society Annual Meeting",
    "blurb": "Francesco gave an invited presentation at the Biophysical Society Bioengineering Subgroup meeting, sharing SPL's approach to rebuilding measurable physiology with engineered cells, materials, and imaging.",
    "links": [
      {
        "label": "Bioengineering Subgroup programme",
        "href": "https://www.biophysics.org/meetings-events/annual-meeting/2026-annual-meeting/program/subgroup-saturday/bioengineering"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 990
  },
  {
    "id": "2026-calipers-plasmids-available-from-addgene",
    "date": "2026-02-01",
    "datePrecision": "month",
    "category": "resources",
    "title": "CALIPERS plasmids available from Addgene",
    "blurb": "The CALIPERS FUCCIplex plasmids are now available through Addgene, making SPL's cell-cycle-aware live-imaging toolkit easier for other laboratories to adopt and extend.",
    "links": [
      {
        "label": "Example FUCCIplex plasmid at Addgene",
        "href": "https://www.addgene.org/240160/"
      }
    ],
    "order": 989
  },
  {
    "id": "2026-bioengineering-subgroup-chair-elect",
    "date": "2026-02-01",
    "datePrecision": "month",
    "category": "awards",
    "title": "Bioengineering Subgroup Chair-Elect",
    "blurb": "Francesco has been elected Chair-Elect of the Biophysical Society Bioengineering Subgroup, supporting a community that connects physical principles, engineering, and living systems.",
    "links": [
      {
        "label": "BPS Bioengineering Subgroup leadership",
        "href": "https://www.biophysics.org/subgroups/bioengineering-1"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "topics": [
      "Service"
    ],
    "order": 988
  },
  {
    "id": "2025-hydra-published",
    "date": "2025-12-01",
    "datePrecision": "month",
    "category": "research",
    "title": "HYDRA published",
    "blurb": "HYDRA is published in Communications Engineering, showing how robotic liquid handling can fabricate physiologically soft cell-culture hydrogels directly in high-throughput screening plates.",
    "links": [
      {
        "label": "Communications Engineering",
        "href": "https://www.nature.com/articles/s44172-025-00575-3"
      }
    ],
    "order": 987
  },
  {
    "id": "2025-alessandro-and-sara-at-unlooc-and-beonchip-in-zaragoza",
    "date": "2025-11-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Alessandro and Sara at UNLOOC and BEONCHIP in Zaragoza",
    "blurb": "Alessandro Enrico and Sara Rigolli represented SPL at the UNLOOC and BEONCHIP meeting in Zaragoza, exchanging tools and standards for extracting more useful data from organ-on-chip systems.",
    "links": [
      {
        "label": "UNLOOC project",
        "href": "https://cordis.europa.eu/project/id/101140192"
      }
    ],
    "people": [
      "Alessandro Enrico",
      "Sara Rigolli"
    ],
    "order": 986
  },
  {
    "id": "2025-donato-giovannelli-presents-in-the-through-the-looking-glass-seminar-series",
    "date": "2025-11-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Donato Giovannelli presents in the Through the Looking Glass seminar series",
    "blurb": "Donato Giovannelli presented his work on microbial life in extreme environments, planetary-scale biogeochemical cycles, and the coevolution of the geosphere and biosphere in SPL's Through the Looking Glass seminar series.",
    "links": [
      {
        "label": "Donato Giovannelli at the University of Naples Federico II",
        "href": "https://www.dipartimentodibiologia.unina.it/personale/donato-giovannelli/"
      }
    ],
    "people": [
      "Donato Giovannelli"
    ],
    "topics": [
      "Through the Looking Glass seminar series",
      "Visitors"
    ],
    "order": 985
  },
  {
    "id": "2025-lights-preprint",
    "date": "2025-10-01",
    "datePrecision": "month",
    "category": "research",
    "title": "LigHTS preprint",
    "blurb": "The LigHTS preprint introduces massively parallel biomimetic photo-functionalization for imaging-based ultra-high-throughput screening.",
    "links": [
      {
        "label": "bioRxiv",
        "href": "https://doi.org/10.1101/2025.10.23.683892"
      }
    ],
    "order": 984
  },
  {
    "id": "2025-francesco-speaks-about-frontier-research-at-the-italian-senate",
    "date": "2025-10-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Francesco speaks about frontier research at the Italian Senate",
    "blurb": "Francesco spoke at the Italian Senate about the value of frontier research and the conditions needed for ambitious science and innovation to thrive in Italy.",
    "links": [
      {
        "label": "Senate event page",
        "href": "https://www.senato.it/attualita/archivio-notizie?nid=117884"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "topics": [
      "Research advocacy"
    ],
    "order": 983
  },
  {
    "id": "2025-deepfucci-preprint",
    "date": "2025-10-01",
    "datePrecision": "month",
    "category": "research",
    "title": "DeepFUCCI preprint",
    "blurb": "The DeepFUCCI preprint introduces a deep-learning workflow for segmentation, classification, and tracking in multiplexed FUCCI live imaging.",
    "links": [
      {
        "label": "bioRxiv",
        "href": "https://doi.org/10.1101/2025.09.30.677886"
      }
    ],
    "order": 982
  },
  {
    "id": "2025-giulia-ballio-joins-spl",
    "date": "2025-10-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Giulia Ballio joins SPL",
    "blurb": "Welcome to Giulia Ballio, who joins SPL as a research assistant supporting our stem-cell, genome-editing, and molecular-biology platforms after training at the University of Pavia.",
    "links": [
      {
        "label": "UniPV thesis",
        "href": "https://unitesi.unipv.it/handle/20.500.14239/28677"
      }
    ],
    "people": [
      "Giulia Ballio"
    ],
    "order": 981
  },
  {
    "id": "2025-francesco-at-cellmech-2025",
    "date": "2025-10-01",
    "datePrecision": "month",
    "dateLabel": "September–October 2025",
    "category": "events",
    "title": "Francesco at CellMech 2025",
    "blurb": "Francesco presented SPL's work at CellMech 2025 in Leuven, showing how instrumented human stem cells can help reveal the role of extracellular matrix in cardiac morphogenesis and disease.",
    "links": [
      {
        "label": "CellMech 2025",
        "href": "https://cellmech2025.org/"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 980
  },
  {
    "id": "2025-vista-preprint",
    "date": "2025-09-01",
    "datePrecision": "month",
    "category": "research",
    "title": "VISTA preprint",
    "blurb": "The VISTA preprint introduces a vertically integrated platform for tracking cell-cycle-aware phenotypes under engineered confinement.",
    "links": [
      {
        "label": "bioRxiv",
        "href": "https://doi.org/10.1101/2025.09.25.678497"
      }
    ],
    "order": 979
  },
  {
    "id": "2025-moises-at-the-abcd-congress",
    "date": "2025-09-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Moises at the ABCD Congress",
    "blurb": "Moises presented SPL's work at the ABCD Congress in Paestum, introducing CALIPERS to Italy's cell-biology and differentiation community.",
    "links": [
      {
        "label": "ABCD 2025 programme",
        "href": "https://abcd2025.azuleon.org/programme"
      }
    ],
    "people": [
      "Moises Di Sante"
    ],
    "order": 978
  },
  {
    "id": "2025-francesco-co-chairs-at-esb-2025",
    "date": "2025-09-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Francesco co-chairs at ESB 2025",
    "blurb": "Francesco served as a co-chair at the European Society for Biomaterials 2025 meeting.",
    "links": [
      {
        "label": "ESB 2025 scientific programme",
        "href": "https://esb2025.org/wp-content/uploads/2025/09/SCIENTIFIC-PROGRAM_GENERAL-ORAL-PRESENTATIONS.pdf"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "topics": [
      "Service"
    ],
    "order": 977
  },
  {
    "id": "2025-proliferation-art-science-installation",
    "date": "2025-09-01",
    "datePrecision": "month",
    "category": "events",
    "title": "PROLIFERATION art–science installation",
    "blurb": "Martina Petrelli presented PROLIFERATION, an SPL art–science installation exploring how biological growth can be imagined, visualized, and made material.",
    "links": [
      {
        "label": "SPL Art and Science",
        "href": "https://syntheticphysiologylab.com/art-and-science/"
      }
    ],
    "people": [
      "Martina Petrelli"
    ],
    "topics": [
      "Art and science"
    ],
    "order": 976
  },
  {
    "id": "2025-julius-zimmermann-concludes-his-spl-appointment",
    "date": "2025-08-01",
    "datePrecision": "year",
    "category": "people",
    "title": "Julius Zimmermann moves on from SPL",
    "blurb": "We thank Julius Zimmermann for two years of bioimage-analysis and computational work with SPL, and wish him every success in his next chapter.",
    "links": [
      {
        "label": "ORCID",
        "href": "https://orcid.org/0000-0003-1486-0426"
      }
    ],
    "people": [
      "Julius Zimmermann"
    ],
    "order": 975
  },
  {
    "id": "2025-francesco-eloisa-and-melissa-at-gnb-and-esb-ita-in-palermo",
    "date": "2025-06-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Francesco, Eloisa, and Melissa at GNB and ESB-ITA in Palermo",
    "blurb": "Francesco, Eloisa, and Melissa presented SPL's work at the joint GNB and ESB-ITA meeting in Palermo, spanning computational cell mechanics, scalable culture assays, hydrogel automation, and open light-sheet microscopy.",
    "links": [
      {
        "label": "GNB 2025",
        "href": "https://www.grupponazionalebioingegneria.it/gnbevent/ix-congress-of-the-national-group-of-bioengineering-gnb-2025/"
      },
      {
        "label": "ESB-ITA 2025",
        "href": "https://www.esb-ita.it/esb-ita25-home/"
      }
    ],
    "people": [
      "Francesco S. Pasqualini",
      "Melissa Pezzotti",
      "Eloisa Torchia"
    ],
    "order": 974
  },
  {
    "id": "2025-open-science-organelle-acidification-model-published",
    "date": "2025-06-01",
    "datePrecision": "month",
    "category": "research",
    "title": "open-science organelle acidification model published",
    "blurb": "Our open-science computational model of organelle acidification is published in Neurochemical Research, integrating candidate mechanisms for synaptic-vesicle acidification and filling.",
    "links": [
      {
        "label": "Neurochemical Research",
        "href": "https://link.springer.com/article/10.1007/s11064-025-04432-9"
      }
    ],
    "order": 973
  },
  {
    "id": "2025-sara-rigolli-visits-stockholm-university",
    "date": "2025-10-01",
    "datePrecision": "year",
    "category": "people",
    "title": "Sara Rigolli spends six months at Stockholm University",
    "blurb": "Sara Rigolli joined the Zeglio Lab at Stockholm University in Sweden for a six-month PhD research visit, expanding SPL's materials-science collaborations across Europe.",
    "links": [
      {
        "label": "Zeglio Lab alumni",
        "href": "https://zegliolab.org/alumni/"
      },
      {
        "label": "Erica Zeglio at Stockholm University",
        "href": "https://www.su.se/english/profiles/e/erze3680"
      }
    ],
    "people": [
      "Sara Rigolli"
    ],
    "topics": [
      "Research visits"
    ],
    "order": 972
  },
  {
    "id": "2025-emanuele-concludes-his-spl-phd-period",
    "date": "2025-05-01",
    "datePrecision": "year",
    "category": "people",
    "title": "Emanuele Carnevale Baraglia moves on from SPL",
    "blurb": "We thank Emanuele Carnevale Baraglia for his contributions to computational modeling of organelle physiology during his time with SPL, and wish him every success in his next chapter.",
    "links": [
      {
        "label": "Associated open-science paper",
        "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12141144/"
      }
    ],
    "people": [
      "Emanuele Carnevale Baraglia"
    ],
    "order": 971
  },
  {
    "id": "2025-erc-days-at-federico-ii",
    "date": "2025-05-01",
    "datePrecision": "month",
    "category": "events",
    "title": "ERC Days at Federico II",
    "blurb": "Francesco joined ERC Days at Federico II to mentor prospective applicants, share experience of the ERC programme, and advocate for the conditions that help frontier research thrive in Italy.",
    "links": [
      {
        "label": "ERC Days @Unina 2025",
        "href": "https://ercinitaly.eu/erc-days-unina-2025/"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "topics": [
      "Research advocacy"
    ],
    "order": 970
  },
  {
    "id": "2025-biopoint-preprint",
    "date": "2025-04-01",
    "datePrecision": "month",
    "category": "research",
    "title": "BIOPOINT preprint",
    "blurb": "The BIOPOINT preprint introduces a particle-based framework connecting experimentally calibrated nuclear mechanics with cell–matrix interactions.",
    "links": [
      {
        "label": "bioRxiv",
        "href": "https://doi.org/10.1101/2025.04.22.650069"
      }
    ],
    "order": 969
  },
  {
    "id": "2025-invited-oxford-bioelectricity-cluster-presentation",
    "date": "2025-04-01",
    "datePrecision": "month",
    "category": "events",
    "title": "invited Oxford Bioelectricity Cluster presentation",
    "blurb": "Francesco gave an invited presentation at the Oxford Bioelectricity Cluster, sharing SPL's work at the interface of engineered cells, mechanics, and bioelectric state.",
    "links": [
      {
        "label": "Oxford 2025 programme",
        "href": "https://www.bioelectricitycluster.org/past-editions/oxford-2025_1/program"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 968
  },
  {
    "id": "2025-maddalena-rocca-joins-spl",
    "date": "2025-02-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Maddalena Rocca joins SPL",
    "blurb": "Welcome to Maddalena Rocca, who joins SPL to strengthen project management and laboratory operations after supporting students and international programmes at EDISU Pavia.",
    "links": [
      {
        "label": "SPL team page",
        "href": "https://syntheticphysiologylab.com/team/"
      }
    ],
    "people": [
      "Maddalena Rocca"
    ],
    "order": 967
  },
  {
    "id": "2025-martina-petrelli-joins-spl",
    "date": "2025-02-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Martina Petrelli joins SPL",
    "blurb": "Welcome to visual artist Martina Petrelli, who joins SPL to develop scientific illustration and art–science experiments as part of the lab's research culture.",
    "links": [
      {
        "label": "SPL Art and Science",
        "href": "https://syntheticphysiologylab.com/art-and-science/"
      }
    ],
    "people": [
      "Martina Petrelli"
    ],
    "topics": [
      "Art and science"
    ],
    "order": 966
  },
  {
    "id": "2025-hyaluronic-acid-molecular-dynamics-paper",
    "date": "2025-02-01",
    "datePrecision": "month",
    "category": "research",
    "title": "hyaluronic-acid molecular-dynamics paper",
    "blurb": "Our molecular-dynamics study of hyaluronic-acid assembly and hydration is published in Langmuir, connecting molecular structure with the behavior of a central extracellular-matrix polymer.",
    "links": [
      {
        "label": "Langmuir",
        "href": "https://pubs.acs.org/doi/10.1021/acs.langmuir.4c03966"
      }
    ],
    "order": 965
  },
  {
    "id": "2025-sandipan-s-formal-unipv-appointment-concludes",
    "date": "2025-01-01",
    "datePrecision": "year",
    "category": "people",
    "title": "Sandipan Chattaraj begins a new chapter",
    "blurb": "After helping build SPL's computational-mechanics programme, Sandipan Chattaraj is beginning a new chapter while continuing to collaborate with the group. We thank him for his lasting contribution and wish him every success.",
    "links": [
      {
        "label": "IESL-FORTH profile",
        "href": "https://www.iesl.forth.gr/en/people/chattaraj-sandipan"
      }
    ],
    "people": [
      "Sandipan Chattaraj"
    ],
    "order": 964
  },
  {
    "id": "2025-moises-di-sante-becomes-tenure-track-assistant-professor",
    "date": "2025-01-01",
    "datePrecision": "year",
    "category": "people",
    "title": "Moises Di Sante becomes a tenure-track assistant professor",
    "blurb": "Congratulations to Moises Di Sante on his appointment as a tenure-track assistant professor (RTT) at the University of Pavia, recognizing his growing leadership in stem-cell biology, genome editing, and engineered human models at SPL.",
    "links": [
      {
        "label": "UniPV researcher profile",
        "href": "https://iris.unipv.it/cris/rp/rp374521"
      }
    ],
    "people": [
      "Moises Di Sante"
    ],
    "order": 964.2
  },
  {
    "id": "2025-daniela-canevari-transitions-to-a-wider-university-role",
    "date": "2025-01-01",
    "datePrecision": "year",
    "category": "people",
    "title": "Daniela Canevari transitions to a wider University role",
    "blurb": "After supporting SPL's project administration and reporting, Daniela Canevari transitions to a wider University of Pavia role while continuing to help with selected lab projects. We thank her warmly for her work with the group.",
    "links": [
      {
        "label": "DICAr administration",
        "href": "https://dicar.dip.unipv.it/en/department/organization/administrative-divisions"
      }
    ],
    "people": [
      "Daniela Canevari"
    ],
    "topics": [
      "Lab operations"
    ],
    "order": 964.1
  },
  {
    "id": "2024-hydra-preprint",
    "date": "2024-12-01",
    "datePrecision": "month",
    "category": "research",
    "title": "HYDRA preprint",
    "blurb": "The HYDRA preprint introduces robotic fabrication of thin, planar hydrogels in standard multiwell plates for physiologically relevant high-throughput drug testing.",
    "links": [
      {
        "label": "bioRxiv",
        "href": "https://doi.org/10.1101/2024.12.22.629679"
      }
    ],
    "order": 963
  },
  {
    "id": "2024-calipers-preprint",
    "date": "2024-12-01",
    "datePrecision": "month",
    "category": "research",
    "title": "CALIPERS preprint",
    "blurb": "The CALIPERS preprint introduces cell-cycle-aware live imaging for phenotyping and regeneration studies, linking multiplexed FUCCI reporters with reproducible analysis.",
    "links": [
      {
        "label": "bioRxiv",
        "href": "https://doi.org/10.1101/2024.12.19.629259"
      }
    ],
    "order": 962
  },
  {
    "id": "2024-chimwemwe-msosa-completes-his-spl-visit",
    "date": "2024-12-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Chimwemwe Msosa completes his SPL visit",
    "blurb": "After three months of modeling pathogen–host interactions with SPL, Chimwemwe Msosa returns to Malawi. We thank him for a wonderful visit and wish him the very best in his next adventure.",
    "links": [
      {
        "label": "MUBAS profile",
        "href": "https://rsu.mubas.ac.mw/team-members/assoc-prof-save-kumwenda/"
      }
    ],
    "people": [
      "Chimwemwe Msosa"
    ],
    "topics": [
      "Visitors"
    ],
    "order": 961
  },
  {
    "id": "2024-cardinal-begins",
    "date": "2024-11-01",
    "datePrecision": "month",
    "category": "funding",
    "title": "CARDINAL begins",
    "blurb": "SPL joins CARDINAL, a new European research programme developing advanced tools and models for more predictive, human-relevant biomedical research.",
    "links": [
      {
        "label": "CARDINAL on CORDIS",
        "href": "https://cordis.europa.eu/project/id/101153603"
      }
    ],
    "order": 960
  },
  {
    "id": "2024-sara-begins-her-phd",
    "date": "2024-10-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Sara begins her PhD",
    "blurb": "Congratulations to Sara Rigolli, who continues with SPL as a PhD student after completing her master's thesis on materials and microfabrication with the group.",
    "links": [
      {
        "label": "Master's thesis",
        "href": "https://unitesi.unipv.it/handle/20.500.14239/33222"
      }
    ],
    "people": [
      "Sara Rigolli"
    ],
    "order": 959
  },
  {
    "id": "2024-tehreem-begins-her-one-health-phd",
    "date": "2024-10-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Tehreem begins her One Health PhD",
    "blurb": "Welcome to Tehreem Ali, who joins SPL through the One Health PhD programme, focusing on bioinformatics, single-cell transcriptomics, and spatial transcriptomics.",
    "links": [
      {
        "label": "Official One Health PhD page",
        "href": "https://spmsf.dip.unipv.it/it/didattica/post-laurea/dottorati-di-ricerca/one-health-approaches-infectious-diseases-and-life-107"
      }
    ],
    "people": [
      "Tehreem Ali"
    ],
    "order": 958
  },
  {
    "id": "2024-saranya-concludes-her-spl-fellowship",
    "date": "2024-10-01",
    "datePrecision": "year",
    "category": "people",
    "title": "Saranya Vasudevan moves on from SPL",
    "blurb": "We thank Saranya Vasudevan for her contributions to computational modeling of biomaterials and engineered culture platforms during her time with SPL, and wish her every success in her next chapter.",
    "links": [
      {
        "label": "IIT profile",
        "href": "https://www.iit.it/people-details/-/people/saranya-vasudevan"
      }
    ],
    "people": [
      "Saranya Vasudevan"
    ],
    "order": 957
  },
  {
    "id": "2024-human-cell-atlas-and-ecm-atlas-meeting",
    "date": "2024-10-01",
    "datePrecision": "month",
    "dateLabel": "September–October 2024",
    "category": "events",
    "title": "Human Cell Atlas and ECM Atlas meeting",
    "blurb": "Francesco presented SPL's work at the Human Cell Atlas meeting, contributing an extracellular-matrix perspective to the effort to map human cells in their native physical and molecular context.",
    "links": [
      {
        "label": "Human Cell Atlas meeting agenda",
        "href": "https://www.humancellatlas.org/wp-content/uploads/2024/12/2024_09_29-30-HCA-General-Meeting-Agenda.pdf"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 956
  },
  {
    "id": "2024-mbe24",
    "date": "2024-09-01",
    "datePrecision": "month",
    "category": "events",
    "title": "MBE24",
    "blurb": "Francesco gave an invited presentation at MBE24, sharing SPL's approach to combining engineered tissue systems, imaging, and computational biophysics.",
    "links": [
      {
        "label": "MBE24",
        "href": "https://mbe2024.sciencesconf.org/"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 955
  },
  {
    "id": "2024-chimwemwe-msosa-visits-spl",
    "date": "2024-09-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Chimwemwe Msosa visits SPL",
    "blurb": "Welcome to Chimwemwe Msosa from the Malawi University of Business and Applied Sciences, who joins SPL for a CICOPS research visit focused on analytical models of pathogen–host interactions.",
    "links": [
      {
        "label": "MUBAS profile",
        "href": "https://rsu.mubas.ac.mw/team-members/assoc-prof-save-kumwenda/"
      }
    ],
    "people": [
      "Chimwemwe Msosa"
    ],
    "topics": [
      "Visitors"
    ],
    "order": 954
  },
  {
    "id": "2024-nanoinnovation",
    "date": "2024-09-01",
    "datePrecision": "month",
    "category": "events",
    "title": "NanoInnovation",
    "blurb": "Francesco presented SPL's work at NanoInnovation 2024, connecting engineered biomaterials and high-throughput tissue models with Italy's nanotechnology community.",
    "links": [
      {
        "label": "NanoInnovation 2024 abstract",
        "href": "https://www.nanoinnovation2024.eu/home/ABS/New%20Engineering%20Tools%20to%20Study%20Cell-ECM%20Interactions%20in-vitro.pdf"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 953
  },
  {
    "id": "2024-active-stress-cardiac-shell-model",
    "date": "2024-08-01",
    "datePrecision": "month",
    "category": "research",
    "title": "active-stress cardiac shell model",
    "blurb": "Our active-stress isogeometric shell model is published in Mechanics of Materials, enabling efficient simulations of muscular thin films and cardiac electromechanics.",
    "links": [
      {
        "label": "Mechanics of Materials",
        "href": "https://www.sciencedirect.com/science/article/pii/S0167663624001388"
      }
    ],
    "order": 952
  },
  {
    "id": "2024-soft-skills-presentation",
    "date": "2024-07-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Soft Skills presentation",
    "blurb": "Francesco presented on the human and creative skills behind interdisciplinary research, reflecting on how teams turn scientific imagination into reproducible engineering.",
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 951
  },
  {
    "id": "2024-moises-at-the-isscr-annual-meeting",
    "date": "2024-07-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Moises at the ISSCR Annual Meeting",
    "blurb": "Moises presented SPL's work at ISSCR 2024 in Hamburg, introducing an engineered human stem-cell line for tracking structure, function, and cell-cycle progression during development and morphogenesis.",
    "links": [
      {
        "label": "ISSCR 2024",
        "href": "https://www.isscr.org/upcoming-programs/isscr-2024"
      },
      {
        "label": "Moises's UniPV CV",
        "href": "https://unipv.unifind.cineca.it/v1/dataservice/files/ugovcv/DI%20SANTE_MOISES_en_93404.pdf"
      }
    ],
    "people": [
      "Moises Di Sante"
    ],
    "order": 950
  },
  {
    "id": "2024-francesco-at-the-european-society-of-biomechanics-congress",
    "date": "2024-07-01",
    "datePrecision": "month",
    "dateLabel": "June–July 2024",
    "category": "events",
    "title": "Francesco at the European Society of Biomechanics Congress",
    "blurb": "Francesco presented SPL's work at the European Society of Biomechanics Congress in Edinburgh, connecting subcellular-element models with multiscale cell and tissue mechanics in morphogenesis.",
    "links": [
      {
        "label": "ESB 2024 programme",
        "href": "https://biomechanik-kongress.de/wp-content/uploads/sites/26/2024/06/ESB_2024_conference_brochure.pdf"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 949
  },
  {
    "id": "2024-bohdana-concludes-her-spl-phd-period",
    "date": "2024-06-01",
    "datePrecision": "year",
    "category": "people",
    "title": "Bohdana Horda moves on from SPL",
    "blurb": "We thank Bohdana Horda for her work on hydrogel fabrication and engineered cell-culture platforms during her time with SPL, and wish her every success in her next chapter.",
    "people": [
      "Bohdana Horda"
    ],
    "order": 948
  },
  {
    "id": "2024-cimtec-invited-presentation",
    "date": "2024-06-01",
    "datePrecision": "month",
    "category": "events",
    "title": "CIMTEC invited presentation",
    "blurb": "Francesco gave an invited presentation at CIMTEC, sharing SPL's work on engineered matrices and scalable human tissue models.",
    "links": [
      {
        "label": "CIMTEC 2024 invited speakers",
        "href": "https://2024.cimtec-congress.org/invited-speakers"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 947
  },
  {
    "id": "2024-moises-at-sibbm-frontiers-in-molecular-biology",
    "date": "2024-06-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Moises at SIBBM Frontiers in Molecular Biology",
    "blurb": "Moises presented SPL's work at SIBBM Frontiers in Molecular Biology in Trento, bringing the TEMPO engineered stem-cell platform to a community studying development, homeostasis, and ageing.",
    "links": [
      {
        "label": "SIBBM 2024 programme",
        "href": "https://sibbm2024.azuleon.org/programme"
      }
    ],
    "people": [
      "Moises Di Sante"
    ],
    "order": 946
  },
  {
    "id": "2024-claudia-marenco-presents-in-the-through-the-looking-glass-seminar-series",
    "date": "2024-05-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Claudia Marenco presents in the Through the Looking Glass seminar series",
    "blurb": "Claudia Marenco presented ‘ERC Frontier Research’ in SPL's Through the Looking Glass seminar series, opening a discussion about frontier funding and the conditions that help ambitious research thrive.",
    "people": [
      "Claudia Marenco"
    ],
    "topics": [
      "Through the Looking Glass seminar series",
      "Visitors"
    ],
    "order": 945
  },
  {
    "id": "2024-unlooc-kickoff",
    "date": "2024-05-01",
    "datePrecision": "month",
    "category": "funding",
    "title": "UNLOOC kickoff",
    "blurb": "UNLOOC is underway. SPL joins a European consortium working to unlock the data content of organ-on-chip systems and make complex models more useful for biomedical discovery.",
    "links": [
      {
        "label": "UNLOOC on CORDIS",
        "href": "https://cordis.europa.eu/project/id/101140192"
      }
    ],
    "order": 944
  },
  {
    "id": "2024-hipscmore-begins",
    "date": "2024-05-01",
    "datePrecision": "month",
    "category": "funding",
    "title": "hiPSCmore begins",
    "blurb": "SPL has received an ERC Proof of Concept grant for hiPSCmore, advancing instrumented human stem cells for richer readouts in high-throughput drug discovery and regenerative medicine.",
    "links": [
      {
        "label": "hiPSCmore on CORDIS",
        "href": "https://cordis.europa.eu/project/id/101158039"
      }
    ],
    "order": 943
  },
  {
    "id": "2024-francesco-and-melissa-at-focus-on-microscopy",
    "date": "2024-03-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Francesco and Melissa at Focus on Microscopy",
    "blurb": "Francesco and Melissa presented SPL's work at Focus on Microscopy 2024 in Genoa, sharing new imaging tools for morphogenesis and smarter live imaging of cell division.",
    "links": [
      {
        "label": "Focus on Microscopy 2024",
        "href": "https://www.focusonmicroscopy.org/2024-home/"
      },
      {
        "label": "official programme",
        "href": "https://www.focusonmicroscopy.org/2024-program-online/?event_id=5817"
      }
    ],
    "people": [
      "Francesco S. Pasqualini",
      "Melissa Pezzotti"
    ],
    "order": 941
  },
  {
    "id": "2024-francesco-and-eloisa-at-nanoengineering-for-mechanobiology",
    "date": "2024-03-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Francesco and Eloisa at Nanoengineering for Mechanobiology",
    "blurb": "Francesco and Eloisa presented SPL's work at Nanoengineering for Mechanobiology in Camogli, connecting new approaches to morphogenesis with automated hydrogel culture for high-throughput screening.",
    "links": [
      {
        "label": "N4M 2024 programme",
        "href": "https://n4m.mechanobiology.eu/2024/assets/program.pdf"
      },
      {
        "label": "abstracts",
        "href": "https://n4m.mechanobiology.eu/2024/assets/abstracts.pdf"
      }
    ],
    "people": [
      "Francesco S. Pasqualini",
      "Eloisa Torchia"
    ],
    "order": 940
  },
  {
    "id": "2024-emanuele-begins-his-spl-linked-phd",
    "date": "2024-03-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Emanuele begins his SPL-linked PhD",
    "blurb": "Emanuele Carnevale Baraglia continues with SPL as a PhD student, developing computational models that connect organelle physiology with experimentally testable mechanisms.",
    "links": [
      {
        "label": "Associated open-science paper",
        "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12141144/"
      }
    ],
    "people": [
      "Emanuele Carnevale Baraglia"
    ],
    "order": 939
  },
  {
    "id": "2024-when-art-and-science-collide",
    "date": "2024-03-01",
    "datePrecision": "month",
    "category": "research",
    "title": "When art and science collide",
    "blurb": "When art and science collide is published in Biophysical Reviews, reflecting on how visualization, creativity, and experimental discipline belong to one scientific practice.",
    "links": [
      {
        "label": "Biophysical Reviews",
        "href": "https://pubs.aip.org/aip/bpr/article/5/1/010401/3268673/When-art-and-science-collide"
      }
    ],
    "topics": [
      "Art and science"
    ],
    "order": 938
  },
  {
    "id": "2024-loris-rizzello-presents-in-the-through-the-looking-glass-seminar-series",
    "date": "2024-02-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Loris Rizzello presents in the Through the Looking Glass seminar series",
    "blurb": "Loris Rizzello presented his work on host–pathogen interactions and nanotechnology-based approaches to infectious and pandemic diseases in SPL's Through the Looking Glass seminar series.",
    "links": [
      {
        "label": "Loris Rizzello at the University of Milan",
        "href": "https://infectiondynamics.unimi.it/profilo/loris-rizzello/"
      }
    ],
    "people": [
      "Loris Rizzello"
    ],
    "topics": [
      "Through the Looking Glass seminar series",
      "Visitors"
    ],
    "order": 937
  },
  {
    "id": "2023-sem2-published",
    "date": "2023-12-01",
    "datePrecision": "month",
    "category": "research",
    "title": "SEM² published",
    "blurb": "SEM² is published in APL Bioengineering, introducing coarse-grained homogeneous particle dynamics as an accessible route for bringing mechanics into cell and tissue models.",
    "links": [
      {
        "label": "PubMed",
        "href": "https://pubmed.ncbi.nlm.nih.gov/38075209/"
      }
    ],
    "order": 936
  },
  {
    "id": "2023-gianni-ciofani-presents-in-the-through-the-looking-glass-seminar-series",
    "date": "2023-12-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Gianni Ciofani presents in the Through the Looking Glass seminar series",
    "blurb": "Gianni Ciofani presented in SPL's Through the Looking Glass seminar series, exploring how active nanomaterials can be used for cancer therapy and the remote manipulation of cellular functions.",
    "links": [
      {
        "label": "Gianni Ciofani at IIT",
        "href": "https://www.iit.it/en-US/staff/-/people/gianni-ciofani"
      }
    ],
    "people": [
      "Gianni Ciofani"
    ],
    "topics": [
      "Through the Looking Glass seminar series",
      "Visitors"
    ],
    "order": 935
  },
  {
    "id": "2023-kay-oliver-schink-presents-in-the-through-the-looking-glass-seminar-series",
    "date": "2023-11-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Kay Oliver Schink presents in the Through the Looking Glass seminar series",
    "blurb": "Kay Oliver Schink presented in SPL's Through the Looking Glass seminar series, showing how phosphoinositide switches control the earliest stages of macropinocytosis.",
    "links": [
      {
        "label": "Kay Oliver Schink",
        "href": "https://nva.sikt.no/research-profile/314315"
      }
    ],
    "people": [
      "Kay Oliver Schink"
    ],
    "topics": [
      "Through the Looking Glass seminar series",
      "Visitors"
    ],
    "order": 934
  },
  {
    "id": "2023-isogeometric-heart-biophysics-review",
    "date": "2023-11-01",
    "datePrecision": "month",
    "category": "research",
    "title": "isogeometric heart-biophysics review",
    "blurb": "Our featured review in Biophysical Reviews surveys progress toward isogeometric models that connect cardiac anatomy, mechanics, and electrophysiology.",
    "links": [
      {
        "label": "Biophysical Reviews",
        "href": "https://pubs.aip.org/aip/bpr/article/4/4/041301/2920944/Current-progress-toward-isogeometric-modeling-of"
      }
    ],
    "order": 933
  },
  {
    "id": "2023-manuela-raimondi-presents-in-the-through-the-looking-glass-seminar-series",
    "date": "2023-11-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Manuela Raimondi presents in the Through the Looking Glass seminar series",
    "blurb": "Manuela Raimondi presented in SPL's Through the Looking Glass seminar series, sharing frontier platforms for experimental cell modelling and more human-relevant biomedical research.",
    "links": [
      {
        "label": "Manuela Raimondi at Politecnico di Milano",
        "href": "https://www.cmic.polimi.it/persone/docenti-e-ricercatori/raimondi-manuela-teresa/"
      }
    ],
    "people": [
      "Manuela Raimondi"
    ],
    "topics": [
      "Through the Looking Glass seminar series",
      "Visitors"
    ],
    "order": 932
  },
  {
    "id": "2023-musplit-at-iccv",
    "date": "2023-10-01",
    "datePrecision": "month",
    "category": "research",
    "title": "μSplit at ICCV",
    "blurb": "μSplit appears in the ICCV 2023 proceedings, introducing image decomposition for fluorescence microscopy and a new route to separating signals computationally.",
    "links": [
      {
        "label": "Open-access ICCV paper",
        "href": "https://openaccess.thecvf.com/content/ICCV2023/html/Ashesh_uSplit_Image_Decomposition_for_Fluorescence_Microscopy_ICCV_2023_paper.html"
      }
    ],
    "order": 931
  },
  {
    "id": "2023-seeing-is-believing",
    "date": "2023-10-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Seeing Is Believing",
    "blurb": "Francesco presented SPL's work at Seeing Is Believing, joining an international microscopy community focused on making dynamic biology visible.",
    "links": [
      {
        "label": "EMBO | EMBL symposium",
        "href": "https://www.embl.org/about/info/course-and-conference-office/events/EES23-09/"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 930
  },
  {
    "id": "2023-daniela-canevari-begins-supporting-spl-projects",
    "date": "2023-09-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Daniela Canevari begins supporting SPL projects",
    "blurb": "Welcome to Daniela Canevari, who joins SPL's project-support team and strengthens the connection between the lab and University administration.",
    "links": [
      {
        "label": "DICAr administration",
        "href": "https://dicar.dip.unipv.it/en/department/organization/administrative-divisions"
      }
    ],
    "people": [
      "Daniela Canevari"
    ],
    "topics": [
      "Lab operations"
    ],
    "order": 929
  },
  {
    "id": "2023-julius-zimmermann-joins-spl",
    "date": "2023-09-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Julius Zimmermann joins SPL",
    "blurb": "Welcome to Julius Zimmermann, who joins SPL from the University of Rostock to develop bioimage-analysis and computational tools for live-cell experiments.",
    "links": [
      {
        "label": "University of Rostock profile",
        "href": "https://www.iae.uni-rostock.de/zimmermann/"
      }
    ],
    "people": [
      "Julius Zimmermann"
    ],
    "order": 928
  },
  {
    "id": "2023-nanoinnovation",
    "date": "2023-09-01",
    "datePrecision": "month",
    "category": "events",
    "title": "NanoInnovation",
    "blurb": "Francesco presented SPL's work at NanoInnovation 2023 and helped convene a session connecting nanotechnology, biomaterials, and human tissue models.",
    "links": [
      {
        "label": "NanoInnovation 2023 programme",
        "href": "https://www.nanoinnovation2023.eu/home/DOWNLOAD/PROGRAM_BOOK_2023_updated_11-9-2023.pdf"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 927
  },
  {
    "id": "2023-esb-ita",
    "date": "2023-09-01",
    "datePrecision": "month",
    "category": "events",
    "title": "ESB-ITA",
    "blurb": "Francesco presented SPL's work at the ESB-ITA meeting, sharing engineered biomaterials and tissue-model research with Italy's biomaterials community.",
    "links": [
      {
        "label": "ESB-ITA 2023 programme",
        "href": "https://www.esb-ita.it/esb-ita23-home/esb-ita23-programme/"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 926
  },
  {
    "id": "2023-transducers-2023",
    "date": "2023-06-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Transducers 2023",
    "blurb": "Alessandro Enrico presented SPL's work at Transducers 2023, connecting engineered physiological systems with the international sensors and microsystems community.",
    "links": [
      {
        "label": "Transducers 2023 programme",
        "href": "https://www.transducersconferences.org/archive/transducers2023/files/Transducers2023_Program.pdf"
      }
    ],
    "people": [
      "Alessandro Enrico"
    ],
    "order": 925
  },
  {
    "id": "2023-mixed-isogeometric-collocation-paper",
    "date": "2023-06-01",
    "datePrecision": "month",
    "category": "research",
    "title": "mixed isogeometric collocation paper",
    "blurb": "Our mixed isogeometric collocation method is published, enabling efficient finite-deformation electromechanical simulations for cardiac muscle.",
    "links": [
      {
        "label": "Computer Methods in Applied Mechanics and Engineering",
        "href": "https://www.sciencedirect.com/science/article/pii/S0045782523001792"
      }
    ],
    "order": 924
  },
  {
    "id": "2023-saranya-vasudevan-joins-spl",
    "date": "2023-05-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Saranya Vasudevan joins SPL",
    "blurb": "Welcome to Saranya Vasudevan, who joins SPL as a postdoctoral research fellow to model how cells interact with engineered matrices and culture platforms.",
    "links": [
      {
        "label": "UniPV fellowship result",
        "href": "https://detac.unipv.it/archivi/dicar.unipv.it/wp-content/uploads/2023/02/22-277approvazioneGraduatoria.pdf"
      },
      {
        "label": "current IIT profile",
        "href": "https://www.iit.it/people-details/-/people/saranya-vasudevan"
      }
    ],
    "people": [
      "Saranya Vasudevan",
      "Sara Rigolli"
    ],
    "order": 923
  },
  {
    "id": "2023-alessandro-bertero-presents-in-the-through-the-looking-glass-seminar-series",
    "date": "2023-04-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Alessandro Bertero presents in the Through the Looking Glass seminar series",
    "blurb": "Alessandro Bertero presented in SPL's Through the Looking Glass seminar series, exploring the functional dynamics of chromatin topology in the human heart.",
    "links": [
      {
        "label": "Alessandro Bertero at the University of Turin",
        "href": "https://www.dmbhs.unito.it/persone/alessandro.bertero"
      }
    ],
    "people": [
      "Alessandro Bertero"
    ],
    "topics": [
      "Through the Looking Glass seminar series",
      "Visitors"
    ],
    "order": 922
  },
  {
    "id": "2023-alessandro-enrico-joins-spl",
    "date": "2023-04-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Alessandro Enrico joins SPL",
    "blurb": "Welcome to Alessandro Enrico, who joins SPL from KTH Royal Institute of Technology to work across materials science, laser fabrication, and high-throughput tissue-engineering research.",
    "links": [
      {
        "label": "UniPV profile",
        "href": "https://unipv.unifind.cineca.it/get/person/061387"
      }
    ],
    "people": [
      "Alessandro Enrico"
    ],
    "order": 921
  },
  {
    "id": "2023-immersed-isogeometric-analysis-paper",
    "date": "2023-02-01",
    "datePrecision": "month",
    "category": "research",
    "title": "immersed isogeometric analysis paper",
    "blurb": "Our hybrid immersed isogeometric method is published, combining collocation and finite-cell ideas for efficient analysis on complex geometries.",
    "links": [
      {
        "label": "Computer Methods in Applied Mechanics and Engineering",
        "href": "https://www.sciencedirect.com/science/article/pii/S004578252200812X"
      }
    ],
    "order": 920
  },
  {
    "id": "2023-reset-grant",
    "date": "2023-01-01",
    "datePrecision": "year",
    "category": "funding",
    "title": "RESET grant",
    "blurb": "SPL has received PRIN support for RESET, a project investigating whether modulating senescent macrophages can help resolve persistent infection.",
    "links": [
      {
        "label": "RESET project record",
        "href": "https://expertise.unimi.it/resource/project/PRIN202223LRIZZ_01?language=it-IT"
      }
    ],
    "order": 919
  },
  {
    "id": "2022-elisa-cimetta-presents-in-the-through-the-looking-glass-seminar-series",
    "date": "2022-11-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Elisa Cimetta presents in the Through the Looking Glass seminar series",
    "blurb": "Elisa Cimetta presented her work on microscale technologies, microfluidic culture platforms, and advanced biological models for developing and testing new drugs and therapies in SPL's Through the Looking Glass seminar series.",
    "links": [
      {
        "label": "BIAMET research group at the University of Padua",
        "href": "https://research.dii.unipd.it/biamet/?page_id=213"
      }
    ],
    "people": [
      "Elisa Cimetta"
    ],
    "topics": [
      "Through the Looking Glass seminar series",
      "Visitors"
    ],
    "order": 918
  },
  {
    "id": "2022-florian-jug-presents-in-the-through-the-looking-glass-seminar-series",
    "date": "2022-11-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Florian Jug presents in the Through the Looking Glass seminar series",
    "blurb": "Florian Jug presented his work on artificial intelligence and machine learning for quantitative bioimage analysis and open microscopy software in SPL's Through the Looking Glass seminar series, beginning conversations that would grow into a productive long-term collaboration.",
    "links": [
      {
        "label": "Florian Jug at Human Technopole",
        "href": "https://humantechnopole.it/en/people/florian-jug/"
      }
    ],
    "people": [
      "Florian Jug"
    ],
    "topics": [
      "Through the Looking Glass seminar series",
      "Visitors"
    ],
    "order": 917
  },
  {
    "id": "2022-bohdana-horda-begins-her-phd-with-spl",
    "date": "2022-10-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Bohdana Horda begins her PhD with SPL",
    "blurb": "Congratulations to Bohdana Horda, who continues with SPL as a PhD student working on hydrogel fabrication and engineered cell-culture platforms.",
    "links": [
      {
        "label": "UniPV thesis listing",
        "href": "https://unitesi.unipv.it/browse?authority=do7833&type=contributorSupervisor"
      }
    ],
    "people": [
      "Bohdana Horda"
    ],
    "order": 916
  },
  {
    "id": "2022-melissa-visits-the-chan-zuckerberg-biohub",
    "date": "2022-09-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Melissa visits the Chan Zuckerberg Biohub",
    "blurb": "Melissa Pezzotti visited the Chan Zuckerberg Biohub to assemble and test an open light-sheet microscope, bringing new volumetric-imaging capability back to SPL.",
    "links": [
      {
        "label": "Chan Zuckerberg Biohub story",
        "href": "https://biohub.org/life-science/calling-all-lego-builders-put-your-skills-to-use-assembling-a-light-sheet-microscope/"
      }
    ],
    "people": [
      "Melissa Pezzotti"
    ],
    "topics": [
      "Research visits"
    ],
    "order": 915
  },
  {
    "id": "2022-termis-eu-invited-presentation",
    "date": "2022-07-01",
    "datePrecision": "month",
    "dateLabel": "June–July 2022",
    "category": "events",
    "title": "TERMIS-EU invited presentation",
    "blurb": "Francesco gave the invited presentation ‘Lessons learned on how (not) to build a heart’ at TERMIS-EU 2022, reflecting on the opportunities and productive failures of cardiac tissue engineering.",
    "links": [
      {
        "label": "TERMIS conference book",
        "href": "https://eu2022.termis.org/wp-content/uploads/2022/06/termis2022-krakow-conference-book.pdf"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 914
  },
  {
    "id": "2022-alice-albini-concludes-her-spl-support-role",
    "date": "2022-06-01",
    "datePrecision": "year",
    "category": "people",
    "title": "Alice Albini moves into a new University role",
    "blurb": "Alice Albini moves into a new University of Pavia role after helping SPL establish its grant and reporting operations. We thank her warmly and wish her every success in her next chapter.",
    "links": [
      {
        "label": "UniPV IEIE page",
        "href": "https://phdieie.unipv.it/academic-board/"
      }
    ],
    "people": [
      "Alice Albini"
    ],
    "topics": [
      "Lab operations"
    ],
    "order": 913
  },
  {
    "id": "2022-moises-di-sante-becomes-non-tenure-track-assistant-professor",
    "date": "2022-01-01",
    "datePrecision": "year",
    "category": "people",
    "title": "Moises Di Sante becomes a non-tenure-track assistant professor",
    "blurb": "Congratulations to Moises Di Sante on his appointment as a non-tenure-track assistant professor (RTDa) at the University of Pavia, strengthening his role in SPL's stem-cell, genome-editing, and molecular-biology research.",
    "links": [
      {
        "label": "Official UniPV CV",
        "href": "https://unipv.unifind.cineca.it/v1/dataservice/files/ugovcv/DI%20SANTE_MOISES_en_93404.pdf"
      }
    ],
    "people": [
      "Moises Di Sante"
    ],
    "order": 912.5
  },
  {
    "id": "2022-emerging-strategies-in-3d-printed-tissue-models",
    "date": "2022-01-01",
    "datePrecision": "year",
    "category": "research",
    "title": "emerging strategies in 3D-printed tissue models",
    "blurb": "Our book chapter reviews emerging strategies for 3D-printed tissue models and the path from fabrication technique to useful in-vitro biomedical research.",
    "links": [
      {
        "label": "ScienceDirect chapter",
        "href": "https://www.sciencedirect.com/science/article/pii/B9780323854306000078"
      }
    ],
    "order": 912
  },
  {
    "id": "2022-efficient-cardiac-electrophysiology-simulation",
    "date": "2022-04-01",
    "datePrecision": "month",
    "category": "research",
    "title": "efficient cardiac-electrophysiology simulation",
    "blurb": "Our efficient isogeometric collocation framework for cardiac electrophysiology is published, reducing computational cost while preserving the geometry and dynamics needed for heart models.",
    "links": [
      {
        "label": "Computer Methods in Applied Mechanics and Engineering",
        "href": "https://www.sciencedirect.com/science/article/pii/S0045782522001220"
      }
    ],
    "order": 911
  },
  {
    "id": "2022-human-tissue-models-review",
    "date": "2022-01-01",
    "datePrecision": "month",
    "category": "research",
    "title": "human tissue models review",
    "blurb": "Our review of organotypic and microphysiological human tissue models is published, surveying the state of the art and the steps needed to make these systems more useful for drug discovery.",
    "links": [
      {
        "label": "PubMed",
        "href": "https://pubmed.ncbi.nlm.nih.gov/35017176/"
      }
    ],
    "order": 910
  },
  {
    "id": "2022-lights-funding",
    "date": "2022-01-01",
    "datePrecision": "year",
    "category": "funding",
    "title": "LigHTS funding",
    "blurb": "SPL has received MUR FARE support for LigHTS, an all-optical platform for engineering human tissue models at ultra-high-throughput screening scale.",
    "links": [
      {
        "label": "MUR FARE award decree",
        "href": "https://www.mur.gov.it/sites/default/files/2022-11/Decreto%20Direttoriale%20n.%20398%20del%2024-10-2022.pdf"
      }
    ],
    "order": 909
  },
  {
    "id": "2022-cardio-screen-funding",
    "date": "2022-01-01",
    "datePrecision": "year",
    "category": "funding",
    "title": "CARDIO-SCREEN funding",
    "blurb": "SPL joins CARDIO-SCREEN to combine engineered human tissues and computational models for screening DNA- and RNA-based therapies in cardiometabolic disease.",
    "links": [
      {
        "label": "National Center for RNA and Gene Therapy — Spoke 4",
        "href": "https://www.rna-genetherapy.eu/spokes/spoke-4/"
      }
    ],
    "order": 908
  },
  {
    "id": "2021-tackling-the-erc-paradox",
    "date": "2021-11-01",
    "datePrecision": "month",
    "category": "research",
    "title": "Tackling the ERC paradox",
    "blurb": "Francesco writes in Nature Careers about the ERC paradox: the freedom to build an ambitious research programme and the practical challenge of building the laboratory that can deliver it.",
    "links": [
      {
        "label": "Nature Careers",
        "href": "https://www.nature.com/articles/d43978-021-00140-4"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "topics": [
      "Research culture"
    ],
    "order": 907
  },
  {
    "id": "2021-usern-invited-presentation",
    "date": "2021-11-01",
    "datePrecision": "month",
    "category": "events",
    "title": "USERN invited presentation",
    "blurb": "Francesco gave an invited presentation at USERN, sharing SPL's vision for engineering human physiology from cells, materials, imaging, and computation.",
    "links": [
      {
        "label": "6th International USERN Congress",
        "href": "https://usern.org/blog/73/the-6th-international-usern-congress-llnc"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 906
  },
  {
    "id": "2021-johan-lind-opens-the-through-the-looking-glass-seminar-series",
    "date": "2021-11-01",
    "datePrecision": "month",
    "category": "events",
    "title": "Johan Lind opens the Through the Looking Glass seminar series",
    "blurb": "Johan U. Lind opened SPL's Through the Looking Glass seminar series by presenting his work on bioprinting, microphysiological tissue models, and functional materials that integrate living cells with engineered systems.",
    "links": [
      {
        "label": "Tailored Materials and Tissues group at DTU",
        "href": "https://www.healthtech.dtu.dk/research/research-sections/section-cell-and-drug-technologies/group-tailored-materials-and-tissues"
      }
    ],
    "people": [
      "Johan U. Lind"
    ],
    "topics": [
      "Through the Looking Glass seminar series",
      "Visitors"
    ],
    "order": 905
  },
  {
    "id": "2021-ahmed-concludes-his-spl-fellowship",
    "date": "2021-10-01",
    "datePrecision": "year",
    "category": "people",
    "title": "Ahmed S. Khalil moves on from SPL",
    "blurb": "We thank Ahmed S. Khalil for contributing computational and high-performance-computing expertise during SPL's first year, and wish him every success in his next chapter.",
    "people": [
      "Ahmed S. Khalil"
    ],
    "order": 904
  },
  {
    "id": "2021-eloisa-and-melissa-begin-their-phds",
    "date": "2021-10-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Eloisa and Melissa begin their PhDs",
    "blurb": "Welcome to new PhD students Eloisa Torchia and Melissa Pezzotti, who join SPL's first doctoral cohort to develop engineered culture platforms, mechanobiology, and advanced live-imaging methods.",
    "links": [
      {
        "label": "XXXVII-cycle call",
        "href": "https://phd.unipv.it/2021/05/25/bando-di-concorso-xxxvii-ciclo-anno-accademico-2021-2022/"
      },
      {
        "label": "programme results",
        "href": "https://phd.unipv.it/design-modeling-and-simulation-in-engineering-esiti-concorso-xxxvii-ciclo/"
      }
    ],
    "people": [
      "Melissa Pezzotti",
      "Eloisa Torchia"
    ],
    "order": 903
  },
  {
    "id": "2021-highlight-funding",
    "date": "2021-01-01",
    "datePrecision": "year",
    "category": "funding",
    "title": "highLight funding",
    "blurb": "SPL is a founding laboratory for highLight, a Regione Lombardia-supported competence centre connecting bio- and nano-engineering with sustainable research and innovation.",
    "links": [
      {
        "label": "University of Pavia sustainability report",
        "href": "https://osa.unipv.it/wp-content/uploads/2025/01/Rapporto-di-Sostenibilita_def_singole_compressed.pdf"
      }
    ],
    "order": 902
  },
  {
    "id": "2021-laboratory-buildout-complete",
    "date": "2021-02-01",
    "datePrecision": "month",
    "category": "labLife",
    "title": "laboratory buildout complete",
    "blurb": "The first SPL laboratory buildout is complete. From an empty room to a working space for cell culture, imaging, fabrication, and computation, the lab is ready for experiments.",
    "links": [
      {
        "label": "SPL institutional page",
        "href": "https://dicar.dip.unipv.it/it/ricerca/linee-gruppi-e-laboratori-di-ricerca/laboratori-di-ricerca/spl"
      }
    ],
    "order": 901
  },
  {
    "id": "2021-moises-di-sante-joins-spl",
    "date": "2021-02-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Moises Di Sante joins SPL",
    "blurb": "Welcome to Moises Di Sante, who joins SPL from the University of Padua to build our stem-cell, genome-editing, and molecular-biology programme.",
    "links": [
      {
        "label": "Official UniPV CV",
        "href": "https://unipv.unifind.cineca.it/v1/dataservice/files/ugovcv/DI%20SANTE_MOISES_en_93404.pdf"
      }
    ],
    "people": [
      "Moises Di Sante"
    ],
    "order": 900
  },
  {
    "id": "2021-sandipan-chattaraj-joins-spl",
    "date": "2021-01-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Sandipan Chattaraj joins SPL",
    "blurb": "Welcome to Sandipan Chattaraj, who joins SPL from IIT Kanpur to develop particle-based and multiscale models of cells, nuclei, and engineered tissues.",
    "links": [
      {
        "label": "IESL-FORTH CV",
        "href": "https://www.iesl.forth.gr/sites/default/files/cv-en/short-CV-Sandipan.pdf"
      }
    ],
    "people": [
      "Sandipan Chattaraj"
    ],
    "order": 899
  },
  {
    "id": "2021-ahmed-s-khalil-joins-spl",
    "date": "2021-01-01",
    "datePrecision": "month",
    "category": "people",
    "title": "Ahmed S. Khalil joins SPL",
    "blurb": "Welcome to Ahmed S. Khalil, who joins SPL as a computational research fellow to develop high-performance methods for modeling biological systems.",
    "people": [
      "Ahmed S. Khalil"
    ],
    "order": 898
  },
  {
    "id": "2020-synbio-ecm-begins",
    "date": "2020-12-01",
    "datePrecision": "month",
    "category": "funding",
    "title": "SYNBIO.ECM begins",
    "blurb": "SYNBIO.ECM begins with ERC Starting Grant support, giving SPL five years to build designer matrices that programme healthy and diseased myocardial morphogenesis.",
    "links": [
      {
        "label": "SYNBIO.ECM on CORDIS",
        "href": "https://cordis.europa.eu/project/id/852560"
      }
    ],
    "order": 897
  },
  {
    "id": "2020-3d-printing-workshop",
    "date": "2020-09-01",
    "datePrecision": "month",
    "category": "events",
    "title": "3D-printing workshop",
    "blurb": "Francesco presented SPL's work at a 3D-printing workshop, sharing early ideas for using fabrication to build better experimental models of human tissues.",
    "links": [
      {
        "label": "5th Bioprinting Workshop",
        "href": "https://compmech.unipv.it/5th-bioprinting-workshop/"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 896
  },
  {
    "id": "2020-synthetic-physiology-lab-established",
    "date": "2020-06-01",
    "datePrecision": "month",
    "category": "labLife",
    "title": "Synthetic Physiology Lab established",
    "blurb": "The Synthetic Physiology Lab is established at the University of Pavia. Led by Francesco S. Pasqualini, SPL will combine human cells, engineered microenvironments, live imaging, and computational models to rebuild physiology from the bottom up.",
    "links": [
      {
        "label": "UniPV profile",
        "href": "https://unipv.unifind.cineca.it/resource/person/951912?language=it-IT"
      },
      {
        "label": "SPL institutional page",
        "href": "https://dicar.dip.unipv.it/it/ricerca/linee-gruppi-e-laboratori-di-ricerca/laboratori-di-ricerca/spl"
      }
    ],
    "people": [
      "Francesco S. Pasqualini"
    ],
    "order": 895
  }
];

export const sortedNewsArchive = [...newsArchive].sort((a, b) =>
  b.date.localeCompare(a.date) || (b.order ?? 0) - (a.order ?? 0),
);

export const archiveYears = [...new Set(sortedNewsArchive.map((entry) => entry.date.slice(0, 4)))];

export const entriesByYear = Object.fromEntries(
  archiveYears.map((year) => [year, sortedNewsArchive.filter((entry) => entry.date.startsWith(year))]),
) as Record<string, NewsEntry[]>;

export const featuredNews = sortedNewsArchive.find((entry) => entry.featured)!;
export const homepageNews = sortedNewsArchive.slice(0, 5);
export const recentNews = [featuredNews, ...sortedNewsArchive.filter((entry) => !entry.featured).slice(0, 17)];

export const formatNewsDate = (entry: Pick<NewsEntry, "date" | "datePrecision" | "dateLabel">) => {
  if (entry.dateLabel) return entry.dateLabel;
  const [year, month, day] = entry.date.split("-").map(Number);
  if (entry.datePrecision === "year") return String(year);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    ...(entry.datePrecision === "day" ? { day: "numeric" } : {}),
  }).format(date);
};
