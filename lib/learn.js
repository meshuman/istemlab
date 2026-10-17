// Learn hub content: concepts, tutorials and guides.
// URL shape: /learn/<type>/<slug>
// `seed: true` items are starter material written for the site; review and extend them.
//
// Body blocks:
//   { t: "h2", text }            section heading (also builds the table of contents)
//   { t: "p", text }             paragraph
//   { t: "list", items: [] }     bullet list
//   { t: "steps", items: [] }    numbered list
//   { t: "code", lang, text }    code sample
//   { t: "callout", text }       highlighted note

export const learnTypes = [
  {
    slug: "concepts",
    label: "Concepts",
    singular: "Concept",
    blurb: "Plain-language explainers for the ideas behind GeoAI, RAG and AI agents.",
    long: "Short, jargon-light explanations of the core ideas, so you can follow the conversation and ask better questions.",
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

export const learnItems = [
  /* ------------------------------ Concepts ------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "geoai-in-plain-language",
    title: "GeoAI in plain language",
    excerpt: "What GeoAI is, what it can and cannot do, and where to start.",
    topic: "GeoAI",
    level: "Beginner",
    minutes: 6,
    date: "2026-10-02",
    takeaways: [
      "GeoAI applies machine learning to data that has a location: imagery, maps, GPS and sensors.",
      "It is strongest at repetitive mapping tasks across large areas.",
      "Results depend heavily on image quality, labels and local knowledge.",
    ],
    body: [
      { t: "p", text: "GeoAI is the use of artificial intelligence on geospatial data: satellite and drone images, maps, GPS traces and sensor readings. It answers questions about places, such as what is on the ground, how it is changing, and what is likely to happen next." },
      { t: "h2", text: "What data does it use?" },
      { t: "list", items: ["Satellite and aerial imagery (optical, radar, thermal)", "Vector maps: roads, buildings, boundaries", "Sensor and GPS data", "Weather, terrain and census layers"] },
      { t: "h2", text: "What can it do?" },
      { t: "list", items: ["Classify land cover and crops across a whole province", "Detect and count objects such as buildings or vehicles", "Spot change over time, for example flooding or deforestation", "Forecast outcomes such as yield or risk from many layers of data"] },
      { t: "h2", text: "Where does it go wrong?" },
      { t: "callout", text: "Clouds, shadows, coarse imagery and poor or biased training labels are the usual causes of bad results, not the algorithm itself. A model trained in one region or season often needs retraining before it works in another." },
      { t: "h2", text: "Where to start" },
      { t: "p", text: "Pick one concrete question, such as which fields are bare in March. Check that imagery at a suitable resolution exists, collect a small set of labelled examples, and prove the approach on a pilot area before scaling." },
    ],
  },
  {
    seed: true,
    type: "concepts",
    slug: "resolution-in-satellite-imagery",
    title: "Resolution in satellite imagery: GSD, revisit and bands",
    excerpt: "The three numbers that decide whether an image can answer your question.",
    topic: "GeoAI",
    level: "Beginner",
    minutes: 5,
    date: "2026-09-28",
    takeaways: [
      "Spatial resolution (GSD) is the size of one pixel on the ground.",
      "Revisit time is how often a satellite images the same place.",
      "Spectral bands decide what you can tell apart, such as healthy and stressed crops.",
    ],
    body: [
      { t: "p", text: "Before choosing imagery, check three properties. Together they decide whether the data can answer your question." },
      { t: "h2", text: "Spatial resolution (GSD)" },
      { t: "p", text: "Ground sample distance (GSD) is the ground size of one pixel. A 10 m GSD means each pixel covers 10 by 10 metres. Fields and large buildings show up at 10 m; individual houses and vehicles need well under 1 m." },
      { t: "h2", text: "Revisit time" },
      { t: "p", text: "Revisit time is how often a satellite passes over the same spot. Monitoring crops across a season needs frequent images, while mapping roads may only need one clear image per year. Clouds reduce the number of usable images, so plan for more than you think." },
      { t: "h2", text: "Spectral bands" },
      { t: "p", text: "Sensors record light in bands, such as red, green, blue and near-infrared. Near-infrared is what makes vegetation indices like NDVI possible, because healthy plants reflect it strongly." },
      { t: "callout", text: "Rule of thumb: the smallest thing you need to see should cover at least a few pixels." },
    ],
  },
  {
    seed: true,
    type: "concepts",
    slug: "rag-explained",
    title: "RAG explained: how AI answers from your documents",
    excerpt: "Retrieval-augmented generation, step by step, and why it reduces made-up answers.",
    topic: "RAG & Agents",
    level: "Beginner",
    minutes: 6,
    date: "2026-09-22",
    takeaways: [
      "RAG retrieves relevant passages first, then asks the model to answer using only those passages.",
      "Good retrieval matters more than a bigger model.",
      "Always show sources so users can verify.",
    ],
    body: [
      { t: "p", text: "A language model only knows what it saw during training. Retrieval-augmented generation (RAG) lets it consult your own documents at the moment of the question, so answers are grounded in your data." },
      { t: "h2", text: "The five steps" },
      { t: "steps", items: ["Ingest: collect documents such as PDFs, web pages and records.", "Chunk: split them into passages small enough to be specific, with a little overlap.", "Embed: turn each passage into a vector that captures its meaning, and store it in an index.", "Retrieve: embed the question and fetch the most similar passages.", "Generate: give the passages to the model with instructions to answer only from them and to cite them."] },
      { t: "h2", text: "Why it reduces made-up answers" },
      { t: "p", text: "The model is told to rely on supplied text rather than memory, and the answer can point to its sources. It does not remove errors completely, so keep a human review step for important decisions." },
      { t: "h2", text: "Common failure points" },
      { t: "list", items: ["Chunks too large or too small, so retrieval misses the right passage", "Out-of-date documents in the index", "No evaluation set, so quality is only judged by feel"] },
    ],
  },
  {
    seed: true,
    type: "concepts",
    slug: "ai-agents-explained",
    title: "AI agents explained: from answering to acting",
    excerpt: "What makes an AI agent different from a chatbot, and where human oversight fits.",
    topic: "RAG & Agents",
    level: "Intermediate",
    minutes: 6,
    date: "2026-09-18",
    takeaways: [
      "An agent plans and carries out multi-step tasks using tools, not just replies.",
      "Start with narrow, low-risk tasks and keep a human approval step.",
      "Log every action so you can audit and improve.",
    ],
    body: [
      { t: "p", text: "A chatbot answers a question. An AI agent pursues a goal: it breaks the goal into steps, calls tools such as search, databases or email, checks the results, and continues until the task is done or it needs help." },
      { t: "h2", text: "Typical building blocks" },
      { t: "list", items: ["A language model that plans and decides the next step", "Tools it is allowed to call, each with clear inputs and limits", "Memory or context, such as the task state and relevant documents", "Guardrails: permissions, spending limits and approval points"] },
      { t: "h2", text: "Good first use cases" },
      { t: "list", items: ["Triage and routing of incoming requests", "Drafting reports from several data sources", "Updating records after checking a set of rules"] },
      { t: "callout", text: "Give an agent the least access it needs, require approval for irreversible actions, and keep a log of everything it does." },
    ],
  },

  /* ------------------------------ Tutorials ----------------------------- */
  {
    seed: true,
    type: "tutorials",
    slug: "ndvi-from-sentinel-2",
    title: "Compute NDVI from Sentinel-2 imagery with Python",
    excerpt: "Turn the red and near-infrared bands into a vegetation health map in about 20 lines.",
    topic: "GeoAI",
    level: "Beginner",
    minutes: 15,
    date: "2026-10-08",
    takeaways: [
      "NDVI = (NIR − Red) / (NIR + Red), with values from −1 to 1.",
      "Sentinel-2 band B08 is near-infrared and B04 is red, both at 10 m.",
      "Higher values generally mean denser, healthier vegetation.",
    ],
    body: [
      { t: "p", text: "The Normalized Difference Vegetation Index (NDVI) compares how much near-infrared and red light a surface reflects. Healthy plants reflect a lot of near-infrared and absorb red, so they score high." },
      { t: "h2", text: "What you need" },
      { t: "list", items: ["Python 3.9 or newer", "Two single-band GeoTIFFs from a Sentinel-2 L2A scene: B04 (red) and B08 (near-infrared), both 10 m", "Packages: rasterio and numpy"] },
      { t: "code", lang: "bash", text: "pip install rasterio numpy" },
      { t: "h2", text: "Step 1: read the bands" },
      { t: "code", lang: "python", text: "import numpy as np\nimport rasterio\n\nwith rasterio.open(\"B04.tif\") as red_src, rasterio.open(\"B08.tif\") as nir_src:\n    red = red_src.read(1).astype(\"float32\")\n    nir = nir_src.read(1).astype(\"float32\")\n    profile = red_src.profile" },
      { t: "h2", text: "Step 2: calculate NDVI" },
      { t: "code", lang: "python", text: "# a tiny epsilon avoids dividing by zero over water or no-data pixels\nndvi = (nir - red) / (nir + red + 1e-6)" },
      { t: "h2", text: "Step 3: save the result" },
      { t: "code", lang: "python", text: "profile.update(dtype=\"float32\", count=1)\nwith rasterio.open(\"ndvi.tif\", \"w\", **profile) as dst:\n    dst.write(ndvi, 1)" },
      { t: "h2", text: "Reading the result" },
      { t: "list", items: ["Near or below 0: water, bare rock, snow or clouds", "About 0.1 to 0.3: sparse vegetation or bare soil", "Above about 0.5: dense, healthy vegetation"] },
      { t: "callout", text: "Thresholds depend on crop, season and sensor. Always compare against a few places you know on the ground before trusting a cut-off." },
    ],
  },
  {
    seed: true,
    type: "tutorials",
    slug: "minimal-rag-pipeline",
    title: "Build a minimal RAG pipeline in Python",
    excerpt: "Chunk text, embed it, retrieve the best passages and assemble a grounded prompt.",
    topic: "RAG & Agents",
    level: "Intermediate",
    minutes: 25,
    date: "2026-10-05",
    takeaways: [
      "Chunking with overlap keeps ideas from being cut in half.",
      "Cosine similarity over embeddings is enough for a first retriever.",
      "The prompt should instruct the model to answer only from the passages and cite them.",
    ],
    body: [
      { t: "p", text: "This tutorial builds the core of a RAG system without any framework, so you can see every moving part. It works with any embedding model and any language model." },
      { t: "h2", text: "What you need" },
      { t: "list", items: ["Python 3.9 or newer and numpy", "An embedding function embed(texts) that returns one vector per text, from any provider or local model", "A language model you can call with a prompt"] },
      { t: "h2", text: "Step 1: split documents into chunks" },
      { t: "code", lang: "python", text: "def chunk(text, size=800, overlap=100):\n    step = size - overlap\n    return [text[i:i + size] for i in range(0, len(text), step)]" },
      { t: "h2", text: "Step 2: embed and index" },
      { t: "code", lang: "python", text: "import numpy as np\n\nchunks = chunk(document_text)\nvectors = np.array(embed(chunks))          # shape: (n_chunks, dim)\nvectors /= np.linalg.norm(vectors, axis=1, keepdims=True)  # normalize once" },
      { t: "h2", text: "Step 3: retrieve the best passages" },
      { t: "code", lang: "python", text: "def retrieve(question, k=4):\n    q = np.array(embed([question]))[0]\n    q /= np.linalg.norm(q)\n    scores = vectors @ q                     # cosine similarity\n    best = np.argsort(-scores)[:k]\n    return [(int(i), chunks[i]) for i in best]" },
      { t: "h2", text: "Step 4: build a grounded prompt" },
      { t: "code", lang: "python", text: "def build_prompt(question):\n    passages = retrieve(question)\n    context = \"\\n\\n\".join(f\"[{i}] {text}\" for i, text in passages)\n    return (\n        \"Answer the question using only the passages below. \"\n        \"Cite passage numbers like [2]. If the answer is not in the passages, say you do not know.\\n\\n\"\n        f\"Passages:\\n{context}\\n\\nQuestion: {question}\"\n    )" },
      { t: "h2", text: "Next steps" },
      { t: "list", items: ["Create 20 to 50 real questions with known answers and measure retrieval accuracy", "Try different chunk sizes and overlaps against that test set", "Add metadata filters, such as document date, and re-ranking for better precision"] },
    ],
  },
  {
    seed: true,
    type: "tutorials",
    slug: "web-map-with-maplibre",
    title: "Show your data on a web map with MapLibre",
    excerpt: "Add an interactive map and a GeoJSON point layer to any web page.",
    topic: "Web GIS",
    level: "Beginner",
    minutes: 15,
    date: "2026-09-30",
    takeaways: [
      "MapLibre GL JS is an open-source library for interactive vector maps.",
      "GeoJSON is a simple format for points, lines and polygons.",
      "Sources hold data; layers decide how it is drawn.",
    ],
    body: [
      { t: "p", text: "MapLibre GL JS is a free, open-source library for fast interactive maps. In this tutorial you will put a map on a page and draw one point from a GeoJSON source." },
      { t: "h2", text: "Step 1: the page" },
      { t: "code", lang: "html", text: "<link href=\"https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css\" rel=\"stylesheet\" />\n<script src=\"https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js\"></script>\n\n<div id=\"map\" style=\"height: 480px\"></div>" },
      { t: "h2", text: "Step 2: create the map" },
      { t: "code", lang: "javascript", text: "const map = new maplibregl.Map({\n  container: \"map\",\n  style: \"https://demotiles.maplibre.org/style.json\",\n  center: [85.3237, 27.6808], // [longitude, latitude]\n  zoom: 10,\n});" },
      { t: "h2", text: "Step 3: add a GeoJSON source and a layer" },
      { t: "code", lang: "javascript", text: "map.on(\"load\", () => {\n  map.addSource(\"sites\", {\n    type: \"geojson\",\n    data: {\n      type: \"FeatureCollection\",\n      features: [\n        {\n          type: \"Feature\",\n          properties: { name: \"Office\" },\n          geometry: { type: \"Point\", coordinates: [85.3237, 27.6808] },\n        },\n      ],\n    },\n  });\n\n  map.addLayer({\n    id: \"sites\",\n    type: \"circle\",\n    source: \"sites\",\n    paint: { \"circle-radius\": 8, \"circle-color\": \"#2b5243\" },\n  });\n});" },
      { t: "callout", text: "GeoJSON uses [longitude, latitude] order, the reverse of how most people say coordinates." },
      { t: "h2", text: "Where to go next" },
      { t: "list", items: ["Load your own GeoJSON file with data: \"/sites.geojson\"", "Add a popup when a point is clicked", "Style polygons by an attribute to build a choropleth map"] },
    ],
  },

  /* ------------------------------- Guides ------------------------------- */
  {
    seed: true,
    type: "guides",
    slug: "ai-readiness-checklist",
    title: "AI readiness checklist for your organization",
    excerpt: "Twelve questions to ask before you start an AI project, across data, people, process and risk.",
    topic: "AI Strategy",
    level: "Beginner",
    minutes: 8,
    date: "2026-10-10",
    takeaways: [
      "Most stalled AI projects fail on data access and ownership, not on technology.",
      "Pick one use case with a clear owner and a measurable outcome.",
      "Decide governance and review steps before the pilot, not after.",
    ],
    body: [
      { t: "p", text: "Use this checklist in a short workshop with the people who will own the outcome. Answer honestly; a gap is useful information." },
      { t: "h2", text: "Data" },
      { t: "list", items: ["Do we know where the data lives and who owns it?", "Can we legally and technically use it for this purpose?", "Is it accurate, current and complete enough?"] },
      { t: "h2", text: "People" },
      { t: "list", items: ["Is there a business owner who wants this outcome?", "Who will use the result day to day, and have we asked them?", "Do staff have the basic AI skills to use and question the output?"] },
      { t: "h2", text: "Process" },
      { t: "list", items: ["Which decision or task will change, and how will we measure the improvement?", "What happens when the AI is wrong or unavailable?", "How will the solution be maintained after launch?"] },
      { t: "h2", text: "Risk and governance" },
      { t: "list", items: ["What personal or sensitive data is involved?", "Where must a human review the result?", "Who is accountable for the decisions made with it?"] },
      { t: "callout", text: "If you answered 'not sure' to more than four questions, start with a short readiness assessment before building anything." },
    ],
  },
  {
    seed: true,
    type: "guides",
    slug: "scoping-a-geoai-project",
    title: "How to scope a GeoAI project",
    excerpt: "A seven-step framework to turn a vague idea into a testable pilot.",
    topic: "GeoAI",
    level: "Intermediate",
    minutes: 9,
    date: "2026-10-12",
    takeaways: [
      "Define the question, the area and the time window first.",
      "Check imagery and label availability before promising accuracy.",
      "Run a small pilot with success criteria agreed in advance.",
    ],
    body: [
      { t: "p", text: "A good GeoAI scope is specific enough to test in weeks. Work through these steps with your team and any local experts." },
      { t: "steps", items: ["Write the question as a decision: 'Which fields need irrigation support this month?'", "Set the area and time window: how large, how often, and since when.", "Find suitable imagery: resolution, revisit time and cloud cover for the area and season.", "Plan labels: who will mark examples on the ground or in images, and how many are needed.", "Choose the success measure and a minimum acceptable score before you start.", "Run a pilot on a small area and compare against known ground truth.", "Decide how results will reach users: map, report, alert or API."] },
      { t: "h2", text: "Common pitfalls" },
      { t: "list", items: ["Choosing a model before checking that the data can answer the question", "Training and testing on the same area, which overstates accuracy", "Skipping field validation with local knowledge"] },
    ],
  },
];

export const learnPaths = [
  {
    slug: "geoai-foundations",
    title: "GeoAI foundations",
    blurb: "From first concepts to your first vegetation map and a scoped pilot.",
    items: ["geoai-in-plain-language", "resolution-in-satellite-imagery", "ndvi-from-sentinel-2", "scoping-a-geoai-project"],
  },
  {
    slug: "build-with-rag-and-agents",
    title: "Build with RAG and agents",
    blurb: "Understand the ideas, then build a working retrieval pipeline.",
    items: ["rag-explained", "ai-agents-explained", "minimal-rag-pipeline"],
  },
  {
    slug: "adopt-ai-in-your-organization",
    title: "Adopt AI in your organization",
    blurb: "A practical route from readiness to a well-scoped first project.",
    items: ["ai-readiness-checklist", "rag-explained", "scoping-a-geoai-project"],
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
    level: i.level,
    minutes: i.minutes,
    date: i.date,
    hay: [i.title, i.excerpt, i.topic, i.level, getType(i.type).singular, ...i.takeaways].join(" ").toLowerCase(),
  }));
