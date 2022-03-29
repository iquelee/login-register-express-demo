const express = require("express")
const router = express.Router()

router.get("/register", (req, res) => {
  // 返回register.ejs页面，返回提示消息[200表示成功，msg需要展示的错误信息]
  res.render('register', {code: 200, msg: ""})
})

router.post("/register", (req, res) => {
  // 获取用户参数
  let {username,
      password,
      nickname,
      headerImg= '/public/uploads/default.jpg'} = req.body
  console.log(username, password, nickname, headerImg)
  // TODO 注册过程
  res.render('register', {code: 200, msg: "用户正在注册"})
})

module.exports = router

