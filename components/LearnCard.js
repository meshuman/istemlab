import Link from "next/link";

const TYPE_LABEL = { tutorials: "Tutorial", concepts: "Concept", guides: "Guide" };

// Compact text card (no image) so long lists stay light and scannable.
export default function LearnCard({ item }) {
  return (
    <Link
      href={`/learn/${item.type}/${item.slug}`}
      className="card group flex h-full flex-col border border-hair bg-background p-5"
    >
      <p className="label flex items-center justify-between text-[11px] text-muted">
        <span className="text-brand-ink">{TYPE_LABEL[item.type]}</span>
        <span>{item.level}</span>
      </p>
      <h3 className="mt-3 line-clamp-2 text-lg leading-snug group-hover:text-brand-ink">{item.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-muted">{item.excerpt}</p>
      <p className="label mt-auto flex items-center justify-between pt-5 text-[11px] text-muted">
        <span>
          {item.topic} · {item.minutes} min
        </span>
        <span className="text-brand-ink">Open →</span>
      </p>
    </Link>
  );
}
