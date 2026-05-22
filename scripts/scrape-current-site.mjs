import { mkdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const ORIGIN = "https://www.syntheticphysiologylab.com";
const PAGES = [
  { slug: "home", path: "/" },
  { slug: "research", path: "/research" },
  { slug: "team", path: "/team" },
  { slug: "publications", path: "/publications" },
  { slug: "creed", path: "/copia-di-publications" },
  { slug: "contact", path: "/contact" },
];

const outDir = new URL("../migration/current-site/", import.meta.url);
const assetDir = new URL("../public/assets/scraped/", import.meta.url);

function cleanText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function assetName(url, index) {
  const parsed = new URL(url);
  const raw = decodeURIComponent(parsed.pathname.split("/").pop() || "");
  const base = raw
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
  const ext = extname(base) || ".bin";
  return `${String(index).padStart(3, "0")}-${base || "asset"}${base.endsWith(ext) ? "" : ext}`;
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "SPL website migration scraper; contact: syntheticphysiologylab.com",
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }
  return await response.text();
}

await mkdir(outDir, { recursive: true });
await mkdir(assetDir, { recursive: true });

const manifest = {
  scrapedAt: new Date().toISOString(),
  origin: ORIGIN,
  pages: [],
  assets: [],
  gaps: [],
};

const assetUrls = [];

for (const page of PAGES) {
  const url = new URL(page.path, ORIGIN).toString();
  try {
    const html = await fetchText(url);
    await writeFile(new URL(`${page.slug}.html`, outDir), html);
    await writeFile(new URL(`${page.slug}.txt`, outDir), cleanText(html));

    const images = unique(
      [...html.matchAll(/(?:src|data-src|href)=["']([^"']+\.(?:png|jpe?g|webp|gif|svg)(?:\?[^"']*)?)["']/gi)]
        .map((match) => {
          try {
            return new URL(match[1], url).toString();
          } catch {
            return null;
          }
        })
    );
    const files = unique(
      [...html.matchAll(/href=["']([^"']+\.(?:pdf|docx?|pptx?|xlsx?)(?:\?[^"']*)?)["']/gi)]
        .map((match) => {
          try {
            return new URL(match[1], url).toString();
          } catch {
            return null;
          }
        })
    );

    assetUrls.push(...images);
    manifest.pages.push({
      slug: page.slug,
      url,
      html: `migration/current-site/${page.slug}.html`,
      text: `migration/current-site/${page.slug}.txt`,
      imageCount: images.length,
      fileLinks: files,
    });
  } catch (error) {
    manifest.gaps.push({ page: page.slug, url, issue: String(error) });
  }
}

let index = 1;
for (const url of unique(assetUrls)) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const bytes = new Uint8Array(await response.arrayBuffer());
    const name = assetName(url, index++);
    await writeFile(join(assetDir.pathname, name), bytes);
    manifest.assets.push({
      source: url,
      path: `/assets/scraped/${name}`,
      bytes: bytes.byteLength,
      contentType: response.headers.get("content-type"),
    });
  } catch (error) {
    manifest.gaps.push({ asset: url, issue: String(error) });
  }
}

await writeFile(new URL("manifest.json", outDir), JSON.stringify(manifest, null, 2));
await writeFile(
  new URL("NEEDS_ORIGINALS.md", outDir),
  [
    "# SPL Website Migration Gaps",
    "",
    "This file tracks scraped assets/content that should be replaced by originals or manually reviewed.",
    "",
    ...manifest.gaps.map((gap) => `- ${JSON.stringify(gap)}`),
    "",
    "Likely manual follow-up:",
    "- Original high-resolution SPL logo and brand kit colors.",
    "- Original laboratory/team images currently compressed by Wix.",
    "- Any embedded documents or forms not exposed as public static files.",
  ].join("\n")
);

console.log(JSON.stringify({
  pages: manifest.pages.length,
  assets: manifest.assets.length,
  gaps: manifest.gaps.length,
}, null, 2));
