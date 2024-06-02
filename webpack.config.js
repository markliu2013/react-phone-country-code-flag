const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // the bundle output path
    filename: 'main.js', // the name of the bundle
    clean: true,
  },
  // import App from './App';
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html' // to import index.html file inside index.js
    }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: '' }]
    })
  ],
  devServer: {
    port: 3037 // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset' // "asset/resource"
      },
      {
        test: /\.svg/,
        type: 'asset/resource'
      }
    ]
  }
};
