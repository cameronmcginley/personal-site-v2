const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.shields.io"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = withImages(nextConfig);
