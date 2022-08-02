const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'build.[fullhash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
  })],
  devServer: {
    static: './build',
    client: {
      logging: 'none'
    },
  },
}