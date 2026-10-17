import Link from "next/link";
import { learnTypes, itemsOfType } from "@/lib/learn";
import { experiences } from "@/lib/experiences";

// The four Learn sections shown as cards: three article types plus Experiences.
// Used on the home page and on the Learn hub, so the counts and wording stay in step.
export default function LearnSections({ className = "" }) {
  const sections = [
    ...learnTypes.map((t) => ({
      href: `/learn/${t.slug}`,
      label: t.label,
      blurb: t.blurb,
      count: itemsOfType(t.slug).length,
    })),
    {
      href: "/learn/experiences",
      label: "Experiences",
      blurb: "Practical lessons for planning, running and keeping AI projects useful.",
      count: experiences.length,
    },
  ];

  return (
    <div data-reveal-stagger suppressHydrationWarning className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {sections.map((s, n) => (
        <Link key={s.href} href={s.href} className="card group flex flex-col border border-hair bg-background p-7">
          <span className="label text-muted">0{n + 1}</span>
          <h3 className="mt-6 !text-[clamp(26px,2.4vw,36px)] group-hover:text-brand-ink">{s.label}</h3>
          <p className="mt-3 text-[15px] text-muted">{s.blurb}</p>
          <p className="label mt-auto flex items-center justify-between pt-8 text-muted">
            <span>
              {s.count} {s.count === 1 ? "article" : "articles"}
            </span>
            <span className="text-brand-ink">Browse →</span>
          </p>
        </Link>
      ))}
    </div>
  );
}
