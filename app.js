// 引入依赖
const express = require("express")

// 创建服务器
const app = express()

// 添加ejs模板引擎
app.set('view engine', 'ejs')

// 监听测试路径
app.get("/", (req, res) => {
  res.send("yo.")
})

// 启动服务器
app.listen(3000, () => console.log("服务器已经启动...."))