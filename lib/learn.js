// Learn hub: content types, learning paths and helpers.
// Articles live in separate files so each stays easy to edit:
//   lib/learn-concepts.js, lib/learn-concepts-2.js, lib/learn-tutorials.js, lib/learn-guides.js
// URL shape: /learn/<type>/<slug>
//
// Body blocks (see lib/blocks.js for the helpers):
//   h2 = section heading (also builds the table of contents)   p = paragraph
//   ul = bullet list   ol = numbered list   code = code sample   note = highlighted note
//
// Reading time is CALCULATED from the text (lib/readtime.js), never typed in by hand.

import { readingMinutes } from "./readtime";
import { concepts } from "./learn-concepts";
import { concepts2 } from "./learn-concepts-2";
import { tutorials } from "./learn-tutorials";
import { guides } from "./learn-guides";
import { basicsA } from "./learn-basics-a";
import { basicsB } from "./learn-basics-b";
import { immersive } from "./learn-immersive";
import { immersive2 } from "./learn-immersive-2";
import { terminology } from "./learn-terminology";
import { maths } from "./learn-maths";
import { jargon } from "./learn-jargon";
import { withExtras } from "./extras";

export const learnTypes = [
  {
    slug: "concepts",
    label: "Concepts",
    singular: "Concept",
    blurb: "Plain-language explainers for the ideas behind GeoAI, RAG and AI agents.",
    long: "Clear, jargon-light explanations of the core ideas, so you can follow the conversation and ask better questions.",
  },
  {
    slug: "tutorials",
    label: "Tutorials",
    singular: "Tutorial",
    blurb: "Step-by-step, hands-on walkthroughs with code you can run.",
    long: "Practical walkthroughs from raw data to a working result. Each one lists what you need and what you will build.",
  },
  {
    slug: "guides",
    label: "Guides",
    singular: "Guide",
    blurb: "Checklists and frameworks for planning and adopting AI in your organization.",
    long: "Decision-oriented guides for leaders and project teams: what to ask, what to prepare and how to avoid common mistakes.",
  },
];

const withReadingTime = (item) => ({ ...item, minutes: readingMinutes(item) });
// One photo per article, in /public/learn-photos/<slug>.webp
const withImage = (item) => ({ ...item, image: `/learn-photos/${item.slug}.webp` });

export const learnItems = [...concepts, ...concepts2, ...basicsA, ...basicsB, ...immersive, ...immersive2, ...terminology, ...maths, ...jargon, ...tutorials, ...guides]
  .map(withExtras)
  .map(withReadingTime)
  .map(withImage);

