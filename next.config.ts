import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Optimize for production
  poweredByHeader: false,
  // Enable standalone output for Docker deployment
  output: 'standalone',
};

export default withBundleAnalyzer(nextConfig);
