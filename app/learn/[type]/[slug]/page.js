import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { seo, snippet } from "@/lib/seo";
import { breadcrumbSchema, orgRef } from "@/lib/schema";
import LearnBody, { slugify } from "@/components/LearnBody";
import LearnCard from "@/components/LearnCard";
import PathAware from "@/components/PathAware";
import { formatDate } from "@/components/BlogCard";
import ShareLinks from "@/components/ShareLinks";
import Comments from "@/components/Comments";
import CTA from "@/components/CTA";
import { SITE } from "@/lib/site";
import { learnItems, getItem, getType, toCards, pathMemberships } from "@/lib/learn";

// Every valid address is prerendered at build time via generateStaticParams (unknown ones 404),
// so these pages may block on navigation instead of streaming behind <Suspense>.
export const instant = false;

export function generateStaticParams() {
  return learnItems.map((i) => ({ type: i.type, slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { type, slug } = await params;
  const item = getItem(type, slug);
  if (!item) return {};
  const path = `/learn/${item.type}/${item.slug}`;
  const meta = { title: seo[item.slug]?.title || item.title, description: seo[item.slug]?.description || snippet(item.excerpt) };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: path },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      publishedTime: item.date,
      url: `${SITE.url}${path}`,
      images: [`${SITE.url}${item.image}`],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [`${SITE.url}${item.image}`] },
  };
}

export default async function LearnArticle({ params }) {
  const { type, slug } = await params;
  const item = getItem(type, slug);
  if (!item) notFound();

  const t = getType(item.type);
  const memberships = pathMemberships(item.slug);
  const toc = item.body.filter((b) => b.t === "h2");
  const related = toCards(
    learnItems.filter((i) => i.slug !== item.slug && (i.topic === item.topic || i.type === item.type)).slice(0, 3)
  );
  const path = `/learn/${item.type}/${item.slug}`;
  const faq = item.body.filter((b) => b.t === "qa").flatMap((b) => b.items);

  return (
    <>
      {faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
          }}
        />
      )}
      <JsonLd data={breadcrumbSchema([["Home", "/"], ["Learn", "/learn"], [t.label, `/learn/${t.slug}`], [item.title, path]])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: item.title,
          description: item.excerpt,
          abstract: item.takeaways?.join(" "),
          datePublished: item.date,
          dateModified: item.date,
          inLanguage: "en",
          isAccessibleForFree: true,
          proficiencyLevel: item.level,
          articleSection: t.label,
          keywords: [item.topic, ...(memberships || []).map((m) => m.title)].filter(Boolean).join(", "),
          timeRequired: `PT${item.minutes}M`,
          image: `${SITE.url}${item.image}`,
          author: orgRef,
          publisher: orgRef,
          mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}${path}` },
          speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "#takeaways"] },
        }}
      />

      <article className="py-16">
        <header data-reveal suppressHydrationWarning className="container-x max-w-4xl">
          <nav aria-label="Breadcrumb" className="label mb-6 text-muted [&_a]:inline-block [&_a]:py-2">
            <Link href="/" className="hover:text-brand-ink">Home</Link> /{" "}
            <Link href="/learn" className="hover:text-brand-ink">Learn</Link> /{" "}
            <Link href={`/learn/${t.slug}`} className="hover:text-brand-ink">{t.label}</Link>
          </nav>
          <p className="label text-brand-ink">
            {t.singular} · {item.topic}
          </p>
          <h1 className="mt-4 !text-[clamp(34px,4.4vw,60px)]">{item.title}</h1>
          <p className="mt-6 text-xl text-muted">{item.excerpt}</p>
          <p className="label mt-6 flex flex-wrap gap-x-4 gap-y-1 text-muted">
            <span>{item.level}</span>
            <span>{item.minutes} min read</span>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </p>
          {memberships.length > 0 && <PathAware memberships={memberships} variant="top" />}
        </header>

        <div data-reveal suppressHydrationWarning className="container-x mt-12">
          <div className="relative aspect-[21/9] overflow-hidden bg-soft">
            <Image src={item.image} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>

        <div className="container-x mt-12 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          {/* Table of contents */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <details className="group border border-hair lg:border-0" open>
              <summary className="label flex cursor-pointer list-none items-center justify-between px-4 py-3 text-muted lg:cursor-default lg:px-0 lg:pt-0 [&::-webkit-details-marker]:hidden">
                On this page
                <span aria-hidden="true" className="lg:hidden">+</span>
              </summary>
              <ol className="space-y-1 border-hair px-4 pb-4 lg:border-l lg:px-0 lg:pb-0">
                <li>
                  <a href="#takeaways" className="block py-1.5 text-sm text-muted transition-colors hover:text-brand-ink lg:pl-4">
                    Key takeaways
                  </a>
                </li>
                {toc.map((h) => (
                  <li key={h.text}>
                    <a href={`#${slugify(h.text)}`} className="block py-1.5 text-sm text-muted transition-colors hover:text-brand-ink lg:pl-4">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          </aside>

          <div data-reveal suppressHydrationWarning className="min-w-0 max-w-3xl">
            <section id="takeaways" className="scroll-mt-24 border border-foreground p-7">
              <h2 className="label text-brand-ink">Key takeaways</h2>
              <ul className="mt-4 space-y-3">
                {item.takeaways.map((k) => (
                  <li key={k} className="flex gap-3 text-[17px]">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-foreground" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-10">
              <LearnBody blocks={item.body} />
            </div>
            <ShareLinks title={item.title} path={path} className="mt-12" />
            <Comments className="mt-12" />
          </div>
        </div>
      </article>

      {memberships.length > 0 ? (
        <section className="bg-soft py-20">
          <div data-reveal suppressHydrationWarning className="container-x">
            <PathAware memberships={memberships} variant="keep" />
          </div>
        </section>
      ) : (
      related.length > 0 && (
        <section className="bg-soft py-20">
          <div data-reveal suppressHydrationWarning className="container-x">
            <h2 className="!text-3xl">Keep learning</h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={`${r.type}-${r.slug}`}>
                  <LearnCard item={r} />
                </li>
              ))}
            </ul>
          </div>
        </section>
            )
      )}

      <CTA
        title="Need this built for your organization?"
        text="If you would rather have a working system than a tutorial, tell us your goal and we will scope it with you."
      />
    </>
  );
}
