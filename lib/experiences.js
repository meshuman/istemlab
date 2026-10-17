// Lessons from planning and operationalizing projects.
// `seed: true` entries are demo write-ups: replace them with your team's real experiences.
export const experiences = [
  {
    seed: true,
    slug: "start-with-the-decision-not-the-dashboard",
    title: "Start with the decision, not the dashboard",
    phase: "Planning",
    project: "Food security monitoring platform",
    excerpt:
      "Why we begin data platform projects by listing the decisions users must make, then work backwards to indicators, data and screens.",
    date: "2026-09-20",
    image: "/projects/keksap.webp",
    takeaways: [
      "List the 5 to 10 decisions the platform must support before choosing any chart or map.",
      "Map every indicator to a named data owner and an update frequency.",
      "Agree on what 'good enough' data quality means up front.",
    ],
    body: [
      "Dashboards are easy to demo and hard to use. In our planning workshops for data platforms, we now begin with a different question: what decisions will someone make with this, and how often?",
      "For a monitoring platform used by planners, that meant writing down decisions such as where to target support or which areas need follow-up, then tracing each back to the indicators that inform it. Anything that did not feed a decision was cut from the first release.",
      "The second step is ownership. Every indicator needs someone who supplies the data and a clear update schedule. Platforms rarely fail because of the map; they fail because the numbers go stale.",
      "Finally, we set quality thresholds early, such as what to show when data is missing or late. Making that visible in the interface builds trust instead of hiding gaps.",
    ],
  },
  {
    seed: true,
    slug: "scoping-a-marketplace-mvp",
    title: "Scoping a marketplace MVP: build one side well first",
    phase: "Planning",
    project: "Travel marketplaces",
    excerpt:
      "How we decide what goes into a first release when a product has two sides, travelers and providers, and both need to be convinced.",
    date: "2026-08-30",
    image: "/projects/bidmytrip.webp",
    takeaways: [
      "Pick the side that is hardest to win and design the first release around it.",
      "Replace features with manual processes wherever you can, and automate later.",
      "Define one success metric for the first 90 days.",
    ],
    body: [
      "Marketplaces have a chicken-and-egg problem: travelers want choice, and providers want demand. Trying to polish both sides at once usually delays launch and dilutes the product.",
      "We plan the first release around the harder side to win and keep the other side deliberately simple. Anything that can be handled by a person behind the scenes, such as onboarding or matching, stays manual until the pattern is proven.",
      "We also agree on a single success metric before development starts, for example completed requests or responses per request. It keeps the team honest when new ideas arrive mid-build.",
    ],
  },
  {
    seed: true,
    slug: "keeping-a-field-platform-running",
    title: "Keeping a field-used platform running after launch",
    phase: "Operationalizing",
    project: "Public-sector GIS platform",
    excerpt:
      "What changed once real users depended on the system: handover, training, monitoring and a simple support routine.",
    date: "2026-09-05",
    image: "/about-team.webp",
    takeaways: [
      "Plan training and handover as deliverables, not afterthoughts.",
      "Set up basic monitoring and backups before launch day.",
      "Keep a short, written support routine so nothing depends on one person.",
    ],
    body: [
      "Launch is the start of operations, not the end of the project. Once people in the field depend on a system, small problems such as slow pages or a failed import become real disruptions.",
      "We now treat training and handover as part of the scope: short guides, recorded walkthroughs and a named contact on both sides. Teams adopt a tool faster when they know who to ask.",
      "On the technical side, uptime checks, error alerts and automated backups are set up before launch. They are inexpensive and turn surprises into routine tasks.",
      "Finally, we keep a one-page support routine: how to report an issue, expected response times and how fixes are released. It prevents knowledge from living in a single person's head.",
    ],
  },
  {
    seed: true,
    slug: "from-research-model-to-production",
    title: "From research model to production pipeline",
    phase: "Operationalizing",
    project: "Satellite imagery super-resolution",
    excerpt:
      "Moving a model that works in a notebook into a repeatable pipeline: data versioning, evaluation and monitoring for drift.",
    date: "2026-08-12",
    image: "/projects/SatelliteImagery.webp",
    takeaways: [
      "Version your data and model together so results can be reproduced.",
      "Evaluate on data that looks like production, not only the benchmark.",
      "Monitor inputs and outputs after release; imagery and seasons change.",
    ],
    body: [
      "A model that performs well in a notebook is only the first milestone. Operationalizing it means anyone on the team can re-run the pipeline and get the same result.",
      "We version datasets and models together and record the exact settings used. When a number changes, we can explain why.",
      "Evaluation matters as much as training. We test on imagery that resembles real use: different regions, seasons and sensors, because benchmark scores alone hide the failure cases that users notice first.",
      "After release, we monitor inputs and outputs for drift. Satellite imagery changes with weather and season, so a model that was accurate in one month can quietly degrade in another.",
    ],
  },
];
