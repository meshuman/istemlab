import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Image from "next/image";
import { differentiators, pageMeta } from "@/lib/site";
import { values } from "@/lib/content";

export const metadata = pageMeta(
  "About I.STEM Lab | Applied AI & Geospatial Engineers",
  "I.STEM Lab is an applied AI and geospatial engineering studio with a team based in Nepal, focused on AI that delivers real outcomes.",
  "/about"
);

export default function About() {
  return (
    <>
      <PageHero
        title="About I.STEM Lab"
        intro="We are an applied AI and geospatial engineering studio. Our job is simple: help organizations get real, lasting value from AI."
        crumbs={["Company"]}
      />
      <section className="pb-16">
        <div data-reveal suppressHydrationWarning className="container-x">
          <div className="relative aspect-[21/9] overflow-hidden bg-soft">
            <Image src="/about-team.webp" alt="The I.STEM Lab team" fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div data-reveal-stagger suppressHydrationWarning className="container-x grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="!text-3xl">Who we are</h2>
            <p className="mt-4 text-muted">
              I.STEM Lab began as a team of young geospatial engineers who saw how
              much value was locked inside satellite imagery and location data.
              Today we combine that geospatial depth with modern AI: RAG
              systems, autonomous agents, 3D and VR, and the strategy and
              training organizations need to adopt them. Our team is based in
              Nepal and works with clients around the world.
            </p>
          </div>
          <div>
            <h2 className="!text-3xl">Who we work with</h2>
            <p className="mt-4 text-muted">
              Businesses, universities, research institutes, NGOs and
              government agencies, from early-stage founders in our incubation
              program to established organizations building their AI roadmap.
            </p>
          </div>
          <div>
            <h2 className="!text-3xl">Our mission</h2>
            <p className="mt-4 text-muted">
              Make advanced AI and geospatial technology practical, affordable
              and useful, especially for the communities and organizations that
              need it most.
            </p>
          </div>
          <div>
            <h2 className="!text-3xl">How we work</h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li><strong className="text-foreground">Outcomes over output.</strong> We agree on what success means before we build.</li>
              <li><strong className="text-foreground">Evidence first.</strong> Prototypes and evaluation prove an approach before you invest more.</li>
              <li><strong className="text-foreground">Built to last.</strong> Documented, maintainable systems and trained teams, not black boxes.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-soft py-20">
        <div data-reveal-stagger suppressHydrationWarning className="container-x grid gap-8 md:grid-cols-3">
          {differentiators.map((d) => (
            <div key={d.t} className="border-t border-foreground pt-5">
              <h3 className="text-xl">{d.t}</h3>
              <p className="mt-2 text-[15px] text-muted">{d.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24">
        <div data-reveal suppressHydrationWarning className="container-x">
          <p className="label text-brand-ink">Our values</p>
          <h2 className="mt-3 max-w-[22ch]">What we stand for</h2>
          <div data-reveal-stagger suppressHydrationWarning className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, n) => (
              <div key={v.t} className="border-t border-hair pt-5">
                <span className="label text-muted">0{n + 1}</span>
                <h3 className="mt-3 text-xl">{v.t}</h3>
                <p className="mt-2 text-[15px] text-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Team />
      <FAQ />
      <CTA />
    </>
  );
}
