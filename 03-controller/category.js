const categoryModel = require('../04-model/category.js');

module.exports = {
  getCategoryPage(req, res) {//分类目录
    res.render('admin/categories');
  },
  getPostAddPage(req, res) {//写文章
    res.render('admin/post-add');
  },
  //3.获取分类目录数据
  getAllCategory(req, res) {
    //查询到所有分类目录数据
    categoryModel.getAllCategory(data => {
    // console.log(data)
      let respones = data instanceof Array ? { code: 200, msg: '查询成功', data } : { code: 500, msg: '查询失败' };
      res.send(respones)
    })
  }
}