import Link from "next/link";
import Image from "next/image";

const TYPE_LABEL = { tutorials: "Tutorial", concepts: "Concept", guides: "Guide" };

// Compact card with a small photo on top, so long lists stay light and scannable.
export default function LearnCard({ item }) {
  return (
    <Link
      href={item.href || `/learn/${item.type}/${item.slug}`}
      className="card group flex h-full flex-col border border-hair bg-background"
    >
      {item.image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-soft">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
            className="object-cover group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
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
      </div>
    </Link>
  );
}
