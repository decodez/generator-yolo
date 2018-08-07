const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
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
      <%if (jsPreprocessor !== 'none') { %>
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      <% } %>
      
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
    new CopyWebpackPlugin([
      {from:'src/_images',to:'assets/images'},
      {from:'src/_fonts',to:'assets/fonts'}
    ]),
    new ImageminPlugin({ 
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminMozjpeg({
          quality: 70,
          progressive: true
        })
      ]
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:3000/'
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    ),
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