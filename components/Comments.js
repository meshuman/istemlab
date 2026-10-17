import { SITE } from "@/lib/site";
import GiscusEmbed from "./GiscusEmbed";

/**
 * Reactions + comments section for articles (Learn and Experiences).
 * Live once SITE.comments is fully configured (see lib/site.js); until then a friendly placeholder shows.
 */
export default function Comments({ className = "" }) {
  const c = SITE.comments;
  const ready = Boolean(c.repo && c.repoId && c.category && c.categoryId);

  return (
    <section className={`border-t border-hair pt-8 ${className}`} aria-labelledby="comments-heading">
      <p className="label text-brand-ink">Join the conversation</p>
      <h2 id="comments-heading" className="mt-2 !text-[clamp(22px,2vw,28px)]">
        Reactions &amp; comments
      </h2>

      {ready ? (
        <>
          <p className="mt-2 max-w-[56ch] text-[15px] text-muted">
            React with an emoji or leave a comment. Sign in with GitHub to join in. Comments are moderated and
            stored in GitHub Discussions.
          </p>
          <div className="mt-6">
            <GiscusEmbed repo={c.repo} repoId={c.repoId} category={c.category} categoryId={c.categoryId} />
          </div>
        </>
      ) : (
        <div className="mt-5 border border-hair bg-soft p-6">
          <p className="font-medium">Comments are opening soon.</p>
          <p className="mt-1 text-[15px] text-muted">
            In the meantime, tell us what you think by email at{" "}
            <a className="text-brand-ink underline underline-offset-4" href={`mailto:${SITE.formEmail}`}>
              {SITE.formEmail}
            </a>
            .
          </p>
        </div>
      )}
    </section>
  );
}
