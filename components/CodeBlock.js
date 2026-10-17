"use client";

import { useState } from "react";

export default function CodeBlock({ code, lang }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable: ignore */
    }
  };

  return (
    <figure className="overflow-hidden border border-hair bg-night text-white">
      <figcaption className="flex items-center justify-between border-b border-white/15 px-4 py-2">
        <span className="label text-[11px] text-silver">{lang}</span>
        <button
          type="button"
          onClick={copy}
          className="label min-h-8 px-2 text-[11px] text-silver transition-colors hover:text-white"
          aria-live="polite"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </figcaption>
      <pre className="overflow-x-auto p-4 text-[13.5px] leading-relaxed" tabIndex={0}>
        <code className="font-mono">{code}</code>
      </pre>
    </figure>
  );
}
