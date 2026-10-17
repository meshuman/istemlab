// Navigation structure for the header (desktop mega menu + mobile menu).
// Kept as plain data with no heavy imports so it stays small in the browser bundle.
//
// An item is one of:
//   { label, href }                         plain link
//   { label, mega: { columns, feature } }   mega menu (opens a full-width panel)
//   add `href` to a mega item to make the top label itself a link (e.g. Services)

export const nav = [
  { label: "Home", href: "/", desktopFrom: "xl" },

  {
    label: "Company",
    mega: {
      columns: [
        {
          title: "Company",
          links: [
            { label: "About Us", href: "/about", desc: "Who we are and what we stand for" },
            { label: "Our Work", href: "/work", desc: "Case studies and client websites" },
            { label: "Research", href: "/research", desc: "GeoAI and spatial intelligence" },
            { label: "Experiences", href: "/experiences", desc: "Lessons from planning and running projects" },
          ],
        },
        {
          title: "Get to know us",
          links: [
            { label: "Our team", href: "/about#our_team", desc: "The people behind the work" },
            { label: "Partners", href: "/collaborations", desc: "Organizations we work with" },
            { label: "Contact", href: "/contact", desc: "Talk to us about your project" },
          ],
        },
      ],
    },
  },

  {
    label: "Services",
    href: "/services",
    mega: {
      columns: [
        {
          title: "What we do",
          links: [
            { label: "GEO-AI", href: "/services#geo-ai", desc: "Satellite analysis and predictive models" },
            { label: "AI Strategy & Training", href: "/services#ai-strategy-development", desc: "Embed AI in your organization" },
            { label: "Data & AI Systems", href: "/services#data-systems-ai-systems", desc: "RAG assistants and autonomous agents" },
          ],
        },
        {
          title: "And also",
          links: [
            { label: "3D, VR & Mixed Reality", href: "/services#3d-vr-mixed-reality", desc: "Immersive training and visualization" },
            { label: "Business Incubation", href: "/services#business-incubation", desc: "From idea to launch" },
            { label: "All services", href: "/services", desc: "Compare and combine" },
          ],
        },
      ],
    },
  },

  {
    label: "Learn",
    match: ["/learn"],
    mega: {
      columns: [
        {
          title: "Browse",
          links: [
            { label: "Learn hub", href: "/learn", desc: "Start here" },
            { label: "Concepts", href: "/learn/concepts", desc: "Plain-language explainers" },
            { label: "Tutorials", href: "/learn/tutorials", desc: "Hands-on, step-by-step" },
            { label: "Guides", href: "/learn/guides", desc: "Checklists and frameworks" },
          ],
        },
        {
          title: "Learning paths",
          links: [
            { label: "GeoAI foundations", href: "/learn/concepts/geoai-in-plain-language", desc: "From concepts to a first map" },
            { label: "Build with RAG and agents", href: "/learn/concepts/rag-explained", desc: "Ideas, then a working pipeline" },
            { label: "Adopt AI in your organization", href: "/learn/guides/ai-readiness-checklist", desc: "Readiness to first project" },
          ],
        },
      ],
    },
  },

  { label: "Collaborations", href: "/collaborations" },

  {
    label: "Join us",
    match: ["/careers", "/advisor"],
    mega: {
      columns: [
        {
          title: "Join us",
          links: [
            { label: "Careers", href: "/careers", desc: "Open roles in Nepal and remote" },
            { label: "Advisor", href: "/advisor", desc: "Mentor and guide our team" },
          ],
        },
        {
          title: "Life at I.STEM Lab",
          links: [
            { label: "Meet the team", href: "/about#our_team", desc: "Who you would work with" },
            { label: "Experiences", href: "/experiences", desc: "How we plan and run projects" },
          ],
        },
      ],
    },
  },

  { label: "Contact Us", href: "/contact" },
];

/** All links of a mega item, flattened (used by the mobile menu and active-state checks). */
export const megaLinks = (item) => (item.mega ? item.mega.columns.flatMap((c) => c.links) : []);
