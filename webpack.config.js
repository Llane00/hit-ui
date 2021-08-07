const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    hit: path.join(__dirname, './lib/index.tsx')
  },
  output: {
    path: path.join(__dirname, './dist/lib'),
    library: 'HitUI',
    libraryTarget: 'umd', //umd统一模块定义, CommonJs NodeJs规范module.export, amd浏览器规范define(functionx(){})
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader'
      },
    ]
  }
}