import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { services, process, SITE, pageMeta } from "@/lib/site";

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
