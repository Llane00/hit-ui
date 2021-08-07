module.export = {
  //入口
  entry: {
    index: './lib/index.tsx'
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