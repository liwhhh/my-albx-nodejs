const userModel = require('../04-model/user.js');


module.exports = {
  getLoginPage(req, res) {
    res.render('admin/login');//登录页
  },
  //2.ajax请求 用户发送过来的用户名和密码查询数据有没有在返回给浏览器是否成功
  userLogin(req, res) {
    let { email, password } = req.body;
    userModel.getUserEmail(email, r => {
      if (r) {
        if (r.password === password) {//数据库密码==用户输入的密码
          res.send({code:200,msg:'登录成功'})
        } else {
          res.send({ code: 400, msg: '密码有误' });
        }
      } else {
        res.send({ code: 400, msg: '邮箱有误' });
      }
    })
  }
}