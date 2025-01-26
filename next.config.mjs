/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      type: "asset/resource",
    });
    return config;
  },
  // Ensure images are handled correctly in static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
