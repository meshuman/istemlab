import PageHero from "@/components/PageHero";
import { pageMeta, SITE } from "@/lib/site";
import { perks } from "@/lib/content";

export const metadata = pageMeta(
  "Careers at I.STEM Lab",
  "I.STEM Lab has no open roles right now. Send your CV and portfolio to be considered for future work in GeoAI, RAG and agents, 3D/VR and AI strategy.",
  "/careers"
);

export default function Careers() {
  return (
    <>
      <PageHero
        title="Careers at I.STEM Lab"
        intro="Do work that ends up in the real world: food security systems, AI agents, VR training. We hire for curiosity, ownership and care for quality."
        crumbs={["Join us"]}
      />

      <section className="pb-16">
        <div data-reveal-stagger suppressHydrationWarning className="container-x grid gap-8 md:grid-cols-3">
          {perks.map((p) => (
            <div key={p.t} className="border-t border-foreground pt-5">
              <h2 className="!text-xl">{p.t}</h2>
              <p className="mt-2 text-[15px] text-muted">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-soft py-20">
        <div data-reveal suppressHydrationWarning className="container-x max-w-3xl">
          <p className="label text-brand-ink">Open roles · 0</p>
          <h2 className="mt-3">No open roles right now</h2>
          <p className="mt-4 text-muted">
            We are not hiring at the moment, and we would rather say so than keep a list of roles we cannot fill. We
            do grow when the right people and projects meet, so we are glad to hear from you.
          </p>
          <p className="mt-4 text-muted">
            Send your resume and a portfolio or short note about what you have built. We keep applications on file and
            reach out when a role matching your skills opens, especially in GeoAI, machine learning, RAG and agents,
            3D and VR, and AI training.
          </p>
          <a href={`mailto:${SITE.formEmail}?subject=General application`} className="btn btn-solid mt-8">
            Send your resume
          </a>
        </div>
      </section>
    </>
  );
}
