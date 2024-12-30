import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/products',
        destination: 'https://snug-backend.onrender.com/products',
      },
    ];
  },
};

export default nextConfig;
