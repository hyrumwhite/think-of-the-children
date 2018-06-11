var path = require('path');

module.exports = {
  entry: './src/think-of-the-children.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'think-of-the-children.js',
    library: 'ThinkOfTheChildren',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      { test: /\.js$/, include: [/src/], use: ['babel-loader']}
    ]
  }
};
