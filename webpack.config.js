const path = require('path');

// Only .js will be rendered with babel-loader and .s?css file will be rendered scss and css with style loader 
//and css loader, and sass-loader with node will convert scss into css file

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, // Only .js will be rendered with babel-loader
      exclude: /node_modules/
    },
    {
      // .s?css file will be rendered scss and css with style loader, css loader and sass-loader, with node will convert scss into css file

      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
