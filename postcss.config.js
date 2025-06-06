export default ({ env }) => ({
	plugins: {
		"@tailwindcss/postcss": {},
		cssnano:
			env === "production"
				? {
						preset: ["default", { discardComments: { removeAll: true } }],
					}
				: false,
	},
});