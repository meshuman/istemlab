// Learn > "Back to Basics" path, part B: optics, perception, learning, and putting the maths into code.
// Reading time is calculated automatically (lib/readtime.js).

import { p, h2, ul, ol, code, note, qa } from "./blocks";

export const basicsB = [
  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "optics-photogrammetry-basics",
    title: "How cameras capture 3D: optics, parallax and photogrammetry",
    excerpt: "From the pinhole camera to drone mapping: how photographs become measurements, and what limits their accuracy.",
    topic: "Back to Basics",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "A camera turns 3D space into a flat image. Photogrammetry reverses that, using many overlapping photos.",
      "Ground sample distance depends on flying height, pixel size and focal length: GSD = height × pixel pitch ÷ focal length.",
      "Depth comes from parallax: nearby objects shift more between two views than distant ones.",
      "Plain, shiny, moving or poorly lit surfaces break photogrammetry, so plan the capture around them.",
    ],
    body: [
      p("Drone maps, 3D models of heritage sites and photorealistic virtual tours all begin with the same humble object: a camera. A photograph flattens a three-dimensional world into two dimensions. Photogrammetry is the craft of reversing that, recovering shape and measurement from many overlapping images. It is the engine behind much of the 3D content used in GeoAI, virtual reality and mixed reality, and knowing how it works explains both its power and its limits."),

      h2("The pinhole camera model"),
      p("The simplest way to understand a camera is a dark box with a tiny hole. Light from each point of the scene passes through the hole and lands on a single point of the sensor, forming an upside-down image. Real lenses gather more light, but the geometry is the same: each pixel corresponds to a ray of light coming from a particular direction."),
      p("Two numbers describe this camera. The focal length is the distance from the lens to the sensor. The sensor size sets how much of the view is captured. Together they give the field of view. A larger focal length, a telephoto lens, sees a narrow slice of the world, and a short one sees a wide scene."),
      ul(
        "Field of view = 2 × arctan (sensor width ÷ (2 × focal length)).",
        "A one-inch sensor, 13.2 millimetres wide, behind an 8.8 millimetre lens sees about 74 degrees across.",
      ),

      h2("Ground sample distance from the air"),
      p("When a drone or aircraft photographs the ground, how large is one pixel on the ground? The answer follows from similar triangles: the ground sample distance equals the flying height multiplied by the pixel pitch, divided by the focal length. Pixel pitch is the size of one pixel on the sensor."),
      ul(
        "Sensor width 13.2 mm, 5,472 pixels across: pixel pitch is about 2.41 micrometres.",
        "Focal length 8.8 mm, flying height 100 m: GSD = 100 × 0.00000241 ÷ 0.0088, which is about 2.7 centimetres per pixel.",
        "Fly twice as high and the pixels become twice as large, but each photo covers four times the area.",
      ),
      p("This is the formula that lets you plan a flight: choose the detail you need, and it tells you the altitude."),

      h2("Depth from two views: parallax"),
      p("Hold a finger in front of your face and close each eye in turn. The finger seems to jump sideways against the background, a lot more than a distant tree does. That shift is parallax, and its size tells you the distance. Two photographs taken from different positions work the same way. The distance between the two camera positions is called the baseline."),
      ul(
        "Nearby objects shift a lot between the two images, and distant ones barely move.",
        "With a known baseline and focal length, the shift (the disparity) gives depth by triangulation.",
        "A longer baseline gives better depth accuracy, but makes it harder to match points between images.",
      ),

      h2("Structure from motion: many photos, one model"),
      p("Modern photogrammetry applies that principle to hundreds of photos at once. A typical pipeline has these steps."),
      ol(
        "Find features: the software detects thousands of distinctive points in every image, such as corners and textures.",
        "Match them: it finds the same points in overlapping images.",
        "Solve the geometry: it works out where each camera was and where each point lies, adjusting everything together until the errors are as small as possible. This step is called bundle adjustment.",
        "Densify: it computes depth for most pixels, producing a dense point cloud.",
        "Build a mesh and a texture: the points become a surface covered with image colour.",
        "Produce outputs: an orthomosaic (a map-accurate image), an elevation model or a 3D model.",
      ),

      h2("Planning the capture"),
      ul(
        "Overlap. Mapping flights usually need about 70 to 80 percent overlap along the flight direction and 60 to 70 percent between lines, so that every point appears in several images.",
        "Consistent light. Overcast days give soft, even light. Strong shadows that move during the flight make matching harder.",
        "Sharp images. Fast shutter speeds avoid motion blur, and a steady drone helps.",
        "Control points. Marked points on the ground, surveyed with accurate GNSS, tie the model to real-world coordinates and improve accuracy.",
        "Calibration. Lenses distort images slightly, and software estimates and corrects this.",
      ),

      h2("What goes wrong"),
      ul(
        "Surfaces without texture, such as calm water, fresh snow and plain walls, give the software nothing to match.",
        "Shiny or transparent surfaces, such as glass and polished metal, change appearance with the viewpoint.",
        "Moving objects, such as cars, people and swaying trees, appear in different places in different photos.",
        "Thin structures, such as wires and railings, are often lost or smeared.",
        "Too little overlap leaves holes and weak geometry.",
        "A rolling shutter, found in many cameras, distorts fast-moving scenes.",
      ),
      note("If the result looks distorted, such as a dome-shaped ground or bent roads, check the calibration and the control points before blaming the software."),

      h2("Laser scanning as an alternative"),
      p("LiDAR measures distance directly. It sends a pulse of laser light and times its return. Distance is the speed of light multiplied by the travel time, divided by two, because the light goes out and back. Scanners from a drone, aircraft or tripod record millions of points per second, and the pulses can pass between leaves to reach the ground. It works well in forests, in poor light and on plain surfaces, but the equipment is more expensive, and it does not record colour on its own. Many projects combine both."),

      h2("From capture to VR and mixed reality"),
      ul(
        "Raw models contain millions of polygons. Headsets and phones have limited power, so models must be simplified.",
        "Levels of detail show a detailed version up close and a lighter one far away.",
        "Textures are compressed, because memory is limited.",
        "Real-world scale and orientation must be correct, or the scene will not fit the room or the site.",
        "Accuracy depends on ground sample distance and geometry. A model good enough for a tour may not be good enough to measure a crack.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["How accurate is drone photogrammetry?", "With good overlap, calibration and surveyed control points, results of a few centimetres are achievable. Without control points, the absolute position may be off by metres, though relative measurements within the model can still be good."],
        ["How many photos do I need?", "It depends on the area and the detail. A small site may need a few hundred. What matters more is the overlap and the consistent coverage."],
        ["Can I use photos from a phone?", "Yes, for small objects and scenes, and many people do. Keep the camera settings fixed, move steadily, and cover the object from many angles."],
        ["Photogrammetry or LiDAR?", "Photogrammetry is cheaper and gives colour, and suits open, textured scenes. LiDAR suits vegetation, plain surfaces and low light. If you can, use both."],
      ),
      p("Photogrammetry feels like magic because the software does so much for you. But it rests on school-level geometry and the physics of light, and understanding it lets you plan better flights, spot bad models quickly and know what accuracy to promise."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "perception-physiology-vr",
    title: "The human body in VR and mixed reality: perception, latency and comfort",
    excerpt: "Why some virtual worlds feel natural and others make people ill, and the science of eyes, balance and timing behind it.",
    topic: "Back to Basics",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "Comfort in VR is largely a matter of biology: vision, balance and timing must agree.",
      "Delays between head movement and the displayed image are a major cause of discomfort, so frame rate and latency matter.",
      "Artificial movement that the inner ear does not feel is the classic cause of motion sickness.",
      "Design for real bodies: short sessions, comfortable movement options and testing with new users.",
    ],
    body: [
      p("A headset is a device for fooling your senses, and your senses are demanding. They compare what your eyes see with what your inner ear feels, how your body is moving and how fast the picture follows your head. When these agree, you feel present in another place. When they disagree, you feel strange, dizzy or ill. Many of the most important rules in VR and mixed reality design are not about technology at all. They are about human physiology."),
      p("This article explains the main ideas in plain language, so that you can design experiences that people enjoy and finish, rather than abandon."),

      h2("How we see in three dimensions"),
      p("Humans judge depth in several ways. Some work with one eye: things that are smaller look farther away, parallel lines converge, nearer objects block farther ones and shadows give shape. Others need two eyes. Each eye sees a slightly different view, and the brain compares them. This is stereoscopic vision, and a headset reproduces it by showing a slightly different image to each eye."),
      ul(
        "The distance between the eyes, the interpupillary distance or IPD, is usually around 63 millimetres on average, and varies from person to person roughly between 54 and 74. Headsets let users adjust for it, and an incorrect setting causes strain and wrong sense of scale.",
        "Depth cues must agree. If shadows, size and stereo disagree, the scene feels wrong.",
      ),

      h2("The focus problem"),
      p("In real life, when your eyes turn inward to look at something near, they also focus on it. In most headsets, the screen is a fixed distance away, so your eyes focus there, whatever the scene shows, while turning inward to look at virtual objects that seem nearer or farther. This mismatch is called the vergence-accommodation conflict, and it is a known cause of eye strain. Designers reduce it by keeping important content at a comfortable distance, roughly from half a metre to a few metres, and avoiding objects very close to the face."),

      h2("Balance and the inner ear"),
      p("Your inner ear senses acceleration and the direction of gravity. When you walk, your eyes and inner ear report the same motion. In VR, if you push a joystick and the world glides forward, your eyes say that you are moving and your inner ear says that you are sitting still. A leading explanation for motion sickness is this conflict between the senses."),
      ul(
        "Smooth, artificial movement, especially acceleration and turning, is the most common trigger.",
        "Movement that the body actually performs, such as walking in a tracked room space, rarely causes problems.",
        "Sensitivity varies. Some people are fine for hours, and others feel unwell within minutes.",
      ),

      h2("Timing: frame rate and latency"),
      p("When you turn your head, the image must follow almost instantly. The delay from head movement to the corresponding update on the screen is called motion-to-photon latency. If it is long, the world seems to swim, and discomfort rises. A commonly cited target is below about 20 milliseconds, and headsets typically run at 72 hertz or more, with many at 90 to 120."),
      ul(
        "Low frame rates make movement look jerky, and strain the eyes.",
        "Unstable frame rates are worse than steadily lower ones.",
        "Performance budgets matter. A scene too heavy for the hardware will cause discomfort, however beautiful it is.",
      ),

      h2("Sharpness and legibility"),
      p("The eye can resolve much finer detail than headsets show. The human eye reaches roughly 60 pixels per degree at the centre of vision, and many headsets provide around 20 to 30. Small text, fine lines and distant details can therefore be blurry. Keep text large and high in contrast, and keep important information near the centre of view."),

      h2("Design that respects the body"),
      ul(
        "Offer teleportation or fade-to-black movement as an alternative to smooth walking.",
        "Add comfort options, such as a vignette that narrows the view during movement.",
        "Keep the horizon stable, and avoid sudden or forced camera movement and rotation.",
        "Keep sessions short, perhaps ten to twenty minutes at first, and let people stop at any time.",
        "Let people sit or stand, and make sure that content is reachable.",
        "Provide a non-headset alternative for those who cannot or prefer not to use one.",
      ),

      h2("Presence, scale and sound"),
      ul(
        "Eye height matters. If the virtual floor is not at the right distance, the scale of the whole world feels wrong.",
        "Hands and body. Seeing your hands move correctly increases the sense of presence.",
        "Spatial audio. Sounds that come from the correct direction and distance anchor the scene, and help people find things.",
        "Consistency. Objects that behave according to the rules of the real world are more convincing than beautiful ones that do not.",
      ),

      h2("Mixed reality adds its own challenges"),
      ul(
        "Registration: virtual objects must stay locked to real places, and small tracking drift is noticeable.",
        "Occlusion: virtual objects should be hidden by real ones in front of them, otherwise depth looks wrong.",
        "Lighting: virtual objects look fake if their lighting does not match the room.",
        "Brightness: outdoors, bright sunlight washes out many displays.",
        "Safety: users still move in a real space, so keep them aware of obstacles and other people.",
      ),
      note("The best test of any VR or mixed reality experience is to watch a first-time user. Their comfort and confusion will tell you more than any specification."),

      h2("Frequently asked questions"),
      qa(
        ["Why do some people get motion sick in VR and others do not?", "Sensitivity to sensory conflict varies between people, and with experience. Many people adapt with practice, and shorter, gentler sessions help."],
        ["Is a higher frame rate always better?", "Higher is generally more comfortable, up to the limits of the display. But a stable frame rate matters more than a high one that frequently drops."],
        ["Is VR safe for children?", "Many manufacturers set a minimum age, often around 13, because children’s visual systems are still developing. Follow the manufacturer’s guidance and keep sessions short."],
        ["How do I test comfort?", "Test with people who have never used VR, at different times, and ask them how they feel during and after. Keep a record of what they were doing when they felt uncomfortable."],
      ),
      p("The best immersive experiences are built by teams who respect the body that will wear the headset. Understand how people see, balance and respond, and your designs will be comfortable, convincing and far more likely to deliver what you hoped."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "concepts",
    slug: "how-models-learn-gradient-descent",
    title: "How machine learning models learn: loss, gradients and why data matters",
    excerpt: "A plain-language tour of training, overfitting and generalisation, so you know what a model can and cannot be trusted to do.",
    topic: "Back to Basics",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "A model is a function with adjustable settings. Training adjusts them to reduce a measure of error called the loss.",
      "Gradient descent improves the settings in small steps, like walking downhill in fog.",
      "A model learns patterns in its training data, so poor, narrow or biased data produces a poor, narrow or biased model.",
      "Always test on data the model has not seen, and in conditions like those of real use.",
    ],
    body: [
      p("Machine learning can feel like a black box that magically finds patterns. In truth, the central idea is surprisingly simple, and understanding it makes you a much sharper user of AI tools. It helps you see why a model fails in a new region, why more data does not always help and why the way you measure success shapes what you get."),
      p("This article explains how models learn, with a tiny example you can follow by hand."),

      h2("A model is a machine with knobs"),
      p("Think of a model as a function that takes inputs and returns an output. A simple example is a line, y equals w times x plus b, where w and b are the settings, often called parameters or weights. Change the settings, and the line changes. A neural network is the same idea with millions or billions of settings. Training means finding the settings that make good predictions."),

      h2("Measuring wrongness: the loss"),
      p("To improve anything, you need a way to measure how bad it is now. That measure is the loss function. For predicting a number, a common choice is the average of the squared differences between prediction and truth. For classifying images, it is a measure of how much probability the model gave to the correct answer. A lower loss means better predictions."),
      note("The loss defines what the model tries to do. If the loss does not match what you actually care about, the model will happily optimise the wrong thing."),

      h2("Gradient descent: walking downhill in fog"),
      p("Imagine standing on a hilly landscape in thick fog, trying to reach the lowest point. You cannot see far, but you can feel which way the ground slopes under your feet. So you take a small step downhill, feel again and repeat. That is gradient descent. The landscape is the loss, your position is the setting of the model and the slope is the gradient, found with calculus."),
      p("A tiny example makes it concrete. Suppose a single setting w should be 3, and the loss is the square of the distance from 3. The gradient is two times (w minus 3). Start at w equals 0, and use a step size, called the learning rate, of 0.1."),
      ul(
        "Step 1: the gradient is 2 × (0 − 3) = −6. Move w to 0 − 0.1 × (−6) = 0.6.",
        "Step 2: the gradient is 2 × (0.6 − 3) = −4.8. Move w to 1.08.",
        "Step 3: w becomes 1.464. Step 4: 1.7712.",
        "Each step gets closer to 3, and the steps shrink as the slope flattens.",
      ),
      p("The learning rate matters. Too small, and training crawls. Too large, and the steps overshoot the bottom and bounce around, or even diverge. Real training adjusts millions of settings at once, using the same principle."),

      h2("Training, validation and test data"),
      ol(
        "Training data: the examples the model learns from.",
        "Validation data: examples held back to compare settings and decide when to stop.",
        "Test data: examples used once at the end, to estimate real-world performance.",
      ),
      p("Keeping them separate is essential. A model that is judged on the examples it has learned from is like a student who sees the exam questions in advance."),

      h2("Overfitting and generalisation"),
      p("A model can learn the training data too well, memorising quirks and noise instead of the underlying pattern. It then performs brilliantly on training data and poorly on anything new. This is overfitting. The aim is generalisation, which means performing well on data that the model has not seen."),
      ul(
        "Warning sign: training accuracy keeps rising while validation accuracy stalls or falls.",
        "Remedies: more varied data, simpler models, regularisation, data augmentation and stopping training earlier.",
      ),

      h2("Why data decides so much"),
      ul(
        "A model can only learn patterns that are in its data. If crops appear only in summer images, it will not recognise them in winter.",
        "Mislabelled examples teach the wrong lessons, and noisy labels cap how good a model can be.",
        "Imbalanced classes lead a model to favour the common one, because it scores well while ignoring the rare one.",
        "Bias in the data becomes bias in the model. If one region or group is missing, the model will serve it poorly.",
        "Domain shift, such as a new sensor, season or country, can quietly reduce accuracy.",
      ),

      h2("Scaling and units"),
      p("Models are sensitive to the numbers you give them. If one input ranges from 0 to 1 and another from 0 to 100,000, the large one can dominate training. Standardising inputs to a similar scale is a routine step. Units matter too: feeding a model elevation in metres in training and in feet at use gives nonsense, without any error message."),

      h2("What fine-tuning means"),
      p("Fine-tuning takes a model already trained on a large, general dataset and continues training on a smaller, specific one. It is like hiring an experienced professional and teaching them your organisation’s way of working. It saves time and data, and is common for image models and language models. It does not remove the need for good, representative data in your own setting, and for honest testing."),

      h2("Randomness and reproducibility"),
      p("Training involves randomness: the starting values, the order of examples, and the way data is split. Two runs can give slightly different results. Fix the random seeds, record the settings, and run a few repeats before drawing conclusions from a small difference."),

      h2("Frequently asked questions"),
      qa(
        ["Does more data always make a model better?", "Not always. More varied, accurate data helps. More of the same, or data with errors, can add little or even hurt."],
        ["Why does my model work in the lab and fail in the field?", "Usually because the field data differs from the training data, through a different season, sensor, region or quality. Test on conditions that match real use."],
        ["What is the difference between a parameter and a hyperparameter?", "Parameters are learned during training, like the weights. Hyperparameters are choices you make beforehand, such as the learning rate or the number of layers."],
        ["Do I need to understand calculus to use machine learning?", "Not to use it. But knowing what a gradient and a loss are will help you diagnose problems and talk sensibly with specialists."],
      ),
      p("A model is not intelligent in the human sense. It is a very flexible function, adjusted to fit examples. Knowing that tells you where to trust it, where to test it and what you must supply yourself: good data, a sensible measure of success and the judgement to apply it in context."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "tutorials",
    slug: "maths-in-code-rotations-and-distances",
    title: "Maths in code: distances on the Earth and rotations in 3D with Python",
    excerpt: "Put the fundamentals to work: measure real distances, rotate points, convert pixels to map coordinates and see floating-point limits for yourself.",
    topic: "Back to Basics",
    level: "Beginner",
    date: "2026-10-17",
    takeaways: [
      "The haversine formula measures great-circle distance and avoids the 11 percent error of treating degrees as flat.",
      "A rotation matrix preserves lengths, and the order in which rotations are combined changes the result.",
      "A raster’s geotransform is a transformation from pixel to map coordinates, and image rows run opposite to northings.",
      "Floating-point numbers lose precision far from the origin, so use a local origin for large coordinates.",
    ],
    body: [
      p("Reading about vectors, datums and precision is useful. Running a few lines of code that show them in action is better. In this tutorial you will use Python and numpy to measure distances on a curved Earth, rotate points in 3D, convert pixels to map coordinates and watch floating-point numbers misbehave. Each exercise is small, and each ends with a check that you can compare with the numbers in this article."),

      h2("What you need"),
      ul(
        "Python 3.9 or newer.",
        "The numpy package.",
        "A text editor or notebook, and about thirty minutes.",
      ),
      code("bash", "pip install numpy"),

      h2("Exercise 1: distance between two cities"),
      p("We will measure the distance between Kathmandu and Pokhara in two ways: the wrong way and the right way."),
      code(
        "python",
        "import math\n\nEARTH_RADIUS_KM = 6371.0088\n\ndef haversine_km(lat1, lon1, lat2, lon2):\n    phi1, phi2 = math.radians(lat1), math.radians(lat2)\n    dphi = phi2 - phi1\n    dlambda = math.radians(lon2 - lon1)\n    a = math.sin(dphi / 2) ** 2 + math.cos(phi1) * math.cos(phi2) * math.sin(dlambda / 2) ** 2\n    return 2 * EARTH_RADIUS_KM * math.asin(math.sqrt(a))\n\nktm = (27.7172, 85.3240)   # latitude, longitude\npkr = (28.2096, 83.9856)\n\ngood = haversine_km(*ktm, *pkr)\nnaive = 111.0 * math.hypot(pkr[0] - ktm[0], pkr[1] - ktm[1])   # treats degrees as flat\n\nprint(f\"haversine: {good:.1f} km\")\nprint(f\"naive:     {naive:.1f} km  ({(naive - good) / good:+.1%})\")"
      ),
      p("You should see about 142.4 kilometres for the haversine, and about 158.3 for the naive version, an error of roughly 11 percent. The naive version overestimates because a degree of longitude near 28 degrees north is about 98 kilometres, not 111."),
      note("Notice two details. Angles were converted to radians before any sine or cosine, and latitude comes before longitude in our tuples. Swapping either is a classic bug."),

      h2("Exercise 2: rotate a point and check its length"),
      p("A rotation matrix turns a point around an axis without changing its distance from the origin. We build one for each axis and test it."),
      code(
        "python",
        "import numpy as np\n\ndef rot_z(deg):\n    t = np.radians(deg)\n    return np.array([[np.cos(t), -np.sin(t), 0],\n                     [np.sin(t),  np.cos(t), 0],\n                     [0,          0,         1]])\n\ndef rot_x(deg):\n    t = np.radians(deg)\n    return np.array([[1, 0,          0],\n                     [0, np.cos(t), -np.sin(t)],\n                     [0, np.sin(t),  np.cos(t)]])\n\npoint = np.array([1.0, 0.0, 0.0])\nturned = rot_z(90) @ point\n\nprint(np.round(turned, 6))                                  # expect [0, 1, 0]\nprint(np.isclose(np.linalg.norm(turned), np.linalg.norm(point)))   # length preserved: True"
      ),
      p("A 90 degree turn about the vertical axis swings the point from the x axis to the y axis, and its length stays 1. Whenever you build a rotation, check both."),

      h2("Exercise 3: the order of rotations matters"),
      code(
        "python",
        "p = np.array([0.0, 1.0, 0.0])\n\na = rot_z(90) @ rot_x(90) @ p     # rotate about x first, then z\nb = rot_x(90) @ rot_z(90) @ p     # rotate about z first, then x\n\nprint(np.round(a, 6))   # [0, 0, 1]\nprint(np.round(b, 6))   # [-1, 0, 0]"
      ),
      p("Same two rotations, different results. When you combine transformations in a game engine, a headset’s tracking code or a GIS, you are choosing an order, so choose deliberately. Matrix products apply from right to left: the one nearest the point acts first."),

      h2("Exercise 4: from a pixel to a map coordinate"),
      p("A georeferenced raster stores a few numbers that convert a pixel’s column and row to a position on the map. For an image with 10 metre pixels, whose top-left corner is at x 500,000 and y 3,100,000 metres, the conversion is as follows."),
      code(
        "python",
        "x0, y0, pixel = 500_000.0, 3_100_000.0, 10.0\n\ndef pixel_to_map(col, row):\n    x = x0 + col * pixel + pixel / 2       # +pixel/2 gives the pixel centre\n    y = y0 - row * pixel - pixel / 2       # minus: rows go DOWN, northings go UP\n    return x, y\n\ndef map_to_pixel(x, y):\n    col = int((x - x0) // pixel)\n    row = int((y0 - y) // pixel)\n    return col, row\n\nx, y = pixel_to_map(250, 100)\nprint(x, y)                      # 502505.0 3098995.0\nprint(map_to_pixel(x, y))        # (250, 100): round trip works"
      ),
      p("The minus sign on y is the single most common source of upside-down maps. Always test a conversion by going there and back."),

      h2("Exercise 5: when numbers run out of digits"),
      p("Computers store real numbers with limited precision. Most graphics code uses 32-bit floats, which hold about seven significant digits. Watch what happens with large map coordinates."),
      code(
        "python",
        "big = np.float32(5_000_000.0)      # a UTM-style northing in metres\nprint(np.spacing(big))             # smallest step this number can take: 0.5\nprint(big + np.float32(0.01) == big)   # True: adding a centimetre does nothing\n\nprint(np.spacing(5_000_000.0))     # 64-bit float: about 9e-10"
      ),
      p("A 32-bit number at five million metres cannot represent anything finer than half a metre. In a 3D scene far from the origin, vertices jitter, and in VR that shaking is very noticeable. The cure is to subtract a local origin from your coordinates, so that numbers stay small, and keep the full coordinates in 64-bit precision."),

      h2("Turn your checks into tests"),
      p("These exercises are also a ready-made test suite. Collect them as automatic checks that you can run any time you change code."),
      code(
        "python",
        "def test_basics():\n    assert abs(haversine_km(*ktm, *pkr) - 142.4) < 0.2\n    assert np.allclose(rot_z(90) @ np.array([1.0, 0, 0]), [0, 1, 0], atol=1e-9)\n    assert map_to_pixel(*pixel_to_map(250, 100)) == (250, 100)\n\ntest_basics()\nprint(\"All checks passed\")"
      ),

      h2("What to try next"),
      ul(
        "Compute the distance with a geodesic library, and compare it with the haversine. The difference is usually a few tenths of a percent.",
        "Build a function that converts latitude and longitude to a local east-north-up frame around a chosen point.",
        "Use degrees where you should have used radians, and see how wrong the output is. Knowing what the error looks like is half the cure.",
        "Ask an AI assistant to write the same functions, and run these tests against its code.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Why use radians instead of degrees?", "Because the mathematics of sine, cosine and their derivatives is simplest in radians, so most programming languages expect them. Convert at the edge of your code and stay consistent inside it."],
        ["Is the haversine accurate enough?", "For most analysis, yes: it is usually within about half a percent. For surveying, use an ellipsoidal geodesic."],
        ["What is the difference between a rotation matrix and a quaternion?", "Both represent orientation. Matrices are easy to understand and combine, while quaternions avoid gimbal lock and interpolate smoothly, so tracking systems prefer them."],
        ["Why do my 3D objects shake far from the origin?", "Because single-precision numbers lose resolution at large values. Re-centre the scene near the area of interest."],
      ),
      p("None of these exercises needs more than a few lines. That is the point. The fundamentals are small, and once you can test them quickly, you can verify the larger, more complex code that AI tools generate for you."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    seed: true,
    type: "guides",
    slug: "verify-ai-generated-code",
    title: "How to check AI-generated GIS, 3D and machine learning code before you trust it",
    excerpt: "A practical review routine that catches the quiet mistakes, with the context to give an AI assistant so it gets things right the first time.",
    topic: "Back to Basics",
    level: "Intermediate",
    date: "2026-10-17",
    takeaways: [
      "AI-generated code often looks correct and runs cleanly while being wrong in ways that only domain knowledge reveals.",
      "Give the assistant context: coordinate system, units, sensor, sizes and constraints, and ask it to state its assumptions.",
      "Test with known answers, compare with a trusted tool and draw the output.",
      "You remain responsible for the result, so keep a record of what you checked.",
    ],
    body: [
      p("AI assistants now write a surprising share of the code for mapping, 3D scenes and machine learning. The code is usually tidy, well commented and confident. It also quietly assumes things about your data that may not be true. The cost of a quiet mistake in this field can be high: an area measured in square degrees, an elevation model in the wrong height system, a model tested on data it has already seen."),
      p("This guide gives you a routine for checking AI-generated work, and a way of briefing the assistant that prevents many errors before they happen. It is the practical side of the idea running through this learning path: AI can build, and people are needed to develop, tune and contextualise."),

      h2("Why AI code goes wrong in this field"),
      ul(
        "It does not know your data. It cannot see your coordinate system, units, sensor or no-data values unless you say so.",
        "It reaches for common defaults, which may be wrong for your region or task.",
        "It writes plausible code. A function that runs without error is not the same as one that is correct.",
        "It may mix up conventions, such as latitude and longitude order, or rows and columns.",
        "It can invent functions and options that do not exist in a library, or use outdated ones.",
      ),

      h2("Step 1: brief the assistant properly"),
      p("The quality of the code depends on the context you provide. Before asking for anything, write down the facts that matter."),
      ul(
        "The coordinate reference system and units of each dataset.",
        "The sensor, bands, resolution, data type and no-data value.",
        "The shape and order of arrays, for example bands, rows, columns.",
        "The size of the data, so that it chooses approaches that fit in memory.",
        "The libraries and versions you use.",
        "What a correct answer looks like, with one example you already know.",
      ),
      p("Then ask the assistant to list every assumption it is making, and to explain why. Read that list first. Wrong assumptions are easy to spot when they are written down."),

      h2("Step 2: the ten-point review"),
      ol(
        "Units. Are lengths in metres, feet or degrees, and are angles in degrees or radians? Is any conversion explicit?",
        "Coordinate systems. Does every layer share one system? Are measurements made in a suitable projected system, not in degrees?",
        "Axis order. Is it latitude and longitude, or x and y? Are image rows treated as running downwards?",
        "Array shape and dtype. Is it bands first or last? Integer division or overflow where floats are needed?",
        "No-data. Are masked, missing and cloud pixels handled before statistics are computed?",
        "Resampling. Nearest neighbour for classes, and bilinear or cubic for continuous values?",
        "Data leakage. Does anything from the test set influence training, including through spatial neighbours or scaling computed on all the data?",
        "Evaluation. Are the metrics suited to the problem, such as recall for rare events, and tested on separate areas?",
        "Edge cases. What happens with empty inputs, a single pixel, the date line or very large values?",
        "Libraries. Do the functions and arguments exist in your installed version? Are defaults suitable?",
      ),

      h2("Step 3: test with known answers"),
      p("The fastest way to find a mistake is to give the code a case whose answer you know."),
      ul(
        "A distance between two points you can measure another way.",
        "A rotation of a point by 90 degrees, which must land on a different axis, with the same length.",
        "A small raster where you can compute the answer by hand.",
        "A polygon whose area you know, such as a one-hectare square.",
        "A model that must score near chance on random labels, and well on a trivially easy set.",
      ),
      p("Write these as small automatic tests, and run them whenever the code changes, including when you ask the assistant to modify it."),

      h2("Step 4: compare with a trusted tool"),
      p("For spatial work, a free desktop GIS makes an excellent referee. Load the input and the output, and check the position, the extent, the pixel size and the values. Measure a few features with the measuring tool. If a script’s output sits in the wrong place or has the wrong size, a GIS will show it in seconds."),

      h2("Step 5: look at it"),
      p("Plot or map the result. Many errors are glaringly obvious on a picture and invisible in numbers: flipped images, shifted layers, strips of missing data, stripes at tile edges, and a classification that follows terrain or shadows. Ask whether the picture agrees with what you know about the place."),

      h2("A worked example: area in square degrees"),
      p("You ask an assistant for code that computes the area of each field in a file of polygons. It reads the file and returns the polygon area for each feature. The numbers look small and reasonable, and the code runs cleanly."),
      ul(
        "The check: you try it on a square you know covers one hectare. It reports a tiny number such as 0.0000011.",
        "The cause: the file is in latitude and longitude, so the area is in square degrees.",
        "The fix: reproject to a suitable projected system in metres before computing area, or use a geodesic area function.",
        "The lesson: the unit check and one known-answer test found in two minutes what could have misreported a district’s farmland.",
      ),

      h2("Handle sensitive material carefully"),
      ul(
        "Do not paste secrets, passwords or personal data into an assistant.",
        "Check where your data goes when you share it with an online service.",
        "Read unfamiliar code before running it, particularly anything that deletes files, uses the network or installs software.",
        "Review licences when code resembles known open-source projects.",
      ),

      h2("Keep a record"),
      p("Write down what you asked, what the assistant produced, what you checked and what you changed. This short record helps when a result is questioned, helps colleagues reproduce the work and teaches you which kinds of mistakes your assistant makes most."),

      h2("Who does what"),
      ul(
        "The assistant drafts, explains, translates and suggests alternatives.",
        "You define the problem, supply the context, test against reality and decide what is good enough.",
        "Your organisation sets the rules for data, review and accountability.",
      ),

      h2("Frequently asked questions"),
      qa(
        ["Should I stop using AI for code?", "No. Used with this routine, it speeds up good work. The aim is to combine its speed with your checking."],
        ["How much checking is enough?", "Match the effort to the stakes. A quick sketch needs less than a map that will guide a decision about land, money or safety."],
        ["Can I ask the AI to check its own code?", "It can find some problems, and writing tests is a good use of it. But it can share the same blind spots, so keep independent checks, such as known answers and a GIS."],
        ["What if I do not understand the code it wrote?", "Ask it to explain line by line, simplify it or rewrite it more plainly. If you still cannot follow it, do not rely on it for important results."],
      ),
      p("The fundamentals are what make this routine work. Units, coordinate systems, statistics and the physics of your data tell you what to check and how to recognise a wrong answer. With them, AI becomes a powerful, trustworthy assistant. Without them, you are trusting a confident stranger."),
    ],
  },
];
