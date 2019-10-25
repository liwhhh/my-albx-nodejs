const express = require('express');//服务器第三方模块
const bodyParser = require('body-parser');//post
const session = require('express-session');//session
const userRouer = require('./02-router/user.js');
const indexRouter = require('./02-router/index.js');
const commentRouter = require('./02-router/comment.js');
const categoryRouter = require('./02-router/category.js');
const postsRouter = require('./02-router/posts.js');
const settingsRouter = require('./02-router/settings.js');

const app = express();
app.listen(8080, () => {//监听
  console.log('http://127.0.0.1:8080');
});

//托管静态资源
app.use('/assets', express.static('assets'));
//注册body-parser的中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({//注册session中间件
  secret: "albx",
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');//设置ejs为默认的模板引擎

//注册多个路由
app.use('/admin/user', userRouer);//login页
app.use('/admin', indexRouter);//index主页

app.use('/admin/category', categoryRouter);//文章的[写文章和分类目录]
app.use('/admin/posts', postsRouter);//文章的[所有文章]
app.use('/admin/comments', commentRouter);//评论
// app.use('/admin/users')
app.use('/admin/settings', settingsRouter);