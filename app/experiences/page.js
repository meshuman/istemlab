import PageHero from "@/components/PageHero";
import ContentList from "@/components/ContentList";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/site";
import { experiences } from "@/lib/experiences";

export const metadata = pageMeta(
  "Experiences | Lessons from Planning & Running AI Projects",
  "What we learned planning and operationalizing GeoAI, data platform and product projects: practical lessons from I.STEM Lab's engagements.",
  "/experiences"
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
  hay: [e.title, e.excerpt, e.project, e.phase, ...e.takeaways].join(" ").toLowerCase(),
}));

export default function Experiences() {
  return (
    <>
      <PageHero
        title="Experiences"
        intro="Honest notes from the field: what we learned while planning and operationalizing projects, shared so your next project goes smoother."
        crumbs={["Company"]}
      />

      <section className="pb-24" aria-label="Experiences">
        <div data-reveal suppressHydrationWarning className="container-x">
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
