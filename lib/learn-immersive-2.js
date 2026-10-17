// Learn > "Immersive 3D, VR and AR" path, part 2: recent developments (Gaussian splatting, NeRFs, modern meshes,
// WebGPU, OpenUSD, spatial computing). This field moves quickly, so each article names what is established and
// what is still changing. Review the "current status" statements before publishing.
// Reading time is calculated automatically (lib/readtime.js).

import { p, h2, ul, ol, code, note, qa } from "./blocks";

export const immersive2 = [
  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "3d-representations-compared",
    title: "Meshes, point clouds, NeRFs and Gaussian splats: how to choose a 3D representation",
    excerpt: "The four ways to store a real place in 3D, what each does best, and a simple way to decide which one your project needs.",
    topic: "3D & VR",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "Meshes are best when you need to edit, measure, light, collide with or simulate the object.",
      "Gaussian splats and NeRFs are best when you need photorealistic views of a real scene captured from photos.",
      "Point clouds are the measurement-grade record, and the raw material for the others.",
      "Many projects use two: a splat or textured mesh for the look, and a simple mesh for physics and measurement.",
    ],
    body: [
      p("For decades, a 3D model of a real place meant a mesh: a skin of triangles with images pasted on it. That is still the workhorse of games, engineering and mapping. But in the past few years, new ways of representing a captured scene have appeared that can look far more realistic from a handful of photographs, and have changed what is possible for tourism, heritage and virtual tours."),
      p("This article puts the four main options side by side, so that you can choose with your eyes open instead of following the latest demonstration."),

      h2("The big idea: what are we actually storing?"),
      p("Every 3D representation answers the same question: how do we describe what a space looks like from any viewpoint? The answers differ in what they store, and that decides what each can and cannot do."),
      ul(
        "A mesh stores surfaces, as triangles, with materials and textures.",
        "A point cloud stores positions of measured points, often with colour.",
        "A neural radiance field (NeRF) stores a small neural network that, given a position and a viewing direction, predicts colour and density.",
        "A Gaussian splat scene stores millions of tiny, soft, coloured blobs, each with a position, shape, colour and transparency.",
      ),

      h2("Meshes"),
      p("A mesh is the standard currency of 3D. Every game engine, headset runtime and CAD or GIS tool understands it."),
      ul(
        "Strengths: easy to edit, animate and light; supports collisions, physics and measurement; small and fast once optimised; works everywhere.",
        "Weaknesses: fine, thin or fuzzy things, such as foliage, hair, wires and glass, are hard to capture; shiny and reflective surfaces look flat or wrong; photogrammetry meshes can look waxy and need clean-up.",
        "Best for: anything interactive, anything that must be measured or simulated, and content that must run on modest devices.",
      ),
      p("Meshes keep improving. Modern engines can draw enormous numbers of triangles by loading detail only where the viewer needs it, and AI tools help with clean-up and retopology. The mesh is not obsolete. It is the most dependable format we have."),

      h2("Point clouds"),
      p("A point cloud is a measurement first and a picture second. Laser scanners and photogrammetry software produce it, and it is the most direct record of what was there."),
      ul(
        "Strengths: accurate, simple, ideal for measurement and for archiving; can be huge without losing precision.",
        "Weaknesses: no surfaces, so it looks like a swarm of dots up close; heavy to display; hard to light or interact with.",
        "Best for: surveying, change detection, and as the source for meshes and digital twins.",
      ),

      h2("Neural radiance fields (NeRFs)"),
      p("Introduced in 2020, NeRFs showed that a neural network could learn a scene from photographs and then render new views with striking realism, including reflections and soft effects that meshes struggle with. Later work made training much faster."),
      ul(
        "Strengths: very realistic novel views; handles complex lighting, transparency and fine detail; the whole scene is a compact model.",
        "Weaknesses: slower to render than meshes and splats; the scene is a neural network, so it is hard to edit; no explicit surface for physics or measurement.",
        "Best for: research and high-quality offline views. For real-time use, splats have largely taken over.",
      ),

      h2("Gaussian splats"),
      p("Gaussian splatting appeared in 2023 and spread quickly because it combined NeRF-like realism with real-time rendering. A scene is stored as millions of soft blobs, and the graphics chip draws them directly, fast enough for smooth interaction in a browser or headset."),
      ul(
        "Strengths: photorealistic, including shine and reflections; captured from ordinary photos or video; trains in minutes to an hour on a good graphics card; renders in real time.",
        "Weaknesses: no clean surface, so collisions, measurement and editing are difficult; lighting is baked in from the moment of capture; quality drops when you look from angles far from the photos; files can be large; floating specks called floaters need cleaning.",
        "Best for: virtual tours, heritage and tourism showcases, and visually rich scenes where realism matters more than interaction.",
      ),

      h2("A side-by-side view"),
      ul(
        "Looks real from photos: splat and NeRF are strongest; mesh is good with effort; point cloud is weakest.",
        "Edit and relight: mesh is best; the others are limited.",
        "Collisions and physics: mesh only, in practice.",
        "Measurement: point cloud and mesh, with control points.",
        "Real-time on phones and headsets: mesh is easiest; splats work with optimisation; NeRFs are heavy.",
        "File size: optimised meshes are smallest; splats are medium to large; point clouds can be huge.",
        "Maturity of tools and standards: mesh is the most mature; splats are developing fast.",
      ),

      h2("Hybrids are normal"),
      p("The most practical designs combine representations. A museum can show a splat for the look of a hall, with a simple, invisible mesh underneath for walking and collisions. A survey can keep the point cloud for measurement, a mesh for the engine and a splat for a public tour. Researchers are also developing methods that extract surfaces from splats, which narrows the gap between the two."),

      h2("How to choose: five questions"),
      ol(
        "Does anyone need to measure or simulate it? If yes, you need a mesh or point cloud, with control points.",
        "Does it need to be interactive, with objects that move or can be picked up? Use meshes.",
        "Is the main goal to show a place as realistically as possible? Consider a splat.",
        "What device will show it? Weak devices favour meshes, or heavily optimised splats.",
        "How long must it last? Meshes and point clouds in standard formats are safest for the long term. Keep your source photos, since a better method may come along.",
      ),
      note("Whatever you choose, keep the original photographs, scans and a note of how they were captured. The representation will change over the years. The raw data is what lets you redo it."),

      h2("Worked examples"),
      ul(
        "A heritage record of a temple: point cloud and textured mesh as the archive, with a splat for a public virtual visit.",
        "A hotel showing rooms to overseas guests: splats for realistic tours, with a mesh floor plan for navigation.",
        "A training simulator for a plant: clean meshes with physics, because trainees must interact.",
        "A flood model of a town: point cloud and elevation mesh, because it must be measured.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Have Gaussian splats replaced photogrammetry?", "No. They complement it. Photogrammetry still produces measurable, editable meshes. Splats excel at realistic viewing. Many teams capture once and produce both."],
        ["Can I use a splat in a game engine?", "Yes, through plug-ins and viewers, although support is newer and less uniform than for meshes. You will usually still need a simple mesh for physics."],
        ["Are NeRFs obsolete?", "They remain important in research and for some high-quality results, but splats have become the common choice for real-time viewing."],
        ["Which is cheapest to produce?", "A mesh from photogrammetry and a splat from the same photos cost about the same to capture. Cleaning and optimising for your audience is where the effort goes."],
      ),
      p("There is no single best way to store a place. There is only the right representation for the job. Ask what people will do with the model, and the choice usually makes itself."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "gaussian-splatting-explained",
    title: "Gaussian splatting explained: photoreal 3D from photos, in real time",
    excerpt: "How millions of soft blobs can reconstruct a scene, how a splat is trained and rendered, and where it works and fails.",
    topic: "3D & VR",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "A Gaussian splat scene is millions of soft, coloured, semi-transparent blobs, fitted to photographs by optimisation.",
      "It renders in real time because the graphics chip can draw and blend the blobs directly.",
      "It captures light, shine and fine detail well, but has no true surface, so measuring and editing are hard.",
      "Quality depends on the photos: coverage, sharpness and consistent lighting matter most.",
    ],
    body: [
      p("If you have seen a recent virtual tour of a building, a statue or a hillside that looks as real as a video, but that you can orbit and walk through at will, you may have been looking at a Gaussian splat. The technique was introduced by a research team in 2023, and within a year it moved from academic papers into everyday tools, viewers in web browsers and product demonstrations."),
      p("This article explains how it works, with no mathematics, and what the strengths and limits mean for real projects."),

      h2("The idea in one picture"),
      p("Imagine sprinkling millions of tiny, translucent, coloured clouds into a room. Each cloud is a soft blob, stretched in some direction, with a colour that can change slightly depending on where you look from. From a given viewpoint, the blobs in front partly cover those behind, and the sum looks like a photograph. Now imagine you could adjust every blob until the picture it produces matches the real photographs of the room from all the angles they were taken. That is Gaussian splatting."),

      h2("What is in a splat"),
      ul(
        "Position: where the centre of the blob is in 3D space.",
        "Shape: how large it is and which way it is stretched, which lets a thin blob lie along an edge or flat against a wall.",
        "Colour: stored so that it can vary with the viewing direction, which is how shine and reflections are reproduced.",
        "Opacity: how see-through it is.",
      ),
      p("The name comes from the bell-curve, or Gaussian, shape of each blob, which fades smoothly at its edges, and from the way it is drawn by splatting it onto the screen, like a splash of paint."),

      h2("How a splat is made"),
      ol(
        "Capture photographs or video of the scene from many viewpoints, with plenty of overlap.",
        "Recover the camera positions with a structure-from-motion step, the same technique photogrammetry uses. This also gives a sparse cloud of points.",
        "Initialise one blob at each of those points.",
        "Optimise. The system renders the scene from each photo’s viewpoint, compares it with the real photo and nudges every blob’s position, shape, colour and opacity to reduce the difference. It repeats this thousands of times.",
        "Adapt. During training, it splits blobs where detail is needed, clones them where the scene is under-covered, and removes ones that do nothing.",
        "Export the result as a file that a viewer can open.",
      ),
      p("On a modern graphics card, training typically takes minutes to an hour for a room-sized scene. That speed, compared with the hours of earlier methods, is a large part of why the technique caught on."),

      h2("How it is drawn so quickly"),
      p("Unlike a NeRF, which has to ask a neural network thousands of questions per pixel, a splat scene is drawn by projecting each blob onto the screen, sorting them from near to far and blending them. This is something graphics hardware is built to do fast. As a result, scenes can be viewed in real time, in a web browser, on a laptop or on a headset, though large scenes need optimisation on weak devices."),

      h2("What splats do especially well"),
      ul(
        "Realism. Soft effects, fine detail, reflections and view-dependent shine come out naturally.",
        "Difficult subjects. Foliage, fur, lace, glass edges and cluttered interiors that confuse mesh reconstruction often look good as splats.",
        "Speed of capture. A walk-around video can be enough.",
        "Immediacy. The result looks like the place, with no artist needed for texturing and lighting.",
      ),

      h2("Where they struggle"),
      ul(
        "No surface. There is no solid skin to bump into, measure or cut, so physics and precise measurement need a companion mesh.",
        "Baked lighting. The light of the day you captured is part of the colours. You cannot easily change the time of day or move a lamp.",
        "Limited viewpoints. Look from far outside the area covered by your photos and it falls apart into streaks and blobs.",
        "Floaters. Stray blobs hang in the air where the system misinterpreted something, and need to be cleaned out.",
        "Size. A high-quality scene can be hundreds of megabytes, so compression and streaming matter.",
        "Moving things. People, cars and waving trees confuse the process, because it assumes a still scene.",
      ),

      h2("Capture tips that make the biggest difference"),
      ul(
        "Move slowly and steadily, and keep every frame sharp. Blur cannot be fixed later.",
        "Cover the scene at several heights and from many angles, with strong overlap between frames.",
        "Keep exposure and white balance fixed, and capture in even light.",
        "Avoid people, vehicles and anything that moves, or capture when the place is quiet.",
        "Add texture where surfaces are bare, or take extra care around plain walls, glass and mirrors, which are hard for any camera-based method.",
        "Capture more than you think you need, particularly around important details.",
      ),

      h2("Files, formats and tools"),
      p("Splats are commonly stored as large point-like files, often using the PLY format, with compressed variants such as SPLAT, KSPLAT or SPZ that reduce the size. Viewers and editors exist for browsers and desktops, and plug-ins bring splats into game engines. Standards bodies are working on a common way to carry splats inside glTF, so that they can travel like other 3D assets. This area is still changing, so check the current state of support in the tools that you plan to use."),

      h2("Splats and the rest of your pipeline"),
      ul(
        "Use a splat for the beautiful view, and a simple mesh for walking, collisions and measurement.",
        "Keep the original photos. Methods are improving, and re-processing later may give a better result.",
        "Clean the splat: crop away the background, remove floaters and set a sensible origin and scale.",
        "Compress it for the web, and test on target devices, as with any 3D asset.",
        "Say what it is. A splat is a reconstruction of how a place looked on one day, not a survey.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Is Gaussian splatting the same as photogrammetry?", "No. Both start from photos and camera positions, but photogrammetry builds a surface mesh, and splatting fits millions of blobs. They answer different needs."],
        ["Do I need an expensive camera?", "No. Many good splats come from phone video. A steady hand and good light matter more than the camera."],
        ["Can I edit a splat?", "You can crop, delete and clean it in editors, and in some tools move or scale parts. Detailed editing, like reshaping a wall, is hard."],
        ["Can splats be used for measurement?", "Not reliably by themselves. Use a point cloud or mesh with control points when accuracy matters."],
      ),
      p("Gaussian splatting is the clearest sign of how quickly 3D capture is changing. It does not replace meshes or surveys, but for showing a real place so that people feel they are standing in it, it has become one of the best tools we have."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "tutorials",
    slug: "capture-and-view-gaussian-splat",
    title: "Capture a place and turn it into a Gaussian splat",
    excerpt: "Film a scene, train a splat with open-source tools, clean it and view it in your browser, with the pitfalls to avoid.",
    topic: "3D & VR",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "A steady, well-lit walk-around video is enough to start.",
      "Open-source tools handle camera solving, training and export from a few commands.",
      "You need a graphics card for training, or a cloud notebook or hosted service if you do not have one.",
      "Clean and crop the result before sharing, and be clear that it is a visual reconstruction.",
    ],
    body: [
      p("Making a Gaussian splat used to require a research lab. Today you can do it from a phone video and a free toolchain in an afternoon. This tutorial takes you from filming a scene to a splat that you can orbit in a browser, and explains each decision, so that you can repeat it with confidence."),
      p("Tools in this area change every few months. The ideas stay the same, and the commands below show the usual shape of the workflow. If a command has changed, check the tool’s own documentation."),

      h2("What you need"),
      ul(
        "A phone or camera that records sharp video. Fixed exposure helps if your device allows it.",
        "A computer with a recent NVIDIA graphics card and the CUDA software for training, or a cloud notebook with a GPU, or a hosted service that trains for you.",
        "Python and the Nerfstudio toolkit, which includes a splat method called splatfacto.",
        "COLMAP and FFmpeg, used to solve camera positions and extract frames.",
        "A browser-based splat editor and viewer for cleaning and sharing the result.",
      ),

      h2("Step 1: choose a good subject"),
      ul(
        "Start with something modest: a statue, a doorway, a small room or a garden corner.",
        "Pick a place with plenty of texture. Plain white walls, mirrors and large panes of glass are difficult.",
        "Choose a quiet time. Moving people and traffic leave ghosts.",
        "Soft, even light, such as an overcast day, gives the best colour consistency.",
      ),

      h2("Step 2: film it properly"),
      ol(
        "Hold the phone steady, in landscape, with the camera at a fixed zoom.",
        "Walk slowly around the subject in a full circle at about chest height, keeping it in the frame.",
        "Repeat the circle higher, then lower, tilting the camera to keep the subject in view.",
        "For rooms, walk the edges, and then cross the middle, and look around, covering corners and ceilings.",
        "Record 1 to 3 minutes. Quality matters more than length, and shaky or blurred frames hurt the result.",
      ),
      note("If a frame is blurry to your eye, it is blurry to the software. Slow down, and re-shoot rather than hoping."),

      h2("Step 3: install the tools"),
      p("Create a clean Python environment, install a CUDA-enabled build of PyTorch that matches your driver, and then install Nerfstudio. The project’s installation page lists the exact steps for your operating system. After installing, check that the command-line tools respond."),
      code("bash", "ns-train --help"),

      h2("Step 4: solve the cameras"),
      p("The first processing step extracts frames from your video and works out where the camera was for each one. It produces a folder with images and a file of camera positions."),
      code("bash", "ns-process-data video --data capture.mp4 --output-dir processed"),
      p("Read the output messages. If the tool reports that it matched only a small fraction of the frames, your video probably has too little texture, too much motion or too little overlap. Re-shoot before moving on, because training cannot repair failed camera solutions."),

      h2("Step 5: train the splat"),
      code("bash", "ns-train splatfacto --data processed"),
      p("Training prints progress and a web address for a live viewer, which is typically on your own computer. Open it, and watch the scene come into focus as the blobs settle. For a small scene, it usually takes from a few minutes to under an hour, depending on your graphics card. You can stop when the picture stops improving."),
      ul(
        "Out of memory errors mean the scene or image size is too large for your card. Reduce the image resolution or the number of frames.",
        "A very blurry result means the camera solution or the photos were poor.",
        "Slow progress usually means that the graphics card is not being used. Check the CUDA installation.",
      ),

      h2("Step 6: export the result"),
      p("Training saves a configuration file in an outputs folder. Point the export command at it to produce a splat file."),
      code("bash", "ns-export gaussian-splat --load-config outputs/processed/splatfacto/<run-name>/config.yml --output-dir exports/splat"),
      p("You should get a file ending in .ply. It is large, often tens or hundreds of megabytes, because it stores every blob."),

      h2("Step 7: clean it up in a browser editor"),
      p("Open a browser-based splat editor, such as the free SuperSplat tool, and drag the file in. A raw splat nearly always needs tidying."),
      ol(
        "Crop away the background that you do not need. A tight box makes a smaller, cleaner scene.",
        "Select and delete floaters, the stray blobs in mid-air.",
        "Rotate and position the scene so that the floor is level and the origin is sensible.",
        "Check from several viewpoints, especially from the angles that your audience will use.",
        "Export a compressed version for the web if the editor offers one.",
      ),

      h2("Step 8: share it"),
      ul(
        "Host the file on any static host, and open it in a splat viewer, or embed a viewer in your page.",
        "Use a compressed format to cut the download size, and test on a phone over a slow connection.",
        "Add a still preview image, so that the page is not blank while the file loads.",
        "Label it honestly: say when it was captured, and that it is a visual reconstruction, not a survey.",
      ),

      h2("If you do not have a graphics card"),
      ul(
        "Use a cloud notebook that offers a GPU. Several services provide notebooks with a graphics card for hours at a time, free or low-cost, and the same commands work there.",
        "Use a hosted service that takes a video and returns a splat. It is easy, but check where your footage is stored and who owns the result.",
        "Capture now, and train later. Keep the original video in a safe place.",
      ),

      h2("Improving your results"),
      ul(
        "Capture more, and more evenly. Gaps in coverage are the commonest cause of ugly regions.",
        "Lock exposure and white balance, so the colours match from frame to frame.",
        "Use a gimbal or stabilised video to reduce blur.",
        "Add a few extra passes around the details that matter.",
        "Try a longer training run, or higher resolution, once the basic result is sound.",
      ),

      h2("What to be careful about"),
      ul(
        "Privacy: remove or blur identifiable people and number plates before publishing, or capture when the place is empty.",
        "Permission: get the owner’s consent to capture and publish, particularly for private property and heritage sites.",
        "Honesty: do not use a splat as evidence of measurements or condition unless it has been checked against a survey.",
        "Storage: keep the raw video and the camera solution so that you can reprocess when better tools arrive.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["How long should the video be?", "One to three minutes of slow, sharp footage is a good start for a small subject. More is not always better if the extra frames are blurry."],
        ["Can I use a drone?", "Yes. Drone video suits large outdoor scenes. Keep the flight slow, and cover the subject from several heights and angles."],
        ["Why does my splat look blurry up close?", "Either the photos did not capture that detail, or the area was only seen from far away. Capture closer passes for the parts that matter."],
        ["Do I need to know machine learning?", "No. The tools handle it. Understanding the ideas helps you diagnose problems, but you can make good splats without writing any code."],
      ),
      p("In an afternoon you have gone from a walk with a phone to an explorable, photoreal 3D scene. The craft is in the capture, and the rest is patient tidying. Practise on small subjects, and you will soon know what works."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "whats-new-in-3d-and-spatial-computing",
    title: "What is new in 3D and spatial computing: a field guide to the recent changes",
    excerpt: "Splats, smarter meshes, AI-made 3D, WebGPU, OpenUSD and mixed reality headsets: what is established, what is still changing and how to keep up.",
    topic: "3D & VR",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "Capture has changed most: Gaussian splats and neural methods now sit beside photogrammetry and laser scanning.",
      "Meshes are improving too, through virtual geometry, better tools and AI-assisted clean-up.",
      "Standards and browsers are catching up: glTF, OpenUSD, 3D Tiles and WebGPU make 3D easier to share.",
      "Judge each trend by a real use case, a clear cost and what still works if it fades.",
    ],
    body: [
      p("Few technical fields change as fast as 3D and immersive technology. A method that was a research curiosity three years ago may be a standard feature of mainstream tools today, and a product that was announced with great fanfare may have faded. If you work with real places, whether in tourism, heritage, planning or training, it helps to have a clear map of what is new, what is solid and what is still unsettled."),
      p("This article surveys the main developments, explains why each matters and offers a way to decide what to adopt. It reflects the situation at the time of writing, and details such as browser support and standards move quickly, so check current status before committing."),

      h2("1. Gaussian splatting and neural scene capture"),
      p("The biggest change in capture is the arrival of neural and splat-based methods. Neural radiance fields, from 2020, showed that a model could learn a scene from photographs. Gaussian splatting, from 2023, made the result real-time, and tools for capturing, editing and viewing splats now exist for phones, browsers and engines."),
      ul(
        "Why it matters: highly realistic captures of real places from ordinary video, in minutes.",
        "Still developing: editing, relighting, compression, surfaces for physics and a common file standard.",
        "Practical advice: use it for visual showcases, and keep meshes and point clouds where you need measurement or interaction.",
      ),

      h2("2. Meshes keep getting better"),
      p("It is easy to think that meshes are yesterday’s technology, but they have improved in important ways."),
      ul(
        "Virtualised geometry. Modern game engines can draw scenes of astonishing triangle counts by loading only the detail the viewer can see, which reduces the need for manual simplification.",
        "Mesh shaders and GPU-driven pipelines make better use of graphics hardware for huge models.",
        "AI-assisted clean-up. Tools can now help fill holes, simplify, retopologise and generate textures, and cut hours from the work of preparing a scan.",
        "Methods that extract clean surfaces from neural and splat captures are an active research area, linking the two worlds.",
      ),

      h2("3. AI-generated 3D"),
      p("Systems that turn a text description or a single image into a 3D model have improved rapidly. They are useful for concept work, background objects, quick props and early layouts."),
      ul(
        "Strengths: speed, low cost and creative range.",
        "Weaknesses: inconsistent quality, odd geometry, weak topology for animation and unclear licensing or data sources in some tools.",
        "Practical advice: use them for drafts and filler, check the licence of any tool and treat the output like a rough sketch that a person must refine. They do not replace capturing a real, specific place accurately.",
      ),

      h2("4. WebGPU and better 3D in the browser"),
      p("WebGPU is a modern way for web pages to use the graphics chip, replacing an older interface that dated from the early 2010s. It brings better performance, support for compute work and a design closer to current graphics hardware. Support has expanded across the main browsers in recent years, but not everywhere on every device, so provide a fallback."),
      ul(
        "Why it matters: richer, faster 3D on the web, without an app, including splat viewers and large scenes.",
        "Practical advice: use libraries that support both the old and new interface, and test on the devices your audience actually owns.",
      ),

      h2("5. Standards for sharing"),
      ul(
        "glTF is now the default way to deliver 3D on the web and in AR, with extensions for compression, materials and, increasingly, new kinds of data.",
        "OpenUSD, backed by an industry alliance formed in 2023, is gaining ground as a way to assemble complex scenes from many tools, particularly in film, design and industrial digital twins.",
        "3D Tiles streams huge geospatial datasets, from city-scale photogrammetry to terrain, and has been extended with richer metadata.",
        "Work to carry Gaussian splats inside glTF aims to let splats travel like any other asset.",
      ),
      p("Standards matter because they protect you from lock-in. Prefer open, widely supported formats for anything you want to keep."),

      h2("6. Mixed reality and spatial computing hardware"),
      p("Headsets have moved from pure VR to devices with high-quality colour passthrough, which show the real world through cameras and let digital objects sit in your room. Hand and eye tracking are becoming standard, so you can interact without controllers. Some devices are positioned as spatial computers, aimed at work, media and design, not only games."),
      ul(
        "Why it matters: mixed reality becomes practical for training, design review and guided work in real places.",
        "Still developing: price, weight, battery life, comfort over long sessions and the range of useful applications.",
        "Practical advice: design for several devices, and favour web-based and standards-based content, so that you are not tied to one headset.",
      ),

      h2("7. Smarter capture hardware"),
      ul(
        "Phones and tablets with LiDAR sensors make quick room scans possible.",
        "Handheld and backpack scanners map interiors and large sites quickly.",
        "Cheaper drones carry sensors that once cost a fortune.",
        "Cameras with 360 degree coverage and better stitching speed up virtual tours.",
      ),

      h2("8. Digital twins grow up"),
      p("Digital twins are moving from showpieces to working tools, with better links between 3D models, sensors, GIS and analytics. The challenge has shifted from building the model to keeping it current, governed and useful, which is a people and process problem more than a graphics one."),

      h2("How to judge a new technology"),
      ol(
        "What real problem does it solve for us, and who would use it?",
        "What does it cost to capture, produce and maintain, over two years?",
        "How mature are the tools and standards, and who supports them?",
        "What happens if it fades? Can we keep the source data and move to something else?",
        "Can we test it cheaply first, on one place and one audience?",
      ),
      note("Chase problems, not trends. A modest technique that solves your problem will beat a spectacular one that does not."),

      h2("A simple plan to keep up"),
      ul(
        "Follow two or three reliable sources, such as standards bodies, tool release notes and respected researchers.",
        "Set aside a few hours a quarter for a small experiment with one new method.",
        "Keep your raw data, so that you can re-process it when better methods arrive.",
        "Share what you learn with your team in a short note.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Should we switch everything to Gaussian splats?", "No. Use them where realism matters most, and keep meshes and point clouds where you need to measure, edit or interact."],
        ["Will AI replace 3D artists and surveyors?", "It is changing their tools and speeding up parts of the work, but accuracy, judgement and knowledge of the place remain human responsibilities."],
        ["Is it worth buying a mixed reality headset now?", "For testing and for specific training or design uses, yes. For broad public reach, web-based 3D and phone AR are still the safer choice."],
        ["How do I protect my project from changing technology?", "Keep original captures, use open formats and separate your content from any one platform."],
      ),
      p("The pace of change is a reason for curiosity, not for anxiety. Understand what each development is for, test it on a real problem and keep your source material safe, and you can take advantage of what is new without being swept along by it."),
    ],
  },
];
