import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    RAKUTEN_APP_ID: process.env.NEXT_PUBLIC_RAKUTEN_APP_ID,
  },
}

export default nextConfig
