import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Collaborations | Partners & Research Institutions",
  "I.STEM Lab collaborates with companies, universities and institutions including ICIMOD and Kathmandu University.",
  "/collaborations"
);

export default function Collaborations() {
  return (
    <>
      <PageHero
        title="Collaborations"
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
      <CTA />
    </>
  );
}
