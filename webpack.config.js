const path = require('path');

module.exports = {
  entry: {
    hitui: path.join(__dirname, './lib/example.tsx')
  },
  output: {
    path: path.join(__dirname, './dist/lib'),
    library: 'HitUI',
    libraryTarget: 'umd', //umd统一模块定义, commonjs NodeJs规范module.export, amd浏览器规范define(functionx(){})
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [{
        test: /\.(t|j)sx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader'
      }
    ]
  }
}