import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CTA({
  title = "Have a project in mind? Let's scope it together.",
  text = "Book a free 30-minute discovery call. You will leave with a clear view of what is feasible, what it takes, and the best first step.",
}) {
  return (
    <section className="bg-brand py-24 text-white">
      <div data-reveal suppressHydrationWarning className="container-x grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="label text-white/60">Start a project</p>
          <h2 className="mt-3 max-w-[20ch]">{title}</h2>
          <p className="mt-5 max-w-[56ch] text-white/75">{text}</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Link
            href="/contact"
            className="btn border-white bg-white text-brand hover:bg-transparent hover:text-white"
          >
            Book a discovery call
          </Link>
          <a href={`mailto:${SITE.email}`} className="label text-white/70 hover:text-white">
            or email {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
