// Extra sections appended to the Concepts articles (worked examples, practical detail, FAQs).
// They are inserted before each article's closing paragraph by lib/extras.js.

import { p, h2, ul, ol, note, qa } from "./blocks";

export const conceptExtras = {
  "geoai-in-plain-language": [
    h2("GeoAI in practice: three short examples"),
    p("Agriculture. A farmers’ cooperative uses free Sentinel-2 images to track crop vigour every week. When one block of fields lags behind its neighbours, an extension officer visits that block first, instead of driving to every farm in the district."),
    p("Disaster response. After heavy rain, radar satellite images show where water has spread, even through cloud. A model separates flooded from dry land within hours, and relief teams use the map to plan routes and decide where to send supplies."),
    p("Cities. A municipality compares images from two different years to find new buildings that have no permit on record. The model flags candidates, and inspectors check the flagged sites instead of searching the whole city."),
    p("In every case, the model decides nothing by itself. It shortens the list of places where a person needs to look."),
    h2("Tools you will meet along the way"),
    ul(
      "QGIS: a free desktop GIS for viewing, editing and mapping data.",
      "Python with libraries such as rasterio, geopandas and scikit-learn: for repeating analyses and training models.",
      "Public data catalogues and platforms such as Google Earth Engine: for finding and processing large archives of satellite imagery.",
      "Cloud notebooks: for running code without a powerful computer.",
      "Web mapping libraries: for sharing results as interactive maps.",
    ),
    p("You do not need all of them at once. A sensible order is QGIS first, to build intuition for how spatial data behaves, then Python once you want to repeat a task or analyse more data than you can click through."),
    h2("Frequently asked questions"),
    qa(
      ["Do I need to be a programmer to start with GeoAI?", "No. You can learn the concepts and make useful maps with QGIS and online tools. Programming becomes important when you want to repeat an analysis on many images, or train your own models, and Python is the usual choice."],
      ["Is GeoAI the same as GIS?", "No. GIS is the discipline and the software for storing, analysing and presenting spatial data. GeoAI is one set of techniques within it, using machine learning to extract information from data at scale."],
      ["How many labelled examples do I need?", "It depends on how varied the land is and how many classes you map. A few hundred well-chosen examples per class can give a useful first result. More varied examples usually help more than simply more of the same kind."],
      ["How accurate can it be?", "Good land cover maps often reach high overall accuracy, but the figure depends on the classes, the imagery and how the test was done. Always ask how accuracy was measured, and where the model makes its mistakes."],
    ),
  ],

  "resolution-in-satellite-imagery": [
    h2("A worked example: choosing imagery for a flood study"),
    p("Suppose a district office wants to know how far a river flooded last week, and which villages were affected. Walk through the three properties in turn."),
    ol(
      "Smallest feature: they care about whole villages and large fields, which are tens of metres across. A 10 metre pixel is fine, and sub-metre detail would be wasted.",
      "Frequency and cloud: the flood happened during the monsoon, and optical images will be covered by cloud. Radar, which sees through cloud, is the better choice, and the satellite must have passed over during or just after the event.",
      "What must be told apart: water from land. Radar shows water clearly as dark areas, so a simple threshold, checked against a few places on the ground, may be enough.",
    ),
    p("The decision took three questions and no budget. A team that began by asking for “the best resolution available” would have spent far more, and might still have received a cloudy image."),
    h2("Terms you will see in product descriptions"),
    ul(
      "GSD: ground sample distance, the pixel size on the ground.",
      "Swath: the width of the strip a satellite images in one pass.",
      "Off-nadir angle: how far the satellite looked sideways. Large angles distort the image and make buildings lean.",
      "Level 1 and Level 2: how much processing has been applied. Level 2 data has usually been corrected for the atmosphere and is easier to compare over time.",
      "Cloud cover percentage: the share of the scene covered by cloud, which tells you how much of it is usable.",
      "Orthorectified: corrected so that the image lines up with a map, with effects of terrain removed.",
    ),
    h2("Frequently asked questions"),
    qa(
      ["Is free satellite imagery good enough?", "For many tasks, yes. Free 10 to 30 metre imagery supports crop monitoring, forest and water mapping, and regional change detection. It is not suitable for counting individual buildings or vehicles."],
      ["Why does a satellite that passes every five days give me so few images?", "Because clouds hide the ground on many passes, and some scenes are partly cloudy. In wet climates, plan on far fewer clear images than the schedule suggests, or use radar."],
      ["Can I improve resolution with software?", "Super-resolution models can make low-resolution imagery look sharper, and they are useful for visual interpretation. They estimate detail rather than recover it, so treat measurements from enhanced images with care."],
      ["Which bands should I get for crop monitoring?", "At least red and near-infrared, which give you vegetation indices such as NDVI. Red-edge and short-wave infrared bands add information about stress and moisture."],
    ),
  ],

  "rag-explained": [
    h2("A day in the life of one question"),
    p("It helps to follow a single question through the system. An employee types: “Can I claim a taxi home if I work past nine?”"),
    ol(
      "The question is converted into an embedding, a list of numbers that captures its meaning.",
      "The index returns the six passages whose meaning is closest. Two come from the travel policy, one from an overtime guide and three are weak matches.",
      "A re-ranking step reorders them and keeps the best four.",
      "The prompt tells the model to answer only from those four passages, to cite them and to say so if the answer is missing.",
      "The model replies: taxis are reimbursed after nine in the evening with a receipt, and the answer cites the two policy passages.",
      "The employee clicks a citation, sees the original paragraph and trusts the answer, or spots a mistake and reports it.",
    ),
    p("Notice how many steps sit before the language model. This is why improving retrieval usually helps more than changing the model."),
    h2("Costs, speed and privacy"),
    ul(
      "Cost: you pay for embedding documents once, for each question that is asked, and for the model call that writes the answer. Caching common questions reduces it.",
      "Speed: retrieval takes a fraction of a second, and generation takes a few seconds, which is why many assistants stream the answer as it is written.",
      "Privacy: if you use outside services for embedding or generation, your text is sent to them. Check their terms, or run models on your own servers for sensitive material.",
      "Access: the system must only retrieve documents that the person asking is allowed to read.",
    ),
    h2("Frequently asked questions"),
    qa(
      ["Does RAG stop the model from hallucinating?", "It greatly reduces it by giving the model real source text, but it does not eliminate it. The model can still misread a passage or add details, which is why evaluation and citations matter."],
      ["How much data do I need?", "There is no minimum. RAG works for a handful of documents and for millions. What matters is that the documents are accurate and current."],
      ["Can RAG read tables, scanned PDFs and images?", "Only if they are converted to text first. Scanned files need text recognition, and tables need careful handling so that rows keep their meaning."],
      ["Should I fine-tune a model instead?", "Usually not at first. Fine-tuning teaches style or skills, not facts that change. RAG is easier to update and to audit, so most teams start there."],
    ),
  ],

  "ai-agents-explained": [
    h2("A worked design: an expense-report checker"),
    p("Imagine an agent that helps a finance team review expense claims. Here is how a careful design might look."),
    ul(
      "Goal: check each claim against the policy and prepare a recommendation, so a person can approve in seconds.",
      "Tools: read the claim, read the receipt image through text recognition, search the policy, look up the employee’s earlier claims. All are read-only.",
      "Limits: the agent cannot approve, pay or edit anything. It writes a recommendation and a list of issues.",
      "Escalation: claims above a set amount, or with a missing receipt, go straight to a person with a short explanation.",
      "Logging: every claim, every tool call and every recommendation is stored, so that a manager can see exactly what happened.",
      "Evaluation: before launch, the agent runs on 200 past claims whose outcomes are known, and its recommendations are compared with what people decided.",
    ),
    p("This agent saves time without being given authority. If it proves reliable over months, the organisation can decide whether to let it approve small, clean claims alone."),
    h2("Do you need an agent framework?"),
    p("Many tutorials start with a framework, and communities often argue about which is best. Practitioners who run agents for real customers tend to report that the choice matters less than the basics: good error handling, saved state so a task can resume, clear logs and honest evaluation. Frameworks can help you see what the agent is doing. They cannot supply reliability for you."),
    p("A good rule is to start with the simplest approach that works, understand every step it takes, and adopt a framework when its features solve a problem you actually have."),
    h2("Frequently asked questions"),
    qa(
      ["Are AI agents just hype?", "Some claims are. But agents that do narrow tasks with clear tools, limits and human review already deliver real value. The risk is in giving broad autonomy before the evidence supports it."],
      ["How is an agent different from automation tools like Zapier?", "Automation runs a fixed sequence that you design. An agent chooses its own steps, which suits messy inputs but is less predictable. Many systems combine fixed workflows with an agent for the judgement calls."],
      ["What is prompt injection?", "It is an attack in which text that the agent reads, such as an email or web page, contains instructions that try to override the agent’s own. Defend against it by treating outside text as data, limiting tools and requiring approvals."],
      ["Which tasks should an agent never do alone?", "Anything irreversible or high stakes, such as moving money, deleting records, sending messages to customers or making legal or medical decisions."],
    ),
  ],

  "digital-twins-explained": [
    h2("A small example: a campus water tank"),
    p("Take a university campus that struggles with water shortages. Its first digital twin does not model the whole campus. It covers a single rooftop tank and the pipes that feed three buildings."),
    ul(
      "The 3D base: a simple model made from drone photographs and the plumbing drawings.",
      "The data: a level sensor in the tank and flow meters on the pipes, reporting every few minutes.",
      "The view: a web page that shows the tank level on the 3D model and colours each pipe by flow.",
      "The rules: an alert when the tank falls below a threshold, and a weekly report on unusual night-time flow, which often means a leak.",
    ),
    p("Within a few months the team finds a leak that had gone unnoticed, and learns when each building really uses water. That evidence, not the 3D model, is what justifies extending the twin to the next system."),
    h2("Build, buy or partner?"),
    ul(
      "Buy a platform when your needs are common, for example facility management, and a product already fits them.",
      "Build when your data or decisions are unusual, or when you need full control. Expect to maintain it for years.",
      "Partner when you need specialist skills, such as scanning and modelling, but want to own the data and the decisions.",
    ),
    p("Whichever route you take, insist on open data formats and the right to export your model and data, so that you are never locked in."),
    h2("Frequently asked questions"),
    qa(
      ["How accurate does the 3D model need to be?", "Only as accurate as the decisions require. Maintenance planning may need centimetre-level detail. A public tour of a heritage site may not. Ask what the least detail is that still supports the decision."],
      ["Does a digital twin need sensors?", "Not always. A twin can be updated from surveys, records or periodic scans. Sensors help when conditions change quickly and you need live information."],
      ["How much does one cost?", "Costs range from a few thousand dollars for a scanned model with a viewer, to large sums for a connected city-scale system. The annual cost of keeping data current is often larger than the cost of the first build."],
      ["Is it the same as BIM?", "No. Building information modelling describes a building’s design and construction. A digital twin can use BIM as its starting model and then adds live data and analysis during operation."],
    ),
  ],

  "vr-ar-mixed-reality-explained": [
    h2("Hardware at a glance"),
    ul(
      "Standalone headsets: self-contained, with no computer or cables. The easiest option for training rooms and events.",
      "PC-connected headsets: higher visual quality, needed for very detailed scenes, but they require a powerful computer and more setup.",
      "Phones and tablets: the widest reach for AR. Most people already own one, and web-based AR needs no app.",
      "Smart glasses: lightweight and hands-free, and suited to guidance and information overlays, with limited visual capability so far.",
    ),
    p("Hardware changes quickly. Choose based on where your audience is and how many people need to use the experience at once, and avoid committing to one model for years."),
    h2("A short example: safety training in VR"),
    p("A factory needs to train staff to respond to a chemical spill. Doing it for real is dangerous, and staging a drill stops production. A VR scenario reproduces the plant from scans, and trainees practise the response step by step. They can repeat it until it is automatic, make mistakes safely and get instant feedback."),
    ul(
      "Measure it: compare test scores and time to complete the procedure before and after.",
      "Keep it short: ten to fifteen minutes per session is enough for most procedures.",
      "Add a facilitator: a trainer watching a screen can pause, explain and debrief.",
      "Offer an alternative: a screen-based version for people who cannot use a headset.",
    ),
    h2("Frequently asked questions"),
    qa(
      ["Do people get motion sick in VR?", "Some do, especially when the scene moves while the body stays still. Avoid artificial movement and sudden camera changes, keep sessions short and let people stop at any time."],
      ["Can I use VR on the web without a headset?", "Yes. Modern browsers can show interactive 3D scenes on phones and laptops, and many support headsets too. It is often the best first step."],
      ["How long does an experience take to make?", "A simple 3D tour of a captured place can take a few weeks. A custom interactive training scenario takes longer, depending on how many interactions and rules it needs."],
      ["Is AR or VR better for marketing?", "Neither is always better. Phone-based AR and web 3D reach more people with less friction. VR suits high-value situations, such as showing a large project to an investor in a controlled setting."],
    ),
  ],

  "embeddings-explained": [
    h2("A tiny numeric example"),
    p("Real embeddings have hundreds of numbers, but the idea is easy to see with three. Imagine a toy model that scores each sentence on three made-up dimensions: how much it is about money, about travel and about food."),
    ul(
      "“Book a flight to Pokhara”: money 0.2, travel 0.9, food 0.0",
      "“Reserve a bus ticket to Pokhara”: money 0.3, travel 0.8, food 0.0",
      "“Best momo restaurants in town”: money 0.1, travel 0.1, food 0.9",
    ),
    p("The first two sentences have almost identical numbers, so they are close together. The third is far from both. If someone searches for “travel to Pokhara”, the first two would rank at the top, even though neither contains those exact words. Real models learn thousands of subtle dimensions like these automatically, rather than three that people chose."),
    h2("Do you need a vector database?"),
    p("Not at first. For a few thousand chunks, you can keep the vectors in memory and compare them with a simple calculation, which is fast enough. A vector database becomes worthwhile when you have hundreds of thousands or millions of chunks, need fast approximate search, want filtering by metadata or have many users at once."),
    ul(
      "Start simple, and measure how long searches take.",
      "Choose a database that supports metadata filters, because you will want them.",
      "Plan for updates: documents change, and old vectors must be replaced.",
    ),
    h2("Frequently asked questions"),
    qa(
      ["Are embeddings the same as the language model?", "No. An embedding model is a separate, usually smaller model that only produces vectors. A language model reads text and writes new text. RAG systems use both."],
      ["Do embeddings work in languages other than English?", "Many models work across dozens of languages, and some are designed for them. Test on your own language and your own vocabulary, because quality varies."],
      ["What does cosine similarity measure?", "It measures the angle between two vectors, which reflects how similar their meanings are, regardless of their length. A score near one means very similar."],
      ["Can embeddings reveal private information?", "The vectors are derived from your text, so treat them with the same care as the text. Do not store them or send the text for embedding in places you would not trust with the original."],
    ),
  ],

  "gis-basics-rasters-vectors-crs": [
    h2("File formats you will meet"),
    ul(
      "Shapefile: the long-standing vector format from Esri. It is really a bundle of several files that must stay together, and it has limits on field names and size.",
      "GeoJSON: a simple text format for vector data, popular on the web. It expects coordinates in longitude and latitude.",
      "GeoPackage: a modern, single-file format that can hold vector and raster data. It is a good default for new projects.",
      "GeoTIFF: the standard raster format, a TIFF image that carries its location and coordinate system.",
      "KML: used by Google Earth, convenient for sharing simple placemarks and routes.",
    ),
    p("If you have a choice, prefer GeoPackage for vector data and GeoTIFF for raster data. Both are open, reliable and supported almost everywhere."),
    h2("A first exercise to try"),
    ol(
      "Install QGIS and open a new project.",
      "Add a basemap, and zoom to your city or district.",
      "Download a free boundary layer, such as districts, from a government or open data portal, and add it.",
      "Open its properties and read the coordinate system. Change the project’s coordinate system, and watch the map change shape.",
      "Add a satellite image or an elevation raster for the same area, and check that it lines up with the boundaries.",
      "Use the measure tool in both a geographic and a projected system, and compare the results.",
    ),
    p("Twenty minutes of this will make the ideas in this article feel real."),
    h2("Frequently asked questions"),
    qa(
      ["Which software should I learn first?", "QGIS is the usual recommendation. It is free, widely used and well documented, and the skills transfer to other tools."],
      ["Do I need to learn Python for GIS?", "Not to begin. Learn Python when you need to repeat tasks or analyse large datasets, and you will find it much easier once the core concepts are familiar."],
      ["What is the difference between WGS 84 and Web Mercator?", "WGS 84 is a geographic system using latitude and longitude, used by GPS. Web Mercator is a projected system used by most online maps, which distorts area near the poles."],
      ["Why do my layers not line up?", "Almost always because their coordinate systems differ, or one has none defined. Check each layer’s system and reproject if needed."],
    ),
  ],

  "chunking-for-rag": [
    h2("A worked example: a leave policy"),
    p("Take a policy page with the heading “Annual leave”. It contains three paragraphs: the entitlement of 20 days, the rule that up to 5 unused days may be carried over until March, and the exception that carry-over is not allowed for staff on probation."),
    ul(
      "Poor chunking splits the page every 300 characters. One chunk ends with the carry-over rule, and the exception for probation starts the next one. A search about carry-over retrieves only the first, and the assistant says that everyone may carry over 5 days. That is wrong for new staff.",
      "Better chunking keeps the whole section together, with the heading “Annual leave” added to the front. The chunk contains the rule and its exception, and the assistant answers correctly.",
    ),
    p("Nothing about the model changed. Only the way the text was cut."),
    h2("Tables, PDFs and other awkward inputs"),
    ul(
      "Tables: keep each table with its title and column headings. Consider turning rows into short sentences, such as “Standard plan: 10 users, 20 dollars a month”.",
      "PDFs: text extraction can scramble columns, and merge headers and footers into the body. Check the extracted text by eye before indexing.",
      "Scans: run text recognition first, and check the quality, since errors spread into every later step.",
      "Slides: each slide is short, so combine neighbouring slides with their section title.",
      "Code and logs: split on functions or entries, not on characters.",
    ),
    h2("Frequently asked questions"),
    qa(
      ["What chunk size should I start with?", "Many teams start with about 200 to 500 words and 10 to 20 percent overlap, then adjust after measuring retrieval on their own questions."],
      ["Should chunk size be measured in words or tokens?", "Tokens match what models and embedding services actually count, so use them if your tools support it. Words are a good approximation for planning."],
      ["Do I need to re-chunk when I change the embedding model?", "You must re-embed everything. You do not have to change the chunk boundaries, but different models may prefer different sizes, so it is worth testing."],
      ["Can I use several chunk sizes at once?", "Yes. A common approach is to search small chunks for precision and then return the larger section they belong to, so the model sees more context."],
    ),
  ],
};
