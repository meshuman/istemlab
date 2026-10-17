import PageHero from "@/components/PageHero";
import ContentList from "@/components/ContentList";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/site";
import { experiences } from "@/lib/experiences";
import { readingMinutes } from "@/lib/readtime";

export const metadata = pageMeta(
  "Experiences: Lessons from Running AI Projects",
  "Practical lessons for planning, estimating and running AI and GeoAI projects: questions to ask, data problems, adoption, monitoring and remote teams.",
  "/learn/experiences"
);

// Send only what the list needs to the browser (not full article bodies),
// plus a lowercase search string, so the page stays fast with hundreds of entries.
const items = experiences.map((e) => ({
  slug: e.slug,
  title: e.title,
  phase: e.phase,
  project: e.project,
  excerpt: e.excerpt,
  date: e.date,
  image: e.image,
  minutes: readingMinutes(e),
  hay: [e.title, e.excerpt, e.project, e.phase, ...e.takeaways].join(" ").toLowerCase(),
}));

export default function Experiences() {
  return (
    <>
      <PageHero
        title="Experiences"
        intro="Practical lessons from planning and running AI, GeoAI and immersive 3D projects: what to ask, what to avoid and what to do next, shared so your own project goes smoother."
        crumbs={["Learn"]}
      />

      <section className="pb-24" aria-label="Experiences">
        <div data-reveal suppressHydrationWarning className="container-x">
          <h2 className="sr-only">All experiences</h2>
          <ContentList
            items={items}
            variant="experience"
            noun="experience"
            chipKey="phase"
            chipLabel="Filter by phase"
            selectKey="project"
            selectLabel="All projects"
            searchPlaceholder="Search experiences, projects, lessons…"
          />
        </div>
      </section>

      <CTA
        title="Planning something similar?"
        text="Tell us about your project. We will share what has worked, what has not, and how to avoid the common pitfalls."
      />
    </>
  );
}
