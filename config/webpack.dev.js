const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TSLintPlugin = require('tslint-webpack-plugin')
module.exports = {
  entry: {
    main: './src/app.ts',
  },
  mode: 'development',
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
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html',
      filename: 'index.html'
    }),
      new TSLintPlugin({
          files: ['./src/**/*.ts']
      })
  ]
}