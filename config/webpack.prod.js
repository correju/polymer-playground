const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
module.exports = {
  name: 'clientDev',
  entry: {
    main: './src/app.ts',
  },
  mode: 'production',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
            {loader: "ts-loader"}
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['text-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 2
        }
      }
    },
    minimizer: [new TerserPlugin({
      extractComments: 'all'
    })]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html',
      filename: 'index.html'
    }),
    new TSLintPlugin({
        files: ['./src/**/*.ts']
    }),
    new CopressionPlugin({
      algorithm: 'gzip'
    }),
    new BrotliPlugin(),
  ]
};
