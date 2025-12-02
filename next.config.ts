import path from 'path'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, '..'),
  },
  basePath: process.env.PAGES_BASE_PATH,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig
