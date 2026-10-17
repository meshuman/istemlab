import Image from "next/image";
import Link from "next/link";
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
            // Ongoing studies and working papers, not published articles, so they are described as projects.
            "@type": "ResearchProject",
            name: p.title,
            description: p.summary,
            keywords: p.area,
            parentOrganization: { "@type": "Organization", name: SITE.name, url: SITE.url },
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
      <section className="bg-soft py-20">
        <div data-reveal suppressHydrationWarning className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="label text-brand-ink">Research areas</p>
            <h2 className="mt-3 !text-[clamp(26px,2.6vw,40px)]">What we study, and why</h2>
            <p className="mt-4 text-muted">
              We research problems that block real projects. A study is worth doing when its result changes a
              decision, a tool or a method that people in Nepal and similar contexts actually use.
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2">
            {[
              ["GeoAI and remote sensing", "Machine learning on satellite, aerial and drone imagery: super-resolution, land cover and change detection where ground data is scarce."],
              ["Food security and agriculture", "Turning imagery, weather and survey data into early, explainable signals about crops and vulnerable districts."],
              ["RAG for technical documents", "Retrieval-augmented assistants that answer from reports and policy documents, with sources, and how to test that they are right."],
              ["Reality capture and immersive 3D", "Photogrammetry, laser scanning and Gaussian splatting to record places, and how to publish them for the web and headsets."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-foreground pt-4">
                <dt className="text-lg font-medium">{t}</dt>
                <dd className="mt-2 text-[15px] text-muted">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20">
        <div data-reveal suppressHydrationWarning className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="label text-brand-ink">How we work</p>
            <h2 className="mt-3 !text-[clamp(26px,2.6vw,40px)]">Applied, measured and shared</h2>
            <ul className="mt-6 space-y-3 text-muted">
              <li>We start from a decision someone needs to make, not from a technique.</li>
              <li>We test on data held back from training and report accuracy, error and uncertainty honestly.</li>
              <li>We prefer free and open data, such as Sentinel-2 and Landsat, so results can be repeated.</li>
              <li>We publish what we learn as plain-language material on our Learn pages.</li>
            </ul>
          </div>
          <div>
            <p className="label text-brand-ink">Read the background</p>
            <ul className="mt-6 divide-y divide-hair border-y border-hair">
              {[
                ["/learn/paths/geoai-from-zero", "Learning path: GeoAI from zero to a first map"],
                ["/learn/concepts/resolution-in-satellite-imagery", "Resolution in satellite imagery, explained"],
                ["/learn/concepts/statistics-uncertainty-for-geoai", "Statistics and uncertainty for GeoAI"],
                ["/learn/guides/evaluate-a-rag-assistant", "How to evaluate a RAG assistant"],
                ["/learn/concepts/gaussian-splatting-explained", "Gaussian splatting, explained simply"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="flex items-center justify-between py-4 hover:text-brand-ink">
                    <span>{label}</span>
                    <span aria-hidden="true" className="text-brand-ink">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA
        title="Partner with us on research"
        text="We collaborate with universities, research institutes and agencies on GeoAI studies, grant proposals and pilots."
      />
    </>
  );
}
