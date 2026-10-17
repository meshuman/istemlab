import Image from "next/image";
import { advisors } from "@/lib/content";
import { Icon } from "./SocialIcons";

// "Dr.", "Prof. Dr." and similar prefixes are skipped when building the monogram.
const initials = (name) =>
  name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter((w) => w && !/^(prof\.?|dr\.?|mr\.?|ms\.?|mrs\.?)$/i.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

/** Advisory circle. Add people in lib/content.js (`advisors`); the grid grows automatically. */
export default function Advisors({ eyebrow = "Our advisors", title = "Experienced people who guide our work", intro, className = "py-24" }) {
  if (!advisors.length) return null;

  return (
    <section className={className} aria-labelledby="advisors-heading">
      <div data-reveal suppressHydrationWarning className="container-x">
        <p className="label text-brand-ink">{eyebrow}</p>
        <h2 id="advisors-heading" className="mt-3 max-w-[22ch]">{title}</h2>
        {intro && <p className="mt-4 max-w-[58ch] text-muted">{intro}</p>}

        <ul data-reveal-stagger suppressHydrationWarning className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((a) => (
            <li key={a.name} className="card flex gap-5 border border-hair bg-background p-6">
              {a.image ? (
                <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-soft">
                  <Image src={a.image} alt={`${a.name}, advisor to I.STEM Lab`} fill sizes="80px" className="object-cover object-top" />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-20 w-20 shrink-0 items-center justify-center bg-brand text-2xl font-medium tracking-tight text-white"
                >
                  {initials(a.name)}
                </div>
              )}

              <div className="min-w-0 flex-1">
                <h3 className="text-lg leading-snug">{a.name}</h3>
                {a.role && <p className="mt-1 text-[14px] leading-snug text-muted">{a.role}</p>}
                {a.org && <p className="label mt-2 text-[11px] text-muted">{a.org}</p>}
                {a.linkedin && (
                  <a
                    href={a.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${a.name} on LinkedIn`}
                    title="LinkedIn"
                    className="mt-3 inline-flex h-9 w-9 items-center justify-center border border-hair text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background [&_svg]:h-4 [&_svg]:w-4"
                  >
                    <Icon name="linkedin" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
