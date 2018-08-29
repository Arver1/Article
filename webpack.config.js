const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const conf = {
  context: PATHS.source,
  entry: './index.js',

  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: PATHS.source,
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          ~process.argv.indexOf('development') ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
    new MiniCssExtractPlugin(),
    new OptimizeCSSAssetsPlugin({})
  ]
};

module.exports = (env, argv) => {
  conf.devtool = argv.mode === 'development' ? 'source-map' : false; // source-map was choosen because css-loader source-map don't work with eval
  return conf;
};
