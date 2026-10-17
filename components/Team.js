import Link from "next/link";
import Image from "next/image";
import { team } from "@/lib/content";

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="our_team" className="scroll-mt-20 py-24">
      <div data-reveal suppressHydrationWarning className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-brand-ink">Our team in Nepal</p>
            <h2 className="mt-3 max-w-[18ch]">The people behind the work</h2>
            <p className="mt-4 max-w-[56ch] text-muted">
              Young graduates, experienced professionals and advisors, united
              by a love of hard problems in AI and geospatial technology.
            </p>
          </div>
          <Link href="/careers" className="btn btn-ghost">Careers</Link>
        </div>

        <div data-reveal-stagger suppressHydrationWarning className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((m) => (
            <figure key={m.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-soft">
                <Image
                  src={m.image}
                  alt={`${m.name}, ${m.role} at I.STEM Lab`}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover object-top group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg">{m.name}</h3>
                  <p className="label mt-1 text-muted">{m.role}</p>
                </div>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    title="LinkedIn"
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-hair text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
