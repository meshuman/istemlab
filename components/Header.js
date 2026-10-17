"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav, megaLinks } from "@/lib/nav";

/* ---------- helpers ---------- */

const pathOf = (href) => href.split("#")[0];
const hasHash = (href) => href.includes("#");

// Is a single link the current page? (hash links never count, so a page isn't highlighted twice)
const linkActive = (pathname, href) => {
  if (hasHash(href)) return false;
  return href === "/" || href === "/learn" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
};

// Is a top-level item (or any page inside it) the current section?
const itemActive = (pathname, item) => {
  if (item.match) return item.match.some((m) => pathname === m || pathname.startsWith(`${m}/`));
  if (item.href && !hasHash(item.href)) return linkActive(pathname, item.href);
  return megaLinks(item).some((l) => linkActive(pathname, l.href));
};

function Chevron({ open }) {
  return (
    <svg
      aria-hidden="true"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className={`ml-1.5 inline-block transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/* ---------- mega menu panel ---------- */

function MegaPanel({ item, open, pathname, id }) {
  const { columns } = item.mega;

  return (
    <div
      id={id}
      className={`absolute inset-x-0 top-full border-b border-hair bg-background/95 shadow-[0_32px_48px_-32px_rgba(0,0,0,.35)] backdrop-blur-xl transition-[opacity,transform,visibility] duration-200 ease-out ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
      }`}
    >
      <div className="container-x grid grid-cols-[repeat(2,minmax(0,22rem))] gap-x-16 py-8">
        {columns.map((col) => (
          <div key={col.title}>
            <p className="label text-[11px] text-muted">{col.title}</p>
            <ul className="mt-3">
              {col.links.map((l) => {
                const active = linkActive(pathname, l.href);
                return (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className="group/link -mx-3 block px-3 py-2.5 transition-colors hover:bg-soft focus-visible:bg-soft"
                    >
                      <span className={`flex items-center justify-between text-[15px] font-medium ${active ? "text-brand-ink" : ""}`}>
                        {l.label}
                        <span
                          aria-hidden="true"
                          className="-translate-x-1 opacity-0 transition duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100 group-focus-visible/link:translate-x-0 group-focus-visible/link:opacity-100"
                        >
                          →
                        </span>
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-muted">{l.desc}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- header ---------- */

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // label of the open mega menu (desktop)
  const [mobileGroup, setMobileGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);

  // Blend into the page at the top; frosted bar once scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileGroup(null);
  }, [pathname]);

  // Lock page scroll behind the mobile menu; Escape closes menus
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const openNow = useCallback((label) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }, []);
  const closeSoon = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160); // grace period avoids flicker
  }, []);

  const barClass =
    scrolled || mobileOpen || openMenu
      ? "border-hair bg-background/85 backdrop-blur-xl shadow-[0_8px_24px_-18px_rgba(0,0,0,.25)]"
      : "border-transparent bg-transparent";

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${barClass}`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6">
          <Link href="/" aria-label="I.STEM Lab home" className="shrink-0">
            <Image src="/logo-black.png" alt="I.STEM Lab" width={182} height={83} priority className="h-9 w-auto" />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden items-center lg:flex">
            {nav.map((item) => {
              const active = itemActive(pathname, item);
              const trigger =
                "relative flex h-10 items-center px-3 text-sm font-medium transition-colors hover:text-brand-ink " +
                (active ? "text-brand-ink" : "text-foreground");
              const underline = (
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 bottom-1 h-px origin-left bg-brand transition-transform duration-300 ${
                    active || openMenu === item.label ? "scale-x-100" : "scale-x-0 group-hover/item:scale-x-100"
                  }`}
                />
              );
              const hideBelow = item.desktopFrom === "xl" ? "hidden xl:flex" : "flex";

              // Plain link
              if (!item.mega) {
                return (
                  <div key={item.href} className={`group/item h-16 items-center ${hideBelow}`}>
                    <Link href={item.href} aria-current={active ? "page" : undefined} className={trigger}>
                      {item.label}
                      {underline}
                    </Link>
                  </div>
                );
              }

              // Mega menu item. The wrapper spans the full header height so the pointer can
              // travel from the label to the panel without ever leaving the hover area.
              const open = openMenu === item.label;
              const panelId = `mega-${item.label.toLowerCase().replace(/\W+/g, "-")}`;
              return (
                <div
                  key={item.label}
                  className="group/item flex h-16 items-center"
                  onMouseEnter={() => openNow(item.label)}
                  onMouseLeave={closeSoon}
                  onFocus={() => openNow(item.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) closeSoon();
                  }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      aria-expanded={open}
                      aria-controls={panelId}
                      aria-current={active ? "page" : undefined}
                      className={trigger}
                    >
                      {item.label}
                      <Chevron open={open} />
                      {underline}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenMenu(open ? null : item.label)}
                      className={trigger}
                    >
                      {item.label}
                      <Chevron open={open} />
                      {underline}
                    </button>
                  )}

                  <MegaPanel item={item} open={open} pathname={pathname} id={panelId} />
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/login" className="text-sm font-medium transition-colors hover:text-brand-ink">
              Login
            </Link>
            <Link href="/contact" className="btn btn-solid">
              Book a call
            </Link>
          </div>

          {/* Mobile toggle: morphing burger */}
          <button
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span aria-hidden="true" className="relative block h-3.5 w-6">
              <span className={`absolute left-0 h-px w-6 bg-foreground transition-all duration-300 ${mobileOpen ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-px w-6 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-px w-6 bg-foreground transition-all duration-300 ${mobileOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </header>

      {/* Soft dim behind an open mega menu (visual only) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 bottom-0 top-16 z-40 hidden bg-foreground/10 backdrop-blur-[2px] transition-opacity duration-300 lg:block ${
          openMenu ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Mobile menu: full-height sheet under the bar. Rendered outside <header> because the header's
          backdrop-filter would otherwise become the containing block for this fixed element. */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto overscroll-contain bg-background/95 backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 ease-out lg:hidden ${
          mobileOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-x py-4">
          <ul className="divide-y divide-hair border-b border-hair">
            {nav.map((item) =>
              item.mega ? (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={mobileGroup === item.label}
                    onClick={() => setMobileGroup(mobileGroup === item.label ? null : item.label)}
                    className="flex min-h-14 w-full items-center justify-between text-left text-xl font-medium"
                  >
                    {item.label}
                    <span aria-hidden="true" className="relative block h-3 w-3">
                      <span className="absolute left-0 top-1/2 h-px w-3 bg-foreground" />
                      <span className={`absolute left-1/2 top-0 h-3 w-px bg-foreground transition-transform duration-300 ${mobileGroup === item.label ? "scale-y-0" : ""}`} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      mobileGroup === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <ul className="overflow-hidden">
                      {megaLinks(item).map((c) => (
                        <li key={c.href + c.label}>
                          <Link
                            href={c.href}
                            tabIndex={mobileOpen && mobileGroup === item.label ? 0 : -1}
                            className="block py-3 pl-4"
                          >
                            <span className="block text-lg">{c.label}</span>
                            <span className="block text-sm text-muted">{c.desc}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    tabIndex={mobileOpen ? 0 : -1}
                    aria-current={linkActive(pathname, item.href) ? "page" : undefined}
                    className="flex min-h-14 items-center text-xl font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="mt-8 flex flex-col gap-3 pb-10">
            <Link href="/contact" tabIndex={mobileOpen ? 0 : -1} className="btn btn-solid text-center">
              Book a call
            </Link>
            <Link href="/login" tabIndex={mobileOpen ? 0 : -1} className="btn btn-ghost text-center">
              Client login
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
