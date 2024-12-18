/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
            search: '',
          },
        ],
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
