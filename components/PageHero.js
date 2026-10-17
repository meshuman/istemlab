import Link from "next/link";

export default function PageHero({ title, intro, crumbs = [] }) {
  return (
    <section className="bg-background py-16">
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
          <Link href="/" className="hover:text-brand-ink">Home</Link>
          {crumbs.map((c) => (
            <span key={c}> / {c}</span>
          ))}
          <span> / {title}</span>
        </nav>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-3xl text-lg text-muted">{intro}</p>}
      </div>
    </section>
  );
}
