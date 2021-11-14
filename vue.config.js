module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    // 代理请求（内部会开启一个代理服务器，帮我们去请求接口数据）
    // proxy: {
    //   '/': {
    //     target: 'http://127.0.0.1:8888', // 目标地址
    //     ws: true, // 针对websocket
    //     changeOrigin: true // 代理时会保留主机头的来源
    //   }
    // }
  }
}
