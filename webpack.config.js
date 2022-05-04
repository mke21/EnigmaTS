const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "enigma.js",
		library: "enigma",
		libraryTarget: "umd",
	},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			title: "jWindows",
			template: "./src/index.html",
		}),
	],
};