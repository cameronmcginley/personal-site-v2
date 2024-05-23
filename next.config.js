const withImages = require('next-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.shields.io'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // any other configurations you want to include
};

module.exports = withImages(nextConfig);
