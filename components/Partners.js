import Image from "next/image";
import { partners } from "@/lib/content";

export default function Partners() {
  const row = [...partners, ...partners];
  return (
    <section className="border-y border-hair py-12" aria-labelledby="partners-heading">
      <h2 id="partners-heading" className="label mb-8 text-center !text-[12px] text-muted">
        Trusted by organizations we work with
      </h2>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="animate-marquee flex w-max items-center gap-16">
          {row.map((p, n) => (
            <li key={n} aria-hidden={n >= partners.length}>
              <Image
                src={p.logo}
                alt={p.name}
                width={160}
                height={64}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
