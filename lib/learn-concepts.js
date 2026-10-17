// Learn > Concepts. Full-length explainers (about 1,200 to 1,700 words each).
// `seed: true` = drafted copy that still needs a subject-matter review before it is promoted.
// Reading time is calculated automatically (lib/readtime.js); do not add a `minutes` field.

import { p, h2, ul, ol, note } from "./blocks";

export const concepts = [
  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "geoai-in-plain-language",
    title: "GeoAI in plain language",
    excerpt: "What GeoAI is, what it can and cannot do, and how to start a first project without getting lost in jargon.",
    topic: "GeoAI",
    level: "Beginner",
    date: "2026-10-02",
    takeaways: [
      "GeoAI applies machine learning to data that has a location: imagery, maps, GPS traces and sensor readings.",
      "It is strongest at repetitive mapping tasks across large areas, where people cannot cover every location by hand.",
      "Results depend on image quality, good labels and local knowledge far more than on the choice of algorithm.",
      "The best first project is small, specific and tied to a decision someone has to make.",
    ],
    body: [
      p("Every day, satellites, drones, phones and sensors record enormous amounts of information about the places we live and work. Most of it is never looked at. No team of analysts can scroll through every image of a province, a coastline or a city. GeoAI exists to close that gap. It lets software do the first pass of looking, so that people can spend their time deciding what to do about what it finds."),
      p("This article explains GeoAI in plain language: what it is, where its data comes from, what it can do, where it goes wrong, and how an organisation can start without a large budget or a team of data scientists."),

      h2("What GeoAI means"),
      p("GeoAI is short for geospatial artificial intelligence. It is the use of machine learning on data that is tied to a location. That data might be a satellite photograph, a map of roads, a trail of GPS points or a reading from a sensor in a river. What makes the field distinct is that location matters. Two pixels that sit next to each other usually have something in common, and a model that understands this can make better predictions than one that treats every data point as unrelated."),
      p("Traditional geographic information systems, or GIS, are very good at storing, combining and displaying spatial data. A GIS analyst can overlay flood zones on a map of buildings and count how many fall inside. GeoAI adds a different ability: learning patterns from examples, and then applying them at a scale no analyst could match. The two are partners. GIS organises and presents the information. GeoAI helps create new information from raw data."),

      h2("Where the data comes from"),
      p("Most GeoAI projects start with one or more of these sources."),
      ul(
        "Optical satellite imagery. These are pictures taken in visible and near-infrared light, much like a camera. They show crops, buildings, water and forest, but they cannot see through clouds.",
        "Radar imagery. Radar satellites send their own signal and measure what bounces back. They work at night and through cloud, which makes them valuable for flood mapping and for monitoring in rainy regions.",
        "Drone and aerial photography. These give very fine detail over small areas, and you control when the images are taken.",
        "Vector maps. Roads, buildings, rivers and boundaries drawn as points, lines and polygons. They are often used as labels to teach a model, or as context to check its results.",
        "Sensor and GPS data. Weather stations, river gauges, vehicle traces and phone location data add information about what is happening, not only what the land looks like.",
      ),

      h2("What GeoAI can do"),
      p("Most real-world GeoAI work falls into a handful of task types."),
      ul(
        "Classification. Assign a label to every pixel or area: forest, cropland, water, built-up land. The result is a land cover map.",
        "Detection. Find and count individual objects, such as buildings, vehicles, ships or solar panels.",
        "Change detection. Compare two dates and flag what changed, for example new construction, a flooded field or cleared forest.",
        "Prediction. Combine many layers of data to estimate something that cannot be seen directly, such as likely crop yield or landslide risk.",
        "Enhancement. Improve the data itself, for instance sharpening low-resolution imagery or filling gaps caused by cloud.",
      ),

      h2("A worked example: watching crops across a province"),
      p("Imagine a provincial agriculture office that wants to know which districts are likely to have a poor harvest, early enough to plan support. Walking every field is impossible. Instead, the team collects free satellite images every few days through the growing season. A model, trained on examples from fields that were surveyed on the ground, learns what healthy and stressed crops look like in those images. Each week it produces a map showing where vegetation is lagging behind a normal year."),
      p("None of this replaces field officers. It tells them where to go first. The map turns a province-wide guess into a short list of districts worth visiting, and that is where GeoAI earns its keep: it narrows attention to where it matters."),

      h2("How a GeoAI project actually runs"),
      ol(
        "Start with the question. Write it as a decision: which fields need irrigation support this month? A vague goal such as “use AI on our satellite data” rarely produces anything useful.",
        "Choose the data. Check that imagery exists at a resolution and frequency that can answer the question for your area and season.",
        "Prepare labels. A model learns from examples, so someone must mark what is what in a sample of the data. This is often the slowest and most valuable step.",
        "Train and test. Build a model, then test it on areas it has never seen, and measure honestly how often it is right.",
        "Check against the real world. Visit a sample of places, or ask local experts whether the map matches what they know.",
        "Deliver in a form people use. A map in a dashboard, a monthly report or an alert is worth more than an accurate model that nobody opens.",
      ),

      h2("Where GeoAI goes wrong"),
      p("The failures are rarely about the algorithm. They are almost always about the data and the setup."),
      ul(
        "Clouds, haze and shadows hide the ground or change how it looks.",
        "Training labels are few, inconsistent or biased towards easy places, so the model is confident where it should not be.",
        "A model trained in one region or season is moved to another where the land looks different, and accuracy drops quietly.",
        "The image detail does not match the question. You cannot count houses in 10 metre pixels.",
        "Accuracy is measured on data too similar to the training data, which makes the score look better than the real performance.",
      ),
      note("A model that is 95 percent accurate on average can still be wrong in exactly the place you care about. Always ask where it fails, not only how often."),

      h2("Questions worth asking any GeoAI team"),
      ul(
        "Which decision will this improve, and who will use the result?",
        "What imagery will you use, at what resolution and how often?",
        "Who creates the labels, and how many do you need?",
        "How will you test it on places the model has not seen?",
        "What will happen when the model is wrong, and how will users know?",
        "Who will maintain it after launch?",
      ),

      h2("How to start"),
      p("Pick one question, one area and one season. Check that suitable imagery exists. Gather a small set of labelled examples with the help of someone who knows the ground. Build a simple model, test it honestly and show the result to the people who would use it. If it helps them, grow it. If it does not, you have spent weeks, not years, to find out."),
      p("GeoAI is not magic, and it does not need to be. At its best it is a patient assistant that reads every image so your experts can spend their attention where it counts."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "resolution-in-satellite-imagery",
    title: "Resolution in satellite imagery: GSD, revisit time and bands",
    excerpt: "The numbers that decide whether an image can answer your question, and how to choose between free and commercial data.",
    topic: "GeoAI",
    level: "Beginner",
    date: "2026-09-28",
    takeaways: [
      "Spatial resolution (GSD) is the size of one pixel on the ground, and it sets the smallest thing you can see.",
      "Revisit time is how often a satellite images the same place, and cloud cover reduces it in practice.",
      "Spectral bands decide what you can tell apart, such as healthy crops from stressed ones.",
      "Higher resolution is not always better: it costs more and covers less area.",
    ],
    body: [
      p("Before you order, download or analyse a single satellite image, check three things about it. They are cheap to check and expensive to ignore. Together they decide whether the data can answer your question at all."),
      p("People often ask for “the best resolution available”. That is the wrong question. The right one is: what is the smallest thing I need to see, how often do I need to see it, and what do I need to tell apart? This article walks through each of the three properties and then shows how to match them to a real question."),

      h2("Spatial resolution: how small a thing can you see?"),
      p("Spatial resolution is usually described by ground sample distance, or GSD. It is the distance on the ground between the centres of two neighbouring pixels. A GSD of 10 metres means that each pixel covers an area of about 10 by 10 metres. Anything much smaller than a pixel is blended into its surroundings."),
      ul(
        "30 metres: large fields, forests, lakes and the outline of cities. Free archives such as Landsat sit here.",
        "10 metres: fields, roads, large buildings and rivers. Sentinel-2, which is free, gives 10 metre pixels in its main bands.",
        "3 to 5 metres: small fields, groups of houses and narrow rivers. Commercial constellations offer this, often with frequent images.",
        "Around 50 centimetres: individual buildings, vehicles and trees. Commercial high-resolution satellites and aerial surveys reach this.",
        "A few centimetres: cracks, roof tiles and crop rows. Drones are the usual source.",
      ),
      note("Rule of thumb: the smallest thing you need to detect should cover at least a few pixels. To map a house reliably, you want pixels well under a metre across."),
      p("Finer resolution comes with trade-offs. A high-resolution image covers a smaller area, the file is far larger, processing takes longer and, for commercial data, the price rises sharply. Many projects succeed with free 10 metre data because the thing they care about, such as a field, is much bigger than a pixel."),

      h2("Revisit time: how often can you look?"),
      p("Revisit time, sometimes called temporal resolution, is how often a satellite images the same place. It matters whenever your question involves change. Following a crop through a season needs images every week or two. Mapping a road network, which changes slowly, may need only one clear image a year."),
      p("The number in the brochure is not the number you get. Optical satellites cannot see through cloud, so in a monsoon climate a nominal five-day revisit may deliver only a handful of usable images in a whole season. Plan for far fewer clear scenes than the schedule suggests, and consider radar data when cloud is a constant problem, since radar sees through it."),
      ul(
        "Sentinel-2 passes over roughly every five days for most places, and is free.",
        "Landsat images each place about every one to two weeks at coarser 30 metre detail, with a very long archive.",
        "Commercial small-satellite constellations can image most of the world almost daily, at a few metres.",
        "Tasked high-resolution satellites image exactly where and when you order, at a price, and with no guarantee of clear weather.",
      ),

      h2("Spectral bands: what can you tell apart?"),
      p("A satellite sensor records light in separate bands, each covering a range of wavelengths. A normal photograph has three: red, green and blue. Many satellites add near-infrared, short-wave infrared and several narrow bands in between. Different materials reflect these wavelengths differently, and that difference is what lets software tell them apart."),
      ul(
        "Red, green and blue (visible): what the human eye sees. Good for context and for presenting results.",
        "Near-infrared: healthy leaves reflect a great deal of it. Together with red, it powers vegetation indices such as NDVI.",
        "Red edge: narrow bands between red and near-infrared that are sensitive to leaf chlorophyll and crop stress.",
        "Short-wave infrared: sensitive to moisture in soil and plants, and useful for burn scars and for telling snow from cloud.",
        "Thermal infrared: measures surface temperature, used for heat islands and irrigation studies.",
      ),
      p("If your question is about crop health, bands beyond red, green and blue matter more than extra sharpness. A blurry image with the right bands can answer it. A beautiful true-colour image often cannot."),

      h2("Two more properties worth knowing"),
      ul(
        "Swath and footprint: how wide a strip the satellite sees, which decides how much area one scene covers.",
        "Radiometric resolution: how finely brightness is recorded, usually in bits. More bits capture subtle differences, such as shades of shallow water or thin haze.",
      ),

      h2("Free versus commercial imagery"),
      p("Free programmes such as Sentinel and Landsat are excellent for regional monitoring, agriculture, forests and water. They are well documented, consistent over time and cost nothing, which makes them the right starting point for most projects. Commercial imagery earns its price when you need fine detail, such as counting buildings or inspecting infrastructure, or very frequent images of a small area."),
      p("A sensible path is to prototype with free data. If the question truly needs finer detail, you can then buy commercial imagery for the one area where it counts, with a much clearer idea of what to order."),

      h2("Matching imagery to a question"),
      ul(
        "Is this field growing normally this month? Needs frequent images and near-infrared. 10 metre free data is usually enough.",
        "Where did the flood spread last night? Needs a quick revisit and ideally radar to see through cloud.",
        "How many new buildings appeared in this town this year? Needs sub-metre detail on two dates.",
        "Has this forest shrunk over twenty years? Needs a long, consistent archive. Landsat is built for it.",
      ),

      h2("Common mistakes"),
      ul(
        "Buying high resolution when a free source would answer the question.",
        "Ignoring cloud, and ending up with three usable images instead of thirty.",
        "Comparing images from different sensors or seasons as if they were the same.",
        "Choosing imagery before writing down the question.",
      ),
      p("Write the question first, then the smallest feature, the needed frequency and the bands that matter. With those four answers, choosing imagery becomes simple."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "rag-explained",
    title: "RAG explained: how AI answers from your own documents",
    excerpt: "Retrieval-augmented generation in plain language: how it works, why it reduces made-up answers, and where it can still fail.",
    topic: "RAG & Agents",
    level: "Beginner",
    date: "2026-09-22",
    takeaways: [
      "RAG retrieves relevant passages first, then asks the language model to answer using only those passages.",
      "Good retrieval matters more than a bigger model, so most of the work is in how documents are prepared and searched.",
      "Always show sources, so people can verify the answer.",
      "RAG reduces wrong answers but does not remove them. Test it and keep a human in the loop for important decisions.",
    ],
    body: [
      p("A language model such as the ones behind modern chat assistants has read a vast amount of text, but it has never read your documents. It does not know your refund policy, your project reports or last month’s meeting notes. If you ask it about them, it may give a confident answer that is simply invented. This is often called hallucination, and it is the main reason organisations hesitate to rely on AI for real work."),
      p("Retrieval-augmented generation, or RAG, is the most widely used way to fix this. Instead of hoping the model remembers the right facts, you hand it the relevant passages at the moment of the question and ask it to answer from those."),

      h2("The idea in one picture"),
      p("Think of an open-book exam. A student who relies on memory may guess. A student who is allowed to look things up in the right chapter, and then writes the answer in their own words, is far more accurate. RAG turns the AI into the second student. The “retrieval” step finds the right chapter, and the “generation” step writes the answer."),

      h2("The five steps"),
      ol(
        "Ingest. Gather the documents you want the assistant to know: policies, manuals, reports, web pages, tickets. Clean them up and note useful details such as title, date and owner.",
        "Chunk. Split each document into passages small enough to be specific, often a few paragraphs, with a little overlap so ideas are not cut in half.",
        "Embed and index. Convert each passage into a list of numbers that captures its meaning, called an embedding, and store them in a searchable index.",
        "Retrieve. When someone asks a question, convert it the same way and fetch the passages whose meaning is closest.",
        "Generate. Give those passages to the language model with clear instructions: answer only from them, say when the answer is not there, and cite the sources.",
      ),

      h2("A concrete example"),
      p("A company loads its HR policies into a RAG assistant. An employee asks, “How many days of leave can I carry over into next year?” The system finds the two paragraphs of the leave policy that mention carry-over, gives them to the model, and the model replies with the rule and a link to the policy page. If the policy does not say, a well-built assistant replies that it could not find the answer and suggests contacting HR, instead of making one up."),

      h2("Why RAG is popular"),
      ul(
        "Answers are grounded in your own, up-to-date information.",
        "You can show where an answer came from, which builds trust and makes errors easy to spot.",
        "Updating knowledge means updating documents, not retraining a model.",
        "You can control who sees what, by limiting retrieval to documents each user is allowed to read.",
      ),

      h2("RAG or fine-tuning?"),
      p("Fine-tuning changes the model itself, by training it further on examples. It is good for teaching a style, a format or a specialised skill. It is poor at teaching facts that change, and it cannot show its sources. RAG is better when answers must reflect current documents and be traceable. Many teams start with RAG, because it is faster to build and easier to check, and add fine-tuning only if a clear need appears."),

      h2("What makes a RAG system good"),
      ul(
        "Document quality. Out-of-date, duplicated or contradictory files produce confusing answers. Cleaning the sources is often the biggest improvement.",
        "Sensible chunking. Passages that are too long blur several ideas. Passages that are too short lose context.",
        "Useful metadata. Dates, document types and owners let you filter, for example to prefer the latest version.",
        "Hybrid search. Combining meaning-based search with keyword search finds exact codes and names that meaning-based search can miss.",
        "Re-ranking. A second pass that reorders the retrieved passages by relevance often improves accuracy noticeably.",
        "Clear instructions. The prompt should say what to do when the answer is missing, and require citations.",
      ),

      h2("Where it still fails"),
      ul(
        "The right passage is never retrieved, so the model answers from weak or irrelevant text.",
        "The answer is spread across several documents and the system fetches only one.",
        "The model ignores the instructions and adds details that are not in the sources.",
        "Documents contain instructions that try to steer the model, which is a security risk when you index content you do not control.",
        "No one tests it, so quality is judged by a few good demos.",
      ),
      note("Treat a RAG assistant like a new employee. It is useful from day one, but you check its work until it has earned your trust, and you check it again after every change."),

      h2("Do you need RAG?"),
      p("RAG fits when people repeatedly ask questions whose answers sit in a body of documents: policies, product manuals, research reports, case files. It is a poor fit when the answer needs live data from a database, in which case a tool or query is better, or when the question needs deep reasoning across many facts that no single passage contains."),

      h2("Getting started"),
      ul(
        "Pick one body of documents and one group of users.",
        "Collect 30 to 50 real questions with known answers.",
        "Build the simplest pipeline, then measure it against those questions.",
        "Improve retrieval before changing models.",
        "Add access control and logging before opening it to more people.",
      ),
      p("Done well, RAG gives you an assistant that knows your organisation, shows its sources and admits what it does not know. That combination is what makes it safe enough to use."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "ai-agents-explained",
    title: "AI agents explained: from answering to acting",
    excerpt: "What makes an AI agent different from a chatbot, how agents are built, and how to keep them safe and useful.",
    topic: "RAG & Agents",
    level: "Intermediate",
    date: "2026-09-18",
    takeaways: [
      "An agent plans and carries out multi-step tasks using tools. A chatbot only replies.",
      "Autonomy is a dial, not a switch: start with suggestions, then approvals, then limited actions.",
      "Least privilege, step limits, approval points and logs are what make agents safe to run.",
      "If the steps are always the same, plain automation is usually better than an agent.",
    ],
    body: [
      p("A chatbot answers a question and waits for the next one. An AI agent is given a goal and works towards it. It decides which steps to take, uses tools such as search, databases or email to take them, checks what happened, and carries on until the job is done or it needs help. That shift from answering to acting is what makes agents both powerful and risky."),
      p("This article explains how agents work, where they help, and the safeguards that keep them useful. It assumes no background in AI."),

      h2("Chatbot or agent?"),
      p("Ask a chatbot, “What is the status of order 4821?” and it can only repeat what it knows, which is nothing about your order. Give an agent the same question and access to the order system, and it can look the order up, notice the parcel is delayed, check the refund rules, draft an apology and offer the customer a choice. The difference is access to tools and the freedom to chain several steps together."),

      h2("The parts of an agent"),
      ul(
        "A language model that reasons about the goal and decides the next step.",
        "Tools it is allowed to call, each with clear inputs and limits: search, a database query, a calculator, a ticketing system, a calendar.",
        "Memory and context: the current task state, the steps so far and any relevant documents.",
        "A loop that repeats: think, act, observe the result, think again, until a stopping condition is met.",
        "Guardrails: permissions, spending and time limits, and points where a human must approve.",
      ),

      h2("How one run looks"),
      p("Consider an agent that triages incoming support emails."),
      ol(
        "It reads a new email and works out what the customer wants.",
        "It looks up the customer’s account and recent orders with a lookup tool.",
        "It searches the knowledge base for the relevant policy.",
        "It drafts a reply, and decides whether it is confident enough to send.",
        "If the case is simple, it queues the reply for approval. If it involves a complaint or a large refund, it hands the case to a person with a short summary.",
      ),
      p("Notice that the last step is not a failure. Knowing when to stop and ask for help is a core part of a well-built agent."),

      h2("Levels of autonomy"),
      p("It helps to think of autonomy as a dial. Most organisations should turn it up slowly."),
      ul(
        "Level 1, suggest: the agent proposes actions and a person does them.",
        "Level 2, act with approval: the agent prepares the action, and a person approves each one.",
        "Level 3, act within limits: the agent acts alone on low-risk, reversible tasks, and escalates anything outside its limits.",
        "Level 4, broad autonomy: the agent runs long tasks on its own. This level is rare and demands strong monitoring.",
      ),

      h2("What can go wrong"),
      ul(
        "Wrong actions. A mistaken reading of the goal can lead to a wrong email, a deleted record or a bad purchase.",
        "Prompt injection. Text in an email or web page can try to hijack the agent’s instructions, for example by telling it to forward private data.",
        "Runaway loops. An agent that keeps retrying can burn time and money.",
        "Data exposure. An agent with broad access might reveal information to someone who should not see it.",
        "Overconfidence. Agents can sound sure of themselves when they are wrong.",
      ),

      h2("Design principles that keep agents safe"),
      ul(
        "Least privilege. Give each agent only the tools and data the task needs, and make most tools read-only.",
        "Approvals for anything irreversible, such as sending money, deleting data or contacting customers.",
        "Hard limits on steps, time and spend, so a loop ends by itself.",
        "Treat all outside text as untrusted. Instructions found in a document or email must never override your own rules.",
        "Log every step: what the agent saw, decided and did. Logs make errors traceable and improvement possible.",
        "Test before trusting. Run the agent on past cases with known outcomes and measure how often it gets them right.",
      ),
      note("Start with a task a new employee could do in the first week, where a mistake is easy to catch and undo."),

      h2("Agent or plain automation?"),
      p("If the steps never change, a regular workflow or script is cheaper, faster and easier to test than an agent. Reach for an agent when the path varies: when the input is messy text, when the next step depends on what was found, or when many possible tools could apply. Many of the best systems combine both, with fixed workflow steps for the predictable parts and an agent for the judgement calls."),

      h2("Good first use cases"),
      ul(
        "Triage and routing of incoming requests, with a human sending the reply.",
        "Drafting reports by pulling figures from several systems.",
        "Checking records against a set of rules and flagging exceptions.",
        "Research assistants that gather and summarise sources, with links to each one.",
      ),

      h2("How to measure an agent"),
      ul(
        "Task success rate on a fixed set of test cases.",
        "How often it escalates, and whether it escalates the right cases.",
        "Time saved per task, compared with doing it by hand.",
        "Errors that reached a customer, which should trend towards zero.",
        "Cost per completed task.",
      ),
      p("Agents are a real step forward, but their value comes from careful boundaries as much as from clever models. Start small, keep a person in the loop for anything that matters, and widen the agent’s freedom only as the evidence earns it."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "digital-twins-explained",
    title: "Digital twins, explained: a living model of a real place",
    excerpt: "What a digital twin is, how it differs from a 3D model, what goes into one and when it is worth building.",
    topic: "3D & VR",
    level: "Beginner",
    date: "2026-10-16",
    takeaways: [
      "A digital twin is a 3D model connected to real data, so it changes when the real place changes.",
      "A 3D model shows what a place looks like. A twin also shows what is happening there.",
      "Twins mature in stages, from a simple visual copy to one that predicts and recommends.",
      "Start with one decision the twin should improve, and budget for keeping its data fresh.",
    ],
    body: [
      p("A digital twin is a virtual copy of a real place or asset that stays connected to the original. Sensors, surveys and records feed the copy, so it shows how things are now, not just how they looked on the day it was built. A building manager can see which rooms are empty. A city planner can see where water would flow in a storm. A museum can see the condition of a fragile wall over time."),
      p("The term is used loosely, and often applied to things that are really just 3D models. This article separates the two, explains what goes into a twin, and helps you decide whether one is worth building."),

      h2("Twin or just a 3D model?"),
      ul(
        "A 3D model captures shape and appearance. It is built once, and it is excellent for presentations, planning discussions and virtual tours.",
        "A digital twin adds data that keeps changing, such as temperature, occupancy, water level, equipment condition or maintenance history, and it uses that data to answer questions.",
      ),
      p("The test is simple. Ask whether the virtual copy would still be correct a month from now without anyone touching it. If yes, it is a model. If it updates itself from the real world, it is a twin."),

      h2("What goes into a twin"),
      ol(
        "A 3D base. It is built from laser scans, drone or ground photographs, or design files. The level of detail should match the decisions it supports.",
        "Data feeds. Sensors, GIS layers, asset registers, maintenance logs or manual surveys connect the model to what is happening.",
        "A way to see and use it. A web viewer, a dashboard, a map or a VR headset, depending on who needs it.",
        "Rules and analysis. Alerts, simulations and forecasts that turn the data into advice.",
        "Care and ownership. Someone responsible for keeping the model and its data accurate.",
      ),

      h2("Stages of maturity"),
      p("A twin does not need to be sophisticated on day one. Many successful projects grow through four stages."),
      ul(
        "Descriptive: an accurate 3D copy that people can explore and measure.",
        "Monitoring: live or regularly updated data is shown on the model, for example room temperatures or sensor alerts.",
        "Predictive: the twin forecasts what will happen, such as when equipment might fail or how a flood could spread.",
        "Prescriptive: it recommends or triggers actions, for instance rescheduling maintenance or adjusting ventilation.",
      ),
      p("Climbing one stage at a time keeps cost under control and lets you check that each stage is actually used before building the next."),

      h2("Where twins pay off"),
      ul(
        "Campuses and buildings: plan maintenance, manage space and find faults faster.",
        "Heritage sites: record condition precisely, track change over years and give researchers remote access.",
        "Cities and utilities: test flood, growth or traffic scenarios before spending on construction.",
        "Factories and plants: train staff and trial layout changes without stopping production.",
        "Agriculture and forestry: combine terrain, crop and weather data to guide field decisions.",
      ),

      h2("What it takes to build one"),
      p("Capturing the place is only the first step. Many projects begin with drone photography or laser scanning, which produce dense 3D data. That data is then cleaned, simplified and turned into a model that loads quickly. The model is then linked to data sources and to a viewer that fits the people who will use it. A model that takes two minutes to open will not be opened."),
      p("The bigger cost over time is keeping it current. Buildings change, sensors fail and records fall behind. Plan who updates what, how often, and what happens when data is missing."),

      h2("Risks to plan for"),
      ul(
        "Stale data. A twin nobody updates quickly becomes an expensive 3D model.",
        "Security. Connecting sensors and systems to a model creates new routes for attack, so access control and monitoring matter.",
        "Lock-in. Proprietary formats can trap your data. Prefer open formats and exportable data.",
        "Over-building. Detail beyond what decisions need adds cost without adding value.",
      ),

      h2("Questions to answer before you build"),
      ol(
        "Which decision will this improve, and how will we know it did?",
        "Who will use it every day, and what do they need to see?",
        "Where will the data come from, and who is responsible for it?",
        "How often must it update to stay useful?",
        "What will it cost to run each year, not only to build?",
      ),
      note("Start with one place and one decision. A small twin that people use beats a city-scale one that nobody opens."),
      p("Digital twins are not a technology to adopt for its own sake. They are a way of giving people a clear, current picture of a real place, so that they can make better decisions. If that picture is worth the effort of keeping it current, a twin is worth building."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "vr-ar-mixed-reality-explained",
    title: "VR, AR and mixed reality: which one do you need?",
    excerpt: "A simple way to choose between immersive technologies, based on where your users are and what they need to do.",
    topic: "3D & VR",
    level: "Beginner",
    date: "2026-10-15",
    takeaways: [
      "VR replaces what you see. AR adds to it. Mixed reality adds digital objects that react to the real space.",
      "Choose by where the user is and what they must do, not by what looks most impressive.",
      "Many goals are met with a 3D tour in the web browser, with no headset or app at all.",
      "Plan for hardware, comfort, content updates and measurement, not only for the first build.",
    ],
    body: [
      p("Virtual reality, augmented reality and mixed reality are often lumped together as “immersive technology”. They are different tools for different jobs, and picking the wrong one is the most common and most costly mistake in this field. A headset experience built for a problem that a web page would solve wastes budget. A web page built for a problem that needs full immersion fails to convince anyone."),
      p("This article explains the three clearly, shows how to choose between them, and covers the practical issues that decide whether a project succeeds."),

      h2("The three in plain terms"),
      ul(
        "Virtual reality (VR). You wear a headset, and your whole view is replaced by a digital world. You can look around and, with controllers or hand tracking, interact with it.",
        "Augmented reality (AR). Digital information is layered on top of the real world, usually through a phone or tablet camera, or through smart glasses. You still see your real surroundings.",
        "Mixed reality (MR). Digital objects are anchored in your real space and respond to it. A virtual screen stays on your wall, or a virtual machine sits on your real floor and is hidden behind a real table.",
      ),
      p("A useful shortcut: VR takes you somewhere else, AR brings information to you, and MR makes digital things behave as if they were really in the room."),

      h2("How to choose"),
      p("Start with the user and the task, not the device."),
      ul(
        "Training for work that is dangerous, rare or expensive to stage, such as emergency drills, equipment handling or safety procedures: VR. Learners can fail safely and repeat the exercise.",
        "Showing a building, site or product at full scale to people who cannot be there: VR, or a 3D tour in the browser if the audience is wide.",
        "Guiding someone through a task while their hands are busy, such as repair steps overlaid on equipment: AR or MR.",
        "Helping a visitor understand a place, such as a heritage site with reconstructed buildings shown on the real ruins: AR on a phone.",
        "Marketing that people open from a link or a QR code: web-based 3D or phone AR, because anything that needs an app download loses most of its audience.",
      ),

      h2("The browser is often enough"),
      p("Modern browsers can show detailed, interactive 3D scenes, including photorealistic captures of real places, with nothing to install. For many goals, such as letting a prospective student walk through a campus or letting a buyer look around a property, that is enough. It reaches anyone with a phone or laptop, costs less to run than a headset programme, and is easy to share. Add a headset mode only if full immersion changes the outcome."),

      h2("How an experience is made"),
      ol(
        "Capture. The real place is scanned with a laser scanner, photographed from a drone or the ground, or modelled from plans.",
        "Process. The raw data is cleaned and turned into a 3D model with textures.",
        "Optimise. The model is simplified so it runs smoothly on the target device. Headsets and phones have limited power.",
        "Build the experience. Navigation, information points, interactions and audio are added.",
        "Publish and maintain. The experience is released on the web or to devices, and updated when the real place changes.",
      ),

      h2("What to plan for"),
      ul(
        "Hardware. Headsets need to be bought, charged, cleaned and managed. Standalone headsets are easiest because they need no computer.",
        "Comfort. Some people feel motion sickness in VR. Keep early sessions short, avoid artificial movement that the body does not feel, and test with first-time users.",
        "Accessibility. Offer a non-headset alternative for people who cannot or prefer not to use one.",
        "Content upkeep. Real places change. Decide who will update the experience and how.",
        "Support. First-time users need a guide or clear on-screen help.",
      ),

      h2("Measuring success"),
      ul(
        "Training: test scores, time to competence, and incidents before and after.",
        "Sales and marketing: enquiries, bookings or enrolments that followed a visit.",
        "Planning: number of design changes made earlier because stakeholders could see the space.",
        "Reach: how many people opened it, and how long they stayed.",
      ),

      h2("Common mistakes"),
      ul(
        "Starting with the device and then searching for a problem.",
        "Building a spectacular demo with no plan for use after launch.",
        "Making the experience too long. Short, focused sessions work best.",
        "Ignoring people who cannot use a headset.",
      ),
      note("Begin with the simplest option that meets the goal. If a browser-based 3D tour achieves it, you do not need a headset. If the learning depends on feeling present in a risky situation, VR may be the only way."),
      p("Immersive technology works best when it solves a clear problem for a specific group of people. Define the problem first, then let the problem choose the tool."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "embeddings-explained",
    title: "Embeddings in plain language: how AI measures meaning",
    excerpt: "The idea behind modern AI search: turning text into numbers so that similar meanings sit close together.",
    topic: "RAG & Agents",
    level: "Beginner",
    date: "2026-10-14",
    takeaways: [
      "An embedding turns text into a list of numbers that captures its meaning.",
      "Similar meanings produce nearby numbers, so search works on ideas, not just matching words.",
      "Embeddings power AI search, recommendations, clustering and duplicate detection.",
      "Test embedding models and chunk sizes on your own documents before you commit.",
    ],
    body: [
      p("For decades, searching meant matching words. Type “password reset” and the search engine found pages containing those words. Miss the exact phrase, and you missed the page. Embeddings changed that. They let software compare the meaning of two pieces of text, so a search for “forgot my login” can find an article titled “Change your credentials”, even though they share almost no words."),
      p("Embeddings are the quiet engine behind AI assistants that find the right passage in your documents, recommendation systems and tools that group similar items. This article explains the idea without any mathematics."),

      h2("A map of meaning"),
      p("Picture a huge map where every sentence has a position. Sentences about the same idea land close together, and unrelated ones land far apart. “How do I cancel my subscription?” sits near “Steps to end your plan”, and a long way from “Our offices are closed on public holidays”."),
      p("An embedding is simply the position of a piece of text on that map, written as a list of numbers. A real map has two numbers, latitude and longitude. The map of meaning has hundreds or thousands of numbers, because meaning has many more dimensions than a flat surface. The principle is the same: nearby positions mean related content."),

      h2("How the numbers are made"),
      p("An embedding model is a neural network trained on enormous amounts of text. During training it learns to place texts that are used in similar ways near each other. Once trained, you give it a sentence and it returns the list of numbers. You do not have to understand the individual numbers. What matters is how close two lists are to each other."),
      p("Closeness is measured with a simple calculation, most often cosine similarity, which gives a score between roughly minus one and one. A score near one means very similar meaning. A score near zero means unrelated."),

      h2("Why this beats keyword search"),
      ul(
        "It understands synonyms and rephrasing: “car” and “automobile”, “fix” and “repair”.",
        "It works across wording styles, so a customer’s casual question finds a formal policy.",
        "Many models work across languages, so a question in one language can find a document in another.",
        "It ranks by relevance of meaning rather than by how often a word appears.",
      ),
      p("It is not perfect. For exact things, such as a part number, a person’s name or a legal clause number, keyword search is often better. That is why strong systems combine both."),

      h2("How embeddings are used in RAG"),
      p("In a retrieval-augmented generation (RAG) system, every chunk of your documents is turned into an embedding and stored in a special database built for finding nearby points quickly, called a vector database or vector index. When someone asks a question, the question is embedded in the same way, and the system fetches the chunks that sit closest to it. Those chunks are then given to a language model as source material for its answer."),

      h2("Other uses"),
      ul(
        "Recommendations: suggest articles, products or courses similar to ones a person liked.",
        "Clustering: group thousands of survey responses or support tickets by theme without reading each one.",
        "Duplicate detection: spot near-identical records or articles.",
        "Classification: label text by comparing it with examples of each category.",
        "Anomaly spotting: find items that sit far from everything else.",
      ),

      h2("Choosing and using embeddings well"),
      ul(
        "Chunk size matters. A long passage blurs several ideas into one position, so split documents sensibly, often into a few paragraphs.",
        "Match the model to your content. A general model may handle specialist vocabulary or mixed languages poorly. Test before you commit.",
        "Be consistent. Questions and documents must be embedded with the same model.",
        "Plan for change. If you switch models, you must re-embed everything, so keep the original text.",
        "Mind privacy. If you send text to an outside service to be embedded, treat it as sharing that text.",
      ),

      h2("A small test worth doing"),
      p("Before choosing a model, build a small test from your own material. Write 30 to 50 real questions, and for each one, note which passage should be found. Run each candidate model and count how often the right passage appears in the top few results. This takes an afternoon, and it tells you more than any public leaderboard."),
      note("Do not choose an embedding model from a ranking alone. The best model on a public benchmark may not be the best on your documents."),

      h2("What embeddings cannot do"),
      p("Embeddings capture similarity, not truth. A passage can be very close in meaning to a question and still be out of date or wrong. They also have no sense of who is allowed to see what, so access control must be added around them. Treat embeddings as a powerful way to find relevant text, and keep your checks on accuracy, freshness and permission in place."),
      p("Once you see embeddings as a map of meaning, a great deal of modern AI becomes easier to understand. They are the reason an assistant can find what you meant, not only what you typed."),
    ],
  },
];
