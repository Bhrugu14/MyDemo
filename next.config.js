/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/MyDemo",
  assetPrefix: "/MyDemo/",
};

module.exports = nextConfig;
