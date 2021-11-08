const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { config } = require("process");
const isDev = process.env.NODE_ENV === 'development';
console.log('IS DEV', isDev)
const isProd = !isDev;

const optimization = () => {
  const config = {   
  }
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}

module.exports = {

  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
  optimization: optimization(),
  
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "src/assets/icons"),
          to: path.resolve(__dirname, "dist/assets/icons"),
        },
      
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    port: 4200,  
    hot: isDev
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
    ]
  }
}