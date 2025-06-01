import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {

	// Plugins
	eleventyConfig.addPlugin(eleventyNavigationPlugin)
	
	// Passthrough
	eleventyConfig.addPassthroughCopy({ "src/assets": "." });

	return {
		dir: {
			input: "src/pages",
			output: "public",
			includes: "../includes",
			layouts: "../layouts",
			data: "../data",
		},
	};
};