export const SITE = {
  name: "I.STEM Lab",
  url: "https://istemlab.ai",
  email: "info@istem-lab.com",
  phone: "+9779841017872",
  phoneDisplay: "+977 9841017872",
  // This site represents I.STEM Lab (Nepal). The separate US entity, I.STEM Lab LLC, is not named here.
  legalName: "I.STEM Lab",
  mapUrl: "https://www.google.com/maps?cid=5511489461729295790",
  location: { lat: 27.6808412, lng: 85.323661, cid: "5511489461729295790" },
  linkedin: "https://www.linkedin.com/company/istemlab/",
  tagline: "Applied AI and geospatial intelligence, built to deliver.",
  description:
    "I.STEM Lab is an applied AI and geospatial engineering studio. We build GeoAI, RAG and autonomous agent systems, immersive 3D/VR, and help organizations adopt AI through strategy and training.",
};

export const services = [
  {
    slug: "geo-ai",
    icon: "01",
    title: "GEO-AI",
    short: "Turn satellite and map data into decisions you can act on.",
    long: "GEO-AI applies machine learning to satellite imagery, aerial data and maps. We detect and classify what is on the ground, track change over time and forecast what comes next, then deliver the results in dashboards your team can use without GIS expertise.",
    outcome: "Faster, evidence-based decisions on land, crops, infrastructure and risk.",
    forWho: "Agriculture, climate and environment, government and development agencies, infrastructure.",
    points: ["Satellite image analysis and super-resolution", "Land-use and crop classification", "Change detection and predictive models", "Web GIS dashboards and reporting"],
  },
  {
    slug: "ai-strategy-development",
    icon: "02",
    title: "AI Strategy Development & Training",
    short: "Make AI part of how your organization works, and train your people to use it.",
    long: "Most AI initiatives stall between the pilot and everyday use. We help leadership decide where AI creates real value, build a prioritized roadmap with governance and risk controls, and embed AI as a tool within your organizational strategy. Hands-on training then gives leaders and staff the skills to use AI confidently and responsibly.",
    outcome: "A clear AI roadmap, quick wins in the first months, and a team that can sustain them.",
    forWho: "Leadership teams, NGOs, universities, SMEs and public bodies starting or scaling AI adoption.",
    points: ["AI readiness assessment and use-case prioritization", "AI roadmap aligned to organizational strategy", "Governance, ethics and risk guidelines", "Role-based AI training for leaders and teams"],
  },
  {
    slug: "data-systems-ai-systems",
    icon: "03",
    title: "Data Systems & AI Systems (RAG & Autonomous Agents)",
    short: "Production AI built on your own data: RAG assistants and autonomous agents.",
    long: "We build the data foundations and AI systems that make your information useful. Retrieval-augmented generation (RAG) assistants answer questions from your own documents and databases with cited sources. Autonomous AI agents plan and complete multi-step tasks across your tools, with human oversight built in. Every system ships with evaluation, monitoring and access controls.",
    outcome: "Less time searching and on repetitive work; answers your team can trust and verify.",
    forWho: "Teams with large document libraries, knowledge-heavy operations or repetitive multi-step workflows.",
    points: ["Data pipelines, warehouses and governance", "RAG knowledge assistants with citations", "Autonomous agents for workflows and operations", "Evaluation, monitoring and secure deployment"],
  },
  {
    slug: "3d-vr-mixed-reality",
    icon: "04",
    title: "3D, VR & Mixed Reality",
    short: "Immersive 3D, VR and mixed reality for training, planning and showcasing.",
    long: "We create 3D models, digital twins, virtual reality (VR) and mixed reality (MR) experiences that let people train safely, understand complex places and present ideas convincingly. Because we are geospatial engineers, we can turn real terrain and city data into accurate, interactive 3D environments.",
    outcome: "Training that sticks, plans stakeholders understand, and demos that win support.",
    forWho: "Training providers, urban planners, tourism, education and product teams.",
    points: ["3D modeling and digital twins", "VR training and simulation", "Mixed reality apps for headsets and mobile", "Terrain and city visualization from geospatial data"],
  },
  {
    slug: "business-incubation",
    icon: "05",
    title: "Business Incubation",
    short: "From idea to launch: mentorship, MVPs and connections for founders.",
    long: "Our incubation program helps founders and student teams turn ideas into viable ventures. We validate the problem and the market, build a lean prototype or MVP with you, and connect you with mentors, partners and funding opportunities from our network.",
    outcome: "A validated idea, a working MVP and a clear plan for the next stage.",
    forWho: "Early-stage founders, student teams and organizations launching new ventures.",
    points: ["Idea validation and business planning", "Prototype and MVP development", "Mentorship from industry advisors", "Partner and investor introductions"],
  },
];

