import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luxpropertiesinc.ca",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
