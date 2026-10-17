import { SITE } from "./site";

// Content pulled from istemlab.ai (team API, partners, values).
// Entries marked `seed: true` are demo content: istemlab.ai currently has no
// published blogs or research papers. Replace or delete them before launch.

export const team = [
  // TODO: replace with Suman Baral's personal LinkedIn profile URL (currently the company page).
  { name: "Suman Baral", role: "CEO", image: "/team/suman-baral.webp", linkedin: SITE.linkedin },
  { name: "Rajkumar Acharya", role: "AI Developer", image: "/team/rajkumar-acharya.webp" },
  { name: "Gaurav Pandey", role: "Business Officer", image: "/team/gaurav-pandey.webp" },
  { name: "Prabhat Bhusal", role: "Mixed Reality Developer", image: "/team/prabhat-bhusal.webp" },
  { name: "Sapana Adhikari", role: "Digital Content Officer", image: "/team/sapana-adhikari.webp" },
];

// Advisors. To add someone, add one entry here: name, and optionally role, org, linkedin and image
// (a photo in /public, for example "/advisors/name.webp"). Without a photo, a monogram is shown.
// Roles below come from public profile pages and need the advisor's confirmation before launch.
export const advisors = [
  {
    name: "Prof. Dr. Wolfgang Georg Arlt (王立基)",
    role: "Founder and Director, China Outbound Tourism Research Institute (COTRI)",
    org: "Meaningful Tourism Centre",
    image: "/advisors/wolfgang-georg-arlt.webp", // portrait from the Meaningful Tourism Centre website
  },
  {
    name: "Dr. Subash Ghimire",
    role: "Geomatics Engineering, geospatial science and remote sensing",
    org: "Kathmandu University",
    image: "/advisors/subash-ghimire.webp", // from the public LinkedIn profile
    linkedin: "https://www.linkedin.com/in/dr-subash-ghimire-06523a72/",
  },
  {
    name: "Madhur Devkota",
    role: "Data science professional with 10+ years of experience in machine learning",
    org: "Southern Company, Atlanta",
    image: "/advisors/madhur-devkota.webp", // from the public LinkedIn profile
    linkedin: "https://www.linkedin.com/in/madhurdev/",
  },
  {
    name: "Dr. Sridhar Thapa",
    role: "Programme Policy Officer",
    org: "World Food Programme",
    image: "/advisors/sridhar-thapa.webp", // from the public LinkedIn profile
    linkedin: "https://www.linkedin.com/in/sridhar-thapa-phd-34aa92126/",
  },
  {
    name: "Yuban Malla",
    role: "Deputy Country Director",
    org: "Relief International",
    image: "/advisors/yuban-malla.webp", // from the public LinkedIn profile
    linkedin: "https://www.linkedin.com/in/yuban-malla-bb74b2a/",
  },
];

export const partners = [
  { name: "8848 Holdings", logo: "/clients/8848-holdings.png" },
  { name: "Acoustical Ceiling", logo: "/clients/acoustical-ceiling.png" },
  { name: "Nepal Rastra", logo: "/clients/nepal-rastra.png" },
  { name: "Novotech", logo: "/clients/novotech.png" },
  { name: "ICIMOD", logo: "/clients/icimod.png" },
  { name: "KAFCOL", logo: "/clients/kafcol.png" },
  { name: "Kathmandu University", logo: "/clients/kathmandu-university.png" },
  { name: "Sano Paila", logo: "/clients/sano-paila.png" },
  { name: "Wind Power Nepal", logo: "/clients/wind-power-nepal.png" },
];

export const values = [
  { t: "Innovation", d: "We push AI further to create solutions that change how industries work." },
  { t: "Commitment", d: "We are invested in our clients' outcomes, not just the delivery date." },
  { t: "Teamwork", d: "Open collaboration and mutual support turn hard problems into opportunities." },
  { t: "Ownership", d: "Everyone leads, takes responsibility and drives the work to excellence." },
  { t: "Transparency", d: "Integrity, accountability and trust in every AI decision we make." },
  { t: "Growth", d: "We grow our people, our technology and our clients' success together." },
];

export const papers = [
  {
    title: "Advancing satellite imagery super-resolution for agricultural monitoring",
    area: "GeoAI · Remote sensing",
    year: "2025",
    status: "Ongoing research",
    summary: "Deep learning methods that enhance low-resolution satellite images so small fields, roads and settlements can be mapped reliably.",
  },
  {
    seed: true,
    title: "Integrated food security monitoring with Earth observation data in Karnali Province",
    area: "GeoAI · Food security",
    year: "2025",
    status: "Applied study",
    summary: "Combining remote sensing indicators with regional data to support food security planning and early warning.",
  },
  {
    seed: true,
    title: "Grounded question answering over geospatial reports using RAG",
    area: "AI Systems · RAG",
    year: "2026",
    status: "Working paper",
    summary: "Evaluating retrieval-augmented generation for answering planners' questions from technical and policy documents with citations.",
  },
];

// No open roles at the moment. Add job objects here (and restore the list on /careers) when hiring.


export const perks = [
  { t: "Environment", d: "A forward-thinking team that values innovation and problem-solving, alongside industry experts and researchers in GeoAI and Web GIS." },
  { t: "Real impact", d: "Work on systems that are used in the field, from food security monitoring to live products." },
  { t: "Learning", d: "Learning never stops: workshops, mentoring and high-level technical discussions." },
];
