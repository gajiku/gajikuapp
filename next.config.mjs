/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['./src'],
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        // Optional: you can leave 'port' and 'pathname' empty 
        // to allow all images from this host
      },
    ],
  },
};

export default nextConfig;