export const process = [
  { step: "Discover", desc: "We map your goals, data and constraints, and agree on what success looks like." },
  { step: "Prototype", desc: "A focused proof of concept validates the approach before larger investment." },
  { step: "Build", desc: "We develop, test and integrate the solution with your systems and people." },
  { step: "Scale & train", desc: "We hand over, train your team and support adoption as usage grows." },
];

export const differentiators = [
  { t: "Geospatial + AI depth", d: "Our team are geospatial engineers first, so we understand location data, not just models." },
  { t: "Strategy to deployment", d: "One partner from AI roadmap to production system and staff training, with no hand-off gaps." },
  { t: "A dedicated team in Nepal", d: "Skilled engineers and researchers who deliver great value and scale with your project." },
];

export const faqs = [
  {
    q: "What does I.STEM Lab do?",
    a: "I.STEM Lab is an applied AI and geospatial engineering studio. We build GeoAI solutions, RAG and autonomous agent systems, and 3D, VR and mixed reality experiences, and we help organizations adopt AI through strategy development, training and business incubation.",
  },
  {
    q: "What services does I.STEM Lab offer?",
    a: "Five services: GEO-AI; AI Strategy Development and Training; Data Systems and AI Systems (including RAG and autonomous agents); 3D, VR and Mixed Reality; and Business Incubation.",
  },
  {
    q: "What is GeoAI?",
    a: "GeoAI is the use of artificial intelligence on geospatial data such as satellite imagery, maps and sensor data to detect patterns, predict outcomes and support decisions about places.",
  },
  {
    q: "What is AI strategy development?",
    a: "AI strategy development identifies where AI creates value for an organization and embeds it as a tool within the organizational strategy, supported by a roadmap, governance and staff training.",
  },
  {
    q: "Does I.STEM Lab provide AI training?",
    a: "Yes. We run role-based AI training for leaders and teams so they can use AI tools confidently and responsibly. Training can be delivered on its own or as part of an AI strategy engagement.",
  },
  {
    q: "What is RAG (retrieval-augmented generation)?",
    a: "RAG is an AI technique that retrieves relevant information from your own documents or databases and passes it to a language model, so answers are grounded in your data and can cite their sources.",
  },
  {
    q: "What are autonomous AI agents?",
    a: "Autonomous AI agents are AI systems that plan and carry out multi-step tasks using tools and data, such as researching, drafting, updating records or triaging requests, with human review where it matters.",
  },
  {
    q: "How does a project with I.STEM Lab start?",
    a: "With a short discovery call. We learn your goals and constraints, then propose a scoped first phase, usually a proof of concept, so you can see value before committing to a larger build.",
  },
  {
    q: "Where is I.STEM Lab based?",
    a: "The I.STEM Lab team is based in Nepal, and we work with clients remotely worldwide.",
  },
];

