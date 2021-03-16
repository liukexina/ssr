const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.js')

const serverConfig = {
  target:'node',
  mode:'development',           //开发模式
  entry:'./server/index.js',             //入口
  output: {                     //打包出口
      filename:'bundle.js',     //打包后的文件名
      path:path.resolve(__dirname,'build'),    //存放到根目录的build文件夹
  },
  externals: [nodeExternals()],  //保持node中require的引用方式
  // devtool: 'source-map'
}

module.exports = merge(config,serverConfig)