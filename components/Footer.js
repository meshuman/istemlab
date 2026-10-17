import Link from "next/link";
import Image from "next/image";
import { SITE, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-night text-silver">
      <div data-reveal-stagger suppressHydrationWarning className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Image src="/logo-white.png" alt="I.STEM Lab" width={182} height={83} className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm">
            Applied AI and geospatial intelligence, built to deliver. GeoAI,
            RAG and agents, 3D/VR, AI strategy and training.
          </p>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="label mt-4 inline-block py-2 hover:text-white">
            LinkedIn ↗
          </a>
        </div>

        <div>
          <h4 className="label mb-4 text-white">Services</h4>
          <ul className="space-y-1 text-sm [&_a]:inline-block [&_a]:py-1.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-white">
                  {s.title.replace(" (RAG & Autonomous Agents)", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label mb-4 text-white">Company</h4>
          <ul className="space-y-1 text-sm [&_a]:inline-block [&_a]:py-1.5">
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/work" className="hover:text-white">Our work</Link></li>
            <li><Link href="/research" className="hover:text-white">Research</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/blogs" className="hover:text-white">Blog</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="label mb-4 text-white">Contact</h4>
          <address className="space-y-1 text-sm not-italic [&_a]:inline-block [&_a]:py-1.5">
            <p><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></p>
            <p><a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phoneDisplay}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x label flex flex-wrap justify-between gap-2 py-5 text-silver/70">
          <span>© 2026 I.STEM Lab. All rights reserved.</span>
          <span>Applied AI · GeoAI · Nepal</span>
        </div>
      </div>
    </footer>
  );
}
