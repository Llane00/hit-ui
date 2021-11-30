const base = require('./webpack.config')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
  mode: 'production',
  entry: {
    example: path.join(__dirname, './lib/example.tsx')
  },
  output: {
    path: path.join(__dirname, 'doc')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      title: 'Hit-UI'
    })
  ]
})