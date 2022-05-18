const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.ts"),
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
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "src"),
    port: 9000,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      helper: path.resolve(__dirname, "src/helper"),
      mechanics: path.resolve(__dirname, "src/mechanics"),
      ev: path.resolve(__dirname, "src/events"),
      gui: path.resolve(__dirname, "src/gui"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "EnigmaTs",
      template: "./src/index.html",
    }),
  ],
};
