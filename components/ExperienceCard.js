import Link from "next/link";
import Image from "next/image";
import { formatDate } from "./BlogCard";

// Compact card: used in the searchable list and in "more experiences" strips.
export default function ExperienceCard({ item }) {
  return (
    <Link href={`/learn/experiences/${item.slug}`} className="card group flex h-full flex-col border border-hair bg-background">
      <div className="relative aspect-[16/9] overflow-hidden bg-soft">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
          className="object-cover object-top group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="label text-[11px] text-muted">
          <span className="text-brand-ink">{item.phase}</span> · {item.project}
        </p>
        <h3 className="mt-2 line-clamp-2 text-lg leading-snug group-hover:text-brand-ink">{item.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{item.excerpt}</p>
        <p className="label mt-auto flex items-center justify-between pt-4 text-[11px] text-muted">
          <span>
            <time dateTime={item.date}>{formatDate(item.date)}</time> · {item.minutes} min read
          </span>
          <span className="text-brand-ink">Read →</span>
        </p>
      </div>
    </Link>
  );
}
