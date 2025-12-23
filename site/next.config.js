/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|mov|avi|webm)$/i,
      type: "asset/resource"
    });
    return config;
  }
};

module.exports = nextConfig;
