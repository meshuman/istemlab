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
            { label: "Collaborations", href: "/collaborations", desc: "Partner with us on research and projects" },
          ],
        },
        {
          title: "Get to know us",
          links: [
            { label: "Our team", href: "/about#our_team", desc: "The people behind the work" },
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
            { label: "Experiences", href: "/learn/experiences", desc: "Lessons from planning and running projects" },
          ],
        },
        {
          title: "Learning paths",
          wide: true,
          links: [
            { label: "GeoAI: zero to first map", href: "/learn/paths/geoai-from-zero", desc: "GIS basics to a land cover map" },
            { label: "Back to basics", href: "/learn/paths/back-to-basics", desc: "The maths and science behind it all" },
            { label: "RAG: idea to trusted assistant", href: "/learn/paths/rag-to-trusted-assistant", desc: "Build it, then prove it works" },
            { label: "Adopt AI in your organization", href: "/learn/paths/adopt-ai", desc: "Readiness to a measured pilot" },
            { label: "Immersive 3D, VR and AR", href: "/learn/paths/immersive-3d-vr-ar", desc: "Choose the right technology" },
            { label: "Applied maths, told as stories", href: "/learn/paths/applied-maths-stories", desc: "Where and how maths is used" },
            { label: "Tech jargon decoded", href: "/learn/paths/tech-jargon-decoded", desc: "Understand the technologies better" },
            { label: "See all learning paths", href: "/learn/paths", desc: "Compare all 7 paths side by side", cta: true },
          ],
        },
      ],
    },
  },

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
            { label: "Learn with us", href: "/learn", desc: "Free concepts, tutorials and guides" },
          ],
        },
      ],
    },
  },

  { label: "Contact Us", href: "/contact" },
];

/** All links of a mega item, flattened (used by the mobile menu and active-state checks). */
export const megaLinks = (item) => (item.mega ? item.mega.columns.flatMap((c) => c.links) : []);
