"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal], [data-reveal-stagger]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          // A block taller than two screens (a long article body) can never be 12% visible on
          // a normal screen, so reveal it as soon as any part of it enters the view.
          const tall = e.boundingClientRect.height > window.innerHeight * 2;
          if (e.isIntersecting && (tall || e.intersectionRatio >= 0.12)) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: [0, 0.12], rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
