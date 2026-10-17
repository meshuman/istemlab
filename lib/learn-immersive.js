// Learn > "Immersive 3D, VR and AR" path: capture, formats, optimisation, publishing and training.
// `seed: true` = drafted copy that still needs a subject-matter review before it is promoted.
// Reading time is calculated automatically (lib/readtime.js).

import { p, h2, ul, ol, code, note, qa } from "./blocks";

export const immersive = [
  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "guides",
    slug: "capture-a-real-place-field-checklist",
    title: "Capturing a real place in 3D: a field checklist",
    excerpt: "Everything to decide, check and bring before you scan, photograph or fly, so you do not have to return to the site.",
    topic: "3D & VR",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "Decide what the model is for first. The purpose sets the detail, the accuracy and the method.",
      "Permissions, weather, light and safety are part of the plan, not afterthoughts.",
      "Overlap, control points and a quick check on site prevent most failed captures.",
      "Write down the deliverables and the handover before the first photo is taken.",
    ],
    body: [
      p("Capturing a real place, whether a heritage temple, a hotel, a factory or a stretch of river, is one of the few jobs in digital work where you cannot simply fix a mistake later. If the light was wrong, the drone battery died or a wall was missed, the only remedy is to go back. A good checklist is the cheapest insurance there is."),
      p("This guide follows a capture from first question to handover. It suits drone photography, ground photography and laser scanning, and notes where they differ."),

      h2("Step 1: define the purpose"),
      p("Before anything else, write one sentence about how the model will be used. A virtual tour for visitors, a record for conservation, a base for a digital twin and a measured survey need very different things."),
      ul(
        "Tour or marketing: it needs to look beautiful and load quickly. Moderate accuracy is fine.",
        "Conservation record: it needs high detail, consistent lighting and careful documentation of the date and method.",
        "Measurement and planning: it needs surveyed control points and a stated accuracy.",
        "Training or simulation: it needs correct scale and clean geometry that an engine can use.",
      ),
      p("Then write the smallest feature that must be visible, such as a carved detail, a crack or a doorway, and the accuracy needed in centimetres. These two numbers decide almost every later choice."),

      h2("Step 2: choose the method"),
      ul(
        "Drone photogrammetry: efficient for roofs, facades, terrain and large outdoor sites. It gives colour and good detail, and needs open sky and good light.",
        "Ground photogrammetry: for objects, interiors and details that a drone cannot reach. It needs patience and consistent coverage.",
        "Terrestrial laser scanning: precise geometry, fast on large interiors, and indifferent to poor light. It costs more and records colour separately.",
        "Mobile LiDAR on a phone or handheld scanner: quick, and suited to rooms and small sites, with lower accuracy.",
        "360 degree photography: for immersive tours where measurement does not matter.",
      ),
      p("Many projects combine two, for example a drone for the exterior and a scanner for the interior, tied together by shared control points."),

      h2("Step 3: permissions and people"),
      ul(
        "Owner or authority consent in writing, including what you may publish.",
        "Aviation rules for drones: registration, permitted areas, height limits, and the need for a licensed pilot. Rules differ by country and change often, so check locally.",
        "Heritage and religious sites: follow their customs, ask about restricted areas and avoid disturbing worship or visitors.",
        "Privacy: plan to blur faces and number plates, or to capture when the place is empty.",
        "Neighbours and the public: tell people what you are doing, especially when flying.",
      ),

      h2("Step 4: weather, light and timing"),
      ul(
        "Overcast days give soft, even light and are ideal for photogrammetry. Hard shadows that move during the capture confuse matching.",
        "Avoid wind for drones, rain for equipment, and glare on water and glass.",
        "Plan for a time of day when the sun is high enough to avoid long shadows, and when the site is quiet.",
        "Have a backup day. Weather often decides.",
      ),

      h2("Step 5: equipment checklist"),
      ul(
        "Cameras or drones, with spare batteries, memory cards and chargers, and a power bank.",
        "Tripod, lens cloths, lens hoods and a spare lens or camera.",
        "Laser scanner, targets or spheres, and a stable base if scanning.",
        "Ground control: marked targets, a GNSS receiver or a total station, and a tape or laser distance meter.",
        "A scale bar or known-length object in the scene for checking.",
        "Tablet or laptop with enough storage for a preview on site.",
        "Safety gear: high-visibility clothing, helmet, first-aid kit and a radio or phone.",
      ),

      h2("Step 6: capture settings that matter"),
      ol(
        "Use manual, fixed settings, so that exposure and focus do not change between photos. Lock white balance too.",
        "Shoot sharp images: a fast enough shutter speed, low enough ISO and a steady camera.",
        "Overlap generously: about 70 to 80 percent along the direction of travel and 60 to 70 percent between lines for drone mapping, and about 60 to 80 percent when walking around an object.",
        "Capture from several heights and angles. Add oblique views for facades and details.",
        "For laser scanning, place stations so each overlaps the last, and so that every surface is seen from at least two positions.",
        "Photograph the hard parts twice: reflective surfaces, narrow passages and anything partly hidden.",
      ),

      h2("Step 7: control points and scale"),
      p("Without reference points, a model has the right shape but may sit in the wrong place and at the wrong scale. Spread control points across the whole site, including the edges and different heights, and measure them with a method more accurate than the accuracy you promise. Keep a few as check points that are not used in processing, so that you can test the result honestly."),

      h2("Step 8: check before you leave"),
      ul(
        "Open a few photos at full size on a screen. Are they sharp and well exposed?",
        "Run a quick, low-quality processing pass on site if you can, to find holes in coverage.",
        "Check the count: does the number of images or scans match the plan?",
        "Walk the site one more time, looking for anything you did not capture.",
        "Back up all data to two places before packing up.",
      ),

      h2("Step 9: record and hand over"),
      p("Keep a simple capture log: date, time, weather, equipment, settings, who did what and any problems. It is invaluable months later, when someone asks why part of the model looks different. Agree the deliverables in advance too."),
      ul(
        "Formats: for example a web-ready model, a full-detail model, point clouds and an orthomosaic.",
        "Coordinates and units: the system, the height reference and the units, stated clearly.",
        "Accuracy: what was measured against what, with the numbers.",
        "Licence and usage: who owns the data and how it may be used.",
        "Storage: where raw data will be kept, and for how long.",
      ),

      h2("A short worked example: a hilltop temple"),
      p("A conservation team wants a record of a small temple and a model for a visitor centre. They define two outputs: a full-detail model for the archive and a lightweight one for the web. They choose a drone for the roofs and surroundings, ground photography for carved doorways and a handheld scanner for the interior. They get written consent from the temple committee, avoid festival days and plan to capture early, when worshippers are few. They fly under overcast skies at 70 percent overlap, place eight control targets on the courtyard and survey them, and shoot the carvings twice at different distances. Before leaving, they process a quick preview, find that the north wall is thin on photos and take 40 more. The preview model closes without gaps, and the log and the control measurements go into the archive."),

      h2("Frequently asked questions"),
      qa(
        ["How many photos do I need?", "It depends on the size and the detail. A small building may need a few hundred photos, and a large site thousands. Coverage and overlap matter more than the count."],
        ["Can I capture with only a phone?", "Yes, for objects, rooms and small sites. Keep settings fixed, move steadily and cover from many angles. For measured work, add control points."],
        ["How long does processing take?", "From minutes for a small model to many hours or days for a large site, depending on the number of images and the computer. Plan for it in your schedule."],
        ["Do I need control points for a visitor tour?", "Not for appearance. You do if the model must sit accurately on a map, be measured or be combined with other data."],
      ),
      p("A careful capture feels slow on the day and saves weeks afterwards. Plan the purpose, the permissions, the light and the checks, and the model you build later will be one that you trust."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "3d-file-formats-explained",
    title: "3D file formats explained: glTF, OBJ, point clouds and 3D Tiles",
    excerpt: "Which format to use for web, headsets, scans and city-scale data, and why units and axes can turn a perfect model upside down.",
    topic: "3D & VR",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "glTF (and its binary form GLB) is the best default for sharing 3D on the web and in AR.",
      "Scans produce point clouds and meshes, which need different formats and handling.",
      "Large geospatial scenes use streaming formats such as 3D Tiles.",
      "Units, axis directions and handedness differ between tools, and are a leading cause of broken imports.",
    ],
    body: [
      p("A 3D file is just numbers: points in space, how they connect into surfaces, and how those surfaces are coloured. The trouble is that there are dozens of ways to write those numbers, each created for a different tool or purpose. Choosing the right format affects file size, loading speed, quality and whether a model survives its journey from one program to another."),
      p("This article explains the formats you are most likely to meet in GeoAI, virtual reality and mixed reality, and gives you a simple way to choose."),

      h2("What is inside a 3D file"),
      ul(
        "Geometry: vertices (points) and the faces, usually triangles, that join them into a surface.",
        "Materials: how the surface reacts to light, such as its colour, roughness and shine.",
        "Textures: images wrapped onto the surface, which carry most of the visible detail.",
        "Structure: names, hierarchy and positions of parts, for example a building made of many objects.",
        "Extras: animation, cameras, lights and metadata.",
      ),

      h2("Formats for sharing and display"),
      ul(
        "glTF and GLB. An open standard often called the JPEG of 3D. glTF is a text description with separate files, and GLB packs everything into one file. It supports modern physically based materials, animation and compression, and loads quickly. It is the best default for the web, AR and many engines.",
        "USDZ. Apple’s format for AR Quick Look on iPhones and iPads. It is based on Pixar’s USD. Many tools convert between glTF and USDZ.",
        "OBJ. An old, simple, widely supported text format for geometry and basic materials. It is easy to read but has no animation, and files are large.",
        "FBX. A proprietary format common in games and animation pipelines. It carries animation and rigs, but varies between versions.",
        "STL. A very simple surface format used for 3D printing. It has no colour or textures.",
      ),

      h2("Formats for scans and survey data"),
      ul(
        "PLY. A flexible format for point clouds and meshes, popular in research and scanning software.",
        "LAS and LAZ. The standard for laser scanning and aerial LiDAR point clouds. LAZ is a compressed version that is much smaller. They store position, intensity, classification and more for each point.",
        "E57. A vendor-neutral format for terrestrial laser scans, which can include images and scanner positions.",
        "Gaussian splat files. Splats are usually saved as large PLY files, with compressed variants such as SPLAT, KSPLAT and SPZ for the web. Work is under way to carry them inside glTF, so check the current state of support.",
        "Meshes from photogrammetry. Usually exported as OBJ, PLY or glTF, with texture images.",
      ),
      p("A point cloud is a set of points, with no surface between them. A mesh joins points into triangles. Both can be coloured. Point clouds suit measurement and very large data, and meshes suit display, because engines draw triangles."),

      h2("Formats for cities, terrain and buildings"),
      ul(
        "3D Tiles. An open standard for streaming huge 3D geospatial datasets, such as photogrammetry of a whole city, in pieces that load as needed, at the level of detail the viewer requires. It is the format of choice for large, georeferenced scenes on the web.",
        "CityGML and CityJSON. Describe city models with meaning, for example which surface is a roof and which a wall, and carry attributes.",
        "IFC. The open format for building information modelling (BIM), describing the parts of a building and how they relate.",
        "GeoTIFF and terrain tiles. Raster elevation data that can be turned into a 3D surface.",
      ),

      h2("Compression: making files small"),
      ul(
        "Draco and Meshopt compress geometry, often reducing it to a fraction of its size, and are supported in glTF.",
        "KTX2 with Basis compression stores textures in a form that graphics hardware can use directly, saving memory as well as download size.",
        "Texture formats such as WebP and JPEG shrink the images for the web.",
      ),
      p("For headsets and phones, memory matters as much as download size. Compressed textures that stay compressed in graphics memory are a major win."),

      h2("The silent problems: units and axes"),
      p("Two models in different formats can be identical in shape, and still look wrong together, because the tools disagree about the basics."),
      ul(
        "Units. glTF defines one unit as one metre. Some tools use centimetres or millimetres by default, so a building can arrive a hundred or a thousand times too large or too small.",
        "Up direction. Many tools, including glTF and Unity, treat Y as up. Blender and Unreal treat Z as up. A model imported wrongly lies on its side.",
        "Handedness. glTF and Blender use a right-handed coordinate system, while Unity and Unreal use a left-handed one. A mismatch mirrors the model.",
        "Origin. A model built far from its own origin, for example at real-world map coordinates, can shake in a viewer because of limited number precision. Re-centre it.",
      ),
      note("Whenever a model arrives upside down, mirrored or huge, check units, up axis and handedness before anything else."),

      h2("How to choose"),
      ol(
        "For the web or AR on phones: glTF or GLB, compressed, with textures optimised. Supply USDZ for iPhones if you do not use a viewer that converts for you.",
        "For a game engine or headset app: glTF or FBX, depending on the engine and the pipeline, with attention to units.",
        "For archives and measurement: keep the original point clouds in LAS, LAZ or E57, plus a record of coordinates and units.",
        "For large city or site scenes: 3D Tiles.",
        "For 3D printing: STL, or 3MF which also carries colour.",
        "For design handover from engineers or architects: IFC or the native source files, plus an exported mesh for display.",
      ),

      h2("A simple pipeline"),
      p("A common route for a scanned place is as follows. Process the photographs into a dense point cloud and a textured mesh, and keep these as the master archive. Clean and simplify the mesh, and bake detail into textures. Export a compressed GLB for the web and a streaming 3D Tiles version for large views. Keep a note of the coordinate system, the units and the date. Always archive the original data, because formats and tools change faster than places do."),

      h2("Frequently asked questions"),
      qa(
        ["Why is my model black or missing its textures?", "Textures are often separate files. If they were not exported with the model or the paths are broken, the viewer shows plain surfaces. Use GLB, which packs textures inside."],
        ["Can I convert any format to any other?", "Mostly, with tools such as Blender and command-line converters. Conversion can lose information, for example colour precision or hierarchy, so keep your original."],
        ["Is OBJ still worth using?", "For simple geometry exchange, yes. For the web, AR and modern materials, glTF is a better choice."],
        ["What is the difference between a mesh and a point cloud?", "A point cloud is only points. A mesh adds triangles that connect them into a surface that engines can draw efficiently."],
      ),
      p("Formats are the shipping containers of 3D. Choose one that suits the destination, label the units and axes clearly and keep your master files safe, and your models will arrive intact and ready to use."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "guides",
    slug: "optimise-3d-for-web-and-headsets",
    title: "How to optimise 3D models for the web, phones and headsets",
    excerpt: "A practical routine to turn a heavy scan into a model that loads in seconds and runs smoothly, without losing what matters.",
    topic: "3D & VR",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "Set a budget for triangles, textures and file size before you start, based on your slowest target device.",
      "Most weight sits in textures and in unnecessary triangles. Reduce both, then compress.",
      "Levels of detail, instancing and baked lighting keep frame rates steady.",
      "Always test on the real devices your audience will use.",
    ],
    body: [
      p("A fresh scan of a building can contain millions of triangles and a gigabyte of textures. It looks magnificent on a powerful workstation. On a mid-range phone, or inside a standalone headset that must draw two views at high speed, it will crawl, overheat or crash. Optimisation is the craft of keeping what the viewer notices and removing what they do not."),
      p("This guide gives a repeatable routine, from setting a budget to testing on devices."),

      h2("Step 1: set a budget"),
      p("Optimising without a target is guessing. Start from the weakest device you must support, and write down your limits."),
      ul(
        "File size: for the web, aim for a few megabytes for a first view, and load detail progressively. Smaller is better on slow connections.",
        "Triangles: a mobile or standalone headset scene is often kept to a few hundred thousand visible triangles. Powerful computers handle far more.",
        "Textures: memory is the limit. A single 4096 by 4096 texture uses tens of megabytes when uncompressed in graphics memory.",
        "Frame rate: a headset running at 90 frames per second has only about 11 milliseconds to draw each frame. Phones typically target 30 to 60 frames per second.",
        "Draw calls: the number of separate objects the graphics chip is asked to draw. Fewer is faster.",
      ),
      note("These numbers vary by device and change quickly. Treat them as starting points, and measure on your own targets."),

      h2("Step 2: clean the model"),
      ul(
        "Remove what will never be seen: hidden interiors, the underside of the ground and duplicate surfaces.",
        "Delete stray fragments and floating specks, which are common in scans.",
        "Fix holes and flipped surfaces, which appear as missing or black patches.",
        "Merge duplicate vertices and apply scale and rotation, so that the object’s numbers are tidy.",
      ),

      h2("Step 3: reduce the triangles"),
      p("Decimation removes triangles while trying to keep the shape. Most tools can reduce a scan by 90 percent or more with little visible change on gently curved surfaces. Flat walls need few triangles, but carved or complex areas need more."),
      ul(
        "Reduce gradually, and compare with the original, especially at edges and silhouettes.",
        "Keep more detail where people look closely, and less in the distance.",
        "For hard-edged architecture, retopology, which rebuilds clean, simple geometry by hand or with tools, can give a much lighter and cleaner result.",
        "Move fine detail from geometry into a normal map, a texture that fakes small bumps and grooves using lighting.",
      ),

      h2("Step 4: tame the textures"),
      p("Textures usually weigh more than geometry. They give a scan most of its visual richness, so reduce them with care."),
      ul(
        "Use the smallest size that looks good at the viewing distance. Two thousand pixels across is often plenty. Most small objects need less.",
        "Combine many small textures into an atlas, to reduce draw calls.",
        "Choose efficient formats: KTX2 with Basis compression for graphics memory, and WebP or JPEG for download size.",
        "Remove unused maps. Many models carry channels that the viewer never needs.",
        "Avoid transparency where you can. It is costly to draw.",
      ),

      h2("Step 5: compress the file"),
      p("Compression reduces download time without changing what you see. For glTF, geometry compression with Draco or Meshopt is standard, and texture compression with KTX2 or WebP. A command-line tool such as glTF Transform can apply many of these steps in one command, including merging meshes, removing unused data, compressing geometry and converting textures."),

      h2("Step 6: use levels of detail and streaming"),
      ul(
        "Levels of detail (LOD) swap in simpler versions of an object as it gets farther from the viewer.",
        "Instancing draws many copies of the same object, such as trees or chairs, with almost no extra cost.",
        "Culling skips what is out of view or hidden behind something else.",
        "Streaming loads a large scene in tiles, as the viewer moves, so that the first view appears quickly. This is how huge city models stay usable.",
      ),

      h2("Step 7: light it smartly"),
      p("Realistic lighting is expensive. Where you can, bake it. This means calculating the light and shadow once, and storing them in textures, so the device does not have to compute them every frame. Baked lighting makes static scenes look rich and cheap to run. Keep real-time lights few, and reserve them for things that move."),

      h2("Step 8: test where it counts"),
      ol(
        "Open the model on the oldest phone and the least powerful headset your audience will use.",
        "Measure load time on a slow connection, using the browser’s network throttling.",
        "Watch frame rate and temperature during a long session. Devices slow themselves down when hot.",
        "Look for visual artefacts: shimmering, missing parts, cracks between pieces and washed-out colours.",
        "Fix the biggest cost first, then measure again.",
      ),

      h2("A worked example"),
      p("A scan of a small museum hall arrives as a 4-million-triangle mesh with sixteen 8K textures, about 800 megabytes in total. The target is a phone browser and a standalone headset."),
      ul(
        "Cleaning removes the hidden underside and stray scan fragments.",
        "Decimation and retopology bring the structure to about 150,000 triangles, and fine carving moves into normal maps.",
        "Textures are merged into four 2K atlases and compressed with KTX2.",
        "Geometry is compressed with Draco, and the whole scene is exported as a single GLB of a few megabytes.",
        "Lighting is baked for the static hall, with one real-time light for the visitor’s torch.",
        "On the test devices, the scene opens in seconds and holds a steady frame rate.",
      ),
      p("The visitor sees nearly the same hall as before. They simply do not wait for it."),

      h2("Mistakes that cost the most"),
      ul(
        "Optimising last. Plan the budget at the start of capture and modelling.",
        "Cutting detail everywhere equally, instead of where it matters.",
        "Forgetting texture memory, and looking only at triangle counts.",
        "Testing only on a powerful computer.",
        "Overwriting the original instead of keeping a full-quality master.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["How many triangles can a phone handle?", "It varies widely with the device, the scene and the lighting. Many mobile scenes run well with a few hundred thousand triangles, but you should test on your own targets."],
        ["Will compression ruin the quality?", "Geometry compression such as Draco is nearly invisible at sensible settings. Texture compression can add subtle artefacts, so compare before and after."],
        ["Should I optimise the original scan?", "No. Keep it as a master archive, and produce optimised copies for each use."],
        ["What is the quickest big win?", "Usually the textures. Resize them, combine them and compress them, then look at the triangle count."],
      ),
      p("Optimisation is not about making a model worse. It is about spending your limited budget where the viewer’s eye actually goes. Set the budget, clean, reduce, compress and test, and a heavy scan becomes an experience that opens in seconds, on the devices your audience really owns."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "tutorials",
    slug: "publish-3d-model-model-viewer",
    title: "Publish a 3D model on the web, with AR on phones",
    excerpt: "Compress a GLB, show it on a web page with the model-viewer component, add annotations and let visitors place it in their room.",
    topic: "3D & VR",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "The model-viewer web component shows a GLB in a few lines of HTML, with no app and no build step.",
      "Compress the model first. A smaller file loads faster on every device.",
      "Hotspots add labels at points on the model, and the ar attribute offers placement in the real world on phones.",
      "Write alt text, show a poster image and test on real phones.",
    ],
    body: [
      p("A 3D model is far more useful when people can open it with a click. This tutorial shows how to put one on a web page, so that anyone with a phone or laptop can turn it around, read labels on its parts and, on a phone, place it in their own room using augmented reality. There is nothing to install and no framework to learn."),
      p("You will use an open-source web component called model-viewer, which does the 3D drawing and the AR hand-off for you. It works with the glTF format in its single-file form, GLB."),

      h2("What you need"),
      ul(
        "A model in GLB format. You can export one from Blender or other 3D software, convert a scan, or download a free sample model.",
        "A text editor and a browser.",
        "A way to serve files locally, for example by running python -m http.server 8000 in your project folder. Browsers block 3D files opened straight from disk.",
        "Node.js, only if you want to try the compression step.",
      ),

      h2("Step 1: compress the model"),
      p("A heavy model makes visitors wait, and many will leave. A command-line tool called glTF Transform can shrink a GLB a great deal by compressing its geometry and textures."),
      code("bash", "npx @gltf-transform/cli optimize museum.glb museum-small.glb --compress draco --texture-compress webp"),
      p("Check the file sizes before and after. Open both to make sure that nothing important changed. For a visitor on a phone, a few megabytes is a good target."),

      h2("Step 2: show the model on a page"),
      p("Create an index.html file. The script line loads the component from a CDN. The model-viewer tag does the rest."),
      code(
        "html",
        "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>My first 3D model</title>\n  <script type=\"module\" src=\"https://unpkg.com/@google/model-viewer@3.5.0/dist/model-viewer.min.js\"></script>\n  <style>\n    body { margin: 0; font-family: system-ui, sans-serif; }\n    model-viewer { width: 100%; height: 80vh; background: #f2f2f2; }\n  </style>\n</head>\n<body>\n  <model-viewer\n    src=\"museum-small.glb\"\n    alt=\"A 3D model of a small museum hall\"\n    camera-controls\n    auto-rotate\n    shadow-intensity=\"1\"\n    environment-image=\"neutral\">\n  </model-viewer>\n</body>\n</html>"
      ),
      p("Open http://localhost:8000 and try it. Drag to orbit, scroll or pinch to zoom. The alt text matters: it describes the model to people who use screen readers."),

      h2("Step 3: add a poster so the page does not look empty"),
      p("While the model downloads, the visitor sees a blank box. A poster, which is a still image, fills that gap. You can also delay loading until the visitor interacts, which saves data for people who never touch it."),
      code("html", "<model-viewer\n  src=\"museum-small.glb\"\n  poster=\"museum-poster.webp\"\n  reveal=\"interaction\"\n  loading=\"lazy\"\n  alt=\"A 3D model of a small museum hall\"\n  camera-controls>\n</model-viewer>"),

      h2("Step 4: add annotations with hotspots"),
      p("Hotspots attach a label to a point on the model, and the label follows the point as the model turns. You give each one a position in the model’s own coordinates, in metres, and an optional normal, which says which way the point faces."),
      code(
        "html",
        "<model-viewer src=\"museum-small.glb\" alt=\"A 3D model of a small museum hall\" camera-controls>\n\n  <button slot=\"hotspot-door\"\n          data-position=\"1.2 0.9 2.4\"\n          data-normal=\"0 0 1\"\n          style=\"background:#fff;border:1px solid #111;padding:4px 8px\">\n    Main entrance\n  </button>\n\n  <button slot=\"hotspot-case\"\n          data-position=\"-0.8 1.1 0.5\"\n          data-normal=\"0 1 0\"\n          style=\"background:#fff;border:1px solid #111;padding:4px 8px\">\n    Display case\n  </button>\n\n</model-viewer>"
      ),
      note("To find a point’s position, open your model in a 3D tool and read the coordinates, or click on the model in the viewer with the browser developer tools and the viewer’s positionAndNormalFromPoint method."),

      h2("Step 5: let visitors place it in the room with AR"),
      p("Adding the ar attribute makes a button appear on supported phones. Tapping it opens the phone’s own AR viewer, where the visitor can place the model on the floor or a table at its real size. For this to work, your page must be served over HTTPS, so test AR on a hosted copy, not on localhost."),
      code("html", "<model-viewer\n  src=\"museum-small.glb\"\n  alt=\"A 3D model of a small museum hall\"\n  ar\n  ar-modes=\"webxr scene-viewer quick-look\"\n  ar-scale=\"fixed\"\n  camera-controls>\n  <button slot=\"ar-button\" style=\"position:absolute;bottom:16px;right:16px;padding:10px 14px\">\n    View in your space\n  </button>\n</model-viewer>"),
      ul(
        "On Android, AR opens through Scene Viewer or WebXR.",
        "On iPhone and iPad, AR opens in Quick Look, which uses the USDZ format. The component can create it for you, or you can supply your own file with the ios-src attribute.",
        "Models must be at real-world scale for AR to feel right. Check that your model is built in metres.",
      ),

      h2("Step 6: publish it"),
      p("A model-viewer page is a set of static files: the HTML, the GLB and the poster. Any static host can serve them, including a content delivery network, a cloud storage bucket or your website’s own server. Make sure that the host sends the right file types, and allow the page to load files from the same address. To place the viewer on an existing page, copy the script line and the model-viewer tag."),

      h2("Make it work for everyone"),
      ul(
        "Write meaningful alt text, and give the key information in plain text on the page too.",
        "Keep controls reachable by keyboard. The component supports keyboard navigation with camera-controls.",
        "Do not rely on motion. Offer a way to stop auto-rotate, or leave it off.",
        "Test on a slow connection and on an older phone.",
        "State clearly if the model is a reconstruction or an estimate.",
      ),

      h2("Troubleshooting"),
      ul(
        "The box stays empty: open the browser console. A wrong file path or a missing server is the usual cause.",
        "The model is huge or tiny: it was exported in the wrong units. Re-export in metres.",
        "The model is dark or flat: try environment-image=\"neutral\" and increase exposure slightly.",
        "AR button missing: your device may not support AR, or the page is not on HTTPS.",
        "Textures look wrong: re-export as GLB so that textures are packed inside the file.",
      ),

      h2("Where to go next"),
      ul(
        "Switch between model variants, such as colours or states, with the variant features.",
        "Control the camera from your own buttons, for a guided tour that steps from point to point.",
        "Move to a fuller engine such as three.js or Babylon.js when you need complex interaction.",
        "Stream a very large scene as 3D Tiles instead of a single GLB.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Is model-viewer free?", "Yes. It is open source. Check its licence and the terms of any model you display, because the models you use have their own licences."],
        ["Can I use it with React or another framework?", "Yes. It is a standard web component, so it works in any framework, with wrapper libraries available if you want them."],
        ["How large can the model be?", "Keep to a few megabytes for a good experience on phones. Larger scenes should load progressively or in tiles."],
        ["Do visitors need an app for AR?", "Not on most modern phones, which have AR built in. The experience opens in the phone’s own viewer."],
      ),
      p("In a few lines of HTML, you have turned a 3D file into something anyone can explore, inspect and place in their own space. That low barrier is what makes web-based 3D so powerful for tours, products, heritage and training."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "guides",
    slug: "plan-a-vr-training-programme",
    title: "How to plan a VR training programme that people actually finish",
    excerpt: "From learning goals and scenarios to hardware, instructors and measurement, a step-by-step plan for training that changes behaviour.",
    topic: "3D & VR",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "Start from a performance gap and a measurable goal, not from the technology.",
      "Choose tasks where VR adds something: risk, cost, rarity or the need to practise in context.",
      "Plan the people and logistics: instructors, headsets, space, comfort and support.",
      "Measure learning and behaviour before and after, and improve each round.",
    ],
    body: [
      p("Virtual reality can be a superb training tool. A trainee can rehearse an emergency, operate costly equipment or deal with a difficult conversation, again and again, without danger or waste. But many VR training projects stall after a flashy demonstration. The headsets end up in a cupboard, and the content is never updated. The difference is rarely the quality of the graphics. It is the quality of the plan."),
      p("This guide walks through planning a VR training programme, from the first question to the measurement of results."),

      h2("Step 1: start with the performance gap"),
      p("Ask what people are not doing well today, and what it costs. Perhaps new technicians make errors in a safety procedure, or staff freeze in a rare emergency, or a skill takes too long to learn on real equipment. Write the gap as a measurable goal."),
      ul(
        "“Reduce errors in the lock-out procedure by half within six months.”",
        "“Cut the time for new operators to work unsupervised from eight weeks to five.”",
        "“Ensure that every guide can lead an evacuation drill with confidence.”",
      ),
      p("If you cannot state the goal, VR will not help yet."),

      h2("Step 2: check that VR is the right tool"),
      p("VR earns its cost in particular situations."),
      ul(
        "Risk: the real task is dangerous, such as fire, chemicals, heights or heavy machinery.",
        "Cost: practice uses expensive equipment, consumables or downtime.",
        "Rarity: the situation seldom happens, so people have no chance to practise it.",
        "Context: the skill depends on being in a place, such as a plant floor or a heritage site, that learners cannot easily visit.",
        "Scale and feedback: many learners must practise the same scenario with consistent feedback.",
      ),
      p("For knowledge that is mainly about facts, a good video, a simulation on a screen or a workshop may serve better and cost far less. Be honest about which one you need."),

      h2("Step 3: design the learning, not just the scene"),
      ol(
        "Define the specific actions a learner must do, in order, with the correct answer for each.",
        "Write realistic scenarios of increasing difficulty, starting with the basics and adding complications.",
        "Decide what feedback appears: when the learner errs, is it a cue, a pause or a replay?",
        "Build in assessment, such as a score, a checklist and a record of choices, so that trainers can see how each person performed.",
        "Plan a debrief. Reflection after the experience is where much of the learning is fixed.",
      ),
      p("Keep each session focused. Ten to twenty minutes of well-designed practice is more effective than an hour of wandering."),

      h2("Step 4: involve the experts and the learners"),
      ul(
        "Subject experts supply the correct procedures, the common mistakes and the realistic details that make the scenario credible.",
        "Trainers help design the session flow, the debrief and how to run groups.",
        "A few learners from the real audience should test early prototypes. They will find confusion that designers do not.",
      ),

      h2("Step 5: plan the hardware and the space"),
      ul(
        "Standalone headsets are the simplest choice for most programmes. They need no computer, and are easy to move around.",
        "Plan a clear, safe area, a minimum of a few metres square, free of obstacles, with someone watching.",
        "Budget for spares, charging, cleaning materials, hygiene covers and storage.",
        "Decide how many headsets are needed for the number of learners and the session length.",
        "Provide a screen-based alternative for those who cannot use a headset, so that nobody is left out.",
      ),

      h2("Step 6: look after comfort and safety"),
      ul(
        "Brief everyone before they start: how to put the headset on, what to expect and how to stop.",
        "Offer comfortable movement options, such as teleporting, and avoid sudden, forced motion.",
        "Keep sessions short at first, and let people take breaks or stop at any time.",
        "Seat people for some scenarios, and keep a helper close for anyone who feels unwell.",
        "Observe the rules about age limits and any health conditions that the manufacturer advises on.",
      ),

      h2("Step 7: prepare the trainers"),
      p("Trainers make or break a VR programme. Give them a short course on the hardware, the scenarios and the debrief. Provide a simple guide to the common problems, and a screen that shows what the learner sees, so that they can coach in the moment. Name someone responsible for keeping headsets charged, updated and clean."),

      h2("Step 8: pilot with a small group"),
      p("Run the first version with a small, friendly group. Watch what happens: where people get lost, which instructions fail and how long each part takes. Collect their scores and their opinions. Fix the biggest issues and try again with a second group before you scale up."),

      h2("Step 9: measure what matters"),
      p("A useful way to think about training evaluation is in four levels, a model widely used in the field."),
      ul(
        "Reaction: did learners find it engaging and useful?",
        "Learning: did their knowledge or skill improve, measured by a test or a performance check?",
        "Behaviour: do they do things differently at work afterwards?",
        "Results: did the original goal move, for example fewer errors or incidents?",
      ),
      p("Collect a baseline before the programme and compare. Be wary of judging a programme on enthusiasm alone, since people often enjoy VR whether or not they learn from it."),

      h2("Step 10: plan the upkeep and the data"),
      ul(
        "Procedures change. Decide who updates the scenarios, how often and how it is paid for.",
        "Keep a simple log of headset issues and learner feedback, and review it each month.",
        "Treat performance data with care. Tell learners what is recorded, who sees it and how long it is kept.",
        "Plan for new headset models and software updates, which can break old content.",
      ),

      h2("Rough cost areas to include"),
      ul(
        "Scenario design and 3D content, often the largest part.",
        "Headsets, accessories and spares.",
        "Trainer preparation and time.",
        "Space, cleaning and storage.",
        "Evaluation and updates over the first two years.",
      ),

      h2("A short worked example"),
      p("A factory has had several near-misses during a chemical transfer procedure. The goal is to halve mistakes in six months. A subject expert and a trainer break the procedure into twelve steps and six common errors. The team captures the plant from scans and builds a ten-minute scenario in which trainees make each decision, and the system records mistakes. Trainers run a pilot with eight operators using standalone headsets in a clear room, with a debrief after each run. Test scores and observed errors improve, but the pilot shows that two instructions are confusing, and those are rewritten. The programme then rolls out to all operators, with a monthly review of errors on the floor. After six months, the number of recorded mistakes has dropped, and the team uses the data to add a second scenario."),

      h2("Frequently asked questions"),
      qa(
        ["How long should a VR training session be?", "Often 10 to 20 minutes for the immersive part, plus a debrief. Newcomers do best with short sessions that build up."],
        ["Is VR training more effective than traditional training?", "It can be, especially for risky, rare or hands-on skills, but results depend on the design and the debrief. Compare against your own baseline."],
        ["Do we need to build custom content?", "Sometimes ready-made modules cover common topics such as general safety. Custom content is worthwhile when the procedure or the place is specific to you."],
        ["What if some learners cannot use a headset?", "Offer an alternative, such as the same scenario on a screen, so that everyone can complete the training."],
      ),
      p("VR training succeeds when it is treated as a learning programme that happens to use headsets, not as a technology project. Define the gap, design the practice, prepare the people and measure the result, and it becomes a tool that people use, finish and benefit from."),
    ],
  },
];
