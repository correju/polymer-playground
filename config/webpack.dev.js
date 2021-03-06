const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TSLintPlugin = require('tslint-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  name: 'clientProd',
  entry: {
    main: './src/app.ts',
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    disableHostCheck: true,
    historyApiFallback: true
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
    }
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
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true
    // })
  ]
}