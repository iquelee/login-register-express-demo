// 引入依赖
const express = require('express')
const path = require('path')
const fs = require('fs')

const user = require('./routes/user')

// 创建服务器
const app = express()

// 添加ejs模板引擎
app.set('view engine', 'ejs')

//解决跨域问题
app.use(require('cors')())

// POST参数接受中间件
app.use( express.urlencoded({extended: false}))

// 加载用户模块
app.use('/user', user)

// 启动服务器
app.listen(3000, () => {
  console.log('http://localhost:3000')
})