import Link from "next/link";
import Image from "next/image";

export const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", timeZone: "UTC" });

export default function BlogCard({ post }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="card group flex flex-col border border-hair">
      <div className="relative aspect-[16/10] overflow-hidden bg-soft">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width:768px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="label text-muted">
          <span className="text-brand-ink">{post.tag}</span> · <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h3 className="mt-3 text-xl group-hover:text-brand-ink">{post.title}</h3>
        <p className="mt-3 text-[15px] text-muted">{post.excerpt}</p>
        <span className="label mt-auto pt-6 text-brand-ink">Read article →</span>
      </div>
    </Link>
  );
}
