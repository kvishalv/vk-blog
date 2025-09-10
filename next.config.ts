import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for better SEO (disabled for development)
  // output: 'export',
  // trailingSlash: true,
  
  // Optimize images for better performance
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Enable compression
  compress: true,
};

export default nextConfig;