// Learning paths: each is a short, ordered set of articles that builds step by step. Every path has its own
// page (/learn/paths/<slug>). Items must be slugs of articles above. Ordering and topics reflect what newcomers
// ask most often: learn the GIS basics first, then free data and tools, then a small hands-on result; for RAG,
// chunking and evaluation come before fancy tooling; for adoption, start with one measured task.
//   level          who it is pitched at
//   prerequisites  what the learner should already have
//   outcomes       what they will be able to do at the end
//   after          paths that make a good next step
export const learnPaths = [
  {
    slug: "geoai-from-zero",
    title: "GeoAI: from zero to your first map",
    audience: "Analysts, planners and students new to GIS or satellite data",
    blurb: "Learn the basics, work with free imagery and finish with a land cover map you tested honestly.",
    level: "Beginner to intermediate",
    prerequisites: "None to start. Basic Python helps from the NDVI tutorial onwards.",
    outcomes: [
      "Explain rasters, vectors and coordinate systems in plain language",
      "Choose suitable free satellite imagery for a question",
      "Compute and cloud-mask a vegetation index from Sentinel-2",
      "Train and honestly test a land cover classifier",
      "Share results on an interactive web map",
      "Scope a GeoAI pilot with a clear decision and success measure",
    ],
    after: ["back-to-basics", "rag-to-trusted-assistant"],
    items: [
      "gis-basics-rasters-vectors-crs",
      "geoai-in-plain-language",
      "resolution-in-satellite-imagery",
      "ndvi-from-sentinel-2",
      "land-cover-random-forest",
      "web-map-with-maplibre",
      "scoping-a-geoai-project",
    ],
  },
  {
    slug: "back-to-basics",
    title: "Back to basics: the maths and science behind GeoAI, 3D and VR",
    audience: "Anyone who wants to understand, check and adapt what AI builds, not just run it",
    blurb:
      "AI can draft the code, the model and the scene. People are still needed to develop, fine-tune and put them in context, and that takes the fundamentals.",
    level: "Beginner to intermediate",
    prerequisites: "School-level maths. Python helps for the hands-on tutorial.",
    outcomes: [
      "Use vectors, rotations and coordinate frames with confidence",
      "Explain datums, heights and why degrees are not flat distances",
      "Reason about light, spectra and why a model confuses shadow with water",
      "Judge a map or model with accuracy, recall and honest testing",
      "Understand photogrammetry, human perception and comfort in VR",
      "Review AI-generated GIS, 3D and ML code before you trust it",
    ],
    after: ["geoai-from-zero", "immersive-3d-vr-ar"],
    items: [
      "why-fundamentals-still-matter",
      "vectors-coordinates-transformations",
      "earth-shape-datums-geodesy",
      "light-spectra-remote-sensing-physics",
      "statistics-uncertainty-for-geoai",
      "optics-photogrammetry-basics",
      "perception-physiology-vr",
      "how-models-learn-gradient-descent",
      "maths-in-code-rotations-and-distances",
      "verify-ai-generated-code",
    ],
  },
  {
    slug: "rag-to-trusted-assistant",
    title: "RAG: from idea to a trusted assistant",
    audience: "Teams building an AI assistant over their own documents",
    blurb: "Understand how it works, split documents well, build a pipeline and prove it answers correctly.",
    level: "Intermediate",
    prerequisites: "Basic Python for the tutorial. No machine learning background needed.",
    outcomes: [
      "Explain how retrieval-augmented generation works end to end",
      "Understand embeddings and choose a chunking strategy for your documents",
      "Build a small retrieval pipeline without a framework",
      "Measure retrieval and answer quality with a real test set",
      "Spot and fix the most common failure modes",
    ],
    after: ["adopt-ai", "back-to-basics"],
    items: [
      "rag-explained",
      "embeddings-explained",
      "chunking-for-rag",
      "minimal-rag-pipeline",
      "evaluate-a-rag-assistant",
    ],
  },
  {
    slug: "adopt-ai",
    title: "Adopt AI in your organization",
    audience: "Leaders and small teams deciding where to start",
    blurb: "Learn the language and how AI works first, then check your readiness, run one measured pilot and understand the two big building blocks.",
    level: "Beginner",
    prerequisites: "None. Written for non-technical readers, starting with the vocabulary.",
    outcomes: [
      "Speak the same AI vocabulary as your team, your vendors and your leaders",
      "Explain in plain words how AI learns from data, and name its main branches",
      "Match a business problem to the right branch of AI",
      "Score your organisation’s readiness across data, people, process and risk",
      "Choose one task, set a baseline and run a 30-day pilot",
      "Understand what RAG assistants and AI agents can and cannot do",
      "Decide, with evidence, whether to continue, change or stop",
    ],
    after: ["rag-to-trusted-assistant", "geoai-from-zero"],
    items: ["ai-basic-terminology", "how-ai-works-and-branches-of-ai", "ai-readiness-checklist", "your-first-ai-pilot", "rag-explained", "ai-agents-explained"],
  },
  {
    slug: "immersive-3d-vr-ar",
    title: "Immersive 3D, VR and AR",
    audience: "Anyone considering immersive experiences, a digital twin, 3D capture or VR training",
    blurb:
      "From choosing the right technology to capturing a real place, working with meshes and Gaussian splats, publishing it and training people with it.",
    level: "Beginner to intermediate",
    prerequisites: "None to start. The publishing tutorial uses basic HTML, and the splat tutorial benefits from a graphics card or a cloud notebook.",
    outcomes: [
      "Tell VR, AR and mixed reality apart, and choose the simplest option that works",
      "Explain what makes a digital twin different from a 3D model",
      "Plan and run a field capture of a real place with the right permissions and checks",
      "Choose between meshes, point clouds, NeRFs and Gaussian splats for a given job",
      "Capture a place and train, clean and view a Gaussian splat",
      "Choose file formats, optimise a heavy scan and publish it on the web with AR",
      "Plan a VR training programme with real measures",
      "Judge new 3D and spatial computing developments without chasing hype",
    ],
    after: ["back-to-basics", "geoai-from-zero"],
    items: [
      "vr-ar-mixed-reality-explained",
      "digital-twins-explained",
      "optics-photogrammetry-basics",
      "capture-a-real-place-field-checklist",
      "3d-representations-compared",
      "gaussian-splatting-explained",
      "capture-and-view-gaussian-splat",
      "3d-file-formats-explained",
      "optimise-3d-for-web-and-headsets",
      "publish-3d-model-model-viewer",
      "perception-physiology-vr",
      "plan-a-vr-training-programme",
      "whats-new-in-3d-and-spatial-computing",
    ],
  },
  {
    slug: "applied-maths-stories",
    title: "Learn Applied Mathematics: Where and how it's used",
    audience: "Anyone who was told maths is useful and never saw where, from students to managers",
    blurb:
      "Seven short stories about ratios, averages, probability, geometry, change, growth and optimisation, then the two ideas that power modern AI and 3D.",
    level: "Beginner",
    prerequisites: "None. Everyday arithmetic is enough; every idea is told as a story first.",
    outcomes: [
      "Use ratios, percentages and rates to compare things fairly",
      "Read averages and spread, and spot when an outlier misleads",
      "Judge a positive test result without being fooled by base rates",
      "Measure what you cannot reach using similar triangles and angles",
      "Explain rates of change and why growth can be slow, then suddenly fast",
      "Frame a choice as optimisation under limits",
      "Connect vectors and gradient descent to GeoAI, 3D and machine learning",
    ],
    after: ["back-to-basics", "adopt-ai"],
    items: [
      "story-ratios-percentages-and-rates",
      "story-averages-spread-and-outliers",
      "story-probability-and-the-positive-test",
      "story-geometry-and-the-tallest-tree",
      "story-rates-of-change-the-water-tank",
      "story-exponential-growth-the-lily-pond",
      "story-optimisation-the-delivery-rider",
      "vectors-coordinates-transformations",
      "how-models-learn-gradient-descent",
    ],
  },
  {
    slug: "tech-jargon-decoded",
    title: "Learning tech jargons: Understand the Technologies better",
    audience: "Managers, founders, students and new team members who nod along in technical meetings",
    blurb:
      "Plain-language decoders for AI, web, software, data, cloud, security, geospatial, immersive and emerging technology vocabulary.",
    level: "Beginner",
    prerequisites: "None. Read in any order; start with AI basics if you can.",
    outcomes: [
      "Follow a technical proposal or project update without a translator",
      "Place any term on the map: web, software, data, cloud, security, geospatial or immersive",
      "Spot buzzwords and ask the questions that cut through them",
      "Know what to ask suppliers about ownership, cost, security and exit",
    ],
    after: ["adopt-ai", "back-to-basics"],
    items: [
      "ai-basic-terminology",
      "how-ai-works-and-branches-of-ai",
      "jargon-web-and-internet",
      "jargon-software-development",
      "jargon-data-and-databases",
      "jargon-cloud-and-infrastructure",
      "jargon-security-and-privacy",
      "jargon-geospatial-and-mapping",
      "jargon-immersive-and-spatial-computing",
      "jargon-emerging-tech-iot-blockchain-quantum",
    ],
  },
];

