const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    }, {
      test: /\.sass$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    }, {
      test: /\.(jpeg|png|jpg|svg|gif)$/i,
      loader: "file-loader",
      options: {
        name: "[name].[hash:6].[ext]",
        outputPath: "images",
        publicPath: "images",
        emitFile: true,
        esModule: false,
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
}
