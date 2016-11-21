# mock_server

> 接口管理平台后端

技术栈：koa2 + mongodb。

项目有两个独立的server

- 负责提供平台接口的server，地址是`localhost：4001`
- 负责提供测试api的server，地址是`localhost:8090`

## 命令

```bash
# 启动服务, localhost:4001
npm run start

# 启动测试api服务, localhost: 8090
npm run start_mock

# 线上部署服务
npm run pm2

# 线上部署测试api服务
npm run pm2_mock
```

