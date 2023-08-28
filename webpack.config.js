const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './server.js', // 入口文件路径
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: 'bundle.js' // 输出文件名
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000, // 与 Koa2 服务器端口一致
      proxy: 'http://localhost:3000', // Koa2 服务器地址
      files: ['views/**/*'], // 监听文件变化并自动刷新
      notify: false
    })
  ]
};
