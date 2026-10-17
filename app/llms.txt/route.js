import { SITE, services, faqs } from "@/lib/site";
import { learnItems, learnPaths } from "@/lib/learn";

// llms.txt: a plain-text map of the site for AI assistants and answer engines (https://llmstxt.org).

export function GET() {
  const abs = (p) => `${SITE.url}${p}`;
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `${SITE.name} is based in Nepal and works with clients worldwide. Contact: ${SITE.email}, ${SITE.phoneDisplay}.`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.title}](${abs(`/services#${s.slug}`)}): ${s.short}`.trim()),
    "",
    "## Company",
    `- [About](${abs("/about")}): who we are, team and advisors`,
    `- [Work](${abs("/work")}): case studies and current businesses`,
    `- [Research](${abs("/research")}): GeoAI research and platforms`,
    `- [Contact](${abs("/contact")}): how to reach us`,
    "",
    "## Learning paths",
    ...learnPaths.map((p) => `- [${p.title}](${abs(`/learn/paths/${p.slug}`)}): ${p.blurb}`),
    "",
    "## Articles (plain-language concepts, tutorials and guides)",
    ...learnItems.map((i) => `- [${i.title}](${abs(`/learn/${i.type}/${i.slug}`)}): ${i.excerpt}`),
    "",
    "## Frequently asked questions",
    ...faqs.map((f) => `- ${f.q} ${f.a}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
