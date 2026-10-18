"use client";

import { useId, useState } from "react";

// One learning path card. Below the lg breakpoint it is an accordion (tap the title to open or close);
// from lg up it is always open, so desktop looks like a plain card. The content stays in the page HTML
// either way, so search engines and screen readers can read every path.
export default function PathAccordion({ title, meta, children }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="flex flex-col border border-hair bg-background">
      <h3 className="text-xl">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-start justify-between gap-4 p-5 text-left lg:pointer-events-none lg:p-7 lg:pb-0"
        >
          <span>
            <span className="block">{title}</span>
            <span className="label mt-2 block text-[11px] text-brand-ink">{meta}</span>
          </span>
          <span
            aria-hidden="true"
            className={`mt-1 grid h-8 w-8 shrink-0 place-items-center border border-hair text-lg leading-none transition-transform duration-300 lg:hidden ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:grid-rows-[1fr] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col px-5 pb-5 lg:px-7 lg:pb-7">{children}</div>
        </div>
      </div>
    </div>
  );
}
