/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vernex-next-js.vercel.app',
        port: '',
        pathname: '/assets/img/**',
      },
    ],
  },
};

module.exports = nextConfig;