const isProd = process.env.NODE_ENV === "production";

// Content Security Policy. Next.js and the JSON-LD blocks use inline scripts/styles,
// so 'unsafe-inline' is required for them; everything else is locked to this origin.
// Dev needs 'unsafe-eval' for hot reload, so the CSP is only enforced in production.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://giscus.app",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://www.google.com https://giscus.app",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  ...(isProd
    ? [
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "Content-Security-Policy", value: csp },
      ]
    : []),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false, // don't advertise the framework
  reactStrictMode: true,
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/learn/experiences/start-with-the-decision-not-the-dashboard", destination: "/learn/experiences", permanent: true },
      { source: "/experiences/start-with-the-decision-not-the-dashboard", destination: "/learn/experiences", permanent: true },
      { source: "/learn/experiences/scoping-a-marketplace-mvp", destination: "/learn/experiences", permanent: true },
      { source: "/experiences/scoping-a-marketplace-mvp", destination: "/learn/experiences", permanent: true },
      { source: "/learn/experiences/keeping-a-field-platform-running", destination: "/learn/experiences", permanent: true },
      { source: "/experiences/keeping-a-field-platform-running", destination: "/learn/experiences", permanent: true },
      { source: "/learn/experiences/from-research-model-to-production", destination: "/learn/experiences", permanent: true },
      { source: "/experiences/from-research-model-to-production", destination: "/learn/experiences", permanent: true },
      { source: "/blogs", destination: "/learn", permanent: true },
      { source: "/blogs/:slug", destination: "/learn", permanent: true },
      { source: "/experiences", destination: "/learn/experiences", permanent: true },
      { source: "/experiences/:slug", destination: "/learn/experiences/:slug", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
