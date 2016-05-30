var path = require('path');

module.exports = {
  entry: './src/demo.js',
  module: {
    loaders: [{
      test: /\.js/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'demo_out.js'
  }
}
