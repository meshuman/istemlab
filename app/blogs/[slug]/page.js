import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import BlogCard, { formatDate } from "@/components/BlogCard";
import CTA from "@/components/CTA";
import { SITE } from "@/lib/site";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE.url}/blogs/${post.slug}`,
      images: [post.image],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const more = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          image: `${SITE.url}${post.image}`,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
          mainEntityOfPage: `${SITE.url}/blogs/${post.slug}`,
        }}
      />
      <article className="py-16">
        <header data-reveal suppressHydrationWarning className="container-x max-w-4xl">
          <nav aria-label="Breadcrumb" className="label mb-6 text-muted [&_a]:inline-block [&_a]:py-2">
            <Link href="/" className="hover:text-brand-ink">Home</Link> /{" "}
            <Link href="/blogs" className="hover:text-brand-ink">Blog</Link> / {post.tag}
          </nav>
          <h1 className="!text-[clamp(34px,4.4vw,64px)]">{post.title}</h1>
          <p className="mt-6 text-xl text-muted">{post.excerpt}</p>
          <p className="label mt-6 text-muted">
            {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
        </header>
        <div data-reveal suppressHydrationWarning className="container-x mt-12">
          <div className="relative aspect-[21/9] overflow-hidden bg-soft">
            <Image src={post.image} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>
        <div data-reveal suppressHydrationWarning className="container-x mt-12 max-w-3xl space-y-6 text-lg leading-relaxed">
          {post.body.map((para, n) => (
            <p key={n}>{para}</p>
          ))}
        </div>
      </article>

      {more.length > 0 && (
        <section className="bg-soft py-20">
          <div data-reveal suppressHydrationWarning className="container-x">
            <h2 className="!text-3xl">Keep reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {more.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CTA />
    </>
  );
}
