
// const path = require('path')    //node的path模块
// const nodeExternals = require('webpack-node-externals')

// const clientConfig  = {
//   mode: 'development',
//   entry: {
//     client: './src/client-ssr',
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: "[name].js",
//   },
//   module: {
//     rules: [
//       { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
//     ]
//  }
// }

// const serverConfig = {
//     target:'node',
//     mode:'development',           //开发模式
//     entry:'./server.js',             //入口
//     output: {                     //打包出口
//         filename:'bundle.js',     //打包后的文件名
//         path:path.resolve(__dirname,'build'),    //存放到根目录的build文件夹
//     },
//     externals: [nodeExternals()],  //保持node中require的引用方式
//     module: {
//         rules: [{                  //打包规则
//            test:   /\.js?$/,       //对所有js文件进行打包
//            loader:'babel-loader',  //使用babel-loader进行打包
//            exclude: /node_modules/,//不打包node_modules中的js文件
//        }]
//     }
// }

const clientConfig = require('./webpack.client.js')
const serverConfig = require('./webpack.server.js')

module.exports = [serverConfig, clientConfig]