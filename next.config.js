const WebpackBar = require("webpackbar");
const bundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
const withPlugins = require("next-compose-plugins");

const optimizedImages = require("next-optimized-images");
const nextConfig = {
	poweredByHeader: false,
};
module.exports = withPlugins([[optimizedImages], [bundleAnalyzer]], nextConfig);
