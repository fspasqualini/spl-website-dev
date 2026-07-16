import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const siteUrl = "https://syntheticphysiologylab.com";
const errors = [];
const titles = new Map();

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? findHtmlFiles(entryPath) : [entryPath];
  }));
  return files.flat().filter((file) => file.endsWith(".html"));
}

function routeFor(file) {
  const relative = path.relative(distDir, file).split(path.sep).join("/");
  if (relative === "index.html") return "/";
  return `/${relative.replace(/index\.html$/, "")}`;
}

function firstMatch(html, expression) {
  return html.match(expression)?.[1]?.trim();
}

function textContent(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

for (const file of await findHtmlFiles(distDir)) {
  const html = await readFile(file, "utf8");
  const route = routeFor(file);
  const noindex = /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html);
  const title = firstMatch(html, /<title>([\s\S]*?)<\/title>/i);
  const description = firstMatch(html, /<meta\s+name="description"\s+content="([^"]+)"/i);
  const canonical = firstMatch(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);

  if (!title) errors.push(`${route}: missing title`);
  if (title && !noindex) {
    if (titles.has(title)) errors.push(`${route}: duplicate title also used by ${titles.get(title)}`);
    titles.set(title, route);
  }

  if (noindex) continue;

  if (!description) errors.push(`${route}: missing meta description`);
  if (canonical !== new URL(route, siteUrl).toString()) {
    errors.push(`${route}: canonical is ${canonical ?? "missing"}`);
  }

  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
  if (h1Count !== 1) errors.push(`${route}: expected one h1, found ${h1Count}`);

  const images = html.match(/<img\b[^>]*>/gi) ?? [];
  for (const image of images) {
    if (!/\salt="[^"]+"/i.test(image)) errors.push(`${route}: image is missing descriptive alt text: ${image}`);
    if (/\ssrc="[^"]*\/assets\//i.test(image) && (!/\swidth="\d+"/i.test(image) || !/\sheight="\d+"/i.test(image))) {
      errors.push(`${route}: local image is missing width or height: ${image}`);
    }
  }

  const jsonLdBlocks = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (jsonLdBlocks.length === 0) errors.push(`${route}: missing JSON-LD`);
  for (const [, json] of jsonLdBlocks) {
    try {
      JSON.parse(json);
    } catch (error) {
      errors.push(`${route}: invalid JSON-LD (${error.message})`);
    }
  }
}

const homepage = await readFile(path.join(distDir, "index.html"), "utf8");
const homepageTitle = firstMatch(homepage, /<title>([\s\S]*?)<\/title>/i);
const homepageCanonical = firstMatch(homepage, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
const homepageH1 = textContent(firstMatch(homepage, /<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/i) ?? "");
const homepageNavLinks = [...homepage.matchAll(/<nav\b[^>]*aria-label="Primary navigation"[^>]*>([\s\S]*?)<\/nav>/gi)]
  .flatMap(([, nav]) => [...nav.matchAll(/<a\b[^>]*href="([^"]+)"/gi)].map((match) => match[1]))
  .map((href) => href.replace(/^\/(?:spl-website|spl-website-dev)(?=\/)/, ""));
const homepageSchemas = [...homepage.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)]
  .map(([, json]) => {
    try {
      return JSON.parse(json);
    } catch {
      return null;
    }
  })
  .filter(Boolean);
const organizationSchema = homepageSchemas.find((schema) => schema["@type"] === "ResearchOrganization");
const websiteSchema = homepageSchemas.find((schema) => schema["@type"] === "WebSite");

if (homepageTitle !== "Synthetic Physiology Lab | University of Pavia") {
  errors.push(`homepage: unexpected title ${homepageTitle ?? "missing"}`);
}
if (homepageCanonical !== `${siteUrl}/`) errors.push(`homepage: canonical is ${homepageCanonical ?? "missing"}`);
if (homepageH1.replace(/\s/g, "") !== "SyntheticPhysiologyLab") {
  errors.push(`homepage: H1 is ${homepageH1 || "missing"}`);
}
for (const requiredPath of ["/", "/research/", "/publications/"]) {
  if (!homepageNavLinks.includes(requiredPath)) errors.push(`homepage: primary navigation is missing ${requiredPath}`);
}
if (organizationSchema?.name !== "Synthetic Physiology Lab" || organizationSchema?.url !== `${siteUrl}/`) {
  errors.push("homepage: ResearchOrganization schema does not identify the canonical lab homepage");
}
for (const alias of ["SPL", "SPL Pavia", "SPL UniPV", "Pasqualini Lab"]) {
  if (!organizationSchema?.alternateName?.includes(alias)) {
    errors.push(`homepage: ResearchOrganization schema is missing alternate name ${alias}`);
  }
}
if (organizationSchema?.founder?.name !== "Francesco S. Pasqualini") {
  errors.push("homepage: ResearchOrganization schema does not identify Francesco S. Pasqualini as founder");
}
if (
  websiteSchema?.name !== "Synthetic Physiology Lab"
  || websiteSchema?.url !== `${siteUrl}/`
  || websiteSchema?.publisher?.["@id"] !== `${siteUrl}/#organization`
) {
  errors.push("homepage: WebSite schema does not identify the official lab website and publisher");
}
for (const alias of ["SPL", "SPL Pavia", "SPL UniPV", "Pasqualini Lab"]) {
  if (!websiteSchema?.alternateName?.includes(alias)) {
    errors.push(`homepage: WebSite schema is missing alternate name ${alias}`);
  }
}
if (!textContent(homepage).includes("Synthetic Physiology Lab (SPL), led by Francesco S. Pasqualini")) {
  errors.push("homepage: visible lab identity does not connect SPL with Francesco S. Pasqualini");
}

const sitemap = await readFile(path.join(distDir, "sitemap.xml"), "utf8");
if (sitemap.includes("/all/")) errors.push("sitemap: legacy /all/ URL must not be indexed");
if (!sitemap.includes("/all-optical-biomaterials/")) errors.push("sitemap: descriptive biomaterials URL is missing");
if (/<(?:lastmod|changefreq|priority)>/.test(sitemap)) errors.push("sitemap: contains unsupported or unreliable freshness hints");
for (const requiredUrl of [`${siteUrl}/`, `${siteUrl}/research/`, `${siteUrl}/publications/`]) {
  if (!sitemap.includes(`<loc>${requiredUrl}</loc>`)) errors.push(`sitemap: required URL is missing: ${requiredUrl}`);
}

if (errors.length > 0) {
  console.error(`SEO check failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`SEO check passed for ${titles.size} indexable pages.`);
