
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TSLintPlugin = require('tslint-webpack-plugin')
module.exports = {
  entry: {
    main: './src/app.test.ts',
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
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
  plugins: [
  ]
}