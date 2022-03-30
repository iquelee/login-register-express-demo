// 引入依赖
const express = require("express")
const fs = require('fs')
const path = require('path')

// 初始化数据
const router = express.Router()

// 声明变量
let userArray = ''

router.get('/register', (req, res) => {
  res.send('等待注册')
})

router.post('/register', (req, res) => {
  // 获取用户参数
  let {username,
      password,
      nickname,
      headerImg= '/public/uploads/default.jpg'} = req.body
  // 验证账号是否存在，存在直接报错
  for (let user of userArray) {
    if (user.username === username ) {
      res.render('', { code: 501, msg: "账号已经被占用" })
      return
    }
  }
  // 创建一个新用户对象
  let user = {username, password, nickname, headerImg}
  // 保存到系统中，并提示注册成功
  userArray.push(user)
  saveData()
  res.render('', { code: 200, msg: "注册成功" })
})

// 读取系统文件
function initData() {
  // 读取系统中的users.json文件
  fs.readFile(path.join(__dirname, '../users.json'), 'utf-8', (err, data) => {
    if (err) {
      // 如果出现错误，表示文件没有读取到；创建文件
      fs.writeFile(path.join(__dirname, '../users.json'), '[]', () => {
        console.log('文件创建成功')
      })
    } else {
      // 如果文件存在，直接写入系统变量内容，将读取到的文件内容转换成对象赋值
      userArray = JSON.parse(data)
    }
  })
}

// 存储数据到文件的函数，在项目中修改了数据时再去调用
function saveData() {
  fs.writeFile(path.join(__dirname, '../users.json'), JSON.stringify(userArray), (err) => {
    console.log('系统数据存储完成')
  })
}

// 调用执行函数
initData()

module.exports = router

