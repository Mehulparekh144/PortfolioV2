/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lenis'],
  images: {
    domains: [
      "api.microlink.io",
    ],
  },
}

module.exports = nextConfig
