import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { services, process, SITE, pageMeta } from "@/lib/site";
import { learnItems, getPath } from "@/lib/learn";

// Free learning material related to each service: one learning path, then two articles.
const related = {
  "geo-ai": ["geoai-from-zero", "geoai-in-plain-language", "resolution-in-satellite-imagery"],
  "ai-strategy-development": ["adopt-ai", "ai-readiness-checklist", "your-first-ai-pilot"],
  "data-systems-ai-systems": ["rag-to-trusted-assistant", "rag-explained", "ai-agents-explained"],
  "3d-vr-mixed-reality": ["immersive-3d-vr-ar", "gaussian-splatting-explained", "vr-ar-mixed-reality-explained"],
  "business-incubation": ["tech-jargon-decoded", "validate-a-startup-idea", "your-first-ai-pilot"],
};
const relatedLinks = (slug) => {
  const [pathSlug, ...articles] = related[slug] || [];
  const path = pathSlug && getPath(pathSlug);
  return [
    ...(path ? [{ href: `/learn/paths/${path.slug}`, label: `Learning path: ${path.title}` }] : []),
    ...articles
      .map((a) => learnItems.find((i) => i.slug === a))
      .filter(Boolean)
      .map((i) => ({ href: `/learn/${i.type}/${i.slug}`, label: i.title })),
  ];
};

export const metadata = pageMeta(
  "AI & GeoAI Services: Strategy, RAG, Agents, 3D/VR",
  "GeoAI, AI strategy and training, RAG and autonomous agents, 3D/VR and mixed reality, and business incubation. Scoped, low-risk engagements from I.STEM Lab.",
  "/services"
);

export default function Services() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": services.map((s) => ({
            "@type": "Service",
            name: s.title,
            description: s.long,
            serviceType: s.title,
            audience: { "@type": "Audience", audienceType: s.forWho },
            provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
          })),
        }}
      />
      <PageHero
        title="Services"
        intro="Five focused services, one partner. Pick a single capability or combine them, from an AI roadmap to a production system your team is trained to run."
      />

      <nav aria-label="Services" className="border-y border-hair">
        <div className="container-x flex flex-wrap gap-x-8 gap-y-2 py-4">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="label py-2 text-muted hover:text-brand-ink">
              {s.icon} {s.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="py-16">
        <div className="container-x space-y-8">
          {services.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              data-reveal suppressHydrationWarning
              className="grid scroll-mt-24 gap-8 border border-hair p-8 md:grid-cols-[1fr_1.6fr] md:p-12"
            >
              <div>
                <span className="label text-brand-ink">{s.icon}</span>
                <h2 className="mt-4 !text-[clamp(26px,2.6vw,40px)]">{s.title}</h2>
                <p className="mt-4 text-lg">{s.short}</p>
              </div>
              <div>
                <p className="text-muted">{s.long}</p>
                <h3 className="label mt-8 text-muted">What you get</h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="border-t border-hair pt-2 text-[15px]">{p}</li>
                  ))}
                </ul>
                <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <dt className="label text-muted">Outcome</dt>
                    <dd className="mt-2 text-[15px]">{s.outcome}</dd>
                  </div>
                  <div>
                    <dt className="label text-muted">Ideal for</dt>
                    <dd className="mt-2 text-[15px]">{s.forWho}</dd>
                  </div>
                </dl>
                {relatedLinks(s.slug).length > 0 && (
                  <div className="mt-8">
                    <h3 className="label text-muted">Learn more, free</h3>
                    <ul className="mt-3 space-y-2">
                      {relatedLinks(s.slug).map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="text-[15px] text-brand-ink underline-offset-4 hover:underline">
                            {l.label} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link href={`/contact?service=${s.slug}`} className="btn btn-solid mt-8">
                  Discuss {s.title.split(" (")[0]}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-soft py-20">
        <div data-reveal suppressHydrationWarning className="container-x">
          <p className="label text-brand-ink">Every engagement</p>
          <h2 className="mt-3">How we work</h2>
          <ol data-reveal-stagger suppressHydrationWarning className="mt-10 grid gap-6 md:grid-cols-4">
            {process.map((p, n) => (
              <li key={p.step} className="border-t border-foreground pt-5">
                <span className="label text-brand-ink">0{n + 1}</span>
                <h3 className="mt-3 text-xl">{p.step}</h3>
                <p className="mt-2 text-[15px] text-muted">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
