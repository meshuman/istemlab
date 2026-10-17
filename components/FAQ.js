import Link from "next/link";
import JsonLd from "./JsonLd";
import { faqs } from "@/lib/site";

export default function FAQ({ items = faqs }) {
  return (
    <section className="bg-soft py-24" aria-labelledby="faq-heading">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <div
        data-reveal
        suppressHydrationWarning
        className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-20"
      >
        {/* Left: heading + help prompt (sticks while the list scrolls) */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="label text-brand-ink">FAQ</p>
          <h2 id="faq-heading" className="mt-3 max-w-[14ch]">
            Questions, answered
          </h2>
          <p className="mt-5 max-w-[34ch] text-muted">
            Can&apos;t find what you are looking for? We are happy to talk it through.
          </p>
          <Link href="/contact" className="btn btn-solid mt-8">
            Ask us directly
          </Link>
        </div>

        {/* Right: accordion (one open at a time) */}
        <div className="border-t border-foreground">
          {items.map((f, n) => (
            <details key={f.q} name="faq" open={n === 0} className="faq-item group border-b border-hair">
              <summary className="flex cursor-pointer list-none items-start gap-5 py-6 pr-2 focus-visible:outline-offset-[-2px] [&::-webkit-details-marker]:hidden">
                <span className="label mt-1.5 w-6 shrink-0 text-muted">{String(n + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-lg font-medium leading-snug transition-colors group-hover:text-brand-ink md:text-xl">
                  {f.q}
                </span>
                <span
                  aria-hidden="true"
                  className="faq-icon relative mt-1.5 h-5 w-5 shrink-0 text-foreground"
                />
              </summary>
              <div className="faq-body">
                <p className="max-w-[62ch] pb-7 pl-11 pr-8 text-[17px] leading-relaxed text-muted">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
