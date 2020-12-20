const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/assets/js/index.js",
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],
  module : {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "img"
          }
        }
      }
    ]
  }
}