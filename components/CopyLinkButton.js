"use client";

import { useState } from "react";
import { Icon } from "./SocialIcons";

export default function CopyLinkButton({ url }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable: ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy link"
      title={copied ? "Copied!" : "Copy link"}
      className="flex h-10 items-center justify-center gap-2 border border-hair px-3 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background [&_svg]:h-[18px] [&_svg]:w-[18px]"
    >
      <Icon name="link" />
      <span className="label text-[11px]" aria-live="polite">
        {copied ? "Copied" : "Copy link"}
      </span>
    </button>
  );
}
