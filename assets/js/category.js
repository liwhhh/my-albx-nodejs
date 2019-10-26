$(function () {
  $.ajax({
    type: "get",
    url: "/admin/category/getAllCategory",
    success(res) {
      if (res.code === 200) {
        let html = template('tp', res.data);
        $('tbody').html(html);
      }
    }
  });

  //1.切换显示隐藏
  $('.form-group > .Boxfont').on('click', function () {
    $('.Boxfont > .right').toggle();//切换显示隐藏
  });

  //2.点击右边边框的图标
  $('.right').on('click', '.fa', function () { //
    let classname = $(this).attr('class');//找到当前右边框的class
    $('.coentFont > .fa').attr('class', classname);//让做边框替换成右边框的类
  })

})