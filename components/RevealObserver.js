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

    // Touch screens: color the image(s) in the middle band of the viewport.
    let focusIo;
    if (window.matchMedia("(hover: none)").matches) {
      focusIo = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.target.classList.toggle("in-focus", e.isIntersecting)),
        { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
      );
      document.querySelectorAll("main img").forEach((img) => focusIo.observe(img));
    }

    return () => {
      io.disconnect();
      focusIo?.disconnect();
    };
  }, [pathname]);

  return null;
}
