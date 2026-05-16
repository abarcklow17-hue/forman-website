import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  experimental: {
    workerThreads: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
