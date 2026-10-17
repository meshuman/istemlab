import Link from "next/link";
import RotatingWord from "./RotatingWord";

const deliverables = [
  "GeoAI models",
  "RAG assistants",
  "autonomous agents",
  "AI roadmaps",
  "VR training",
  "startup MVPs",
];

export default function Hero() {
  return (
    <section className="relative h-[calc(100svh-4rem)] overflow-hidden bg-background">
      {/* Faint coordinate grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative flex h-full flex-col justify-center gap-[clamp(12px,2.6vh,28px)] py-[clamp(16px,4vh,64px)]">
        <p className="label text-muted">Applied AI &amp; geospatial studio · Nepal</p>

        <h1 className="hero-in max-w-[19ch] !text-[clamp(34px,min(6.6vw,10.5vh),104px)] !leading-[1.02]">
          Applied AI and geospatial intelligence, <span className="text-brand">built to deliver.</span>
        </h1>

        <p className="hero-in text-base md:text-xl" style={{ animationDelay: ".08s" }}>
          <span className="label mr-3 text-muted">We build</span>
          <span className="inline-block min-h-[1.5em] font-medium text-brand">
            <RotatingWord words={deliverables} />
          </span>
        </p>

        <p className="hero-in max-w-[58ch] text-base text-muted md:text-lg [@media(max-height:620px)]:hidden" style={{ animationDelay: ".16s" }}>
          We turn satellite data, documents and everyday workflows into AI
          systems that work in the real world, and train your team to run them.
        </p>

        <div className="hero-in mt-[clamp(4px,1.5vh,16px)] flex flex-wrap items-center gap-4" style={{ animationDelay: ".24s" }}>
          <Link href="/contact" className="btn btn-solid">
            Book a discovery call
          </Link>
          <Link href="/services" className="btn btn-ghost">
            Explore services
          </Link>
        </div>

        {/* Real proof point instead of invented statistics */}
        <p className="hero-in label mt-[clamp(0px,3vh,32px)] text-muted [@media(max-height:700px)]:hidden" style={{ animationDelay: ".32s" }}>
          Live in the field:{" "}
          <a
            href="https://bidmytrip.ai/en"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline decoration-hair underline-offset-4 hover:decoration-current"
          >
            bidmytrip.ai ↗
          </a>
        </p>
      </div>
    </section>
  );
}
