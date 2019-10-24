const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'albx_38'
});

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