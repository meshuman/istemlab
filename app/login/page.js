import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Client Login | I.STEM Lab",
  description: "The I.STEM Lab client portal is coming soon.",
  robots: { index: false, follow: false },
};

// There is no authentication backend yet, so this page deliberately collects no
// credentials. Replace this with a real sign-in flow when the portal exists.
export default function Login() {
  return (
    <>
      <PageHero title="Client portal" intro="Our client portal is coming soon." />
      <section className="pb-24">
        <div className="container-x max-w-xl">
          <p className="text-muted">
            Existing clients: for project updates, files or invoices, please contact us directly and
            we will get back to you the same business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${SITE.formEmail}`} className="btn btn-solid">Email us</a>
            <Link href="/contact" className="btn btn-ghost">Contact page</Link>
          </div>
        </div>
      </section>
    </>
  );
}
