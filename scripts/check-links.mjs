import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const siteHosts = new Set(["syntheticphysiologylab.com", "www.syntheticphysiologylab.com"]);
const basePrefixes = ["/spl-website/", "/spl-website-dev/"];
const retiredPaths = new Set(["/projects-7", "/copia-di-vista-1", "/art-and-science/logo-spl"]);
const errors = [];
let checkedLinks = 0;

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
  return relative === "index.html" ? "/" : `/${relative.replace(/index\.html$/, "")}`;
}

function stripBuildBase(pathname) {
  for (const prefix of basePrefixes) {
    if (pathname.startsWith(prefix)) return `/${pathname.slice(prefix.length)}`;
    if (pathname === prefix.slice(0, -1)) return "/";
  }
  return pathname;
}

function targetFor(pathname) {
  const decoded = decodeURIComponent(stripBuildBase(pathname));
  if (decoded.endsWith("/")) return path.join(distDir, decoded, "index.html");
  if (path.extname(decoded)) return path.join(distDir, decoded);
  return path.join(distDir, decoded, "index.html");
}

function hasAnchor(html, hash) {
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return true;
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:id|name)=["']${escaped}["']`, "i").test(html);
}

for (const file of await findHtmlFiles(distDir)) {
  const html = await readFile(file, "utf8");
  const route = routeFor(file);
  const indexable = !/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html);
  const hrefs = [...html.matchAll(/<a\b[^>]*\shref=["']([^"']+)["']/gi)].map((match) => match[1].replaceAll("&amp;", "&"));

  for (const href of hrefs) {
    if (/^(?:mailto:|tel:|javascript:|data:)/i.test(href)) continue;

    let url;
    try {
      url = new URL(href, new URL(route, "https://syntheticphysiologylab.com"));
    } catch {
      errors.push(`${route}: invalid link ${href}`);
      continue;
    }

    if (!siteHosts.has(url.hostname)) continue;
    checkedLinks += 1;

    const normalizedPath = stripBuildBase(url.pathname).replace(/\/$/, "") || "/";
    if (indexable && retiredPaths.has(normalizedPath)) {
      errors.push(`${route}: indexable page still links to retired path ${url.pathname}`);
    }

    const target = targetFor(url.pathname);
    try {
      await access(target);
    } catch {
      errors.push(`${route}: broken internal link ${href}`);
      continue;
    }

    if (url.hash && target.endsWith(".html")) {
      const targetHtml = await readFile(target, "utf8");
      if (!hasAnchor(targetHtml, url.hash)) errors.push(`${route}: missing anchor in ${href}`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Internal-link check failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Internal-link check passed for ${checkedLinks} links, including anchors.`);
