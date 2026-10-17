"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LearnCard from "./LearnCard";

/**
 * Shows where an article sits in a learning path and what to read next.
 * An article can belong to more than one path. Links from a path page carry ?path=<slug>, so the reader
 * keeps their own path; with no parameter the first path is used. Read after load, so the page stays static.
 *
 *  variant="top"  : progress banner under the article title
 *  variant="keep" : "Continue your path" (previous / next) and the most relevant articles from that path
 */
export default function PathAware({ memberships, variant }) {
  const [active, setActive] = useState(memberships[0]?.slug);

  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("path");
    if (wanted && memberships.some((m) => m.slug === wanted)) setActive(wanted);
  }, [memberships]);

  const m = memberships.find((x) => x.slug === active) || memberships[0];
  if (!m) return null;

  const withPath = (a) => `/learn/${a.type}/${a.slug}?path=${m.slug}`;
  const others = memberships.filter((x) => x.slug !== m.slug);
  const percent = Math.round((m.index / m.total) * 100);

  if (variant === "top") {
    return (
      <aside aria-label="Learning path progress" className="mt-8 border border-hair bg-soft p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="label text-brand-ink">
            Part {m.index} of {m.total} ·{" "}
            <Link href={`/learn/paths/${m.slug}`} className="underline underline-offset-4 hover:text-foreground">
              {m.title}
            </Link>
          </p>
          {m.next && (
            <Link href={withPath(m.next)} className="label text-[11px] hover:text-brand-ink">
              Next: {m.next.title} →
            </Link>
          )}
        </div>
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={m.total}
          aria-valuenow={m.index}
          aria-label={`Step ${m.index} of ${m.total}`}
          className="mt-4 h-1 w-full bg-hair"
        >
          <div className="h-full bg-brand transition-[width] duration-500" style={{ width: `${percent}%` }} />
        </div>
        {others.length > 0 && (
          <p className="mt-3 text-[13px] text-muted">
            Also part of:{" "}
            {others.map((o, i) => (
              <span key={o.slug}>
                {i > 0 && ", "}
                <Link href={`/learn/paths/${o.slug}`} className="underline underline-offset-4 hover:text-foreground">
                  {o.title}
                </Link>
              </span>
            ))}
          </p>
        )}
      </aside>
    );
  }

  // variant === "keep"
  return (
    <div>
      <p className="label text-brand-ink">Your path</p>
      <h2 className="mt-3 !text-3xl">Keep learning</h2>
      <p className="mt-3 max-w-[60ch] text-muted">
        You are on step {m.index} of {m.total} in{" "}
        <Link href={`/learn/paths/${m.slug}`} className="underline underline-offset-4 hover:text-foreground">
          {m.title}
        </Link>
        . These are the articles that fit best from here.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {m.prev ? (
          <Link href={withPath(m.prev)} className="card group border border-hair bg-background p-6">
            <p className="label text-[11px] text-muted">← Previous step</p>
            <p className="mt-2 text-lg leading-snug group-hover:text-brand-ink">{m.prev.title}</p>
            <p className="label mt-3 text-[11px] text-muted">
              {m.prev.typeLabel} · {m.prev.minutes} min
            </p>
          </Link>
        ) : (
          <div className="border border-dashed border-hair p-6 text-muted">
            <p className="label text-[11px]">You started here</p>
            <p className="mt-2 text-[15px]">This is the first article in the path.</p>
          </div>
        )}
        {m.next ? (
          <Link href={withPath(m.next)} className="card group border border-foreground bg-background p-6 md:text-right">
            <p className="label text-[11px] text-brand-ink">Next step →</p>
            <p className="mt-2 text-lg leading-snug group-hover:text-brand-ink">{m.next.title}</p>
            <p className="label mt-3 text-[11px] text-muted">
              {m.next.typeLabel} · {m.next.minutes} min
            </p>
          </Link>
        ) : (
          <Link href={`/learn/paths/${m.slug}`} className="card group border border-foreground bg-background p-6 md:text-right">
            <p className="label text-[11px] text-brand-ink">Path complete</p>
            <p className="mt-2 text-lg leading-snug group-hover:text-brand-ink">Review the whole path and choose where to go next →</p>
          </Link>
        )}
      </div>

      {m.related.length > 0 && (
        <>
          <h3 className="label mt-12 text-muted">More from this path</h3>
          <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {m.related.map((r) => (
              <li key={r.slug}>
                <LearnCard item={{ ...r, href: withPath(r) }} />
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="mt-8">
        <Link href="/learn/paths" className="label hover:text-brand-ink">
          See all learning paths →
        </Link>
      </p>
    </div>
  );
}
