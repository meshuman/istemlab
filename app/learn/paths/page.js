import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/site";
import { learnPaths, pathItems, pathStats } from "@/lib/learn";

export const metadata = pageMeta(
  "Learning Paths | GeoAI, RAG, AI Adoption, 3D & VR",
  "Step-by-step learning paths from I.STEM Lab: GeoAI from zero, the maths and science behind AI, building a trusted RAG assistant, adopting AI and immersive 3D, VR and AR.",
  "/learn/paths"
);

export default function PathsIndex() {
  return (
    <>
      <PageHero
        title="Learning paths"
        intro="Each path is a short, ordered set of articles that builds step by step, from the first idea to something you can use. Pick the one that matches where you are."
        crumbs={["Learn"]}
      />
      <section className="pb-24">
        <div data-reveal-stagger suppressHydrationWarning className="container-x grid gap-6 lg:grid-cols-2">
          {learnPaths.map((p, n) => {
            const { count, minutes } = pathStats(p);
            const steps = pathItems(p);
            return (
              <article key={p.slug} className="card flex flex-col border border-hair bg-background p-8">
                <p className="label text-muted">0{n + 1}</p>
                <h2 className="mt-4 !text-[clamp(24px,2.2vw,32px)]">
                  <Link href={`/learn/paths/${p.slug}`} className="hover:text-brand-ink">
                    {p.title}
                  </Link>
                </h2>
                <p className="label mt-3 text-[11px] text-brand-ink">
                  {count} articles · {minutes} min · {p.level}
                </p>
                <p className="mt-4 text-[15px] text-muted">{p.blurb}</p>
                <p className="mt-2 text-[13px] text-muted">
                  <span className="font-medium text-foreground">Best for:</span> {p.audience}
                </p>

                <ol className="mt-6 space-y-2 border-t border-hair pt-5">
                  {steps.slice(0, 3).map((s, i) => (
                    <li key={s.slug} className="flex gap-3 text-[15px]">
                      <span className="label mt-0.5 w-5 shrink-0 text-brand-ink">{i + 1}</span>
                      <span>{s.title}</span>
                    </li>
                  ))}
                  {steps.length > 3 && <li className="label pl-8 text-[11px] text-muted">+ {steps.length - 3} more</li>}
                </ol>

                <Link href={`/learn/paths/${p.slug}`} className="btn btn-solid mt-8 self-start">
                  View the path
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <CTA
        title="Not sure which path fits?"
        text="Tell us what you are trying to do and we will point you to the right starting place, or help you build it."
      />
    </>
  );
}
