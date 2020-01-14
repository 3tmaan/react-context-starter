const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const inputFolder = 'src';
const outputFolder = 'public';

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: path.join(__dirname, inputFolder, 'client.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, outputFolder)
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, outputFolder)
  },
  module: {
    rules: [
      {
        // This is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        // We do not want anything from node_modules to be compiled
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // To enable CSS modules
              modules: true
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: ['file-loader']
      },
    ]
  },
  plugins: [
    // To create the HTML file to be served inside the output folder (public)
    new HtmlWebpackPlugin({
      template: path.join(__dirname, inputFolder, 'index.html')
    })
  ]
};