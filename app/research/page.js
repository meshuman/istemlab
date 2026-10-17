import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/site";
import { papers } from "@/lib/content";

export const metadata = pageMeta(
  "Research | GEO-AI & Spatial Intelligence",
  "I.STEM Lab research in GEO-AI and spatial intelligence: satellite imagery super-resolution, food security monitoring and RAG for geospatial reports.",
  "/research"
);

export default function Research() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": papers.map((p) => ({
            "@type": "ScholarlyArticle",
            headline: p.title,
            abstract: p.summary,
            datePublished: p.year,
            publisher: { "@type": "Organization", name: SITE.name },
          })),
        }}
      />
      <PageHero
        title="Research in GEO-AI & spatial intelligence"
        intro="Our research is applied: every study is aimed at a tool someone will use to make a better decision."
        crumbs={["Company"]}
      />
      <section className="pb-16">
        <div data-reveal suppressHydrationWarning className="container-x">
          <div className="relative aspect-[21/9] overflow-hidden bg-soft">
            <Image
              src="/projects/SatelliteImagery.webp"
              alt="Satellite imagery super-resolution research"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div data-reveal suppressHydrationWarning className="container-x">
          <p className="label text-brand-ink">Papers & studies</p>
          <ul className="mt-6 divide-y divide-hair border-y border-hair">
            {papers.map((p) => (
              <li key={p.title} className="grid gap-3 py-8 md:grid-cols-[120px_1fr_200px] md:gap-8">
                <span className="label text-muted">{p.year}</span>
                <div>
                  <h2 className="!text-[clamp(22px,2vw,30px)]">{p.title}</h2>
                  <p className="mt-3 max-w-[64ch] text-muted">{p.summary}</p>
                </div>
                <div className="label space-y-1 text-muted md:text-right">
                  <p className="text-brand-ink">{p.status}</p>
                  <p>{p.area}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTA
        title="Partner with us on research"
        text="We collaborate with universities, research institutes and agencies on GeoAI studies, grant proposals and pilots."
      />
    </>
  );
}
