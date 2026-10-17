import PageHero from "@/components/PageHero";
import { pageMeta, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Privacy Policy | I.STEM Lab",
  "How I.STEM Lab collects, uses, stores and protects personal information from website visitors, enquiries and clients, and how to contact us about your data.",
  "/privacy-policy"
);

// Plain-language policy describing how this website actually works. Have it reviewed before launch.
const sections = [
  ["Who we are", `This website is run by ${SITE.name}, an applied AI and geospatial engineering company based in Nepal. For any privacy question, email ${SITE.formEmail}.`],
  ["Information you give us", "When you use the contact form or an email link, your mail app sends us the details you choose to include, such as your name, email address, organization and message. When you apply for a role, we receive what you send, such as a CV."],
  ["Comments and reactions", "Comments and reactions on Learn pages are provided by Giscus and stored as GitHub Discussions. To comment, you sign in with GitHub, and GitHub's privacy policy applies to that account and its content."],
  ["Maps and embedded content", "Our contact page embeds a Google Map. Loading it lets Google receive technical information such as your IP address, under Google's privacy policy."],
  ["Analytics and cookies", "We do not use advertising cookies or sell data. The site stores a small amount of information in your browser only where needed for it to work. If we add analytics, we will update this page first."],
  ["How we use information", "To reply to enquiries, discuss and deliver projects, consider job applications, keep the website secure and improve our learning material. We use your information only for the purpose you gave it."],
  ["Sharing", "We do not sell personal information. We share it only with services that help us operate, such as email and hosting providers, or when the law requires it."],
  ["How long we keep it", "We keep enquiries and project correspondence for as long as needed to respond and to meet legal and accounting duties, then delete them. Unsuccessful job applications are deleted within twelve months unless you ask us to keep them."],
  ["Security", "We use encrypted connections (HTTPS), limit who can access personal information and keep our systems updated. No system is perfectly secure, so please avoid sending sensitive information by email."],
  ["Your rights", `You can ask to see, correct or delete the information we hold about you, or object to how we use it, by emailing ${SITE.formEmail}. We will respond within 30 days.`],
  ["Changes to this policy", "We will update this page when our practices change and show the date of the latest update at the top."],
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
