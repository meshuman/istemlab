// Extra sections for the Tutorials, Guides and Experiences (worked examples, practical detail, FAQs).
// Inserted before each article's closing paragraph by lib/extras.js.

import { p, h2, ul, ol, code, note, qa } from "./blocks";

export const otherExtras = {
  /* ------------------------------ Tutorials ------------------------------ */
  "ndvi-from-sentinel-2": [
    h2("Going further: an NDVI time series"),
    p("A single date tells you how a field looks today. A series of dates tells you how it is behaving, which is far more useful for judging crop health. The loop below computes the average NDVI of a scene for every date in a folder. It assumes files named like 20260612_B04.tif and 20260612_B08.tif."),
    code(
      "python",
      "import glob\nimport numpy as np\nimport rasterio\n\nmeans = {}\nfor red_path in sorted(glob.glob(\"scenes/*_B04.tif\")):\n    date = red_path.split(\"/\")[-1][:8]\n    nir_path = red_path.replace(\"_B04\", \"_B08\")\n    with rasterio.open(red_path) as r, rasterio.open(nir_path) as n:\n        red = r.read(1).astype(\"float32\")\n        nir = n.read(1).astype(\"float32\")\n    ndvi = (nir - red) / (nir + red + 1e-6)\n    means[date] = float(np.nanmean(ndvi))\n\nfor date, value in means.items():\n    print(date, round(value, 3))"
    ),
    p("Plot these values against the dates and you have a growth curve. In a healthy crop, NDVI rises through the early season, peaks and then falls at ripening and harvest. A field whose curve lags behind its neighbours is worth a visit. Remember to apply the cloud mask from step 3 to each date, or one cloudy scene will pull a dip into the line."),
    h2("Where NDVI falls short"),
    ul(
      "Saturation: in dense, leafy canopies, NDVI levels off and stops distinguishing between dense and very dense vegetation. Indices such as EVI are designed to keep their sensitivity there.",
      "Soil background: in sparse crops, bright or dark soil shifts the values. SAVI includes a soil adjustment for this.",
      "Chlorophyll sensitivity: red-edge indices, such as NDRE, respond earlier to nitrogen stress in many crops.",
      "Season and species: the same value means different things for rice, maize and forest, so compare like with like.",
    ),
    h2("Frequently asked questions"),
    qa(
      ["Why is my NDVI always between 0 and 0.3?", "Check that you used red and near-infrared bands, B04 and B08, and not two visible bands. A mostly urban or bare scene will also score low."],
      ["Do I need Level-2A data?", "It is strongly recommended. Level-2A is corrected for the atmosphere, so values are comparable between dates. Level-1C values vary with haze and sun angle."],
      ["Can I compute NDVI in QGIS instead?", "Yes. The raster calculator can apply the same formula, and it is a good way to check your Python result."],
      ["Why does the SCL band have a different size?", "Sentinel-2 delivers different bands at 10, 20 and 60 metres. The scene classification is at 20 metres, so it must be resampled to 10 metres, using nearest neighbour to keep the class codes intact."],
    ),
  ],

  "minimal-rag-pipeline": [
    h2("Putting it together: a tiny command-line assistant"),
    p("With the four functions in place, you can wrap them in a loop and talk to your documents from a terminal. This is a useful way to explore weak spots, because you can try questions quickly and see exactly which passages were retrieved."),
    code(
      "python",
      "def show_sources(question):\n    for rank, (i, score) in enumerate(retrieve(question), start=1):\n        print(f\"{rank}. {sources[i]}  (score {score:.2f})\")\n        print(\"   \" + chunks[i][:150].replace(\"\\n\", \" \") + \"...\")\n\nwhile True:\n    q = input(\"\\nAsk a question (or press Enter to quit): \").strip()\n    if not q:\n        break\n    show_sources(q)\n    print(\"\\n\" + answer(q))"
    ),
    p("Print the sources before the answer, as above. If the answer looks wrong, the sources will usually show you why: either the right passage is missing, or it is there and the model ignored it. Those two failures have very different fixes."),
    h2("Costs and speed"),
    ul(
      "Embedding the documents is a one-off cost, repeated only when documents change. Save the vectors to disk and load them next time.",
      "Each question costs one embedding call and one language model call. Caching answers to common questions reduces both.",
      "With a few thousand chunks, the numpy search takes milliseconds. When you have hundreds of thousands, move to a vector index.",
      "The language model call dominates the response time. Streaming the reply makes it feel faster.",
    ),
    h2("Frequently asked questions"),
    qa(
      ["Do I need LangChain or a similar framework?", "No. A framework can save time once you know what you need, and its tools can help with tracing and evaluation, but the core of RAG is the small amount of code in this tutorial."],
      ["Which embedding model should I use?", "Start with a small, well-known model, and test it on your questions. Switch only if the hit rate shows a problem. Remember that changing models means re-embedding everything."],
      ["How do I handle PDFs?", "Extract the text first, with a PDF library, and check the result by eye. Scanned PDFs need text recognition. Tables and multi-column layouts often need extra care."],
      ["How do I stop the model from making things up?", "Retrieve good passages, instruct it to answer only from them, require citations and test on questions with no answer. Evaluation is covered in the guide on evaluating a RAG assistant."],
    ),
  ],

  "web-map-with-maplibre": [
    h2("Adding a layer toggle"),
    p("Once a map has more than one layer, people need a way to switch them on and off. A simple checkbox is enough. Add this to your page, and a few lines to map.js."),
    code("html", "<label style=\"position:absolute;top:12px;left:12px;background:#fff;padding:6px 10px\">\n  <input type=\"checkbox\" id=\"toggle\" checked /> Show areas\n</label>"),
    code(
      "javascript",
      "document.getElementById(\"toggle\").addEventListener(\"change\", (e) => {\n  map.setLayoutProperty(\"areas-fill\", \"visibility\", e.target.checked ? \"visible\" : \"none\");\n  map.setLayoutProperty(\"areas-outline\", \"visibility\", e.target.checked ? \"visible\" : \"none\");\n});"
    ),
    p("The same pattern works for any layer. For many layers, build the checkboxes from a list, and keep their state in sync with the map."),
    h2("Choosing a data and hosting strategy"),
    ul(
      "Small data, up to a few thousand shapes: a GeoJSON file served as a static asset, as in this tutorial.",
      "Medium data: simplify the geometry and reduce the decimal places in the coordinates, which can shrink files by half or more.",
      "Large data: convert to vector tiles with a tool such as tippecanoe, and serve them from static storage. Only the tiles in view are loaded.",
      "Live data: serve it from an API, and refresh the source with a timer or a stream.",
      "Hosting: a static host or a content delivery network is usually enough, and inexpensive.",
    ),
    h2("Frequently asked questions"),
    qa(
      ["Is MapLibre the same as Mapbox?", "MapLibre began as an open-source fork of an earlier version of Mapbox GL JS, and is developed by a community. It has no token requirement, and works with many tile providers."],
      ["Can I use MapLibre with React?", "Yes. You create the map inside an effect and clean it up when the component is removed. Wrapper libraries exist, but the core code is the same as here."],
      ["How do I show satellite imagery as the background?", "Use a style that includes a raster imagery source from a provider whose terms allow your use, and include the credit they require."],
      ["Why is my map slow with a large file?", "Because the browser has to download and process every shape. Simplify the data, or switch to vector tiles."],
    ),
  ],

  "land-cover-random-forest": [
    h2("Handling imbalance and noisy labels"),
    p("Real label sets are rarely tidy. Some classes have thousands of examples, and others have a handful. Some labels are simply wrong. Both problems quietly cap your accuracy."),
    ul(
      "Use class weights, as we did, or collect more examples of the rare class. Do not simply duplicate the few you have.",
      "Review a sample of labels by eye against the imagery. Even five percent of wrong labels can mislead a model.",
      "Merge classes that humans cannot reliably separate. Two classes that the labellers confuse will also confuse the model.",
      "Report results per class, so a poor result in a small class is not hidden by a good average.",
    ),
    h2("Where deep learning fits"),
    p("A random forest sees each pixel on its own. It knows nothing about what is next to it, so it cannot tell a rooftop from a parking lot by their shape. Convolutional neural networks look at patches of pixels, and learn shapes and textures, which is why they excel at detecting buildings, roads and fine boundaries. They need more labelled data, more computing power and more care in testing."),
    p("A sensible path is to start with a random forest, which gives you a baseline and teaches you about your data, then move to deep learning if the baseline is not good enough and you have the labels to support it."),
    h2("Frequently asked questions"),
    qa(
      ["How many labelled pixels do I need?", "Start with a few hundred per class, spread across the whole area. Add more where the confusion matrix shows the model struggling."],
      ["Should I scale my bands?", "Random forests do not need it, because they split on thresholds. Models such as support vector machines and neural networks do."],
      ["Why does my map look noisy, with isolated pixels?", "Per-pixel classification ignores neighbours. A majority filter, or an object-based approach that classifies groups of similar pixels, smooths the result."],
      ["Can I use the same model on another date or place?", "Only after testing it there. Differences in season, sensor and land can reduce accuracy sharply. Retrain, or at least add labels from the new conditions."],
    ),
  ],

  /* ------------------------------- Guides -------------------------------- */
  "ai-readiness-checklist": [
    h2("A worked example: a 30-person nonprofit"),
    p("A nonprofit that runs health programmes wants to try AI. A small group completes the checklist and scores itself."),
    ul(
      "Data: 4 out of 6. Programme data is held in one shared system, and the team trusts it, but consent rules for sharing it are unclear.",
      "People: 5 out of 6. The programme director is eager and has time, and staff are curious, but nobody has used these tools before.",
      "Process: 3 out of 6. The team can name tasks to improve, but has no baseline time for any of them, and no one owns maintenance.",
      "Risk: 2 out of 6. There is no AI policy, and no agreement about where staff may paste information.",
    ),
    p("The total is 14, which suggests starting a pilot while fixing the weakest section. The group writes a one-page AI use policy, ruling out the use of any personal data in public tools. It picks one task, drafting donor reports from field notes, records how long it takes today and sets a six-week pilot with the director as owner and a named reviewer. The weakest section became the first action, and cost nothing but a morning."),
    h2("Frequently asked questions"),
    qa(
      ["Who should be in the readiness workshop?", "A decision-maker, someone who knows the data, someone who will use the result and someone responsible for risk or compliance. Four to six people is ideal."],
      ["Is a low score a reason not to proceed?", "It is a reason to start somewhere different. A low score points to the first thing to fix, which is often cheap, such as naming an owner or writing a policy."],
      ["How often should we repeat the checklist?", "After each pilot, and at least once a year. Your scores and your needs will change."],
      ["Do we need a data scientist?", "Not for a first pilot with ready-made tools. You may need one later for custom work, and the pilot will show you what to ask for."],
    ),
  ],

  "scoping-a-geoai-project": [
    h2("A worked example: scoping a wetland-monitoring pilot"),
    p("A conservation agency wants to track the extent of wetlands in two districts."),
    ol(
      "Decision: “Which wetland areas have shrunk by more than 10 percent since 2020, so that we can send inspectors this year?” The users are the agency’s four field officers, and the answer is needed once a year.",
      "Area and time: the two districts, comparing the dry season of 2020 with the dry season of 2026.",
      "Imagery: free 10 metre Sentinel-2 data is enough for wetlands that are hundreds of metres across, and the dry seasons have few clouds. Radar is added to detect water below vegetation.",
      "Labels: field officers mark 300 sample points, and a former survey map is used as a rough guide. A short labelling guide keeps everyone consistent.",
      "Success: at least 85 percent overall accuracy and 80 percent recall on wetland, tested on whole sub-areas the model never saw. The agency also wants a map users can read in a browser.",
      "Pilot: one district, six weeks, with a review of the map by the officers on site.",
      "Delivery: a web map with a layer for each year, a table of change by site and a short methods note.",
    ),
    p("This scope fits on a page. It tells a data scientist exactly what to build, tells the manager what they will get and tells everyone how success will be judged."),
    h2("Frequently asked questions"),
    qa(
      ["How long should scoping take?", "Often one to two weeks, including a workshop and checks on data. It is a small investment that prevents far larger waste."],
      ["Can we scope without knowing the accuracy we can achieve?", "You can set a target, but treat it as a hypothesis to test in the pilot, not a promise. The pilot’s job is to find out."],
      ["Who should own the scope?", "A person from the user side, not only the technical team. They must be able to say whether the result will be useful."],
      ["What if the labels do not exist?", "Plan and budget for creating them. Or consider unsupervised or rule-based approaches for a first look, and be honest about their limits."],
    ),
  ],

  "validate-a-startup-idea": [
    h2("A worked example: a guide-booking idea"),
    p("A founder wonders whether to build an app that connects trekkers with local guides."),
    ul(
      "Week 1: the problem is that trekkers struggle to find trustworthy guides at a fair price. The customer is independent trekkers planning a trip to a particular region. Today they rely on forum posts and agencies. The decision rule: continue if 8 of 20 trekkers say they would book through a platform and 3 agree to pay a deposit.",
      "Week 2: she interviews 18 trekkers. Most have trouble judging trust, and few care about an app. They want reviews and a clear price.",
      "Week 3: she builds a simple page listing three guides she knows, with prices and reviews, and a button to request a booking. She shares it in two trekking groups. Twelve people request bookings, and four pay a small deposit.",
      "Week 4: the rule is met. She decides to continue, but to begin with a handful of guides and handle bookings by messaging, not building the app first.",
    ),
    p("In four weeks and almost no money, she replaced a guess with evidence and discovered that the app was not the first thing to build."),
    h2("An interview script you can copy"),
    ol(
      "Tell me about the last time you planned a trip like this. What did you do?",
      "What was the hardest part? What did you try?",
      "What did it cost, in money or time?",
      "Have you paid someone to help? How did you choose?",
      "If this were solved, what would be different?",
      "Who else is involved in the decision?",
      "Would it be all right if I came back with something to try?",
    ),
    h2("Frequently asked questions"),
    qa(
      ["How many interviews are enough?", "Around 15 to 20 with the same type of customer is a good start. You will usually hear the same themes repeat before you reach the end."],
      ["What if people say they like the idea but won’t commit?", "Treat it as a no. Politeness is not demand. Ask what would have to be true for them to commit, and learn from the answer."],
      ["Do I need a prototype to validate?", "Not at first. A page, a conversation or a manual service tests demand far faster than software."],
      ["When is it right to stop?", "When your own decision rule, set in advance, is clearly not met after honest testing, or when you learn that the problem is too small or the customer cannot pay."],
    ),
  ],

  "evaluate-a-rag-assistant": [
    h2("A worked mini-example: marking five answers"),
    p("Suppose your test set has five questions, and you mark each answer for retrieval and correctness."),
    ul(
      "Q1, leave carry-over: right passage found, answer correct and cited. Pass.",
      "Q2, travel approval: right passage found, but the answer omits the exception for managers. Retrieval pass, answer fail: improve the prompt or the chunking.",
      "Q3, equipment returns: right passage not retrieved. Retrieval fail: look at how the document is split, or add keyword search.",
      "Q4, a question the documents do not cover: the assistant invents a policy. Refusal fail: strengthen the instruction, and test again.",
      "Q5, a rephrased version of Q1: correct. Pass.",
    ),
    p("The score is three passes out of five, and the table tells you what to fix, in what order. This is far more useful than a general feeling that it is “mostly fine”."),
    h2("Tools that can help"),
    ul(
      "A spreadsheet is enough to start. List the question, expected answer, retrieved passages, the answer given and your marks.",
      "Open-source evaluation libraries can compute metrics such as faithfulness and context precision automatically. Use them to scale up, but calibrate them against human marking.",
      "Logging and tracing tools show each step of a real question, which makes debugging much faster.",
    ),
    h2("Frequently asked questions"),
    qa(
      ["How big should my test set be?", "Start with 30 to 50 questions, and grow to 100 or more for production systems, adding every failure you discover."],
      ["Can another AI model mark the answers?", "It can help at scale, particularly for groundedness. Calibrate it against human marks on a sample, and keep people in the loop for important cases."],
      ["How often should I re-test?", "After every change to documents, prompts, search or models, and on a regular schedule such as monthly."],
      ["What score is good enough?", "It depends on the stakes. Set targets in advance, with stricter ones for areas where a wrong answer is costly."],
    ),
  ],

  "your-first-ai-pilot": [
    h2("A worked example: the weekly report"),
    p("A small organisation spends about four hours each week turning field notes into a summary report for its board."),
    ol(
      "Baseline: the team times the task over six weeks. It averages 3 hours 50 minutes, and the writer says the first draft is the worst part.",
      "Rules: no names or personal details go into the tool, the writer reviews every line, and the budget is a small monthly subscription.",
      "Pilot: for four weeks, the writer pastes anonymised notes into an AI assistant, asks for a structured first draft and then edits it. She logs the time and notes what she changed.",
      "Result: the average falls to 1 hour 45 minutes. About two thirds of the draft is kept with light edits, and twice the tool invented a figure that review caught.",
      "Decision: continue, with a rule to check every number against the source, and extend the approach to meeting minutes next.",
    ),
    p("The saving, about two hours a week, is modest, but the team learned how to brief the tool, which mistakes to look for and how to measure benefit. That learning is what makes the second pilot easier."),
    h2("Frequently asked questions"),
    qa(
      ["How do I choose between tools?", "Pick a task first, then try one or two tools on real examples. Prefer the one your team finds easiest, and check its data policy."],
      ["What if the team is worried about their jobs?", "Be open about the goal, which is to remove tedious work. Involve them in choosing and testing, and share the results."],
      ["Is thirty days enough?", "It is enough to see a clear pattern for a frequent task. For rare tasks, extend the pilot or choose a more frequent one."],
      ["What should we never put into a public AI tool?", "Personal data, passwords, confidential contracts and anything you would not email to a stranger, unless you have checked the tool’s terms and have approval."],
    ),
  ],
};
