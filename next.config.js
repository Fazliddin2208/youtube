/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
      images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname:'localhost',
          },
          {
            protocol: 'https',
            hostname:'i.ytimg.com',
          },
        ],
        minimumCacheTTL: 1500000
      },
    }
    
    module.exports = nextConfig 