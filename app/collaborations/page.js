import Link from "next/link";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Collaborations | Partners & Research Institutions",
  "I.STEM Lab collaborates with universities, research institutes, development agencies and companies on GeoAI research, grant proposals, pilots and training.",
  "/collaborations"
);

export default function Collaborations() {
  return (
    <>
      <PageHero
        title="Collaborations"
        crumbs={["Company"]}
        intro="The best AI projects are built together. We partner with universities, research institutes, development organizations and companies on research, pilots and long-term programs."
      />
      <Partners />
      <section className="py-16">
        <div data-reveal-stagger suppressHydrationWarning className="container-x grid gap-6 md:grid-cols-3">
          {[
            ["Research partners", "Joint studies, grant proposals and student projects in remote sensing, GeoAI and applied machine learning."],
            ["Industry partners", "Co-development of AI products, RAG and agent solutions, and 3D/VR experiences, plus incubation for new ventures."],
            ["Public sector", "GeoAI monitoring systems, AI strategy and staff training for government and development agencies."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-none border border-hair p-7">
              <h2 className="text-xl font-medium">{t}</h2>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-soft py-20">
        <div data-reveal suppressHydrationWarning className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="label text-brand-ink">How a collaboration works</p>
            <h2 className="mt-3 !text-[clamp(26px,2.6vw,40px)]">From first call to shared results</h2>
            <p className="mt-4 text-muted">
              Most collaborations start small: one question, one dataset and a clear way to tell whether it worked.
              Larger programmes grow from there.
            </p>
          </div>
          <ol className="space-y-6">
            {[
              ["Agree the question", "What decision or method should the work improve, and who will use the result?"],
              ["Agree roles and data", "Who provides data, expertise, time and funding, and who owns what is produced."],
              ["Run a scoped pilot", "A short, measured first phase with a written success test, before any long commitment."],
              ["Share and scale", "Publish or hand over the results, train the people who will run them and plan the next phase."],
            ].map(([t, d], n) => (
              <li key={t} className="flex gap-5 border-t border-hair pt-5">
                <span className="label mt-1 text-brand-ink">0{n + 1}</span>
                <div>
                  <h3 className="text-lg font-medium">{t}</h3>
                  <p className="mt-1 text-[15px] text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div data-reveal suppressHydrationWarning className="container-x max-w-3xl">
          <h2 className="label text-brand-ink">Questions partners ask</h2>
          <dl className="mt-6 divide-y divide-hair border-y border-hair">
            {[
              ["Can you join a grant proposal?", "Yes. We contribute technical design, work plans and budgets for GeoAI, data and immersive components, and can lead or support delivery."],
              ["Do you work with students and universities?", "Yes. We co-supervise applied projects and internships in remote sensing, machine learning and 3D, and share our learning material freely."],
              ["Who owns the results?", "It is agreed before work starts. We are comfortable with shared, open or partner-owned results, depending on the funder and the purpose."],
              ["Where do you work?", "We are based in Nepal and collaborate remotely with partners in other countries and time zones."],
            ].map(([q, a]) => (
              <div key={q} className="py-5">
                <dt className="text-[19px] font-medium">{q}</dt>
                <dd className="mt-2 text-muted">{a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-muted">
            See our <Link href="/research" className="text-brand-ink underline underline-offset-4">research</Link>,{" "}
            our <Link href="/work" className="text-brand-ink underline underline-offset-4">work</Link> and the{" "}
            <Link href="/learn/experiences" className="text-brand-ink underline underline-offset-4">lessons we share</Link> from running projects.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
