/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Enable image optimization
  images: {
    domains: ['*'],
    // Add any specific image domains you'll use
  },
}

module.exports = nextConfig
