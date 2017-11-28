const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src", "index.jsx")
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: '#source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {"modules": false}],
            "react",
          ],
          plugins: [
            "react-hot-loader/babel"
          ]
        }
      },
      {
        test: /\.css$/,
        exclude: resolve(__dirname, "src/components/styles/global.css"),
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              }
            }
          )
        )
      },
      {
        test: /\.css$/,
        include: resolve(__dirname, "src/components/styles/global.css"),
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: {
                loader: 'css-loader',
                options: {
                  modules: false,
                  sourceMap: true,
                  importLoaders: 2,
                }
              }
            }
          )
        )
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template:'template.ejs',
      appMountId: 'react-app-root',
      title: 'React Help Queue',
      filename: resolve(__dirname, "build", "index.html"),
    }),
  ],
};
