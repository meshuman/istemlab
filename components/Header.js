"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Research", href: "/research" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Collaborations", href: "/collaborations" },
  {
    label: "Join us",
    children: [
      { label: "Careers", href: "/careers" },
      { label: "Advisor", href: "/advisor" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-background/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" aria-label="I.STEM Lab home" className="shrink-0">
          <Image src="/logo-black.png" alt="I.STEM Lab" width={182} height={83} priority className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="text-sm font-medium hover:text-brand-ink">
                  {item.label} ▾
                </button>
                <div className="invisible absolute left-0 top-full min-w-40 rounded-none border border-hair bg-background p-2 opacity-0 shadow-none transition group-hover:visible group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block rounded px-3 py-2 text-sm hover:bg-soft"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-brand-ink"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="text-sm font-medium hover:text-brand-ink">
            Login
          </Link>
          <Link href="/contact" className="btn btn-solid">
            Book a call
          </Link>
        </div>

        <button
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-hair bg-background lg:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {nav.flatMap((item) =>
              item.children
                ? item.children
                : [{ label: item.label, href: item.href }]
            ).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm font-medium hover:bg-soft"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/login" className="px-2 py-2 text-sm font-medium">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
