'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '~src': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015", "stage-0", "react"]
      }
    }, {
      test: /\.jpe?g$|\.gif$|\.png$/i,
      exclude: /node_modules/,
      loaders: [
           'file?hash=sha512&digest=hex&name=[hash].[ext]',
           'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
       ]
    },{
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
    }, {
        test: /\.scss$/,
        // we extract the styles into their own .css file instead of having
        // them inside the js.
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass')
    }, {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
        test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
        loader: 'file'
    }]
  },
  externals: [
      {
        'Config': JSON.stringify(process.env.ENV === 'production' ? {
          serverUrl: process.env.serverUrl
        } : {
          serverUrl: "https://cfassignment.herokuapp.com",
          name: "vlad"
        })
    }],
  postcss: [
    require('autoprefixer')
  ]
};
