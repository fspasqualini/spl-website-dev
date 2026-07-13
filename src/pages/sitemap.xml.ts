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
  const now = new Date().toISOString();
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((path) => {
      const loc = new URL(path, siteUrl).toString();
      const priority = path === "/" ? "1.0" : path === "/research/" ? "0.9" : "0.7";

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${now}</lastmod>`,
        "    <changefreq>weekly</changefreq>",
        `    <priority>${priority}</priority>`,
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
