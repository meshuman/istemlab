import Link from "next/link";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import Expertise from "@/components/Expertise";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import LearnSections from "@/components/LearnSections";
import { differentiators, process } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />

      <section className="py-24">
        <div data-reveal suppressHydrationWarning className="container-x grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="label text-brand-ink">Why I.STEM Lab</p>
            <h2 className="mt-3 max-w-[16ch]">AI that works outside the demo</h2>
          </div>
          <div>
            <p className="text-xl leading-relaxed">
              I.STEM Lab is an applied AI and geospatial engineering studio. We
              help businesses, research institutes and public organizations
              move from AI ambition to systems their people actually use.
            </p>
            <div data-reveal-stagger suppressHydrationWarning className="mt-10 grid gap-8 sm:grid-cols-3">
              {differentiators.map((d) => (
                <div key={d.t} className="border-t border-hair pt-4">
                  <h3 className="text-lg">{d.t}</h3>
                  <p className="mt-2 text-[15px] text-muted">{d.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Expertise />
      <Stats />
      <Work />

      <section className="bg-soft py-24">
        <div data-reveal suppressHydrationWarning className="container-x">
          <p className="label text-brand-ink">How we work</p>
          <h2 className="mt-3 max-w-[20ch]">A low-risk path from idea to impact</h2>
          <ol data-reveal-stagger suppressHydrationWarning className="mt-12 grid gap-6 md:grid-cols-4">
            {process.map((p, n) => (
              <li key={p.step} className="border-t border-foreground pt-5">
                <span className="label text-brand-ink">0{n + 1}</span>
                <h3 className="mt-3 text-xl">{p.step}</h3>
                <p className="mt-2 text-[15px] text-muted">{p.desc}</p>
              </li>
            ))}
          </ol>
          <Link href="/contact" className="btn btn-solid mt-12">Start with discovery</Link>
        </div>
      </section>

      <Team />
      <section className="border-t border-hair py-24" aria-labelledby="learn-heading">
        <div data-reveal suppressHydrationWarning className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label text-brand-ink">Free to read</p>
              <h2 id="learn-heading" className="mt-3">Learn</h2>
              <p className="mt-4 max-w-[58ch] text-muted">
                Concepts, tutorials and guides from the team that builds this technology every day. Free to read,
                practical to use.
              </p>
            </div>
            <Link href="/learn" className="btn btn-ghost">Explore Learn</Link>
          </div>

          <LearnSections className="mt-12" />

          <p className="mt-8 text-[15px] text-muted">
            Not sure where to start?{" "}
            <Link href="/learn/paths" className="font-medium text-foreground underline underline-offset-4 hover:text-brand-ink">
              Follow a learning path →
            </Link>
          </p>
        </div>
      </section>
      <FAQ />
      <CTA />
    </>
  );
}
