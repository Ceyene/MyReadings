const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = process.env.NODE_ENV || "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico",
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "assets/styles/[name].css",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.png|svg|jpg|ico|gif$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name(resourcePath) {
                if (/favicon/.test(resourcePath)) {
                  return "[name].[ext]";
                } else {
                  return "[name].[hash].[ext]";
                }
              },
              publicPath: "images",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  devtool: mode === "development" ? "inline-source-map" : false,
  mode: mode,
};
