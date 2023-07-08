/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
};

module.exports = {
  images: {
    domains: ["images.unsplash.com", "i.pinimg.com"],
  },
};
