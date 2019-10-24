//1.点击按钮注册事件,收集用户信息,发送ajax请求
$('#btn').on('click', function () {
  // 验证邮箱
  let reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;
  let email = $('#email').val();
  if (!reg.test(email)) {
    $('#modelId').modal();//alert在不同的浏览器里的样式是不一样的，而且ie里面奇丑无比，
    // alert('用户名有误');
    return;
  }
  //2.收集数据  // jq里面封装好的收集用户表单数据的方法
  let data = $('.login-wrap').serialize();
  //发送ajax请求数据有没有
  $.ajax({
    type: "post",
    url: "/admin/user/userLogin",
    data,
    success(res) {
      if (res.code === 200) {
        //修改弹出内容
        $('.container-fluid').text('登录成功');
        $('#modelId').modal();
        //就要跳转到主页
        isLogin = true;
      } else {
        $('.container-fluid').text('登录失败');
        $('#modelId').modal();
      }
    }
  });
})

let isLogin = false;
// 点击确定或者是关闭的时候，如果是登录成功了的，需要跳转到主页
$('.modal-footer').on('click', function () {
  if (isLogin) {
    location.href="http://127.0.0.1:8080/admin/index.html"
  }
})