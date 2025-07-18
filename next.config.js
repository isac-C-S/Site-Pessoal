/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' // Replace with your repository name
    : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' // Replace with your repository name
    : '',
  trailingSlash: true,
};

module.exports = nextConfig;