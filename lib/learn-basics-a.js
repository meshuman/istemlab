// Learn > "Back to Basics" path, part A: the maths and science behind GeoAI, 3D, VR and mixed reality.
// Theme: AI can draft the code, the model and the scene. People are still needed to understand,
// check, fine-tune and contextualise them, and that takes the fundamentals.
// Reading time is calculated automatically (lib/readtime.js).

import { p, h2, ul, ol, note, qa } from "./blocks";

export const basicsA = [
  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "why-fundamentals-still-matter",
    title: "Back to basics: why maths and science still matter when AI can write the code",
    excerpt: "AI can build a map, a model or a 3D scene in minutes. Knowing whether it is right for a real place still takes a person who understands the fundamentals.",
    topic: "Back to Basics",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "AI is excellent at producing a first draft. It cannot tell you whether the draft is right for your place, your sensor or your users.",
      "People are needed to specify the problem, check the result, tune it and put it in context.",
      "Five foundations carry most of GeoAI, 3D, VR and mixed reality: vectors and transformations, the shape of the Earth, light and optics, statistics, and human perception.",
      "A few habits, such as checking units and testing with known answers, catch most errors.",
    ],
    body: [
      p("A few years ago, building a land cover model or a 3D scene meant weeks of work. Today, an AI assistant can draft the code in a minute, suggest a model and even explain the result in friendly language. This is a genuine step forward, and it is worth using. It also creates a quiet danger: output that looks right, runs without errors and is wrong in ways that only someone with the fundamentals would notice."),
      p("This article opens a learning path called Back to Basics. Its argument is simple. AI can build. People are still required to develop, fine-tune and contextualise. And all three of those depend on understanding the maths and science underneath, which is what the rest of this path teaches, with examples from GeoAI, 3D, virtual reality and mixed reality."),

      h2("What AI does very well"),
      ul(
        "Drafting code and configuration from a short description.",
        "Translating between libraries and languages, for example from one GIS toolkit to another.",
        "Exploring options quickly: three possible models, five possible layouts.",
        "Explaining unfamiliar terms and summarising documentation.",
        "Producing boilerplate that used to take an afternoon.",
      ),
      p("Used well, this removes drudgery and leaves more time for the parts that need judgement. The question is what those parts are."),

      h2("What still needs a person"),
      ol(
        "Specify the problem. AI answers the question you give it. Turning “help us with our fields” into a precise, testable question about which fields, when and how accurately is a human skill.",
        "Check the result. Output must be tested against reality, and that requires knowing what reality should look like.",
        "Fine-tune. Real data is messy, and settings that work on an example often fail on your own region, sensor or season. Adjusting them wisely needs an understanding of why they work.",
        "Contextualise. A result is only useful when it is placed in its setting: what the local conditions are, what the users need, what a mistake would cost.",
      ),

      h2("Three short stories"),
      p("The shadow that looked like a lake. A team asked an AI assistant to help classify water from satellite images. The model produced a clean map. Looking closely, an analyst noticed that the “lakes” followed the north side of every hill. They were shadows, which are dark in the same bands where water is dark. Someone who understood how light and reflectance work saw the pattern immediately. The fix was a different data source and a terrain-aware check, not a bigger model."),
      p("The building that was a thousand times too big. An AI-generated script imported a 3D model of a campus into a game engine. It looked fine in the editor until the team tried a VR walkthrough, where every door was the size of a skyscraper. The model had been exported in millimetres, and the engine expects metres. A team member who knew to check units found it in a minute."),
      p("The scene that made people ill. A beautiful VR demonstration looked excellent on a monitor. In the headset, several visitors felt unwell within minutes. The scene updated slowly, and moved the viewpoint smoothly while the visitor’s body stayed still. Nothing was wrong with the code. What was missing was an understanding of how the human sense of balance and vision work together."),

      h2("The five foundations"),
      ul(
        "Vectors and transformations. The maths of position, direction, rotation and scale, behind every map, image and 3D scene.",
        "The shape of the Earth. Datums, coordinate systems and why distances on a globe are not distances on a page.",
        "Light and optics. How sunlight, the atmosphere and cameras shape what a sensor records.",
        "Statistics and uncertainty. How to measure whether a map or model is right, and how sure you can be.",
        "Human perception. How eyes, ears and the inner ear respond to a virtual or augmented world.",
      ),
      p("A sixth idea runs through all of them: how machine learning models actually learn, because understanding that makes it far easier to know what a model can and cannot be trusted to do."),

      h2("How to learn the basics without becoming a mathematician"),
      p("You do not need a degree. You need working intuition, which grows fastest through small, concrete experiments."),
      ul(
        "Learn through a project. Pick a real problem, such as mapping crops or building a campus tour, and learn each idea when you meet it.",
        "Play with numbers. Rotate a point by hand, then in code, and compare. Measure a distance three ways and see why they differ.",
        "Ask AI to explain, then verify. Use it as a patient tutor, and confirm what it says against a trusted textbook or a quick calculation.",
        "Keep a notebook of mistakes. Each error you understand makes the next one easier to spot.",
      ),

      h2("A habit that protects you"),
      p("Before trusting any result, run four quick checks."),
      ol(
        "Units: are lengths in metres, feet or degrees, and are angles in degrees or radians?",
        "Known answer: does the code give the right result for a case where you already know the answer?",
        "Extremes: what happens at zero, at the edge of the map and at very large values?",
        "Picture: does the output look right when you draw it, and does it match what you know about the place?",
      ),
      note("If an AI tool gives you code you do not understand, ask it to explain every assumption. Then test those assumptions yourself."),

      h2("What this path covers"),
      ul(
        "Coordinates, vectors and transformations.",
        "Light, spectra and the physics of remote sensing.",
        "The Earth’s shape, datums and distance.",
        "Statistics and uncertainty for maps and models.",
        "Optics and photogrammetry: how cameras capture 3D.",
        "Human perception in VR and mixed reality.",
        "How machine learning models learn.",
        "A hands-on tutorial that puts the maths into code, and a guide to checking AI-generated code.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Do I need advanced mathematics to work in GeoAI or VR?", "No. You need solid basics and the habit of checking: vectors, simple trigonometry, an intuition for statistics and units. Advanced topics can be learned when a project calls for them."],
        ["Can’t AI just explain the maths to me when I need it?", "It can, and it is a good tutor. But you need enough knowledge to recognise when an explanation or a result is wrong. That is exactly what the basics give you."],
        ["Where should a complete beginner start?", "With this article, then coordinates and transformations, then whichever of light, the Earth’s shape or perception matches your work most closely."],
        ["How do I know when AI output is wrong?", "You will not always know at a glance. Use known-answer tests, unit checks, comparison with a trusted tool and your own sense of what the place should look like."],
      ),
      p("AI is a remarkable assistant. Pair it with a person who understands the fundamentals, and you get speed with judgement. Leave the fundamentals out, and you get speed with unexamined mistakes."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "vectors-coordinates-transformations",
    title: "Vectors, coordinates and transformations: the maths behind every map and 3D scene",
    excerpt: "Points, directions, rotations and scale: the small set of ideas that sits under GIS, game engines, VR headsets and AR.",
    topic: "Back to Basics",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "Every location, pixel and 3D vertex is a list of numbers, and a vector adds direction and length to it.",
      "The dot product measures alignment, and the cross product gives a perpendicular direction.",
      "Rotation, scale and translation can be combined into one matrix, but the order matters.",
      "Most bugs come from mixed units, swapped axes and different coordinate frames.",
    ],
    body: [
      p("Open a GIS, a game engine or a VR headset’s tracking system, and you find the same small set of mathematical ideas doing the work. A raster pixel is placed on the Earth by a transformation. A 3D building is placed in a scene by a transformation. A headset knows where your head is and which way it faces by a transformation. If you understand these few ideas, a great deal of GeoAI, 3D and mixed reality stops being mysterious."),
      p("This article introduces them in plain language, with small numbers you can check by hand, and finishes with the bugs they cause most often."),

      h2("Points and vectors"),
      p("A point is a position, such as (3, 4) on a flat map or (3, 4, 2) in 3D space with a height. A vector is a displacement: an arrow with a direction and a length. The two are closely linked. Subtract one point from another and you get the vector that leads from the first to the second."),
      ul(
        "From (1, 2) to (4, 6), the vector is (3, 4): three to the right and four up.",
        "Its length comes from Pythagoras: the square root of 3 squared plus 4 squared, which is 5.",
        "Dividing a vector by its length gives a unit vector, a pure direction of length 1. This is called normalising.",
      ),
      p("In 3D the idea is identical, with a third number, and the length uses all three squared values."),

      h2("The dot product: how aligned are two directions?"),
      p("Multiply the matching numbers of two vectors and add them up, and you get the dot product. For unit vectors, it equals the cosine of the angle between them. That single number tells you a lot."),
      ul(
        "1 means the two directions are the same. 0 means they are at right angles. Minus 1 means opposite.",
        "In graphics, the dot product of a surface’s normal and the direction of the light decides how bright the surface looks.",
        "In VR and AR, it tells you whether an object is in front of or behind you, and whether a surface faces the camera.",
        "In AI, the same calculation, applied to embeddings, measures how similar two meanings are.",
      ),

      h2("The cross product: a direction at right angles"),
      p("In 3D, the cross product of two vectors gives a third vector perpendicular to both. Its length equals the area of the parallelogram they span. It is how software finds the normal of a triangle, which decides which way a surface faces and how it is lit."),
      p("In 2D mapping, a small version of the same idea tells you the orientation of a polygon. Walk around its corners, and the sign of the result says whether you went clockwise or anticlockwise. Many GIS operations care about this, because a polygon drawn the wrong way can be treated as a hole."),

      h2("Moving things around: translate, scale, rotate"),
      p("Three basic operations place anything in a scene."),
      ul(
        "Translation slides every point by the same amount.",
        "Scaling stretches or shrinks distances from a centre.",
        "Rotation turns points around an axis, preserving distances and angles.",
      ),
      p("A rotation by an angle around the vertical axis uses sine and cosine. Rotating the point (1, 0, 0) by 90 degrees about that axis gives (0, 1, 0): the point swings a quarter-turn. The length stays 1, as it should, which is a useful check."),

      h2("Matrices: many steps in one"),
      p("A matrix is a grid of numbers that performs a transformation when it multiplies a vector. Matrices can be multiplied together to combine steps, so a whole chain of moves becomes one matrix that is applied to millions of points quickly. This is why graphics hardware is built around matrix multiplication."),
      note("Order matters. Rotate a point and then slide it, and you reach a different place than if you slide it first and then rotate. Always check the order when you combine transformations."),
      p("A small example shows it. Take the point (0, 1, 0). Rotate it 90 degrees about the x axis and then 90 degrees about the z axis, and it ends up at (0, 0, 1). Reverse the order, and it ends up at (−1, 0, 0). Same two rotations, different result."),

      h2("Homogeneous coordinates and the 4 by 4 matrix"),
      p("Translation cannot be written as a simple 3 by 3 matrix. A neat trick fixes this: add a fourth number, always 1, to every point. Then rotation, scale and translation all fit in a single 4 by 4 matrix. This is why game engines, VR runtimes and mapping tools use 4 by 4 matrices everywhere. When you read about “model, view and projection matrices”, they are three of these, chained."),

      h2("Coordinate frames: whose numbers are these?"),
      p("The same point has different coordinates depending on whose point of view you use. A chair has coordinates in the room, in the building and on the Earth. A headset has its own frame, and so does each controller."),
      ul(
        "Local frame: measured from an object’s own origin, for example a doorway from the door.",
        "World frame: shared by the whole scene or map.",
        "Camera or head frame: centred on the viewer, with the viewing direction as one axis.",
      ),
      p("Much of mixed reality is the careful conversion between frames: where is the controller relative to the room, where is the room relative to the building and where is the building on the Earth?"),

      h2("Orientation and a word on quaternions"),
      p("A headset reports position (three numbers) and orientation. Orientation can be given as three angles, but angles have a flaw called gimbal lock, where two axes line up and a degree of freedom is lost. Quaternions, a set of four numbers, avoid this and blend smoothly between orientations, so tracking systems prefer them. You rarely need to compute with them by hand, but you should know why they exist when you see them in a data format."),

      h2("The same ideas in GIS"),
      p("A geotransform, the small set of numbers stored with every raster, is a transformation. It converts a pixel’s column and row into map coordinates. If the top-left corner is at x 500,000 and y 3,100,000 metres, with 10 metre pixels, then the centre of the pixel at column 250 and row 100 sits at x 502,505 and y 3,098,995. Notice that y goes down as row goes up, because image rows count downwards while map northings count upwards. That one difference causes countless flipped images."),

      h2("The bugs these ideas cause"),
      ul(
        "Mixed units: millimetres versus metres, or degrees versus radians. Trigonometric functions expect radians.",
        "Swapped axes: latitude then longitude versus x then y, which is longitude then latitude.",
        "Handedness: some systems are right-handed and others left-handed, so a model can appear mirrored.",
        "Row and column order: arrays are indexed by row first, but maps by x first.",
        "Forgetting the order of transformations, so objects appear in the wrong place.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Why do graphics and VR use matrices instead of simple formulas?", "Because matrices combine many steps into one, and graphics hardware is designed to apply them to millions of points in parallel."],
        ["Do I need to calculate this by hand?", "Rarely. Libraries do it for you. But doing a few small examples by hand gives you the intuition to spot a wrong result."],
        ["What is the difference between a point and a vector?", "A point is a position. A vector is a displacement, with direction and length. Software often stores both as lists of numbers, which is why they get confused."],
        ["How can I test a transformation?", "Apply it to a point whose result you know, check that lengths and angles are preserved when they should be, and reverse it to see whether you return to the start."],
      ),
      p("Positions, directions and transformations are the grammar of spatial computing. Learn them once, and every map, scene and headset you meet will make more sense."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "light-spectra-remote-sensing-physics",
    title: "Light, spectra and the physics behind remote sensing",
    excerpt: "Why vegetation looks bright in near-infrared, why shadows look like water and why a model trained on one image can fail on another.",
    topic: "Back to Basics",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "Satellites do not see objects. They measure light, and that light has travelled through the Sun, the atmosphere and the surface.",
      "Different materials reflect and absorb different wavelengths, giving each a spectral signature.",
      "Shadows, haze, sun angle and season change the numbers without changing the land.",
      "Ratios such as NDVI cancel some of these effects, which is why they are so popular.",
    ],
    body: [
      p("A satellite image looks like a photograph, so it is easy to forget that it is a measurement. Every pixel is a number that says how much light of a certain colour arrived at a sensor. Between the Sun and that sensor, the light was reflected, absorbed, scattered and filtered. Everything in remote sensing, and everything that a machine learning model learns from these images, rests on that physics."),
      p("You do not need to be a physicist to use it. A grasp of a few ideas will help you choose the right data, understand strange results and explain to others why a model works or fails."),

      h2("Light as a wave"),
      p("Light is an electromagnetic wave, and its colour is set by its wavelength. Visible light spans roughly 400 to 700 nanometres, from violet to red. Beyond red lies the near-infrared, then short-wave infrared, then thermal infrared. Beyond violet lies ultraviolet. Radio waves and microwaves, used by radar, have much longer wavelengths."),
      ul(
        "Visible, about 400 to 700 nm: what we see.",
        "Near-infrared, about 700 to 1,300 nm: invisible to us, but strongly reflected by healthy leaves.",
        "Short-wave infrared, about 1,300 to 2,500 nm: sensitive to water in plants, soil and snow.",
        "Thermal infrared: emitted heat, which measures temperature.",
        "Microwaves: used by radar, which supplies its own illumination.",
      ),

      h2("What happens when light hits the ground"),
      p("When sunlight reaches a surface, some of it is reflected, some is absorbed and some passes through. The share reflected at each wavelength is the surface’s reflectance. A sensor mostly measures reflected light, so reflectance is the quantity that links the image to the land."),

      h2("Spectral signatures"),
      p("Each material reflects different amounts at different wavelengths, giving it a characteristic curve called a spectral signature."),
      ul(
        "Healthy vegetation absorbs red and blue light for photosynthesis and reflects green, so leaves look green. Inside the leaf, cell structure scatters near-infrared strongly, so vegetation is very bright there. The sharp jump between red and near-infrared is the vegetation edge.",
        "Water absorbs near-infrared and short-wave infrared almost completely, so it is very dark in those bands, and this is why water is easy to find with them.",
        "Bare soil reflects gradually more with longer wavelengths, and its brightness changes with moisture and mineral content.",
        "Snow is very bright in visible light, and dark in short-wave infrared, which helps tell it from cloud.",
        "Built surfaces vary widely, from dark asphalt to bright concrete and roofs.",
      ),

      h2("Why indices such as NDVI work"),
      p("The Normalized Difference Vegetation Index uses the red and near-infrared bands, where healthy vegetation is most different from everything else. Because it is a ratio, brightness that affects both bands equally, such as overall illumination, mostly cancels out. This is why NDVI compares dates and places better than a single raw band does. It also explains its limits: very dense vegetation saturates the index, and soil can shift the values in sparse crops."),

      h2("The atmosphere gets in the way"),
      p("Between the surface and the sensor lies air, with gas, water vapour, dust and smoke. It affects the signal in two ways."),
      ul(
        "Scattering. Short wavelengths scatter most, which is why the sky is blue and distant hills look hazy. Haze adds a veil of brightness to dark features.",
        "Absorption. Water vapour, carbon dioxide and ozone absorb at specific wavelengths, which is why sensors choose bands in the clear “windows” between them.",
      ),
      p("Atmospheric correction estimates and removes these effects to give surface reflectance, which is comparable between dates. This is why most analysts prefer corrected products over raw top-of-atmosphere data."),

      h2("Sun angle, shadows and season"),
      p("The same field looks different at different times. A low winter Sun casts long shadows, while a high summer Sun casts short ones. Sloping ground facing the Sun is bright, and facing away it is dark. Shadows lower brightness in every band, and a dark pixel in a shadow can resemble water. This is a classic cause of false water in mountain regions, and a reason to use terrain data when mapping."),
      p("Seasons change the land too. A crop looks like bare soil at planting, green at its peak and brown at harvest. A model that has only seen the peak will struggle at other times."),

      h2("Radar is a different kind of measurement"),
      p("Radar satellites send out microwaves and record what returns, which is called backscatter. Because they provide their own illumination and microwaves pass through cloud, they work at night and in bad weather. What they measure is different from light."),
      ul(
        "Smooth surfaces such as calm water reflect the signal away from the sensor, so they look dark.",
        "Rough surfaces such as ploughed fields, forest and cities scatter more back, so they look brighter.",
        "Wavelength matters: longer waves penetrate vegetation more deeply.",
        "Images contain a grainy texture called speckle, which needs careful filtering.",
      ),

      h2("What this means for machine learning"),
      ul(
        "A model learns the numbers, not the land. If the numbers shift because of haze or sun angle, a model can fail without the land changing at all.",
        "Training on one sensor and applying to another is risky, because their bands differ slightly.",
        "Using surface reflectance, and adding information such as terrain and season, makes models more robust.",
        "When a result looks odd, ask what the physics predicts. Is this a shadow? Is it haze? Is it a different season?",
      ),
      note("When you find a pattern that follows hills, clouds or image edges, suspect the physics before you suspect the land."),

      h2("Frequently asked questions"),
      qa(
        ["Why is vegetation so bright in near-infrared?", "Because the internal structure of healthy leaves scatters near-infrared light strongly, and the leaf’s pigments do not absorb it. This is not visible to the eye, but sensors measure it clearly."],
        ["What is the difference between radiance and reflectance?", "Radiance is the light a sensor measures, and it depends on the Sun and atmosphere. Reflectance is the fraction of incoming light that a surface reflects, which is a property of the surface itself."],
        ["Why do I need to correct for the atmosphere?", "So that images from different dates and places can be compared. Without correction, haze and sun angle can change values as much as real changes on the ground."],
        ["Can radar replace optical imagery?", "Not entirely. Radar shines when cloud is a problem or when you need to measure water, roughness or movement. Optical imagery is better for colour and for vegetation health. Many projects use both."],
      ),
      p("Remote sensing is applied physics. When you keep the journey of the light in mind, from the Sun to the surface to the sensor, odd results become clues, and your choices of data and methods become much more confident."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "earth-shape-datums-geodesy",
    title: "The Earth is not a sphere: datums, heights and distance for GeoAI",
    excerpt: "Why coordinates need a datum, why GPS height is not sea level, and how to measure distances on a curved planet.",
    topic: "Back to Basics",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "The Earth is a slightly flattened, lumpy ball. Maps use a reference ellipsoid and a datum to describe it.",
      "The same coordinates in two datums can differ by tens or hundreds of metres.",
      "Ellipsoidal height from GPS is not height above sea level, and the difference can be many metres.",
      "Use the haversine or a proper geodesic for distances in latitude and longitude, never plain Pythagoras.",
    ],
    body: [
      p("School teaches that the Earth is a sphere. It is close, and for many purposes the approximation is fine. But the moment you measure distances across a province, fly a drone with centimetre accuracy or overlay a 3D model on the real world in mixed reality, the details start to matter. This article explains the shape of the Earth as mapmakers see it, and the practical consequences for GeoAI, 3D and VR."),

      h2("A flattened planet"),
      p("The Earth spins, and the spin makes it bulge at the equator and flatten at the poles. The equatorial radius is about 6,378 kilometres, and the polar radius is about 6,357 kilometres, a difference of roughly 21 kilometres. The best simple shape for this is an ellipsoid, a sphere squashed from the top and bottom. The amount of flattening is about one part in 298."),
      p("Surveyors define a reference ellipsoid, with an exact size and shape, as the mathematical model of the Earth. Latitude and longitude are measured on that ellipsoid."),

      h2("What a datum is"),
      p("A reference ellipsoid is not enough. You also have to fix it to the real Earth: where its centre is, and how it is oriented. That choice is called a geodetic datum. Different datums are different choices."),
      ul(
        "WGS 84 is a global datum, centred on the Earth’s centre of mass. GPS uses it, and most web maps assume it.",
        "Many countries and regions have local datums, chosen to fit their own territory best, and many old maps and survey records use them.",
        "Modern national systems are increasingly tied to global ones, but older data may still carry the local datum.",
      ),
      p("Why does this matter? Because the same latitude and longitude in two different datums can describe places tens or even hundreds of metres apart. If you combine data from two sources without converting, features will be shifted against each other, and a model trained on one may misalign with the other."),

      h2("Three kinds of height"),
      p("Height is more complicated than it seems."),
      ul(
        "Ellipsoidal height is the height above the reference ellipsoid. It is what a GPS receiver computes directly.",
        "The geoid is a surface that follows mean sea level and extends under the continents, shaped by gravity. It is lumpy, rising and falling by up to about a hundred metres relative to the ellipsoid across the globe.",
        "Orthometric height is the height above the geoid, which is what we normally mean by “height above sea level”, and what maps and elevation models usually show.",
      ),
      p("The difference between ellipsoidal and orthometric height at a place is called the geoid undulation, and it can be many metres. A GPS reading that says you are 1,400 metres up may correspond to a very different elevation on a map, unless a geoid model is applied. Mixing the two is a classic source of errors in terrain work, flood models and drone mapping."),

      h2("Why you cannot use Pythagoras on latitude and longitude"),
      p("A degree of latitude is nearly the same length everywhere, about 111 kilometres. A degree of longitude is not. It shrinks as you move away from the equator, in proportion to the cosine of the latitude. At about 27.7 degrees north, near Kathmandu, one degree of longitude is only about 98.6 kilometres."),
      p("If you treat degrees as flat x and y values, then you will overestimate east-west distances at every latitude away from the equator. Between Kathmandu and Pokhara, the real distance, along the surface of the globe, is about 142 kilometres. Multiplying the difference in degrees by 111 on both axes gives about 158 kilometres, an error of 11 percent."),

      h2("Distance on a sphere: the haversine"),
      p("For a good approximation, treat the Earth as a sphere with a mean radius of about 6,371 kilometres and use the haversine formula. It computes the great-circle distance, the shortest path over the surface, from two latitude and longitude pairs. It is accurate to roughly half a percent, which is plenty for many tasks. For survey-grade work, use a geodesic algorithm on the ellipsoid, available in common libraries."),
      ol(
        "Convert latitudes and longitudes to radians.",
        "Compute the differences in latitude and longitude.",
        "Apply the haversine formula, which combines sines of half the differences with the cosines of the two latitudes.",
        "Multiply the resulting angle by the Earth’s radius.",
      ),

      h2("How many decimals are enough?"),
      p("Coordinates in decimal degrees carry more precision than they appear. The fifth decimal place of a degree is roughly 1.1 metres, and the seventh is about one centimetre. Storing coordinates with six or seven decimals is plenty for almost every task. Reporting a dozen decimals suggests a precision that the measurement never had."),

      h2("What this means for 3D, VR and mixed reality"),
      ul(
        "Floating-point precision. Computers store numbers with limited digits. A 32-bit number near five million metres can resolve only about half a metre, so objects far from the scene’s origin visibly jitter. The fix is to use a local origin near the area of interest, and store global coordinates separately in higher precision.",
        "Alignment with the real world. Mixed reality that must line up with real buildings needs consistent datums and reliable positioning, and may need extra reference points.",
        "Scale. A model built in one coordinate system and imported into another can change size or orientation if units and axes differ.",
        "Terrain. Elevation models and GPS heights must agree on which kind of height they use.",
      ),

      h2("A checklist for any project"),
      ol(
        "Record the datum and coordinate system of every dataset you receive.",
        "Convert everything to one system before combining.",
        "Know which height each dataset uses, and apply a geoid model if you need to compare.",
        "Use a projected system suited to your region for measuring, and a geodesic or haversine formula for long distances in degrees.",
        "Test with two points whose real distance you know.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Is WGS 84 the same as the system used by Google Maps?", "They use the same datum, but display maps in a projected system called Web Mercator, which distorts areas near the poles. Stored coordinates are usually WGS 84 latitude and longitude."],
        ["Why does my GPS height not match the elevation on my map?", "GPS gives height above the ellipsoid. Maps show height above sea level, which follows the geoid. The two differ by the geoid undulation, which can be many metres."],
        ["When should I use a geodesic instead of the haversine?", "When you need accuracy better than a few tenths of a percent, for example in surveying, or over very long distances. For general analysis, the haversine is fine."],
        ["Does the datum matter for satellite imagery?", "Yes. Imagery is placed on the ground using a datum. Mixing images or vectors from different datums without converting will shift features against each other."],
      ),
      p("The Earth’s shape is not an obscure detail for surveyors alone. It affects any project in which data from different sources must agree. Know your datum, know your height, and test your distances, and a whole family of subtle errors disappears."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "statistics-uncertainty-for-geoai",
    title: "Statistics and uncertainty: how to tell whether a map or model is right",
    excerpt: "Accuracy, precision, recall and why a model that is 95 percent accurate can still be useless.",
    topic: "Back to Basics",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "Every map and model is an estimate. The useful question is how wrong it is, and where.",
      "Accuracy alone can mislead when classes are rare. Look at precision, recall and the confusion matrix.",
      "Nearby places are similar, so random test splits flatter models. Test on whole areas the model has not seen.",
      "Report uncertainty alongside every result, so that users can decide how far to trust it.",
    ],
    body: [
      p("A land cover map, a flood forecast and a building detector all share a quiet truth: they are estimates. They are made from imperfect data, by imperfect models, about a world that changes. The question is never whether such a product is perfect. It is how wrong it is, in which places and in what ways, and whether that is acceptable for the decision it supports."),
      p("This is the territory of statistics. You do not need advanced theory to use it well. A handful of ideas will protect you from the most common and most expensive mistakes."),

      h2("Types of error"),
      ul(
        "Random error: small, unpredictable variation, such as sensor noise. It tends to average out over many measurements.",
        "Systematic error, or bias: a consistent tilt in one direction, such as a model that always underestimates the size of forests. It does not average out, and is often more dangerous.",
        "Blunders: outright mistakes, such as a misaligned layer or a wrong unit.",
      ),

      h2("Sampling: who is in the test?"),
      p("To know how good a map is, you compare it with reference data, usually collected in the field or from careful interpretation of high-resolution images. This reference sample must be representative. If you only check places near roads, because they are easy to reach, you will learn how well the map works near roads. Good samples are spread across all classes and regions, and chosen by a clear, repeatable method."),

      h2("The confusion matrix"),
      p("The foundation of accuracy assessment is a table that compares what the model said with what was true. Take a flood-mapping test of 1,000 reference pixels, where 50 are truly flooded."),
      ul(
        "30 flooded pixels are correctly found: true positives.",
        "20 flooded pixels are missed: false negatives.",
        "10 dry pixels are wrongly marked as flooded: false positives.",
        "940 dry pixels are correctly left alone: true negatives.",
      ),
      p("From these four numbers come the measures that matter."),

      h2("Accuracy, precision and recall"),
      ul(
        "Overall accuracy: the share of all pixels that are right. Here (30 + 940) divided by 1,000, which is 97 percent.",
        "Recall, also called producer’s accuracy: of the pixels that were truly flooded, how many did the model find? Here 30 of 50, which is 60 percent.",
        "Precision, also called user’s accuracy: of the pixels the model called flooded, how many really were? Here 30 of 40, which is 75 percent.",
        "F1 score: a single number that balances precision and recall. Here about 0.67.",
      ),
      p("Notice the gap. The model scores 97 percent accuracy, yet it misses 40 percent of the flooded area. For a relief team that needs to find flooded villages, recall is the number that counts."),
      note("A model that always says “no flood” would score 95 percent accuracy on this sample and find nothing. When a class is rare, overall accuracy tells you very little."),

      h2("Why random splits flatter your model"),
      p("A rule of geography, often called Tobler’s first law, says that everything is related to everything else, but near things are more related than distant things. Pixels next to each other tend to look alike and belong to the same class. If you split your labelled pixels at random into training and test sets, almost every test pixel has a near-identical neighbour in the training set. The model is partly being tested on what it has already seen, and the score is too high."),
      p("The remedy is to separate whole areas. Keep entire blocks, fields or districts out of training, and test on them. The score will usually drop, and the lower number is the honest one."),

      h2("How sure can you be? Sample size and confidence"),
      p("Any accuracy figure is itself an estimate, based on a sample. With a small sample, it is uncertain. As a rough guide, an accuracy measured on 100 samples can easily be off by several percentage points either way, while one measured on 1,000 samples is far tighter. When you report accuracy, report how many samples it comes from, and where possible a range, not just a single number."),

      h2("Bias and variance, overfitting and underfitting"),
      ul(
        "Underfitting: the model is too simple, and misses real patterns. It does poorly on both training and test data.",
        "Overfitting: the model memorises quirks of the training data. It does very well on training data and poorly on new data.",
        "The goal is a model that generalises, performing about as well on unseen areas as on the training areas.",
      ),
      p("A big gap between training and test scores is the standard warning sign of overfitting."),

      h2("Uncertainty is information"),
      ul(
        "Many models can output a probability for each pixel, not just a label. Mapping that probability shows where the model is unsure.",
        "Calibration checks whether “80 percent sure” really means right four times out of five.",
        "Low-confidence areas are the best places to send a field team or collect more labels.",
        "Publish the uncertainty with the map. A map that admits where it is weak is more useful, not less.",
      ),

      h2("A reporting checklist"),
      ol(
        "State the date, the sensor and the area the result covers.",
        "Describe how the reference sample was chosen, and its size.",
        "Give the confusion matrix, with precision and recall for each class, not only overall accuracy.",
        "Explain how the test avoided leakage from the training area.",
        "Say where the model is known to struggle.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["What is a good accuracy for a land cover map?", "There is no universal number. It depends on the classes, the imagery and the use. Many operational maps report overall accuracy in the 80s or 90s, but you should check the per-class numbers and how the test was done."],
        ["Should I use precision or recall?", "It depends on the cost of each mistake. If missing something is costly, such as a flooded village, favour recall. If a false alarm is costly, such as sending a crew to inspect a building that is fine, favour precision."],
        ["How many reference samples do I need?", "Enough to cover every class and region, with the rarest classes represented properly. Many guidelines suggest at least 50 samples per class as a minimum, and more for important or variable classes."],
        ["Why did my model score 99 percent and then fail in the field?", "Common causes are leakage between training and test data, an unrepresentative test sample or a change in conditions, such as season or sensor, between training and use."],
      ),
      p("Statistics is the discipline of being honestly uncertain. It does not make a map worse to say how far it can be trusted. It makes it something a decision-maker can actually rely on."),
    ],
  },
];
