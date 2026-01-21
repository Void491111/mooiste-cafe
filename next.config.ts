import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👇 Tambahin bagian images ini
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;