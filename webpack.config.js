const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    hitui: path.join(__dirname, './lib/index.tsx')
  },
  output: {
    path: path.join(__dirname, './dist/lib'),
    library: 'HitUI',
    libraryTarget: 'umd', //umd统一模块定义, commonjs NodeJs规范module.export, amd浏览器规范define(functionx(){})
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hit-ui',
      template: 'index.html'
    })
  ]
}