/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ["wordpress-prod.apps.silver.devops.gov.bc.ca"],
  },
}

module.exports = nextConfig
