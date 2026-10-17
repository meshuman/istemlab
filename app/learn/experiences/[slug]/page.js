import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { seo, snippet } from "@/lib/seo";
import ExperienceCard from "@/components/ExperienceCard";
import LearnBody, { slugify } from "@/components/LearnBody";
import { formatDate } from "@/components/BlogCard";
import ShareLinks from "@/components/ShareLinks";
import Comments from "@/components/Comments";
import CTA from "@/components/CTA";
import { SITE } from "@/lib/site";
import { experiences } from "@/lib/experiences";
import { readingMinutes } from "@/lib/readtime";

// Every valid address is prerendered at build time via generateStaticParams (unknown ones 404),
// so these pages may block on navigation instead of streaming behind <Suspense>.
export const instant = false;

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = experiences.find((e) => e.slug === slug);
  if (!item) return {};
  const meta = { title: seo[item.slug]?.title || item.title, description: seo[item.slug]?.description || snippet(item.excerpt) };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/learn/experiences/${item.slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      publishedTime: item.date,
      url: `${SITE.url}/learn/experiences/${item.slug}`,
      images: [item.image],
    },
  };
}

export default async function ExperiencePage({ params }) {
  const { slug } = await params;
  const item = experiences.find((e) => e.slug === slug);
  if (!item) notFound();

  const minutes = readingMinutes(item);
  const toc = item.body.filter((b) => b.t === "h2");
  const more = experiences
    .filter((e) => e.slug !== slug)
    .slice(0, 2)
    .map((e) => ({ ...e, minutes: readingMinutes(e) }));
  const path = `/learn/experiences/${item.slug}`;
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: item.title,
          description: item.excerpt,
          datePublished: item.date,
          image: `${SITE.url}${item.image}`,
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
          mainEntityOfPage: `${SITE.url}${path}`,
        }}
      />
      <article className="py-16">
        <header data-reveal suppressHydrationWarning className="container-x max-w-4xl">
          <nav aria-label="Breadcrumb" className="label mb-6 text-muted [&_a]:inline-block [&_a]:py-2">
            <Link href="/" className="hover:text-brand-ink">Home</Link> /{" "}
            <Link href="/learn" className="hover:text-brand-ink">Learn</Link> /{" "}
            <Link href="/learn/experiences" className="hover:text-brand-ink">Experiences</Link> / {item.phase}
          </nav>
          <p className="label text-brand-ink">
            {item.phase} · {item.project}
          </p>
          <h1 className="mt-4 !text-[clamp(34px,4.4vw,64px)]">{item.title}</h1>
          <p className="mt-6 text-xl text-muted">{item.excerpt}</p>
          <p className="label mt-6 flex flex-wrap gap-x-4 gap-y-1 text-muted">
            <span>{SITE.name}</span>
            <span>{minutes} min read</span>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </p>
        </header>

        <div data-reveal suppressHydrationWarning className="container-x mt-12">
          <div className="relative aspect-[21/9] overflow-hidden bg-soft">
            <Image src={item.image} alt="" fill priority sizes="100vw" className="object-cover object-top" />
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
                {item.takeaways.map((t) => (
                  <li key={t} className="flex gap-3 text-[17px]">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-foreground" />
                    <span>{t}</span>
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

      {more.length > 0 && (
        <section className="bg-soft py-20">
          <div data-reveal suppressHydrationWarning className="container-x">
            <h2 className="!text-3xl">More experiences</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {more.map((e) => (
                <ExperienceCard key={e.slug} item={e} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CTA />
    </>
  );
}
