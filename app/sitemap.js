import { SITE } from "@/lib/site";
import { posts } from "@/lib/content";
import { experiences } from "@/lib/experiences";
import { learnItems } from "@/lib/learn";

const paths = [
  "", "/about", "/services", "/work", "/research", "/collaborations",
  "/experiences", "/learn", "/learn/concepts", "/learn/tutorials", "/learn/guides", "/careers", "/advisor", "/contact", "/blogs", "/privacy-policy",
];

export default function sitemap() {
  return [
    ...paths.map((p) => ({
      url: `${SITE.url}${p}`,
      changeFrequency: p === "" ? "weekly" : "monthly",
      priority: p === "" ? 1 : 0.7,
    })),
    ...learnItems.map((i) => ({
      url: `${SITE.url}/learn/${i.type}/${i.slug}`,
      lastModified: i.date,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    ...experiences.map((e) => ({
      url: `${SITE.url}/experiences/${e.slug}`,
      lastModified: e.date,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: `${SITE.url}/blogs/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
