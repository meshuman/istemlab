import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import LocationMap from "@/components/LocationMap";
import { pageMeta, services, SITE } from "@/lib/site";

export const metadata = pageMeta(
  "Contact I.STEM Lab | Book a Free Discovery Call",
  "Book a free 30-minute discovery call about GeoAI, AI strategy and training, RAG and agents, 3D/VR or incubation. We reply within two business days.",
  "/contact"
);

const steps = [
  ["You tell us the goal", "Share what you want to achieve. A few sentences is enough."],
  ["We hold a discovery call", "30 minutes to understand your context, data and constraints."],
  ["You get a clear proposal", "A scoped first phase with timeline, deliverables and cost."],
];

const field = "mt-1 w-full border border-hair bg-transparent px-4 py-3 focus:border-brand-ink";

export default function Contact() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact I.STEM Lab",
          url: `${SITE.url}/contact`,
          mainEntity: {
            "@type": "Organization",
            name: SITE.name,
            hasMap: SITE.mapUrl,
            geo: { "@type": "GeoCoordinates", latitude: SITE.location.lat, longitude: SITE.location.lng },
          },
        }}
      />
      <PageHero
        title="Let's talk about your project"
        intro="Book a free discovery call. No commitment, no sales pitch: just an honest view of what AI can do for you and the best first step."
      />
      <section className="py-16">
        <div data-reveal-stagger suppressHydrationWarning className="container-x grid gap-16 md:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="label text-brand-ink">What happens next</h2>
            <ol className="mt-6 space-y-6">
              {steps.map(([t, d], n) => (
                <li key={t} className="border-t border-hair pt-4">
                  <span className="label text-muted">0{n + 1}</span>
                  <h3 className="mt-2 text-lg">{t}</h3>
                  <p className="mt-1 text-[15px] text-muted">{d}</p>
                </li>
              ))}
            </ol>
            <address className="mt-10 space-y-2 not-italic text-[15px]">
              <p><span className="label text-muted">Email</span><br /><a className="text-brand-ink" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              <p><span className="label text-muted">Phone</span><br /><a className="text-brand-ink" href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></p>
            </address>
          </div>

          <form className="space-y-5" action={`mailto:${SITE.email}`} method="post" encType="text/plain">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Name
                <input name="name" required autoComplete="name" className={field} />
              </label>
              <label className="block text-sm font-medium">
                Work email
                <input name="email" type="email" required autoComplete="email" className={field} />
              </label>
            </div>
            <label className="block text-sm font-medium">
              Organization
              <input name="organization" autoComplete="organization" className={field} />
            </label>
            <label className="block text-sm font-medium">
              What can we help with?
              <select name="service" className={field} defaultValue="">
                <option value="" disabled>Choose a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>
            <label className="block text-sm font-medium">
              Tell us about your goal
              <textarea
                name="message"
                rows={5}
                required
                placeholder="What are you trying to achieve, and by when?"
                className={field}
              />
            </label>
            <button className="btn btn-solid">Request discovery call</button>
            <p className="text-xs text-muted">We reply within two business days. We never share your details.</p>
          </form>
        </div>
      </section>
      <LocationMap />
      <FAQ />
    </>
  );
}
