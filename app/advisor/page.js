import PageHero from "@/components/PageHero";
import Advisors from "@/components/Advisors";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Become an Advisor | I.STEM Lab",
  "Share your expertise in AI, geospatial technology or business and help guide I.STEM Lab as an advisor.",
  "/advisor"
);

export default function Advisor() {
  return (
    <>
      <PageHero
        title="Our advisors"
        intro="Experienced professionals in AI, geospatial science, tourism and business who give their time to mentor our team and help shape our direction."
        crumbs={["Join us"]}
      />
      <Advisors
        className="pb-24"
        eyebrow="The advisory circle"
        title="Guided by people who have done it"
      />
      <section className="bg-soft py-20">
        <div data-reveal suppressHydrationWarning className="container-x max-w-3xl">
          <p className="label text-brand-ink">Join them</p>
          <h2 className="mt-3 !text-[clamp(26px,2.6vw,38px)]">Become an advisor</h2>
          <p className="mt-3 text-muted">
            Advisors give a few hours a month. If you have experience in AI, geospatial science, 3D and immersive
            technology or building ventures, we would like to hear from you.
          </p>
          <h3 className="label mt-8 text-muted">What advisors do</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Mentor engineers and researchers</li>
            <li>Open doors to partners and funding</li>
            <li>Review technical and business strategy</li>
          </ul>
          <a
            href={`mailto:${SITE.formEmail}?subject=Advisor inquiry`}
            className="mt-8 inline-block btn btn-solid"
          >
            Become an advisor
          </a>
        </div>
      </section>
    </>
  );
}
