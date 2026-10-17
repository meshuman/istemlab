// Learn > Tutorials. Hands-on walkthroughs with code (about 1,300 to 1,900 words each).
// `seed: true` = drafted copy; run every code sample once before promoting it.
// Reading time is calculated automatically (lib/readtime.js).

import { p, h2, ul, ol, code, note } from "./blocks";

export const tutorials = [
  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "tutorials",
    slug: "ndvi-from-sentinel-2",
    title: "Compute NDVI from Sentinel-2 imagery with Python",
    excerpt: "Turn the red and near-infrared bands into a cloud-masked vegetation health map, step by step.",
    topic: "GeoAI",
    level: "Beginner",
    date: "2026-10-08",
    takeaways: [
      "NDVI = (NIR − Red) / (NIR + Red), with values from −1 to 1.",
      "Sentinel-2 band B08 is near-infrared and B04 is red, both at 10 m resolution.",
      "Mask clouds and shadows with the scene classification layer (SCL) before you trust any number.",
      "Higher values generally mean denser, healthier vegetation, but thresholds depend on crop and season.",
    ],
    body: [
      p("The Normalized Difference Vegetation Index, or NDVI, is probably the most widely used number in remote sensing. It compares how much near-infrared and red light a surface reflects. Healthy plants absorb most red light for photosynthesis and bounce back a great deal of near-infrared, so they score high. Bare soil, water and buildings score low."),
      p("In this tutorial you will compute NDVI from a Sentinel-2 image, remove clouds and shadows, save the result as a GeoTIFF and draw it as a map. The whole script is under 50 lines. You will also learn how to read the result sensibly, because a number you cannot interpret is not much use."),

      h2("What you need"),
      ul(
        "Python 3.9 or newer.",
        "Three single-band GeoTIFF files from the same Sentinel-2 Level-2A scene: B04 (red, 10 m), B08 (near-infrared, 10 m) and SCL (scene classification, 20 m).",
        "The packages rasterio, numpy and matplotlib.",
      ),
      code("bash", "pip install rasterio numpy matplotlib"),
      p("Sentinel-2 images are free. You can download them from the Copernicus Data Space browser or fetch them from a public STAC catalogue such as Earth Search. Choose Level-2A products, which are already corrected for the atmosphere, and pick a scene with low cloud cover over your area. If you download whole scene archives, each band is a separate JP2 or TIFF file inside the folder named for the resolution."),

      h2("Step 1: read the bands"),
      p("We read red and near-infrared as 32-bit floating point numbers. This matters because the files store whole numbers, and dividing whole numbers can silently round your result. The SCL layer has half the resolution of the other bands, so we ask rasterio to resample it to match using nearest-neighbour, which keeps the class codes intact."),
      code(
        "python",
        "import numpy as np\nimport rasterio\nfrom rasterio.enums import Resampling\n\nwith rasterio.open(\"B04.tif\") as red_src, rasterio.open(\"B08.tif\") as nir_src:\n    red = red_src.read(1).astype(\"float32\")\n    nir = nir_src.read(1).astype(\"float32\")\n    profile = red_src.profile\n\nwith rasterio.open(\"SCL.tif\") as scl_src:\n    # SCL is 20 m; resample it onto the 10 m grid without blending class codes\n    scl = scl_src.read(1, out_shape=red.shape, resampling=Resampling.nearest)"
      ),

      h2("Step 2: calculate NDVI"),
      p("The formula is one line. The tiny extra value in the denominator avoids dividing by zero over pixels where both bands are empty, such as no-data edges."),
      code("python", "ndvi = (nir - red) / (nir + red + 1e-6)"),
      p("Because it is a ratio, NDVI always falls between −1 and 1, and it is less affected by overall brightness than raw band values. That is why it works well for comparing different dates and places."),

      h2("Step 3: mask clouds and shadows"),
      p("Clouds are bright in both bands, so they produce NDVI values near zero that look like bare ground. If you leave them in, your averages and maps will be wrong. The SCL layer labels every pixel with a class, which lets you remove the bad ones."),
      ul(
        "0 no data, 1 saturated or defective pixels",
        "3 cloud shadow",
        "8 and 9 cloud (medium and high probability), 10 thin cirrus",
        "11 snow or ice",
        "Useful classes to keep: 4 vegetation, 5 not vegetated, 6 water, 7 unclassified",
      ),
      code("python", "bad = np.isin(scl, [0, 1, 3, 8, 9, 10, 11])\nndvi = np.where(bad, np.nan, ndvi).astype(\"float32\")\n\nprint(f\"Masked {bad.mean():.1%} of pixels\")"),
      note("If most of your image is masked, choose a clearer date. A cloud-free scene is worth more than any clever processing."),

      h2("Step 4: save the result"),
      p("We copy the metadata of the red band, so the output keeps the same location and projection, and write a single band of 32-bit floats. Setting the no-data value to NaN tells GIS software to treat masked pixels as empty."),
      code("python", "profile.update(dtype=\"float32\", count=1, nodata=np.nan)\n\nwith rasterio.open(\"ndvi.tif\", \"w\", **profile) as dst:\n    dst.write(ndvi, 1)"),
      p("You can now open ndvi.tif in QGIS or any other GIS program, overlay it on a basemap and style it with a green colour ramp."),

      h2("Step 5: draw a quick map"),
      code("python", "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots(figsize=(8, 8))\nim = ax.imshow(ndvi, cmap=\"RdYlGn\", vmin=-0.2, vmax=0.9)\nax.set_title(\"NDVI\")\nax.axis(\"off\")\nfig.colorbar(im, ax=ax, shrink=0.7, label=\"NDVI\")\nplt.savefig(\"ndvi.png\", dpi=150, bbox_inches=\"tight\")"),

      h2("How to read the result"),
      ul(
        "Below zero: water, snow or clouds that slipped through the mask.",
        "About 0 to 0.2: bare soil, rock, sand or built-up land.",
        "About 0.2 to 0.5: sparse vegetation, grassland or young crops.",
        "Above about 0.5: dense, healthy vegetation such as mature crops and forest.",
      ),
      p("Treat these bands as a guide, not a rule. The same crop looks different at each growth stage, and a pale, dry grassland in winter can score lower than a healthy crop in spring while being perfectly normal for its season. The most reliable way to use NDVI is comparison: this field against its neighbours, or this month against the same month last year."),

      h2("Common problems"),
      ul(
        "Everything is near zero or looks washed out: check you used red and near-infrared (B04 and B08), not two other bands.",
        "Values look odd or banded: confirm you converted to float before dividing.",
        "The SCL array has a different shape: you skipped the resampling step.",
        "The map is mostly empty: your scene is too cloudy. Pick another date.",
      ),

      h2("Where to go next"),
      ul(
        "Compute the average NDVI inside a field boundary, using a polygon from a shapefile.",
        "Repeat the process for every clear image across a season to draw a growth curve.",
        "Try the water index NDWI, which uses green and near-infrared, with the same pattern.",
        "Feed NDVI as an extra feature into a land cover classifier, which usually improves accuracy.",
      ),
      p("You now have a repeatable recipe for one of the most useful measurements in remote sensing. The same pattern of read, calculate, mask and save applies to almost every index you will meet."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "tutorials",
    slug: "minimal-rag-pipeline",
    title: "Build a minimal RAG pipeline in Python",
    excerpt: "Chunk text, embed it, retrieve the best passages, build a grounded prompt and test it, with no framework.",
    topic: "RAG & Agents",
    level: "Intermediate",
    date: "2026-10-05",
    takeaways: [
      "A working RAG system is a few small functions: chunk, embed, retrieve and build a prompt.",
      "Chunking with a little overlap keeps ideas from being cut in half.",
      "Cosine similarity over embeddings is enough for a first retriever.",
      "Measure retrieval with a small test set before you touch the language model.",
    ],
    body: [
      p("Most RAG tutorials begin by installing a large framework. That is fine for production, but it hides what is actually happening. In this tutorial you will build the core of a retrieval-augmented generation system with plain Python and numpy, so that every moving part is visible. Once you understand it, any framework becomes easier to use and to debug."),
      p("You will build four things: a chunker, an index, a retriever and a prompt builder. Then you will add a small test that tells you how well retrieval works, which is the step most people skip."),

      h2("What you need"),
      ul(
        "Python 3.9 or newer and numpy.",
        "A folder of plain text documents, such as policies or manuals. A few thousand words is plenty.",
        "An embedding function, embed(texts), that returns one vector per text. Any provider or local model will do.",
        "A language model you can call with a prompt. We will leave that call as a placeholder, because the retrieval is the part worth learning.",
      ),
      code("bash", "pip install numpy sentence-transformers"),
      p("The package sentence-transformers is optional. It lets you run a small embedding model on your own machine, so no data leaves your computer. Here is how to wrap it:"),
      code("python", "from sentence_transformers import SentenceTransformer\n\n_model = SentenceTransformer(\"all-MiniLM-L6-v2\")\n\ndef embed(texts):\n    # returns a (n_texts, dim) array of unit-length vectors\n    return _model.encode(texts, normalize_embeddings=True)"),

      h2("Step 1: load and chunk the documents"),
      p("A language model has limited space, and a search needs specific passages, not whole books. We split each document into overlapping chunks. The overlap means that a sentence at the edge of one chunk also appears at the start of the next, so an idea is rarely split in half."),
      code("python", "from pathlib import Path\n\ndef chunk(text, size=800, overlap=100):\n    step = size - overlap\n    return [text[i:i + size] for i in range(0, len(text), step)]\n\nchunks, sources = [], []\nfor path in Path(\"docs\").glob(\"*.txt\"):\n    for piece in chunk(path.read_text(encoding=\"utf-8\")):\n        chunks.append(piece)\n        sources.append(path.name)\n\nprint(len(chunks), \"chunks\")"),
      note("Fixed-size chunks are the simplest start. For better results, split on natural boundaries such as headings and paragraphs, then merge small pieces up to your size limit."),

      h2("Step 2: embed and index"),
      p("We embed every chunk once and keep the vectors in a numpy array. For thousands of chunks this is fast enough that you do not need a vector database yet. When the vectors have unit length, the dot product of two of them equals their cosine similarity, which makes retrieval a single matrix operation."),
      code("python", "import numpy as np\n\nvectors = np.array(embed(chunks), dtype=\"float32\")   # shape: (n_chunks, dim)\nvectors /= np.linalg.norm(vectors, axis=1, keepdims=True)"),

      h2("Step 3: retrieve the best passages"),
      code("python", "def retrieve(question, k=4):\n    q = np.array(embed([question]), dtype=\"float32\")[0]\n    q /= np.linalg.norm(q)\n    scores = vectors @ q                      # cosine similarity per chunk\n    best = np.argsort(-scores)[:k]\n    return [(int(i), float(scores[i])) for i in best]"),
      p("Try it with a question you know the answer to and print the top results. If the right passage is not in the top four, you have found a retrieval problem, and you can fix it now, before any language model is involved."),

      h2("Step 4: build a grounded prompt"),
      p("The prompt is where you tell the model to stay inside the evidence. Number each passage, so that the answer can cite them, and tell the model what to do when the answer is missing."),
      code("python", "def build_prompt(question):\n    hits = retrieve(question)\n    context = \"\\n\\n\".join(\n        f\"[{n}] ({sources[i]}) {chunks[i]}\" for n, (i, _) in enumerate(hits, start=1)\n    )\n    return (\n        \"Answer the question using only the passages below. \"\n        \"Cite the passage numbers you used, like [2]. \"\n        \"If the answer is not in the passages, say you do not know.\\n\\n\"\n        f\"Passages:\\n{context}\\n\\nQuestion: {question}\"\n    )\n\ndef answer(question):\n    return generate(build_prompt(question))   # generate() calls your language model"),
      p("The function generate is a placeholder for whichever model you use. It takes a prompt string and returns text."),

      h2("Step 5: test retrieval before anything else"),
      p("This step separates a demo from a system you can improve. Write down 20 to 30 real questions, and for each one note a phrase that must appear in the right passage. Then measure how often retrieval finds it."),
      code("python", "tests = [\n    (\"How many days of leave can I carry over?\", \"carry over\"),\n    (\"Who approves travel expenses?\", \"travel\"),\n    # ...add 20 to 30 real questions with a key phrase each\n]\n\nhits_found = 0\nfor question, key_phrase in tests:\n    top = retrieve(question, k=4)\n    if any(key_phrase.lower() in chunks[i].lower() for i, _ in top):\n        hits_found += 1\n\nprint(f\"Retrieval hit rate: {hits_found / len(tests):.0%}\")"),
      p("Now you have a number. Change the chunk size, the overlap or the embedding model, and run the test again. If the number goes up, keep the change. This simple loop will improve your system faster than any amount of prompt tweaking."),

      h2("Making it better"),
      ul(
        "Split on headings and paragraphs rather than fixed lengths.",
        "Store metadata such as document date and type, and filter on it, for example to prefer the newest version.",
        "Combine keyword search with embeddings, because exact codes and names are easy to miss with meaning-based search alone.",
        "Re-rank the top 20 results with a stronger model and keep the best four.",
        "Cache the embeddings to disk so you do not recompute them each run.",
      ),

      h2("Things to watch for"),
      ul(
        "Access control. Retrieval must respect who is allowed to see which document, or the assistant will reveal things it should not.",
        "Untrusted text. Instructions hidden inside a document can try to steer the model. Treat retrieved text as data, never as commands.",
        "Stale content. If documents change, rebuild the index, or the assistant will quote outdated rules.",
        "Privacy. Sending documents to an outside embedding service shares them with that service.",
      ),
      p("You have now built the heart of every RAG system. Everything else, from vector databases to re-rankers, is an upgrade to one of these four functions. Keep the test set, because it will tell you whether each upgrade is worth its cost."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "tutorials",
    slug: "web-map-with-maplibre",
    title: "Show your data on a web map with MapLibre",
    excerpt: "Add an interactive map, a GeoJSON layer, popups and data-driven colours to any web page.",
    topic: "Web GIS",
    level: "Beginner",
    date: "2026-09-30",
    takeaways: [
      "MapLibre GL JS is a free, open-source library for fast interactive vector maps.",
      "GeoJSON is a simple format for points, lines and polygons, and it uses [longitude, latitude] order.",
      "A source holds data, and a layer decides how it is drawn.",
      "Data-driven styling lets one layer show many colours based on a property.",
    ],
    body: [
      p("A web map is the friendliest way to share spatial data. Anyone with a browser can zoom, click and explore, and nothing needs to be installed. MapLibre GL JS is a free, open-source library that draws smooth, interactive maps using the graphics card, and it works with any data you can express as GeoJSON."),
      p("In this tutorial you will put a map on a page, add a layer of areas from a GeoJSON file, colour the areas by a property, add popups and fit the view to your data. You need only a text editor and a browser."),

      h2("What you need"),
      ul(
        "A text editor, and any modern browser.",
        "A GeoJSON file named areas.geojson with polygons that have a property called landuse, for example forest, water or farm. You can export one from QGIS or draw one at geojson.io.",
        "A way to serve files locally, because browsers block local files from loading data. In a terminal, run: python -m http.server 8000, then open http://localhost:8000.",
      ),

      h2("Step 1: the page"),
      p("Create an index.html file that loads the library from a CDN and reserves space for the map."),
      code("html", "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\" />\n  <title>My first web map</title>\n  <link href=\"https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css\" rel=\"stylesheet\" />\n  <script src=\"https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js\"></script>\n  <style>\n    body { margin: 0; }\n    #map { height: 100vh; }\n  </style>\n</head>\n<body>\n  <div id=\"map\"></div>\n  <script src=\"map.js\"></script>\n</body>\n</html>"),

      h2("Step 2: create the map"),
      p("In map.js, create the map. The style is the basemap. This demo style is free and good for learning. For a real project, choose a style from a provider whose terms fit your use and show its attribution."),
      code("javascript", "const map = new maplibregl.Map({\n  container: \"map\",\n  style: \"https://demotiles.maplibre.org/style.json\",\n  center: [85.3237, 27.6808], // [longitude, latitude]\n  zoom: 10,\n});\n\nmap.addControl(new maplibregl.NavigationControl());"),
      note("GeoJSON and MapLibre use [longitude, latitude], the reverse of how most people say coordinates. Swapping them is the most common beginner mistake."),

      h2("Step 3: add your data"),
      p("Wait for the map to finish loading, then add a source that points to your file, and a layer that draws it as filled polygons. The color expression below is data-driven: it looks at each area’s landuse property and picks a colour."),
      code("javascript", "map.on(\"load\", () => {\n  map.addSource(\"areas\", { type: \"geojson\", data: \"areas.geojson\" });\n\n  map.addLayer({\n    id: \"areas-fill\",\n    type: \"fill\",\n    source: \"areas\",\n    paint: {\n      \"fill-color\": [\n        \"match\", [\"get\", \"landuse\"],\n        \"forest\", \"#2b5243\",\n        \"water\", \"#4a78a8\",\n        \"farm\", \"#c9b458\",\n        \"#999999\", // anything else\n      ],\n      \"fill-opacity\": 0.65,\n    },\n  });\n\n  map.addLayer({\n    id: \"areas-outline\",\n    type: \"line\",\n    source: \"areas\",\n    paint: { \"line-color\": \"#111111\", \"line-width\": 1 },\n  });\n});"),

      h2("Step 4: add popups"),
      p("A map is more useful when people can click for details. We build the popup from plain text nodes rather than HTML strings. That keeps the page safe even if a property contains characters like angle brackets, and it matters whenever the data comes from outside."),
      code("javascript", "map.on(\"click\", \"areas-fill\", (e) => {\n  const props = e.features[0].properties;\n  const box = document.createElement(\"div\");\n  box.textContent = `Land use: ${props.landuse}`;\n\n  new maplibregl.Popup().setLngLat(e.lngLat).setDOMContent(box).addTo(map);\n});\n\n// show a pointer cursor over clickable areas\nmap.on(\"mouseenter\", \"areas-fill\", () => (map.getCanvas().style.cursor = \"pointer\"));\nmap.on(\"mouseleave\", \"areas-fill\", () => (map.getCanvas().style.cursor = \"\"));"),

      h2("Step 5: zoom to your data"),
      p("Instead of guessing a centre and zoom level, calculate the bounds of your data and fit the view to them. This version reads the file once and works through every coordinate."),
      code("javascript", "fetch(\"areas.geojson\")\n  .then((r) => r.json())\n  .then((geojson) => {\n    const bounds = new maplibregl.LngLatBounds();\n    const extend = (coords) =>\n      Array.isArray(coords[0]) ? coords.forEach(extend) : bounds.extend(coords);\n    geojson.features.forEach((f) => extend(f.geometry.coordinates));\n    map.fitBounds(bounds, { padding: 40 });\n  });"),

      h2("Make it ready for real use"),
      ul(
        "Attribution. Show the credit your basemap and data require. It is usually a licence condition.",
        "Large data. A GeoJSON file of tens of thousands of shapes will be slow. Convert it to vector tiles, which load only what is on screen.",
        "Accessibility. Add a text summary or table of the key information, so that the map is not the only way to read it.",
        "Mobile. Test on a phone, where the map should fill the screen and controls need to be easy to tap.",
        "Hosting. A map is just static files, so any static host will do.",
      ),

      h2("Troubleshooting"),
      ul(
        "Blank grey map: open the browser console, and check that the style URL loaded.",
        "Data does not appear: confirm you added it inside the load event, and that the file path is correct.",
        "Points land in the wrong country: your coordinates are probably swapped to latitude, longitude.",
        "Shapes look distorted or offset: GeoJSON must be in standard WGS 84 coordinates. Reproject if it is not.",
      ),
      p("You now have the foundation of almost every web map: a basemap, a source, a layer and some interaction. From here you can add filters, time sliders, legends and your own analysis results."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "tutorials",
    slug: "land-cover-random-forest",
    title: "Classify land cover with a random forest in Python",
    excerpt: "Train a machine learning model on labelled pixels, test it honestly and turn a satellite image into a land cover map.",
    topic: "GeoAI",
    level: "Intermediate",
    date: "2026-10-16",
    takeaways: [
      "Each pixel becomes one row of data, and its band values become the features.",
      "A random forest is a strong, easy first model for land cover classification.",
      "Splitting pixels at random overstates accuracy. Hold out whole areas for an honest test.",
      "Predict in blocks of rows so large images do not exhaust your memory.",
    ],
    body: [
      p("A land cover map answers a basic question: what is on the ground? It tells you where there is forest, farmland, water and buildings. Governments use these maps to plan, farmers to monitor, and researchers to measure change. In this tutorial you will make one yourself, by teaching a random forest model to classify every pixel of a satellite image."),
      p("A random forest is a good first model. It handles many input bands, needs little tuning, and gives you a sense of which inputs matter. The important lessons in this tutorial are less about the algorithm and more about preparing data and testing honestly, because that is where most classification projects go wrong."),

      h2("What you need"),
      ul(
        "Python 3.9 or newer, with rasterio, numpy and scikit-learn installed.",
        "stack.tif: a multiband image where all bands share the same grid. For example Sentinel-2 blue, green, red and near-infrared at 10 m, stacked into one file.",
        "labels.tif: a raster of the same size and grid where 0 means unlabelled, and 1, 2, 3 and 4 mark your classes, for example 1 water, 2 forest, 3 cropland, 4 built-up.",
      ),
      code("bash", "pip install rasterio numpy scikit-learn"),
      p("You can create labels in QGIS by drawing polygons over areas you are sure about, giving each a class number, and converting them to a raster that matches your image. Aim for a few hundred well-spread pixels per class at the very least. Quality matters more than quantity: pick pure, unambiguous areas, and spread them across the whole region, not just one corner."),

      h2("Step 1: turn pixels into rows"),
      p("Machine learning models expect a table: one row per example, one column per feature. A satellite image is a stack of grids, so we reshape it. Every pixel becomes a row, and its values in each band become the columns."),
      code("python", "import numpy as np\nimport rasterio\n\nwith rasterio.open(\"stack.tif\") as src:\n    image = src.read().astype(\"float32\")   # shape: (bands, rows, cols)\n    profile = src.profile\n\nwith rasterio.open(\"labels.tif\") as lab:\n    labels = lab.read(1)                    # shape: (rows, cols)\n\nbands, rows, cols = image.shape\nX_all = image.reshape(bands, -1).T          # one row per pixel, one column per band\ny_all = labels.ravel()\nlabelled = y_all > 0\nX, y = X_all[labelled], y_all[labelled]\n\nprint(X.shape, \"labelled pixels;\", np.bincount(y)[1:], \"per class\")"),
      p("Check the count per class. If one class has ten times more examples than another, the model will favour the common one. Collect more labels for the rare class, or use class_weight=\"balanced\" in the next step."),

      h2("Step 2: train a first model"),
      code("python", "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import classification_report\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.3, stratify=y, random_state=42\n)\n\nmodel = RandomForestClassifier(\n    n_estimators=200, n_jobs=-1, random_state=42, class_weight=\"balanced\"\n)\nmodel.fit(X_train, y_train)\n\nprint(classification_report(y_test, model.predict(X_test)))"),
      p("You will probably see very high scores, perhaps 95 percent or more. Do not celebrate yet."),
      note("Pixels next to each other look almost identical. A random split puts near-copies of the same pixels in both the training and test sets, so the model is partly tested on what it has memorised. The accuracy looks better than it really is."),

      h2("Step 3: test honestly with spatial blocks"),
      p("The fix is to keep whole areas together. We divide the image into square blocks, give each pixel the number of its block, and make sure that a block is either used for training or for testing, never both. Scikit-learn’s GroupKFold does exactly this."),
      code("python", "from sklearn.model_selection import GroupKFold\n\nrow_idx, col_idx = np.indices((rows, cols))\nblock_id = (row_idx // 128) * 1000 + (col_idx // 128)   # 128 x 128 pixel blocks\ngroups = block_id.ravel()[labelled]\n\nscores = []\nfor train_i, test_i in GroupKFold(n_splits=5).split(X, y, groups):\n    m = RandomForestClassifier(n_estimators=200, n_jobs=-1, random_state=42,\n                               class_weight=\"balanced\")\n    m.fit(X[train_i], y[train_i])\n    scores.append(m.score(X[test_i], y[test_i]))\n\nprint(f\"Spatial CV accuracy: {np.mean(scores):.1%} (+/- {np.std(scores):.1%})\")"),
      p("This number is usually lower than the first one, and it is the one to believe. If the gap is large, your model is relying on local memorisation, and you need more varied labels."),

      h2("Step 4: look at where it makes mistakes"),
      code("python", "from sklearn.metrics import confusion_matrix\n\ny_pred = model.predict(X_test)\nprint(confusion_matrix(y_test, y_pred))"),
      p("Each row shows what the true class was, and each column what the model said. Large numbers off the diagonal show which classes are confused. Cropland and grass often mix, as do built-up land and bare soil. That tells you where to collect more labels or add extra information."),

      h2("Step 5: map the whole image"),
      p("Predicting every pixel of a large image in one go can exhaust your memory. We do it in strips of rows instead."),
      code("python", "prediction = np.zeros((rows, cols), dtype=\"uint8\")\nstep = 512\n\nfor r in range(0, rows, step):\n    strip = image[:, r:r + step, :]                 # (bands, h, cols)\n    h = strip.shape[1]\n    flat = strip.reshape(bands, -1).T\n    prediction[r:r + h, :] = model.predict(flat).reshape(h, cols)\n\nprofile.update(dtype=\"uint8\", count=1, nodata=0)\nwith rasterio.open(\"landcover.tif\", \"w\", **profile) as dst:\n    dst.write(prediction, 1)"),
      p("Open landcover.tif in QGIS, give each class a colour, and compare it with the original image. Your eyes are a powerful check, so look closely at places you know."),

      h2("Which bands matter?"),
      code("python", "names = [\"blue\", \"green\", \"red\", \"nir\"]\nfor name, score in sorted(zip(names, model.feature_importances_), key=lambda x: -x[1]):\n    print(f\"{name:6s} {score:.2f}\")"),
      p("Feature importance shows which inputs the model leaned on. If one band dominates, adding related information, such as a vegetation index, often helps."),

      h2("How to improve the map"),
      ul(
        "Add NDVI, a water index or texture measures as extra columns.",
        "Collect more labels where the confusion matrix shows mistakes, and in places that look different from your first samples.",
        "Use images from more than one date. Crops that look alike in one month often differ clearly across a season.",
        "Smooth the output with a majority filter to remove isolated stray pixels.",
        "For very detailed results, move to a deep learning model that understands shape and context, such as a U-Net.",
      ),

      h2("Reporting accuracy responsibly"),
      p("When you share a map, share how good it is. Report overall accuracy from spatial testing, and give per-class numbers, because a single average can hide a class that fails. Say which date and sensor the map comes from, and where it was checked on the ground. A map with a clear accuracy statement is far more trustworthy than one with a bigger number and no explanation."),
      p("You now know the full workflow: prepare labelled pixels, train, test honestly, map and improve. Real projects repeat this loop many times, and most of the gain comes from better labels, not a fancier model."),
    ],
  },
];
