import { SITE } from "@/lib/site";
import { Icon } from "./SocialIcons";
import CopyLinkButton from "./CopyLinkButton";

/** "Share this" row for articles. Uses each network's public share URL, so no accounts or keys are needed. */
export default function ShareLinks({ title, path, className = "" }) {
  const url = `${SITE.url}${path}`;
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const targets = [
    { id: "linkedin", label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { id: "x", label: "X", href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
    { id: "facebook", label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-3 border-t border-hair pt-6 ${className}`}>
      <p className="label mr-1 text-muted">Share</p>
      <ul className="flex flex-wrap gap-2">
        {targets.map((s) => (
          <li key={s.id}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Share on ${s.label}`}
              title={`Share on ${s.label}`}
              className="flex h-10 w-10 items-center justify-center border border-hair text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background [&_svg]:h-[18px] [&_svg]:w-[18px]"
            >
              <Icon name={s.id} />
            </a>
          </li>
        ))}
        <li>
          <CopyLinkButton url={url} />
        </li>
      </ul>
    </div>
  );
}
