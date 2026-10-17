import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContentList from "@/components/ContentList";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/site";
import { learnItems, learnPaths, toCards, getType } from "@/lib/learn";
import LearnSections from "@/components/LearnSections";

export const metadata = pageMeta(
  "Learn | GeoAI, RAG & AI Tutorials, Concepts and Guides",
  "Free learning material from I.STEM Lab: plain-language concepts, hands-on tutorials and practical guides on GeoAI, RAG, AI agents and AI adoption.",
  "/learn"
);

const cards = toCards(learnItems);

export default function Learn() {
  const byId = (slug) => learnItems.find((i) => i.slug === slug);

  return (
    <>
      <PageHero
        title="Learn"
        intro="Concepts, tutorials and guides from the team that builds this technology every day. Free to read, practical to use."
      />

      {/* Content types */}
      <section className="pb-20">
        <div className="container-x">
          <LearnSections />
        </div>
      </section>

      {/* Learning paths */}
      <section className="bg-soft py-24">
        <div data-reveal suppressHydrationWarning className="container-x">
          <p className="label text-brand-ink">Start here</p>
          <h2 className="mt-3 max-w-[20ch]">Learning paths</h2>
          <p className="mt-4 max-w-[56ch] text-muted">
            Not sure where to begin? Follow a path: each is a short, ordered set of articles that builds on the one before.
          </p>
          <div data-reveal-stagger suppressHydrationWarning className="mt-12 grid gap-6 lg:grid-cols-2">
            {learnPaths.map((p) => (
              <div key={p.slug} className="flex flex-col border border-hair bg-background p-7">
                <h3 className="text-xl"><Link href={`/learn/paths/${p.slug}`} className="hover:text-brand-ink">{p.title}</Link></h3>
                <p className="label mt-2 text-[11px] text-brand-ink">
                  {p.items.length} articles · {p.items.reduce((n, s) => n + (byId(s)?.minutes || 0), 0)} min in total
                </p>
                <p className="mt-3 text-[15px] text-muted">{p.blurb}</p>
                <p className="mt-2 text-[13px] text-muted">
                  <span className="font-medium text-foreground">Best for:</span> {p.audience}
                </p>
                <ol className="mt-6 divide-y divide-hair border-y border-hair">
                  {p.items.map((slug, i) => {
                    const it = byId(slug);
                    if (!it) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/learn/${it.type}/${it.slug}?path=${p.slug}`}
                          className="group flex items-start gap-3 py-3"
                        >
                          <span className="label mt-1 w-5 shrink-0 text-brand-ink">{i + 1}</span>
                          <span className="flex-1">
                            <span className="block text-[15px] leading-snug group-hover:text-brand-ink">{it.title}</span>
                            <span className="label mt-1 block text-[11px] text-muted">
                              {getType(it.type).singular} · {it.minutes} min
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ol>
                <Link href={`/learn/paths/${p.slug}`} className="btn btn-ghost mt-6 self-start">
                  View the full path
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/learn/paths" className="btn btn-solid">See all learning paths</Link>
          </div>
        </div>
      </section>

      {/* Browse everything */}
      <section className="py-24" id="browse">
        <div data-reveal suppressHydrationWarning className="container-x">
          <p className="label text-brand-ink">Library</p>
          <h2 className="mt-3 max-w-[20ch]">Browse everything</h2>
          <div className="mt-10">
            <ContentList
              items={cards}
              variant="learn"
              noun="article"
              chipKey="typeLabel"
              chipLabel="Filter by type"
              selectKey="topic"
              selectLabel="All topics"
              searchPlaceholder="Search tutorials, concepts and guides…"
            />
          </div>
        </div>
      </section>

      <CTA
        title="Want this applied to your own data?"
        text="Learning is the first step. If you would rather have a working system, book a discovery call and we will scope it with you."
      />
    </>
  );
}
