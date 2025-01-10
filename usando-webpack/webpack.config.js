const MiniCssExtractPlugiin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		index: "./src/index.js",
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugiin.loader, "css-loader"],
			},
		],
	},
	plugins: [new MiniCssExtractPlugiin()],
};
