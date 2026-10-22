import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [400, 640, 828, 1080, 1280, 1600],
    qualities: [70, 80],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // 301s from the old WordPress site so existing Google rankings and links carry over
  async redirects() {
    return [
      { source: "/contacts", destination: "/contact", permanent: true },
      { source: "/contacts/:path*", destination: "/contact", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/our-team", destination: "/about", permanent: true },
      { source: "/our-values", destination: "/about", permanent: true },
      { source: "/our-equipment", destination: "/about", permanent: true },
      { source: "/roadworthy", destination: "/roadworthy-certificate", permanent: true },
      { source: "/rwc", destination: "/roadworthy-certificate", permanent: true },
      { source: "/services/:path*", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
