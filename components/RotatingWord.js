"use client";

import { useEffect, useState } from "react";

// One state update every few seconds (vs. one per keystroke), CSS-driven fade,
// and no cycling at all for visitors who prefer reduced motion.
export default function RotatingWord({ words, interval = 2800 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <>
      {/* Screen readers get the full list once instead of a changing live region */}
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" key={i} className="word-in inline-block">
        {words[i]}
      </span>
    </>
  );
}
