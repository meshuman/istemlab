import Link from "next/link";
import Image from "next/image";
import { team } from "@/lib/content";

export default function Team() {
  return (
    <section id="our_team" className="scroll-mt-20 py-24">
      <div data-reveal suppressHydrationWarning className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-brand-ink">Our team in Nepal</p>
            <h2 className="mt-3 max-w-[18ch]">The people behind the work</h2>
            <p className="mt-4 max-w-[56ch] text-muted">
              Young graduates, experienced professionals and advisors, united
              by a love of hard problems in AI and geospatial technology.
            </p>
          </div>
          <Link href="/careers" className="btn btn-ghost">We are hiring</Link>
        </div>

        <div data-reveal-stagger suppressHydrationWarning className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((m) => (
            <figure key={m.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-soft">
                <Image
                  src={m.image}
                  alt={`${m.name}, ${m.role} at I.STEM Lab`}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover object-top group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4">
                <h3 className="text-lg">{m.name}</h3>
                <p className="label mt-1 text-muted">{m.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
