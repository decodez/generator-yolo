const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const multiJsonLoader = require('multi-json-loader');
const siteData = multiJsonLoader.loadFiles('./src/_data');


module.exports = {
  entry: "./src/_scripts/index.js",
  mode: "development",
  output: {
    filename: 'assets/scripts/main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
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
        test: /\.s?css/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        use: ['html-loader?attrs=false', {loader: 'pug-html-loader',options: {data: {site: { data: siteData} }}}]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/main.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
      inject: false
    }),

    <% pages.forEach(function(page){ %>
    new HtmlWebpackPlugin({
      filename: '<%= page %>/index.html',
      template: 'src/<%= page %>/index.pug',
      inject: false
    }),
    <% }) %>

    new CopyWebpackPlugin([
      {from:'src/_images',to:'assets/images'},
      {from:'src/_fonts',to:'assets/fonts'}
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    publicPath: '/',
    hot: false,
    inline: true,
    port: 3000
  }
};