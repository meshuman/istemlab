"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import LearnCard from "./LearnCard";

export const PAGE_SIZE = 12;

const CARDS = { experience: ExperienceCard, learn: LearnCard };

const SORTS = {
  newest: { label: "Newest first", fn: (a, b) => b.date.localeCompare(a.date) },
  oldest: { label: "Oldest first", fn: (a, b) => a.date.localeCompare(b.date) },
  az: { label: "Title A to Z", fn: (a, b) => a.title.localeCompare(b.title) },
};

// Page numbers with ellipses: 1 … 4 5 [6] 7 8 … 20
function pageWindow(current, total) {
  const set = new Set([1, total, current - 1, current, current + 1]);
  const nums = [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out = [];
  nums.forEach((n, i) => {
    if (i && n - nums[i - 1] > 1) out.push("…");
    out.push(n);
  });
  return out;
}

/**
 * Generic searchable, filterable, paginated list used by Experiences and Learn.
 *  - items: lightweight card records with a pre-built lowercase `hay` search string
 *  - variant: which card to render ("experience" | "learn")
 *  - chipKey / chipLabel: field shown as filter chips (with live counts)
 *  - selectKey / selectLabel: field shown as a dropdown filter
 * State is mirrored to the URL (?q=&<chipKey>=&<selectKey>=&sort=&page=) so views are shareable.
 */
export default function ContentList({
  items,
  variant = "experience",
  noun = "item",
  chipKey,
  chipLabel = "Filter",
  selectKey,
  selectLabel = "All",
  searchPlaceholder = "Search…",
}) {
  const Card = CARDS[variant];
  const [q, setQ] = useState("");
  const [chip, setChip] = useState("All");
  const [select, setSelect] = useState("All");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [ready, setReady] = useState(false);
  const topRef = useRef(null);
  const searchRef = useRef(null);
  const deferredQ = useDeferredValue(q);

  // Restore state from the URL after mount (server HTML stays the default view, good for SEO)
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setQ(sp.get("q") || "");
    if (chipKey) setChip(sp.get(chipKey) || "All");
    if (selectKey) setSelect(sp.get(selectKey) || "All");
    setSort(SORTS[sp.get("sort")] ? sp.get("sort") : "newest");
    setPage(Math.max(1, parseInt(sp.get("page") || "1", 10) || 1));
    setReady(true);
  }, [chipKey, selectKey]);

  // Mirror state to the URL
  useEffect(() => {
    if (!ready) return;
    const sp = new URLSearchParams();
    if (q.trim()) sp.set("q", q.trim());
    if (chipKey && chip !== "All") sp.set(chipKey, chip);
    if (selectKey && select !== "All") sp.set(selectKey, select);
    if (sort !== "newest") sp.set("sort", sort);
    if (page > 1) sp.set("page", String(page));
    const qs = sp.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${qs ? `?${qs}` : ""}`);
  }, [q, chip, select, sort, page, ready, chipKey, selectKey]);

  // "/" focuses the search box
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(tag)) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const terms = useMemo(() => deferredQ.trim().toLowerCase().split(/\s+/).filter(Boolean), [deferredQ]);

  // 1) text search
  const searched = useMemo(() => items.filter((e) => terms.every((t) => e.hay.includes(t))), [items, terms]);

  // chip counts reflect the current search
  const chips = useMemo(() => {
    if (!chipKey) return [];
    const m = new Map();
    searched.forEach((e) => m.set(e[chipKey], (m.get(e[chipKey]) || 0) + 1));
    return [...m.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [searched, chipKey]);
  const selectOptions = useMemo(
    () => (selectKey ? [...new Set(items.map((e) => e[selectKey]))].sort() : []),
    [items, selectKey]
  );

  // 2) facets + sort
  const results = useMemo(
    () =>
      searched
        .filter(
          (e) =>
            (!chipKey || chip === "All" || e[chipKey] === chip) &&
            (!selectKey || select === "All" || e[selectKey] === select)
        )
        .sort(SORTS[sort].fn),
    [searched, chip, select, sort, chipKey, selectKey]
  );

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * PAGE_SIZE;
  const visible = results.slice(start, start + PAGE_SIZE);
  const filtered = q.trim() || chip !== "All" || select !== "All";
  const plural = (n) => (n === 1 ? noun : `${noun}s`);

  const reset = () => {
    setQ("");
    setChip("All");
    setSelect("All");
    setSort("newest");
    setPage(1);
  };
  const goPage = (p) => {
    setPage(p);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    topRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  const chipCls = (active) =>
    `label min-h-10 px-4 py-2 transition-colors ${
      active ? "bg-brand text-white" : "bg-soft text-foreground hover:bg-silver/50"
    }`;
  const field = "h-11 w-full border border-hair bg-transparent px-4 text-base focus:border-brand-ink";
  const cols = selectKey ? "md:grid-cols-[1fr_auto_auto]" : "md:grid-cols-[1fr_auto]";

  return (
    <div>
      {/* Controls */}
      <form role="search" onSubmit={(e) => e.preventDefault()} className={`grid gap-4 ${cols}`}>
        <div className="relative">
          <label htmlFor="list-search" className="sr-only">
            Search {noun}s
          </label>
          <input
            id="list-search"
            ref={searchRef}
            type="search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            onKeyDown={(e) => e.key === "Escape" && (setQ(""), setPage(1))}
            placeholder={`${searchPlaceholder}   ( / )`}
            autoComplete="off"
            className={`${field} pr-10 [&::-webkit-search-cancel-button]:hidden`}
          />
          {q && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => {
                setQ("");
                setPage(1);
                searchRef.current?.focus();
              }}
              className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-xl text-muted hover:text-foreground"
            >
              ×
            </button>
          )}
        </div>

        {selectKey && (
          <div>
            <label htmlFor="list-select" className="sr-only">
              Filter by {selectLabel.toLowerCase()}
            </label>
            <select
              id="list-select"
              value={select}
              onChange={(e) => {
                setSelect(e.target.value);
                setPage(1);
              }}
              className={`${field} md:w-56`}
            >
              <option value="All">{selectLabel}</option>
              {selectOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="list-sort" className="sr-only">
            Sort {noun}s
          </label>
          <select
            id="list-sort"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
            className={`${field} md:w-44`}
          >
            {Object.entries(SORTS).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* Chips */}
      {chipKey && (
        <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label={chipLabel}>
          <button
            type="button"
            aria-pressed={chip === "All"}
            onClick={() => {
              setChip("All");
              setPage(1);
            }}
            className={chipCls(chip === "All")}
          >
            All ({searched.length})
          </button>
          {chips.map(([name, n]) => (
            <button
              key={name}
              type="button"
              aria-pressed={chip === name}
              onClick={() => {
                setChip(name);
                setPage(1);
              }}
              className={chipCls(chip === name)}
            >
              {name} ({n})
            </button>
          ))}
          {filtered && (
            <button type="button" onClick={reset} className="label ml-auto min-h-10 px-2 text-muted underline underline-offset-4 hover:text-foreground">
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Result summary (announced to screen readers) */}
      <p ref={topRef} className="label mt-8 scroll-mt-24 text-muted" aria-live="polite">
        {results.length === 0
          ? `No ${noun}s found`
          : `Showing ${start + 1}–${start + visible.length} of ${results.length} ${plural(results.length)}`}
        {q.trim() && ` for “${q.trim()}”`}
      </p>

      {/* Results */}
      {visible.length > 0 ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((e) => (
            <li key={e.slug + (e.type || "")}>
              <Card item={e} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 border border-hair p-10 text-center">
          <p className="text-lg font-medium">Nothing matches your search.</p>
          <p className="mt-2 text-muted">Try fewer words, or clear the filters.</p>
          <button type="button" onClick={reset} className="btn btn-solid mt-6">
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            disabled={current === 1}
            onClick={() => goPage(current - 1)}
            className="btn btn-ghost !px-4 !py-2 disabled:pointer-events-none disabled:opacity-40"
          >
            ← Prev
          </button>
          {pageWindow(current, totalPages).map((n, i) =>
            n === "…" ? (
              <span key={`gap-${i}`} aria-hidden="true" className="label px-1 text-muted">
                …
              </span>
            ) : (
              <button
                key={n}
                type="button"
                onClick={() => goPage(n)}
                aria-current={n === current ? "page" : undefined}
                aria-label={`Page ${n}`}
                className={`label h-10 min-w-10 px-3 ${n === current ? "bg-brand text-white" : "bg-soft hover:bg-silver/50"}`}
              >
                {n}
              </button>
            )
          )}
          <button
            type="button"
            disabled={current === totalPages}
            onClick={() => goPage(current + 1)}
            className="btn btn-ghost !px-4 !py-2 disabled:pointer-events-none disabled:opacity-40"
          >
            Next →
          </button>
        </nav>
      )}
    </div>
  );
}
