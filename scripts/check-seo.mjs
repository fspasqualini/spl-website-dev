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

const sitemap = await readFile(path.join(distDir, "sitemap.xml"), "utf8");
if (sitemap.includes("/all/")) errors.push("sitemap: legacy /all/ URL must not be indexed");
if (!sitemap.includes("/all-optical-biomaterials/")) errors.push("sitemap: descriptive biomaterials URL is missing");
if (/<(?:lastmod|changefreq|priority)>/.test(sitemap)) errors.push("sitemap: contains unsupported or unreliable freshness hints");

if (errors.length > 0) {
  console.error(`SEO check failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`SEO check passed for ${titles.size} indexable pages.`);
