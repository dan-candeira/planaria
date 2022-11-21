module.exports = (config) => {
	// Pass through fonts and images
	// config.addPassthroughCopy('./src/fonts');
	// config.addPassthroughCopy('./src/images');
	// config.addPassthroughCopy('./src/favicon.ico');

	return {
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
