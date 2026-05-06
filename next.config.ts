import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "questk2.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "i1.wp.com",
      },
      {
        protocol: "https",
        hostname: "i2.wp.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/g360-technologiess", destination: "/", permanent: true },
      { source: "/home-duplicate-1317", destination: "/", permanent: true },
      { source: "/cloud-ai-security", destination: "/cloud-ai-securty", permanent: true },
    ];
  },
};

export default nextConfig;
