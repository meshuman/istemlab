import Link from "next/link";
import { services } from "@/lib/site";

export default function Expertise() {
  return (
    <section className="bg-brand-dark py-24 text-white">
      <div data-reveal suppressHydrationWarning className="container-x">
        <p className="label text-silver">What we do</p>
        <h2 className="mt-3 max-w-[22ch]">Five ways we help organizations put AI to work</h2>
        <div data-reveal-stagger suppressHydrationWarning className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="card flex flex-col border border-white/20 p-7"
            >
              <span className="label text-silver">{s.icon}</span>
              <h3 className="mt-6 text-xl">{s.title}</h3>
              <p className="mt-3 text-[15px] text-silver">{s.short}</p>
              <span className="label mt-auto pt-6 text-white">Learn more →</span>
            </Link>
          ))}
          <Link href="/contact" className="card flex flex-col justify-between bg-brand p-7 text-white">
            <span className="label">Not sure where to start?</span>
            <span className="mt-6 text-xl font-medium">
              Book a discovery call and we will recommend the right first step.
            </span>
            <span className="label mt-6">Book a call →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
