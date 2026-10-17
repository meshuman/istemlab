import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/site";
import { jobs, perks } from "@/lib/content";

export const metadata = pageMeta(
  "Careers | Join the I.STEM Lab Team",
  "Join I.STEM Lab to work on GeoAI, RAG and autonomous agents, 3D/VR and AI strategy. See open roles in Nepal and remote.",
  "/careers"
);

export default function Careers() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": jobs.map((j) => ({
            "@type": "JobPosting",
            title: j.title,
            description: j.desc,
            employmentType: j.type.toUpperCase().replace("-", "_"),
            hiringOrganization: { "@type": "Organization", name: SITE.name, sameAs: SITE.url },
            jobLocationType: j.location.includes("Remote") ? "TELECOMMUTE" : undefined,
            datePosted: "2026-10-01",
          })),
        }}
      />
      <PageHero
        title="Careers at I.STEM Lab"
        intro="Do work that ends up in the real world: food security systems, AI agents, VR training. We hire for curiosity, ownership and care for quality."
        crumbs={["Join us"]}
      />

      <section className="pb-16">
        <div data-reveal-stagger suppressHydrationWarning className="container-x grid gap-8 md:grid-cols-3">
          {perks.map((p) => (
            <div key={p.t} className="border-t border-foreground pt-5">
              <h2 className="!text-xl">{p.t}</h2>
              <p className="mt-2 text-[15px] text-muted">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-soft py-20">
        <div data-reveal suppressHydrationWarning className="container-x">
          <p className="label text-brand-ink">Open roles · {jobs.length}</p>
          <h2 className="mt-3">Join the team, we are hiring</h2>
          <ul className="mt-10 divide-y divide-hair border-y border-hair">
            {jobs.map((j) => (
              <li key={j.title}>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Application: ${j.title}`)}`}
                  className="group grid gap-2 py-6 md:grid-cols-[1.5fr_1fr_auto] md:items-center md:gap-8"
                >
                  <div>
                    <h3 className="text-xl group-hover:text-brand-ink">{j.title}</h3>
                    <p className="mt-1 text-[15px] text-muted">{j.desc}</p>
                  </div>
                  <p className="label text-muted">{j.type} · {j.location}</p>
                  <span className="label text-brand-ink">Apply →</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 max-w-[60ch]">
            <h3 className="text-xl">Can&apos;t find the right role?</h3>
            <p className="mt-2 text-muted">
              Send us your resume and portfolio anyway. We will keep you on our
              radar for future roles that match your expertise.
            </p>
            <a href={`mailto:${SITE.email}?subject=General application`} className="btn btn-solid mt-6">
              Send your resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
