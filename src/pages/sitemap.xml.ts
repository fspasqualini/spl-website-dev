import { archiveYears } from "../data/news";
import { researchAreas } from "../data/site";

const siteUrl = "https://syntheticphysiologylab.com";

const staticPaths = [
  "/",
  "/creed/",
  "/team/",
  "/research/",
  "/news/",
  "/news/archive/",
  "/publications/",
  "/contact/",
];

const researchPaths = researchAreas.map((area) => area.href);
const newsArchivePaths = archiveYears.map((year) => `/news/${year}/`);
const urls = [...new Set([...staticPaths, ...researchPaths, ...newsArchivePaths])];

export function GET() {
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((path) => {
      const loc = new URL(path, siteUrl).toString();

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        "  </url>",
      ].join("\n");
    }),
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
