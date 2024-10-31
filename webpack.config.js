const path = require("path"); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "index.jsx"), 
  output: {
    path: path.join(__dirname, "dist"), 
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      loader: "babel-loader"
    }],
  },
  mode: 'development',
  devServer: {
    port: "8000", 
    hot: true,
    static: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Charts',
      template: './index.html'
    }),
   new webpack.HotModuleReplacementPlugin(),
  ],
};
