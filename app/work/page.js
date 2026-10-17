import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Businesses from "@/components/Businesses";
import Work from "@/components/Work";
import { clientSites, otherProjects, pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Our Work | GeoAI Case Studies & Client Sites",
  "Case studies from I.STEM Lab: the Bidmytrip AI travel marketplace, Acoustical Ceiling Tile Solutions, food security monitoring in Karnali, satellite research and client websites.",
  "/work"
);

export default function WorkPage() {
  return (
    <>
      <PageHero
        title="See what we create"
        intro="Selected research and platforms, with the challenge we faced and what we built. References and details available on request."
        crumbs={["Company"]}
      />
      <Work showAllLink={false} />
      <Work
        showAllLink={false}
        items={otherProjects}
        eyebrow="More projects"
        title="Research and platforms"
        intro="Public-sector platforms, applied research and company websites from across our portfolio."
      />
      <section className="py-24">
        <div data-reveal suppressHydrationWarning className="container-x">
          <p className="label text-brand-ink">Client websites</p>
          <h2 className="mt-3 max-w-[22ch]">Websites delivered for growing businesses</h2>
          <div data-reveal-stagger suppressHydrationWarning className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clientSites.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="card group block border border-hair"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-soft">
                  <Image
                    src={c.image}
                    alt={`${c.name} website`}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-lg group-hover:text-brand-ink">{c.name}</h3>
                  <span className="label text-muted">Visit ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Businesses />
      <CTA />
    </>
  );
}
