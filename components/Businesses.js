import Image from "next/image";
import { businesses } from "@/lib/site";

/** Current businesses / ventures, shown below the portfolio. */
export default function Businesses() {
  return (
    <section className="bg-soft py-24" aria-labelledby="businesses-heading">
      <div data-reveal suppressHydrationWarning className="container-x">
        <p className="label text-brand-ink">Current businesses</p>
        <h2 id="businesses-heading" className="mt-3 max-w-[22ch]">Products we run ourselves</h2>
        <p className="mt-4 max-w-[58ch] text-muted">
          Beyond client projects, we build and operate our own products. Visit them live.
        </p>

        <div data-reveal-stagger suppressHydrationWarning className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businesses.map((b) => (
            <article key={b.name} className="card group flex flex-col border border-hair bg-background">
              <a
                href={b.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${b.name}: visit ${b.domain}`}
                className="relative block aspect-[16/10] overflow-hidden bg-soft"
              >
                <Image
                  src={b.image}
                  alt={`${b.name} website`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover object-top group-hover:scale-[1.03]"
                />
              </a>
              <div className="flex flex-1 flex-col p-7">
                <p className="label text-[11px] text-brand-ink">{b.category}</p>
                <h3 className="mt-3 text-2xl">{b.name}</h3>
                <p className="mt-3 text-[15px] text-muted">{b.description}</p>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label mt-auto flex items-center justify-between border-t border-hair pt-5 text-[12px] hover:text-brand-ink"
                >
                  <span className="text-foreground">{b.domain}</span>
                  <span className="text-brand-ink">Visit website ↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
