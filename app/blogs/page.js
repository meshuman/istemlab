import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/site";
import { posts } from "@/lib/content";

export const metadata = pageMeta(
  "Blog | GeoAI, RAG, Agents & AI Strategy Insights",
  "Practical guides from I.STEM Lab on GeoAI, retrieval-augmented generation, autonomous agents and embedding AI in organizational strategy.",
  "/blogs"
);

export default function Blogs() {
  return (
    <>
      <PageHero
        title="Industry insights & expert opinions"
        intro="Practical, plain-language guides on GeoAI, RAG, autonomous agents and AI adoption, written by the people who build them."
      />
      <section className="pb-24">
        <div data-reveal-stagger suppressHydrationWarning className="container-x grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
