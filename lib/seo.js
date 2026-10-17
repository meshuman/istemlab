// Search snippets for Learn content. The on-page H1 keeps the full, descriptive title;
// `title` here is the shorter <title> tag (kept under ~52 characters so that, with the
// " | I.STEM Lab" suffix, it is not cut off in results). `description` overrides a short excerpt.
// Keyed by slug. Anything not listed falls back to the article's own title and excerpt.

export const seo = {
  // Concepts
  "geoai-in-plain-language": { description: "What GeoAI is, how it turns satellite imagery and maps into decisions, where it works, where it fails and how to start a first project." },
  "resolution-in-satellite-imagery": { title: "Satellite Image Resolution Explained" },
  "rag-explained": { title: "RAG Explained: Retrieval-Augmented Generation" },
  "ai-agents-explained": { description: "What an AI agent is, how it differs from a chatbot or a workflow, when to use one, and the limits and guardrails it needs in real work." },
  "digital-twins-explained": { title: "Digital Twins Explained in Plain Language", description: "What a digital twin is, how it differs from a 3D model, what data keeps it current, and when a twin is worth building for a site or asset." },
  "embeddings-explained": { title: "Embeddings Explained: Meaning as Numbers", description: "How embeddings turn text and images into numbers that capture meaning, and how they power semantic search, RAG and recommendations." },
  "gis-basics-rasters-vectors-crs": { description: "GIS basics for beginners: the difference between raster and vector data, coordinate reference systems, projections and the mistakes they cause." },
  "chunking-for-rag": { title: "Chunking for RAG: How to Split Documents", description: "How to split documents for retrieval-augmented generation: chunk size, overlap, structure-aware splitting and how to test which works best." },
  "why-fundamentals-still-matter": { title: "Why Maths and Science Matter in the Age of AI" },
  "vectors-coordinates-transformations": { title: "Vectors, Coordinates and Transformations" },
  "light-spectra-remote-sensing-physics": { title: "Light and Spectra: Remote Sensing Physics" },
  "earth-shape-datums-geodesy": { title: "Earth's Shape, Datums and Geodesy Explained" },
  "statistics-uncertainty-for-geoai": { title: "Statistics and Uncertainty for GeoAI", description: "Statistics for GeoAI: sampling, the confusion matrix, precision and recall, sample size and confidence, overfitting and reporting uncertainty." },
  "optics-photogrammetry-basics": { title: "Optics and Photogrammetry Basics" },
  "perception-physiology-vr": { title: "How Human Perception Shapes VR Comfort" },
  "how-models-learn-gradient-descent": { title: "How Models Learn: Gradient Descent Explained" },
  "3d-file-formats-explained": { title: "3D File Formats Explained: glTF, OBJ, USD" },
  "3d-representations-compared": { title: "Meshes, Point Clouds, NeRFs and Splats" },
  "gaussian-splatting-explained": { title: "Gaussian Splatting Explained Simply" },
  "whats-new-in-3d-and-spatial-computing": { title: "What's New in 3D and Spatial Computing" },
  "ai-basic-terminology": { title: "AI Terminology: 60 Terms in Plain Language" },
  "how-ai-works-and-branches-of-ai": { title: "How Does AI Work? The Branches of AI" },

  // Applied maths stories
  "story-ratios-percentages-and-rates": { title: "Ratios, Percentages and Rates, Told as a Story" },
  "story-averages-spread-and-outliers": { title: "Mean, Median, Spread and Outliers Explained" },
  "story-probability-and-the-positive-test": { title: "Bayes' Rule and the Base Rate Fallacy" },
  "story-geometry-and-the-tallest-tree": { title: "Trigonometry and Similar Triangles in Practice" },
  "story-rates-of-change-the-water-tank": { title: "Calculus Without Fear: Rates and Totals" },
  "story-exponential-growth-the-lily-pond": { title: "Exponential Growth and the Rule of 72" },
  "story-optimisation-the-delivery-rider": { title: "Optimisation and Linear Programming Explained" },

  // Tech jargon
  "jargon-web-and-internet": { title: "Web and Internet Jargon Explained" },
  "jargon-software-development": { title: "Software Development Jargon Explained", description: "Repos, commits, pull requests, CI/CD, staging, sprints and technical debt: software development jargon decoded for non-developers." },
  "jargon-data-and-databases": { title: "Data Jargon: Databases, ETL and Warehouses" },
  "jargon-cloud-and-infrastructure": { title: "Cloud Jargon: IaaS, PaaS, SaaS and Serverless" },
  "jargon-security-and-privacy": { title: "Security and Privacy Jargon Explained" },
  "jargon-geospatial-and-mapping": { title: "GIS Jargon: GNSS, LiDAR, DEM and More" },
  "jargon-immersive-and-spatial-computing": { title: "XR Jargon: 6DoF, Passthrough and FOV" },
  "jargon-emerging-tech-iot-blockchain-quantum": { title: "IoT, 5G, Blockchain and Quantum Explained" },

  // Tutorials
  "maths-in-code-rotations-and-distances": { title: "Rotations and Distances in Python (Tutorial)" },
  "ndvi-from-sentinel-2": { description: "Step-by-step tutorial: download free Sentinel-2 imagery, calculate NDVI in Python, map vegetation health and check the result honestly." },
  "minimal-rag-pipeline": { description: "Build a minimal retrieval-augmented generation pipeline in Python: chunk documents, embed them, retrieve passages and cite sources." },
  "web-map-with-maplibre": { description: "Tutorial: build an interactive web map with MapLibre GL JS, add your own GeoJSON layer, style it and show popups, with free tools." },

  // Guides
  "verify-ai-generated-code": { title: "How to Check AI-Generated Code" },
  "optimise-3d-for-web-and-headsets": { title: "Optimise 3D Models for Web and VR Headsets" },
  "plan-a-vr-training-programme": { title: "How to Plan a VR Training Programme" },
  "your-first-ai-pilot": { title: "Your First AI Pilot: A Step-by-Step Guide" },

  // Experiences
  "questions-before-saying-yes-to-an-ai-project": { title: "7 Questions to Ask Before an AI Project" },
  "estimating-an-ai-project-honestly": { title: "How to Estimate an AI Project Honestly" },
  "when-the-data-is-missing-late-or-wrong": { title: "When AI Project Data Is Missing or Wrong" },
  "getting-people-to-use-what-we-build": { title: "Driving Adoption of a New AI Tool" },
  "keeping-an-ai-system-honest-after-launch": { title: "Monitoring an AI System After Launch" },
  "running-projects-across-time-zones": { title: "Running Projects Across Time Zones" },
};

/** Trim to a search-snippet length at a word boundary. */
export const snippet = (s, max = 155) => {
  if (!s || s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s]+$/, "") + "…";
};

// Short <title> tags for learning-path pages (the H1 keeps the full path name).
export const pathTitles = {
  "geoai-from-zero": "GeoAI Learning Path: Zero to First Map",
  "back-to-basics": "Maths and Science Behind AI, 3D and VR",
  "rag-to-trusted-assistant": "RAG Learning Path: Build a Trusted Assistant",
  "adopt-ai": "How to Adopt AI in Your Organization",
  "immersive-3d-vr-ar": "Learn 3D, VR, AR and Gaussian Splatting",
  "applied-maths-stories": "Applied Mathematics: Where and How It's Used",
  "tech-jargon-decoded": "Tech Jargon Explained: A Learning Path",
};
