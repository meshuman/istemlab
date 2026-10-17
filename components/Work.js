"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects as featured } from "@/lib/site";

export default function Work({
  showAllLink = true,
  items = featured,
  eyebrow = "Selected work",
  title = "Real problems, working solutions",
  intro = "A live AI travel marketplace and a business website that wins customers: here is how we turn real challenges into products people use.",
}) {
  const [tab, setTab] = useState("All");
  const types = [...new Set(items.map((p) => p.type))];
  const list = items.filter((p) => tab === "All" || p.type === tab);

  return (
    <section className="py-24">
      <div data-reveal suppressHydrationWarning className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-brand-ink">{eyebrow}</p>
            <h2 className="mt-3 max-w-[20ch]">{title}</h2>
            <p className="mt-4 max-w-[56ch] text-muted">{intro}</p>
          </div>
          {showAllLink && (
            <Link href="/work" className="btn btn-ghost">
              See all work
            </Link>
          )}
        </div>

        {types.length > 1 && (
        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {["All", ...types].map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`label min-h-11 px-4 py-2 ${
                tab === t ? "bg-brand text-white" : "bg-soft text-foreground hover:bg-silver/50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {list.map((p) => {
            const external = p.href.startsWith("http");
            return (
              <a
                key={p.title}
                href={p.href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="card group flex flex-col border border-hair"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-soft">
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="label text-brand-ink">
                    {p.type} · {p.service}
                  </span>
                  <h3 className="mt-3 text-2xl group-hover:text-brand-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.subtitle}</p>
                  <dl className="mt-6 space-y-4 text-[15px]">
                    <div>
                      <dt className="label text-muted">Challenge</dt>
                      <dd className="mt-1">{p.challenge}</dd>
                    </div>
                    <div>
                      <dt className="label text-muted">What we built</dt>
                      <dd className="mt-1">{p.solution}</dd>
                    </div>
                  </dl>
                  <span className="label mt-auto pt-6 text-brand-ink">
                    {external ? "Visit project ↗" : "Read more →"}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
