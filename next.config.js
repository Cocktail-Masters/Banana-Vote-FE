const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: ``,
  },
  experimental: {
    // appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["korean"] } },
    ],
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.discordapp.com",
      "search.pstatic.net",
      "dummyimage.com",
      "cdn.pixabay.com",
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "http://localhost:8000/api/v1/:path*", // The :path parameter isn't used here so will be automatically passed in the query
      },
    ];
  },
};

module.exports = nextConfig;

// const runtimeCaching = require("next-pwa/cache");

// const withPWA = require("next-pwa")({
// 	runtimeCaching,
// 	buildExcludes: [/middleware-manifest\.json$/],
// 	disable: process.env.NODE_ENV === "development" ? true : false,
// 	disableDevLogs: true,
// 	dest: "public",
// 	mode: "production",
// });
