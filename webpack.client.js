
const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.js')

const clientConfig = {
  mode: 'development',
  entry: {
    client: './client/client-ssr',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].js",
  },
  // devtool: 'source-map'
}

module.exports = merge(config,clientConfig)