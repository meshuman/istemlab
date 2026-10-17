// Content pulled from istemlab.ai (team API, partners, values).
// Entries marked `seed: true` are demo content: istemlab.ai currently has no
// published blogs, research papers or job openings. Replace or delete them before launch.

export const team = [
  { name: "Suman Baral", role: "CEO", image: "/team/suman-baral.webp" },
  { name: "Rajkumar Acharya", role: "AI Developer", image: "/team/rajkumar-acharya.webp" },
  { name: "Gaurav Pandey", role: "Business Officer", image: "/team/gaurav-pandey.webp" },
  { name: "Prabhat Bhusal", role: "Mixed Reality Developer", image: "/team/prabhat-bhusal.webp" },
  { name: "Sapana Adhikari", role: "Digital Content Officer", image: "/team/sapana-adhikari.webp" },
];

export const partners = [
  { name: "8848 Holdings", logo: "/clients/8848-holdings.png" },
  { name: "Acoustical Ceiling", logo: "/clients/acoustical-ceiling.png" },
  { name: "Quantum", logo: "/clients/quantum.png" },
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

export const posts = [
  {
    seed: true,
    slug: "what-is-geoai",
    title: "What is GeoAI, and why does it matter for decision makers?",
    excerpt: "A plain-language guide to applying AI to satellite imagery and map data, with real-world use cases.",
    date: "2026-09-12",
    author: "I.STEM Lab Team",
    tag: "GeoAI",
    image: "/projects/SatelliteImagery.webp",
    body: [
      "GeoAI is the use of artificial intelligence on geospatial data: satellite and drone imagery, maps, GPS traces and sensor readings. It answers questions about places, such as what is on the ground, how it is changing and what is likely to happen next.",
      "Traditional GIS relies on analysts to digitize and interpret data by hand. GeoAI automates much of that work. Models can classify land cover across an entire province, count buildings, or flag crop stress in hours instead of months.",
      "Typical uses include food security and crop monitoring, disaster risk and damage assessment, urban growth planning, infrastructure inspection and environmental protection.",
      "For decision makers the value is speed and coverage: up-to-date, consistent information for every location, not just the places someone had time to survey. The key to success is pairing good models with local knowledge and clear questions.",
    ],
  },
  {
    seed: true,
    slug: "rag-vs-autonomous-agents",
    title: "RAG vs. autonomous agents: which does your organization need?",
    excerpt: "How retrieval-augmented generation and AI agents work, and how to choose the right one for your first project.",
    date: "2026-08-28",
    author: "I.STEM Lab Team",
    tag: "AI Systems",
    image: "/products/bindu-interface.webp",
    body: [
      "Retrieval-augmented generation (RAG) connects a language model to your own documents and data. When someone asks a question, the system finds the most relevant passages and uses them to write an answer, with citations back to the source.",
      "Autonomous agents go a step further. Instead of only answering, they plan and carry out multi-step tasks, such as researching a topic, filling a form, updating a record or triaging a support ticket, using tools you give them.",
      "Start with RAG when the main problem is finding information: policies, reports, manuals or research spread across many files. Start with agents when the problem is repetitive work that follows a recognizable pattern.",
      "Many organizations combine both: a RAG layer gives agents accurate knowledge, and human review stays in the loop for decisions that matter.",
    ],
  },
  {
    seed: true,
    slug: "embedding-ai-in-organizational-strategy",
    title: "Five steps to embed AI in your organizational strategy",
    excerpt: "Move beyond pilots: a practical framework for prioritizing use cases, governing risk and training your people.",
    date: "2026-08-04",
    author: "I.STEM Lab Team",
    tag: "AI Strategy",
    image: "/about-team.webp",
    body: [
      "1. Start from goals, not tools. List the organizational outcomes you care about most, then ask where AI could move them.",
      "2. Prioritize use cases by value and feasibility. Data availability, risk and change effort matter as much as potential impact.",
      "3. Set governance early. Agree on acceptable use, data privacy, human oversight and how you will measure quality.",
      "4. Prove value with a focused pilot, then scale what works into everyday processes.",
      "5. Train your people. Role-based AI training turns a tool into a capability, and is the biggest predictor of lasting adoption.",
    ],
  },
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

export const jobs = [
  { seed: true, title: "GeoAI / Machine Learning Engineer", type: "Full-time", location: "Nepal / Hybrid", desc: "Build models on satellite and geospatial data, from data pipelines to deployment." },
  { seed: true, title: "AI Systems Engineer (RAG & Agents)", type: "Full-time", location: "Remote", desc: "Design and ship RAG pipelines and autonomous agents with evaluation and monitoring." },
  { seed: true, title: "3D / VR Developer", type: "Contract", location: "Remote", desc: "Create immersive Unity and WebXR experiences, including terrain and city models." },
  { seed: true, title: "AI Strategy Consultant & Trainer", type: "Part-time", location: "Remote", desc: "Guide organizations in adopting AI and run hands-on training for leaders and teams." },
  { seed: true, title: "Data Engineer", type: "Full-time", location: "Nepal / Hybrid", desc: "Build the data pipelines and platforms our AI systems run on." },
  { seed: true, title: "Startup Program Manager", type: "Full-time", location: "Nepal", desc: "Run business incubation cohorts, mentoring and partner introductions." },
];

export const perks = [
  { t: "Environment", d: "A forward-thinking team that values innovation and problem-solving, alongside industry experts and researchers in GeoAI and Web GIS." },
  { t: "Real impact", d: "Work on systems that are used in the field, from food security monitoring to live products." },
  { t: "Learning", d: "Learning never stops: workshops, mentoring and high-level technical discussions." },
];
