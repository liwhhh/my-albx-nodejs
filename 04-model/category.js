const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'albx_38'
});

module.exports = {
  //1.查询所有分类目录数据-返回给浏览器
  getAllCategory(callback) {
    let sql = `select * from categories`;
    connection.query(sql, (err, arr) => {
      err && console.log(err);
      callback(arr);
    })
  }
}