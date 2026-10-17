// Learn > Concepts, second set. Added after reviewing the questions beginners most often raise
// in public GIS, remote sensing and RAG communities: coordinate systems and data types for GIS
// newcomers, and chunking for anyone building a document assistant.
// Reading time is calculated automatically (lib/readtime.js).

import { p, h2, ul, ol, note } from "./blocks";

export const concepts2 = [
  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "gis-basics-rasters-vectors-crs",
    title: "GIS basics: rasters, vectors and coordinate systems",
    excerpt: "The three ideas every beginner needs before opening any GIS software, explained without jargon.",
    topic: "GIS Basics",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "Vector data stores shapes (points, lines, polygons). Raster data stores a grid of values, such as pixels.",
      "A coordinate reference system (CRS) tells software how numbers map to places on Earth.",
      "Most beginner problems, such as layers that do not line up, come from mixed coordinate systems.",
      "Choose a projection for the job: one for measuring distances and areas, another for web maps.",
    ],
    body: [
      p("When people ask how to get started in GIS, the first advice is nearly always the same: learn the concepts before the software. It is good advice. A few core ideas explain most of what a GIS does, and most of what goes wrong. If you understand them, QGIS, ArcGIS, Python and web maps all become much easier to learn, because they are different tools for the same ideas."),
      p("This article covers the three ideas that matter most: the two kinds of spatial data, the coordinate systems that give numbers a place on Earth, and why map projections cause so much trouble."),

      h2("Two kinds of data: vector and raster"),
      p("Spatial data comes in two basic forms. Choosing between them is the first decision in almost any project."),
      ul(
        "Vector data describes things as shapes. A point marks a well or a school. A line draws a road or a river. A polygon outlines a field, a lake or a district. Each shape can carry a table of attributes, such as the name, the owner or the population.",
        "Raster data describes a surface as a grid of cells, each holding a value. A satellite image is a raster, where each cell is a pixel with a brightness. So is an elevation model, where each cell holds a height, or a rainfall map, where each cell holds an amount.",
      ),
      p("A useful rule: if you can draw it with a pen as a distinct thing, vector is probably the right choice. If it varies continuously across space, such as temperature, height or colour, raster is the natural choice."),

      h2("What each is good for"),
      ul(
        "Vector: boundaries, networks, buildings, anything you want to label, count, measure or search by attribute.",
        "Raster: imagery, elevation, climate surfaces, and anything you want to analyse cell by cell, for example computing a vegetation index.",
        "Together: you often combine them, for example summarising a raster’s average value inside each vector polygon, to get the mean elevation of every district.",
      ),

      h2("Why one number is not enough: coordinate reference systems"),
      p("The Earth is a curved, slightly lumpy ball, and a map is flat. A coordinate reference system, or CRS, is the agreement that says how a pair of numbers maps to a place. Without it, the numbers 27.68 and 85.32 mean nothing. With it, they point at a spot in the Kathmandu valley."),
      p("There are two families of CRS you will meet again and again."),
      ul(
        "Geographic systems use angles: latitude and longitude, measured in degrees. The best known is WGS 84, used by GPS. It describes positions anywhere on the globe, but degrees are awkward for measuring, because a degree of longitude is a different distance at every latitude.",
        "Projected systems flatten the globe onto a plane and use metres or feet. They are good for measuring distances and areas over a limited region. UTM zones are a popular example, and many countries define their own national grid.",
      ),

      h2("What a projection does to the world"),
      p("Flattening a sphere always distorts something. A projection chooses what to preserve and what to sacrifice."),
      ul(
        "Some preserve shape, so angles and local outlines look right, but areas grow towards the poles. The projection used by most web maps is like this, which is why Greenland looks as large as Africa.",
        "Some preserve area, so comparisons of size are fair, but shapes are stretched.",
        "Some preserve distance in particular directions, which suits specific tasks such as navigation.",
      ),
      p("The practical lesson is simple. Use a projected system suited to your region when you measure lengths or areas, and use the web map projection for display, because that is what online basemaps expect."),

      h2("The beginner mistakes this explains"),
      ul(
        "Layers that do not line up: one is in degrees and another in metres, and the software has not been told to convert, or one has a missing or wrong CRS label.",
        "Areas that look wrong: you calculated area in a system that distorts it. Reproject first, then measure.",
        "Data that appears in the ocean off Africa: latitude and longitude were swapped, or a CRS was assumed incorrectly.",
        "Distances in degrees: a buffer of “1” covers about 111 kilometres in a geographic system, not one metre.",
      ),
      note("Whenever layers refuse to line up, check the CRS of each one first. It is the cause far more often than a software fault."),

      h2("A simple routine for every new project"),
      ol(
        "Choose a projected CRS that suits your area, and use it for all measuring.",
        "Check the CRS of every dataset when you add it, and reproject it if it differs.",
        "Keep the original data untouched, and save reprojected copies.",
        "Record the CRS in your notes, so that you or a colleague can reproduce the result.",
      ),

      h2("Where to practise"),
      p("Install QGIS, which is free, and load a few open datasets for your own country or city, such as district boundaries, roads and a satellite image. Notice how the software shows each layer’s CRS. Try measuring the same field’s area in a geographic and a projected system and see how the numbers differ. That single experiment teaches more than a chapter of reading."),
      p("Once vectors, rasters and coordinate systems feel familiar, everything else in GIS, from analysis to web maps to satellite machine learning, builds on them."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "chunking-for-rag",
    title: "Chunking for RAG: how to split documents so AI can find answers",
    excerpt: "Why chunk size changes everything in a document assistant, and a practical way to choose a strategy.",
    topic: "RAG & Agents",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "Chunks that are too large blur many ideas together. Chunks that are too small lose the context needed to answer.",
      "Start from the natural structure of your documents: headings, sections and paragraphs.",
      "Overlap and metadata make retrieval more reliable.",
      "There is no universal best size. Test on your own questions.",
    ],
    body: [
      p("When people build their first document assistant, they spend most of their time choosing models. Then they discover the answers are mediocre, and that the real lever was something much more mundane: how the documents were cut into pieces. Chunking is one of the most common questions in every community that builds retrieval-augmented generation (RAG) systems, and for good reason. It quietly sets the ceiling on quality."),
      p("This article explains what chunking is, what goes wrong when it is done badly, the main strategies, and a method for choosing one without guessing."),

      h2("Why chunk at all?"),
      p("A language model can only read so much at once, and a search needs to find specific passages, not entire books. So before a document is indexed, it is divided into chunks, and each chunk is turned into an embedding that can be searched. When someone asks a question, the system retrieves the few best chunks and gives them to the model."),
      p("That means the model never sees your whole document. It sees the chunks that retrieval selected, and nothing else. If the right information was cut in half, buried in a huge chunk or stripped of its context, the answer will suffer however good the model is."),

      h2("What goes wrong at each extreme"),
      ul(
        "Chunks too large: each one covers several topics, so its embedding becomes a vague average. Retrieval returns bloated passages, wastes the model’s limited space and buries the relevant sentence.",
        "Chunks too small: a sentence on its own often loses meaning. “It must be submitted within five days” is useless if the chunk does not say what “it” is.",
        "Chunks cut at random points: a rule is separated from its exception, or a table from its heading, and the model confidently states half the truth.",
      ),

      h2("The main strategies"),
      ul(
        "Fixed size. Split every N characters or tokens. It is simple and predictable, and a fine place to start, but it ignores the meaning of the text.",
        "Structure-aware. Split on headings, sections and paragraphs. This follows how the author organised the ideas, and is usually the best default for manuals, policies and reports.",
        "Sentence or paragraph groups. Combine a few sentences until you reach a target size, never breaking in the middle of a sentence.",
        "Hierarchical. Keep both small chunks, for precise matching, and the larger section they belong to, which you pass to the model for context.",
        "Semantic. Split where the topic changes, detected using embeddings. It can be good, but is slower and needs testing.",
      ),

      h2("Things that help whatever strategy you choose"),
      ul(
        "Overlap. Let neighbouring chunks share a sentence or two, so that an idea at the boundary appears whole in at least one of them.",
        "Context in every chunk. Prepend the document title and section heading, so that “the deadline is five days” is stored with what it refers to.",
        "Metadata. Store the document name, date, type, owner and page. You can then filter, prefer recent versions and show precise citations.",
        "Special handling for tables and lists. Keep a table with its caption and column headings. Convert it to text that preserves the meaning of the rows.",
        "Clean text first. Remove page headers, footers and repeated navigation text, which pollute chunks and search results.",
      ),

      h2("How big should a chunk be?"),
      p("Many teams begin with chunks of roughly 200 to 500 words, with an overlap of 10 to 20 percent, and then adjust. Treat these numbers as a starting point, not a rule. Legal clauses may need small, precise chunks. A narrative report may work better with larger ones. The right size depends on your documents and your questions."),

      h2("A method for choosing, instead of guessing"),
      ol(
        "Write 30 to 50 real questions, and for each one note the passage that holds the answer.",
        "Build the index with a first strategy, for example structure-aware chunks of about 300 words with a short overlap.",
        "Measure retrieval: for what share of questions does the right passage appear in the top few results?",
        "Change one thing, such as the size, the overlap or adding headings, and measure again.",
        "Keep the setting that scores best, and look at the questions that still fail to find out why.",
      ),
      note("Change one variable at a time and keep the same test questions. Otherwise you will not know which change made the difference."),

      h2("Common warning signs"),
      ul(
        "Answers that are correct but incomplete, because the exception was in another chunk.",
        "The assistant quoting the wrong version of a document, because dates were not stored.",
        "Good results on short documents and poor results on long ones.",
        "Exact codes and names that are never found, which suggests adding keyword search beside embeddings.",
      ),

      h2("Chunking is not a one-time job"),
      p("When documents change, or when you notice recurring failures, revisit your chunking. Re-index regularly, and keep your test questions as a safety net, so you can see immediately whether a change helped or hurt."),
      p("Good chunking is unglamorous work, but it often delivers a bigger improvement than switching to a more powerful model. If your assistant is disappointing, look at the chunks first."),
    ],
  },
];
