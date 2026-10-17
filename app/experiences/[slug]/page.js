import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ExperienceCard from "@/components/ExperienceCard";
import { formatDate } from "@/components/BlogCard";
import CTA from "@/components/CTA";
import { SITE } from "@/lib/site";
import { experiences } from "@/lib/experiences";

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
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/experiences/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: "article",
      publishedTime: item.date,
      url: `${SITE.url}/experiences/${item.slug}`,
      images: [item.image],
    },
  };
}

export default async function ExperiencePage({ params }) {
  const { slug } = await params;
  const item = experiences.find((e) => e.slug === slug);
  if (!item) notFound();
  const more = experiences.filter((e) => e.slug !== slug).slice(0, 2);

  return (
    <>
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
          mainEntityOfPage: `${SITE.url}/experiences/${item.slug}`,
        }}
      />
      <article className="py-16">
        <header data-reveal suppressHydrationWarning className="container-x max-w-4xl">
          <nav aria-label="Breadcrumb" className="label mb-6 text-muted [&_a]:inline-block [&_a]:py-2">
            <Link href="/" className="hover:text-brand-ink">Home</Link> /{" "}
            <Link href="/experiences" className="hover:text-brand-ink">Experiences</Link> / {item.phase}
          </nav>
          <p className="label text-brand-ink">
            {item.phase} · {item.project}
          </p>
          <h1 className="mt-4 !text-[clamp(34px,4.4vw,64px)]">{item.title}</h1>
          <p className="mt-6 text-xl text-muted">{item.excerpt}</p>
          <p className="label mt-6 text-muted">
            {SITE.name} · <time dateTime={item.date}>{formatDate(item.date)}</time>
          </p>
        </header>

        <div data-reveal suppressHydrationWarning className="container-x mt-12">
          <div className="relative aspect-[21/9] overflow-hidden bg-soft">
            <Image src={item.image} alt="" fill priority sizes="100vw" className="object-cover object-top" />
          </div>
        </div>

        <div data-reveal suppressHydrationWarning className="container-x mt-12 max-w-3xl">
          <aside className="border border-foreground p-7">
            <h2 className="label text-brand-ink">Key takeaways</h2>
            <ul className="mt-4 space-y-3">
              {item.takeaways.map((t) => (
                <li key={t} className="flex gap-3 text-[17px]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-foreground" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </aside>
          <div className="mt-10 space-y-6 text-lg leading-relaxed">
            {item.body.map((para, n) => (
              <p key={n}>{para}</p>
            ))}
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
