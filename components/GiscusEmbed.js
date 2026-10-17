"use client";

import { useEffect, useRef } from "react";

/**
 * Loads Giscus (comments + reactions backed by GitHub Discussions) only when the section
 * scrolls into view, so visitors who never reach it load nothing from third parties.
 * Each page gets its own discussion thread (mapped by pathname).
 */
export default function GiscusEmbed({ repo, repoId, category, categoryId }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;
      const s = document.createElement("script");
      s.src = "https://giscus.app/client.js";
      s.async = true;
      s.crossOrigin = "anonymous";
      const attrs = {
        "data-repo": repo,
        "data-repo-id": repoId,
        "data-category": category,
        "data-category-id": categoryId,
        "data-mapping": "pathname",
        "data-strict": "0",
        "data-reactions-enabled": "1",
        "data-emit-metadata": "0",
        "data-input-position": "top",
        "data-theme": "noborder_light",
        "data-lang": "en",
        "data-loading": "lazy",
      };
      Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
      host.appendChild(s);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          load();
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(host);

    return () => {
      io.disconnect();
      host.replaceChildren(); // drop the script and iframe when leaving the page
    };
  }, [repo, repoId, category, categoryId]);

  return <div ref={hostRef} className="giscus min-h-[200px]" />;
}
