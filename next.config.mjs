/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
        protocol: "https",
      },
      {
        hostname: "img.clerk.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
