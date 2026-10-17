import { SITE } from "@/lib/site";

// Shared JSON-LD builders (schema.org) so every page describes itself the same way.

/** BreadcrumbList from [[name, path], ...] */
export const breadcrumbSchema = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${SITE.url}${path}`,
  })),
});

export const orgRef = { "@id": `${SITE.url}/#org` };
