import { Hanken_Grotesk, DM_Mono } from "next/font/google";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE, SOCIALS, services } from "@/lib/site";
import { team } from "@/lib/content";

const sans = Hanken_Grotesk({
  variable: "--font-sans-face",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const mono = DM_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "I.STEM Lab | Applied AI & GeoAI Solutions",
    template: "%s | I.STEM Lab",
  },
  description:
    "Applied AI and geospatial engineering: GeoAI, AI strategy and training, RAG and autonomous agents, 3D/VR, and business incubation. Book a free discovery call.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "I.STEM Lab | Applied AI & GeoAI Solutions",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "I.STEM Lab", description: SITE.description },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#org`,
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      legalName: SITE.legalName,
      logo: `${SITE.url}/logo-black.png`,
      sameAs: [SITE.linkedin, ...SOCIALS.map((s) => s.url).filter(Boolean)].filter((u, i, a) => a.indexOf(u) === i),
      email: SITE.email,
      telephone: SITE.phone,
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressCountry: "NP" },
      geo: { "@type": "GeoCoordinates", latitude: SITE.location.lat, longitude: SITE.location.lng },
      hasMap: SITE.mapUrl,
      knowsAbout: ["GeoAI", "Geospatial analysis", "Remote sensing", "Retrieval-augmented generation", "Autonomous AI agents", "AI strategy and training", "3D, VR and mixed reality", "Gaussian splatting", "Digital twins"],
      contactPoint: { "@type": "ContactPoint", contactType: "sales", email: SITE.email, telephone: SITE.phone, availableLanguage: ["English", "Nepali"] },
      employee: team.map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role })),
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` }, inLanguage: "en" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd data={orgSchema} />
        <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
