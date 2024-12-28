import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // output: 'export', // Use the export mode to generate static files
  // basePath: '/Portfolio-web', // Replace <your-repository-name> with your GitHub repository name
  // assetPrefix: '/Portfolio-web',
};

export default nextConfig;
