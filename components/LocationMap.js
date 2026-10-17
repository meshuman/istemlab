"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function LocationMap() {
  const [open, setOpen] = useState(true);
  const { lat, lng, cid } = SITE.location;

  return (
    <section className="pb-24" aria-labelledby="map-heading">
      <div data-reveal suppressHydrationWarning className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label text-brand-ink">Find us</p>
            <h2 id="map-heading" className="mt-3">Our location</h2>
          </div>
          <a href={SITE.mapUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
            Open in Google Maps ↗
          </a>
        </div>

        <div className="relative mt-8 aspect-[16/8] min-h-[360px] w-full overflow-hidden border border-hair bg-soft">
          <iframe
            title="I.STEM Lab location on Google Maps"
            src={`https://www.google.com/maps?cid=${cid}&hl=en&output=embed`}
            className="h-full w-full grayscale transition duration-700 hover:grayscale-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Popup card pinned on the map */}
          {open ? (
            <div
              role="dialog"
              aria-label="I.STEM Lab location details"
              className="absolute bottom-4 left-4 max-w-[min(320px,calc(100%-2rem))] border border-hair bg-background p-5 shadow-[0_8px_30px_rgba(0,0,0,.18)] sm:bottom-auto sm:left-auto sm:right-4 sm:top-4"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close location popup"
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center text-lg leading-none text-muted hover:text-foreground"
              >
                ×
              </button>
              <p className="label text-brand-ink">I.STEM Lab</p>
              <p className="mt-2 pr-5 text-lg font-medium leading-snug">Applied AI &amp; geospatial studio</p>
              <p className="mt-1 text-sm text-muted">Lalitpur, Bagmati Province, Nepal</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-solid !px-4 !py-2"
                >
                  Directions ↗
                </a>
                <a href={`mailto:${SITE.email}`} className="btn btn-ghost !px-4 !py-2">
                  Email us
                </a>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="btn btn-solid absolute right-4 top-4 !px-4 !py-2"
            >
              Show details
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