/* ------------------------------- helpers ------------------------------- */

export const getType = (slug) => learnTypes.find((t) => t.slug === slug);
export const getItem = (type, slug) => learnItems.find((i) => i.type === type && i.slug === slug);
export const itemsOfType = (type) => learnItems.filter((i) => i.type === type);

/** Lightweight records for the client-side list (no article bodies) with a search string. */
export const toCards = (list) =>
  list.map((i) => ({
    slug: i.slug,
    type: i.type,
    typeLabel: getType(i.type).singular,
    title: i.title,
    excerpt: i.excerpt,
    topic: i.topic,
    image: i.image,
    level: i.level,
    minutes: i.minutes,
    date: i.date,
    hay: [i.title, i.excerpt, i.topic, i.level, getType(i.type).singular, ...i.takeaways].join(" ").toLowerCase(),
  }));

/* --------------------------- learning path helpers --------------------------- */

export const getPath = (slug) => learnPaths.find((p) => p.slug === slug);

/** The articles of a path, in order. */
export const pathItems = (path) => path.items.map((s) => learnItems.find((i) => i.slug === s)).filter(Boolean);

export const pathStats = (path) => {
  const items = pathItems(path);
  return { count: items.length, minutes: items.reduce((n, i) => n + i.minutes, 0) };
};

const ref = (i) =>
  i ? { type: i.type, slug: i.slug, title: i.title, minutes: i.minutes, typeLabel: getType(i.type).singular } : null;

/**
 * Every path that contains an article, with the reader's position in it, the previous and next step and
 * a short list of the most relevant articles to read next (the rest of that path, nearest steps first).
 */
export const pathMemberships = (slug) =>
  learnPaths
    .filter((p) => p.items.includes(slug))
    .map((p) => {
      const items = pathItems(p);
      const idx = items.findIndex((i) => i.slug === slug);
      const order = [...items.slice(idx + 1), ...items.slice(0, idx).reverse()];
      return {
        slug: p.slug,
        title: p.title,
        index: idx + 1,
        total: items.length,
        prev: ref(items[idx - 1]),
        next: ref(items[idx + 1]),
        related: toCards(order.slice(0, 3)),
      };
    });
