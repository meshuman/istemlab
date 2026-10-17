import { SOCIALS } from "@/lib/site";

const FILL = { fill: "currentColor" };
const STROKE = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

const ICONS = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...FILL}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...FILL}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...FILL}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...STROKE}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...STROKE}>
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="m10 9.2 5 2.8-5 2.8z" fill="currentColor" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...STROKE}>
      <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.66 0l-3 3A4 4 0 0 0 11 18.66l1-1" />
    </svg>
  ),
};

export const Icon = ({ name }) => ICONS[name] ?? null;

/**
 * Round-square icon buttons for the company's own social profiles.
 * Only platforms with a URL in SOCIALS (lib/site.js) are shown, so nothing links to a dead address.
 * `tone="dark"` is for use on the dark footer.
 */
export default function SocialLinks({ tone = "light", className = "" }) {
  const links = SOCIALS.filter((s) => s.url);
  if (!links.length) return null;

  const base =
    "flex h-10 w-10 items-center justify-center border transition-colors [&_svg]:h-[18px] [&_svg]:w-[18px] ";
  const skin =
    tone === "dark"
      ? "border-white/25 text-silver hover:border-white hover:bg-white hover:text-night"
      : "border-hair text-foreground hover:border-foreground hover:bg-foreground hover:text-background";

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Social media">
      {links.map((s) => (
        <li key={s.id}>
          <a
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`I.STEM Lab on ${s.label}`}
            title={s.label}
            className={base + skin}
          >
            <Icon name={s.id} />
          </a>
        </li>
      ))}
    </ul>
  );
}
