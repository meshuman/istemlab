import { SITE } from "@/lib/site";
import { posts } from "@/lib/content";

const paths = [
  "", "/about", "/services", "/work", "/research", "/collaborations",
  "/careers", "/advisor", "/contact", "/blogs", "/privacy-policy",
];

export default function sitemap() {
  return [
    ...paths.map((p) => ({
      url: `${SITE.url}${p}`,
      changeFrequency: p === "" ? "weekly" : "monthly",
      priority: p === "" ? 1 : 0.7,
    })),
    ...posts.map((p) => ({
      url: `${SITE.url}/blogs/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
