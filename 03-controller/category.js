

module.exports = {
  getCategoryPage(req, res) {//分类目录
    res.render('admin/categories');
  },
  getPostAddPage(req, res) {//写文章
    res.render('admin/post-add');
  }
}