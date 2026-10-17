import { SITE } from "@/lib/site";

// AI answer engines are welcome: the site is built to be read, summarised and cited (see /llms.txt).
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended"];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/login"] },
      { userAgent: AI_BOTS, allow: "/", disallow: ["/login"] },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
