const path = require("path");
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: ``,
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  i18n,
  swcMinify: true,
  reactStrictMode: false,
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
