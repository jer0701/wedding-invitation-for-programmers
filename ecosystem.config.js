module.exports = {
    apps: [
      {
        name: 'VueApp', // 应用名称
        script: 'npm',
        args: 'run serve', // 启动脚本及参数
        env: {
          HOST: '0.0.0.0', // 启动时监听所有地址
          PORT: 8080
        }
      }
    ]
  }