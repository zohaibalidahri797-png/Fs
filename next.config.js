/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for Cloudflare Workers
  output: process.env.BUILD_FOR_WORKERS ? 'standalone' : undefined,
};

module.exports = nextConfig;
