import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  archiveYears,
  entriesByYear,
  formatNewsDate,
  homepageNews,
  newsArchive,
  newsCategories,
  recentNews,
} from "../src/data/newsArchive.ts";

assert.ok(newsArchive.length >= 100, "archive stress fixture must contain at least 100 entries");
assert.equal(homepageNews.length, 5, "homepage rail must contain five entries");
assert.equal(recentNews.length, 18, "news landing must contain 18 entries");
assert.equal(newsArchive.filter((entry) => entry.image).length, 1, "only one archive story may have an image");
assert.equal(newsArchive.filter((entry) => entry.featured).length, 1, "only one archive story may be featured");
assert.deepEqual(archiveYears, ["2026", "2025", "2024", "2023", "2022", "2021", "2020"]);
assert.equal(Object.values(entriesByYear).flat().length, newsArchive.length);
assert.equal(new Set(newsArchive.map((entry) => entry.id)).size, newsArchive.length, "entry ids must be unique");

for (const entry of newsArchive) {
  assert.match(entry.id, /^20\d{2}-[a-z0-9-]+$/);
  assert.ok(newsCategories.includes(entry.category));
  assert.match(entry.date, /^20\d{2}-\d{2}-\d{2}$/);
  assert.ok(entry.title && entry.blurb);
  assert.ok(!("status" in entry) && !("evidence" in entry) && !("metadata" in entry));
  const displayDate = formatNewsDate(entry);
  if (entry.datePrecision === "year") assert.match(displayDate, /^20\d{2}$/);
  if (entry.datePrecision === "month" && !entry.dateLabel) {
    assert.match(displayDate, /^[A-Z][a-z]+ 20\d{2}$/);
  }
}

const homepage = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
const landing = await readFile(new URL("../dist/news/index.html", import.meta.url), "utf8");
const archive = await readFile(new URL("../dist/news/archive/index.html", import.meta.url), "utf8");

assert.equal((homepage.match(/class="news-rail-item/g) ?? []).length, 5);
assert.equal((landing.match(/class="featured-news"/g) ?? []).length, 1);
assert.equal((landing.match(/class="archive-story"/g) ?? []).length, 17);
assert.ok(archive.includes("news-search-index"));
assert.ok(!archive.includes("Internal evidence") && !archive.includes("Status/category"));

for (const year of archiveYears) {
  const page = await readFile(new URL(`../dist/news/${year}/index.html`, import.meta.url), "utf8");
  for (const entry of entriesByYear[year]) assert.ok(page.includes(`id="${entry.id}"`));
}

console.log(`News archive checks passed: ${newsArchive.length} entries, 5 homepage, 18 recent, 7 year pages.`);
