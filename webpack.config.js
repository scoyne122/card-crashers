const HtmlWebPackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  // entry: "./src/js/index.js",
  entry: "./src",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin([
        {from:'src/css',to:'css'} 
    ]), 
  ]
};