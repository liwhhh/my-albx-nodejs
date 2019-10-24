
module.exports = {
  getIndexPage(req, res) {
    if (req.session.isLogin) {
      //ejs渲染 静态页面
    res.render('admin/index');
    } else {
      //强制用户到登录页登录
      res.send('<script>location.href="http://127.0.0.1:8080/admin/user/login.html"</script>')
    }
  }
}