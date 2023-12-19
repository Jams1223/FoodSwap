/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.shutterstock.com",
      "encrypted-tbn0.gstatic.com",
      "png.pngtree.com",
      "img.freepik.com",
      "e7.pngegg.com",
      "freepngimg.com",
      "www.pngpacks.com",
    ],
  },
};

module.exports = nextConfig;
