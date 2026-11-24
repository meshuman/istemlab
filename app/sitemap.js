import { statSync } from "node:fs";
import { join } from "node:path";
import { SITE } from "@/lib/site";
import { experiences } from "@/lib/experiences";
import { learnItems, learnPaths } from "@/lib/learn";

const paths = [
  "", "/about", "/services", "/work", "/research", "/collaborations",
  "/learn", "/learn/paths", "/learn/experiences", "/learn/concepts", "/learn/tutorials", "/learn/guides", "/careers", "/advisor", "/contact", "/privacy-policy",
];

const day = (d) => new Date(d).toISOString().slice(0, 10);
const latest = (dates) => dates.map(day).sort().at(-1);

// Newest article or experience date: hub and path pages change whenever one is added.
const contentUpdated = latest([...learnItems.map((i) => i.date), ...experiences.map((e) => e.date)]);

// A page's last modified date is when its source file was last changed (this runs at build time),
// or the newest content date if that is later and the page lists content.
function fileUpdated(p) {
  const file = p === "" ? "app/page.js" : p.startsWith("/learn") ? "app/learn/page.js" : `app/${p.slice(1)}/page.js`;
  try {
    return day(statSync(join(process.cwd(), file)).mtime);
  } catch {
    return contentUpdated;
  }
}

export default function sitemap() {
  return [
    ...paths.map((p) => ({
      url: `${SITE.url}${p}`,
      lastModified: p === "" || p.startsWith("/learn") ? latest([fileUpdated(p), contentUpdated]) : fileUpdated(p),
      changeFrequency: p === "" ? "weekly" : "monthly",
      priority: p === "" ? 1 : 0.7,
    })),
    ...learnPaths.map((p) => ({
      url: `${SITE.url}/learn/paths/${p.slug}`,
      lastModified: latest([fileUpdated("/learn"), contentUpdated]),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...learnItems.map((i) => ({
      url: `${SITE.url}/learn/${i.type}/${i.slug}`,
      lastModified: day(i.date),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    ...experiences.map((e) => ({
      url: `${SITE.url}/learn/experiences/${e.slug}`,
      lastModified: day(e.date),
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
