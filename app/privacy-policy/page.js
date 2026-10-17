import PageHero from "@/components/PageHero";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Privacy Policy | I.STEM Lab",
  "How I.STEM Lab collects, uses and protects personal information.",
  "/privacy-policy"
);

const sections = [
  ["Information we collect", "We collect information you give us, such as your name, email and message when you contact us or subscribe, and basic analytics data about site usage."],
  ["How we use it", "We use it to respond to inquiries, provide services, improve the website and send updates you have asked for."],
  ["Sharing", "We do not sell personal information. We share it only with service providers who help us operate, or when required by law."],
  ["Your choices", `You may request access, correction or deletion of your information at any time by emailing ${SITE.email}.`],
];

export default function Privacy() {
  return (
    <>
      <PageHero title="Privacy Policy" intro="Last updated: October 2026" />
      <section className="py-16">
        <div data-reveal suppressHydrationWarning className="container-x max-w-3xl space-y-8">
          {sections.map(([h, p]) => (
            <div key={h}>
              <h2 className="text-xl font-medium">{h}</h2>
              <p className="mt-2 text-muted">{p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