// Featured case studies (content from istemlab.ai, rewritten as case studies)
export const projects = [
  {
    title: "Bidmytrip",
    subtitle: "AI travel marketplace",
    type: "Development",
    service: "Product build",
    image: "/projects/bidmytrip.webp",
    challenge: "Travelers had to compare many providers manually to find the right trip at the right price.",
    solution: "A marketplace where travelers post a trip once and receive competing bids from providers.",
    href: "https://bidmytrip.ai/en",
  },
  {
    title: "Acoustical Ceiling Tile Solutions",
    subtitle: "Business website",
    type: "Development",
    service: "Web platform",
    image: "/projects/acoustica.webp",
    challenge: "A ceiling tile specialist needed a professional online presence that turns visitors into quote requests.",
    solution: "A fast, responsive website presenting products and services with clear calls to action.",
    href: "https://acousticalceilingtilesolutions.com/",
  },
];

// More projects shown below the two main case studies on /work
export const otherProjects = [
  {
    title: "Karnali Integrated Food Security Monitoring System",
    subtitle: "Karnali Ekikrit Khadhya Surakshya Anugaman Pranali",
    type: "Development",
    service: "GEO-AI",
    image: "/projects/keksap.webp",
    challenge: "Food security decisions in Karnali Province depended on scattered, slow-to-collect data.",
    solution: "KEKSAP, a province-wide web platform that combines data entry, GIS mapping, dashboards and analytics to track food security indicators at local and provincial levels.",
    href: "https://keksap.istem-lab.com/",
  },
  {
    title: "Satellite Imagery Super-Resolution",
    subtitle: "Applied research",
    type: "Research",
    service: "GEO-AI",
    image: "/projects/SatelliteImagery.webp",
    challenge: "Free satellite imagery is often too coarse to see small fields, roads and buildings.",
    solution: "Deep learning research that enhances low-resolution satellite images so finer ground features can be mapped.",
    href: "/research",
  },
  {
    title: "GuideMeet",
    subtitle: "Local travel guide marketplace",
    type: "Development",
    service: "Product build",
    image: "/projects/guidemeet.webp",
    challenge: "Travelers struggled to find, compare and contact trustworthy local guides for their destinations.",
    solution: "A platform to search guides by destination, language and specialty, compare profiles and reviews, and contact guides directly, with AI-assisted trip planning.",
    href: "https://guidemeet.com/",
  },
  {
    title: "Quantum Technology",
    subtitle: "Company platform",
    type: "Development",
    service: "Product build",
    image: "/projects/quantum.webp",
    challenge: "A technology company needed a modern platform to present its offer and capture leads.",
    solution: "A fast, responsive web platform designed and built end to end by our team.",
    href: "https://quantumfrontend.istem-lab.com/",
  },
];

// Client websites delivered (from istemlab.ai/work)
export const clientSites = [
  { name: "Dennis Handyman N Remodeling", image: "/projects/dennishandyman.webp", href: "https://burlesonremodelingpro.com/" },
  { name: "Marvel Custom Homes", image: "/projects/marvelcustomhomes.webp", href: "https://marvelcustomhomes.com/" },
  { name: "Fitzs Appliance", image: "/projects/fitzsappliance.webp", href: "https://www.fitzsappliance.com/" },
  { name: "Its Hot Sauce Baby", image: "/projects/itshotsaucebaby.webp", href: "https://itshotsaucebaby.com/" },
  { name: "Numadd Flooring", image: "/projects/numaddflooringinc.webp", href: "https://numaddflooringinc.com/" },
  { name: "Polk Roadside", image: "/projects/polkroadsideassist.webp", href: "https://polkroadsideassist.com/" },
  { name: "Seabrook Texas Town", image: "/projects/seabrooktexastown.webp", href: "https://seabrooktexastown.com/" },
  { name: "Soflo Greencans", image: "/projects/soflogreencans.webp", href: "https://soflogreencans.com/" },
  { name: "Habiff Builders", image: "/projects/habiff-builders-group.webp", href: "https://hbgtexas.com/" },
];

export const pageMeta = (title, description, path) => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: `${SITE.url}${path}`, siteName: SITE.name, type: "website" },
});
