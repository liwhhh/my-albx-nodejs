const { connection } = require('./sqlhelper.js');//数据库搭建封装

module.exports = {
  //查询user的 用户名
  getUserEmail(email, callback) {
    let sql = `SELECT * FROM users WHERE email='${email}'`;
    connection.query(sql, (err, arr) => {
      err && console.log(err);
      callback(arr[0])
    })
  }
}