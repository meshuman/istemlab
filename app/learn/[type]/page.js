import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ContentList from "@/components/ContentList";
import CTA from "@/components/CTA";
import { pageMeta } from "@/lib/site";
import { learnTypes, getType, itemsOfType, toCards } from "@/lib/learn";

// Every valid address is prerendered at build time via generateStaticParams (unknown ones 404),
// so these pages may block on navigation instead of streaming behind <Suspense>.
export const instant = false;

export function generateStaticParams() {
  return learnTypes.map((t) => ({ type: t.slug }));
}

export async function generateMetadata({ params }) {
  const { type } = await params;
  const t = getType(type);
  if (!t) return {};
  return pageMeta(`${t.label} | Learn GeoAI, RAG & AI`, `${t.blurb} ${t.long}`, `/learn/${t.slug}`);
}

export default async function LearnType({ params }) {
  const { type } = await params;
  const t = getType(type);
  if (!t) notFound();
  const cards = toCards(itemsOfType(t.slug));

  return (
    <>
      <PageHero title={t.label} intro={t.long} crumbs={["Learn"]} />
      <section className="pb-24">
        <div data-reveal suppressHydrationWarning className="container-x">
          <ContentList
            items={cards}
            variant="learn"
            noun={t.singular.toLowerCase()}
            chipKey="topic"
            chipLabel="Filter by topic"
            selectKey="level"
            selectLabel="All levels"
            searchPlaceholder={`Search ${t.label.toLowerCase()}…`}
          />
        </div>
      </section>
      <CTA />
    </>
  );
}
