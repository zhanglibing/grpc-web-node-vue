# grpc-web-node-vue  demo
### 项目描述
- grpc-web
- node做服务器
- vue客户端

### 安装
- 下载protobuf的编译器
   - 地址 https://repo1.maven.org/maven2/com/google/protobuf/protoc/3.6.1/
- 配置环境变量
- proto生成代码
   - 生成_pb.js
      -  protoc --js_out=import_style=commonjs,binary:. server.proto  
   - 生成_grpc_web_pb.js  
      protoc --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. serve.proto
      -如果生成失败则 全局安装 npm i zaucy-protoc-gen-grpc-web -g
       重新执行上面的命令
       
### 启动项目

```
npm install  （下载依赖）
```

### Compiles and hot-reloads for development
```
npm run serve
```

### 启动node服务器

- 启动数据库
- cd到nodeServer (启动node服务器) 
```
  npm install  （下载依赖）
  node server.js
  
```

