import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContentList from "@/components/ContentList";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/site";
import { learnTypes, learnItems, learnPaths, itemsOfType, toCards, getItem, getType } from "@/lib/learn";

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
        <div data-reveal-stagger suppressHydrationWarning className="container-x grid gap-6 md:grid-cols-3">
          {learnTypes.map((t, n) => (
            <Link key={t.slug} href={`/learn/${t.slug}`} className="card group flex flex-col border border-hair p-7">
              <span className="label text-muted">0{n + 1}</span>
              <h2 className="mt-6 !text-[clamp(26px,2.4vw,36px)] group-hover:text-brand-ink">{t.label}</h2>
              <p className="mt-3 text-[15px] text-muted">{t.blurb}</p>
              <p className="label mt-auto flex items-center justify-between pt-8 text-muted">
                <span>{itemsOfType(t.slug).length} {itemsOfType(t.slug).length === 1 ? "article" : "articles"}</span>
                <span className="text-brand-ink">Browse →</span>
              </p>
            </Link>
          ))}
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
          <div data-reveal-stagger suppressHydrationWarning className="mt-12 grid gap-6 lg:grid-cols-3">
            {learnPaths.map((p) => (
              <div key={p.slug} className="flex flex-col border border-hair bg-background p-7">
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{p.blurb}</p>
                <ol className="mt-6 divide-y divide-hair border-y border-hair">
                  {p.items.map((slug, i) => {
                    const it = byId(slug);
                    if (!it) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/learn/${it.type}/${it.slug}`}
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
              </div>
            ))}
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
