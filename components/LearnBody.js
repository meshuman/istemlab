import CodeBlock from "./CodeBlock";

export const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Renders the structured body blocks defined in lib/learn.js */
export default function LearnBody({ blocks }) {
  return (
    <div className="space-y-6 text-lg leading-relaxed">
      {blocks.map((b, n) => {
        switch (b.t) {
          case "h2":
            return (
              <h2 key={n} id={slugify(b.text)} className="scroll-mt-24 !text-[clamp(24px,2.4vw,34px)] pt-4">
                {b.text}
              </h2>
            );
          case "p":
            return <p key={n}>{b.text}</p>;
          case "list":
            return (
              <ul key={n} className="space-y-2">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 bg-foreground" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "steps":
            return (
              <ol key={n} className="space-y-3">
                {b.items.map((it, i) => (
                  <li key={it} className="flex gap-4">
                    <span className="label mt-2 w-6 shrink-0 text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ol>
            );
          case "qa":
            return (
              <dl key={n} className="divide-y divide-hair border-y border-hair">
                {b.items.map((x) => (
                  <div key={x.q} className="py-5">
                    <dt className="text-[19px] font-medium leading-snug">{x.q}</dt>
                    <dd className="mt-2 text-muted">{x.a}</dd>
                  </div>
                ))}
              </dl>
            );
          case "formula":
            return (
              <figure key={n} className="border border-hair bg-soft p-6">
                <p className="overflow-x-auto text-center font-mono text-[clamp(16px,2vw,22px)] leading-relaxed">{b.text}</p>
                {b.legend.length > 0 && (
                  <figcaption className="mt-5 border-t border-hair pt-4 text-[15px] text-muted">
                    <span className="label mb-2 block text-[11px]">Where</span>
                    <ul className="space-y-1">
                      {b.legend.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </figcaption>
                )}
              </figure>
            );
          case "code":
            return <CodeBlock key={n} code={b.text} lang={b.lang} />;
          case "callout":
            return (
              <aside key={n} className="border-l-2 border-brand bg-soft p-5 text-[17px]">
                {b.text}
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
