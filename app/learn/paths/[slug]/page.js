import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, orgRef } from "@/lib/schema";
import CTA from "@/components/CTA";
import { pageMeta, SITE } from "@/lib/site";
import { learnPaths, getPath, pathItems, pathStats, getType } from "@/lib/learn";

// Every valid address is prerendered at build time via generateStaticParams (unknown ones 404).
export const instant = false;

export function generateStaticParams() {
  return learnPaths.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = getPath(slug);
  if (!path) return {};
  const { count, minutes } = pathStats(path);
  return pageMeta(
    `${path.title} | Learning path`,
    `${path.blurb} ${count} articles, about ${minutes} minutes in total. Best for: ${path.audience}.`,
    `/learn/paths/${path.slug}`
  );
}

export default async function PathPage({ params }) {
  const { slug } = await params;
  const path = getPath(slug);
  if (!path) notFound();

  const steps = pathItems(path);
  const { count, minutes } = pathStats(path);
  const first = steps[0];
  const next = (path.after || []).map(getPath).filter(Boolean);
  const href = (s) => `/learn/${s.type}/${s.slug}?path=${path.slug}`;

  return (
    <>
      <JsonLd data={breadcrumbSchema([["Home", "/"], ["Learn", "/learn"], ["Learning paths", "/learn/paths"], [path.title, `/learn/paths/${path.slug}`]])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: path.title,
          description: `${path.blurb} Best for: ${path.audience}.`,
          provider: orgRef,
          educationalLevel: path.level,
          timeRequired: `PT${minutes}M`,
          isAccessibleForFree: true,
          inLanguage: "en",
          teaches: path.outcomes,
          coursePrerequisites: path.prerequisites,
          url: `${SITE.url}/learn/paths/${path.slug}`,
          hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", courseWorkload: `PT${minutes}M` },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: path.title,
          description: path.blurb,
          numberOfItems: count,
          itemListElement: steps.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `${SITE.url}/learn/${s.type}/${s.slug}`,
          })),
        }}
      />

      {/* Header */}
      <section className="py-16">
        <div data-reveal suppressHydrationWarning className="container-x max-w-4xl">
          <nav aria-label="Breadcrumb" className="label mb-6 text-muted [&_a]:inline-block [&_a]:py-2">
            <Link href="/" className="hover:text-brand-ink">Home</Link> /{" "}
            <Link href="/learn" className="hover:text-brand-ink">Learn</Link> /{" "}
            <Link href="/learn/paths" className="hover:text-brand-ink">Learning paths</Link>
          </nav>
          <p className="label text-brand-ink">Learning path</p>
          <h1 className="mt-4 !text-[clamp(34px,4.4vw,60px)]">{path.title}</h1>
          <p className="mt-6 text-xl text-muted">{path.blurb}</p>

          <dl className="mt-8 grid gap-6 border-y border-hair py-6 sm:grid-cols-3">
            <div>
              <dt className="label text-[11px] text-muted">Length</dt>
              <dd className="mt-1 font-medium">{count} articles · about {minutes} min</dd>
            </div>
            <div>
              <dt className="label text-[11px] text-muted">Level</dt>
              <dd className="mt-1 font-medium">{path.level}</dd>
            </div>
            <div>
              <dt className="label text-[11px] text-muted">Before you start</dt>
              <dd className="mt-1 text-[15px]">{path.prerequisites}</dd>
            </div>
          </dl>

          <p className="mt-6 text-[15px] text-muted">
            <span className="font-medium text-foreground">Best for:</span> {path.audience}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={href(first)} className="btn btn-solid">Start the path</Link>
            <Link href="/learn/paths" className="btn btn-ghost">All learning paths</Link>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-soft py-20">
        <div data-reveal suppressHydrationWarning className="container-x">
          <p className="label text-brand-ink">By the end</p>
          <h2 className="mt-3 max-w-[22ch]">What you will be able to do</h2>
          <ul data-reveal-stagger suppressHydrationWarning className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {path.outcomes.map((o) => (
              <li key={o} className="flex gap-3 border-t border-hair pt-4 text-[17px]">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-foreground" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The steps */}
      <section className="py-24" aria-labelledby="steps-heading">
        <div data-reveal suppressHydrationWarning className="container-x">
          <p className="label text-brand-ink">The path</p>
          <h2 id="steps-heading" className="mt-3 max-w-[22ch]">Read in this order</h2>

          <ol className="mt-12 max-w-4xl">
            {steps.map((s, i) => {
              const type = getType(s.type);
              return (
                <li key={s.slug} className="relative grid grid-cols-[48px_1fr] gap-x-5 pb-10 last:pb-0">
                  {/* connecting line */}
                  {i < steps.length - 1 && (
                    <span aria-hidden="true" className="absolute left-[23px] top-12 h-[calc(100%-3rem)] w-px bg-hair" />
                  )}
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center border border-foreground bg-background text-lg font-medium"
                  >
                    {i + 1}
                  </span>
                  <Link href={href(s)} className="card group block border border-hair bg-background p-6">
                    <p className="label text-[11px] text-muted">
                      <span className="text-brand-ink">{type.singular}</span> · {s.level} · {s.minutes} min read
                    </p>
                    <h3 className="mt-2 text-xl leading-snug group-hover:text-brand-ink">{s.title}</h3>
                    <p className="mt-2 text-[15px] text-muted">{s.excerpt}</p>
                    <p className="label mt-4 text-[11px] text-muted">You will learn</p>
                    <ul className="mt-2 space-y-1.5">
                      {s.takeaways.slice(0, 2).map((t) => (
                        <li key={t} className="flex gap-2 text-[14px]">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 bg-foreground" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="label mt-4 text-[11px] text-brand-ink">{i === 0 ? "Start here →" : "Read →"}</p>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Where next */}
      {next.length > 0 && (
        <section className="bg-soft py-20">
          <div data-reveal suppressHydrationWarning className="container-x">
            <p className="label text-brand-ink">When you finish</p>
            <h2 className="mt-3">Where to go next</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {next.map((n) => {
                const st = pathStats(n);
                return (
                  <Link key={n.slug} href={`/learn/paths/${n.slug}`} className="card group block border border-hair bg-background p-7">
                    <p className="label text-[11px] text-brand-ink">Next path</p>
                    <h3 className="mt-2 text-xl leading-snug group-hover:text-brand-ink">{n.title}</h3>
                    <p className="mt-2 text-[15px] text-muted">{n.blurb}</p>
                    <p className="label mt-4 text-[11px] text-muted">
                      {st.count} articles · {st.minutes} min
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Want this applied to your own project?"
        text="Learning is the first step. If you would rather have a working system, book a discovery call and we will scope it with you."
      />
    </>
  );
}
