/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/portfolio-site',
  assetPrefix: '/portfolio-site',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
