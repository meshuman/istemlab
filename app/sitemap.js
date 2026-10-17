import { SITE } from "@/lib/site";
import { experiences } from "@/lib/experiences";
import { learnItems, learnPaths } from "@/lib/learn";

const paths = [
  "", "/about", "/services", "/work", "/research", "/collaborations",
  "/learn", "/learn/paths", "/learn/experiences", "/learn/concepts", "/learn/tutorials", "/learn/guides", "/careers", "/advisor", "/contact", "/privacy-policy",
];

export default function sitemap() {
  return [
    ...paths.map((p) => ({
      url: `${SITE.url}${p}`,
      lastModified: "2026-10-17",
      changeFrequency: p === "" ? "weekly" : "monthly",
      priority: p === "" ? 1 : 0.7,
    })),
    ...learnPaths.map((p) => ({
      url: `${SITE.url}/learn/paths/${p.slug}`,
      lastModified: "2026-10-17",
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...learnItems.map((i) => ({
      url: `${SITE.url}/learn/${i.type}/${i.slug}`,
      lastModified: i.date,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    ...experiences.map((e) => ({
      url: `${SITE.url}/learn/experiences/${e.slug}`,
      lastModified: e.date,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
