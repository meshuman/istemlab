import PageHero from "@/components/PageHero";
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
        title="Become an Advisor"
        intro="Help a fast-growing AI team make better decisions. Our advisors are experienced professionals in AI, geospatial science and business who give a few hours a month to mentoring and strategy."
        crumbs={["Join us"]}
      />
      <section className="py-16">
        <div data-reveal suppressHydrationWarning className="container-x max-w-3xl">
          <h2 className="text-2xl font-medium">What advisors do</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Mentor engineers and researchers</li>
            <li>Open doors to partners and funding</li>
            <li>Review technical and business strategy</li>
          </ul>
          <a
            href={`mailto:${SITE.email}?subject=Advisor inquiry`}
            className="mt-8 inline-block btn btn-solid"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}
