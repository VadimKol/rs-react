/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  distDir: './dist',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
      },
    ],
  },
};

export default nextConfig;
