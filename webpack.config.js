// module.exports = {
//   entry: './src/app.js',
//   output: {
//     filename: './dist/app.bundle.js'
//   }
// }

const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');

module.exports = {
  entry: APP_DIR + '/app.js',
  output: {
    filname: 'app.bundle.js',
    path: BUILD_DIR
   
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?/,
        //include: APP_DIR,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]

  }
}

// module.exports = config;