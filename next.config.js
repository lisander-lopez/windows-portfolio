const WebpackBar = require("webpackbar");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
	webpack: (config) => {
		config.plugins.push(
			new WebpackBar({
				fancy: true,
				profile: true,
				basic: false,
			})
		);

		return config;
	},
});
