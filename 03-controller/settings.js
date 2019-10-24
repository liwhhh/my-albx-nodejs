

module.exports = {
  getNavMenusPage(req, res) {//导航菜单
    res.render('admin/nav-menus');
  },
  getSlidesPage(req, res) {//图片轮播
    res.render('admin/slides');
  },
  getSettingsPage(req, res) {//网站设置
    res.render('admin/settings');
  }
}