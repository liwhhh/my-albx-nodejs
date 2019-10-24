const express = require('express');//服务器第三方模块
const bodyParser = require('body-parser');//post
const session = require('express-session');//session
const userRouer = require('./02-router/user.js');
const indexRouter = require('./02-router/index.js');

const app = express();
app.listen(8080, () => {//监听
  console.log('http://127.0.0.1:8080');
});

//托管静态资源
app.use('/assets', express.static('assets'));
//注册body-parser的中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({//注册session中间件
  secret: "ag",
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');//设置ejs为默认的模板引擎

//注册多个路由
app.use('/admin/user', userRouer);//login页
app.use('/admin', indexRouter);//index主页